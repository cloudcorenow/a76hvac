'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Footer from './Footer';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    property: '',
    preferredTime: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.firstName || !form.lastName || !form.email || !form.service) {
      setError('Please fill in all required fields (First Name, Last Name, Email, Service Type).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    const { error: dbError } = await supabase.from('contact_submissions').insert({
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      service: form.service,
      property: form.property,
      preferred_time: form.preferredTime,
      message: form.message,
      status: 'new',
    });

    setLoading(false);

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
      return;
    }

    setSuccess(true);
    setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', property: '', preferredTime: '', message: '' });
    setTimeout(() => setSuccess(false), 8000);
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>
            <span style={{ background: 'var(--red)', width: 24, height: 2, display: 'inline-block' }}></span>
            Reach Out
          </div>
          <h1>Get in <span style={{ color: 'var(--red)' }}>Touch</span></h1>
          <p>Ready for a free estimate, emergency service, or just have a question? We&apos;re here Mon–Sat 8AM–6PM, with emergency service available on Sundays.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="inner">
          <div className="contact-info-col">
            <div className="section-tag">Contact Info</div>
            <h2 className="section-title">We're <em>Always</em> On</h2>
            <p className="section-sub" style={{ marginBottom: '0.5rem' }}>Reach us by phone, email, or the form. Our team responds to all inquiries within 2 hours during business hours.</p>
            <div className="info-cards">
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: 'Phone',
                  main: '(800) 776-0076',
                  sub: 'Emergency line available Sundays · Fee applies',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  main: 'info@allegiance76hvac.com',
                  sub: 'Response within 2 business hours',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Servicing',
                  main: 'Orange County, CA',
                  sub: 'Licensed & serving California',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  label: 'Business Hours',
                  main: 'Mon–Sat: 8AM – 6PM',
                  sub: 'Sun: Emergency Service Available · Emergency fee applies',
                },
              ].map(({ icon, label, main, sub }) => (
                <div className="info-card" key={label}>
                  <div className="info-card-icon">{icon}</div>
                  <div>
                    <h4>{label}</h4>
                    <p>{main}</p>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>Request a Free Quote</h3>
            <p>Fill out the form below and one of our specialists will reach out within 2 hours. No pressure, no obligations.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label>Service Type *</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  <option>Air Conditioning Installation</option>
                  <option>AC Repair / Maintenance</option>
                  <option>Heating System Installation</option>
                  <option>Heating Repair / Maintenance</option>
                  <option>Ventilation & Indoor Air Quality</option>
                  <option>Commercial / Industrial HVAC</option>
                  <option>Smart Controls & Automation</option>
                  <option>Emergency Service</option>
                  <option>Allegiance Membership Plan</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Property Type</label>
                  <select name="property" value={form.property} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Contact Time</label>
                  <select name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                    <option value="">Anytime</option>
                    <option>Morning (7AM–12PM)</option>
                    <option>Afternoon (12PM–5PM)</option>
                    <option>Evening (5PM–8PM)</option>
                    <option>ASAP – Emergency</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project, current system, or issue..." />
              </div>
              {error && (
                <div style={{ background: '#FEF2F2', border: '2px solid #DC2626', borderRadius: 6, padding: '1rem', marginBottom: '1rem', color: '#991B1B', fontSize: '0.9rem' }}>
                  {error}
                </div>
              )}
              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Inquiry ›'}
              </button>
              {success && (
                <div className="form-success show">
                  <p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A7040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      Your inquiry has been received!
                    </span>
                    {' '}A specialist will contact you within 2 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
