'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const oilSteps = [
{
  num: '01',
  title: 'Farm Sourced Seeds',
  desc: 'We source groundnuts and sesame directly from trusted farmers in Andhra Pradesh — no middlemen, no compromises.',
  icon: '🌾',
  image: "https://images.unsplash.com/photo-1606642560215-3b92dbdc4c02",
  imageAlt: 'Rows of groundnut plants in a sunny Andhra Pradesh farm field, green crops, golden sunlight'
},
{
  num: '02',
  title: 'Wooden Chekku Pressing',
  desc: 'Seeds are cold pressed using the traditional wooden chekku (bull-driven press) at low temperature — preserving all nutrients and natural flavour.',
  icon: '🪵',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15797b928-1777032708832.png",
  imageAlt: 'Traditional wooden oil press mechanism, dark wood texture, ancient craft, warm amber tones'
},
{
  num: '03',
  title: 'Natural Settling & Bottling',
  desc: 'The extracted oil naturally settles and is carefully filtered without chemicals. Bottled fresh and sealed for purity.',
  icon: '🫙',
  image: "https://images.unsplash.com/photo-1552592074-ea7a91b851b3",
  imageAlt: 'Clear glass bottles being filled with golden oil on a clean production surface, natural daylight'
}];


const spiceSteps = [
{
  num: '01',
  title: 'Whole Spice Selection',
  desc: 'Guntur chillies and Nizamabad turmeric are hand-selected at peak ripeness, ensuring maximum colour and potency.',
  icon: '🌶️',
  image: "https://images.unsplash.com/photo-1675792904178-acbad5116e6f",
  imageAlt: 'Bright red Guntur chillies piled in a wicker basket, vibrant red, outdoor daylight'
},
{
  num: '02',
  title: 'Sun Drying & Cleaning',
  desc: 'Spices are spread on clean mats and sun-dried for 3–5 days. Dust, stems, and impurities are hand-cleaned.',
  icon: '☀️',
  image: "https://images.unsplash.com/photo-1606951596747-ff318f345142",
  imageAlt: 'Turmeric roots drying on a clean mat in bright sunlight, golden yellow color, outdoor setting'
},
{
  num: '03',
  title: 'Stone Grinding',
  desc: 'Dried spices are freshly ground in traditional stone mills — preserving volatile oils, aroma, and authentic taste.',
  icon: '🪨',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12532d152-1767184358295.png",
  imageAlt: 'Traditional stone grinding mill with fresh spice powder, rustic stone texture, warm earthy tones'
}];


function ProcessRow({ steps, title, subtitle }: {steps: typeof oilSteps;title: string;subtitle: string;}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.p-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef}>
      <div
        className="p-reveal mb-10"
        style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>

        <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-2">{subtitle}</span>
        <h3 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-tight">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {steps.map((step, idx) =>
        <div
          key={step.num}
          className="p-reveal group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: `opacity 0.8s ease ${(idx + 1) * 0.15}s, transform 0.8s ease ${(idx + 1) * 0.15}s`
          }}>

            <div className="relative h-44 overflow-hidden">
              <AppImage
              src={step.image}
              alt={step.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-xl">{step.icon}</span>
                <span className="font-serif text-4xl font-light text-white/30">{step.num}</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-base text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>);

}

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Our Method</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
            Farm to Bottle —{' '}
            <span className="italic text-primary">The Honest Way</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            No shortcuts. No chemicals. Just the same process our ancestors used — proven by generations of healthy families.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <ProcessRow
            steps={oilSteps}
            title="Cold Pressed Oil Process"
            subtitle="Oils — 3 Simple Steps" />

          <ProcessRow
            steps={spiceSteps}
            title="Natural Spice Process"
            subtitle="Spices — 3 Simple Steps" />

        </div>
      </div>
    </section>);

}