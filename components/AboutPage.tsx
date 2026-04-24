'use client';

import Footer from './Footer';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>
            <span style={{ background: 'var(--red)', width: 24, height: 2, display: 'inline-block' }}></span>
            Our Story
          </div>
          <h1>About <span style={{ color: 'var(--red)' }}>Allegiance 76</span></h1>
          <p>A family-owned California company built on the belief that every home and family deserves honest, high-quality comfort solutions.</p>
        </div>
      </div>

      <section className="about-story">
        <div className="inner">
          <div className="about-image-wrap">
            <div className="about-img-box">
              <div className="about-year-badge">
                <div className="yr">CA</div>
                <div className="est">Licensed</div>
              </div>
            </div>
            <div className="about-stripe-block"></div>
          </div>
          <div className="about-story-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">Comfort Built on <em>Taking Care of People</em></h2>
            <p>At Allegiance 76 Heating And Air Conditioning, we believe comfort isn&apos;t just about temperature — it&apos;s about taking care of people. We are a family-owned and operated company built on a simple principle: <strong>put families first, always.</strong></p>
            <p>In an industry increasingly taken over by large private investment groups focused on volume and profit, we chose a different path. We built Allegiance 76 to bring back what matters most — honesty, craftsmanship, and genuine care for the homeowners we serve.</p>
            <p>Our company is led by the owner and supported by a dedicated install team who share the same values and standards. Every project is handled with precision, pride, and personal accountability. When you work with us, you&apos;re not just another number in a system — you&apos;re a family trusting us with your home, and we take that seriously.</p>
            <p>We don&apos;t believe in high-pressure sales tactics or one-size-fits-all solutions. We focus on educating our customers, providing honest recommendations, and delivering long-term comfort solutions that truly fit your home and your budget.</p>
            <blockquote style={{ borderLeft: '4px solid var(--red)', paddingLeft: '1.25rem', margin: '1.5rem 0', fontStyle: 'italic', color: 'var(--text-mid)' }}>
              &ldquo;Deliver reliable comfort while earning your trust for life.&rdquo;
            </blockquote>
            <a href="#" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }} onClick={nav('contact')}>Work With Us ›</a>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="inner">
          <div className="section-tag">What Guides Us</div>
          <h2 className="section-title">Our Core <em>Values</em></h2>
          <p className="section-sub">These aren&apos;t slogans on a wall. They&apos;re the principles every member of our team lives by on every job, every day.</p>
          <div className="values-grid">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l1.06 1.06L12 21.23l7.36-7.94 1.06-1.06a5.4 5.4 0 000-7.65z"/></svg>,
                title: 'Integrity First',
                desc: 'We do what\'s right, even when no one is watching.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                title: 'Family-Focused',
                desc: 'We treat your home like it\'s our own.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
                title: 'Craftsmanship',
                desc: 'Every install is done with attention to detail and long-term performance in mind.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
                title: 'Accountability',
                desc: 'When we put our name on a job, we stand behind it.'
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
                title: 'American Values',
                desc: 'Hard work, honesty, and commitment to our community.'
              },
            ].map(({ icon, title, desc }) => (
              <div className="value-card" key={title}>
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>Our People</div>
          <h2 className="section-title light">Owner-Led. <em>Family-Operated.</em></h2>
          <p className="section-sub light">Allegiance 76 is led by the owner and supported by a dedicated install team who share the same values and hold the same standards on every single job. No subcontractors. No revolving crews. Just people who take pride in their work.</p>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="team-card">
              <div className="team-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a6 6 0 0112 0v2"/></svg>
              </div>
              <div className="team-info">
                <div className="team-name">Owner &amp; Operator</div>
                <div className="team-role">Founder · Lead Technician</div>
                <div className="team-bio">Every job is personal. As owner and working technician, I&apos;m directly involved in the work — because putting my name on it means I have to stand behind it.</div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div className="team-info">
                <div className="team-name">Install Team</div>
                <div className="team-role">Certified HVAC Technicians</div>
                <div className="team-bio">Handpicked for their skill, work ethic, and shared commitment to doing the job right the first time — every time.</div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l1.06 1.06L12 21.23l7.36-7.94 1.06-1.06a5.4 5.4 0 000-7.65z"/></svg>
              </div>
              <div className="team-info">
                <div className="team-name">Our Customers</div>
                <div className="team-role">The Reason We Show Up</div>
                <div className="team-bio">California families who trust us with their homes. Their comfort — and their trust — is the entire mission.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
