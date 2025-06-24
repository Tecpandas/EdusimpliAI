import os
import pickle
import pandas as pd # <-- Required for reading CSV files
from flask import Flask, request, jsonify, g
from flask_cors import CORS
from transformers import pipeline
import torch
import torch.nn.functional as F

# Import the class definition for our knowledge base
from models_def import PDFKnowledgeBase

# --- App Setup ---
app = Flask(__name__)
CORS(app)

# --- Path Configuration ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')
# This is the path to your CSV files for the fallback system
TRAINING_DATA_DIR = os.path.join(BASE_DIR, 'training_data')

# --- Load Pre-built Knowledge Bases and AI Models ---
print("🧠 Loading pre-built knowledge bases and AI models...")

try:
    qa_pipeline = pipeline('question-answering', model='distilbert-base-cased-distilled-squad')
    print("✅ QA Pipeline loaded.")
except Exception as e:
    qa_pipeline = None
    print(f"❌ Failed to load QA Pipeline: {e}")

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


# --- The Final, High-Accuracy Chatbot Endpoint with CSV Fallback ---
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    subject = data.get('subject', 'biology').lower()

    if not user_message:
        return jsonify({'error': 'No message provided.'}), 400

    # --- Step 1: Search the PDF Knowledge Base (Primary Search) ---
    pdf_answer = None
    pdf_confidence = 0.0
    
    if qa_pipeline:
        kb = knowledge_bases.get(subject)
        if kb and hasattr(kb, 'embedding_model'):
            print(f"--- (1) Searching in '{subject}' PDF knowledge base for: '{user_message}' ---")
            
            question_embedding = kb.embedding_model.encode(user_message, convert_to_tensor=True)
            
            if kb.chunk_embeddings is not None and len(kb.chunk_embeddings) > 0:
                cos_scores = F.cosine_similarity(question_embedding.unsqueeze(0), kb.chunk_embeddings)[0]
                num_scores = cos_scores.numel()
                k = min(10, num_scores)
                
                context = ""
                if k > 0:
                    top_results = torch.topk(cos_scores, k=k)
                    indices_tensor = top_results.indices
                    if indices_tensor.dim() == 0:
                        indices = [indices_tensor.item()]
                    else:
                        indices = indices_tensor.tolist()
                    context = " ".join([kb.chunks[i] for i in indices])
                
                if context:
                    result = qa_pipeline(question=user_message, context=context)
                    pdf_answer = result['answer']
                    pdf_confidence = result['score']
                    print(f"  -> PDF search found answer with confidence: {pdf_confidence:.4f}")

    # --- Step 2: Check Confidence and Decide ---
    # We set a high threshold. We only trust the PDF if it's very confident.
    confidence_threshold = 0.50
    if pdf_confidence >= confidence_threshold:
        print("  -> Confidence is high. Returning answer from PDF.")
        return jsonify({'response': pdf_answer, 'confidence': pdf_confidence})

    # --- Step 3: If confidence is LOW, search the CSV file (Secondary Search) ---
    print(f"  -> PDF confidence is low (<{confidence_threshold}). Checking CSV fallback...")
    
    csv_path = os.path.join(TRAINING_DATA_DIR, f"{subject}_data.csv")
    try:
        df = pd.read_csv(csv_path)
        # A simple but effective search in the 'question' column of the CSV
        for index, row in df.iterrows():
            # Check if all words from the user's message are in the CSV question
            # This makes the search more flexible
            question_words = user_message.lower().split()
            csv_question_words = str(row['question']).lower()
            if all(word in csv_question_words for word in question_words):
                print(f"  -> Found a high-quality fallback answer in CSV for: '{row['question']}'")
                return jsonify({'response': row['answer'], 'confidence': 0.99}) # High confidence for a direct CSV match
    except FileNotFoundError:
        print(f"  -> Warning: Fallback CSV file not found at {csv_path}")
    except Exception as e:
        print(f"  -> Error reading fallback CSV: {e}")

    # --- Step 4: If no match in either PDF or CSV, return the "not confident" message ---
    print("  -> No high-confidence answer found in PDF or CSV fallback.")
    return jsonify({'response': "I'm sorry, I couldn't find a confident answer in the provided documents. Please try rephrasing your question."})

# --- Main Execution ---
if __name__ == '__main__':
    # No need to run init_db() unless you add the user profile routes back
    app.run(debug=True, port=5000)