import React, { useState, useEffect } from 'react';
import { 
  Sparkle, 
  List, 
  X, 
  PhoneCall, 
  WhatsappLogo, 
  HouseLine, 
  LightbulbFilament, 
  Calculator, 
  Images 
} from '@phosphor-icons/react';
import './Navbar.css';

const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
          {/* Brand Logo with Image */}
          <a href="#" className="logo-wrapper" onClick={closeMenu}>
            <img 
              src="/assets/logo.png" 
              alt="VenkeyLavy Interiors" 
              className="navbar-brand-logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links hide-on-mobile">
            <a href="#services" className="nav-link">Turnkey Services</a>
            <a href="#lighting-simulator" className="nav-link">3D Space Lab</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#estimator" className="nav-link">Cost Estimator</a>
            <a href="#process" className="nav-link">Our Process</a>
            <a href="#why-us" className="nav-link">Why Us</a>
          </nav>

          {/* Desktop Actions */}
          <div className="nav-actions hide-on-mobile">
            <a 
              href="https://wa.me/918185086296?text=Hi%20VenkeyLavy%20Interiors,%20I%20would%20like%20to%20consult%20about%20turnkey%20interior%20works." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-icon"
              title="Chat on WhatsApp"
            >
              <WhatsappLogo weight="fill" size={22} />
            </a>
            <button 
              className="btn btn-primary btn-sm btn-glow"
              onClick={() => onOpenConsultation && onOpenConsultation()}
            >
              Book 3D Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn hide-on-desktop" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {menuOpen ? <X weight="bold" size={24} /> : <List weight="bold" size={24} />}
          </button>
        </div>

        {/* Mobile Slide-Out Drawer in Light Theme */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
          <div className="mobile-menu-header">
            <img 
              src="/assets/logo.png" 
              alt="VenkeyLavy Interiors" 
              className="mobile-brand-logo"
            />
            <button className="mobile-close-btn" onClick={closeMenu}>
              <X size={22} weight="bold" />
            </button>
          </div>

          <div className="mobile-menu-links">
            <a href="#services" className="mobile-link" onClick={closeMenu}>
              <HouseLine size={20} weight="duotone" />
              <span>Turnkey Services</span>
            </a>
            <a href="#lighting-simulator" className="mobile-link" onClick={closeMenu}>
              <LightbulbFilament size={20} weight="duotone" />
              <span>3D Space & Lighting Lab</span>
            </a>
            <a href="#portfolio" className="mobile-link" onClick={closeMenu}>
              <Images size={20} weight="duotone" />
              <span>Curated Portfolio</span>
            </a>
            <a href="#estimator" className="mobile-link" onClick={closeMenu}>
              <Calculator size={20} weight="duotone" />
              <span>Interior Cost Calculator</span>
            </a>
            <a href="#process" className="mobile-link" onClick={closeMenu}>
              <Sparkle size={20} weight="duotone" />
              <span>The 5-Step Process</span>
            </a>
            <a href="#why-us" className="mobile-link" onClick={closeMenu}>
              <span>Why VenkeyLavy</span>
            </a>
            <a href="#contact" className="mobile-link" onClick={closeMenu}>
              <span>Contact & Visit</span>
            </a>
          </div>

          <div className="mobile-menu-cta">
            <button 
              className="btn btn-primary btn-glow" 
              style={{ width: '100%' }}
              onClick={() => {
                closeMenu();
                if (onOpenConsultation) onOpenConsultation();
              }}
            >
              Book Free 3D Design Consultation
            </button>
            <a 
              href="tel:+918185086296" 
              className="btn btn-outline" 
              style={{ width: '100%', marginTop: '0.75rem' }}
              onClick={closeMenu}
            >
              <PhoneCall weight="fill" /> Call: +91 81850 86296
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
