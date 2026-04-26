'use client';
import React from 'react';
import Link from 'next/link';
import { getBundles } from '@/lib/data/products';
import { Bundle } from '@/types/product';

export default function ComboPacks() {
  const bundles = getBundles();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">
            Value Packs
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
            Combo <span className="italic text-primary">Packs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Save more with our specially curated combo packs. Perfect for gifting or stocking up your kitchen.
          </p>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle: Bundle) => {
            return (
              <div
                key={bundle.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                {/* Savings Badge */}
                {bundle.discountPercent > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Save {bundle.discountPercent}%
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Image */}
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={bundle.image}
                      alt={bundle.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {bundle.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {bundle.description}
                  </p>

                  {/* Products Included */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Includes {bundle.products.length} items:
                    </p>
                    <ul className="space-y-1">
                      {bundle.products.slice(0, 3).map((item, index) => (
                        <li key={`${item.productId}-${item.variantId}`} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>Item {index + 1} (Qty: {item.quantity})</span>
                        </li>
                      ))}
                      {bundle.products.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{bundle.products.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-2xl font-medium text-accent">
                      ₹{bundle.discountedPrice}
                    </span>
                    {bundle.originalPrice > bundle.discountedPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{bundle.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products`}
                    className="block w-full text-center bg-primary text-primary-foreground font-semibold text-sm rounded-full py-2.5 hover:bg-primary/90 transition-all"
                  >
                    View Combo
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
