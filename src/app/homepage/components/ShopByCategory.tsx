'use client';
import React from 'react';
import Link from 'next/link';
import { getAllCategories } from '@/lib/data/categories';

export default function ShopByCategory() {
  const categories = getAllCategories();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">
            Browse Categories
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
            Shop by <span className="italic text-primary">Category</span>
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 to-muted aspect-[4/3] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="font-serif text-2xl font-medium text-white mb-1">
                  {category.name}
                </h3>
                {category.telugu && (
                  <p className="text-sm text-white/80 mb-2">{category.telugu}</p>
                )}
                <p className="text-sm text-white/70 line-clamp-2 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
