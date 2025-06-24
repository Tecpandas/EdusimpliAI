# backend/models_def.py

# This file ONLY defines the class structure for our knowledge base object.
# This is the "blueprint" that both train_model.py and app.py will use
# to understand the structure of the saved .pkl file.

class PDFKnowledgeBase:
    """
    This class holds all the processed data from the PDFs for a single subject.
    It includes the text chunks and their searchable vector representations.
    An instance of this class is what gets saved into the .pkl file.
    """
    def __init__(self, subject_name, pdf_folder_path):
        self.subject_name = subject_name
        self.pdf_folder_path = pdf_folder_path
        self.chunks = []
        # The embedding model itself is saved within the object for easy use later.
        self.embedding_model = None
        # The pre-calculated vectors for all chunks are stored here.
        self.chunk_embeddings = None