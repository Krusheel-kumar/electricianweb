import React from 'react';
import { 
  HouseLine, 
  CookingPot, 
  Wall, 
  LightbulbFilament, 
  Buildings, 
  ArrowsClockwise, 
  ArrowRight, 
  CheckCircle 
} from '@phosphor-icons/react';
import './Services.css';

const servicesData = [
  {
    id: 'turnkey-residential',
    title: 'Turnkey Residential Interiors',
    tag: 'Full Home Execution',
    icon: <HouseLine weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    description: 'Complete end-to-end transformation for luxury flats, penthouses, and villas. From initial 3D space architecture to turnkey white-glove handover.',
    features: [
      '3D Photorealistic Visualization & Space Planning',
      'Custom Millwork & Bespoke Living Furniture',
      'Italian Marble & Engineered Wooden Flooring',
      'Dedicated On-Site Project Architect'
    ]
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens & Wardrobes',
    tag: 'Precision CNC Built',
    icon: <CookingPot weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Ergonomic, factory-machine-pressed modular kitchens and tinted-glass walk-in wardrobes powered by world-class German hardware.',
    features: [
      'BLUM & Hettich Soft-Close Hardware (10-Yr Warranty)',
      'Waterproof BWP Marine Ply & HDHMR Carcasses',
      'Anti-Scratch Quartz & Corian Countertops',
      'Concealed Drawer Lighting & Motion Sensor Profiles'
    ]
  },
  {
    id: 'ceilings-paneling',
    title: 'Architectural Ceilings & Paneling',
    tag: 'Spatial Dimensions',
    icon: <Wall weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Sculptural Saint-Gobain gypsum ceilings, acoustic wood fluting, and luxury TV media backdrops with hidden ambient glows.',
    features: [
      'Seamless Multi-Level Gypsum False Ceilings',
      'Acoustic Charcoal Louvers & Fluted Paneling',
      'Bookmatched Italian Marble Cladding',
      'Integrated Floating Pelmets & Perimeter Coves'
    ]
  },
  {
    id: 'architectural-lighting',
    title: 'Architectural Lighting & Smart Electrics',
    tag: 'Our Signature Moat',
    icon: <LightbulbFilament weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Master electrical engineering integrated into interior architecture. Eliminating ugly surface wires and harsh direct glare forever.',
    features: [
      '48V Ultra-Slim Magnetic Track Lighting',
      'Anti-Glare High CRI>90 Museum Downlights',
      'Smart Home Scenes (Day, Cinema, Evening Glow)',
      'Zero-Hazard Concealed FRLS Fire-Safe Cabling'
    ]
  },
  {
    id: 'commercial-fitouts',
    title: 'Commercial & Retail Fit-Outs',
    tag: 'High-Impact Spaces',
    icon: <Buildings weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Turnkey interior architecture for modern corporate offices, executive suites, designer retail stores, and upscale clinics.',
    features: [
      'Ergonomic Workstation Layouts & Meeting Pods',
      'Acoustic Glass Partitions & Ceilings',
      'High-Footfall Commercial Flooring & Finishes',
      'Turnkey HVAC, Data & Electrical Infrastructure'
    ]
  },
  {
    id: 'complete-renovations',
    title: 'Luxury Home Remodeling',
    tag: 'Total Reimagining',
    icon: <ArrowsClockwise weight="duotone" />,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Breathe contemporary life into older residences. Structural civil reconfigurations, bathroom upgrades, and full spatial renewal.',
    features: [
      'Wall Demolition & Open-Concept Remodeling',
      'Complete Plumbing & Electrical Overhaul',
      'Modern High-Efficiency Waterproofing',
      'Strict Dust-Controlled Dustless Demolition'
    ]
  }
];

const Services = ({ onSelectService }) => {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Turnkey Interior Works Portfolio</span>
          </div>
          <h2>Bespoke Interior Craftsmanship & Integrated Lighting</h2>
          <p>
            We take complete ownership of your interior journey—from raw concrete shells to factory-crafted woodwork, 
            designer ceilings, and intelligent architectural illumination.
          </p>
        </div>

        {/* Services 3D Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card-3d glass-panel">
              {/* Card Image Banner with Tag */}
              <div className="service-image-box">
                <img src={service.image} alt={service.title} className="service-img" loading="lazy" />
                <div className="service-image-overlay"></div>
                <div className="service-tag-pill">{service.tag}</div>
                <div className="service-icon-floating">{service.icon}</div>
              </div>

              {/* Service Info Content */}
              <div className="service-body">
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle weight="fill" className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="service-action-btn"
                  onClick={() => onSelectService && onSelectService(service.title)}
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
