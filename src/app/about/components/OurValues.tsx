import React from 'react';

const values = [
  {
    icon: '🌾',
    title: 'Farm Direct',
    desc: 'We source directly from farmers in Guntur, Kurnool, and Nizamabad — no middlemen, full traceability.',
  },
  {
    icon: '🪵',
    title: 'Traditional Chekku',
    desc: 'Our wooden bull-driven press runs at natural speed — no friction heat, no nutrient loss, full flavour.',
  },
  {
    icon: '🚫',
    title: 'Zero Chemicals',
    desc: 'No hexane, no bleaching agents, no preservatives. What goes in is what comes out — pure and honest.',
  },
  {
    icon: '🌡️',
    title: 'Cold Pressed',
    desc: 'Extracted below 45°C, preserving all Omega-3s, Vitamin E, and natural antioxidants that heat destroys.',
  },
  {
    icon: '📦',
    title: 'Fresh Packed',
    desc: 'We press and grind to order. No stockpiling, no stale batches — maximum freshness every time.',
  },
  {
    icon: '🤝',
    title: 'Family Promise',
    desc: 'We are a family business. Our name is on every bottle. We will never compromise on what we sell.',
  },
];

export default function OurValues() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">What We Stand For</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light tracking-tight leading-tight">
            Our Values &amp; <span className="italic text-primary">Commitments</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values?.map((v, idx) => (
            <div
              key={v?.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 hover:shadow-md transition-all duration-400"
              style={{ animationDelay: `${idx * 0.1}s` }}>
              <span className="text-3xl">{v?.icon}</span>
              <div>
                <h3 className="font-semibold text-base text-foreground mb-2">{v?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🌿', title: 'Farm to Bottle', desc: 'Every product traced from source to your kitchen.' },
            { icon: '✅', title: 'Pure & Traditional', desc: 'The same method used for 300+ years, unchanged.' },
            { icon: '🏡', title: 'From Our Village to Your Kitchen', desc: 'Made in Rangapur Village, Karimnagar, Telangana.' },
          ]?.map((item) => (
            <div key={item?.title} className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-border">
              <span className="text-2xl shrink-0">{item?.icon}</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">{item?.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
