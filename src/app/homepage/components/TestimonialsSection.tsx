'use client';
import React, { useRef, useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getProductImage } from '@/lib/data/imageMap';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  shortQuote: string;
  product: string;
  rating: number;
  image: string;
  imageAlt: string;
  verified: boolean;
  since: string;
}

const testimonials: Testimonial[] = [
{
  name: 'Sridhar Chintala',
  role: 'Software Engineer',
  location: 'Hyderabad, TG',
  quote: 'I switched to BRR groundnut oil 6 months ago and the difference is night and day. My family noticed the taste immediately—richer, nuttier, more alive. My daughter\'s skin has improved too. I will never go back to refined oil.',
  shortQuote: 'My family noticed the taste immediately—richer, nuttier, more alive.',
  product: 'Cold Pressed Groundnut Oil',
  rating: 5,
  image: getProductImage('sridhar'),
  imageAlt: 'Indian man smiling warmly in a kitchen, natural lighting, traditional home setting',
  verified: true,
  since: 'Customer since 2024'
},
{
  name: 'Laxman',
  role: 'Pharmacist',
  location: 'Hyderabad, TG',
  quote: 'As a pharmacist, I advise people to switch to cold pressed oils. BRR Natural is the only local brand I trust completely—genuine cold pressed, no adulteration, no shortcuts.',
  shortQuote: 'The only local brand I trust completely—genuine cold pressed, no adulteration.',
  product: 'Cold Pressed Sesame Oil',
  rating: 5,
  image: getProductImage('laxman'),
  imageAlt: 'Indian male pharmacist in professional attire, confident expression, clean background',
  verified: true,
  since: 'Customer since 2022'
},
{
  name: 'Nagaraju',
  role: 'Software Engineer & Home Cook',
  location: 'Hyderabad, TG',
  quote: 'The turmeric powder is so vibrant—no artificial colour, just pure natural gold. The aroma when it hits hot oil is incredible. My dal tadka has never looked or smelled better.',
  shortQuote: 'No artificial colour, just pure natural gold. My dal tadka has never been better.',
  product: 'Pure Turmeric Powder',
  rating: 5,
  image: getProductImage('nagaraju'),
  imageAlt: 'Indian man smiling warmly, bright natural lighting, traditional kitchen setting',
  verified: true,
  since: 'Customer since 2023'
},
{
  name: 'Avinash Reddy',
  role: 'Business Owner',
  location: 'Warangal, TG',
  quote: 'I use BRR sesame oil in my restaurant. Customers keep asking what makes the food taste different. The answer is always the same—real cold pressed oil from people who care about quality.',
  shortQuote: 'Customers keep asking what makes the food taste different. The answer is BRR.',
  product: 'Cold Pressed Sesame Oil',
  rating: 5,
  image: getProductImage('avinash'),
  imageAlt: 'Indian restaurant owner smiling, casual professional attire, warm indoor lighting',
  verified: true,
  since: 'Bulk customer since 2022'
},
{
  name: 'Padma Rao',
  role: 'Nutritionist',
  location: 'Visakhapatnam, AP',
  quote: 'BRR Natural\'s chilli powder has no added colour—you can see the natural deep red. I recommend it to all my clients who cook Andhra food. Genuinely pure, genuinely traditional.',
  shortQuote: 'Rare to find this quality. I recommend it to all my clients who cook Andhra food.',
  product: 'Pure Red Chilli Powder',
  rating: 5,
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_195b896d4-1772076061002.png',
  imageAlt: 'Indian woman nutritionist, confident smile, clean studio background',
  verified: true,
  since: 'Customer since 2023'
}
];


const stats = [
{ value: '500+', label: 'Happy Families', icon: '🏠' },
{ value: '3+', label: 'Years of Trust', icon: '🤝' },
{ value: '100%', label: 'Pure & Natural', icon: '🌿' },
{ value: '4.9★', label: 'Average Rating', icon: '⭐' }];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={i < rating ? 0 : 1.5}
        className={`w-4 h-4 ${i < rating ? 'text-accent' : 'text-border'}`}>

          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </div>);

}

export default function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [featured, setFeatured] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const updateScrollState = () => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollLeft(rail.scrollLeft > 10);
    setCanScrollRight(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 10);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => rail.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ts-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    railRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  const ft = testimonials[featured];

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 chekku-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Section header */}
        <div
          className="ts-reveal text-center mb-14"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>

          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Real Customers · Real Results</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light tracking-tight leading-tight">
            Families That <span className="italic text-primary">Trust BRR Natural</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            From village kitchens to city homes — real people sharing what genuine cold-pressed purity tastes like.
          </p>
        </div>

        {/* Stats strip */}
        <div
          className="ts-reveal grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}>

          {stats.map((s) =>
          <div key={s.label} className="bg-card border border-border rounded-2xl px-4 py-5 text-center shadow-sm">
              <span className="text-2xl block mb-1">{s.icon}</span>
              <p className="font-serif text-2xl font-semibold text-primary leading-none">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold tracking-wide">{s.label}</p>
            </div>
          )}
        </div>

        {/* Featured testimonial — large asymmetric card */}
        <div
          className="ts-reveal mb-10"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>

          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: photo + identity */}
              <div className="lg:col-span-4 relative bg-primary/5 flex flex-col items-center justify-center p-8 gap-5 border-b lg:border-b-0 lg:border-r border-border">
                {/* Decorative ring */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                    <AppImage
                      key={ft.image}
                      src={ft.image}
                      alt={ft.imageAlt}
                      fill
                      className="object-cover" />

                  </div>
                  {/* Verified badge */}
                  {ft.verified &&
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-white shadow">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  }
                </div>
                <div className="text-center">
                  <p className="font-serif text-lg font-semibold text-foreground">{ft.name}</p>
                  <p className="text-sm text-muted-foreground">{ft.role}</p>
                  <p className="text-xs text-accent font-semibold mt-0.5">{ft.location}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <StarRating rating={ft.rating} />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">{ft.since}</span>
                </div>
                {/* Product tag */}
                <div className="trust-badge text-[10px]">
                  🌿 {ft.product}
                </div>
              </div>

              {/* Right: quote + selector */}
              <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between gap-6">
                {/* Large quote mark */}
                <div>
                  <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10 text-accent/20 mb-4">
                    <path d="M14 6C8.477 6 4 10.477 4 16v4c0 5.523 4.477 10 10 10h2v8l8-8h2c5.523 0 10-4.477 10-10v-4c0-5.523-4.477-10-10-10H14zm20 0c-5.523 0-10 4.477-10 10v4c0 5.523 4.477 10 10 10h2v8l8-8h2c5.523 0 10-4.477 10-10v-4c0-5.523-4.477-10-10-10H34z" />
                  </svg>
                  <p className="font-serif text-xl lg:text-2xl font-light text-foreground leading-relaxed italic">
                    &ldquo;{ft.quote}&rdquo;
                  </p>
                </div>

                {/* Selector dots */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground mr-2">More stories</span>
                  {testimonials.map((t, i) =>
                  <button
                    key={t.name}
                    onClick={() => setFeatured(i)}
                    className={`transition-all duration-300 rounded-full overflow-hidden border-2 ${
                    i === featured ?
                    'w-9 h-9 border-accent shadow-md' :
                    'w-7 h-7 border-border opacity-60 hover:opacity-100 hover:border-accent/50'}`
                    }
                    aria-label={`View ${t.name}'s testimonial`}>

                      <div className="relative w-full h-full">
                        <AppImage
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover" />

                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable rail — compact cards */}
        <div
          className="ts-reveal"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}>

          <div className="flex items-center justify-between mb-5">
            <p className="text-sm font-bold text-muted-foreground tracking-wide uppercase">All Reviews</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll left">

                <Icon name="ArrowLeftIcon" size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll right">

                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

            <div
              ref={railRef}
              className="flex gap-4 overflow-x-auto pb-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

              {testimonials.map((t, idx) =>
              <article
                key={t.name}
                onClick={() => setFeatured(idx)}
                className={`shrink-0 w-[280px] sm:w-[320px] bg-card border rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                idx === featured ? 'border-accent ring-1 ring-accent/30' : 'border-border hover:border-accent/40'}`
                }>

                  <div className="flex items-center justify-between">
                    <StarRating rating={t.rating} />
                    {t.verified &&
                  <span className="text-[9px] font-bold tracking-wider uppercase text-primary bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
                        ✓ Verified
                      </span>
                  }
                  </div>

                  <p className="font-serif text-sm italic text-foreground leading-relaxed flex-1 line-clamp-3">
                    &ldquo;{t.shortQuote}&rdquo;
                  </p>

                  <div className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/8 px-2.5 py-1 rounded-full self-start border border-accent/15">
                    🌿 {t.product}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border-2 border-border">
                      <AppImage
                      src={t.image}
                      alt={t.imageAlt}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full" />

                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-tight truncate">{t.name}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className="ts-reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s' }}>

          {[
          { icon: '🌿', text: 'No Chemicals · No Shortcuts' },
          { icon: '🪵', text: 'Traditional Wooden Chekku' },
          { icon: '🏡', text: 'Made in Rangapur Village, Telangana' }].
          map((item) =>
          <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          )}
        </div>

      </div>
    </section>);

}