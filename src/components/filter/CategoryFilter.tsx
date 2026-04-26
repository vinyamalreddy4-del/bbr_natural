'use client';
import React from 'react';
import { CategorySlug } from '@/types/product';
import { getAllCategories } from '@/lib/data/categories';

interface CategoryFilterProps {
  selectedCategory: CategorySlug | 'all';
  onCategoryChange: (category: CategorySlug | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = getAllCategories();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          selectedCategory === 'all'
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
            selectedCategory === category.slug
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <span>{category.emoji}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
