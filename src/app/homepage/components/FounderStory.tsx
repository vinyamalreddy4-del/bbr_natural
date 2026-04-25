'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const founders = [
{ name: 'Bhagavan Reddy', role: 'Co-Founder', initial: 'B' },
{ name: 'Madhukar Reddy', role: 'Co-Founder', initial: 'M' },
{ name: 'Bharath Reddy', role: 'Co-Founder', initial: 'B' }];


export default function FounderStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fs-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 130);
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
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Story */}
          <div className="lg:col-span-6 flex flex-col gap-7">
            <div
              className="fs-reveal"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
              <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Our Story</span>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light tracking-tight leading-tight">
                From Rangapur Village<br />
                <span className="italic text-primary">to Your Kitchen</span>
              </h2>
            </div>

            <div
              className="fs-reveal flex flex-col gap-5 text-muted-foreground leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.13s, transform 0.8s ease 0.13s' }}>
              <p className="text-base">
                BRR Natural stands for <strong className="text-foreground font-semibold">Baikadi Rajireddy Natural</strong> — named after our grandfather, Rajireddy, whose wisdom and love for pure food inspired everything we do. <em>Baikadi</em> is our family name, rooted in Rangapur Village, Huzurabad Mandal, Karimnagar District, Telangana.
              </p>
              <p className="text-base">
                Three brothers — <strong className="text-foreground font-semibold">Bhagavan Reddy, Madhukar Reddy, and Bharath Reddy</strong> — grew up watching their grandfather press oil the traditional wooden chekku way. They saw how modern refining stripped away everything good from food, and decided to bring back what was lost.
              </p>
              <p className="text-base">
                Today, we press oils and grind spices the same way our grandfather did — no chemicals, no shortcuts, no compromises. Every bottle carries the spirit of Rangapur Village and the trust of three generations.
              </p>
            </div>

            {/* Village detail */}
            <div
              className="fs-reveal flex items-start gap-4 p-5 bg-muted/50 rounded-2xl border border-border"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.26s, transform 0.8s ease 0.26s' }}>
              <span className="text-3xl shrink-0">🏡</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-0.5">Made in Rangapur Village</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Huzurabad Mandal, Karimnagar District, Telangana, India — where our wooden chekku has been running for generations.
                </p>
              </div>
            </div>

            {/* Founders */}
            <div
              className="fs-reveal"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.39s, transform 0.8s ease 0.39s' }}>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4">Founded by</p>
              <div className="flex flex-wrap gap-4">
                {founders.map((f) =>
                <div key={f.name} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-serif text-base font-medium text-primary">{f.initial}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="fs-reveal"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.52s, transform 0.8s ease 0.52s' }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-2 border-primary/30 rounded-full px-6 py-3 hover:bg-primary/5 hover:border-primary transition-all">
                Read Our Full Story
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div
              className="fs-reveal relative rounded-3xl overflow-hidden border border-border shadow-xl"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s' }}>
              <div className="aspect-[4/3] relative">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1d838f8b5-1777095960639.png"
                  alt="Traditional wooden chekku oil press in a village setting, warm earthy tones, natural lighting, rustic Indian countryside"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🪵</span>
                    <span className="text-xs font-bold tracking-wider uppercase text-white/70">Traditional Wooden Chekku</span>
                  </div>
                  <p className="font-serif text-lg italic text-white leading-snug">
                    "Our grandfather pressed oil this way. We press it the same way today."
                  </p>
                  <p className="text-xs text-white/60 mt-2 font-semibold tracking-wider uppercase">— The Baikadi Brothers</p>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div
              className="fs-reveal grid grid-cols-3 gap-3"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}>
              {[
              { icon: '🌿', label: 'Farm to Bottle', sub: 'Direct sourcing' },
              { icon: '🪵', label: 'Pure & Traditional', sub: '300+ yr method' },
              { icon: '🏡', label: 'Village Made', sub: 'Rangapur, Telangana' }].
              map((item) =>
              <div key={item.label} className="bg-muted/50 rounded-xl p-4 border border-border text-center flex flex-col items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-xs font-bold text-foreground leading-tight">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground">{item.sub}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}