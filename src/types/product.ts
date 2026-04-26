// Product and Ecommerce Type Definitions

export type CategorySlug = 
  | 'cold-pressed-oils'
  | 'spice-powders'
  | 'traditional-powders'
  | 'pantry-staples'
  | 'premium-products'
  | 'homemade-pickles'
  | 'traditional-foods'
  | 'grains-staples'
  | 'village-powders'
  | 'rural-specialties';

export type ProductTag = 'best-seller' | 'new' | 'premium' | 'organic' | 'traditional' | 'limited';

export interface ProductVariant {
  id: string;
  label: string; // e.g., "500ml", "1kg", "250g"
  price: number;
  originalPrice?: number; // for discounts
  stock: number;
  sku: string;
  weight?: string;
}

export interface NutritionInfo {
  calories?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  fiber?: string;
  keyNutrients: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  telugu?: string;
  category: CategorySlug;
  tags: ProductTag[];
  emoji: string;
  tagline: string;
  description: string;
  longDescription: string;
  variants: ProductVariant[];
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  nutrition?: NutritionInfo;
  ingredients?: string[];
  shelfLife?: string;
  manufacturingDate?: string;
  images: {
    main: string;
    alt: string;
    gallery?: string[];
  };
  colors: {
    gradient: string;
    accent: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedProducts?: string[]; // product IDs
  frequentlyBoughtTogether?: string[]; // product IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  telugu?: string;
  description: string;
  icon: string;
  emoji: string;
  colors: {
    gradient: string;
    accent: string;
  };
  productCount: number;
  featured: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export interface Bundle {
  id: string;
  slug: string;
  name: string;
  description: string;
  products: Array<{
    productId: string;
    variantId: string;
    quantity: number;
  }>;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  image: string;
  imageAlt: string;
  tag: string;
  validUntil?: Date;
  stock: number;
  limitPerCustomer?: number;
}

// Cart Types
export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  total: number;
  itemCount: number;
}

// Wishlist Types
export interface WishlistItem {
  productId: string;
  addedAt: Date;
}

// Filter Types
export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'popularity' | 'newest';

export interface ProductFilters {
  category?: CategorySlug | 'all';
  searchQuery?: string;
  priceRange?: [number, number];
  tags?: ProductTag[];
  inStock?: boolean;
  sortBy?: SortOption;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  verified: boolean;
  createdAt: Date;
}
