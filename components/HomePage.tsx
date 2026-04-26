'use client';

import Footer from './Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-stars"></div>
        <div className="hero-stripes"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-up fade-up-1">Trusted Since 2006 · Proudly American</div>
            <h1 className="hero-title fade-up fade-up-2">
              Comfort<br />Built on<br /><em>American</em><br />Values
            </h1>
            <p className="hero-subtitle fade-up fade-up-3">
              Allegiance 76 Heating and Air Conditioning LLC delivers world-class heating, cooling, and air quality solutions with the integrity and craftsmanship this country was built on. Residential, commercial, industrial — we do it all.
            </p>
            <div className="hero-actions fade-up fade-up-4">
              <a href="#" className="btn-primary" onClick={nav('contact')}>Get Free Quote ›</a>
              <a href="#" className="btn-outline" onClick={nav('services')}>Our Services</a>
            </div>
            <div className="hero-stats" style={{ marginTop: '3rem' }}>
              <div className="hero-stat fade-up fade-up-1">
                <div className="num">20<span>+</span></div>
                <div className="label">Years in Service</div>
              </div>
              <div className="hero-stat fade-up fade-up-2">
                <div className="num">12<span>K+</span></div>
                <div className="label">Installs Complete</div>
              </div>
              <div className="hero-stat fade-up fade-up-3">
                <div className="num">99<span>%</span></div>
                <div className="label">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="hero-card-wrap fade-up fade-up-3">
            <div className="hero-card">
              <div className="hero-card-icon red">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/><polyline points="2 6 6 10 2 14"/><polyline points="22 6 18 10 22 14"/></svg>
              </div>
              <div>
                <div className="hero-card-title">24/7 Emergency Service</div>
                <div className="hero-card-desc">Day or night, our certified technicians are on call to restore your comfort fast.</div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon navy">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>
              </div>
              <div>
                <div className="hero-card-title">Licensed & Insured</div>
                <div className="hero-card-desc">Fully licensed, bonded, and insured in California. Your protection is our promise.</div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon red">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div>
                <div className="hero-card-title">Industry-Leading Warranty Coverage</div>
                <div className="hero-card-desc">10-yr manufacturer warranty, 2-yr labor warranty, plus 2 years of the Patriot Package included free with every new system install.</div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon navy">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              </div>
              <div>
                <div className="hero-card-title">American-Made Equipment</div>
                <div className="hero-card-desc">We prioritize domestic manufacturers and factory-trained installation teams.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHTS */}
      <section className="services-home">
        <div className="inner">
          <div className="header">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Six Pillars of <em>HVAC Excellence</em></h2>
            <p className="section-sub">From routine tune-ups to full industrial system overhauls, Allegiance 76 brings precision and pride to every job.</p>
          </div>
          <div className="service-grid">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/><polyline points="2 6 6 10 2 14"/><polyline points="22 6 18 10 22 14"/></svg>,
                title: 'Air Conditioning',
                desc: 'Central AC, ductless mini-splits, and rooftop units installed and serviced with precision.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B22234" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>,
                title: 'Heating Systems',
                desc: 'Furnace installation, heat pumps, boilers, and radiant floor heating done right.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
                title: 'Ventilation & IAQ',
                desc: 'Air quality solutions, ERVs, HRVs, and duct cleaning for healthier indoor environments.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B22234" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
                title: 'Maintenance & Repair',
                desc: 'Scheduled tune-ups and fast emergency repairs to keep your systems running peak season.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z"/><path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2"/><path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2"/><line x1="10" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="14" y2="6"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="10" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="14" y2="14"/></svg>,
                title: 'Commercial HVAC',
                desc: 'Office buildings, retail, restaurants — scalable solutions for demanding commercial needs.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B22234" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
                title: 'Smart Controls',
                desc: 'Nest, Ecobee, and BAS integration for intelligent, energy-saving climate automation.'
              },
            ].map(({ icon, title, desc }) => (
              <div className="service-card" key={title}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>
            <span style={{ background: 'var(--red)', width: 24, height: 2, display: 'inline-block' }}></span>
            By The Numbers
          </div>
          <h2 className="section-title light">Allegiance 76 <em>At a Glance</em></h2>
          <div className="trust-grid">
            {[
              { num: '12', sup: 'K+', label: 'Systems Installed' },
              { num: '20', sup: '+', label: 'Years in Business' },
              { num: '3', sup: 'K+', label: '5-Star Reviews' },
              { num: '24', sup: '/7', label: 'Emergency Response' },
            ].map(({ num, sup, label }) => (
              <div className="trust-item" key={label}>
                <div className="trust-num">{num}<span>{sup}</span></div>
                <div className="trust-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME CTA */}
      <section className="home-cta">
        <div className="inner">
          <div className="section-tag">Ready to Start?</div>
          <h2 className="section-title">Your Comfort Is Our <em>Mission</em></h2>
          <p>Whether you need a new system, a quick repair, or a full commercial retrofit — Allegiance 76 has the expertise and the heart to deliver.</p>
          <div className="actions">
            <a href="#" className="btn-primary" onClick={nav('contact')}>Schedule Service ›</a>
            <a href="#" className="btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }} onClick={nav('projects')}>View Our Work</a>
          </div>
        </div>
      </section>

      <div className="stripe-accent"></div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
