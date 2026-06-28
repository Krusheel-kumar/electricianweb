import React from 'react';
import { MapPinLine } from '@phosphor-icons/react';
import './AreasWeServe.css';

const areas = [
  "Jubilee Hills",
  "Banjara Hills",
  "Madhapur",
  "Gachibowli",
  "Kondapur",
  "HITEC City",
  "Kukatpally",
  "Manikonda",
  "Secunderabad",
  "Begumpet"
];

const AreasWeServe = () => {
  return (
    <section className="areas-we-serve section-padding" id="areas">
      <div className="container">
        <div className="areas-container reveal active">
          <div className="areas-content">
            <h2>Areas We Serve</h2>
            <p>
              We provide fast, reliable residential and commercial electrical services across major neighborhoods in Hyderabad.
            </p>
            <div className="areas-grid">
              {areas.map((area, index) => (
                <div key={index} className="area-item">
                  <MapPinLine weight="duotone" className="area-icon" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
