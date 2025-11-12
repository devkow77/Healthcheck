from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Pozwól na dostęp dla podanej scieżki
    allow_credentials=True, # Pozwól na dane uwierzytelniające (cookies)
    allow_methods=["*"], # Pozwól na wszystkie metody CRUD
    allow_headers=["*"], # Pozwól na nagłówki w zapytaniu 
)

@app.get('/')
def read_home():
    return { "message": "Home Page API" }

@app.get('/about')
def read_about():
    return { "message": "About Page API" } 