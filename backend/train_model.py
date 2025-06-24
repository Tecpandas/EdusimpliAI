# backend/train_model.py
import os
import pickle
import fitz  # PyMuPDF
import nltk
from nltk.tokenize import sent_tokenize
from sentence_transformers import SentenceTransformer
import warnings
from models_def import PDFKnowledgeBase

warnings.filterwarnings('ignore')

try:
    nltk.download('punkt', quiet=True)
    print("NLTK 'punkt' tokenizer is available.")
except Exception as e:
    print(f"Warning: Could not download NLTK 'punkt' data. Error: {e}")

class PDFKnowledgeBaseBuilder:
    """
    A helper class to build a PDFKnowledgeBase object.
    This class contains the logic for extracting, chunking, and embedding.
    """
    def __init__(self, subject_name, pdf_folder_path):
        self.kb = PDFKnowledgeBase(subject_name, pdf_folder_path)

    def _extract_text_from_pdfs(self):
        full_text = ""
        print(f"  -> Scanning folder: {self.kb.pdf_folder_path}")
        if not os.path.isdir(self.kb.pdf_folder_path):
            print(f"  -> ❌ ERROR: Folder not found.")
            return None

        pdf_files = [f for f in os.listdir(self.kb.pdf_folder_path) if f.lower().endswith('.pdf')]
        if not pdf_files:
            print(f"  -> ❌ ERROR: No PDF files found in '{self.kb.subject_name}'.")
            return None

        print(f"  -> Found {len(pdf_files)} PDF(s). Extracting text...")
        for pdf_filename in pdf_files:
            pdf_path = os.path.join(self.kb.pdf_folder_path, pdf_filename)
            try:
                with fitz.open(pdf_path) as doc:
                    for page in doc:
                        full_text += page.get_text().replace('\n', ' ') + " "
            except Exception as e:
                print(f"     -> Warning: Could not read {pdf_filename}. Error: {e}")
        
        return full_text

    def _chunk_text(self, text, sentences_per_chunk=10):
        """Splits text into chunks of N sentences to preserve context."""
        print(f"  -> Splitting text into chunks of ~{sentences_per_chunk} sentences...")
        sentences = sent_tokenize(text)
        chunks = []
        for i in range(0, len(sentences), sentences_per_chunk):
            chunk = " ".join(sentences[i:i + sentences_per_chunk])
            chunks.append(chunk)
        
        self.kb.chunks = [c for c in chunks if len(c.split()) > 5]
        print(f"  -> Created {len(self.kb.chunks)} sentence-based chunks.")

    def build(self):
        """The main method to build the entire knowledge base."""
        print(f"\n--- Building Knowledge Base for: {self.kb.subject_name.upper()} ---")
        
        full_text = self._extract_text_from_pdfs()
        if not full_text or not full_text.strip():
            print("  -> ❌ ERROR: No text could be extracted.")
            return None

        self._chunk_text(full_text)
        if not self.kb.chunks:
            print("  -> ❌ ERROR: Failed to create any text chunks.")
            return None

        print(f"  -> Creating semantic embeddings... (This may take a while)")
        self.kb.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        self.kb.chunk_embeddings = self.kb.embedding_model.encode(self.kb.chunks, convert_to_tensor=True, show_progress_bar=True)
        
        print(f"--- ✅ Knowledge Base for {self.kb.subject_name.upper()} built successfully! ---")
        # Return the fully built knowledge base object
        return self.kb

def main():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    KNOWLEDGE_BASE_DIR = os.path.join(BASE_DIR, 'knowledge_base')
    MODELS_OUTPUT_DIR = os.path.join(BASE_DIR, '..', 'src', 'components')
    os.makedirs(MODELS_OUTPUT_DIR, exist_ok=True)

    subjects_to_train = {
        'chemistry': 'chem1.pkl',
        'biology': 'biology_knowledge_base.pkl',
        'physics': 'physics_knowledge_base.pkl'
    }

    for subject, pkl_name in subjects_to_train.items():
        subject_pdf_folder = os.path.join(KNOWLEDGE_BASE_DIR, subject)
        
        # --- THIS IS THE CORRECTED LOGIC ---
        # 1. Create a builder instance
        builder = PDFKnowledgeBaseBuilder(subject, subject_pdf_folder)
        # 2. Call the build method on the instance
        knowledge_base_object = builder.build()
        # ------------------------------------
        
        if knowledge_base_object:
            output_path = os.path.join(MODELS_OUTPUT_DIR, pkl_name)
            print(f"  -> 💾 Saving indexed knowledge base to: {output_path}")
            with open(output_path, 'wb') as f:
                pickle.dump(knowledge_base_object, f)
            print("  -> ✅ Save complete.")
        else:
            print(f"--- ⚠️  Skipping {subject.upper()} due to errors. ---")

    print("\n🎉 All knowledge bases have been built. You can now run your app.py server. 🎉")

if __name__ == '__main__':
    main()