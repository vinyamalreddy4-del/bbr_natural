import { getDb } from '../src/lib/mongodb';
import { ProductDocument, CategoryDocument } from '../src/lib/models/Product';
import { getAllProducts as getHardcodedProducts } from '../src/lib/data/products';
import { getAllCategories as getHardcodedCategories } from '../src/lib/data/categories';
import { PRODUCT_IMAGE_MAP } from '../src/lib/data/imageMap';

async function seedDatabase() {
  console.log('🌱 Starting database seed...');

  try {
    const db = await getDb();

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await db.collection('products').deleteMany({});
    await db.collection('categories').deleteMany({});

    // Migrate categories
    console.log('📦 Migrating categories...');
    const categories = getHardcodedCategories();
    const categoryDocuments: CategoryDocument[] = categories.map(cat => ({
      slug: cat.slug,
      name: cat.name,
      telugu: cat.telugu,
      description: cat.description,
      icon: cat.icon,
      emoji: cat.emoji,
      colors: cat.colors,
      productCount: cat.productCount,
      featured: cat.featured,
      seo: cat.seo,
    }));

    await db.collection('categories').insertMany(categoryDocuments);
    console.log(`✅ Inserted ${categoryDocuments.length} categories`);

    // Migrate products
    console.log('📦 Migrating products...');
    const products = getHardcodedProducts();
    const productDocuments: ProductDocument[] = products.map((product: any) => ({
      id: product.id,
      slug: product.slug,
      name: product.name,
      telugu: product.telugu,
      category: product.category,
      tags: product.tags,
      emoji: product.emoji,
      tagline: product.tagline,
      description: product.description,
      longDescription: product.longDescription,
      variants: product.variants,
      benefits: product.benefits,
      nutrition: product.nutrition,
      ingredients: product.ingredients,
      shelfLife: product.shelfLife,
      manufacturingDate: product.manufacturingDate,
      images: {
        main: product.images.main,
        alt: product.images.alt,
        gallery: product.images.gallery,
      },
      colors: product.colors,
      seo: product.seo,
      relatedProducts: product.relatedProducts,
      frequentlyBoughtTogether: product.frequentlyBoughtTogether,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }));

    await db.collection('products').insertMany(productDocuments);
    console.log(`✅ Inserted ${productDocuments.length} products`);

    // Create indexes
    console.log('🔧 Creating indexes...');
    await db.collection('products').createIndex({ slug: 1 }, { unique: true });
    await db.collection('products').createIndex({ category: 1 });
    await db.collection('products').createIndex({ tags: 1 });
    await db.collection('products').createIndex({ 'tags': 1 }); // For featured products
    await db.collection('categories').createIndex({ slug: 1 }, { unique: true });
    console.log('✅ Indexes created');

    console.log('🎉 Database seed completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }

  process.exit(0);
}

seedDatabase();
