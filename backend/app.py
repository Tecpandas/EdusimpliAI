import os
import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import faiss
from models_def import PDFKnowledgeBase
import logging

# --- App Setup ---
app = Flask(__name__)
CORS(app)

# --- Logging Setup ---
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# --- Path Configuration ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')

# --- API Keys (use environment variables for security) ---
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')

if not OPENAI_API_KEY:
    logger.warning('OpenAI API key not set. Set OPENAI_API_KEY in your environment.')
if not ANTHROPIC_API_KEY:
    logger.warning('Anthropic API key not set. Set ANTHROPIC_API_KEY in your environment.')

# --- Load All AI Components on Startup ---
logger.info("🧠 Loading all AI components...")

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
        logger.info(f"✅ Knowledge Base for '{subject}' loaded successfully.")
    except Exception as e:
        logger.error(f"❌ Could not load Knowledge Base for '{subject}'. Have you run train_model.py? Error: {e}")

# --- LLM API Call Functions ---
def call_openai_gpt4(context, question):
    url = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    messages = [
        {"role": "system", "content": "You are an expert Teaching Assistant. Answer the user's question based strictly on the provided context. If the answer is not in the context, say so."},
        {"role": "user", "content": f"CONTEXT:\n---\n{context}\n---\n\nQUESTION: {question}\n\nANSWER:"}
    ]
    data = {
        "model": "gpt-4",
        "messages": messages,
        "max_tokens": 512,
        "temperature": 0.7
    }
    try:
        response = requests.post(url, headers=headers, json=data, timeout=60)
        response.raise_for_status()
        result = response.json()
        return result['choices'][0]['message']['content'].strip()
    except Exception as e:
        logger.error(f"OpenAI API error: {e}")
        return "I'm sorry, I couldn't get a valid response from GPT-4."

def call_claude_sonnet(context, question):
    url = "https://api.anthropic.com/v1/messages"
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    prompt = (
        "You are an expert Teaching Assistant. Answer the user's question based strictly on the provided context. "
        "If the answer is not in the context, say so.\n\n"
        f"CONTEXT:\n---\n{context}\n---\n\nQUESTION: {question}\n\nANSWER:"
    )
    data = {
        "model": "claude-3-sonnet-20240229",
        "max_tokens": 512,
        "temperature": 0.7,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }
    try:
        response = requests.post(url, headers=headers, json=data, timeout=60)
        response.raise_for_status()
        result = response.json()
        return result['content'][0]['text'].strip() if 'content' in result and result['content'] else "No answer returned."
    except Exception as e:
        logger.error(f"Anthropic API error: {e}")
        return "I'm sorry, I couldn't get a valid response from Claude-3 Sonnet."

@app.route('/api/chat', methods=['POST'])
def chat():
    logger.info("Received a new chat request.")
    data = request.json
    user_message = data.get('message', '')
    subject = data.get('subject', 'biology').lower()
    model = data.get('model', 'gpt-4')  # Default to GPT-4
    logger.info(f"User message: {user_message} | Subject: {subject} | Model: {model}")

    kb = knowledge_bases.get(subject)
    if not kb or not hasattr(kb, 'faiss_index'):
        logger.error(f"The knowledge base for '{subject}' is not loaded or is an old version.")
        return jsonify({'error': f"The knowledge base for '{subject}' is not loaded or is an old version."}), 404

    logger.info(f"--- Searching in '{subject}' vector database for: '{user_message}' ---")
    try:
        question_embedding = kb.embedding_model.encode([user_message])
        np_question_embedding = np.array(question_embedding).astype('float32')
        k = 15
        distances, indices = kb.faiss_index.search(np_question_embedding, k)
        logger.info(f"FAISS distances: {distances}")
        logger.info(f"FAISS indices: {indices}")
        relevance_threshold = 1.7
        relevant_indices = indices[0][distances[0] < relevance_threshold]
        logger.info(f"Relevant indices after threshold: {relevant_indices}")
        if len(relevant_indices) == 0:
            logger.warning("No relevant chunks found under threshold. Using top-k chunks as fallback.")
            relevant_indices = indices[0][:5]
        context_chunks = [kb.chunks[i] for i in relevant_indices if i != -1]
        context = " ".join(context_chunks)
        logger.info(f"Context length: {len(context)} | Number of chunks: {len(context_chunks)}")
        if not context:
            logger.error("No context could be constructed from the knowledge base.")
            return jsonify({'response': "I'm sorry, I couldn't find any relevant information in your documents to answer that question."})
        # Call the selected LLM API
        if model == 'claude-3-sonnet' or model == 'claude' or model == 'claude-4':
            answer = call_claude_sonnet(context, user_message)
        else:
            answer = call_openai_gpt4(context, user_message)
        logger.info(f"Generated Answer: {answer}")
        return jsonify({'response': answer, 'confidence': 0.95})
    except Exception as e:
        logger.error(f"Exception during chat processing: {e}")
        return jsonify({'response': "I'm sorry, I didn't get a valid response due to an internal error."})

if __name__ == '__main__':
    app.run(debug=True, port=5000)