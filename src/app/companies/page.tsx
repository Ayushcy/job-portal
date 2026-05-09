import Navbar from '@/components/Navbar';
import { companies } from '@/data/mock';
import Link from 'next/link';

export default function CompaniesPage() {
  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="text-center mb-12">
          <h1 className="heading-lg">Company Hiring Processes</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Get exclusive insights into the hiring patterns, syllabus, and eligibility criteria for top tech companies.
          </p>
        </div>

        <div className="grid grid-cols-2">
          {companies.map(company => (
            <div key={company.id} className="glass-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ fontSize: '3rem', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px' }}>{company.logo}</div>
                  <div>
                    <h3 className="heading-md" style={{ marginBottom: 0 }}>{company.name}</h3>
                    <p className="text-muted">Target Role: {company.role}</p>
                  </div>
                </div>
                
                <p className="text-muted mb-6" style={{ fontSize: '0.9rem', borderLeft: '3px solid var(--primary-color)', paddingLeft: '1rem' }}>
                  <strong>Eligibility:</strong> {company.eligibility}
                </p>
              </div>

              <Link href={`/companies/${company.id}`} className="btn-outline w-full text-center mt-auto">
                View Exam Pattern & Syllabus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
