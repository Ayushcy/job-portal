"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { studyHubData } from '@/data/mock';
import Link from 'next/link';

export default function StudyHubPage() {
  const [selectedTopic, setSelectedTopic] = useState(studyHubData[0]);

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem', display: 'flex', gap: '2rem', minHeight: 'calc(100vh - 80px)' }}>
        
        {/* Sidebar */}
        <div style={{ width: '300px', flexShrink: 0 }}>
          <div className="glass-card" style={{ position: 'sticky', top: '100px', padding: '1.5rem', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
            <h3 className="heading-md mb-6" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Learning Tracks</h3>
            
            <div className="flex flex-col gap-2">
              {studyHubData.map((topic) => (
                <button 
                  key={topic.topic_id}
                  onClick={() => setSelectedTopic(topic)}
                  style={{
                    textAlign: 'left',
                    padding: '1rem',
                    borderRadius: '8px',
                    background: selectedTopic.topic_id === topic.topic_id ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    border: selectedTopic.topic_id === topic.topic_id ? '1px solid var(--primary-color)' : '1px solid transparent',
                    color: selectedTopic.topic_id === topic.topic_id ? 'var(--primary-color)' : 'var(--text-secondary)',
                    fontWeight: selectedTopic.topic_id === topic.topic_id ? 600 : 400,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { if(selectedTopic.topic_id !== topic.topic_id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseOut={(e) => { if(selectedTopic.topic_id !== topic.topic_id) e.currentTarget.style.background = 'transparent' }}
                >
                  <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '4px' }}>
                    {topic.topic_id.startsWith('dp') || topic.topic_id.startsWith('greedy') ? 'DSA / Algorithms' : 'Full-Stack'}
                  </div>
                  {topic.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          <div className="glass-card" style={{ padding: '3rem', minHeight: '100%' }}>
            <div className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <div className="badge mb-4" style={{ display: 'inline-block', background: 'var(--primary-color)', color: '#fff', border: 'none' }}>
                Premium Content
              </div>
              <h1 className="heading-xl" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{selectedTopic.title}</h1>
              
              <div className="flex gap-6" style={{ background: 'var(--bg-secondary)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div>
                  <span className="text-muted" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>Time Complexity</span>
                  <span style={{ fontFamily: 'monospace', color: 'var(--warning-color)', fontWeight: 600, fontSize: '1.1rem' }}>{selectedTopic.time_complexity}</span>
                </div>
                <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                <div>
                  <span className="text-muted" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>Space Complexity</span>
                  <span style={{ fontFamily: 'monospace', color: 'var(--success-color)', fontWeight: 600, fontSize: '1.1rem' }}>{selectedTopic.space_complexity}</span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="heading-md" style={{ color: 'var(--text-primary)' }}>Technical Deep-Dive</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {selectedTopic.technical_explanation}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="heading-md mb-4" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Interactive Code Example
                {selectedTopic.code_examples[0].interactive && (
                  <span className="badge" style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', borderColor: 'var(--success-color)' }}>Runnable</span>
                )}
              </h3>
              
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ background: '#1e293b', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#94a3b8' }}>main.{selectedTopic.code_examples[0].language === 'Python' ? 'py' : 'cpp'}</span>
                  <button style={{ background: 'transparent', color: '#cbd5e1', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Copy</button>
                </div>
                <div style={{ background: '#0f172a', padding: '1.5rem', overflowX: 'auto' }}>
                  <pre style={{ margin: 0, fontFamily: '"Fira Code", monospace', fontSize: '0.95rem', lineHeight: 1.6, color: '#e2e8f0' }}>
                    <code>
                      {selectedTopic.code_examples[0].code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-md mb-4">Related Practice Problems</h3>
              <div className="flex flex-col gap-3">
                {selectedTopic.practice_problems.map((prob, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                    padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid var(--border-color)', borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                     onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}>
                    <div style={{ fontWeight: 500 }}>{prob.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span className="badge" style={{ 
                        color: prob.difficulty === 'Easy' ? 'var(--success-color)' : prob.difficulty === 'Medium' ? 'var(--warning-color)' : '#ef4444',
                        borderColor: 'currentColor', background: 'transparent'
                      }}>
                        {prob.difficulty}
                      </span>
                      <a href={`/solve?problem=${encodeURIComponent(prob.title)}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600 }}>Solve ↗</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
