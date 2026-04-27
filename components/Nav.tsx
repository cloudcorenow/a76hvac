'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav id="nav">
        <div className="nav-stripe"></div>
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate('home'); }}>
            <img
              src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c1245cc8-766a-4709-c140-14e14c610d00/public"
              alt="Allegiance 76 Heating and Air Conditioning LLC Logo"
              style={{ height: 48, width: 'auto', objectFit: 'contain' }}
            />
          </a>
          <ul className="nav-links">
            {(['home', 'services', 'projects', 'about'] as const).map((page) => (
              <li key={page}>
                <a
                  href="#"
                  data-page={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); navigate(page); }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="nav-cta"
                onClick={(e) => { e.preventDefault(); navigate('contact'); }}
              >
                Get a Quote
              </a>
            </li>
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {[
            { key: 'home', label: 'Home' },
            { key: 'services', label: 'Services' },
            { key: 'projects', label: 'Projects' },
            { key: 'about', label: 'About' },
            { key: 'contact', label: 'Get a Quote' },
          ].map(({ key, label }) => (
            <li key={key}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(key); }}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="tel:8007760076" className="mobile-call-btn" aria-label="Call us now">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      </a>
    </>
  );
}
