import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle,
  WhatsappLogo,
  HouseLine,
  CookingPot,
  Heart
} from '@phosphor-icons/react';
import './Hero.css';

const storyScenes = [
  {
    id: 'living',
    tabName: 'Family Living & Dining',
    tagline: 'Where Celebrations Begin',
    title: 'Warm Gathering Spaces for Your Family',
    story: 'In Hyderabad, a home is where generations celebrate festivals, share evening chai, and create memories. We craft spacious living rooms with teak-finish acoustic fluting, Saint-Gobain false ceilings, and 2700K warm golden lighting that feels welcoming every single day.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    features: ['Concealed 2700K Warm Cove Glow', 'Bespoke Crockery & Bar Units', 'Vaastu-Aligned Spatial Flow']
  },
  {
    id: 'kitchen',
    tabName: 'Spice-Proof Kitchen',
    tagline: 'Built for Real Indian Cooking',
    title: 'Heavy-Duty Modular Kitchens That Never Stain',
    story: 'Indian cooking needs serious engineering. We build using 100% boiling waterproof BWP marine plywood, anti-scratch quartz counters that resist turmeric and oil stains, and German BLUM soft-close hardware that glides smoothly for decades.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    features: ['Boiling Waterproof BWP Carcasses', 'Anti-Turmeric Quartz Counters', 'German BLUM 10-Yr Hardware']
  },
  {
    id: 'mandir',
    tabName: 'Sacred Pooja Mandir',
    tagline: 'Peace, Devotion & Heritage',
    title: 'Serene Pooja Corners Tailored to Your Rituals',
    story: 'Every Indian home begins with the divine. We design tranquil, sacred pooja spaces with pristine Corian marble, backlit geometric jaali patterns, brass bell inlays, and soft illumination tailored precisely to your family traditions.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    features: ['Backlit Contemporary Jaali Work', 'Integrated Brass Accents & Storage', 'Dedicated Diya & Dhoop Ventilation']
  }
];

const Hero = ({ onOpenConsultation }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = storyScenes[activeStoryIndex];

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Top Storyteller Header */}
        <div className="hero-story-header">
          <div className="hero-location-badge">
            <span className="location-dot"></span>
            <span>Crafted for Hyderabad Living • Kokapet • Jubilee Hills • Tellapur • Gachibowli</span>
          </div>

          <h1 className="hero-headline">
            Building Your Dream Home in Hyderabad <br className="hide-on-mobile" />
            <span className="text-gradient">Should Be Joyful, Not Stressful.</span>
          </h1>

          <p className="hero-lead-text">
            No endless delays. No carpenter dust in your home. No electricians cutting into freshly painted walls. 
            At <strong>VenkeyLavy Interiors</strong>, we bring factory-precision German woodwork and master architectural lighting 
            together under one roof—handing over your turnkey home in exactly <strong>45 days</strong>.
          </p>
        </div>

        {/* Storytelling Showcase Grid */}
        <div className="hero-story-showcase glass-panel" id="story">
          {/* Story Navigation Tabs */}
          <div className="story-tabs-bar">
            {storyScenes.map((scene, idx) => (
              <button
                key={scene.id}
                className={`story-tab-btn ${idx === activeStoryIndex ? 'active' : ''}`}
                onClick={() => setActiveStoryIndex(idx)}
              >
                <span className="tab-indicator"></span>
                <span className="tab-title">{scene.tabName}</span>
              </button>
            ))}
          </div>

          {/* Story Content Canvas */}
          <div className="story-content-grid">
            {/* Left Story Narrative */}
            <div className="story-narrative-col">
              <span className="story-scene-tag">{currentStory.tagline}</span>
              <h2 className="story-scene-title">{currentStory.title}</h2>
              <p className="story-scene-desc">{currentStory.story}</p>

              {/* Essential Features */}
              <div className="story-features-list">
                {currentStory.features.map((feat, i) => (
                  <div key={i} className="story-feat-pill">
                    <CheckCircle weight="fill" className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="story-cta-row">
                <button 
                  className="btn btn-primary btn-glow"
                  onClick={() => onOpenConsultation && onOpenConsultation(`Inquiry for ${currentStory.tabName}`)}
                >
                  <span>Book Free 3D Plan For Your Home</span>
                  <ArrowRight weight="bold" />
                </button>

                <a href="#estimator" className="btn btn-outline">
                  <span>Calculate Budget</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Frame */}
            <div className="story-visual-col">
              <div className="story-image-card">
                <img 
                  src={currentStory.image} 
                  alt={currentStory.title} 
                  className="story-main-img" 
                />
                <div className="story-image-frame-overlay"></div>
                <div className="story-floating-stat-badge">
                  <div className="stat-badge-icon">
                    <Clock weight="fill" />
                  </div>
                  <div>
                    <span className="stat-badge-num">45 Days</span>
                    <span className="stat-badge-label">Guaranteed Handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Hyderabad Trust Strip */}
        <div className="hero-trust-strip">
          <div className="trust-item">
            <ShieldCheck weight="fill" className="trust-icon" />
            <div>
              <strong>10-Year Warranty</strong>
              <span>Termite & moisture-proof materials</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Clock weight="fill" className="trust-icon" />
            <div>
              <strong>45-Day Handover Promise</strong>
              <span>Or we pay penalty compensation</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Sparkle weight="fill" className="trust-icon" />
            <div>
              <strong>Master Lighting Built-in</strong>
              <span>Zero hacking of fresh walls</span>
            </div>
          </div>
          <div className="trust-divider hide-on-mobile"></div>
          <div className="trust-item hide-on-mobile">
            <MapPin weight="fill" className="trust-icon" />
            <div>
              <strong>Hyderabad Based</strong>
              <span>Local factory & site engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
