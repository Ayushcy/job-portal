from models import ResumeAnalysis, JobVerification
import random

def analyze_resume_logic(text: str) -> ResumeAnalysis:
    # Simulate NLP keyword extraction and scoring
    text_lower = text.lower()
    
    # Mock knowledge base
    tech_skills = ["react", "next.js", "fastapi", "python", "javascript", "typescript", "c++", "java", "sql", "aws", "docker"]
    
    extracted_skills = [skill for skill in tech_skills if skill in text_lower]
    
    score = min(100, max(0, 40 + (len(extracted_skills) * 10)))
    
    missing_keywords = []
    if "docker" not in text_lower and "aws" not in text_lower:
        missing_keywords.append("Cloud/DevOps (AWS, Docker)")
    if "fastapi" not in text_lower and "node" not in text_lower:
        missing_keywords.append("Backend Frameworks")
        
    formatting_issues = []
    if len(text) < 500:
        formatting_issues.append("Resume lacks detailed descriptions of projects/experience.")
    if "action verbs" not in text_lower:  # Dummy check
        formatting_issues.append("Use more strong action verbs (e.g., 'Developed', 'Optimized').")
        
    improvement_points = [
        "Quantify your achievements with numbers (e.g., 'Improved performance by 20%').",
        "Add a link to your GitHub or portfolio if not already present.",
        "Ensure consistent formatting for dates and job titles."
    ]
    
    if score > 85:
        improvement_points = ["Your resume looks solid! Tailor it slightly for specific roles."]
        
    return ResumeAnalysis(
        score=score,
        matched_skills=extracted_skills if extracted_skills else ["Python", "React", "Next.js"], # Fallback
        missing_keywords=missing_keywords if missing_keywords else ["System Design"],
        formatting_issues=formatting_issues,
        improvement_points=improvement_points
    )

def verify_job_logic(job_data: dict) -> JobVerification:
    # Implement risk analysis rules
    flags = []
    risk_score = 0.0
    
    desc = job_data.get("description", "").lower()
    email = job_data.get("contact_email", "").lower()
    salary = job_data.get("salary", "")
    
    # Check for unofficial emails
    if email and any(domain in email for domain in ["@gmail.com", "@yahoo.com", "@hotmail.com"]):
        flags.append("Unofficial email domain used for a corporate role.")
        risk_score += 0.4
        
    # Check for sensitive info requests
    if any(phrase in desc for phrase in ["bank details", "ssn", "payment required", "pay for training"]):
        flags.append("Asks for sensitive information or payment.")
        risk_score += 0.8
        
    # Fake check for unrealistic salary vs requirement
    if "0-1" in job_data.get("experience", "") and "200k" in salary:
        flags.append("Unrealistic salary for experience level.")
        risk_score += 0.3
        
    # Determine Status
    if risk_score >= 0.7:
        status = "Suspicious"
    elif job_data.get("is_closed", False):
        status = "Closed"
    else:
        status = "Verified"
        
    return JobVerification(
        status=status,
        risk_score=min(1.0, risk_score),
        flags=flags
    )
