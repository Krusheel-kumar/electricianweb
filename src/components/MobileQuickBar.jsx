import React from 'react';
import { PhoneCall, WhatsappLogo, Sparkle, Calculator } from '@phosphor-icons/react';
import './MobileQuickBar.css';

const MobileQuickBar = ({ onOpenConsultation }) => {
  return (
    <div className="mobile-quick-bar hide-on-desktop">
      <a href="tel:+918185086296" className="quick-btn quick-call">
        <PhoneCall weight="fill" size={20} />
        <span>Call</span>
      </a>

      <a 
        href="https://wa.me/918185086296?text=Hi%20VenkeyLavy%20Interiors,%20I%20would%20like%20to%20consult%20about%20turnkey%20interiors." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="quick-btn quick-whatsapp"
      >
        <WhatsappLogo weight="fill" size={20} />
        <span>WhatsApp</span>
      </a>

      <button 
        className="quick-btn quick-consultation"
        onClick={() => onOpenConsultation && onOpenConsultation('Quick Mobile Consultation Request')}
      >
        <Sparkle weight="fill" size={18} />
        <span>Book 3D Consult</span>
      </button>
    </div>
  );
};

export default MobileQuickBar;
