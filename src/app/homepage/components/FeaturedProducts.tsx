'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const products = [
{
  id: 'groundnut-oil',
  name: 'Groundnut Oil',
  telugu: 'వేరుశెనగ నూనె',
  price: 180,
  size: '500ml',
  tag: 'Best Seller',
  tagColor: 'bg-accent text-white',
  emoji: '🥜',
  description: 'Cold pressed from farm-fresh groundnuts. Rich in natural antioxidants, ideal for deep frying and everyday cooking.',
  benefits: ['High smoke point', 'Rich in Vitamin E', 'Traditional taste'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_134302618-1765397145970.png",
  imageAlt: 'Golden groundnut oil in glass bottle, warm amber color, clean white background, natural lighting',
  color: 'from-amber-50 to-yellow-50',
  span: 'lg:col-span-2'
},
{
  id: 'sesame-oil',
  name: 'Sesame Oil',
  telugu: 'నువ్వుల నూనె',
  price: 220,
  size: '500ml',
  tag: 'Premium',
  tagColor: 'bg-primary text-white',
  emoji: '🌱',
  description: 'Stone-pressed sesame oil with deep, nutty aroma. Perfect for tempering and Andhra cuisine.',
  benefits: ['Rich in calcium', 'Deep nutty aroma', 'Ayurvedic grade'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f141ab2a-1773579853172.png",
  imageAlt: 'Dark sesame oil in traditional clay pot, earthy tones, warm studio lighting',
  color: 'from-amber-100 to-orange-50',
  span: 'lg:col-span-1'
},
{
  id: 'chilli-powder',
  name: 'Chilli Powder',
  telugu: 'మిర్చి పొడి',
  price: 120,
  size: '250g',
  tag: 'Spicy',
  tagColor: 'bg-red-600 text-white',
  emoji: '🌶️',
  description: 'Sun-dried Guntur chillies, cleaned and stone-ground. Deep red colour, authentic Andhra heat.',
  benefits: ['Guntur variety', 'Stone ground', 'No artificial color'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc8a9e4e-1772459381622.png",
  imageAlt: 'Vibrant red chilli powder in a wooden bowl, bright red color, rustic background',
  color: 'from-red-50 to-orange-50',
  span: 'lg:col-span-1'
},
{
  id: 'turmeric-powder',
  name: 'Turmeric Powder',
  telugu: 'పసుపు పొడి',
  price: 90,
  size: '250g',
  tag: 'Pure',
  tagColor: 'bg-yellow-600 text-white',
  emoji: '🟡',
  description: 'Naturally dried Nizamabad turmeric, freshly ground for maximum curcumin and vibrant colour.',
  benefits: ['High curcumin', 'Nizamabad variety', 'Vibrant color'],
  image: "https://images.unsplash.com/photo-1637217423180-463f1e73f6cd",
  imageAlt: 'Bright yellow turmeric powder in wooden spoon, vibrant golden color, rustic natural background',
  color: 'from-yellow-50 to-amber-50',
  span: 'lg:col-span-2'
}];


export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div
            className="scroll-reveal"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>

            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Our Products</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
              Straight from the <span className="italic text-primary">Chekku</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="scroll-reveal flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group shrink-0"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>

            View all products
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* BENTO GRID AUDIT:
              Array has 4 cards: [Groundnut Oil, Sesame Oil, Chilli Powder, Turmeric Powder]
              Row 1: [col-1-2: Groundnut Oil cs-2] [col-3: Sesame Oil cs-1]
              Row 2: [col-1: Chilli Powder cs-1] [col-2-3: Turmeric Powder cs-2]
              Placed 4/4 cards ✓
           */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {products.map((product, idx) =>
          <div
            key={product.id}
            className={`scroll-reveal product-card ${product.span}`}
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: `opacity 0.8s ease ${idx * 0.12}s, transform 0.8s ease ${idx * 0.12}s`
            }}>

              {/* Image */}
              <div className={`relative overflow-hidden rounded-t-[1.25rem] bg-gradient-to-br ${product.color} h-48 sm:h-52 lg:h-56`}>
                <AppImage
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Tag */}
                <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-bold tracking-wider px-2.5 sm:px-3 py-1 rounded-full ${product.tagColor}`}>
                  {product.tag}
                </span>
                {/* Emoji */}
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl">{product.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">{product.name}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{product.telugu}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-serif text-lg sm:text-xl font-medium text-accent">₹{product.price}</p>
                    <p className="text-xs text-muted-foreground">{product.size}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {product.benefits.map((b) =>
                <span key={b} className="text-xs bg-muted text-muted-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium border border-border">
                      {b}
                    </span>
                )}
                </div>

                <a
                href={`https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full py-2.5 hover:bg-primary/90 transition-all">

                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                  </svg>
                  Order Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}