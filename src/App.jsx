import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AreasWeServe from './components/AreasWeServe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <AreasWeServe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
