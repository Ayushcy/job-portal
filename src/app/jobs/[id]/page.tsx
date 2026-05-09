import Navbar from '@/components/Navbar';
import { jobs } from '@/data/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = jobs.find(j => j.id === params.id);
  
  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '800px' }}>
        <Link href="/jobs" className="text-muted" style={{ display: 'inline-block', marginBottom: '2rem' }}>&larr; Back to jobs</Link>
        
        <div className="glass-card mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>{job.title}</h1>
              <p className="text-muted" style={{ fontSize: '1.25rem' }}>{job.company}</p>
            </div>
            <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Apply Now</button>
          </div>
          
          <div className="flex gap-6 mb-8 text-muted" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Location</span>
              <strong style={{ color: 'var(--text-primary)' }}>{job.location}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Experience</span>
              <strong style={{ color: 'var(--text-primary)' }}>{job.experience}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Salary</span>
              <strong style={{ color: 'var(--text-primary)' }}>{job.salary}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Job Type</span>
              <strong style={{ color: 'var(--text-primary)' }}>{job.type}</strong>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="heading-md">Required Skills</h3>
            <div className="flex gap-2 mt-4" style={{ flexWrap: 'wrap' }}>
              {job.tags.map(tag => (
                <span key={tag} className="badge" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="heading-md">Job Description</h3>
            <div className="text-muted mt-4" style={{ lineHeight: '1.8' }}>
              <p className="mb-4">We are looking for a highly capable {job.title} to join our dynamic team at {job.company}. You will be working on cutting-edge technologies to build scalable and performant applications.</p>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Responsibilities:</h4>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li>Develop and maintain high-quality software solutions.</li>
                <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                <li>Identify and correct bottlenecks and fix bugs.</li>
                <li>Help maintain code quality, organization, and automatization.</li>
              </ul>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Requirements:</h4>
              <ul style={{ marginLeft: '1.5rem' }}>
                <li>Proven experience in relevant technologies.</li>
                <li>Strong problem-solving skills and algorithmic thinking.</li>
                <li>Excellent communication and teamwork skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
