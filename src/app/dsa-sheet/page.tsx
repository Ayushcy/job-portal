"use client";

import Navbar from '@/components/Navbar';
import { dsaTopics } from '@/data/mock';
import { useState, useEffect } from 'react';

export default function DSASheetPage() {
  const [solvedProblems, setSolvedProblems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Load from local storage
    const saved = localStorage.getItem('dsa-progress');
    if (saved) {
      setSolvedProblems(JSON.parse(saved));
    }
  }, []);

  const toggleProblem = (id: string) => {
    const newSolved = { ...solvedProblems, [id]: !solvedProblems[id] };
    setSolvedProblems(newSolved);
    localStorage.setItem('dsa-progress', JSON.stringify(newSolved));
  };

  // Calculate progress
  const totalProblems = dsaTopics.reduce((acc, topic) => acc + topic.problems.length, 0);
  const totalSolved = Object.values(solvedProblems).filter(Boolean).length;
  const progressPercent = totalProblems === 0 ? 0 : Math.round((totalSolved / totalProblems) * 100);

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="flex justify-between items-end mb-12 border-b border-gray-700 pb-8" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
          <div>
            <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>NextGen DSA Sheet</h1>
            <p className="text-muted">Curated list of problems to help you crack top product-based companies.</p>
          </div>
          <div className="glass-card text-center" style={{ padding: '1rem 2rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-color)' }}>{progressPercent}%</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{totalSolved} / {totalProblems} Solved</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {dsaTopics.map(topic => {
            const topicSolved = topic.problems.filter(p => solvedProblems[p.id]).length;
            
            return (
              <div key={topic.topic} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="flex justify-between items-center" style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem 2rem' }}>
                  <h2 className="heading-md" style={{ marginBottom: 0 }}>{topic.topic}</h2>
                  <span className="badge" style={{ background: 'var(--bg-primary)' }}>{topicSolved} / {topic.problems.length} Solved</span>
                </div>
                
                <div style={{ padding: '0 2rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '1rem 0', color: 'var(--text-secondary)', fontWeight: 500, width: '50px' }}>Status</th>
                        <th style={{ padding: '1rem 0', color: 'var(--text-secondary)', fontWeight: 500 }}>Problem</th>
                        <th style={{ padding: '1rem 0', color: 'var(--text-secondary)', fontWeight: 500, width: '100px' }}>Difficulty</th>
                        <th style={{ padding: '1rem 0', color: 'var(--text-secondary)', fontWeight: 500, width: '100px' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topic.problems.map(problem => {
                        const isSolved = !!solvedProblems[problem.id];
                        return (
                          <tr key={problem.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s', background: isSolved ? 'rgba(16, 185, 129, 0.05)' : 'transparent' }}>
                            <td style={{ padding: '1rem 0' }}>
                              <input 
                                type="checkbox" 
                                checked={isSolved}
                                onChange={() => toggleProblem(problem.id)}
                                style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer', accentColor: 'var(--success-color)' }}
                              />
                            </td>
                            <td style={{ padding: '1rem 0', fontWeight: 500, color: isSolved ? 'var(--text-secondary)' : 'var(--text-primary)', textDecoration: isSolved ? 'line-through' : 'none' }}>
                              {problem.title}
                            </td>
                            <td style={{ padding: '1rem 0' }}>
                              <span className="badge" style={{ 
                                color: problem.difficulty === 'Easy' ? 'var(--success-color)' : problem.difficulty === 'Medium' ? 'var(--warning-color)' : '#ef4444',
                                borderColor: 'currentColor',
                                background: 'transparent'
                              }}>
                                {problem.difficulty}
                              </span>
                            </td>
                            <td style={{ padding: '1rem 0' }}>
                              <a href={`/solve?problem=${encodeURIComponent(problem.title)}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>Solve</a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
