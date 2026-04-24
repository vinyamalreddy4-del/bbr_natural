'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const pillars = [
{
  icon: '🚫',
  title: 'Zero Chemicals',
  desc: 'No hexane, no bleaching agents, no preservatives. Just pure oil the way nature intended.',
  stat: '0',
  statLabel: 'Additives'
},
{
  icon: '🌡️',
  title: 'Cold Pressed',
  desc: 'Extracted below 45°C, preserving all Omega-3s, Vitamin E, and natural antioxidants that heat destroys.',
  stat: '<45°C',
  statLabel: 'Extraction Temp'
},
{
  icon: '🌾',
  title: 'Direct Farm Sourcing',
  desc: 'We work directly with farmers in Guntur, Kurnool, and Nizamabad — ensuring traceability and freshness.',
  stat: '100%',
  statLabel: 'Farm Direct'
},
{
  icon: '🪵',
  title: 'Traditional Chekku',
  desc: 'Our wooden bull-driven press (chekku) runs at natural speed — no friction heat, full nutrition.',
  stat: '300+',
  statLabel: 'Years Old Method'
}];


export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.why-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Image + Story */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              className="why-reveal"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>

              <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Why BBR Natural</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-tight">
                The Difference You Can<br />
                <span className="italic text-primary">Taste & Trust</span>
              </h2>
            </div>

            <div
              className="why-reveal relative rounded-2xl overflow-hidden shadow-xl border border-border"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s' }}>

              <div className="aspect-[4/3] relative">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1e0623885-1766557343661.png"
                  alt="Traditional Indian kitchen with brass vessels and natural ingredients on a wooden table, warm natural lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-xl italic text-white leading-snug">
                    "The same oil my grandmother made — now available for every family."
                  </p>
                  <p className="text-xs text-white/70 mt-2 font-semibold tracking-wider uppercase">— Rajireddy, Founder</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div
              className="why-reveal flex flex-wrap gap-2"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}>

              {['FSSAI Compliant', 'No Adulteration', 'Batch Traceable', 'Fresh Pressed'].map((badge) =>
              <span key={badge} className="trust-badge">{badge}</span>
              )}
            </div>
          </div>

          {/* Right: 4 Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) =>
              <div
                key={p.title}
                className="why-reveal bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-400 flex flex-col gap-4"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.8s ease ${(idx + 1) * 0.12}s, transform 0.8s ease ${(idx + 1) * 0.12}s`
                }}>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <p className="font-serif text-2xl font-medium text-accent leading-none">{p.stat}</p>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{p.statLabel}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Comparison table */}
            <div
              className="why-reveal mt-5 bg-card rounded-2xl border border-border overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s' }}>

              <div className="grid grid-cols-3 text-center text-xs font-bold tracking-wider uppercase bg-muted border-b border-border">
                <div className="py-3 px-3 text-muted-foreground">Feature</div>
                <div className="py-3 px-3 text-primary border-x border-border bg-primary/5">BBR Natural</div>
                <div className="py-3 px-3 text-muted-foreground">Commercial Oil</div>
              </div>
              {[
              ['Extraction', 'Cold Pressed', 'Solvent (Hexane)'],
              ['Nutrients', 'Fully Intact', 'Mostly Destroyed'],
              ['Chemicals', 'Zero', 'Multiple Additives'],
              ['Taste', 'Natural & Rich', 'Bland / Refined']].
              map(([feature, ours, theirs]) =>
              <div key={feature} className="grid grid-cols-3 text-center text-sm border-b border-border last:border-0">
                  <div className="py-3 px-3 text-muted-foreground font-medium text-xs">{feature}</div>
                  <div className="py-3 px-3 text-primary font-semibold border-x border-border bg-primary/5 text-xs">{ours}</div>
                  <div className="py-3 px-3 text-muted-foreground text-xs">{theirs}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}