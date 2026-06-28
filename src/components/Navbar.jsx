import React, { useState, useEffect } from 'react';
import { Lightning, List, X } from '@phosphor-icons/react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#" className="logo-wrapper" onClick={closeMenu}>
          <div className="logo-icon-new">
            <span className="v-letter">V</span>
            <span className="l-letter">L</span>
            <Lightning weight="fill" className="bolt-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-main">VenkeyLavy</span>
            <span className="logo-sub">Electrical Works</span>
          </div>
        </a>

        <nav className="nav-links d-none-mobile">
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#reviews" className="nav-link">Reviews</a>
        </nav>

        <a href="#contact" className="btn btn-outline d-none-mobile">
          Get a Quote
        </a>

        <button className="mobile-menu-btn d-block-mobile" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#services" className="mobile-link" onClick={closeMenu}>Services</a>
        <a href="#portfolio" className="mobile-link" onClick={closeMenu}>Portfolio</a>
        <a href="#why-us" className="mobile-link" onClick={closeMenu}>Why Us</a>
        <a href="#reviews" className="mobile-link" onClick={closeMenu}>Reviews</a>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu} style={{marginTop: '2rem'}}>
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
