import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import './Portfolio.css';

const portfolioData = [
  { id: 1, title: 'Household Repair', category: 'Electrical', image: '/assets/work1.jpg' },
  { id: 2, title: 'Wiring & Panels', category: 'Core Electrical', image: '/assets/work2.jpg' },
  { id: 3, title: 'Custom Lighting', category: 'Interior Integration', image: '/assets/work3.jpg' },
  { id: 4, title: 'Appliance Setup', category: 'Installations', image: '/assets/work4.jpg' },
  { id: 5, title: 'Interior Project', category: 'Residential', image: '/assets/project1.png' },
  { id: 6, title: 'Commercial Work', category: 'Retail & Office', image: '/assets/project2.png' },
  { id: 7, title: 'Power Restoration', category: 'Troubleshooting', image: '/assets/work5.jpg' },
  { id: 8, title: 'Switchboard Fixing', category: 'Repairs', image: '/assets/work6.jpg' },
  { id: 9, title: 'Ceiling Fan Install', category: 'Installations', image: '/assets/work7.jpg' },
  { id: 10, title: 'Outdoor Lighting', category: 'Exterior', image: '/assets/work8.jpg' },
  { id: 11, title: 'Meter Box Upgrade', category: 'Panels', image: '/assets/work9.jpg' },
  { id: 12, title: 'General Maintenance', category: 'Routine Check', image: '/assets/work10.jpg' },
  { id: 13, title: 'Wire Rewiring', category: 'Core Electrical', image: '/assets/work11.jpg' },
  { id: 14, title: 'Circuit Breaker', category: 'Safety', image: '/assets/work12.jpg' },
  { id: 15, title: 'Concealed Wiring', category: 'Interior', image: '/assets/work13.jpg' },
  { id: 16, title: 'Profile Lighting', category: 'Design', image: '/assets/work14.jpg' },
  { id: 17, title: 'Socket Install', category: 'General', image: '/assets/work15.jpg' },
  { id: 18, title: 'Fault Finding', category: 'Troubleshooting', image: '/assets/work16.jpg' },
  { id: 19, title: 'Security Systems', category: 'Installations', image: '/assets/work17.jpg' },
  { id: 20, title: 'Inverter Setup', category: 'Power Backup', image: '/assets/work18.jpg' },
  { id: 21, title: 'EV Charger Prep', category: 'Modern Install', image: '/assets/work 20.jpg' },
  { id: 22, title: 'Lighting Repairs', category: 'Maintenance', image: '/assets/work21.jpg' },
  { id: 23, title: 'Complete Wiring', category: 'Residential', image: '/assets/work22.jpg' }
];

const Portfolio = () => {
  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Featured Projects</h2>
          <p>A glimpse into our recent interior lighting designs and household electrical installations.</p>
        </div>

        <div className="portfolio-grid">
          {portfolioData.map((project) => (
            <div key={project.id} className="portfolio-card reveal active">
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="portfolio-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <button className="portfolio-btn" aria-label="View Project">
                    <ArrowUpRight weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
