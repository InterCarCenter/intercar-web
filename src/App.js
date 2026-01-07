import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import PromoPopup from './components/PromoPopup';
import MaterialsSection from './components/MaterialsSection';
import AboutSection from './components/AboutSection';
import ServiceSlider from './components/ServiceSlider';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import FeedInstagram from './components/FeedInstagram';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Footer from './components/Footer';
import Estadistica from './components/Estadistica';

export default function App() {
  return (
    <div>
      <LayoutHeader />
      <HomeHero />
      <Estadistica />
      <ServiceSlider />
      <MaterialsSection />
      <PreguntasFrecuentes />
      <AboutSection />
      <FeedInstagram />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}