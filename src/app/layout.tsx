import type { Metadata } from 'next';
import './globals.css';

import { AuthProvider } from '@/components/AuthProvider';

export const metadata: Metadata = {
  title: 'NextGen Career | Job Portal & Prep',
  description: 'Your ultimate destination for tech jobs, DSA preparation, and company hiring processes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
