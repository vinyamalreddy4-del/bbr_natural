'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { getFeaturedProducts } from '@/lib/data/products';
import { Product } from '@/types/product';

const products = getFeaturedProducts();

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {products.map((product, idx) => {
            const variant = product.variants[0];
            const getTagColor = (tag: string) => {
              switch (tag) {
                case 'best-seller': return 'bg-accent text-white';
                case 'new': return 'bg-green-600 text-white';
                case 'premium': return 'bg-primary text-white';
                default: return 'bg-muted text-foreground';
              }
            };

            return (
              <div
                key={product.id}
                className="scroll-reveal product-card"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.8s ease ${idx * 0.12}s, transform 0.8s ease ${idx * 0.12}s`
                }}
              >
                <Link href={`/products/${product.slug}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-t-[1.25rem] bg-gradient-to-br ${product.colors.gradient} h-48 sm:h-52 lg:h-56`}>
                    <AppImage
                      src={product.images.main}
                      alt={product.images.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {product.tags.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-bold tracking-wider px-2.5 sm:px-3 py-1 rounded-full ${getTagColor(tag)}`}
                        >
                          {tag.replace('-', ' ').toUpperCase()}
                        </span>
                      ))}
                    </div>

                    {/* Emoji */}
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl">{product.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">{product.name}</h3>
                        {product.telugu && (
                          <p className="text-xs text-muted-foreground font-medium">{product.telugu}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-serif text-lg sm:text-xl font-medium text-accent">₹{variant.price}</p>
                        <p className="text-xs text-muted-foreground">{variant.label}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.tagline}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {product.benefits.slice(0, 3).map((benefit) => (
                        <span key={benefit.title} className="text-xs bg-muted text-muted-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium border border-border">
                          {benefit.icon} {benefit.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}