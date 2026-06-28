import React from 'react';
import { ShieldCheck, CurrencyDollar, ThumbsUp } from '@phosphor-icons/react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-us section-padding" id="why-us">
      <div className="container">
        <div className="why-us-container">
          <div className="why-us-content reveal active">
            <h2>Why Choose VenkeyLavy?</h2>
            <p className="why-us-subtitle">
              We don’t just fix electrical problems — we deliver safe, honest work for your home, no matter how small the job.
            </p>

            <div className="why-us-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <ShieldCheck weight="duotone" />
                </div>
                <div className="feature-text">
                  <h4>Respect For Your Home</h4>
                  <p>We wear shoe covers and guarantee a spotless cleanup after every repair or installation.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <CurrencyDollar weight="duotone" />
                </div>
                <div className="feature-text">
                  <h4>Clear Pricing</h4>
                  <p>No hidden charges. We provide an exact quote before starting any installation or repair.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <ThumbsUp weight="duotone" />
                </div>
                <div className="feature-text">
                  <h4>Guaranteed Work</h4>
                  <p>We stand by our quality craftsmanship. If there is any issue, we are always here to help.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-us-owner reveal active">
            <div className="owner-image-placeholder">
              {/* Replace the div below with an img tag when the owner photo is ready */}
              <div className="placeholder-content">
                <span>Owner Photo Here</span>
              </div>
            </div>
            <div className="owner-info glass-panel">
              <div className="stats-box">
                <span className="stats-number text-gradient">15+</span>
                <span className="stats-text">Years of Trusted Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
