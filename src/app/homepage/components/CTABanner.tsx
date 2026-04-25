'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function CTABanner() {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-primary min-h-[280px] flex flex-col justify-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_17f0e2c7a-1772470271252.png"
              alt="Warm Indian kitchen with brass vessels, oil lamps, and traditional cooking ingredients, deep shadows, rich earthy dark tones, low-key moody lighting"
              fill
              className="object-cover"
              sizes="100vw" />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/50" />
          </div>

          {/* Grid decoration */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />


          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 sm:p-12">
            <div className="flex flex-col gap-4 max-w-lg">
              <div className="flex flex-wrap gap-2">
                <span className="trust-badge bg-white/10 border-white/20 text-white text-xs">🌿 Farm to Bottle</span>
                <span className="trust-badge bg-white/10 border-white/20 text-white text-xs">✅ Pure & Traditional</span>
                <span className="trust-badge bg-white/10 border-white/20 text-white text-xs">🏡 From Our Village to Your Kitchen</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight">
                Ready to taste the<br />
                <span className="italic text-accent">real difference?</span>
              </h2>
              <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed">
                Order fresh-pressed oils and spices directly from BRR Natural. WhatsApp us your requirement and we&apos;ll deliver within 2 days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:min-w-[200px]">
              <a
                href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn justify-center text-sm">

                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                Order on WhatsApp
              </a>
              <a
                href="tel:+918978385957"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-3 hover:bg-white/10 transition-all">

                <Icon name="PhoneIcon" size={16} variant="solid" />
                Call Now
              </a>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors py-2">

                Browse Products
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}