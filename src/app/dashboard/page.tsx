"use client";

import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (status === "unauthenticated") {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Please sign in to view your dashboard.</h2>
        </div>
      </div>
    );
  }

  // Mock data for the dashboard
  const stats = {
    totalSolved: 142,
    totalProblems: 500,
    currentStreak: 12,
    globalRank: 15420,
    score: 3450,
  };

  const progress = [
    { label: "Arrays & Hashing", solved: 45, total: 50, color: "#3b82f6" },
    { label: "Two Pointers", solved: 20, total: 25, color: "#10b981" },
    { label: "Dynamic Programming", solved: 15, total: 60, color: "#f59e0b" },
    { label: "Graphs & Trees", solved: 30, total: 80, color: "#8b5cf6" },
    { label: "System Design", solved: 5, total: 20, color: "#ef4444" },
  ];

  const recentHistory = [
    { id: 1, title: "Two Sum", difficulty: "Easy", date: "2 hours ago", status: "Accepted" },
    { id: 2, title: "Longest Increasing Subsequence", difficulty: "Medium", date: "5 hours ago", status: "Accepted" },
    { id: 3, title: "Alien Dictionary", difficulty: "Hard", date: "1 day ago", status: "Accepted" },
    { id: 4, title: "Climbing Stairs", difficulty: "Easy", date: "2 days ago", status: "Accepted" },
    { id: 5, title: "LRU Cache", difficulty: "Medium", date: "2 days ago", status: "Accepted" },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />
      
      <div className="container animate-fade-in" style={{ padding: '3rem 0 6rem 0' }}>
        
        {/* Profile Header */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.8))' }}>
          <img src={session?.user?.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid var(--primary-color)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1 className="heading-xl" style={{ margin: 0 }}>{session?.user?.name || "Developer"}</h1>
              <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid #3b82f6' }}>Pro Member</span>
            </div>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{session?.user?.email}</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <span className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Rank</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>#{stats.globalRank.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Score</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>{stats.score.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Summary Cards */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>✓</div>
            <div>
              <div className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Problems Solved</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.totalSolved} <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>/ {stats.totalProblems}</span></div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🔥</div>
            <div>
              <div className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Current Streak</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.currentStreak} <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>Days</span></div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>⚡</div>
            <div>
              <div className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Acceptance Rate</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>78.4%</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Left Column: Progress Graph */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h3 className="heading-md mb-6" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              📊 Skill Progress Report
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {progress.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: '#cbd5e1' }}>{item.label}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.solved} / {item.total}</span>
                  </div>
                  <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${(item.solved / item.total) * 100}%`, 
                      height: '100%', 
                      background: item.color,
                      borderRadius: '6px',
                      boxShadow: `0 0 10px ${item.color}80`,
                      transition: 'width 1s ease-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Solved History */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h3 className="heading-md mb-6" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              🕒 Recent Submissions
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentHistory.map((history) => (
                <div key={history.id} style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1rem', background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px',
                  transition: 'background 0.2s', cursor: 'pointer'
                }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                   onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}>
                  
                  <div>
                    <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>{history.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{history.date}</div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ 
                      fontSize: '0.8rem', padding: '4px 10px', borderRadius: '12px', fontWeight: 600,
                      background: history.difficulty === 'Easy' ? 'rgba(34, 197, 94, 0.1)' : history.difficulty === 'Medium' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: history.difficulty === 'Easy' ? '#22c55e' : history.difficulty === 'Medium' ? '#f59e0b' : '#ef4444'
                    }}>
                      {history.difficulty}
                    </span>
                    <span style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.9rem' }}>{history.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-outline w-full" style={{ marginTop: '1.5rem', padding: '0.75rem' }}>View All History</button>
          </div>

        </div>
      </div>
    </div>
  );
}
