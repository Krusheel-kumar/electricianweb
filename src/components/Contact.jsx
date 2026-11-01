import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  EnvelopeSimple, 
  WhatsappLogo, 
  PaperPlaneTilt, 
  Sparkle, 
  ShieldCheck, 
  Clock 
} from '@phosphor-icons/react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    propertyType: '3bhk',
    budget: '10-20lakhs',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello VenkeyLavy Interiors!\nVIP Consultation Request:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Area: ${formData.area || 'Hyderabad'}\n- Space: ${formData.propertyType.toUpperCase()}\n- Budget: ${formData.budget}\n- Details: ${formData.message || 'Need 3D interior design & turnkey quotation.'}`
    );
    window.open(`https://wa.me/918185086296?text=${waText}`, '_blank');
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Begin Your Transformation</span>
          </div>
          <h2>Schedule Your Complimentary 3D Design Consultation</h2>
          <p>
            Connect directly with our senior interior architects and engineering leads. 
            Receive a complimentary 3D space study and itemized BOQ for your home.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Atelier Information */}
          <div className="contact-info-panel glass-panel">
            <div className="atelier-badge">
              <Sparkle weight="fill" />
              <span>VenkeyLavy Atelier</span>
            </div>

            <h3>Where Spatial Elegance Takes Shape</h3>
            <p className="atelier-intro">
              Whether you are taking possession of an unfurnished villa, upgrading a high-rise apartment, 
              or fitting out a commercial space, we welcome your vision.
            </p>

            <ul className="atelier-contact-list">
              <li>
                <div className="contact-icon-box">
                  <MapPin weight="duotone" />
                </div>
                <div>
                  <span className="contact-label">Studio & Factory Base:</span>
                  <span className="contact-value">Hyderabad, Telangana, India</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Phone weight="duotone" />
                </div>
                <div>
                  <span className="contact-label">Direct Design Helpline:</span>
                  <a href="tel:+918185086296" className="contact-value highlight-link">+91 81850 86296</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <EnvelopeSimple weight="duotone" />
                </div>
                <div>
                  <span className="contact-label">Official Correspondence:</span>
                  <a href="mailto:venkeylavy999@gmail.com" className="contact-value">venkeylavy999@gmail.com</a>
                </div>
              </li>
            </ul>

            <div className="whatsapp-fast-connect">
              <a 
                href="https://wa.me/918185086296?text=Hi%20VenkeyLavy%20Interiors,%20I%20would%20like%20to%20discuss%20turnkey%20interiors%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-full"
              >
                <WhatsappLogo weight="fill" size={24} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            <div className="atelier-promises">
              <div className="promise-item">
                <ShieldCheck size={18} weight="fill" className="promise-icon" />
                <span>Zero Sales Pressure</span>
              </div>
              <div className="promise-item">
                <Clock size={18} weight="fill" className="promise-icon" />
                <span>Response in &lt; 2 Hours</span>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="contact-form-panel glass-panel">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon">
                  <Sparkle weight="fill" size={40} />
                </div>
                <h3>Thank You, {formData.name}!</h3>
                <p>
                  Your consultation request has been received. Our senior design architect will contact you 
                  within 2 hours to coordinate your complimentary 3D site study.
                </p>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="consultation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="e.g. Vikram Reddy" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 98765 43210" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="area">Community / Area in Hyderabad *</label>
                    <input 
                      type="text" 
                      id="area" 
                      name="area" 
                      placeholder="e.g. Kokapet / Tellapur / Jubilee Hills" 
                      required
                      value={formData.area}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyType">Property Scope *</label>
                    <select 
                      id="propertyType" 
                      name="propertyType" 
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="2bhk">2 BHK Apartment</option>
                      <option value="3bhk">3 BHK Apartment</option>
                      <option value="4bhk">4 BHK / Penthouse</option>
                      <option value="villa">Luxury Villa / Duplex</option>
                      <option value="commercial">Commercial / Office Fit-Out</option>
                      <option value="renovation">Complete Home Renovation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Target Budget Range</label>
                  <select 
                    id="budget" 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="5-10lakhs">₹6 Lakhs – ₹10 Lakhs (Essential Turnkey)</option>
                    <option value="10-20lakhs">₹10 Lakhs – ₹20 Lakhs (Luxury Elegance)</option>
                    <option value="20-35lakhs">₹20 Lakhs – ₹35 Lakhs (Bespoke Villa/Penthouse)</option>
                    <option value="35lakhs+">₹35 Lakhs+ (Ultra-Luxury Architecture)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Requirements / Notes</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    placeholder="Tell us about your possession date, style preference, or lighting needs..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-glow" style={{ width: '100%' }}>
                  <span>Request Free 3D Design Consultation</span>
                  <PaperPlaneTilt weight="bold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
