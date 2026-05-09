import Link from 'next/link';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    experience: string;
    salary: string;
    type: string;
    tags: string[];
    status?: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Verified': return '#10b981'; // Emerald
      case 'Suspicious': return '#ef4444'; // Red
      case 'Closed': return '#64748b'; // Slate
      default: return '#3b82f6'; // Blue
    }
  };

  const getStatusBg = (status?: string) => {
    switch (status) {
      case 'Verified': return 'rgba(16, 185, 129, 0.1)';
      case 'Suspicious': return 'rgba(239, 68, 68, 0.1)';
      case 'Closed': return 'rgba(100, 116, 139, 0.1)';
      default: return 'rgba(59, 130, 246, 0.1)';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'Verified': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
      case 'Suspicious': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
      case 'Closed': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
      default: return null;
    }
  };

  return (
    <div 
      className={`glass-card flex flex-col justify-between`} 
      style={{ 
        padding: '1.75rem', 
        border: job.status === 'Suspicious' ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
        background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6))',
        borderRadius: '20px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)';
        e.currentTarget.style.borderColor = job.status === 'Suspicious' ? 'rgba(239, 68, 68, 0.6)' : 'rgba(255, 255, 255, 0.15)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = job.status === 'Suspicious' ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)';
      }}
    >
      {/* Decorative Gradient Blob */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '150px', height: '150px',
        background: job.status === 'Suspicious' ? 'rgba(239, 68, 68, 0.05)' : 'var(--primary-color)', 
        opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%', zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex justify-between items-start mb-3">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.3 }}>{job.title}</h3>
          {job.status && (
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: getStatusColor(job.status),
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: getStatusBg(job.status),
              padding: '4px 10px',
              borderRadius: '20px',
              border: `1px solid ${getStatusColor(job.status)}40`,
              whiteSpace: 'nowrap'
            }}>
              {getStatusIcon(job.status)} {job.status}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mb-5">
          <p style={{ fontWeight: 600, color: 'var(--primary-color)', fontSize: '0.95rem', margin: 0 }}>{job.company}</p>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '8px' }}>
            {job.type}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-2">
            <span style={{ opacity: 0.6 }}>📍</span> {job.location}
          </div>
          <div className="flex items-center gap-2">
            <span style={{ opacity: 0.6 }}>💼</span> {job.experience}
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <span style={{ opacity: 0.6 }}>💰</span> <span style={{ color: '#fff', fontWeight: 500 }}>{job.salary}</span>
          </div>
        </div>
        
        <div className="flex gap-2 mb-8" style={{ flexWrap: 'wrap' }}>
          {job.tags.map(tag => (
            <span key={tag} style={{ 
              fontSize: '0.7rem', fontWeight: 600, color: '#cbd5e1',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.02em'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
        <Link href={`/jobs/${job.id}`} style={{
          display: 'block', width: '100%', textAlign: 'center', padding: '0.875rem',
          borderRadius: '12px', fontWeight: 600, fontSize: '0.95rem',
          background: job.status === 'Closed' ? 'rgba(255,255,255,0.05)' : job.status === 'Suspicious' ? 'rgba(239, 68, 68, 0.1)' : 'var(--primary-color)',
          color: job.status === 'Closed' ? '#94a3b8' : job.status === 'Suspicious' ? '#ef4444' : '#ffffff',
          border: job.status === 'Suspicious' ? '1px solid rgba(239, 68, 68, 0.3)' : 'none',
          transition: 'all 0.2s',
          cursor: job.status === 'Closed' ? 'not-allowed' : 'pointer'
        }} onMouseOver={e => {
            if (job.status !== 'Closed') {
              e.currentTarget.style.filter = 'brightness(1.1)';
            }
        }} onMouseOut={e => {
            if (job.status !== 'Closed') {
              e.currentTarget.style.filter = 'brightness(1)';
            }
        }}>
          {job.status === 'Closed' ? 'Listing Closed' : 'View Full Details'}
        </Link>
      </div>
    </div>
  );
}
