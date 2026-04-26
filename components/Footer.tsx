'use client';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="stripe-accent"></div>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="footer-logo" onClick={nav('home')}>
            <img
              src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/a176505f-29dc-48e9-a57a-2b705c67c500/public"
              alt="Allegiance 76 Heating and Air Conditioning LLC"
              style={{ height: 44 }}
            />
            <span>Allegiance 76 Heating and Air Conditioning LLC</span>
          </a>
          <p>Heating, cooling, and air quality solutions delivered with American craftsmanship since 2006. Trusted by thousands of California homeowners, businesses, and industrial facilities.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#" onClick={nav('services')}>Air Conditioning</a></li>
            <li><a href="#" onClick={nav('services')}>Heating Systems</a></li>
            <li><a href="#" onClick={nav('services')}>Ventilation & IAQ</a></li>
            <li><a href="#" onClick={nav('services')}>Maintenance</a></li>
            <li><a href="#" onClick={nav('services')}>Smart Controls</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#" onClick={nav('about')}>Our Story</a></li>
            <li><a href="#" onClick={nav('about')}>Core Values</a></li>
            <li><a href="#" onClick={nav('about')}>Our Team</a></li>
            <li><a href="#" onClick={nav('projects')}>Our Projects</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:7147409165">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                (714) 740-9165
              </a>
            </li>
            <li>
              <a href="mailto:info@allegiance76hvac.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@allegiance76hvac.com
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Orange County, CA
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/allegiance76hvac" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @allegiance76hvac
              </a>
            </li>
            <li><a href="#" onClick={nav('contact')}>Get a Quote</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Allegiance 76 Heating and Air Conditioning LLC. All rights reserved.</span>
        <span>
          Licensed in California · Bonded · Insured · Proudly American
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        </span>
      </div>
    </footer>
  );
}
