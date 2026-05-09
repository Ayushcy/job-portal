"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess({ name: email.split('@')[0], email, provider: 'email' });
      onClose();
    }
  };

  const handleGoogleLogin = () => {
    signIn('google');
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
    }}>
      <div className="animate-fade-in" onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: '420px', position: 'relative',
        background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
        borderRadius: '24px', padding: '1px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      }}>
        <div style={{
          background: 'var(--bg-primary)', borderRadius: '23px', padding: '3rem 2.5rem',
          height: '100%', position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px',
            background: 'var(--primary-color)', opacity: 0.15, filter: 'blur(50px)', borderRadius: '50%'
          }}></div>
          
          <button onClick={onClose} style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '1.5rem', 
            color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)',
            width: '32px', height: '32px', borderRadius: '50%', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
          }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
             onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >&times;</button>
          
          <div className="text-center mb-8 relative z-10">
            <h2 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {isSignUp ? 'Join NextGen' : 'Welcome Back'}
            </h2>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              {isSignUp ? 'Accelerate your tech career today.' : 'Sign in to continue your preparation.'}
            </p>
          </div>
          
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-5 mb-8 relative z-10">
            <div>
              <input 
                type="email" 
                placeholder="Email address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%', padding: '1rem 1.25rem', borderRadius: '12px',
                  border: '1px solid var(--border-color)', background: 'rgba(30, 41, 59, 0.5)',
                  color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                }} 
                onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: '100%', padding: '1rem 1.25rem', borderRadius: '12px',
                  border: '1px solid var(--border-color)', background: 'rgba(30, 41, 59, 0.5)',
                  color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                }} 
                onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '1rem', borderRadius: '12px', fontSize: '1rem', marginTop: '0.5rem' }}>
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="flex items-center gap-4 mb-8 relative z-10" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color))' }}></div>
            <span style={{ opacity: 0.7 }}>OR CONTINUE WITH</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--border-color))' }}></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full flex justify-center items-center gap-3 relative z-10" style={{ 
            background: 'white', color: '#333', padding: '0.875rem', borderRadius: '12px',
            fontWeight: 600, transition: 'transform 0.2s, box-shadow 0.2s', border: 'none', cursor: 'pointer'
          }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
             onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          
          <div className="text-center mt-6 text-sm text-muted relative z-10">
            {isSignUp ? 'Already have an account? ' : 'New to NextGen? '}
            <button onClick={() => setIsSignUp(!isSignUp)} style={{ color: 'var(--primary-color)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
              {isSignUp ? 'Sign In' : 'Create an account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
