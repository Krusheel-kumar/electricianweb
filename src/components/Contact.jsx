import React from 'react';
import { MapPin, Phone, EnvelopeSimple, PaperPlaneRight } from '@phosphor-icons/react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Request a Consultation</h2>
          <p>Need an electrical fix or lighting upgrade? Get in touch for a fast, honest estimate.</p>
        </div>

        <div className="contact-container reveal active">
          <div className="contact-info glass-panel">
            <h3>Get in Touch</h3>
            <p>We are available to discuss your interior lighting project or any household electrical repairs.</p>
            
            <ul className="info-list">
              <li>
                <MapPin weight="duotone" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li>
                <Phone weight="duotone" />
                <span><a href="tel:+918185086296">+91 81850 86296</a></span>
              </li>
              <li>
                <EnvelopeSimple weight="duotone" />
                <span><a href="mailto:venkeylavy999@gmail.com">venkeylavy999@gmail.com</a></span>
              </li>
            </ul>
          </div>

          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service" required>
                <option value="">Select a service...</option>
                <option value="architectural-lighting">Architectural Lighting</option>
                <option value="home-wiring">Home Wiring & Repairs</option>
                <option value="commercial">Commercial / Retail</option>
                <option value="general">General Consultation</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" rows="4" placeholder="Tell us about your space..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Send Request <PaperPlaneRight weight="bold" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
