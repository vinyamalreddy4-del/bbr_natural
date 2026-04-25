import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactDetails from './components/ContactDetails';
import InquiryForm from './components/InquiryForm';
import ContactFAQ from './components/ContactFAQ';

export default function ContactPage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactDetails />
        <InquiryForm />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}