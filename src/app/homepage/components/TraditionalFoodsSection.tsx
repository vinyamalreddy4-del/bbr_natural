import React from 'react';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function TraditionalFoodsSection() {
  const traditionalFoods = getProductsByCategory('traditional-foods');

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            🥨 Traditional Delights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
            Traditional Foods
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Authentic Andhra and Telangana snacks made with traditional recipes passed down through generations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
          {traditionalFoods.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products?category=traditional-foods"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Traditional Foods
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
