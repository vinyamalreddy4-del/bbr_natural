'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getProductImage } from '@/lib/data/imageMap';

const trustBadges = [
{ icon: '🌿', label: 'Chemical Free' },
{ icon: '🪵', label: 'Wooden Chekku' },
{ icon: '🌾', label: 'Farm Sourced' },
{ icon: '✅', label: 'No Preservatives' }];


export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef?.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1.2s cubic-bezier(0.25,0.8,0.25,1), transform 1.2s cubic-bezier(0.25,0.8,0.25,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background chekku-pattern pt-20 sm:pt-24 pb-12">
      {/* Decorative background circles */}
      <div className="absolute top-20 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-accent/5 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-primary/5 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      {/* Spinning chekku wheel decoration */}
      <div className="absolute right-8 top-32 hidden xl:block opacity-10 pointer-events-none">
        <div className="animate-spin-slow w-48 h-48 border-4 border-accent rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-primary/40 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-accent rounded-full" />
          </div>
        </div>
        {/* Radial spokes */}
        {[0, 45, 90, 135]?.map((deg) =>
        <div
          key={deg}
          className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-accent/60 origin-left"
          style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }} />

        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-5 sm:gap-8">
            {/* Eyebrow */}
            <div className="flex flex-wrap gap-2">
              {trustBadges?.map((b) =>
              <span key={b?.label} className="trust-badge text-xs sm:text-sm">
                  <span>{b?.icon}</span>
                  {b?.label}
                </span>
              )}
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-serif text-[clamp(2.2rem,8vw,6rem)] font-light leading-[0.92] tracking-tight text-foreground">

              Pure Traditional<br />
              <span className="italic text-primary">Cold Pressed</span><br />
              Oils &amp;{' '}
              <span className="text-accent">Natural</span><br />
              Spices.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-light leading-relaxed max-w-lg animate-fade-slide-up delay-300">
              Baikadi Rajireddy Natural brings you oils extracted the ancient wooden chekku way — no heat, no chemicals, just pure goodness from farm to your kitchen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 animate-fade-slide-up delay-400">
              <a
                href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-sm sm:text-base justify-center">

                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-primary border-2 border-primary/30 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-primary/5 hover:border-primary transition-all">

                View Products
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 border-t border-border animate-fade-slide-up delay-500">
              {[
              { num: '100%', label: 'Natural' },
              { num: '0', label: 'Chemicals' },
              { num: '500+', label: 'Happy Families' },
              { num: '4', label: 'Premium Products' }]?.
              map((s) =>
              <div key={s?.label} className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-medium text-primary">{s?.num}</span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">{s?.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="lg:col-span-6 xl:col-span-5 relative order-first lg:order-last">
            <div className="relative animate-float">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted aspect-[4/5] w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <AppImage
                  src={getProductImage('homepage-banner')}
                  alt="Golden cold pressed oil poured from a traditional wooden press, warm amber color, natural lighting"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 40vw"
                  unoptimized={true}
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-card rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg sm:text-xl shrink-0">
                      🪵
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-foreground">Wooden Chekku Extracted</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">Ancient cold press method</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -top-4 -right-2 sm:-right-4 lg:-right-8 glass-card rounded-2xl p-3 sm:p-4 shadow-xl border border-border hidden sm:flex flex-col gap-1 min-w-[120px] sm:min-w-[140px]">
                <span className="text-xl sm:text-2xl">🌿</span>
                <p className="text-xs sm:text-sm font-bold text-primary">Farm to Bottle</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Direct sourcing</p>
              </div>

              {/* Floating product badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 lg:-left-8 glass-card rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl border border-border hidden sm:block">
                <p className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">Starting from</p>
                <p className="font-serif text-xl sm:text-2xl font-medium text-accent">₹180</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">500ml bottle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>);

}