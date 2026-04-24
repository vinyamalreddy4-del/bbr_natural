'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'The easiest way is to WhatsApp us at +91 89783 85957 with the product name, size, and your delivery address. We confirm within 2–4 hours and pack fresh for you.',
  },
  {
    q: 'Do you deliver outside Telangana?',
    a: 'Yes! We ship pan-India via courier services. Delivery typically takes 3–5 business days depending on your location. Shipping charges are calculated based on weight and destination.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'There is no minimum order — you can order a single 500ml bottle. However, for orders above ₹1000, we offer free delivery within Andhra Pradesh.',
  },
  {
    q: 'How fresh is the oil when I receive it?',
    a: 'We press oil to order — typically within 1–3 days of your order. We do not maintain large stocks. Each bottle is labelled with the pressing date so you always know exactly when it was made.',
  },
  {
    q: 'Do you offer bulk / wholesale pricing?',
    a: 'Yes! We offer special pricing for bulk orders (10 litres+ for oils, 5kg+ for spices) and for retailers, restaurants, and caterers. Contact us with your requirement for a custom quote.',
  },
  {
    q: 'Is the oil FSSAI certified?',
    a: 'Yes, BRR Natural operates under FSSAI guidelines. Our products are manufactured in a clean, hygienic facility and are free from adulteration. Batch details are printed on every pack.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash on delivery for local orders within Karimnagar district. For outstation orders, advance payment via UPI is required.',
  },
];

export default function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Heading */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block">FAQ</span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-tight leading-tight">
              Common<br />
              <span className="italic text-primary">Questions</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Can&apos;t find your answer? WhatsApp us directly — we&apos;re always happy to help.
            </p>
            <a
              href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-sm w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-8">
            <div className="bg-muted/30 rounded-3xl border border-border p-2 flex flex-col gap-2">
              {faqs?.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/40 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span className="text-sm font-semibold text-foreground leading-snug">{faq?.q}</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-accent' : ''}`}
                    />
                  </button>
                  {openIdx === idx && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{faq?.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}