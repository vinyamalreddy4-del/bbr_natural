import { ObjectId } from 'mongodb';
import { ProductTag, CategorySlug } from '@/types/product';

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  originalPrice?: number;
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

export interface ProductDocument {
  _id?: ObjectId;
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
  relatedProducts?: string[];
  frequentlyBoughtTogether?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryDocument {
  _id?: ObjectId;
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

export interface UserDocument {
  _id?: ObjectId;
  email: string;
  name?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderDocument {
  _id?: ObjectId;
  orderId: string;
  userId?: string;
  userEmail: string;
  userName: string;
  userPhone?: string;
  items: Array<{
    productId: string;
    productName: string;
    variantId: string;
    variantLabel: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'paid' | 'failed' | 'refunded';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
