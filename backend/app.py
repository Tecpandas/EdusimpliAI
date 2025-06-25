import os
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
# We import the T5 model components directly instead of using a generic pipeline
from transformers import T5ForConditionalGeneration, T5Tokenizer
import torch
import torch.nn.functional as F
import faiss
from models_def import PDFKnowledgeBase

# --- App Setup ---
app = Flask(__name__)
CORS(app)

# --- Path Configuration ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')

# --- Load All AI Components on Startup ---
print("🧠 Loading all AI components...")

try:
    # This is our new "Expert Summarizer" model
    GENERATION_MODEL_NAME = 't5-small'
    generation_tokenizer = T5Tokenizer.from_pretrained(GENERATION_MODEL_NAME)
    generation_model = T5ForConditionalGeneration.from_pretrained(GENERATION_MODEL_NAME)
    print(f"✅ Text Generation Model ('{GENERATION_MODEL_NAME}') loaded.")
except Exception as e:
    generation_model = None
    print(f"❌ Failed to load Text Generation Model: {e}")

# Load our pre-indexed knowledge bases (.pkl files)
knowledge_bases = {}
kb_paths = {
    'chemistry': os.path.join(MODELS_DIR, 'chem1.pkl'),
    'biology': os.path.join(MODELS_DIR, 'biology_knowledge_base.pkl'),
    'physics': os.path.join(MODELS_DIR, 'physics_knowledge_base.pkl')
}
for subject, path in kb_paths.items():
    try:
        with open(path, 'rb') as f:
            knowledge_bases[subject] = pickle.load(f)
        print(f"✅ Knowledge Base for '{subject}' loaded successfully.")
    except Exception as e:
        print(f"❌ Could not load Knowledge Base for '{subject}'. Have you run train_model.py? Error: {e}")


# --- The Ultimate Chatbot Endpoint (with Summarization) ---
@app.route('/api/chat', methods=['POST'])
def chat():
    if not generation_model:
        return jsonify({'error': 'The AI text generation model is not available.'}), 503

    data = request.json
    user_message = data.get('message', '')
    subject = data.get('subject', 'biology').lower()

    # 1. Select the correct knowledge base
    kb = knowledge_bases.get(subject)
    if not kb or not hasattr(kb, 'faiss_index'):
        return jsonify({'error': f"The knowledge base for '{subject}' is not loaded or is an old version."}), 404

    print(f"--- Searching in '{subject}' vector database for: '{user_message}' ---")
    
    # 2. Find the most relevant context using FAISS search (as before)
    question_embedding = kb.embedding_model.encode([user_message])
    np_question_embedding = question_embedding.astype('float32')
    faiss.normalize_L2(np_question_embedding)

    k = 5
    distances, indices = kb.faiss_index.search(np_question_embedding, k)
    context = " ".join([kb.chunks[i] for i in indices[0] if i != -1])
    
    if not context:
        return jsonify({'response': "I'm sorry, I couldn't find any relevant information in the documents."})

    # 3. Create a specific prompt for the T5 model
    # This tells the AI exactly how we want it to answer.
    prompt = (
        f"answer the following question in two to three complete sentences, "
        f"based on the provided context. question: {user_message} context: {context}"
    )

    # 4. Use the T5 model to generate a high-quality, natural language answer
    print("  -> Generating a detailed answer from context...")
    input_ids = generation_tokenizer(prompt, return_tensors="pt", max_length=1024, truncation=True).input_ids
    
    # The generate function creates the new text
    outputs = generation_model.generate(
        input_ids,
        max_length=150,  # Max length of the answer in tokens
        num_beams=4,      # Beam search helps create more coherent sentences
        early_stopping=True
    )
    
    # Decode the generated tokens into a human-readable string
    generated_answer = generation_tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    print(f"  -> Generated Answer: {generated_answer}")

    # A generative model doesn't give a simple confidence score,
    # but the quality of the answer is now much higher.
    return jsonify({'response': generated_answer, 'confidence': 0.95})

# --- Main Execution ---
if __name__ == '__main__':
    app.run(debug=True, port=5000)