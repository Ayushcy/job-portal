import Navbar from '@/components/Navbar';
import { prepCategories } from '@/data/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PrepCategoryPage({ params }: { params: { category: string } }) {
  const category = prepCategories.find(c => c.id === params.category);
  
  if (!category) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <Link href="/prep" className="text-muted" style={{ display: 'inline-block', marginBottom: '2rem' }}>&larr; Back to Preparation Hub</Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div style={{ fontSize: '4rem' }}>{category.icon}</div>
          <div>
            <h1 className="heading-xl" style={{ marginBottom: '0.25rem' }}>{category.title} Prep</h1>
            <p className="text-muted text-lg">{category.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="glass-card" style={{ gridColumn: 'span 2' }}>
            <h2 className="heading-md mb-6">Study Modules</h2>
            <div className="flex flex-col gap-4">
              {category.modules.map((mod, idx) => (
                <div key={idx} className="flex justify-between items-center" style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{mod}</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Comprehensive notes and conceptual breakdown.</p>
                  </div>
                  <button className="btn-outline">Read Notes</button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card" style={{ alignSelf: 'start' }}>
            <h2 className="heading-md mb-4">Practice Mode</h2>
            <p className="text-muted mb-6">Test your knowledge with curated problems and mock tests specific to {category.title}.</p>
            <button className="btn-primary w-full mb-4">Start Mock Test</button>
            <button className="btn-outline w-full text-center">View Problem Set</button>
          </div>
        </div>
      </div>
    </>
  );
}
