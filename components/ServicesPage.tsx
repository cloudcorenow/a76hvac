'use client';

import Footer from './Footer';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B22234" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/><polyline points="2 6 6 10 2 14"/><polyline points="22 6 18 10 22 14"/></svg>,
      title: 'Air Conditioning Systems',
      desc: 'Expert installation, repair, and maintenance of central AC systems, ductless mini-splits, VRF systems, and rooftop package units. We work with all major brands including Carrier, Trane, Lennox, and Daikin.',
      features: ['Central AC', 'Mini-Splits', 'VRF Systems', 'Rooftop Units', 'All Brands'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>,
      title: 'Heating Systems',
      desc: 'From gas furnaces to heat pumps and hot water boilers, we install and service the full spectrum of heating technology. Our technicians are trained on modern high-efficiency systems that cut energy bills dramatically.',
      features: ['Gas Furnaces', 'Heat Pumps', 'Boilers', 'Radiant Heat', 'High-Efficiency'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
      title: 'Ventilation & Indoor Air Quality',
      desc: 'We design and install ERV/HRV systems, UV air purifiers, HEPA filtration, and commercial exhaust systems to ensure the air you breathe is clean, fresh, and properly conditioned year-round.',
      features: ['ERV / HRV', 'UV Purification', 'HEPA Filtration', 'Duct Cleaning', 'CO2 Monitoring'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
      title: 'Maintenance & Emergency Repair',
      desc: 'Every new system install includes 2 years of the Patriot Package at no charge. Our Patriot ($209/yr) and Allegiance ($419/yr) plans cover 2–3 visits per year, coil inspections, and more — with diagnostic fees always waived.',
      features: ['24/7 Dispatch', 'Seasonal Tune-Ups', 'Priority Service', 'Parts Warranty', 'Diagnostic Reports'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z"/><path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2"/><path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2"/><line x1="10" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="14" y2="6"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="10" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="14" y2="14"/></svg>,
      title: 'Commercial & Industrial HVAC',
      desc: 'We handle large-scale commercial installs from office buildings and retail centers to warehouses and manufacturing facilities. Our project teams manage design-build, commissioning, and ongoing service contracts.',
      features: ['Design-Build', 'Commissioning', 'Service Contracts', 'Chiller Systems', 'Industrial Controls'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
      title: 'Smart Controls & Automation',
      desc: 'Upgrade your HVAC with intelligent thermostats, building automation systems (BAS), and remote monitoring. We install and program Nest, Ecobee, Honeywell, and enterprise-grade BACnet/LON systems.',
      features: ['Smart Thermostats', 'BAS / BMS', 'Remote Monitoring', 'Energy Analytics', 'Zoning Systems'],
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>
            <span style={{ background: 'var(--red)', width: 24, height: 2, display: 'inline-block' }}></span>
            Our Expertise
          </div>
          <h1>Our <span style={{ color: 'var(--red)' }}>Services</span></h1>
          <p>Six comprehensive HVAC disciplines, delivered with the precision and pride that has defined Allegiance 76 since 2006.</p>
        </div>
      </div>

      <section className="services-section">
        <div className="inner">
          <div className="section-tag">Full-Spectrum HVAC</div>
          <h2 className="section-title">What <em>Allegiance 76</em> Delivers</h2>
          <p className="section-sub">From residential comfort to industrial-grade climate control, our certified teams tackle every challenge with expert precision.</p>

          <div className="services-full-grid">
            {services.map(({ icon, title, desc, features }) => (
              <div className="service-full-card" key={title}>
                <div className="sfc-icon">{icon}</div>
                <div>
                  <h3 className="sfc-title">{title}</h3>
                  <p className="sfc-desc">{desc}</p>
                  <ul className="sfc-features">
                    {features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* MEMBERSHIP PLANS */}
          <div className="plans-wrap">
            <div className="plans-header">
              <div className="section-tag">Home Service Plans</div>
              <h2 className="section-title">Allegiance <em>Membership Plans</em></h2>
              <p className="section-sub">Annual plans designed to keep your system running at peak performance — with exclusive member pricing on every service call.</p>
            </div>
            <div className="plans-grid">
              {/* PATRIOT */}
              <div className="plan-card">
                <div className="plan-top">
                  <div className="plan-badge">Home Service Plan</div>
                  <div className="plan-name">Patriot Package</div>
                  <div className="plan-price-row">
                    <div className="plan-price">$249</div>
                    <div className="plan-price-suffix">/ year · one-time annual payment</div>
                  </div>
                  <div className="plan-add-sys"><strong>$209</strong> per additional system</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(178,34,52,0.25)', border: '1px solid rgba(178,34,52,0.5)', color: 'var(--cream)', padding: '0.35rem 0.75rem', borderRadius: 3, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', marginTop: '0.9rem' }}>
                    <CheckIcon />Included FREE with every new system install — 2 years
                  </div>
                </div>
                <div className="plan-body">
                  <div className="plan-section-label">What's Included</div>
                  <ul className="plan-includes">
                    {[
                      '2 Visits Per Year — 1 Heating + 1 Cooling',
                      'Filter Replacement (standard size)',
                      'Thermostat Calibration',
                      'Hot Surface Igniter Inspection',
                      'Flame Sensor Maintenance',
                      'AC Evaporator Coil Inspection',
                      'Heat Exchanger Inspection',
                      'Outdoor Coil Rinse (standard)',
                      'Drain Line Flush (during visit)',
                      'Blower Compartment Inspection',
                      'Refrigerant Performance Check',
                    ].map((item) => (
                      <li key={item}><CheckIcon />{item}</li>
                    ))}
                  </ul>
                  <div className="plan-section-label">Member Benefits</div>
                  <ul className="plan-benefits">
                    <li><CheckIcon />Diagnostic fee always waived</li>
                    <li><CheckIcon />10% off IAQ, Safety Components, Repairs & System Replacement</li>
                    <li><CheckIcon />Priority scheduling (ahead of non-members)</li>
                  </ul>
                </div>
                <a href="#" className="btn-primary plan-cta" onClick={nav('contact')}>Enroll in Patriot ›</a>
              </div>

              {/* ALLEGIANCE */}
              <div className="plan-card featured">
                <div className="plan-featured-tag">Most Popular</div>
                <div className="plan-top">
                  <div className="plan-badge">Home Service Plan</div>
                  <div className="plan-name">Allegiance Package</div>
                  <div className="plan-price-row">
                    <div className="plan-price">$419</div>
                    <div className="plan-price-suffix">/ year · one-time annual payment</div>
                  </div>
                  <div className="plan-add-sys"><strong>$359</strong> per additional system</div>
                </div>
                <div className="plan-body">
                  <div className="plan-section-label">What's Included</div>
                  <ul className="plan-includes">
                    <li><CheckIcon />3 Visits Per Year — 1 Heating + 1 Cooling + 1 Water Heater</li>
                    <li><CheckIcon />Everything in Patriot Package, plus:</li>
                    <li><CheckIcon />Blower Wheel Cleaning — non-chemical, during FAU maintenance</li>
                    <li><CheckIcon />Indoor Coil Cleaning w/ no-rinse treatment (accessible, during AC maintenance)</li>
                    <li><CheckIcon />Tank Water Heater Flush <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>(Tankless +$110 upcharge)</span></li>
                  </ul>
                  <div className="plan-section-label">Member Benefits</div>
                  <ul className="plan-benefits">
                    <li><CheckIcon />Diagnostic fee always waived</li>
                    <li><CheckIcon />15% off IAQ, Safety Components, Repairs & System Replacement</li>
                    <li><CheckIcon />Priority + same-week scheduling</li>
                  </ul>
                </div>
                <a href="#" className="btn-primary plan-cta" onClick={nav('contact')}>Enroll in Allegiance ›</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
