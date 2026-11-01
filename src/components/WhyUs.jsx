import React from 'react';
import { 
  ShieldCheck, 
  LightbulbFilament, 
  Cpu, 
  CalendarCheck, 
  Check, 
  X, 
  Sparkle 
} from '@phosphor-icons/react';
import './WhyUs.css';

const comparisonData = [
  {
    parameter: 'Lighting & Electrics',
    traditional: 'Treated as an afterthought; surface conduits and uneven fixtures.',
    venkeylavy: 'Engineered into the ceiling & joinery architecture with 48V magnetic tracks.'
  },
  {
    parameter: 'Carpentry & Joinery',
    traditional: 'Hand-cut on-site by unverified carpenters; uneven edge chipping.',
    venkeylavy: '100% German CNC factory-pressed, laser edge-banded HDHMR & Marine ply.'
  },
  {
    parameter: 'Project Timelines',
    traditional: 'Frequent delays spanning 3 to 6 months with endless excuses.',
    venkeylavy: 'Strict 45-day guaranteed move-in handover with penalty-backed commitment.'
  },
  {
    parameter: 'Pricing Transparency',
    traditional: 'Vague estimates with 30-40% cost escalations mid-project.',
    venkeylavy: 'Transparent Bill of Quantities (BOQ). Every brand and rate is locked.'
  },
  {
    parameter: 'Material Warranty',
    traditional: 'Informal verbal promises with zero post-handover support.',
    venkeylavy: '10-Year written structural & replacement warranty certificate.'
  }
];

const WhyUs = () => {
  return (
    <section className="why-us section-padding" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>The VenkeyLavy Standard</span>
          </div>
          <h2>Why Homeowners Trust VenkeyLavy Over Traditional Contractors</h2>
          <p>
            When you combine interior design sophistication with master electrical engineering, 
            you eliminate the biggest friction point in home renovations.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="why-us-pillars-grid">
          <div className="pillar-card glass-panel">
            <div className="pillar-icon">
              <LightbulbFilament weight="duotone" />
            </div>
            <h4>Integrated Lighting Architecture</h4>
            <p>Concealed fire-retardant wiring, zero-glare museum downlights, and custom LED channel diffusers built seamlessly into the woodwork.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon">
              <Cpu weight="duotone" />
            </div>
            <h4>German CNC Factory Joinery</h4>
            <p>Precision edge-banding and calibrated panel cuts. No dusty carpentry on-site, no moisture-induced bubbling, and 100% BLUM soft-close hardware.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon">
              <CalendarCheck weight="duotone" />
            </div>
            <h4>45-Day Handover Guarantee</h4>
            <p>We work with strict critical-path schedules. Daily photo/video progress logs via your dedicated personal WhatsApp project manager.</p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon">
              <ShieldCheck weight="duotone" />
            </div>
            <h4>10-Year Comprehensive Warranty</h4>
            <p>Anti-termite, moisture-resistant, and structural integrity protection backed by direct manufacturer certifications and service support.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper glass-panel">
          <div className="table-header-row">
            <span className="th-col th-param">Deliverable Standard</span>
            <span className="th-col th-traditional">Traditional Local Contractors</span>
            <span className="th-col th-venkeylavy">
              <Sparkle weight="fill" className="th-sparkle" /> VenkeyLavy Interiors
            </span>
          </div>

          <div className="table-body">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="table-data-row">
                <div className="td-col td-param">{row.parameter}</div>
                <div className="td-col td-traditional">
                  <X weight="bold" className="status-cross" />
                  <span>{row.traditional}</span>
                </div>
                <div className="td-col td-venkeylavy">
                  <Check weight="bold" className="status-check" />
                  <span>{row.venkeylavy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
