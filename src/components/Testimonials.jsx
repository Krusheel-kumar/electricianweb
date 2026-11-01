import React, { useEffect } from 'react';
import { Star, Quotes, CheckCircle, MapPin } from '@phosphor-icons/react';
import './Testimonials.css';

const clientReviews = [
  {
    name: 'Vikram & Swathi Rao',
    project: '4BHK Turnkey Interior',
    location: 'My Home Bhooja, Hitec City',
    stars: 5,
    quote: 'The biggest headache in home interiors is the clash between the interior designer and the electrician. VenkeyLavy solved that completely. The magnetic track lighting and the seamless acrylic kitchen are world-class. Handed over on the exact 44th day!'
  },
  {
    name: 'Dr. Ananya Reddy',
    project: 'Duplex Villa Renovation',
    location: 'Jubilee Hills, Hyderabad',
    stars: 5,
    quote: 'From custom fluted wall paneling to the concealed acoustic false ceilings, the level of attention to detail was exceptional. Their 3D visualization was 99% identical to the final handed-over home. Highly recommend!'
  },
  {
    name: 'Rajesh K. Varma',
    project: 'Executive Corporate Office (3,500 sqft)',
    location: 'Financial District, Hyderabad',
    stars: 5,
    quote: 'VenkeyLavy executed our corporate suite with zero downtime. From the acoustic meeting pods to the architectural LED linear profiles and server wiring, their engineering discipline is on another level.'
  }
];

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="testimonials section-padding" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Client Experiences</span>
          </div>
          <h2>Trusted by Hyderabad’s Discerning Homeowners</h2>
          <p>
            Real feedback from villa owners, penthouse residents, and commercial executives 
            who trusted VenkeyLavy for their turnkey transformations.
          </p>
        </div>

        {/* Curated Client Review Cards Grid */}
        <div className="testimonials-cards-grid">
          {clientReviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card-3d glass-panel">
              <div className="card-top-row">
                <div className="stars-row">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} weight="fill" className="star-icon" />
                  ))}
                </div>
                <Quotes weight="fill" className="quote-badge" />
              </div>

              <p className="testimonial-quote">"{rev.quote}"</p>

              <div className="testimonial-author-box">
                <div className="author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{rev.name}</h4>
                  <span className="author-project">{rev.project}</span>
                  <span className="author-location">
                    <MapPin size={12} weight="fill" /> {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Google Reviews Feed (if script loaded) */}
        <div className="reviews-feed-container">
          <div className="elfsight-app-93271d42-5c33-4cdc-b7d7-01e257ee90d8" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
