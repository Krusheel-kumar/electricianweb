import React, { useState, useRef, useEffect } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';
import './BeforeAfter.css';

const BeforeAfter = () => {
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
        <div className="section-header reveal active">
          <h2>The VenkeyLavy Transformation</h2>
          <p>See the difference professional craftsmanship makes. Slide to compare.</p>
        </div>

        <div className="before-after-wrapper reveal active">
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
              <img src="/assets/work3.jpg" alt="Clean and organized electrical work (After)" />
              <span className="label label-after">After</span>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="image-before" 
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src="/assets/work6.jpg" alt="Messy electrical wiring (Before)" />
              <span className="label label-before">Before</span>
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
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
