import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import LightingSimulator from './components/LightingSimulator';
import Services from './components/Services';
import Estimator from './components/Estimator';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AreasWeServe from './components/AreasWeServe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import MobileQuickBar from './components/MobileQuickBar';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState('');

  const openConsultation = (interest = '') => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  const closeConsultation = () => {
    setModalOpen(false);
    setModalInterest('');
  };

  return (
    <>
      <Navbar onOpenConsultation={openConsultation} />
      <main>
        <Hero onOpenConsultation={openConsultation} />
        <TrustBadges />
        <LightingSimulator onOpenConsultation={openConsultation} />
        <Services onSelectService={(service) => openConsultation(`Inquiry for ${service}`)} />
        <Estimator onOpenConsultation={openConsultation} />
        <BeforeAfter />
        <Portfolio onOpenConsultation={openConsultation} />
        <Process onOpenConsultation={openConsultation} />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <AreasWeServe onOpenConsultation={openConsultation} />
        <Contact />
      </main>
      <Footer onOpenConsultation={openConsultation} />
      
      {/* Interactive Global Consultation Modal */}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={closeConsultation} 
        initialInterest={modalInterest} 
      />

      {/* Mobile-Friendly Sticky Bottom Bar */}
      <MobileQuickBar onOpenConsultation={openConsultation} />
    </>
  );
}

export default App;
