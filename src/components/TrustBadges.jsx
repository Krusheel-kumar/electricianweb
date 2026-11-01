import React from 'react';
import { 
  CalendarCheck, 
  ShieldCheck, 
  Cpu, 
  LightbulbFilament, 
  Receipt 
} from '@phosphor-icons/react';
import './TrustBadges.css';

const badges = [
  {
    icon: <CalendarCheck weight="duotone" />,
    title: '45-Day Handover',
    desc: 'Guaranteed move-in on schedule'
  },
  {
    icon: <ShieldCheck weight="duotone" />,
    title: '10-Year Warranty',
    desc: 'Termite & moisture-proof materials'
  },
  {
    icon: <Cpu weight="duotone" />,
    title: 'German CNC Joinery',
    desc: 'Factory-pressed precision edges'
  },
  {
    icon: <LightbulbFilament weight="duotone" />,
    title: 'Architectural Lighting',
    desc: 'Concealed FRLS & magnetic tracks'
  },
  {
    icon: <Receipt weight="duotone" />,
    title: 'Transparent BOQ',
    desc: 'Zero hidden pricing surprises'
  }
];

const TrustBadges = () => {
  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="badges-grid">
          {badges.map((badge, idx) => (
            <div key={idx} className="badge-card-3d">
              <div className="badge-icon-box">
                {badge.icon}
              </div>
              <div className="badge-text-box">
                <h4>{badge.title}</h4>
                <p>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
