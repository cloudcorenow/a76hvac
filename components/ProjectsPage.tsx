'use client';

import { useState, useRef, useCallback } from 'react';
import Footer from './Footer';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

interface Project {
  id: number;
  cat: string;
  title: string;
  loc: string;
  size: string;
  system: string;
  year: string;
  desc: string;
  before: string;
  after: string;
  extraImages: string[];
}

const projects: Project[] = [
  {
    id: 1, cat: 'residential', title: 'Lakeside Family Retreat', loc: 'Lake Geneva, WI',
    size: '3,400 sq ft', system: 'Carrier 2-Zone Heat Pump', year: '2023',
    desc: 'Complete HVAC replacement for a four-bedroom lakefront home. Installed a Carrier Infinity 2-zone heat pump system with smart thermostat integration, new ductwork, and whole-home air purification. The homeowners now enjoy 40% lower energy bills.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
      'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80',
    ],
  },
  {
    id: 2, cat: 'commercial', title: 'Pinnacle Office Tower', loc: 'Columbus, OH',
    size: '180,000 sq ft', system: 'Trane VRF + Chiller Plant', year: '2022',
    desc: 'Design-build HVAC retrofit for a 22-floor Class A office tower. Project included replacement of aging chiller plant, new VAV distribution, VRF systems for perimeter zones, and a new Trane Tracer SC+ BAS. Delivered on time and 8% under budget.',
    before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    ],
  },
  {
    id: 3, cat: 'residential', title: 'The Harrington Estate', loc: 'Scottsdale, AZ',
    size: '7,800 sq ft', system: 'Lennox Elite Series 4-Zone', year: '2024',
    desc: 'Full HVAC design and installation for a luxury desert estate. Installed a Lennox 4-zone system with humidity control, UV air scrubbers, and full smart home integration via Control4. Designed to handle extreme Arizona summers with efficiency.',
    before: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200&q=80',
    ],
  },
  {
    id: 4, cat: 'commercial', title: 'Liberty Square Mall', loc: 'Nashville, TN',
    size: '410,000 sq ft', system: 'Daikin Applied RTUs + BAS', year: '2023',
    desc: 'Phased HVAC modernization for an occupied regional shopping center. Replaced 48 aging rooftop units over 18 months while maintaining tenant operations, installed a new BACnet BAS, and upgraded all controls. 32% energy reduction achieved.',
    before: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    ],
  },
  {
    id: 5, cat: 'residential', title: 'Sunset Ridge Community', loc: 'Denver, CO',
    size: '48 Units', system: 'Mitsubishi Hyper-Heat Systems', year: '2023',
    desc: 'New construction HVAC for a 48-unit townhome development at 5,400 ft elevation. Specified and installed Mitsubishi H2i Hyper-Heat mini-split systems throughout, capable of efficient operation down to -13°F. Energy Star certified community.',
    before: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=80',
    ],
  },
  {
    id: 6, cat: 'commercial', title: 'General Hospital South Wing', loc: 'Cincinnati, OH',
    size: '95,000 sq ft', system: 'Medical Grade AHUs + Controls', year: '2022',
    desc: 'Critical healthcare HVAC for a new hospital wing including OR suites, ICU, and patient rooms. All systems designed to ASHRAE 170 healthcare standards with redundant air handling, precise pressure relationships, and HEPA filtration throughout.',
    before: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1400&q=85',
    after:  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=85',
    extraImages: [
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&q=80',
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80',
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=80',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
    ],
  },
];

/* ── SVG ICONS ── */
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

/* ── BEFORE/AFTER SLIDER ── */
function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePct = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(98, Math.max(2, raw)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePct(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePct(ev.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchMove = (e: React.TouchEvent) => updatePct(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePct(e.touches[0].clientX)}
      style={{ userSelect: 'none' }}
    >
      <img src={before} alt={`${title} — before`} loading="lazy" className="ba-img ba-before" />
      <div className="ba-after-wrap" style={{ width: `${pct}%` }}>
        <img src={after} alt={`${title} — after`} loading="lazy" className="ba-img ba-after" />
      </div>
      <div className="ba-divider" style={{ left: `${pct}%` }}>
        <div className="ba-handle">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div className="ba-label ba-label-before">Before</div>
      <div className="ba-label ba-label-after">After</div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);

  const allImages = selectedProject
    ? [selectedProject.before, selectedProject.after, ...selectedProject.extraImages]
    : [];

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % allImages.length);
  };

  const openProject = (p: Project) => {
    setSelectedProject(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="inner">
          <div className="section-tag" style={{ color: 'var(--cream)' }}>
            <span style={{ background: 'var(--red)', width: 24, height: 2, display: 'inline-block' }}></span>
            Portfolio
          </div>
          <h1>Our <span style={{ color: 'var(--red)' }}>Projects</span></h1>
          <p>From single-family homes to large commercial installations, every project gets our full commitment.</p>
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      {!selectedProject && (
        <section className="projects-section">
          <div className="inner">
            <div className="section-tag">Residential · Commercial</div>
            <h2 className="section-title">Featured <em>Work</em></h2>
            <div className="filter-bar">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'residential', label: 'Residential' },
                { key: 'commercial', label: 'Commercial' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className={`filter-btn${filter === key ? ' active' : ''}`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filtered.map((p) => (
                <div className="project-card" key={p.id} onClick={() => openProject(p)}>
                  <div className="project-thumb">
                    <img src={p.before} alt={`${p.title} before`} loading="lazy" className="project-thumb-before" />
                    <img src={p.after}  alt={`${p.title} after`}  loading="lazy" className="project-thumb-after" />
                    <div className="project-thumb-overlay"></div>
                    <div className="project-thumb-divider"></div>
                    <span className="project-thumb-label project-thumb-label-before">Before</span>
                    <span className="project-thumb-label project-thumb-label-after">After</span>
                    <div className="project-cat">{p.cat}</div>
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.desc.substring(0, 100)}...</p>
                    <div className="project-meta">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {p.loc}
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {p.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROJECT DETAIL ── */}
      {selectedProject && (
        <section className="project-detail">
          <div className="inner">
            <button className="project-back-btn" onClick={() => setSelectedProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              Back to Projects
            </button>

            <div className="project-detail-header">
              <div className="project-cat" style={{ position: 'static', marginBottom: '0.75rem', display: 'inline-flex' }}>
                {selectedProject.cat}
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{selectedProject.title}</h2>
              <div className="project-meta" style={{ marginTop: '0.6rem' }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {selectedProject.loc}
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {selectedProject.year}
                </span>
              </div>
            </div>

            {/* BEFORE / AFTER SLIDER */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="ba-intro">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
                Drag the slider to reveal before &amp; after
              </div>
              <BeforeAfterSlider
                before={selectedProject.before}
                after={selectedProject.after}
                title={selectedProject.title}
              />
            </div>

            {/* SIDE-BY-SIDE STILLS + click to open lightbox */}
            <div className="ba-stills-grid">
              <div
                className="ba-still"
                onClick={() => openLightbox(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(0)}
                aria-label="View before photo"
              >
                <img src={selectedProject.before} alt={`${selectedProject.title} before`} loading="lazy" />
                <div className="ba-still-label">Before</div>
                <div className="gallery-zoom-hint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
              <div
                className="ba-still"
                onClick={() => openLightbox(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(1)}
                aria-label="View after photo"
              >
                <img src={selectedProject.after} alt={`${selectedProject.title} after`} loading="lazy" />
                <div className="ba-still-label ba-still-label-after">After</div>
                <div className="gallery-zoom-hint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
              {selectedProject.extraImages.map((src, i) => (
                <div
                  key={i}
                  className="ba-still"
                  onClick={() => openLightbox(i + 2)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(i + 2)}
                  aria-label={`View additional photo ${i + 1}`}
                >
                  <img src={src} alt={`${selectedProject.title} additional photo ${i + 1}`} loading="lazy" />
                  <div className="gallery-zoom-hint">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && selectedProject && (
        <div
          className="carousel-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button className="carousel-close" onClick={closeLightbox} aria-label="Close">
            <CloseIcon />
          </button>
          <button className="carousel-nav prev" onClick={prevImg} aria-label="Previous">
            <ChevronLeft />
          </button>
          <div className="carousel-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex]}
              alt={`${selectedProject.title} photo ${lightboxIndex + 1}`}
              loading="lazy"
            />
            <div className="carousel-img-badge">
              {lightboxIndex === 0 ? 'Before' : lightboxIndex === 1 ? 'After' : `Photo ${lightboxIndex - 1}`}
            </div>
          </div>
          <button className="carousel-nav next" onClick={nextImg} aria-label="Next">
            <ChevronRight />
          </button>
          <div className="carousel-dots" onClick={(e) => e.stopPropagation()}>
            {allImages.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === lightboxIndex ? ' active' : ''}`}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <div className="carousel-counter">{lightboxIndex + 1} / {allImages.length}</div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </>
  );
}
