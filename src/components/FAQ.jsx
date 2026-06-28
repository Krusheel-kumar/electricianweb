import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    question: "Do you charge for estimates?",
    answer: "No, we provide 100% free, no-obligation estimates. One of our expert electricians will assess your project and provide a clear, upfront quote with no hidden fees."
  },
  {
    id: 2,
    question: "How quickly can you respond to an emergency?",
    answer: "We understand that electrical emergencies can't wait. We offer 24/7 emergency services and typically arrive within 1-2 hours depending on your exact location in Hyderabad."
  },
  {
    id: 3,
    question: "Do you handle small jobs like fixing a single switch?",
    answer: "Absolutely. No job is too small for our team. Whether it's replacing a faulty socket, hanging a ceiling fan, or completely rewiring a villa, we treat every job with the same level of care and professionalism."
  },
  {
    id: 4,
    question: "Are your electricians licensed and insured?",
    answer: "Yes, every technician on our team is fully licensed, highly trained, and fully insured. Your property and safety are our top priorities."
  },
  {
    id: 5,
    question: "Do you leave a mess after the work is done?",
    answer: "Never. We pride ourselves on our 'Respect For Your Home' guarantee. We wear shoe covers, use drop cloths, and guarantee a spotless cleanup after every repair or installation."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before hiring VenkeyLavy.</p>
        </div>

        <div className="faq-container reveal active">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <CaretDown className="faq-icon" weight="bold" />
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: openId === faq.id ? '200px' : '0',
                  opacity: openId === faq.id ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
