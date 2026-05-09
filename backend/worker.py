import httpx
import asyncio
from datetime import datetime, timedelta
import json
import os

# Trust Guard Logic
def analyze_job_trust(job_data: dict) -> str:
    risk_score = 0
    flags = []
    
    desc = job_data.get("job_description", "").lower()
    employer_name = job_data.get("employer_name", "").lower()
    
    # Suspicious keywords typical of scams
    if any(keyword in desc for keyword in ["telegram interview", "payment for kit", "pay for training", "bank details"]):
        risk_score += 0.8
        flags.append("Contains suspicious keywords typical of scams.")
        
    # Check for generic emails if available in description
    if " @gmail.com" in desc or " @yahoo.com" in desc:
        risk_score += 0.4
        flags.append("Uses generic email address for recruitment.")
        
    if risk_score >= 0.7:
        return "Suspicious"
    return "Verified"

def is_passed(job_data: dict) -> bool:
    # Mark as passed if > 30 days
    post_date_str = job_data.get("job_posted_at_datetime_utc")
    if post_date_str:
        try:
            # Handle timezone formatting
            post_date = datetime.fromisoformat(post_date_str.replace("Z", "+00:00"))
            if datetime.now(post_date.tzinfo) - post_date > timedelta(days=30):
                return True
        except ValueError:
            pass
    return False

# Mock Database for Upsert (In real scenario, use SQLAlchemy/Asyncpg to PostgreSQL/SQLite)
jobs_db = {}

async def fetch_and_upsert_jobs():
    api_key = os.getenv("RAPIDAPI_KEY", "YOUR_RAPIDAPI_KEY_HERE")
    url = "https://jsearch.p.rapidapi.com/search"
    
    querystring = {"query": "software engineer", "page": "1", "num_pages": "1"}
    
    headers = {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }
    
    print(f"[{datetime.now()}] Fetching jobs from JSearch...")
    try:
        # In a real execution, we would await the actual HTTP request:
        # async with httpx.AsyncClient() as client:
        #     response = await client.get(url, headers=headers, params=querystring)
        #     data = response.json()
        
        # MOCKING RESPONSE FOR DEMONSTRATION
        data = {
            "data": [
                {
                    "job_id": "j1",
                    "employer_name": "Tech Innovators",
                    "job_title": "Senior Frontend Developer",
                    "job_description": "We are looking for a React expert. Contact us at info@techinnovators.com",
                    "job_posted_at_datetime_utc": datetime.now().isoformat() + "Z"
                },
                {
                    "job_id": "j2",
                    "employer_name": "Crypto Start",
                    "job_title": "Blockchain Dev",
                    "job_description": "We need devs. Please contact us on telegram interview and send payment for kit.",
                    "job_posted_at_datetime_utc": datetime.now().isoformat() + "Z"
                },
                {
                    "job_id": "j3",
                    "employer_name": "Old Corp",
                    "job_title": "Java Dev",
                    "job_description": "Maintain legacy systems. Email recruiter22 @gmail.com",
                    "job_posted_at_datetime_utc": (datetime.now() - timedelta(days=40)).isoformat() + "Z"
                }
            ]
        }
        
        for job in data.get("data", []):
            job_id = job.get("job_id")
            
            # Upsert Logic: Trust Guard & Passed Logic
            status = analyze_job_trust(job)
            if is_passed(job):
                status = "Closed"
                
            job["internal_status"] = status
            
            jobs_db[job_id] = job
            print(f"Upserted Job {job_id} | Employer: {job['employer_name']} | Status: {status}")
            
    except Exception as e:
        print(f"Error fetching jobs: {e}")

async def run_worker():
    while True:
        await fetch_and_upsert_jobs()
        # Sleep for an hour before next fetch
        await asyncio.sleep(3600)

if __name__ == "__main__":
    print("Starting FastAPI Background Worker for Job Aggregation...")
    asyncio.run(run_worker())
