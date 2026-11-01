import React, { useState, useEffect } from 'react';
import { X, Sparkle, PaperPlaneTilt, WhatsappLogo, PhoneCall } from '@phosphor-icons/react';
import './ConsultationModal.css';

const ConsultationModal = ({ isOpen, onClose, initialInterest = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    propertyType: '3bhk',
    notes: initialInterest || ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, notes: initialInterest }));
    }
  }, [initialInterest]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello VenkeyLavy Interiors!\nI would like to book a 3D Design Consultation:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Community/Area: ${formData.area}\n- Property: ${formData.propertyType.toUpperCase()}\n- Notes: ${formData.notes || 'Interested in turnkey interior execution'}`
    );
    window.open(`https://wa.me/918185086296?text=${waText}`, '_blank');
  };

  return (
    <div className="consultation-modal-backdrop" onClick={onClose}>
      <div className="consultation-modal-box glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} weight="bold" />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <Sparkle weight="fill" />
            <span>Complimentary 3D Consultation</span>
          </div>
          <h3>Transform Your Space With VenkeyLavy</h3>
          <p>Share your property details for an architectural 3D study and itemized BOQ estimate.</p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-sparkle">
              <Sparkle weight="fill" size={44} />
            </div>
            <h4>Thank You, {formData.name}!</h4>
            <p>Our senior design engineer will connect with you via WhatsApp & Call within 2 hours.</p>
            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '1.2rem', width: '100%' }}>
              Close Window
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-field">
              <label htmlFor="m-name">Your Full Name *</label>
              <input 
                type="text" 
                id="m-name" 
                name="name" 
                placeholder="e.g. Suresh Reddy" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="modal-field-row">
              <div className="modal-field">
                <label htmlFor="m-phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="m-phone" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-field">
                <label htmlFor="m-area">Location in Hyderabad *</label>
                <input 
                  type="text" 
                  id="m-area" 
                  name="area" 
                  placeholder="e.g. Kokapet, Gachibowli" 
                  required 
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-field">
              <label htmlFor="m-property">Property Type *</label>
              <select 
                id="m-property" 
                name="propertyType" 
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="2bhk">2 BHK Apartment</option>
                <option value="3bhk">3 BHK Apartment</option>
                <option value="4bhk">4 BHK / Penthouse</option>
                <option value="villa">Luxury Villa / Duplex</option>
                <option value="commercial">Commercial / Office Fit-Out</option>
                <option value="renovation">Home Renovation</option>
              </select>
            </div>

            <div className="modal-field">
              <label htmlFor="m-notes">Special Requirements / Scope</label>
              <input 
                type="text" 
                id="m-notes" 
                name="notes" 
                placeholder="e.g. Modular kitchen, magnetic lighting, false ceilings..." 
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%', marginTop: '0.5rem' }}>
              <span>Confirm & Send via WhatsApp</span>
              <PaperPlaneTilt weight="bold" />
            </button>

            <div className="modal-direct-actions">
              <a href="tel:+918185086296" className="modal-call-link">
                <PhoneCall weight="fill" /> Or Call Now: +91 81850 86296
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
