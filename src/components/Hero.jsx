import React from 'react';
import { ArrowRight, PhoneCall } from '@phosphor-icons/react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div 
        className="hero-slideshow" 
        style={{ backgroundImage: `url('/assets/H1.png')` }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content reveal active">
          <div className="badge">
            <span className="badge-dot"></span> Local Interior & Household Electricians
          </div>
          <h1>
            Expert Electrical Works.<br />
            <span className="text-gradient">No Job Too Small.</span>
          </h1>
          <p className="hero-subtitle">
            From seamless interior lighting design to fast, reliable household electrical repairs. Your trusted local experts in Hyderabad.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a Free Consultation <ArrowRight weight="bold" />
            </a>
            <a href="tel:+918185086296" className="btn btn-outline btn-lg">
              <PhoneCall weight="fill" /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
