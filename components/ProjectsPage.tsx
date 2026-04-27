'use client';

import { useState } from 'react';
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
    id: 1, cat: 'residential', title: 'Single-Family Home AC Replacement', loc: 'Orange County, CA',
    size: '2,100 sq ft', system: 'Carrier 2-Ton Central AC', year: '2024',
    desc: 'Full AC system replacement for a single-family home. Removed the aging unit, installed a new high-efficiency Carrier central air conditioner, and upgraded the air handler and thermostat. The homeowners saw immediate comfort improvement and reduced energy costs.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/6777becf-ee09-4ce9-e27a-375c28254800/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/88b6ec96-f93a-49a1-f57c-0a56075d5200/public',
    extraImages: [],
  },
  {
    id: 2, cat: 'commercial', title: 'Commercial Rooftop Unit Installation', loc: 'Orange County, CA',
    size: '4,800 sq ft', system: 'Daikin Rooftop Package Unit', year: '2024',
    desc: 'Supply and installation of a Daikin rooftop package unit for a commercial retail space. Work included structural roof curb fabrication, new ductwork distribution, and digital controls integration to meet California Title 24 energy compliance.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e0058ad4-aa08-4e06-b131-9ee0dbc53d00/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e24c710b-b6cf-4365-9aaa-21ea6035bf00/public',
    extraImages: [],
  },
  {
    id: 3, cat: 'residential', title: 'Mini-Split Multi-Zone Installation', loc: 'Orange County, CA',
    size: '1,800 sq ft', system: 'Mitsubishi 3-Zone Mini-Split', year: '2024',
    desc: 'Ductless mini-split installation across three zones in a remodeled home with no existing ductwork. Each room received an individual air handler for independent temperature control, improving comfort throughout and eliminating hot and cold spots.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/46a3982c-e8a3-42b0-bf8a-dd96a4280900/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/b54aab43-c7b6-4943-c440-b2a1ba9e8f00/public',
    extraImages: [],
  },
  {
    id: 4, cat: 'commercial', title: 'Office Building HVAC Upgrade', loc: 'Orange County, CA',
    size: '12,000 sq ft', system: 'Trane VAV System + Controls', year: '2023',
    desc: 'Full HVAC modernization for a multi-tenant office building. Replaced aging constant-volume equipment with a new Trane VAV system, upgraded all zone controls to a BACnet BAS, and rebalanced the ductwork distribution to meet current occupancy demands.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/de2e00d9-7152-4bdd-fe87-2fb77da2be00/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/3b780142-23c4-4efd-63af-515fcf77e200/public',
    extraImages: [],
  },
  {
    id: 5, cat: 'residential', title: 'Heat Pump System Conversion', loc: 'Orange County, CA',
    size: '2,600 sq ft', system: 'Lennox Heat Pump with Air Handler', year: '2023',
    desc: 'Conversion from gas furnace to an all-electric heat pump system for a homeowner looking to reduce their carbon footprint and qualify for California energy rebates. Installation included new refrigerant lines, updated electrical panel connections, and smart thermostat programming.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/7c288d88-724b-43c4-96c1-393128e0c800/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/50e7cdef-8a21-40b4-79ae-49be17224700/public',
    extraImages: [],
  },
  {
    id: 6, cat: 'commercial', title: 'Restaurant Kitchen Ventilation', loc: 'Orange County, CA',
    size: '3,200 sq ft', system: 'Captive-Aire Hood + Makeup Air', year: '2023',
    desc: 'Design and installation of a commercial kitchen ventilation system for a full-service restaurant. Project included a Captive-Aire exhaust hood, dedicated makeup air unit, grease duct system, and fire suppression integration to meet all Orange County health and building code requirements.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/da46676d-d0c9-4afd-7ce4-172b641ad600/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/68884ff8-242c-4d66-7ce6-990e8d8c7a00/public',
    extraImages: [],
  },
  {
    id: 7, cat: 'residential', title: 'Mini-Split Installation', loc: 'Orange County, CA',
    size: 'Single Zone', system: 'Ductless Mini-Split System', year: '2024',
    desc: 'New ductless mini-split installation in a space with no prior HVAC equipment. Provided efficient, room-specific heating and cooling with a clean, low-profile wall-mounted air handler and outdoor condenser.',
    before: '',
    after: '',
    extraImages: [
      'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/01224b31-f9fc-4347-83ce-5832e798ad00/public',
      'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/a97c74ea-710c-4967-01ac-b4e4ead6e600/public',
    ],
  },
  {
    id: 8, cat: 'residential', title: 'Residential HVAC System Replacement', loc: 'Orange County, CA',
    size: 'Single-Family Home', system: 'High-Efficiency HVAC System', year: '2024',
    desc: 'Removed an outdated, inefficient HVAC system and installed a modern high-efficiency replacement. The new equipment delivers improved comfort, quieter operation, and lower monthly energy costs for the homeowner.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/f93381fd-6a09-49ac-3380-f6368b1d1000/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/d7b1d69f-788f-448f-6afa-ebe656269e00/public',
    extraImages: [],
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
    ? [
        ...(selectedProject.before ? [selectedProject.before] : []),
        ...(selectedProject.after  ? [selectedProject.after]  : []),
        ...selectedProject.extraImages,
      ]
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
                    {p.before ? (
                      <>
                        <img src={p.before} alt={`${p.title} before`} loading="lazy" className="project-thumb-before" />
                        {p.after && <img src={p.after} alt={`${p.title} after`} loading="lazy" className="project-thumb-after" />}
                        <div className="project-thumb-overlay"></div>
                        {p.after && <div className="project-thumb-divider"></div>}
                        <span className="project-thumb-label project-thumb-label-before">Before</span>
                        {p.after && <span className="project-thumb-label project-thumb-label-after">After</span>}
                      </>
                    ) : p.extraImages.length > 0 ? (
                      <>
                        <img src={p.extraImages[0]} alt={p.title} loading="lazy" className="project-thumb-before" style={{ width: '100%', clipPath: 'none' }} />
                        <div className="project-thumb-overlay"></div>
                      </>
                    ) : (
                      <div className="project-thumb-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <span>Photos Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.desc.substring(0, 100)}...</p>
                    <div className="project-meta">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {p.loc}
                      </span>
                      <span style={{ textTransform: 'capitalize' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        {p.cat}
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

            {/* IMAGE GRID */}
            {allImages.length > 0 ? (
              <div className="ba-stills-grid">
                {selectedProject.before && (
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
                )}
                {selectedProject.after && (
                  <div
                    className="ba-still"
                    onClick={() => openLightbox(selectedProject.before ? 1 : 0)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openLightbox(selectedProject.before ? 1 : 0)}
                    aria-label="View after photo"
                  >
                    <img src={selectedProject.after} alt={`${selectedProject.title} after`} loading="lazy" />
                    <div className="ba-still-label ba-still-label-after">After</div>
                    <div className="gallery-zoom-hint">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    </div>
                  </div>
                )}
                {selectedProject.extraImages.map((src, i) => {
                  const offset = (selectedProject.before ? 1 : 0) + (selectedProject.after ? 1 : 0);
                  return (
                    <div
                      key={i}
                      className="ba-still"
                      onClick={() => openLightbox(offset + i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && openLightbox(offset + i)}
                      aria-label={`View additional photo ${i + 1}`}
                    >
                      <img src={src} alt={`${selectedProject.title} additional photo ${i + 1}`} loading="lazy" />
                      <div className="gallery-zoom-hint">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="project-no-photos">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p>Project photos coming soon.</p>
              </div>
            )}

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
              {(() => {
                const hasBefore = !!selectedProject.before;
                const hasAfter = !!selectedProject.after;
                if (hasBefore && lightboxIndex === 0) return 'Before';
                if (hasAfter && lightboxIndex === (hasBefore ? 1 : 0)) return 'After';
                const offset = (hasBefore ? 1 : 0) + (hasAfter ? 1 : 0);
                return `Photo ${lightboxIndex - offset + 1}`;
              })()}
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
