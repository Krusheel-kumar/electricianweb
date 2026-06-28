import React from 'react';
import { Lightning, FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo-wrapper">
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
            <p>
              Expert electrical services and beautiful interior lighting solutions for your home and local businesses.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FacebookLogo weight="fill" /></a>
              <a href="#" aria-label="Twitter"><TwitterLogo weight="fill" /></a>
              <a href="#" aria-label="Instagram"><InstagramLogo weight="fill" /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinLogo weight="fill" /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Core Electrical</a></li>
              <li><a href="#services">Architectural Lighting</a></li>
              <li><a href="#services">Home Wiring</a></li>
              <li><a href="#services">Smart Home Systems</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#portfolio">Our Portfolio</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#reviews">Client Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-business-hours">
            <h4>Business Hours</h4>
            <ul>
              <li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 9:00 AM - 4:00 PM</li>
              <li><strong>Sunday:</strong> Emergency Services Only</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VenkeyLavy Power & Electrical Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
