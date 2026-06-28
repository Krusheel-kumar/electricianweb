import React from 'react';
import { Lightning, Lightbulb, HouseLine, Wrench, Buildings } from '@phosphor-icons/react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: <Lightning weight="duotone" />,
    title: 'Core Electrical Systems',
    description: 'Expert wiring, panel upgrades, and power restoration. Ensuring your core electrical infrastructure is safe and future-proof.',
    features: ['Wiring Installation & Repair', 'Panel Upgrades', 'Safety Inspections']
  },
  {
    id: 2,
    icon: <Lightbulb weight="duotone" />,
    title: 'Architectural Lighting',
    description: 'Bespoke lighting solutions that elevate your interior design. From recessed profiles to statement chandeliers.',
    features: ['LED Profile Lighting', 'Outdoor & Landscape', 'Smart Dimming Systems']
  },
  {
    id: 3,
    icon: <HouseLine weight="duotone" />,
    title: 'Home Wiring & Upgrades',
    description: 'Complete electrical packages for flats and houses. Seamlessly integrated to match your interior design perfectly.',
    features: ['False Ceiling Wiring', 'Inverter Setup', 'Concealed Switchboards']
  },
  {
    id: 4,
    icon: <Wrench weight="duotone" />,
    title: 'Household Repairs',
    description: 'No job is too small. From fixing a faulty switch to installing appliances, we guarantee a spotless cleanup after every job.',
    features: ['Appliance Install', 'General Troubleshooting', 'Fast Local Response']
  },
  {
    id: 5,
    icon: <Buildings weight="duotone" />,
    title: 'Commercial & Retail',
    description: 'Electrical setups and showcase lighting designed for local retail spaces, offices, and commercial properties.',
    features: ['High Load Panels', 'Retail Display Lighting', 'Maintenance Contracts']
  }
];

const Services = () => {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Our Expertise</h2>
          <p>Reliable electrical services for household repairs and beautiful interior spaces.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card reveal active">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
