import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import ShopByCategory from './components/ShopByCategory';
import ComboPacks from './components/ComboPacks';
import HomemadePicklesSection from './components/HomemadePicklesSection';
import TraditionalFoodsSection from './components/TraditionalFoodsSection';
import VillageSpecialsSection from './components/VillageSpecialsSection';
import ProcessSection from './components/ProcessSection';
import FounderStory from './components/FounderStory';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import CTABanner from './components/CTABanner';

export default function HomepagePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturedProducts />
        <ShopByCategory />
        <ComboPacks />
        <HomemadePicklesSection />
        <TraditionalFoodsSection />
        <VillageSpecialsSection />
        <ProcessSection />
        <FounderStory />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}