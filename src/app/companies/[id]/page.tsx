import Navbar from '@/components/Navbar';
import { companies } from '@/data/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CompanyDetailsPage({ params }: { params: { id: string } }) {
  const company = companies.find(c => c.id === params.id);
  
  if (!company) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '800px' }}>
        <Link href="/companies" className="text-muted" style={{ display: 'inline-block', marginBottom: '2rem' }}>&larr; Back to Companies</Link>
        
        <div className="glass-card mb-8">
          <div className="flex items-center gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '4rem', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px' }}>{company.logo}</div>
            <div>
              <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>{company.name}</h1>
              <span className="badge" style={{ fontSize: '1rem', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--primary-color)', border: 'none' }}>Target Role: {company.role}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="heading-md mb-4 flex items-center gap-2"><span>🎓</span> Eligibility Criteria</h2>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <p className="text-muted text-lg">{company.eligibility}</p>
            </div>
          </div>

          <div>
            <h2 className="heading-md mb-4 flex items-center gap-2"><span>📋</span> Exam Pattern & Syllabus</h2>
            <div className="flex flex-col gap-4">
              {company.examPattern.map((round, idx) => (
                <div key={idx} className="flex items-start gap-4" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ background: 'var(--primary-color)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{round}</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Detailed syllabus covering relevant topics and problem-solving strategies for this round.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Start Company Specific Mock Test</button>
          </div>
        </div>
      </div>
    </>
  );
}
