// Product Image Mapping System
// Maps product slugs to local image paths
// Images should be stored in /public/products/

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  // Cold Pressed Oils
  'groundnut-oil': '/products/groundnut-oils.png',
  'sesame-oil': '/products/sesame-oil.png',
  'mustard-oil': '/products/mustard-oil.png',
  'coconut-oil': '/products/coconut-oil.png',
  'sunflower-oil': '/products/sunflower-oil.png',

  // Spice Powders
  'chilli-powder': '/products/chilli-powder.png',
  'turmeric-powder': '/products/turmeric-powder.png',
  'coriander-powder': '/products/coriander-powder.png',
  'cumin-powder': '/products/cumin-powder.png',

  // Traditional Powders
  'sambar-powder': '/products/sambar-powder.png',
  'rasam-powder': '/products/rasam-powder.png',
  'peanut-chutney-powder': '/products/peanut-chutney-powder.png',

  // Pantry Staples
  'jaggery-powder': '/products/jaggery-powder.png',
  'besan': '/products/besan.png',
  'rice-flour': '/products/rice-flour.png',

  // Premium Products
  'a2-ghee': '/products/a2-ghee.png',

  // Homemade Pickles
  'mango-pickle': '/products/mango-pickle.png',
  'gongura-pickle': '/products/gongura-pickle.png',
  'lemon-pickle': '/products/lemon-pickle.png',
  'tomato-pickle': '/products/tomato-pickle.png',

  // Traditional Foods
  'murukulu': '/products/murukulu.png',
  'sakinalu': '/products/sakinalu.png',
  'gyaralu': '/products/gyaralu.png',
  'sathu-pindi': '/products/sathu-pindi.png',

  // Grains & Natural Staples
  'unpolished-rice': '/products/unpolished-rice.png',

  // Village-made Powders
  'moringa-powder': '/products/moringa-powder.png',
  'curry-leaf-powder': '/products/curry-leaf-powder.png',

  // Rural Specialties
  'tamarind': '/products/tamarind.png',

  // Bundles
  'starter-spice-combo': '/products/starter-spice-combo.png',
  'healthy-oil-combo': '/products/healthy-oil-combo.png',
  'kitchen-essentials-combo': '/products/kitchen-essentials-combo.png',
  'homepage-banner': '/products/homepage.png',
  'avinash': '/products/avinash.png',
  'laxman': '/products/laxman.png',
  'nagaraju': '/products/nagaraju.png',
  'sridhar': '/products/sridhar.png',
};

// Helper function to get image URL for a product
export function getProductImage(slug: string): string {
  return PRODUCT_IMAGE_MAP[slug] || '/products/fallback.png';
}

// Fallback image for products without specific images
export const FALLBACK_IMAGE = '/products/fallback.png';
