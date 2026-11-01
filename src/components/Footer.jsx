import React from 'react';
import { Sparkle, InstagramLogo, FacebookLogo, LinkedinLogo, WhatsappLogo, PhoneCall, MapPin } from '@phosphor-icons/react';
import './Footer.css';

const Footer = ({ onOpenConsultation }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="logo-wrapper">
              <div className="logo-badge-3d">
                <span className="logo-initials">VL</span>
                <Sparkle weight="fill" className="logo-sparkle" />
              </div>
              <div className="logo-text">
                <span className="logo-main">VenkeyLavy</span>
                <span className="logo-sub">INTERIORS & LIGHTING</span>
              </div>
            </a>
            <p className="brand-mission">
              Hyderabad’s premier turnkey interior design studio. We bring together bespoke modular woodworking, 
              designer false ceilings, and precision-engineered concealed lighting into one seamless execution.
            </p>
            <div className="social-links">
              <a href="https://wa.me/918185086296" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappLogo weight="fill" /></a>
              <a href="#" aria-label="Instagram"><InstagramLogo weight="fill" /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinLogo weight="fill" /></a>
              <a href="#" aria-label="Facebook"><FacebookLogo weight="fill" /></a>
            </div>
          </div>

          {/* Turnkey Services */}
          <div className="footer-links">
            <h4>Turnkey Services</h4>
            <ul>
              <li><a href="#services">Turnkey Living & Villas</a></li>
              <li><a href="#services">Modular Kitchens & Islands</a></li>
              <li><a href="#services">Walk-in Tinted Wardrobes</a></li>
              <li><a href="#services">Designer False Ceilings & Paneling</a></li>
              <li><a href="#lighting-simulator">Architectural Lighting & Tracks</a></li>
              <li><a href="#services">Commercial & Office Fit-Outs</a></li>
            </ul>
          </div>

          {/* Quick Experience */}
          <div className="footer-links">
            <h4>Experience</h4>
            <ul>
              <li><a href="#lighting-simulator">3D Lighting & Space Lab</a></li>
              <li><a href="#estimator">Interior Cost Calculator</a></li>
              <li><a href="#before-after">Transformation Sliders</a></li>
              <li><a href="#portfolio">Featured Case Studies</a></li>
              <li><a href="#process">The 45-Day Blueprint</a></li>
              <li><a href="#why-us">The VenkeyLavy Advantage</a></li>
            </ul>
          </div>

          {/* Studio & Contact */}
          <div className="footer-contact">
            <h4>Studio & Connect</h4>
            <div className="footer-contact-item">
              <MapPin weight="duotone" className="f-icon" />
              <span>Serving Jubilee Hills, Kokapet, Financial District, Tellapur & All Hyderabad</span>
            </div>
            <div className="footer-contact-item">
              <PhoneCall weight="duotone" className="f-icon" />
              <a href="tel:+918185086296">+91 81850 86296</a>
            </div>
            <button 
              className="btn btn-outline btn-sm"
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => onOpenConsultation && onOpenConsultation('Footer Consultation Request')}
            >
              Book 3D Design Consultation
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} VenkeyLavy Interiors & Architectural Lighting Studio. All rights reserved.</p>
          <div className="footer-badges-strip">
            <span>45-Day Handover Promise</span>
            <span>•</span>
            <span>10-Year Warranty</span>
            <span>•</span>
            <span>German Precision Hardware</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
