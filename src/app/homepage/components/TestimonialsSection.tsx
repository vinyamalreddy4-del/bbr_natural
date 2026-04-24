'use client';
import React, { useRef, useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Lakshmi Devi',
  role: 'Homemaker, Vijayawada',
  quote: 'I switched to BRR groundnut oil 6 months ago. The difference in taste is remarkable — my family noticed immediately. My daughter\'s skin has improved too!',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ea42ac5-1772258592389.png",
  imageAlt: 'Indian woman smiling in a kitchen, warm natural lighting, traditional home setting',
  rotate: '-rotate-2'
},
{
  name: 'Venkata Ramana',
  role: 'Doctor, Guntur',
  quote: 'As a physician, I recommend cold pressed oils to my patients. BRR Natural is the only brand I trust locally — genuine cold pressed, no adulteration.',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f0fd5cb-1763295525028.png",
  imageAlt: 'Indian man in professional attire, confident expression, clean background',
  rotate: 'rotate-1'
},
{
  name: 'Sarada Kumari',
  role: 'Housewife, Hyderabad',
  quote: 'The turmeric powder is so vibrant and the aroma is just like freshly ground! No artificial colour — my dal tadka looks and smells amazing.',
  rating: 5,
  image: "https://images.unsplash.com/photo-1612684352323-b79cfec32b7a",
  imageAlt: 'Indian woman smiling warmly, bright natural lighting, traditional setting',
  rotate: '-rotate-1'
},
{
  name: 'Suresh Babu',
  role: 'Restaurant Owner, Nellore',
  quote: 'I use BRR sesame oil in my restaurant. Customers keep asking what makes the food taste different. The answer is always the same — real cold pressed oil.',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e07571-1763295086046.png",
  imageAlt: 'Indian businessman smiling, casual professional attire, warm indoor lighting',
  rotate: 'rotate-2'
},
{
  name: 'Padma Rao',
  role: 'Nutritionist, Visakhapatnam',
  quote: 'BRR Natural\'s chilli powder has no added color — you can see the natural red. Genuinely pure. I recommend it to all my clients who cook Andhra food.',
  rating: 5,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1524059f7-1763300494995.png",
  imageAlt: 'Indian woman professional, confident smile, clean studio background',
  rotate: '-rotate-3'
}];


export default function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const scroll = (dir: 'left' | 'right') => {
    railRef.current?.scrollBy({ left: dir === 'left' ? -480 : 480, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Testimonials</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
              Families That <span className="italic text-primary">Trust Us</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll left">

              <Icon name="ArrowLeftIcon" size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll right">

              <Icon name="ArrowRightIcon" size={18} />
            </button>
          </div>
        </div>

        {/* Rail */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={railRef}
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {testimonials.map((t, idx) =>
            <article
              key={t.name}
              className={`shrink-0 w-[320px] sm:w-[400px] bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all duration-500 ${t.rotate}`}>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) =>
                <span key={i} className="text-accent text-sm">★</span>
                )}
                </div>

                {/* Quote */}
                <p className="font-serif text-base italic text-foreground leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border">
                    <AppImage
                    src={t.image}
                    alt={t.imageAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full" />

                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>);

}