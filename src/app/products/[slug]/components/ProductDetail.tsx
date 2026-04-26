'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import VariantSelector from '@/components/product/VariantSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import { useCart } from '@/context/CartContext';
import { Product, ProductVariant } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id, selectedVariant.id, quantity, selectedVariant.price);
  };

  const whatsappMessage = `Hi BRR Natural, I want to order ${encodeURIComponent(product.name)} (${encodeURIComponent(selectedVariant.label)}) x ${quantity} - ₹${selectedVariant.price * quantity}`;
  const whatsappUrl = `https://wa.me/918978385957?text=${whatsappMessage}`;

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${product.colors.gradient} aspect-square`}>
            <AppImage
              src={product.images.main}
              alt={product.images.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.tags.map((tag) => {
                const getTagColor = (tag: string) => {
                  switch (tag) {
                    case 'best-seller': return 'bg-accent text-white';
                    case 'new': return 'bg-green-600 text-white';
                    case 'premium': return 'bg-primary text-white';
                    case 'organic': return 'bg-emerald-600 text-white';
                    case 'limited': return 'bg-red-600 text-white';
                    default: return 'bg-muted text-foreground';
                  }
                };
                return (
                  <span
                    key={tag}
                    className={`text-xs font-bold tracking-wider px-3 py-1.5 rounded-full ${getTagColor(tag)}`}
                  >
                    {tag.replace('-', ' ').toUpperCase()}
                  </span>
                );
              })}
            </div>

            {/* Emoji */}
            <span className="absolute bottom-4 right-4 text-4xl drop-shadow-lg">{product.emoji}</span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/products" className="hover:text-primary transition-colors">Products</a>
              <Icon name="ChevronRightIcon" size={16} />
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>

            {/* Name & Telugu */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-2">
                {product.name}
              </h1>
              {product.telugu && (
                <p className="text-lg text-muted-foreground">{product.telugu}</p>
              )}
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground">{product.tagline}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-medium text-accent">
                ₹{selectedVariant.price}
              </span>
              <span className="text-muted-foreground">/ {selectedVariant.label}</span>
            </div>

            {/* Variant Selector */}
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                min={1}
                max={selectedVariant.stock}
              />
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground font-semibold text-base rounded-full py-3 hover:bg-primary/90 transition-all"
              >
                Add to Cart
              </button>
            </div>

            {/* WhatsApp Order */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn justify-center text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Order via WhatsApp
            </a>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-medium text-foreground">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-medium text-foreground">Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Info */}
            {product.nutrition && (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-medium text-foreground">Nutrition Information</h2>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {product.nutrition.calories && (
                      <div>
                        <p className="text-xs text-muted-foreground">Calories</p>
                        <p className="font-semibold text-foreground">{product.nutrition.calories}</p>
                      </div>
                    )}
                    {product.nutrition.fat && (
                      <div>
                        <p className="text-xs text-muted-foreground">Fat</p>
                        <p className="font-semibold text-foreground">{product.nutrition.fat}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Key Nutrients</p>
                    <div className="flex flex-wrap gap-2">
                      {product.nutrition.keyNutrients.map((nutrient) => (
                        <span key={nutrient} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {nutrient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-medium text-foreground">Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span key={ingredient} className="text-sm bg-muted px-3 py-1.5 rounded-full">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Shelf Life */}
            {product.shelfLife && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="ClockIcon" size={16} />
                <span>Shelf Life: {product.shelfLife}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
