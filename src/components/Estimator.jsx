import React, { useState } from 'react';
import { 
  Calculator, 
  HouseLine, 
  Sparkle, 
  Clock, 
  ShieldCheck, 
  WhatsappLogo, 
  CheckSquare, 
  Square, 
  Coins 
} from '@phosphor-icons/react';
import './Estimator.css';

const propertyTypes = [
  { id: '2bhk', name: '2 BHK Apartment', baseMin: 5.5, baseMax: 7.5, sqft: '900 - 1200 sq.ft' },
  { id: '3bhk', name: '3 BHK Apartment', baseMin: 8.5, baseMax: 12.0, sqft: '1400 - 1900 sq.ft' },
  { id: '4bhk', name: '4 BHK / Penthouse', baseMin: 14.0, baseMax: 19.5, sqft: '2200 - 3200 sq.ft' },
  { id: 'villa', name: 'Luxury Villa / Duplex', baseMin: 22.0, baseMax: 32.0, sqft: '3500+ sq.ft' },
  { id: 'commercial', name: 'Commercial / Office', baseMin: 7.0, baseMax: 15.0, sqft: '1000 - 3000 sq.ft' }
];

const finishTiers = [
  { 
    id: 'essential', 
    name: 'Contemporary Essential', 
    multiplier: 1.0, 
    timeline: '35-40 Days',
    desc: 'High-grade HDHMR woodwork, anti-scratch laminates, Saint-Gobain ceilings & profile lighting.' 
  },
  { 
    id: 'luxury', 
    name: 'Luxury Elegance', 
    multiplier: 1.4, 
    timeline: '45-50 Days',
    desc: 'German BLUM soft-close hardware, acrylic & PU finishes, magnetic track lights & quartz counters.' 
  },
  { 
    id: 'bespoke', 
    name: 'Ultra-Luxe Bespoke', 
    multiplier: 1.85, 
    timeline: '55-65 Days',
    desc: 'Italian marble cladding, tinted glass walk-in wardrobes, whole-home smart lighting & acoustic louvers.' 
  }
];

const scopeOptions = [
  { id: 'kitchen', label: 'Designer Modular Kitchen (German Hardware + Countertop)', cost: 1.5 },
  { id: 'wardrobes', label: 'Bespoke Wardrobes for all Bedrooms', cost: 1.8 },
  { id: 'ceiling', label: 'Full Gypsum False Ceilings with Perimeter Coves', cost: 1.0 },
  { id: 'lighting', label: 'Architectural Lighting (Magnetic Tracks + Smart Dimming)', cost: 0.9 },
  { id: 'civil', label: 'Wall Fluting, Italian Marble TV Unit & Painting', cost: 1.2 }
];

const Estimator = ({ onOpenConsultation }) => {
  const [selectedProperty, setSelectedProperty] = useState(propertyTypes[1]); // default 3bhk
  const [selectedTier, setSelectedTier] = useState(finishTiers[1]); // default luxury
  const [selectedScopes, setSelectedScopes] = useState(['kitchen', 'wardrobes', 'ceiling', 'lighting', 'civil']);

  const toggleScope = (id) => {
    if (selectedScopes.includes(id)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((item) => item !== id));
      }
    } else {
      setSelectedScopes([...selectedScopes, id]);
    }
  };

  // Dynamic Price Calculation
  const scopeFactor = selectedScopes.length / 5;
  const calculatedMin = (selectedProperty.baseMin * selectedTier.multiplier * (0.5 + 0.5 * scopeFactor)).toFixed(1);
  const calculatedMax = (selectedProperty.baseMax * selectedTier.multiplier * (0.5 + 0.5 * scopeFactor)).toFixed(1);

  const getWhatsAppEstimateUrl = () => {
    const text = encodeURIComponent(
      `Hello VenkeyLavy Interiors!\nI used your online interior calculator:\n- Space: ${selectedProperty.name} (${selectedProperty.sqft})\n- Finish Tier: ${selectedTier.name}\n- Selected Scopes: ${selectedScopes.length} items\n- Estimated Range: ₹${calculatedMin}L - ₹${calculatedMax}L\nI would like to schedule a site visit or detailed quotation.`
    );
    return `https://wa.me/918185086296?text=${text}`;
  };

  return (
    <section className="estimator section-padding" id="estimator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Transparent Pricing Engine</span>
          </div>
          <h2>Instant Turnkey Interior Cost Estimator</h2>
          <p>
            No guesswork, no inflated surprises. Select your property layout and preferred finishes 
            for an instant transparent budget estimate with a guaranteed timeline.
          </p>
        </div>

        {/* Estimator Main Grid */}
        <div className="estimator-grid glass-panel">
          {/* Controls Column */}
          <div className="estimator-config">
            {/* Step 1: Property Type */}
            <div className="config-block">
              <span className="config-step-label">Step 1: Select Property Layout</span>
              <div className="property-pills-row">
                {propertyTypes.map((prop) => (
                  <button
                    key={prop.id}
                    className={`property-btn ${selectedProperty.id === prop.id ? 'active' : ''}`}
                    onClick={() => setSelectedProperty(prop)}
                  >
                    <span className="prop-name">{prop.name}</span>
                    <span className="prop-sqft">{prop.sqft}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality & Finish Tier */}
            <div className="config-block">
              <span className="config-step-label">Step 2: Choose Craftsmanship Tier</span>
              <div className="tier-cards-row">
                {finishTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`tier-card ${selectedTier.id === tier.id ? 'active' : ''}`}
                    onClick={() => setSelectedTier(tier)}
                  >
                    <div className="tier-header">
                      <h4>{tier.name}</h4>
                      <span className="tier-timeline">{tier.timeline}</span>
                    </div>
                    <p className="tier-desc">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Scope Inclusions */}
            <div className="config-block">
              <span className="config-step-label">Step 3: Select Scope Inclusions</span>
              <div className="scopes-list">
                {scopeOptions.map((scope) => {
                  const isChecked = selectedScopes.includes(scope.id);
                  return (
                    <div 
                      key={scope.id} 
                      className={`scope-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleScope(scope.id)}
                    >
                      <div className="scope-checkbox">
                        {isChecked ? <CheckSquare weight="fill" /> : <Square weight="regular" />}
                      </div>
                      <span className="scope-label">{scope.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="estimator-summary-panel">
            <div className="summary-badge">
              <Sparkle weight="fill" />
              <span>Real-Time Estimation</span>
            </div>

            <div className="estimated-price-box">
              <span className="price-lead-label">Estimated Turnkey Budget</span>
              <div className="price-display">
                <span className="price-range">₹{calculatedMin}L - ₹{calculatedMax}L</span>
              </div>
              <span className="price-note">*All-inclusive: 3D Design, Materials, Joinery, Lighting & Labour</span>
            </div>

            <div className="summary-details-list">
              <div className="summary-detail-row">
                <span className="detail-name">Property Scope:</span>
                <span className="detail-value">{selectedProperty.name}</span>
              </div>
              <div className="summary-detail-row">
                <span className="detail-name">Selected Finish:</span>
                <span className="detail-value">{selectedTier.name}</span>
              </div>
              <div className="summary-detail-row">
                <span className="detail-name">Guaranteed Delivery:</span>
                <span className="detail-value highlight-val">{selectedTier.timeline}</span>
              </div>
              <div className="summary-detail-row">
                <span className="detail-name">Material Warranty:</span>
                <span className="detail-value highlight-val">10-Year Replacement</span>
              </div>
              <div className="summary-detail-row">
                <span className="detail-name">Electrical Infrastructure:</span>
                <span className="detail-value highlight-val">Concealed FRLS Fire-Safe</span>
              </div>
            </div>

            <div className="summary-actions">
              <a 
                href={getWhatsAppEstimateUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow"
                style={{ width: '100%' }}
              >
                <WhatsappLogo weight="fill" size={20} />
                <span>Send Estimate on WhatsApp</span>
              </a>

              <button 
                className="btn btn-outline"
                style={{ width: '100%', marginTop: '0.85rem' }}
                onClick={() => onOpenConsultation && onOpenConsultation(`Estimate for ${selectedProperty.name} (${selectedTier.name})`)}
              >
                Book Free 3D Site Inspection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
