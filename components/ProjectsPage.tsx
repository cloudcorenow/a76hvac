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
  extraImages: Array<string | { src: string; label: 'before' | 'after' }>;
}

const projects: Project[] = [
  {
    id: 1, cat: 'residential', title: 'Full Residential HVAC System Replacement', loc: 'Orange County, CA',
    size: '2,100 sq ft', system: 'High-Efficiency AC + Ultra Low NOx Furnace', year: '2024',
    desc: 'Full residential system replacement including all new ductwork and an upgraded 4" filtration system. We installed a high-efficiency AC paired with an ultra Low NOx furnace. Permits and HERS (Home Energy Rating System) testing are always included on every install.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/6777becf-ee09-4ce9-e27a-375c28254800/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/88b6ec96-f93a-49a1-f57c-0a56075d5200/public',
    extraImages: [
      'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/da46676d-d0c9-4afd-7ce4-172b641ad600/public',
      'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/68884ff8-242c-4d66-7ce6-990e8d8c7a00/public',
    ],
  },
  {
    id: 2, cat: 'commercial', title: 'Townhome Rooftop Unit Replacement', loc: 'Orange County, CA',
    size: 'Townhome', system: 'High-Efficiency American-Made Rooftop Unit', year: '2024',
    desc: 'Townhome rooftop unit replacement. We removed the aging rooftop unit and installed a new high-efficiency American-made rooftop unit for reliable, long-term performance.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e0058ad4-aa08-4e06-b131-9ee0dbc53d00/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e24c710b-b6cf-4365-9aaa-21ea6035bf00/public',
    extraImages: [],
  },
  {
    id: 3, cat: 'residential', title: 'Whole-Home Gas-to-Heat-Pump Conversion', loc: 'Orange County, CA',
    size: '1,800 sq ft', system: 'High-Efficiency All-Electric Heat Pump', year: '2024',
    desc: 'Replaced this homeowner\u2019s existing gas furnace and electric AC with a fully redesigned, high-efficiency all-electric heat pump system. Complete load calculations were performed to properly size the new equipment for cleaner, more efficient year-round comfort.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/46a3982c-e8a3-42b0-bf8a-dd96a4280900/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/b54aab43-c7b6-4943-c440-b2a1ba9e8f00/public',
    extraImages: [],
  },
  {
    id: 4, cat: 'residential', title: 'Electrification Heat Pump Conversion', loc: 'Orange County, CA',
    size: 'Single-Family Home', system: 'All-Electric Heat Pump System', year: '2023',
    desc: 'Took this home off natural gas with a fully engineered all-electric heat pump conversion. We removed the original furnace and AC, recalculated the system from scratch, and installed a high-efficiency heat pump for cleaner heating and cooling in one unit.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/de2e00d9-7152-4bdd-fe87-2fb77da2be00/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/3b780142-23c4-4efd-63af-515fcf77e200/public',
    extraImages: [],
  },
  {
    id: 5, cat: 'residential', title: 'Custom-Engineered Heat Pump Retrofit', loc: 'Orange County, CA',
    size: '2,600 sq ft', system: 'High-Efficiency Electric Heat Pump', year: '2023',
    desc: 'Comprehensive heat pump retrofit replacing this customer\u2019s gas furnace and electric AC. We redesigned the system around a new high-efficiency all-electric heat pump, sized through detailed load calculations for optimal performance and long-term energy savings.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/7c288d88-724b-43c4-96c1-393128e0c800/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/50e7cdef-8a21-40b4-79ae-49be17224700/public',
    extraImages: [],
  },
  {
    id: 6, cat: 'residential', title: 'Upflow Closet Furnace & Ductwork Replacement with AC Addition', loc: 'Orange County, CA',
    size: 'Single-Family Home', system: 'High-Efficiency American-Made Furnace + AC', year: '2024',
    desc: 'Complete upflow closet furnace and ductwork replacement with a brand-new AC system addition. The original heat-only setup was fully removed, including certified asbestos abatement throughout the system, and replaced with all new high-efficiency American-made heating and cooling equipment.',
    before: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/a27ee419-7c21-4c33-0ad3-1de3de496900/public',
    after:  'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/f0dbf58a-b56e-47df-1457-30478a465700/public',
    extraImages: [
      { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/ddfefe45-b81d-4a47-0de4-83ffc3239100/public', label: 'before' },
      { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/e26b9bc5-28e1-42e7-9819-6245cb3f3300/public', label: 'before' },
      { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c42ef99f-0edc-44cb-112f-4883d9a95700/public', label: 'after' },
      { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/efdbe692-8485-4bdc-d4fe-481f52e1d500/public', label: 'after' },
    ],
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
    id: 8, cat: 'residential', title: 'All-Electric Heat Pump Upgrade', loc: 'Orange County, CA',
    size: 'Single-Family Home', system: 'High-Efficiency Heat Pump System', year: '2024',
    desc: 'Full conversion from a gas-furnace-and-electric-AC setup to a single high-efficiency, all-electric heat pump system. Every component was reselected and the airflow rebalanced based on the home\u2019s true heating and cooling loads.',
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
        ...selectedProject.extraImages.map((x) => (typeof x === 'string' ? x : x.src)),
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
                        <img src={typeof p.extraImages[0] === 'string' ? p.extraImages[0] : p.extraImages[0].src} alt={p.title} loading="lazy" className="project-thumb-before" style={{ width: '100%', clipPath: 'none' }} />
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

            <div className="project-detail-desc">
              <p>{selectedProject.desc}</p>
            </div>

            {/* IMAGE GRID */}
            {allImages.length > 0 ? (
              <div className="ba-stills-grid">
                {(() => {
                  type GalleryItem = { src: string; label: 'before' | 'after' | null; lightboxIndex: number };
                  const items: GalleryItem[] = [];
                  let idx = 0;
                  if (selectedProject.before) items.push({ src: selectedProject.before, label: 'before', lightboxIndex: idx++ });
                  if (selectedProject.after) items.push({ src: selectedProject.after, label: 'after', lightboxIndex: idx++ });
                  selectedProject.extraImages.forEach((item) => {
                    const src = typeof item === 'string' ? item : item.src;
                    const label = typeof item === 'string' ? null : item.label;
                    items.push({ src, label, lightboxIndex: idx++ });
                  });
                  const order = (l: 'before' | 'after' | null) => (l === 'before' ? 0 : l === 'after' ? 1 : 2);
                  const sorted = [...items].sort((a, b) => order(a.label) - order(b.label));
                  return sorted.map((it, i) => (
                    <div
                      key={i}
                      className="ba-still"
                      onClick={() => openLightbox(it.lightboxIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && openLightbox(it.lightboxIndex)}
                      aria-label={`View ${it.label ?? 'additional'} photo`}
                    >
                      <img src={it.src} alt={`${selectedProject.title} ${it.label ?? 'additional photo'}`} loading="lazy" />
                      {it.label === 'before' && <div className="ba-still-label">Before</div>}
                      {it.label === 'after' && <div className="ba-still-label ba-still-label-after">After</div>}
                      <div className="gallery-zoom-hint">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      </div>
                    </div>
                  ));
                })()}
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
