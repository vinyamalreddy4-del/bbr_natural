'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { Product, ProductVariant } from '@/types/product';

interface ProductCardProps {
  product: Product;
  variant?: ProductVariant;
  showAddToCart?: boolean;
  showWishlist?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  variant,
  showAddToCart = true,
  showWishlist = true,
  className = ''
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const selectedVariant = variant || product.variants[0];

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    // TODO: Integrate with wishlist context
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'best-seller':
        return 'bg-accent text-white';
      case 'new':
        return 'bg-green-600 text-white';
      case 'premium':
        return 'bg-primary text-white';
      case 'organic':
        return 'bg-emerald-600 text-white';
      case 'limited':
        return 'bg-red-600 text-white';
      default:
        return 'bg-muted text-foreground';
    }
  };

  const whatsappMessage = `Hi BRR Natural, I want to order ${encodeURIComponent(product.name)} (${encodeURIComponent(selectedVariant.label)}) - ₹${selectedVariant.price}`;
  const whatsappUrl = `https://wa.me/918978385957?text=${whatsappMessage}`;

  return (
    <div className={`product-card group ${className}`}>
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image Section */}
        <div className={`relative overflow-hidden rounded-t-[1.25rem] bg-gradient-to-br ${product.colors.gradient} h-48 sm:h-52 lg:h-56`}>
          <AppImage
            src={product.images.main}
            alt={product.images.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`text-xs font-bold tracking-wider px-2.5 py-1 rounded-full ${getTagColor(tag)}`}
              >
                {tag.replace('-', ' ').toUpperCase()}
              </span>
            ))}
          </div>

          {/* Wishlist Button */}
          {showWishlist && (
            <button
              onClick={handleWishlistToggle}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Icon
                name={isWishlisted ? 'HeartIcon' : 'HeartIcon'}
                size={16}
                className={isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}
                variant={isWishlisted ? 'solid' : 'outline'}
              />
            </button>
          )}

          {/* Emoji */}
          <span className="absolute bottom-4 right-4 text-2xl sm:text-3xl drop-shadow-lg">
            {product.emoji}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
          {/* Name & Price */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              {product.telugu && (
                <p className="text-xs text-muted-foreground font-medium">{product.telugu}</p>
              )}
            </div>
            <div className="text-right shrink-0">
              <p className="font-serif text-lg sm:text-xl font-medium text-accent">
                ₹{selectedVariant.price}
              </p>
              <p className="text-xs text-muted-foreground">{selectedVariant.label}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.tagline}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {product.benefits.slice(0, 3).map((benefit) => (
              <span
                key={benefit.title}
                className="text-xs bg-muted text-muted-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium border border-border"
              >
                {benefit.icon} {benefit.title}
              </span>
            ))}
          </div>

          {/* Add to Cart / WhatsApp Button */}
          {showAddToCart && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full py-2.5 hover:bg-primary/90 transition-all group-hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272-.297-1.04-1.016-1.04-2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Order Now
            </a>
          )}
        </div>
      </Link>
    </div>
  );
}
