import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Ahmed — Psychiatry Online',
  description: 'Book a video consultation with Dr. Ahmed, MD Psychiatrist in Cairo, Egypt.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
