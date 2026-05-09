import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container animate-fade-in">
        <section className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div className="badge mb-4">🚀 Launch Your Career Today</div>
          <h1 className="heading-xl">Land Your Dream Job with NextGen Career</h1>
          <p className="text-muted mb-8" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
            The all-in-one platform for job hunting, DSA preparation, and mastering company-specific hiring processes.
          </p>
          <div className="flex gap-4">
            <Link href="/jobs" className="btn-primary">Browse Jobs</Link>
            <Link href="/prep" className="btn-outline">Start Preparation</Link>
          </div>
        </section>

        <section className="section">
          <h2 className="heading-lg text-center mb-8">Everything You Need to Succeed</h2>
          <div className="grid grid-cols-3">
            <Link href="/jobs" className="glass-card flex flex-col items-center text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3 className="heading-md">Job Portal</h3>
              <p className="text-muted">Find the latest tech opportunities filtered by role, experience, and location.</p>
            </Link>
            <Link href="/prep" className="glass-card flex flex-col items-center text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h3 className="heading-md">Aptitude & Technical Prep</h3>
              <p className="text-muted">Comprehensive notes and practice problems for Aptitude, HR, and Technical rounds.</p>
            </Link>
            <Link href="/dsa-sheet" className="glass-card flex flex-col items-center text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
              <h3 className="heading-md">Dedicated DSA Sheet</h3>
              <p className="text-muted">Topic-wise curated Data Structures and Algorithms problems to crack top product companies.</p>
            </Link>
          </div>
        </section>

        <section className="section pb-8">
           <div className="glass-card text-center" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}>
              <h2 className="heading-lg">Know Your Target Company</h2>
              <p className="text-muted mb-8">Access detailed exam patterns, syllabus, and eligibility criteria for top MNCs.</p>
              <Link href="/companies" className="btn-primary">View Hiring Processes</Link>
           </div>
        </section>
      </div>
    </>
  );
}
