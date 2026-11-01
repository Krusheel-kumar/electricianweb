import React, { useState, useEffect } from 'react';
import { 
  List, 
  X, 
  PhoneCall, 
  WhatsappLogo, 
  HouseLine, 
  LightbulbFilament, 
  Calculator, 
  Images,
  MapPin,
  Sparkle
} from '@phosphor-icons/react';
import './Navbar.css';

const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          {/* Brand Logo with Clean Tight Crop */}
          <a href="#" className="logo-link" onClick={closeMenu}>
            <img 
              src="/assets/logo-clean.png" 
              alt="VenkeyLavy Interiors" 
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop Navigation - Minimal & Elegant */}
          <nav className="nav-links hide-on-mobile">
            <a href="#services" className="nav-link">Turnkey Services</a>
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#lighting-simulator" className="nav-link">3D Space Lab</a>
            <a href="#portfolio" className="nav-link">Homes Portfolio</a>
            <a href="#estimator" className="nav-link">Cost Calculator</a>
            <a href="#process" className="nav-link">45-Day Process</a>
          </nav>

          {/* Desktop Actions */}
          <div className="nav-actions hide-on-mobile">
            <div className="nav-city-badge">
              <MapPin weight="fill" size={14} />
              <span>Hyderabad</span>
            </div>

            <a 
              href="https://wa.me/918185086296?text=Hi%20VenkeyLavy%20Interiors,%20I%20would%20like%20to%20consult%20about%20turnkey%20interiors%20in%20Hyderabad." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-minimal"
              title="Chat on WhatsApp"
            >
              <WhatsappLogo weight="fill" size={20} />
              <span>Chat with Architect</span>
            </a>

            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onOpenConsultation && onOpenConsultation('Navbar Consultation')}
            >
              Book Free Site Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="nav-mobile-actions hide-on-desktop">
            <a 
              href="https://wa.me/918185086296?text=Hi%20VenkeyLavy%20Interiors,%20I%20want%20to%20know%20about%20interior%20services%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-wa-pill"
            >
              <WhatsappLogo weight="fill" size={18} />
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {menuOpen ? <X weight="bold" size={22} /> : <List weight="bold" size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
          <div className="mobile-menu-header">
            <img 
              src="/assets/logo-clean.png" 
              alt="VenkeyLavy Interiors" 
              className="mobile-brand-logo"
            />
            <button className="mobile-close-btn" onClick={closeMenu}>
              <X size={20} weight="bold" />
            </button>
          </div>

          <div className="mobile-menu-city">
            <MapPin weight="fill" size={14} />
            <span>Serving All Hyderabad Gated Communities</span>
          </div>

          <div className="mobile-menu-links">
            <a href="#services" className="mobile-link" onClick={closeMenu}>
              <HouseLine size={19} weight="duotone" />
              <span>Turnkey Home Interiors</span>
            </a>
            <a href="#story" className="mobile-link" onClick={closeMenu}>
              <Sparkle size={19} weight="duotone" />
              <span>The VenkeyLavy Story</span>
            </a>
            <a href="#lighting-simulator" className="mobile-link" onClick={closeMenu}>
              <LightbulbFilament size={19} weight="duotone" />
              <span>3D Space & Lighting Lab</span>
            </a>
            <a href="#portfolio" className="mobile-link" onClick={closeMenu}>
              <Images size={19} weight="duotone" />
              <span>Curated Hyderabad Homes</span>
            </a>
            <a href="#estimator" className="mobile-link" onClick={closeMenu}>
              <Calculator size={19} weight="duotone" />
              <span>Instant Interior Cost Calculator</span>
            </a>
            <a href="#process" className="mobile-link" onClick={closeMenu}>
              <HouseLine size={19} weight="duotone" />
              <span>The 45-Day Handover Journey</span>
            </a>
            <a href="#contact" className="mobile-link" onClick={closeMenu}>
              <span>Contact Studio & Factory</span>
            </a>
          </div>

          <div className="mobile-menu-cta">
            <button 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                closeMenu();
                if (onOpenConsultation) onOpenConsultation('Mobile Drawer Free Consultation');
              }}
            >
              Book Free Site Measurement & 3D Plan
            </button>
            <a 
              href="tel:+918185086296" 
              className="btn btn-outline" 
              style={{ width: '100%', marginTop: '0.65rem' }}
              onClick={closeMenu}
            >
              <PhoneCall weight="fill" /> Call Directly: +91 81850 86296
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
