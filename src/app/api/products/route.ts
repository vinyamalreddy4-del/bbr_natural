import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ProductDocument } from '@/lib/models/Product';

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');

    let query: any = {};

    if (category) {
      query.category = category as any;
    }

    if (slug) {
      query.slug = slug;
    }

    if (featured === 'true') {
      query.tags = 'best-seller' as any;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
      ];
    }

    const products = await db
      .collection<ProductDocument>('products')
      .find(query)
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
