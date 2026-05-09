from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any

from models import ResumeAnalysis, JobVerification
from logic import analyze_resume_logic, verify_job_logic

app = FastAPI(title="NextGenCareer API", version="1.0.0")

# CORS setup for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "NextGenCareer API is running"}

@app.post("/analyze-resume", response_model=ResumeAnalysis)
async def analyze_resume(file: UploadFile = File(...)):
    if not file.filename.endswith(('.pdf', '.docx', '.txt')):
        raise HTTPException(status_code=400, detail="Only PDF, DOCX, and TXT files are supported")
        
    # Read content (mocking PDF/DOCX extraction here by just reading text if it's txt, or using a dummy string)
    content = await file.read()
    try:
        text_content = content.decode('utf-8')
    except UnicodeDecodeError:
        # Fallback for binary files in this mock
        text_content = "Mock extracted text containing React, Next.js, and some generic experience."
        
    result = analyze_resume_logic(text_content)
    return result

@app.post("/verify-job", response_model=JobVerification)
async def verify_job(job_data: Dict[str, Any]):
    result = verify_job_logic(job_data)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
