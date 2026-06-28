import React from 'react';
import { ShieldCheck, Star, Certificate } from '@phosphor-icons/react';
import './TrustBadges.css';

const TrustBadges = () => {
  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-badges-grid">
          
          <div className="badge-item">
            <div className="badge-icon">
              <ShieldCheck weight="duotone" />
            </div>
            <div className="badge-text">
              <strong>100% Satisfaction</strong>
              <span>Guaranteed Quality</span>
            </div>
          </div>
          
          <div className="badge-item">
            <div className="badge-icon">
              <Certificate weight="duotone" />
            </div>
            <div className="badge-text">
              <strong>Licensed & Insured</strong>
              <span>Professional Electricians</span>
            </div>
          </div>
          
          <div className="badge-item">
            <div className="badge-icon">
              <Star weight="duotone" />
            </div>
            <div className="badge-text">
              <strong>5-Star Rated</strong>
              <span>Loved by Locals</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
