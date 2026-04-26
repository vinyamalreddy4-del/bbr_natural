'use client';
import React from 'react';
import { ProductVariant } from '@/types/product';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
  disabled?: boolean;
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onVariantChange,
  disabled = false
}: VariantSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
        Choose Size
      </span>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariant.id;
          const isOutOfStock = variant.stock === 0;

          return (
            <button
              key={variant.id}
              onClick={() => !isOutOfStock && !disabled && onVariantChange(variant)}
              disabled={isOutOfStock || disabled}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all relative ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : isOutOfStock
                  ? 'border-border text-muted-foreground/50 cursor-not-allowed bg-muted/30'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:bg-muted/50'
              }`}
              aria-label={`Select ${variant.label} for ₹${variant.price}`}
              aria-selected={isSelected}
            >
              <span className={isOutOfStock ? 'line-through' : ''}>
                {variant.label}
              </span>
              {!isOutOfStock && (
                <span className="ml-1">— ₹{variant.price}</span>
              )}
              {isOutOfStock && (
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          );
        })}
      </div>
      {selectedVariant.stock > 0 && selectedVariant.stock <= 5 && (
        <p className="text-xs text-orange-600 font-medium">
          Only {selectedVariant.stock} left in stock
        </p>
      )}
    </div>
  );
}
