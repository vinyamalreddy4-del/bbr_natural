'use client';
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  loading?: boolean;
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  loading = false,
  emptyMessage = 'No products found'
}: ProductGridProps) {
  const gridCols = `${columns.mobile || 1} ${columns.tablet || 2} ${columns.desktop || 3}`;

  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5`}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted h-48 sm:h-52 lg:h-56 rounded-t-[1.25rem]" />
            <div className="p-4 sm:p-5 space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-1/2" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-8 bg-muted rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="font-serif text-2xl text-foreground mb-2">No Products Found</h3>
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns.desktop || 3} gap-4 lg:gap-5`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
