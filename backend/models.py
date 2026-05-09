from pydantic import BaseModel
from typing import List, Optional

class ResumeAnalysis(BaseModel):
    score: int
    matched_skills: List[str]
    missing_keywords: List[str]
    formatting_issues: List[str]
    improvement_points: List[str]

class JobVerification(BaseModel):
    status: str # "Verified", "Closed", "Suspicious"
    risk_score: float
    flags: List[str]

class CodeExample(BaseModel):
    language: str
    code: str
    interactive: bool

class ProblemLink(BaseModel):
    title: str
    url: str
    difficulty: str

class TopicDeepDive(BaseModel):
    topic_id: str
    title: str
    technical_explanation: str
    time_complexity: str
    space_complexity: str
    code_examples: List[CodeExample]
    practice_problems: List[ProblemLink]

class StudyTrack(BaseModel):
    track_name: str
    description: str
    topics: List[TopicDeepDive]
