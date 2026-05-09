import Navbar from '@/components/Navbar';
import { prepCategories } from '@/data/mock';
import Link from 'next/link';

export default function PrepPage() {
  return (
    <>
      <Navbar />
      <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="text-center mb-12">
          <h1 className="heading-lg">Master Your Preparation</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive resources for every stage of your interview journey. Select a category to start learning and practicing.
          </p>
        </div>
        
        <div className="grid grid-cols-2">
          {prepCategories.map(category => (
            <Link key={category.id} href={`/prep/${category.id}`} className="glass-card flex flex-col" style={{ transition: 'transform 0.3s ease' }}>
              <div className="flex items-center gap-4 mb-4">
                <div style={{ fontSize: '3rem' }}>{category.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: 0 }}>{category.title}</h3>
              </div>
              <p className="text-muted flex-grow mb-6">{category.description}</p>
              
              <div className="mb-4">
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Key Modules:</h4>
                <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                  {category.modules.map(mod => (
                    <span key={mod} className="badge" style={{ background: 'var(--bg-secondary)' }}>{mod}</span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                <span className="text-primary" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Start Learning &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
