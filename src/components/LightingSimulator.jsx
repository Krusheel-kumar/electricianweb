import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  FilmStrip, 
  Sparkle, 
  SlidersHorizontal, 
  Crosshair, 
  Info, 
  Check, 
  Lightbulb 
} from '@phosphor-icons/react';
import './LightingSimulator.css';

const scenes = [
  {
    id: 'daylight',
    name: 'Natural Daylight',
    icon: <Sun weight="duotone" />,
    kelvin: '5000K',
    desc: 'Crisp natural sunlight highlighting organic wood grains and marble veining.',
    filterStyle: 'brightness(1.1) contrast(1.02) saturate(1.0)',
    glowOverlay: 'rgba(255, 255, 255, 0.08)'
  },
  {
    id: 'warm-cove',
    name: 'Architectural Dusk (2700K)',
    icon: <Sparkle weight="duotone" />,
    kelvin: '2700K',
    desc: 'Concealed warm cove illumination grazing fluted wall panels and ceiling drops.',
    filterStyle: 'brightness(0.95) sepia(0.3) saturate(1.3) contrast(1.05)',
    glowOverlay: 'radial-gradient(circle at 60% 40%, rgba(245, 185, 66, 0.28) 0%, transparent 65%)'
  },
  {
    id: 'cinema',
    name: 'Cinema Noir Focus',
    icon: <FilmStrip weight="duotone" />,
    kelvin: '2400K',
    desc: 'Anti-glare focused micro-spots for art pieces and floating media console underglow.',
    filterStyle: 'brightness(0.7) contrast(1.25) saturate(1.1)',
    glowOverlay: 'radial-gradient(circle at 75% 70%, rgba(212, 175, 55, 0.35) 0%, rgba(0, 0, 0, 0.6) 80%)'
  },
  {
    id: 'smart-ambient',
    name: 'Smart Scene Preset',
    icon: <Moon weight="duotone" />,
    kelvin: '3000K Smart',
    desc: 'Whole-room automation synchronizing magnetic tracks, drapery, and accent steps.',
    filterStyle: 'brightness(0.85) contrast(1.15) hue-rotate(-15deg)',
    glowOverlay: 'radial-gradient(circle at 30% 30%, rgba(130, 180, 255, 0.15) 0%, rgba(212, 175, 55, 0.2) 70%)'
  }
];

const hotspots = [
  {
    id: 1,
    x: '38%',
    y: '22%',
    title: '48V Magnetic Track Light',
    spec: 'Ultra-slim concealed recessed profile with modular magnetic flood and spot diffusers. Toolless snapping.'
  },
  {
    id: 2,
    x: '68%',
    y: '35%',
    title: 'Concealed Fluted LED Grazing',
    spec: 'Custom acrylic diffusers casting continuous 2700K warm wash across acoustic charcoal louvers.'
  },
  {
    id: 3,
    x: '52%',
    y: '72%',
    title: 'Floating German Credenza',
    spec: 'BLUM soft-close push-to-open drawer hardware with concealed anti-trip wire management conduits.'
  },
  {
    id: 4,
    x: '22%',
    y: '58%',
    title: 'Zero-Glare Downlights (UGR<19)',
    spec: 'CRI>95 high-fidelity chips ensuring authentic fabric textures without eye fatigue.'
  }
];

const LightingSimulator = ({ onOpenConsultation }) => {
  const [activeScene, setActiveScene] = useState(scenes[1]); // default to warm cove
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);
  const [brightness, setBrightness] = useState(90);

  return (
    <section className="lighting-simulator section-padding" id="lighting-simulator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Interactive 3D Space & Lighting Lab</span>
          </div>
          <h2>Experience Architectural Illumination in Real Time</h2>
          <p>
            Standard interior designers treat lighting as a final bulb fixture. 
            At <strong>VenkeyLavy Interiors</strong>, we engineer lighting into the false ceiling architecture and millwork from day one.
          </p>
        </div>

        {/* 3D Visual Simulator Box */}
        <div className="simulator-wrapper glass-panel">
          {/* Scene Selector Controls Bar */}
          <div className="simulator-controls-bar">
            <span className="controls-label">
              <SlidersHorizontal size={18} weight="bold" />
              <span>Select Lighting Atmosphere:</span>
            </span>
            <div className="scene-buttons-group">
              {scenes.map((scene) => (
                <button
                  key={scene.id}
                  className={`scene-tab-btn ${activeScene.id === scene.id ? 'active' : ''}`}
                  onClick={() => setActiveScene(scene)}
                >
                  <span className="scene-btn-icon">{scene.icon}</span>
                  <span className="scene-btn-name">{scene.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visual Canvas Container */}
          <div className="simulator-viewport">
            <div 
              className="simulator-image-layer"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')`,
                filter: `${activeScene.filterStyle} brightness(${brightness / 100})`
              }}
            >
              {/* Dynamic Overlay Glow */}
              <div 
                className="simulator-dynamic-glow"
                style={{ background: activeScene.glowOverlay }}
              ></div>

              {/* Hotspot Pins */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  className={`hotspot-pin ${activeHotspot.id === spot.id ? 'active' : ''}`}
                  style={{ top: spot.y, left: spot.x }}
                  onClick={() => setActiveHotspot(spot)}
                  aria-label={spot.title}
                >
                  <span className="pin-pulse"></span>
                  <span className="pin-core">
                    <Crosshair size={14} weight="bold" />
                  </span>
                </button>
              ))}

              {/* Active Scene Overlay Badge */}
              <div className="active-scene-badge">
                <span className="scene-kelvin">{activeScene.kelvin}</span>
                <span className="scene-status-dot"></span>
                <span>{activeScene.name}</span>
              </div>
            </div>

            {/* Spec Details Card */}
            <div className="simulator-details-card">
              <div className="details-header">
                <div className="details-icon">
                  <Lightbulb size={20} weight="fill" />
                </div>
                <div>
                  <span className="details-tag">Architectural Detail</span>
                  <h4>{activeHotspot.title}</h4>
                </div>
              </div>
              <p className="details-text">{activeHotspot.spec}</p>

              <div className="details-footer">
                <div className="scene-mood-info">
                  <span className="mood-label">Current Scene Mood:</span>
                  <p className="mood-desc">{activeScene.desc}</p>
                </div>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => onOpenConsultation && onOpenConsultation()}
                >
                  Inquire For Your Home
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Brightness Range Helper */}
          <div className="simulator-range-bar">
            <span className="range-label">Simulate Dimming Intensity: {brightness}%</span>
            <input 
              type="range" 
              min="50" 
              max="130" 
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="intensity-slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightingSimulator;
