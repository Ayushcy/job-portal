"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

import { useSession } from 'next-auth/react';
import AuthModal from '@/components/AuthModal';

const templates: Record<string, string> = {
  "C++": "#include <iostream>\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Write your code here\n        \n    }\n};",
  "Python": "class Solution:\n    def solve(self):\n        # Write your code here\n        pass",
  "Java": "class Solution {\n    public void solve() {\n        // Write your code here\n        \n    }\n}",
  "JavaScript": "/**\n * @param {any} args\n * @return {any}\n */\nvar solve = function(args) {\n    // Write your code here\n    \n};"
};

function SolveEnvironment() {
  const searchParams = useSearchParams();
  const problemTitle = searchParams.get('problem') || 'Unknown Problem';
  
  const { data: session, status } = useSession();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  const [language, setLanguage] = useState("C++");
  const [code, setCode] = useState(templates["C++"]);
  const [consoleOutput, setConsoleOutput] = useState<{ status: 'idle' | 'running' | 'success' | 'error', message: string }>({ status: 'idle', message: 'Run your code to see the test results here.' });

  // Update code when language changes
  useEffect(() => {
    setCode(templates[language]);
  }, [language]);
  
  // Auto-open modal if unauthenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      setIsAuthOpen(true);
    }
  }, [status]);

  const handleRun = () => {
    if (status === 'unauthenticated') {
      setIsAuthOpen(true);
      return;
    }
    setConsoleOutput({ status: 'running', message: 'Running test cases...' });
    setTimeout(() => {
      setConsoleOutput({ 
        status: 'success', 
        message: `Compiled Successfully.\n\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExpected: [0,1]\n\nPassed 3/3 Test Cases.` 
      });
    }, 1500);
  };

  const handleSubmit = () => {
    if (status === 'unauthenticated') {
      setIsAuthOpen(true);
      return;
    }
    setConsoleOutput({ status: 'running', message: 'Submitting solution to judge...' });
    setTimeout(() => {
      setConsoleOutput({ 
        status: 'success', 
        message: `Success!\n\nRuntime: 12 ms, faster than 95.23% of online submissions.\nMemory Usage: 14.2 MB, less than 48.11% of online submissions.` 
      });
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0f172a' }}>
      <Navbar />
      
      <div style={{ flex: 1, display: 'flex', padding: '1rem', gap: '1rem', height: 'calc(100vh - 80px)', position: 'relative' }}>
        
        {/* Authentication Lock Overlay */}
        {status === 'unauthenticated' && (
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backdropFilter: 'blur(6px)', background: 'rgba(15, 23, 42, 0.7)', 
            zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'bounce 2s infinite' }}>🔒</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Sign In Required</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '2rem', maxWidth: '450px', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6' }}>
              You need to sign in or create an account to access the Interactive Code Editor and save your progress.
            </p>
            <button onClick={() => setIsAuthOpen(true)} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: 700, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}>
              Sign In to Unlock
            </button>
          </div>
        )}
        
        {/* LEFT SIDE: Problem Details */}
        <div style={{ flex: '1 1 40%', display: 'flex', flexDirection: 'column', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', padding: '1.5rem', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>{problemTitle}</h2>
            <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>Mock Problem</span>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>Array</span>
            <span style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>Math</span>
          </div>

          <div style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              You can return the answer in any order.
            </p>
            
            <h4 style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem' }}>Example 1:</h4>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', marginBottom: '1.5rem' }}>
              <strong>Input:</strong> nums = [2,7,11,15], target = 9<br/>
              <strong>Output:</strong> [0,1]<br/>
              <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
            </div>
            
            <h4 style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem' }}>Constraints:</h4>
            <ul style={{ paddingLeft: '1.5rem', fontFamily: 'monospace', background: '#0f172a', padding: '1rem 1rem 1rem 2.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
              <li><code>2 &lt;= nums.length &lt;= 10^4</code></li>
              <li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li>
              <li><code>-10^9 &lt;= target &lt;= 10^9</code></li>
              <li><strong>Only one valid answer exists.</strong></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: Code Editor & Console Split */}
        <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Top Right: Code Editor */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' }}>
            {/* Editor Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem', background: '#0f172a', borderBottom: '1px solid #334155' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  style={{ 
                    background: '#1e293b', color: '#e2e8f0', border: '1px solid #334155', 
                    padding: '0.4rem 0.75rem', borderRadius: '6px', outline: 'none', cursor: 'pointer',
                    fontWeight: 500, fontSize: '0.9rem'
                  }}
                >
                  <option value="C++">C++</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="JavaScript">JavaScript</option>
                </select>
                
                <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>
                  ⚙️ Settings
                </button>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={handleRun} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.4rem 1rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                  ▶ Run
                </button>
                <button onClick={handleSubmit} style={{ background: '#22c55e', color: '#fff', border: 'none', padding: '0.4rem 1.25rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.background='#16a34a'} onMouseOut={e => e.currentTarget.style.background='#22c55e'}>
                  Submit
                </button>
              </div>
            </div>
            
            {/* Editor Body */}
            <div style={{ flex: 1, position: 'relative' }}>
              {/* Line numbers mock */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', background: '#0f172a', borderRight: '1px solid #334155', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.5rem', color: '#475569', fontFamily: 'monospace', fontSize: '0.95rem', userSelect: 'none' }}>
                {code.split('\n').map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              
              <textarea 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
                style={{
                  width: '100%', height: '100%', background: 'transparent', color: '#e2e8f0',
                  border: 'none', padding: '1.5rem 1rem 1.5rem 50px', fontFamily: '"Fira Code", monospace',
                  fontSize: '0.95rem', lineHeight: '1.5', outline: 'none', resize: 'none'
                }}
              />
            </div>
          </div>

          {/* Bottom Right: Test Cases / Console */}
          <div style={{ height: '250px', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '1.5rem', padding: '0 1.5rem', background: '#0f172a', borderBottom: '1px solid #334155', alignItems: 'center' }}>
              <button style={{ background: 'transparent', border: 'none', borderBottom: '2px solid #3b82f6', color: '#fff', padding: '0.75rem 0', fontWeight: 600, cursor: 'pointer' }}>Test Cases</button>
              <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', padding: '0.75rem 0', fontWeight: 600, cursor: 'pointer' }}>Result</button>
            </div>
            
            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', background: consoleOutput.status === 'success' ? 'rgba(34, 197, 94, 0.05)' : 'transparent' }}>
              {consoleOutput.status === 'running' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3b82f6', fontWeight: 600 }}>
                  <span className="spinner" style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid #3b82f6', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
                  {consoleOutput.message}
                  <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </div>
              ) : (
                <pre style={{ margin: 0, fontFamily: '"Fira Code", monospace', fontSize: '0.9rem', color: consoleOutput.status === 'success' ? '#22c55e' : '#cbd5e1', whiteSpace: 'pre-wrap' }}>
                  {consoleOutput.message}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLoginSuccess={() => setIsAuthOpen(false)} 
      />
    </div>
  );
}

export default function SolvePage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', color: '#fff' }}>Loading Editor...</div>}>
      <SolveEnvironment />
    </Suspense>
  );
}
