import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkle, 
  ShieldCheck, 
  Clock, 
  Lightbulb, 
  Play, 
  CheckCircle 
} from '@phosphor-icons/react';
import './Hero.css';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    title: 'Contemporary Luxury Living',
    subtitle: 'Integrated acoustic fluted panels with 2700K concealed warm cove lighting'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    title: 'Architectural Modular Kitchens',
    subtitle: 'German BLUM soft-close mechanisms with anti-scratch quartz countertops'
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    title: 'Master Bedroom Suites',
    subtitle: 'Floating bed platforms, tinted glass walk-in wardrobes and smart scene automation'
  }
];

const Hero = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* 3D Motion Graphics Ambient Canvas & Background */}
      <div className="hero-background-wrapper">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-overlay"></div>
          </div>
        ))}
        {/* Ambient 3D Glowing Light Beam */}
        <div className="ambient-beam beam-1"></div>
        <div className="ambient-beam beam-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* 3D Glass Tag */}
          <div className="hero-badge-glass">
            <span className="badge-sparkle">
              <Sparkle weight="fill" />
            </span>
            <span>Turnkey Interiors & Architectural Lighting Atelier</span>
          </div>

          <h1 className="hero-title">
            Where Spatial Elegance Meets <br />
            <span className="text-gradient">Master Architectural Lighting.</span>
          </h1>

          <p className="hero-subtitle">
            Hyderabad's premier turnkey interior design studio. We bring together bespoke modular woodworking, 
            designer false ceilings, and precision-engineered concealed lighting into one seamless, stress-free execution.
          </p>

          {/* Key Quick Badges for Mobile & Desktop */}
          <div className="hero-highlights">
            <div className="highlight-pill">
              <ShieldCheck weight="duotone" className="pill-icon" />
              <span>10-Year Warranty</span>
            </div>
            <div className="highlight-pill">
              <Clock weight="duotone" className="pill-icon" />
              <span>45-Day Handover</span>
            </div>
            <div className="highlight-pill">
              <Lightbulb weight="duotone" className="pill-icon" />
              <span>Architectural CRI&gt;90 Lighting</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="hero-actions">
            <button 
              onClick={() => onOpenConsultation && onOpenConsultation()} 
              className="btn btn-primary btn-lg btn-glow"
            >
              Book Free 3D Consultation <ArrowRight weight="bold" />
            </button>
            <a href="#estimator" className="btn btn-outline btn-lg">
              Calculate Interior Cost
            </a>
            <a href="#lighting-simulator" className="btn-explore-lab hide-on-mobile">
              <span className="pulse-dot"></span> Try 3D Space Lab
            </a>
          </div>

          {/* Interactive Metric Counter Bar */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-number">150+</span>
              <span className="metric-label">Turnkey Homes Executed</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">45<small>Days</small></span>
              <span className="metric-label">Guaranteed Completion</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">100%</span>
              <span className="metric-label">In-House Quality Craft</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">4.9★</span>
              <span className="metric-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="hero-slide-nav">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
