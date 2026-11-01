import React from 'react';
import { 
  CompassTool, 
  Receipt, 
  Cpu, 
  Wrench, 
  Certificate, 
  ArrowRight 
} from '@phosphor-icons/react';
import './Process.css';

const steps = [
  {
    number: '01',
    icon: <CompassTool weight="duotone" />,
    title: '3D Spatial Immersion',
    duration: 'Week 1',
    description: 'Laser site survey, functional layout planning, and photorealistic 3D renders. You explore your finished home before a single screw is turned.',
    deliverable: 'Photorealistic 3D Views & Material Palette'
  },
  {
    number: '02',
    icon: <Receipt weight="duotone" />,
    title: 'Transparent BOQ Cost Lock',
    duration: 'Week 2',
    description: 'Detailed itemized Bill of Quantities. Every hinge, board, wire, and paint code is documented with fixed pricing and zero surprise add-ons.',
    deliverable: 'Contractual Price & Timeline Guarantee'
  },
  {
    number: '03',
    icon: <Cpu weight="duotone" />,
    title: 'Factory German CNC Build',
    duration: 'Weeks 3 - 4',
    description: 'All cabinetry and modular carcasses are machined in a state-of-the-art automated factory. Zero hand-sawing unevenness, perfect 1mm edge banding.',
    deliverable: 'Moisture-Proof HDHMR / Marine Modules'
  },
  {
    number: '04',
    icon: <Wrench weight="duotone" />,
    title: 'On-Site Integrated Fit-Out',
    duration: 'Weeks 4 - 6',
    description: 'Our site engineers oversee simultaneous ceiling installation, concealed FRLS cabling, magnetic track alignment, and assembly.',
    deliverable: 'Dust-Managed Engineering Execution'
  },
  {
    number: '05',
    icon: <Certificate weight="duotone" />,
    title: 'White-Glove Handover',
    duration: 'Day 45',
    description: 'Professional post-construction deep clean, 140-point quality audit, and handover of your 10-Year Comprehensive Warranty Certificate.',
    deliverable: 'Ready-to-Live Move-In Handover'
  }
];

const Process = ({ onOpenConsultation }) => {
  return (
    <section className="process section-padding" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>The Turnkey Blueprint</span>
          </div>
          <h2>From Raw Shell to Bespoke Luxury in 45 Days</h2>
          <p>
            We eliminate the anxiety of dealing with separate carpenters, electricians, and painters. 
            One unified team, one accountable contact, zero delays.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="process-timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-card glass-panel">
              <div className="step-card-header">
                <span className="step-number-pill">{step.number}</span>
                <span className="step-duration">{step.duration}</span>
              </div>

              <div className="step-icon-wrapper">
                {step.icon}
              </div>

              <h3>{step.title}</h3>
              <p className="step-desc">{step.description}</p>

              <div className="step-deliverable-box">
                <span className="deliverable-label">Key Deliverable:</span>
                <span className="deliverable-text">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="process-cta-banner glass-panel">
          <div className="cta-banner-text">
            <h3>Have a Floor Plan Ready?</h3>
            <p>Upload your architectural 2D floor plan for a complimentary 3D space study and BOQ estimate.</p>
          </div>
          <button 
            className="btn btn-primary btn-glow"
            onClick={() => onOpenConsultation && onOpenConsultation('Complimentary Floor Plan 3D Study')}
          >
            <span>Get Free 3D Floor Plan Review</span>
            <ArrowRight weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
