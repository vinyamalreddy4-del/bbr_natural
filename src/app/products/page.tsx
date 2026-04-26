'use client';
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './components/ProductsHero';
import ProductGrid from '@/components/product/ProductGrid';
import CategoryFilter from '@/components/filter/CategoryFilter';
import SearchBar from '@/components/search/SearchBar';
import { getAllProducts, getProductsByCategory, searchProducts } from '@/lib/data/products';
import { CategorySlug } from '@/types/product';
import PackagingSection from './components/PackagingSection';
import OrderCTA from './components/OrderCTA';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let products = getAllProducts();

    if (selectedCategory !== 'all') {
      products = getProductsByCategory(selectedCategory);
    }

    if (searchQuery.trim()) {
      products = searchProducts(searchQuery);
    }

    return products;
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="pt-16">
        <ProductsHero />
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <SearchBar onSearch={setSearchQuery} placeholder="Search products..." />
              </div>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>

            <ProductGrid products={filteredProducts} />
          </div>
        </section>
        <PackagingSection />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}