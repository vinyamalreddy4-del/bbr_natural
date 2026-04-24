import React from 'react';

export default function ProductsHero() {
  return (
    <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden chekku-pattern">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-4">Our Range</span>
        <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-tight leading-tight mb-6">
          Pure Products,<br />
          <span className="italic text-primary">Honest Prices</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Every product is freshly pressed or ground to order. No stockpiling, no stale batches — just maximum freshness from farm to your kitchen.
        </p>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { icon: '🏷️', label: 'FSSAI Certified' },
            { icon: '🌿', label: 'No Preservatives' },
            { icon: '🚜', label: 'Farm Direct' },
            { icon: '📦', label: 'Fresh Packed' },
            { icon: '🪵', label: 'Cold Pressed' },
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