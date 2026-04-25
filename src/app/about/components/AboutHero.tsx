import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden chekku-pattern">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-4">Our Heritage</span>
        <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-tight leading-tight mb-6">
          Baikadi Rajireddy<br />
          <span className="italic text-primary">Natural</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A family name. A grandfather&apos;s legacy. Three brothers&apos; promise to bring pure, traditional food from Rangapur Village to kitchens across India.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { icon: '🏡', label: 'Rangapur Village, Telangana' },
            { icon: '👨‍👨‍👦', label: 'Family Business' },
            { icon: '🪵', label: '300+ Year Old Method' },
            { icon: '🌿', label: 'Farm to Bottle' },
          ]?.map((b) => (
            <span key={b?.label} className="trust-badge">
              <span>{b?.icon}</span>
              {b?.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
