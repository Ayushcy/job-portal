"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/mock';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0))', padding: '4rem 0 2rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'var(--primary-color)', opacity: 0.15, filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div className="container relative z-10 text-center animate-fade-in">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Find Your Next Big Opportunity
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Explore {jobs.length}+ high-paying roles across the world's most innovative tech companies and promising startups.
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search by role, company, or skills (e.g., 'React', 'OpenAI')..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '1.25rem 1.5rem 1.25rem 3.5rem', borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(12px)', color: '#fff', fontSize: '1.1rem', outline: 'none',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', transition: 'all 0.3s'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--primary-color)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <svg style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
      </div>

      <div className="container animate-fade-in" style={{ paddingBottom: '6rem', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Filters Sidebar */}
          <div className="glass-card" style={{ position: 'sticky', top: '100px', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Filter Results</h3>
            
            <div className="mb-6">
              <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Integrity Status</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['All', 'Verified', 'Suspicious', 'Closed'].map(status => (
                  <button 
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    style={{
                      textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '10px',
                      background: statusFilter === status ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                      color: statusFilter === status ? '#fff' : '#cbd5e1',
                      border: statusFilter === status ? '1px solid var(--primary-color)' : '1px solid transparent',
                      fontWeight: statusFilter === status ? 600 : 500,
                      cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                    onMouseOver={e => { if(statusFilter !== status) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseOut={e => { if(statusFilter !== status) e.currentTarget.style.background = 'transparent' }}
                  >
                    {status === 'Verified' ? '✅' : status === 'Suspicious' ? '⚠️' : status === 'Closed' ? '🔒' : '🌐'}
                    {status === 'All' ? 'All Jobs' : status}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Model</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> Remote</label>
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> Hybrid</label>
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> On-site</label>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> Entry Level (0-2 Yrs)</label>
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> Mid Level (3-5 Yrs)</label>
                <label className="flex items-center gap-3 cursor-pointer" style={{ color: '#cbd5e1' }}><input type="checkbox" style={{ accentColor: 'var(--primary-color)', width: '16px', height: '16px' }} /> Senior (5+ Yrs)</label>
              </div>
            </div>
          </div>
          
          {/* Job Grid */}
          <div>
            <div className="mb-6 flex justify-between items-center text-sm text-muted">
              <span>Showing <strong>{filteredJobs.length}</strong> opportunities</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Sort by: <strong style={{ color: '#fff' }}>Recommended</strong></span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="col-span-full text-center p-12 glass-card" style={{ borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>No jobs found</h3>
                  <p className="text-muted" style={{ fontSize: '1.1rem' }}>We couldn't find any positions matching your criteria.</p>
                  <button onClick={() => {setSearchQuery(''); setStatusFilter('All');}} className="btn-outline mt-6">Clear all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
