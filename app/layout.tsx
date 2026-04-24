import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alliance 76 HVAC — Heating & Cooling',
  description: 'Alliance 76 HVAC delivers world-class heating, cooling, and air quality solutions with American craftsmanship since 1976.',
  openGraph: {
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
