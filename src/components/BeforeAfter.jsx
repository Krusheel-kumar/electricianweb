import React, { useState, useRef, useEffect } from 'react';
import { ArrowsLeftRight, Sparkle, HouseLine, CookingPot, Bed } from '@phosphor-icons/react';
import './BeforeAfter.css';

const transformations = [
  {
    id: 'living',
    name: 'Penthouse Living & Media Suite',
    icon: <HouseLine weight="duotone" />,
    beforeImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    beforeDesc: 'Raw concrete block masonry, dangling temporary wires, zero acoustic comfort.',
    afterDesc: 'Italian Calacatta fluted media wall, 2700K warm grazing cove, and concealed FRLS smart conduits.'
  },
  {
    id: 'kitchen',
    name: 'Modular Island Kitchen',
    icon: <CookingPot weight="duotone" />,
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeDesc: 'Dated tiled counter with peeling laminate and unorganized plumbing.',
    afterDesc: 'Anti-scratch quartz breakfast island, German BLUM soft-close drawers & under-cabinet LED strips.'
  },
  {
    id: 'bedroom',
    name: 'Master Suite & Glass Wardrobe',
    icon: <Bed weight="duotone" />,
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    beforeDesc: 'Single bare bulb with cracked plaster and uninsulated windows.',
    afterDesc: 'Acoustic headboard wall, tinted-glass walk-in closet, and perimeter floating ceiling lights.'
  }
];

const BeforeAfter = () => {
  const [activeProject, setActiveProject] = useState(transformations[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="before-after section-padding" id="before-after">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Turnkey Reality</span>
          </div>
          <h2>The VenkeyLavy Transformation</h2>
          <p>
            Experience how our integrated turnkey engineering turns bare, lifeless concrete 
            into breathtaking architectural sanctuaries. Drag the slider to compare.
          </p>
        </div>

        {/* Project Switcher Tabs */}
        <div className="transformation-tabs">
          {transformations.map((item) => (
            <button
              key={item.id}
              className={`transform-tab-btn ${activeProject.id === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveProject(item);
                setSliderPosition(50);
              }}
            >
              <span className="tab-icon">{item.icon}</span>
              <span className="tab-name">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Before / After Slider Canvas */}
        <div className="before-after-wrapper glass-panel">
          <div 
            className="before-after-container" 
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Background) */}
            <div className="image-after">
              <img 
                src={activeProject.afterImage} 
                alt={`${activeProject.name} (After Turnkey Execution)`} 
                loading="lazy" 
              />
              <span className="label label-after">
                <Sparkle weight="fill" /> Completed Turnkey Interior
              </span>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="image-before" 
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={activeProject.beforeImage} 
                alt={`${activeProject.name} (Raw Concrete Site)`} 
                loading="lazy" 
              />
              <span className="label label-before">Raw Concrete Site</span>
            </div>

            {/* Slider Handle */}
            <div 
              className="slider-handle" 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="slider-button">
                <ArrowsLeftRight weight="bold" />
              </div>
            </div>
          </div>

          {/* Transformation Footer Description */}
          <div className="transform-footer-bar">
            <div className="transform-col before-col">
              <span className="col-label">Raw Site State:</span>
              <p>{activeProject.beforeDesc}</p>
            </div>
            <div className="transform-divider hide-on-mobile"></div>
            <div className="transform-col after-col">
              <span className="col-label highlight">Turnkey Craft:</span>
              <p>{activeProject.afterDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
