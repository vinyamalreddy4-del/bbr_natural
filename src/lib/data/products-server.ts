import { Product } from '@/types/product';
import { getDb } from '@/lib/mongodb';
import { ProductDocument } from '@/lib/models/Product';

// Async functions for server components only (uses MongoDB)
// This file is NOT imported by client components

export async function getProductBySlugAsync(slug: string): Promise<Product | undefined> {
  try {
    const db = await getDb();
    const product = await db.collection<ProductDocument>('products').findOne({ slug });
    return product as Product | undefined;
  } catch (error) {
    console.error('Error getting product by slug:', error);
    return undefined;
  }
}

export async function getRelatedProductsAsync(productId: string): Promise<Product[]> {
  try {
    const db = await getDb();
    const product = await db.collection<ProductDocument>('products').findOne({ id: productId });
    if (!product || !product.relatedProducts) return [];
    
    const related = await db
      .collection<ProductDocument>('products')
      .find({ id: { $in: product.relatedProducts } })
      .toArray();
    return related as Product[];
  } catch (error) {
    console.error('Error getting related products:', error);
    return [];
  }
}

export async function getAllProductsAsync(): Promise<Product[]> {
  try {
    const db = await getDb();
    const products = await db.collection<ProductDocument>('products').find({}).toArray();
    return products as Product[];
  } catch (error) {
    console.error('Error getting all products:', error);
    return [];
  }
}

export async function getProductsByCategoryAsync(category: string): Promise<Product[]> {
  try {
    const db = await getDb();
    const products = await db
      .collection<ProductDocument>('products')
      .find({ category: category as any })
      .toArray();
    return products as Product[];
  } catch (error) {
    console.error('Error getting products by category:', error);
    return [];
  }
}
