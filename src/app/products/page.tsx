import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './components/ProductsHero';
import ProductCatalog from './components/ProductCatalog';
import PackagingSection from './components/PackagingSection';
import OrderCTA from './components/OrderCTA';

export default function ProductsPage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="pt-16">
        <ProductsHero />
        <ProductCatalog />
        <PackagingSection />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}