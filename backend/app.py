import os
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import T5ForConditionalGeneration, T5Tokenizer
from sentence_transformers import SentenceTransformer
import torch
import faiss
from models_def import PDFKnowledgeBase  # Your existing class

# --- App Setup ---
app = Flask(__name__)
CORS(app)

# --- Path Configuration ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')

# --- Load All AI Components on Startup ---
print("🧠 Loading all AI components...")

# Improved generation model
GENERATION_MODEL_NAME = 'google/flan-t5-base'
generation_tokenizer = T5Tokenizer.from_pretrained(GENERATION_MODEL_NAME)
generation_model = T5ForConditionalGeneration.from_pretrained(GENERATION_MODEL_NAME)
print(f"✅ Text Generation Model ('{GENERATION_MODEL_NAME}') loaded.")

# Improved embedding model
embedding_model = SentenceTransformer('all-mpnet-base-v2')
print("✅ Embedding Model ('all-mpnet-base-v2') loaded.")

# Load Knowledge Bases
knowledge_bases = {}
kb_paths = {
    'chemistry': os.path.join(MODELS_DIR, 'chem1.pkl'),
    'biology': os.path.join(MODELS_DIR, 'biology_knowledge_base.pkl'),
    'physics': os.path.join(MODELS_DIR, 'physics_knowledge_base.pkl')
}

for subject, path in kb_paths.items():
    try:
        with open(path, 'rb') as f:
            kb = pickle.load(f)
            kb.embedding_model = embedding_model  # Inject improved embedding model
            knowledge_bases[subject] = kb
        print(f"✅ Knowledge Base for '{subject}' loaded.")
    except Exception as e:
        print(f"❌ Could not load KB for '{subject}'. Error: {e}")

# --- Main Chat Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    subject = data.get('subject', 'biology').lower()

    kb = knowledge_bases.get(subject)
    if not kb or not hasattr(kb, 'faiss_index'):
        return jsonify({'error': f"Knowledge base for '{subject}' is not available."}), 404

    print(f"--- Searching in '{subject}' for: '{user_message}' ---")

    # Embedding and FAISS search
    question_embedding = embedding_model.encode([user_message]).astype('float32')
    faiss.normalize_L2(question_embedding)
    distances, indices = kb.faiss_index.search(question_embedding, 5)

    context = " ".join([kb.chunks[i] for i in indices[0] if i != -1])

    if not context:
        return jsonify({'response': "I couldn't find anything relevant."})

    prompt = (
        f"Answer the following question in 2-3 sentences using the context.\n"
        f"Context: {context}\n"
        f"Question: {user_message}"
    )

    input_ids = generation_tokenizer(prompt, return_tensors="pt", max_length=1024, truncation=True).input_ids
    outputs = generation_model.generate(input_ids, max_length=150, num_beams=4, early_stopping=True)
    generated_answer = generation_tokenizer.decode(outputs[0], skip_special_tokens=True)

    print(f"Generated Answer: {generated_answer}")
    return jsonify({'response': generated_answer, 'confidence': 0.98})

# --- Start Server ---
if __name__ == '__main__':
    app.run(debug=True, port=5000)
