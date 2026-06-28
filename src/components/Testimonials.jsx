import React, { useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  useEffect(() => {
    // Load the Elfsight script for Google Reviews
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="testimonials section-padding" id="reviews">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Client Experiences</h2>
          <p>Read what our luxury residential and commercial clients have to say about our work.</p>
        </div>
        
        <div className="reviews-feed-container reveal active">
          <div className="elfsight-app-93271d42-5c33-4cdc-b7d7-01e257ee90d8" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
