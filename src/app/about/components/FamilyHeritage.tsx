'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const founders = [
{
  name: 'Madhu Reddy',
  role: 'Co-Founder',
  initial: 'M',
  desc: 'Leads operations and quality control. Ensures every batch meets the purity standards our grandfather set.'
},
{
  name: 'Bharath Reddy',
  role: 'Co-Founder',
  initial: 'B',
  desc: 'Manages farm relationships and raw material sourcing directly from trusted farmers in Telangana and Andhra Pradesh.'
},
{
  name: 'Bhagavan Reddy',
  role: 'Co-Founder',
  initial: 'B',
  desc: 'Oversees the traditional pressing process and ensures the wooden chekku method is preserved authentically.'
}];


export default function FamilyHeritage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fh-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Name meaning */}
        <div
          className="fh-reveal mb-16 max-w-3xl mx-auto text-center"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-4">The Name Behind the Brand</span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light tracking-tight leading-tight mb-6">
            What <span className="italic text-primary">BRR Natural</span> Means
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
            { letter: 'B', word: 'Baikadi', meaning: 'Our family name — rooted in Rangapur Village, Telangana for generations.' },
            { letter: 'R', word: 'Rajireddy', meaning: 'Our grandfather\'s name — the man whose traditional methods we honour every day.' },
            { letter: 'R', word: 'Reddy', meaning: 'Our family surname — the three brothers who carry forward his legacy.' }].
            map((item) =>
            <div key={item.word} className="bg-muted/50 rounded-2xl p-6 border border-border text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-medium text-primary">{item.letter}</span>
                </div>
                <p className="font-semibold text-base text-foreground mb-1">{item.word}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.meaning}</p>
              </div>
            )}
          </div>
        </div>

        {/* Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div
            className="fh-reveal lg:col-span-6 flex flex-col gap-6"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}>
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block">Our Origin Story</span>
            <h3 className="font-serif text-[clamp(1.6rem,3.5vw,2.5rem)] font-light tracking-tight leading-tight">
              From a Village Chekku<br />
              <span className="italic text-primary">to Every Kitchen</span>
            </h3>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p className="text-base">
                Our grandfather, <strong className="text-foreground font-semibold">Rajireddy</strong>, ran a traditional wooden chekku in Rangapur Village, Huzurabad Mandal, Karimnagar District, Telangana. Every morning, the chekku would turn — pressing pure groundnut and sesame oil for the families of the village.
              </p>
              <p className="text-base">
                Growing up, brothers <strong className="text-foreground font-semibold">Madhu, Bharath, and Bhagavan</strong> watched this ritual. They saw how the oil tasted different — richer, more fragrant, more alive. They also saw how the world was moving toward refined, chemical-processed oils that stripped away everything good.
              </p>
              <p className="text-base">
                In 2020, they made a decision: to revive the chekku, honour their grandfather&apos;s name, and bring genuinely pure food to families who deserve better. <strong className="text-foreground font-semibold">BRR Natural was born.</strong>
              </p>
              <p className="text-base">
                Today, every bottle of BRR Natural oil and every pouch of spice carries the same promise Rajireddy made to his village — <em>pure, honest, and made with care.</em>
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-accent/5 rounded-2xl border border-accent/20">
              <span className="text-2xl shrink-0">📍</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">Our Manufacturing Home</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rangapur Village, Huzurabad Mandal,<br />
                  Karimnagar District, Telangana, India
                </p>
              </div>
            </div>
          </div>

          <div
            className="fh-reveal lg:col-span-6 flex flex-col gap-4"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17f0e2c7a-1772470271252.png"
                alt="Traditional Indian kitchen with brass vessels, wooden press, and natural ingredients, warm earthy tones, village setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-lg italic text-white leading-snug">
                  "The same oil my grandfather made — now available for every family in India."
                </p>
                <p className="text-xs text-white/70 mt-2 font-semibold tracking-wider uppercase">— Madhu Reddy, Co-Founder</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
              { num: '3', label: 'Brothers', sub: 'Co-founders' },
              { num: '3+', label: 'Generations', sub: 'Of tradition' },
              { num: '500+', label: 'Families', sub: 'Trust us' },
              { num: '100%', label: 'Chemical Free', sub: 'Always' }].
              map((s) =>
              <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="font-serif text-2xl font-medium text-primary">{s.num}</p>
                  <p className="text-xs font-bold text-foreground mt-0.5">{s.label}</p>
                  <p className="text-[10px] text-muted-foreground">{s.sub}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Founders */}
        <div
          className="fh-reveal"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}>
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">The Founders</span>
            <h3 className="font-serif text-[clamp(1.6rem,3.5vw,2.5rem)] font-light tracking-tight">
              Three Brothers, <span className="italic text-primary">One Mission</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {founders.map((f) =>
            <div key={f.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 hover:shadow-md transition-all duration-400">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-2xl font-medium text-primary">{f.initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-foreground">{f.name}</h4>
                  <p className="text-xs font-bold tracking-wider uppercase text-accent mt-0.5">{f.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}