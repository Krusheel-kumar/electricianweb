import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkle, 
  X, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Lightbulb
} from '@phosphor-icons/react';
import './Portfolio.css';

const categories = ['All', 'Villas & Penthouses', 'Modular Kitchens', 'Master Suites', 'Architectural Lighting', 'Commercial'];

const portfolioProjects = [
  {
    id: 1,
    title: 'The Sky Penthouse',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Villas & Penthouses',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    timeline: '45 Days',
    scope: 'Full Turnkey 4BHK Interior',
    description: 'Double-height living space featuring custom bookmatched Italian marble, acoustic fluted panels, and an integrated 48V low-voltage magnetic track system with 2700K indirect coves.',
    highlights: ['Saint-Gobain Multi-Tier Ceilings', 'Italian Marble Media Wall', 'Integrated Smart Home Automation', 'Concealed Zero-Hazard Wiring']
  },
  {
    id: 2,
    title: 'Minimalist Charcoal Kitchen',
    location: 'Banjara Hills, Hyderabad',
    category: 'Modular Kitchens',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    timeline: '25 Days',
    scope: 'German Modular Kitchen & Island',
    description: 'Matte anti-fingerprint acrylic cabinetry paired with German BLUM Aventos lift-ups, pure white quartz waterfall island, and hidden continuous profile underglow.',
    highlights: ['BLUM Soft-Close Servodrive', 'Waterproof Marine Carcass', 'Concealed Exhaust Ducting', 'Sensor-Activated Drawer LEDs']
  },
  {
    id: 3,
    title: 'The Alabaster Master Suite',
    location: 'Financial District, Hyderabad',
    category: 'Master Suites',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    timeline: '30 Days',
    scope: 'Master Bedroom & Walk-in Wardrobe',
    description: 'Bespoke floating bed platform with upholstered acoustic headboard paneling, bronze-tinted glass walk-in wardrobe, and anti-glare museum downlights.',
    highlights: ['Bronze Tinted Fluted Glass', 'Zero-Glare UGR<19 Recessed Spots', 'Hidden Concealed Wardrobe Lighting', 'Acoustic Wall Paneling']
  },
  {
    id: 4,
    title: 'Signature Architectural Illumination',
    location: 'Gachibowli, Hyderabad',
    category: 'Architectural Lighting',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    timeline: '15 Days',
    scope: 'Lighting Redesign & Smart Scenes',
    description: 'Complete overhaul from harsh glare bulbs to subtle perimeter grazing, magnetic swivel spots, and programmable 4-scene lighting wall keypads.',
    highlights: ['48V Modular Track Profiles', 'High CRI>95 LED Diodes', 'Scene Keypad Automation', 'Concealed FRLS Wiring']
  },
  {
    id: 5,
    title: 'Neo-Classical Villa Interior',
    location: 'Gandipet, Hyderabad',
    category: 'Villas & Penthouses',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    timeline: '60 Days',
    scope: 'Turnkey 5BHK Luxury Villa',
    description: 'Contemporary European moldings, herringbone wooden flooring, customized champagne gold hardware, and architectural crystal chandeliers.',
    highlights: ['Herringbone Flooring', 'Bespoke Cornice Ceilings', 'Smart Inverter & Power Backup', '10-Year Warranty Polish']
  },
  {
    id: 6,
    title: 'Zenith Executive Corporate Suite',
    location: 'Hitec City, Hyderabad',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    timeline: '35 Days',
    scope: 'Turnkey Office Fit-Out (4,000 sq.ft)',
    description: 'Acoustic glass boardrooms, linear continuous architectural lighting channels, ergonomic executive desks, and seamless server rack power management.',
    highlights: ['Double Glazed Acoustic Glass', 'Linear Diffused Office Lighting', 'Dedicated Server UPS Wiring', 'Heavy Traffic Carpet Tiles']
  }
];

const Portfolio = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Curated Living Showcase</span>
          </div>
          <h2>Featured Living Spaces & Executed Turnkey Projects</h2>
          <p>
            Explore our curated portfolio of luxury homes and commercial spaces crafted with 
            uncompromising millwork quality and signature architectural illumination.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="portfolio-filter-row">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio 3D Grid */}
        <div className="portfolio-gallery-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card-3d glass-panel"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-media-box">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-media-overlay"></div>
                <div className="portfolio-badge-pill">{project.category}</div>
                <button className="portfolio-zoom-btn" aria-label="View project details">
                  <ArrowUpRight weight="bold" />
                </button>
              </div>

              <div className="portfolio-info-box">
                <div className="portfolio-location">
                  <MapPin size={14} weight="fill" />
                  <span>{project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <span className="portfolio-scope-tag">{project.scope}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Inspection Modal */}
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-box glass-panel" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={22} weight="bold" />
              </button>

              <div className="modal-image-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-image-overlay"></div>
                <div className="modal-header-content">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-meta-row">
                    <span><MapPin size={16} /> {selectedProject.location}</span>
                    <span><Clock size={16} /> Handed Over in {selectedProject.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="modal-body-content">
                <div className="modal-desc-col">
                  <h4>Project Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-highlights-col">
                  <h4>Craftsmanship Specifications</h4>
                  <ul className="modal-highlights-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle weight="fill" className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-action-bar">
                  <button 
                    className="btn btn-primary btn-glow"
                    onClick={() => {
                      setSelectedProject(null);
                      if (onOpenConsultation) onOpenConsultation(`Inquiry for design similar to ${selectedProject.title}`);
                    }}
                  >
                    <span>Request Similar Design for Your Home</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
