import { Category } from '@/types/product';

export const CATEGORIES: Record<string, Category> = {
  'cold-pressed-oils': {
    slug: 'cold-pressed-oils',
    name: 'Cold Pressed Oils',
    telugu: 'చెక్కు నూనెలు',
    description: 'Traditional wooden chekku extracted oils - pure, chemical-free, and rich in natural nutrients. Perfect for healthy cooking.',
    icon: 'oil-can',
    emoji: '🫙',
    colors: {
      gradient: 'from-amber-50 to-yellow-100',
      accent: 'border-amber-300'
    },
    productCount: 5,
    featured: true,
    seo: {
      title: 'Cold Pressed Oils | Traditional Wooden Chekku Oils | BRR Natural',
      description: 'Buy cold pressed groundnut, sesame, mustard, coconut, and sunflower oils extracted using traditional wooden chekku method. Chemical-free, healthy, and authentic.'
    }
  },
  'spice-powders': {
    slug: 'spice-powders',
    name: 'Spice Powders',
    telugu: 'మసాలా పొడిలు',
    description: 'Authentic Andhra spice powders - sun-dried, stone-ground, and free from artificial colors and preservatives.',
    icon: 'sparkles',
    emoji: '🌶️',
    colors: {
      gradient: 'from-red-50 to-orange-100',
      accent: 'border-red-300'
    },
    productCount: 6,
    featured: true,
    seo: {
      title: 'Spice Powders | Authentic Andhra Spices | BRR Natural',
      description: 'Premium quality turmeric, chilli, coriander, cumin, pepper, and garam masala powders. Sun-dried, stone-ground, no artificial colors.'
    }
  },
  'traditional-powders': {
    slug: 'traditional-powders',
    name: 'Traditional Powders',
    telugu: 'సాంప్రదాయ పొడిలు',
    description: 'Homemade-style traditional powders for authentic South Indian cooking - sambar, rasam, idli podi, and more.',
    icon: 'bowl-food',
    emoji: '🥘',
    colors: {
      gradient: 'from-orange-50 to-amber-100',
      accent: 'border-orange-300'
    },
    productCount: 4,
    featured: true,
    seo: {
      title: 'Traditional Powders | Sambar, Rasam, Idli Podi | BRR Natural',
      description: 'Authentic South Indian traditional powders - sambar powder, rasam powder, idli podi, peanut chutney powder. Homemade taste.'
    }
  },
  'pantry-staples': {
    slug: 'pantry-staples',
    name: 'Pantry Staples',
    telugu: 'ప్రాథమిక వస్తువులు',
    description: 'Essential kitchen staples - jaggery powder, besan, rice flour, millet flour for everyday cooking needs.',
    icon: 'wheat-awn',
    emoji: '🌾',
    colors: {
      gradient: 'from-yellow-50 to-amber-100',
      accent: 'border-yellow-300'
    },
    productCount: 4,
    featured: false,
    seo: {
      title: 'Pantry Staples | Jaggery, Besan, Flours | BRR Natural',
      description: 'Essential kitchen staples - jaggery powder, besan, rice flour, millet flour. Natural and chemical-free for healthy cooking.'
    }
  },
  'premium-products': {
    slug: 'premium-products',
    name: 'Premium Products',
    telugu: 'ప్రీమియం ఉత్పత్తులు',
    description: 'Premium quality products - A2 ghee from grass-fed cows, traditional pickles, and specialty items.',
    icon: 'star',
    emoji: '⭐',
    colors: {
      gradient: 'from-amber-100 to-yellow-200',
      accent: 'border-amber-400'
    },
    productCount: 3,
    featured: true,
    seo: {
      title: 'Premium Products | A2 Ghee, Traditional Pickles | BRR Natural',
      description: 'Premium A2 ghee from grass-fed cows, traditional pickles, and specialty products. Pure, authentic, and healthy.'
    }
  }
};

export const CATEGORY_SLUGS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>;

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES[slug];
}

export function getFeaturedCategories(): Category[] {
  return CATEGORY_SLUGS
    .map(slug => CATEGORIES[slug])
    .filter(category => category.featured);
}

export function getAllCategories(): Category[] {
  return CATEGORY_SLUGS.map(slug => CATEGORIES[slug]);
}
