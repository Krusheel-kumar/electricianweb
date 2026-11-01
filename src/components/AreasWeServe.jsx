import React from 'react';
import { MapPin, Sparkle, ArrowRight } from '@phosphor-icons/react';
import './AreasWeServe.css';

const areas = [
  { name: "Jubilee Hills", type: "Villas & Penthouses" },
  { name: "Banjara Hills", type: "Luxury Residences" },
  { name: "Financial District", type: "High-Rise Condos" },
  { name: "HITEC City", type: "Premium Apartments" },
  { name: "Gachibowli", type: "Gated Communities" },
  { name: "Kokapet / Neopolis", type: "Ultra-Luxury Towers" },
  { name: "Gandipet", type: "Lakeside Villas" },
  { name: "Tellapur & Nallagandla", type: "Modern Townhouses" },
  { name: "Madhapur", type: "Commercial & Tech Studios" },
  { name: "Kondapur", type: "Bespoke Residences" }
];

const AreasWeServe = ({ onOpenConsultation }) => {
  return (
    <section className="areas-we-serve section-padding" id="areas">
      <div className="container">
        <div className="areas-box glass-panel">
          <div className="areas-header">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span>Regional Coverage</span>
            </div>
            <h2>Executing Turnkey Interiors Across Hyderabad</h2>
            <p>
              From sprawling gated villas in Gandipet to luxury high-rise penthouses in Kokapet and Financial District, 
              our dedicated site engineering teams are active across Hyderabad’s premier residential communities.
            </p>
          </div>

          <div className="areas-grid">
            {areas.map((area, index) => (
              <div key={index} className="area-pill">
                <div className="area-pin-icon">
                  <MapPin weight="fill" />
                </div>
                <div className="area-info">
                  <span className="area-name">{area.name}</span>
                  <span className="area-type">{area.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="areas-footer">
            <span>Own a home in an upcoming community? We provide complimentary site measurements.</span>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => onOpenConsultation && onOpenConsultation('Site Inspection in Hyderabad')}
            >
              Request Free Site Measurement <ArrowRight weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
