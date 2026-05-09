"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import './Navbar.css';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { data: session } = useSession();

  // Initialize theme from local storage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link href="/" className="navbar-logo">
            NextGen<span style={{ color: 'var(--primary-color)' }}>Career</span>
          </Link>
          <div className="navbar-links">
            <Link href="/jobs" className="nav-link">Job Portal</Link>
            <Link href="/resume-dashboard" className="nav-link">Resume AI</Link>
            <Link href="/study-hub" className="nav-link" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Study Hub</Link>
            <Link href="/prep" className="nav-link">Preparation</Link>
            <Link href="/companies" className="nav-link">Companies</Link>
            <Link href="/dsa-sheet" className="nav-link">DSA Sheet</Link>
          </div>
          <div className="navbar-actions flex items-center gap-4">
            <button onClick={toggleTheme} className="theme-toggle" style={{ fontSize: '1.25rem', padding: '0.5rem' }} title="Toggle Theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            {session && session.user ? (
              <div className="flex items-center gap-4">
                {session.user.image && (
                  <img src={session.user.image} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                )}
                <span className="text-muted" style={{ fontWeight: 500 }}>Hey, {session.user.name?.split(' ')[0]}</span>
                <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.5rem 1rem' }}>Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsAuthOpen(true)} 
                  style={{ 
                    padding: '0.5rem 1.25rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    color: 'var(--text-primary)', 
                    borderRadius: '8px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setIsAuthOpen(true)} 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.5rem 1.25rem', 
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
                    fontWeight: 600
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLoginSuccess={() => {}} // Not needed anymore with NextAuth
      />
    </>
  );
}
