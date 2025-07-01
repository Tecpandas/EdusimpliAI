import os
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
from sentence_transformers import SentenceTransformer
import torch
import faiss
from models_def import PDFKnowledgeBase  # Your existing class
import sqlite3
from datetime import datetime, timedelta
import json

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

# Gemini setup
if not GEMINI_API_KEY:
    raise ValueError('GEMINI_API_KEY not found in environment variables.')
genai.configure(api_key=GEMINI_API_KEY)

# --- App Setup ---
app = Flask(__name__)
CORS(app)

# --- Path Configuration ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')
CACHE_DIR = os.path.join(BASE_DIR, 'quiz_cache')
os.makedirs(CACHE_DIR, exist_ok=True)

# --- Load All AI Components on Startup ---
print("🧠 Loading all AI components...")

# Improved embedding model
embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
print("✅ Embedding Model ('all-MiniLM-L6-v2') loaded.")

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

# --- Database Setup ---
DB_PATH = os.path.join(BASE_DIR, 'users.db')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    # Quiz attempts
    c.execute('''CREATE TABLE IF NOT EXISTS quiz_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT,
        quiz_id TEXT,
        subject TEXT,
        standard TEXT,
        score INTEGER,
        total_questions INTEGER,
        timestamp DATETIME
    )''')
    # Leaderboard
    c.execute('''CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quiz_id TEXT,
        user_id TEXT,
        user_name TEXT,
        subject TEXT,
        standard TEXT,
        score INTEGER,
        coin_type TEXT,
        timestamp DATETIME
    )''')
    # Streaks
    c.execute('''CREATE TABLE IF NOT EXISTS user_streaks (
        user_id TEXT PRIMARY KEY,
        current_streak INTEGER,
        last_attempt_date DATE
    )''')
    conn.commit()
    conn.close()

init_db()

# --- Main Chat Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    subject = data.get('subject', 'biology').lower()

    # Support for maths (no KB, direct Gemini)
    if subject == 'maths':
        prompt = (
            f"You are an expert maths tutor. Answer the following question in a clear, step-by-step, student-friendly way. "
            f"Use simple language and examples if possible.\nQuestion: {user_message}"
        )
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        answer = response.text.strip() if hasattr(response, 'text') else str(response)
        return jsonify({'response': answer, 'confidence': 0.98})

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
        f"You are an expert tutor for {subject}. Using the following context, answer the student's question in a clear, concise, and student-friendly way. "
        f"Use simple language, analogies, and examples if possible.\nContext: {context}\nQuestion: {user_message}"
    )
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(prompt)
    answer = response.text.strip() if hasattr(response, 'text') else str(response)
    print(f"Generated Answer: {answer}")
    return jsonify({'response': answer, 'confidence': 0.98})

# --- Quiz Submission Endpoint ---
@app.route('/api/quiz/submit', methods=['POST'])
def submit_quiz():
    data = request.json
    user_id = data.get('user_id')
    user_name = data.get('user_name')
    quiz_id = data.get('quiz_id')
    subject = data.get('subject')
    standard = data.get('standard')
    score = data.get('score')
    total_questions = data.get('total_questions', 10)
    timestamp = datetime.utcnow()

    # Save attempt
    conn = get_db()
    c = conn.cursor()
    c.execute('INSERT INTO quiz_attempts (user_id, quiz_id, subject, standard, score, total_questions, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)',
              (user_id, quiz_id, subject, standard, score, total_questions, timestamp))
    conn.commit()

    # Update streak
    c.execute('SELECT current_streak, last_attempt_date FROM user_streaks WHERE user_id=?', (user_id,))
    row = c.fetchone()
    now = datetime.utcnow()
    if row:
        last_attempt = datetime.strptime(row['last_attempt_date'], '%Y-%m-%d')
        # If last_attempt_date is a DATETIME, parse accordingly
        try:
            last_attempt = datetime.strptime(row['last_attempt_date'], '%Y-%m-%d %H:%M:%S.%f')
        except Exception:
            try:
                last_attempt = datetime.strptime(row['last_attempt_date'], '%Y-%m-%d %H:%M:%S')
            except Exception:
                last_attempt = datetime.strptime(row['last_attempt_date'], '%Y-%m-%d')
        hours_since = (now - last_attempt).total_seconds() / 3600.0
        if hours_since >= 20:
            streak = row['current_streak'] + 1
        else:
            streak = row['current_streak']
        c.execute('UPDATE user_streaks SET current_streak=?, last_attempt_date=? WHERE user_id=?', (streak, now, user_id))
    else:
        streak = 1
        c.execute('INSERT INTO user_streaks (user_id, current_streak, last_attempt_date) VALUES (?, ?, ?)', (user_id, streak, now))
    conn.commit()

    # Update leaderboard (top 3 get coins)
    c.execute('SELECT * FROM leaderboard WHERE quiz_id=? ORDER BY score DESC, timestamp ASC', (quiz_id,))
    leaderboard = c.fetchall()
    coin_type = None
    if not leaderboard or len(leaderboard) < 3 or score > leaderboard[-1]['score']:
        # Insert or update leaderboard
        c.execute('DELETE FROM leaderboard WHERE quiz_id=? AND user_id=?', (quiz_id, user_id))
        c.execute('INSERT INTO leaderboard (quiz_id, user_id, user_name, subject, standard, score, coin_type, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                  (quiz_id, user_id, user_name, subject, standard, score, None, timestamp))
        conn.commit()
        # Re-rank and assign coins
        c.execute('SELECT * FROM leaderboard WHERE quiz_id=? ORDER BY score DESC, timestamp ASC', (quiz_id,))
        top = c.fetchall()
        for idx, row in enumerate(top[:3]):
            coin = 'gold' if idx == 0 else 'silver' if idx == 1 else 'bronze'
            c.execute('UPDATE leaderboard SET coin_type=? WHERE id=?', (coin, row['id']))
        for row in top[3:]:
            c.execute('UPDATE leaderboard SET coin_type=NULL WHERE id=?', (row['id'],))
        conn.commit()
    conn.close()
    return jsonify({'success': True, 'streak': streak})

# --- Leaderboard Endpoint ---
@app.route('/api/quiz/leaderboard', methods=['GET'])
def get_leaderboard():
    quiz_id = request.args.get('quiz_id')
    subject = request.args.get('subject')
    standard = request.args.get('standard')
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT user_name, score, coin_type FROM leaderboard WHERE quiz_id=? AND subject=? AND standard=? ORDER BY score DESC, timestamp ASC LIMIT 10',
              (quiz_id, subject, standard))
    rows = c.fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

# --- Streak Endpoint ---
@app.route('/api/quiz/streak', methods=['GET'])
def get_streak():
    user_id = request.args.get('user_id')
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT current_streak FROM user_streaks WHERE user_id=?', (user_id,))
    row = c.fetchone()
    conn.close()
    return jsonify({'streak': row['current_streak'] if row else 0})

# --- Progression Endpoint ---
@app.route('/api/quiz/progress', methods=['GET'])
def get_progress():
    user_id = request.args.get('user_id')
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT subject, standard, COUNT(*) as quizzes_taken, SUM(score) as total_score FROM quiz_attempts WHERE user_id=? GROUP BY subject, standard', (user_id,))
    rows = c.fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

# --- Gemini Quiz Generation Endpoint ---
@app.route('/api/quiz/generate', methods=['POST'])
def generate_quiz():
    data = request.json
    subject = data.get('subject')
    module_title = data.get('module_title')
    cache_file = os.path.join(CACHE_DIR, f'{subject}_{module_title}.json')
    # Check cache first
    if os.path.exists(cache_file):
        with open(cache_file, 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    # Compose prompt for Gemini
    prompt = (
        f"Generate 10 multiple-choice questions for the following {subject} module: '{module_title}'. "
        f"Each question should have 4 options and specify the correct answer. "
        f"Return the result as a JSON array of objects with fields: question, options (array), correct (the correct option as string)."
    )
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        # Try to parse JSON from Gemini's response
        import re
        import ast
        text = response.text
        # Extract JSON array from response
        match = re.search(r'(\[.*\])', text, re.DOTALL)
        if match:
            questions = json.loads(match.group(1))
        else:
            # Try to parse as Python list if JSON fails
            questions = ast.literal_eval(text)
        # Validate structure
        if not (isinstance(questions, list) and all('question' in q and 'options' in q and 'correct' in q for q in questions)):
            raise ValueError('Invalid question format from Gemini')
        # Cache
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
        return jsonify(questions)
    except Exception as e:
        # Fallback: return static/manual questions if available
        from data import MODULES_DATA
        for mod in MODULES_DATA.get('XII', {}).get(subject, []):
            if mod['title'] == module_title and 'quiz' in mod:
                questions = mod['quiz']
                # If less than 10, repeat or fill with dummy
                while len(questions) < 10:
                    questions.append(questions[len(questions) % len(questions)])
                questions = questions[:10]
                return jsonify(questions)
        return jsonify({'error': 'Could not generate quiz questions.'}), 500

# --- Gemini Module Explanation Endpoint ---
@app.route('/api/module/explanation', methods=['POST'])
def module_explanation():
    data = request.json
    subject = data.get('subject')
    module_title = data.get('module_title')
    cache_file = os.path.join(CACHE_DIR, f'{subject}_{module_title}_explanation.txt')
    if os.path.exists(cache_file):
        with open(cache_file, 'r', encoding='utf-8') as f:
            return jsonify({'explanation': f.read()})
    prompt = (
        f"Explain the following {subject} module in a clear, concise, and student-friendly way. "
        f"Module: '{module_title}'. Focus on key concepts, real-world relevance, and make it easy to understand."
    )
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        explanation = response.text.strip()
        with open(cache_file, 'w', encoding='utf-8') as f:
            f.write(explanation)
        return jsonify({'explanation': explanation})
    except Exception as e:
        return jsonify({'error': 'Could not generate explanation.'}), 500

# --- Gemini Important Topics Endpoint ---
@app.route('/api/module/important_topics', methods=['POST'])
def module_important_topics():
    data = request.json
    subject = data.get('subject')
    module_title = data.get('module_title')
    cache_file = os.path.join(CACHE_DIR, f'{subject}_{module_title}_important_topics.txt')
    if os.path.exists(cache_file):
        with open(cache_file, 'r', encoding='utf-8') as f:
            return jsonify({'important_topics': f.read()})
    prompt = (
        f"List the most important topics and subtopics a student should focus on for the following {subject} module: '{module_title}'. "
        f"Present them as a clear, concise bullet list."
    )
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        topics = response.text.strip()
        with open(cache_file, 'w', encoding='utf-8') as f:
            f.write(topics)
        return jsonify({'important_topics': topics})
    except Exception as e:
        return jsonify({'error': 'Could not generate important topics.'}), 500

# --- Gemini Previous Year Questions Endpoint ---
@app.route('/api/module/previous_year_questions', methods=['POST'])
def module_previous_year_questions():
    data = request.json
    subject = data.get('subject')
    module_title = data.get('module_title')
    cache_file = os.path.join(CACHE_DIR, f'{subject}_{module_title}_pyqs.txt')
    if os.path.exists(cache_file):
        with open(cache_file, 'r', encoding='utf-8') as f:
            return jsonify({'previous_year_questions': f.read()})
    prompt = (
        f"Provide 5 previous year exam questions (with answers) relevant to the following {subject} module: '{module_title}'. "
        f"Format as a numbered list with each question and its answer."
    )
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        pyqs = response.text.strip()
        with open(cache_file, 'w', encoding='utf-8') as f:
            f.write(pyqs)
        return jsonify({'previous_year_questions': pyqs})
    except Exception as e:
        return jsonify({'error': 'Could not generate previous year questions.'}), 500

# --- Start Server ---
if __name__ == '__main__':
    app.run(debug=True, port=5000)
