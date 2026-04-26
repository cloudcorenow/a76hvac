import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allegiance 76 Heating and Air Conditioning LLC — Heating & Cooling',
  description: 'Allegiance 76 Heating and Air Conditioning LLC delivers world-class heating, cooling, and air quality solutions with American craftsmanship.',
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
