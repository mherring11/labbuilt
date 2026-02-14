import React from 'react';
import Hero from '../components/home/Hero';
import WelcomeSection from '../components/home/WelcomeSection';
import ServicesPreview from '../components/home/ServicesPreview';
import CoachBio from '../components/home/CoachBio';
import Process from '../components/home/Process';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/shared/ContactCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <ServicesPreview />
      <CoachBio />
      <Process />
      <TestimonialsCarousel />
      <FAQ />
      <ContactCTA />
    </div>
  );
}