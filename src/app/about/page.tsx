import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import FamilyHeritage from './components/FamilyHeritage';
import OurValues from './components/OurValues';
import AboutCTA from './components/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <AboutHero />
        <FamilyHeritage />
        <OurValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
