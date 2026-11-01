import React, { useState } from 'react';
import { CaretDown, Question } from '@phosphor-icons/react';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    question: "What exactly does 'Turnkey Interior Works' include?",
    answer: "Turnkey means complete, hassle-free ownership from bare site to move-in day. It includes 3D space planning, civil modifications, Saint-Gobain false ceilings, factory-crafted German modular kitchens, custom wardrobes, Italian marble/flooring, and master architectural lighting & concealed electrical infrastructure."
  },
  {
    id: 2,
    question: "How do you integrate electrical and architectural lighting differently?",
    answer: "Most interior designers draw renders without knowing electrical engineering, leading to messy junction boxes or contractors hacking freshly finished walls. Because electrical engineering is in our DNA, we integrate 48V low-voltage magnetic tracks, fire-retardant FRLS conduits, and anti-glare CRI>90 lighting into the false ceiling framework before woodwork begins."
  },
  {
    id: 3,
    question: "How does the 45-Day Handover Guarantee work?",
    answer: "Because all cabinetry is fabricated using precision German CNC machines in our dedicated factory while on-site civil and electrical works happen in parallel, modular installation takes only 7-10 days. We back our 45-day move-in schedule with a penalty-backed contractual commitment."
  },
  {
    id: 4,
    question: "Which material brands and hardware do you use?",
    answer: "We never compromise on core materials. We use waterproof BWP Marine Grade and HDHMR carcasses, Century/Greenlam laminates, PU & acrylic shutters, and 100% genuine German BLUM or Hettich soft-close hinges and drawer runners with 10-year warranty certificates."
  },
  {
    id: 5,
    question: "Is the quotation fixed, or are there hidden extra charges?",
    answer: "We provide an itemized Bill of Quantities (BOQ) with locked specifications before work commences. As long as you don't alter the architectural scope midway, the contracted price is 100% fixed with zero surprise escalations."
  },
  {
    id: 6,
    question: "How do I start? What do I need for the first meeting?",
    answer: "Simply share your 2D builder floor plan or book a complimentary site measurement. Our design team will prepare a preliminary 3D space study and a transparent cost estimate within 48 hours."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Clarity & Transparency</span>
          </div>
          <h2>Frequently Asked Questions About Turnkey Interiors</h2>
          <p>Everything you need to know before embarking on your interior journey with VenkeyLavy.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <div className="faq-icon-circle">
                    <CaretDown className="faq-icon" weight="bold" />
                  </div>
                </button>
                <div 
                  className="faq-answer-wrapper"
                  style={{ 
                    maxHeight: isOpen ? '260px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
