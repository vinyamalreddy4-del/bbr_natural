// Product Image Mapping System
// Maps product slugs to appropriate image URLs
// Using Unsplash images that accurately represent each product type

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  // Cold Pressed Oils
  'groundnut-oil': 'https://images.pexels.com/photos/10046940/pexels-photo-10046940.jpeg',
  'sesame-oil': 'https://images.pexels.com/photos/10398481/pexels-photo-10398481.jpeg?auto=compress&cs=tinysrgb&w=800',
  'mustard-oil': 'https://images.pexels.com/photos/10048319/pexels-photo-10048319.jpeg',
  'coconut-oil': 'https://images.pexels.com/photos/11006805/pexels-photo-11006805.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
  'sunflower-oil': 'https://plus.unsplash.com/premium_photo-1664391616054-1671f1b7f75d?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  // Spice Powders
  'chilli-powder': 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?w=800&q=80',
  'turmeric-powder': 'https://images.unsplash.com/photo-1637217423180-463f1e73f6cd?w=800&q=80',
  'coriander-powder': 'https://images.pexels.com/photos/7263626/pexels-photo-7263626.jpeg',
  'cumin-powder': 'https://images.pexels.com/photos/32830296/pexels-photo-32830296.jpeg',

  // Traditional Powders
  'sambar-powder': 'https://images.pexels.com/photos/32144895/pexels-photo-32144895.jpeg',
  'rasam-powder': 'https://images.pexels.com/photos/8110204/pexels-photo-8110204.jpeg',
  'peanut-chutney-powder': 'https://images.pexels.com/photos/23384626/pexels-photo-23384626.jpeg',

  // Pantry Staples
  'jaggery-powder': 'https://images.pexels.com/photos/37234377/pexels-photo-37234377.jpeg',
  'besan': 'https://images.pexels.com/photos/32144900/pexels-photo-32144900.jpeg',
  'rice-flour': 'https://images.pexels.com/photos/36617926/pexels-photo-36617926.jpeg',

  // Premium Products
  'a2-ghee': 'https://images.pexels.com/photos/5471921/pexels-photo-5471921.jpeg',

  // Homemade Pickles
  'mango-pickle': 'https://images.pexels.com/photos/7812134/pexels-photo-7812134.jpeg',
  'gongura-pickle': 'https://images.pexels.com/photos/5031947/pexels-photo-5031947.jpeg',
  'lemon-pickle': 'https://images.pexels.com/photos/20080821/pexels-photo-20080821.jpeg',
  'tomato-pickle': 'https://images.pexels.com/photos/5379435/pexels-photo-5379435.jpeg?auto=compress&cs=tinysrgb&w=800',

  // Traditional Foods
  'murukulu': 'https://images.pexels.com/photos/14288624/pexels-photo-14288624.jpeg?auto=compress&cs=tinysrgb&w=800',
  'sakinalu': 'https://images.unsplash.com/photo-1709091052718-3cb8a990edfa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=800',
  'gyaralu': 'https://images.pexels.com/photos/9834373/pexels-photo-9834373.png',
  'sathu-pindi': 'https://images.pexels.com/photos/32144900/pexels-photo-32144900.jpeg?auto=compress&cs=tinysrgb&w=800',

  // Grains & Natural Staples
  'unpolished-rice': 'https://images.pexels.com/photos/6103071/pexels-photo-6103071.jpeg',

  // Village-made Powders
  'moringa-powder': 'https://images.pexels.com/photos/6104096/pexels-photo-6104096.jpeg',
  'curry-leaf-powder': 'https://plus.unsplash.com/premium_photo-1671130295843-cd4f9b29c613?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=800',

  // Rural Specialties
  'tamarind': 'https://images.pexels.com/photos/20737581/pexels-photo-20737581.jpeg',

  // Bundles
  'starter-spice-combo': 'https://images.pexels.com/photos/31852186/pexels-photo-31852186.jpeg',
  'healthy-oil-combo': 'https://plus.unsplash.com/premium_photo-1663936756798-ead5c2609856?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'kitchen-essentials-combo': 'https://images.pexels.com/photos/3737645/pexels-photo-3737645.jpeg',
};

// Helper function to get image URL for a product
export function getProductImage(slug: string): string {
  return PRODUCT_IMAGE_MAP[slug] || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80';
}

// Fallback image for products without specific images
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80';
