'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ResumeDashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    setIsAnalyzing(true);
    
    // Simulate API call to FastAPI backend
    setTimeout(() => {
      setResult({
        score: 72,
        matched_skills: ['React', 'Next.js', 'TypeScript', 'CSS'],
        missing_keywords: ['System Design', 'AWS', 'Docker'],
        formatting_issues: ['Resume lacks detailed descriptions of projects/experience.', 'Use more strong action verbs.'],
        improvement_points: ['Quantify your achievements with numbers.', 'Ensure consistent formatting for dates and job titles.'],
        recommended_jobs: [
          { title: 'Frontend Developer', company: 'TechCorp', match: '95%' },
          { title: 'UI Engineer', company: 'CreativeStudio', match: '88%' }
        ]
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <h1 className="heading-lg text-center">AI Resume Score & Match</h1>
        <p className="text-muted text-center mb-8">Upload your resume to get an instant readiness score and personalized job matches.</p>
        
        {!result ? (
          <div className="glass-card flex flex-col items-center justify-center p-8" style={{ maxWidth: '600px', margin: '0 auto', minHeight: '300px', border: '2px dashed var(--border-color)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
            <h3 className="heading-md mb-2">Upload Resume</h3>
            <p className="text-muted mb-6 text-center">PDF, DOCX, or TXT up to 5MB</p>
            
            <label className="btn-primary" style={{ cursor: 'pointer' }}>
              Select File
              <input type="file" style={{ display: 'none' }} accept=".pdf,.docx,.txt" onChange={handleFileUpload} />
            </label>
            
            {file && (
              <div className="mt-4 text-center">
                <p className="mb-4" style={{ fontWeight: 600 }}>Selected: {file.name}</p>
                <button 
                  className="btn-primary w-full" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  style={{ background: isAnalyzing ? 'var(--bg-secondary)' : undefined }}
                >
                  {isAnalyzing ? 'Analyzing with AI...' : 'Analyze Now'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3">
            {/* Left Column: Score & Formatting */}
            <div className="flex flex-col gap-6" style={{ gridColumn: 'span 1' }}>
              <div className="glass-card text-center flex flex-col items-center justify-center p-8">
                <h3 className="heading-md mb-4">Readiness Score</h3>
                <div style={{ 
                  width: '120px', height: '120px', 
                  borderRadius: '50%', 
                  background: `conic-gradient(var(--success-color) ${result.score}%, var(--bg-secondary) 0)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    width: '100px', height: '100px', 
                    borderRadius: '50%', 
                    background: 'var(--bg-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', fontWeight: 'bold'
                  }}>
                    {result.score}
                  </div>
                </div>
                <p className="text-muted">Good, but has room for improvement.</p>
              </div>
              
              <div className="glass-card">
                <h3 className="heading-md mb-4 text-warning">Formatting Issues</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                  {result.formatting_issues.map((issue: string, idx: number) => (
                    <li key={idx} className="mb-2">{issue}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right Column: Keywords & Matches */}
            <div className="flex flex-col gap-6" style={{ gridColumn: 'span 2' }}>
              <div className="glass-card">
                <h3 className="heading-md mb-4">Correction Engine</h3>
                
                <div className="mb-6">
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--success-color)' }}>Matched Skills</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {result.matched_skills.map((skill: string) => (
                      <span key={skill} className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'var(--success-color)' }}>{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--warning-color)' }}>Missing Keywords to Add</h4>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {result.missing_keywords.map((skill: string) => (
                      <span key={skill} className="badge" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'var(--warning-color)' }}>{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Actionable Advice</h4>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    {result.improvement_points.map((point: string, idx: number) => (
                      <li key={idx} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="glass-card">
                <h3 className="heading-md mb-4 text-primary">Best Job Matches</h3>
                <div className="flex flex-col gap-4">
                  {result.recommended_jobs.map((job: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center p-4" style={{ background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                      <div>
                        <h4 style={{ fontWeight: 600 }}>{job.title}</h4>
                        <p className="text-muted text-sm">{job.company}</p>
                      </div>
                      <div className="badge" style={{ background: 'var(--success-color)', color: 'white', border: 'none' }}>
                        {job.match} Match
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="btn-outline w-full" onClick={() => window.location.href='/jobs'}>Explore All Jobs</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
