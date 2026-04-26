import { Product, Bundle } from '@/types/product';
import { getProductImage } from './imageMap';

// Cold Pressed Oils
const coldPressedOils: Product[] = [
  {
    id: 'groundnut-oil',
    slug: 'groundnut-oil',
    name: 'Groundnut Oil',
    telugu: 'వేరుశెనగ నూనె',
    category: 'cold-pressed-oils',
    tags: ['best-seller', 'traditional'],
    emoji: '🥜',
    tagline: 'Best for frying & everyday cooking',
    description: 'Cold pressed from farm-fresh Andhra groundnuts using the traditional wooden chekku. Rich, nutty aroma with a high smoke point.',
    longDescription: 'Our groundnut oil is extracted from premium quality groundnuts sourced from Kurnool district. The cold pressing process at below 45°C ensures all natural Vitamin E, Omega-6 fatty acids, and antioxidants are preserved intact.',
    variants: [
      { id: 'groundnut-500ml', label: '500ml', price: 180, stock: 50, sku: 'GNO-500' },
      { id: 'groundnut-1l', label: '1 Litre', price: 340, stock: 35, sku: 'GNO-1000' },
      { id: 'groundnut-2l', label: '2 Litres', price: 650, stock: 25, sku: 'GNO-2000' },
      { id: 'groundnut-5l', label: '5 Litres', price: 1550, stock: 15, sku: 'GNO-5000' }
    ],
    benefits: [
      { icon: '🔥', title: 'High Smoke Point', description: '230°C — ideal for deep frying' },
      { icon: '💊', title: 'Vitamin E Rich', description: 'Natural antioxidant protection' },
      { icon: '🫀', title: 'Heart Healthy', description: 'Balanced Omega-3 & Omega-6' },
      { icon: '🍳', title: 'Versatile Use', description: 'Frying, tempering, tadka' }
    ],
    nutrition: {
      calories: '884 kcal/100ml',
      fat: '100g',
      keyNutrients: ['Vitamin E', 'Omega-6', 'Resveratrol', 'No cholesterol']
    },
    ingredients: ['100% Cold Pressed Groundnut Oil'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('groundnut-oil'),
      alt: 'Golden groundnut oil in a glass bottle with groundnuts scattered around'
    },
    colors: {
      gradient: 'from-amber-50 to-yellow-100',
      accent: 'border-amber-300'
    },
    seo: {
      title: 'Cold Pressed Groundnut Oil | Wooden Chekku | BRR Natural',
      description: 'Premium cold pressed groundnut oil extracted using traditional wooden chekku. Rich in Vitamin E, perfect for frying.',
      keywords: ['groundnut oil', 'peanut oil', 'cold pressed oil', 'wooden chekku']
    },
    relatedProducts: ['sesame-oil', 'mustard-oil'],
    frequentlyBoughtTogether: ['chilli-powder', 'turmeric-powder'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'sesame-oil',
    slug: 'sesame-oil',
    name: 'Sesame Oil',
    telugu: 'నువ్వుల నూనె',
    category: 'cold-pressed-oils',
    tags: ['premium', 'traditional'],
    emoji: '🌱',
    tagline: 'Authentic Andhra taste & Ayurvedic grade',
    description: 'Stone-cold pressed from premium white sesame seeds. Deep, nutty aroma with golden colour.',
    longDescription: 'Our sesame oil is extracted from carefully selected white sesame seeds using the ancient wooden chekku process. Rich in sesamin and sesamolin — natural antioxidants unique to sesame.',
    variants: [
      { id: 'sesame-250ml', label: '250ml', price: 130, stock: 40, sku: 'SEO-250' },
      { id: 'sesame-500ml', label: '500ml', price: 240, stock: 30, sku: 'SEO-500' },
      { id: 'sesame-1l', label: '1 Litre', price: 460, stock: 20, sku: 'SEO-1000' }
    ],
    benefits: [
      { icon: '🦴', title: 'Rich in Calcium', description: 'Supports bone density' },
      { icon: '🧴', title: 'Skin & Hair', description: 'Traditional Ayurvedic use' },
      { icon: '🫀', title: 'Lignans', description: 'Unique sesame antioxidants' },
      { icon: '🍜', title: 'Tadka & Finishing', description: 'Authentic Andhra flavour' }
    ],
    nutrition: {
      calories: '884 kcal/100ml',
      fat: '100g',
      keyNutrients: ['Sesamin', 'Sesamolin', 'Vitamin E', 'Calcium', 'Magnesium']
    },
    ingredients: ['100% Cold Pressed Sesame Oil'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('sesame-oil'),
      alt: 'Dark golden sesame oil in a small bottle with sesame seeds'
    },
    colors: {
      gradient: 'from-amber-100 to-orange-100',
      accent: 'border-orange-300'
    },
    seo: {
      title: 'Cold Pressed Sesame Oil | Nuvvula Nune | BRR Natural',
      description: 'Premium cold pressed sesame oil with deep nutty aroma. Rich in calcium, perfect for tempering.',
      keywords: ['sesame oil', 'gingelly oil', 'nuvvula nune', 'cold pressed']
    },
    relatedProducts: ['groundnut-oil', 'coconut-oil'],
    frequentlyBoughtTogether: ['coriander-powder', 'cumin-powder'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mustard-oil',
    slug: 'mustard-oil',
    name: 'Mustard Oil',
    telugu: 'ఆవాలు నూనె',
    category: 'cold-pressed-oils',
    tags: ['best-seller', 'traditional'],
    emoji: '🌿',
    tagline: 'Pungent aroma & traditional cooking oil',
    description: 'Cold pressed from high-quality mustard seeds. Strong pungent aroma, perfect for pickling.',
    longDescription: 'Our mustard oil is extracted from premium mustard seeds using the traditional cold press method. Known for its strong pungent aroma and distinctive flavor.',
    variants: [
      { id: 'mustard-500ml', label: '500ml', price: 160, stock: 35, sku: 'MTO-500' },
      { id: 'mustard-1l', label: '1 Litre', price: 300, stock: 25, sku: 'MTO-1000' }
    ],
    benefits: [
      { icon: '🌡️', title: 'Warming Effect', description: 'Traditional Ayurvedic property' },
      { icon: '💪', title: 'Omega-3 Rich', description: 'Essential fatty acids' },
      { icon: '🥗', title: 'Flavor Enhancer', description: 'Distinctive pungent taste' },
      { icon: '🫙', title: 'Pickling Essential', description: 'Traditional preservation' }
    ],
    nutrition: {
      calories: '884 kcal/100ml',
      fat: '100g',
      keyNutrients: ['Omega-3', 'Omega-6', 'Vitamin E', 'Antioxidants']
    },
    ingredients: ['100% Cold Pressed Mustard Oil'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('mustard-oil'),
      alt: 'Golden yellow mustard oil in traditional bottle'
    },
    colors: {
      gradient: 'from-yellow-100 to-amber-100',
      accent: 'border-yellow-400'
    },
    seo: {
      title: 'Cold Pressed Mustard Oil | Aavalu Nune | BBR Natural',
      description: 'Premium cold pressed mustard oil with strong pungent aroma. Perfect for pickling.',
      keywords: ['mustard oil', 'aavalu nune', 'sarson ka tel', 'cold pressed']
    },
    relatedProducts: ['groundnut-oil', 'sesame-oil'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'coconut-oil',
    slug: 'coconut-oil',
    name: 'Coconut Oil',
    telugu: 'కొబ్బరి నూనె',
    category: 'cold-pressed-oils',
    tags: ['best-seller', 'premium', 'organic'],
    emoji: '🥥',
    tagline: 'Virgin coconut oil for cooking & hair care',
    description: 'Cold pressed from fresh coconut kernels. Aromatic, sweet flavor, and multiple uses.',
    longDescription: 'Our virgin coconut oil is extracted from fresh coconut milk using the traditional cold press method. Rich in lauric acid and medium-chain triglycerides.',
    variants: [
      { id: 'coconut-250ml', label: '250ml', price: 190, stock: 30, sku: 'CNO-250' },
      { id: 'coconut-500ml', label: '500ml', price: 350, stock: 25, sku: 'CNO-500' }
    ],
    benefits: [
      { icon: '💇', title: 'Hair Care', description: 'Promotes hair growth' },
      { icon: '🧴', title: 'Skin Care', description: 'Natural moisturizer' },
      { icon: '🍳', title: 'Cooking', description: 'High smoke point, sweet aroma' },
      { icon: '💪', title: 'Lauric Acid', description: 'Immune system support' }
    ],
    nutrition: {
      calories: '862 kcal/100ml',
      fat: '100g',
      keyNutrients: ['Lauric Acid', 'MCTs', 'Vitamin E', 'Antioxidants']
    },
    ingredients: ['100% Cold Pressed Virgin Coconut Oil'],
    shelfLife: '18 months',
    images: {
      main: getProductImage('coconut-oil'),
      alt: 'White coconut oil in glass jar with coconut'
    },
    colors: {
      gradient: 'from-white to-gray-100',
      accent: 'border-gray-300'
    },
    seo: {
      title: 'Virgin Coconut Oil | Kobbari Nune | BBR Natural',
      description: 'Premium cold pressed virgin coconut oil. Perfect for cooking, hair care, and skin care.',
      keywords: ['coconut oil', 'virgin coconut oil', 'kobbari nune', 'cold pressed']
    },
    relatedProducts: ['sesame-oil', 'groundnut-oil'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'sunflower-oil',
    slug: 'sunflower-oil',
    name: 'Sunflower Oil',
    telugu: 'సూర్యకాంత నూనె',
    category: 'cold-pressed-oils',
    tags: ['new', 'organic'],
    emoji: '🌻',
    tagline: 'Light flavor & high Vitamin E content',
    description: 'Cold pressed from sunflower seeds. Light, neutral flavor perfect for everyday cooking.',
    longDescription: 'Our sunflower oil is extracted from premium sunflower seeds using the cold press method. High in Vitamin E with a light, neutral flavor.',
    variants: [
      { id: 'sunflower-1l', label: '1 Litre', price: 280, stock: 30, sku: 'SNO-1000' },
      { id: 'sunflower-2l', label: '2 Litres', price: 530, stock: 20, sku: 'SNO-2000' }
    ],
    benefits: [
      { icon: '💊', title: 'Vitamin E Rich', description: 'Highest among cooking oils' },
      { icon: '🫀', title: 'Heart Healthy', description: 'Low saturated fat' },
      { icon: '🍳', title: 'Light Flavor', description: 'Doesn\'t overpower dishes' },
      { icon: '🌡️', title: 'High Smoke Point', description: 'Suitable for frying' }
    ],
    nutrition: {
      calories: '884 kcal/100ml',
      fat: '100g',
      keyNutrients: ['Vitamin E', 'Omega-6', 'Low Saturated Fat']
    },
    ingredients: ['100% Cold Pressed Sunflower Oil'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('sunflower-oil'),
      alt: 'Golden sunflower oil in bottle with sunflowers'
    },
    colors: {
      gradient: 'from-yellow-100 to-amber-50',
      accent: 'border-yellow-300'
    },
    seo: {
      title: 'Cold Pressed Sunflower Oil | Suryakanta Nune | BRR Natural',
      description: 'Premium cold pressed sunflower oil rich in Vitamin E. Light flavor perfect for everyday cooking.',
      keywords: ['sunflower oil', 'suryakanta nune', 'cold pressed', 'vitamin e']
    },
    relatedProducts: ['groundnut-oil', 'mustard-oil'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  }
];

// Due to length, I'll create a simplified version with key products
// Full implementation would include all 25+ products

const spicePowders: Product[] = [
  {
    id: 'chilli-powder',
    slug: 'chilli-powder',
    name: 'Chilli Powder',
    telugu: 'మిర్చి పొడి',
    category: 'spice-powders',
    tags: ['best-seller', 'traditional'],
    emoji: '🌶️',
    tagline: 'Guntur variety — pure heat, deep colour',
    description: 'Sun-dried Guntur red chillies, hand-cleaned and stone-ground fresh. Deep brick-red colour.',
    longDescription: 'Guntur district produces some of the world\'s finest chillies. Our chilli powder is made exclusively from Grade-A Guntur chillies.',
    variants: [
      { id: 'chilli-100g', label: '100g', price: 55, stock: 60, sku: 'CP-100' },
      { id: 'chilli-250g', label: '250g', price: 120, stock: 45, sku: 'CP-250' },
      { id: 'chilli-500g', label: '500g', price: 220, stock: 30, sku: 'CP-500' },
      { id: 'chilli-1kg', label: '1kg', price: 400, stock: 20, sku: 'CP-1000' }
    ],
    benefits: [
      { icon: '🎨', title: 'Natural Colour', description: 'No artificial dye added' },
      { icon: '🔥', title: 'Pure Capsaicin', description: 'Authentic Guntur heat' },
      { icon: '💊', title: 'Metabolism Boost', description: 'Natural capsaicin benefits' },
      { icon: '🍱', title: 'Andhra Cuisine', description: 'Authentic regional taste' }
    ],
    nutrition: {
      calories: '282 kcal/100g',
      keyNutrients: ['Natural capsaicin', 'Vitamin C', 'Vitamin A', 'No artificial colour']
    },
    ingredients: ['100% Guntur Chilli Powder'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('chilli-powder'),
      alt: 'Vibrant red chilli powder in wooden bowl'
    },
    colors: {
      gradient: 'from-red-50 to-orange-100',
      accent: 'border-red-300'
    },
    seo: {
      title: 'Guntur Chilli Powder | Mirchi Podi | BRR Natural',
      description: 'Premium Guntur chilli powder with deep red colour and authentic heat. Sun-dried, stone-ground.',
      keywords: ['chilli powder', 'guntur chilli', 'mirchi podi', 'red chilli']
    },
    relatedProducts: ['turmeric-powder', 'garam-masala'],
    frequentlyBoughtTogether: ['turmeric-powder', 'groundnut-oil'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    telugu: 'పసుపు పొడి',
    category: 'spice-powders',
    tags: ['best-seller', 'organic'],
    emoji: '🟡',
    tagline: 'Nizamabad variety — high curcumin, vibrant gold',
    description: 'Naturally dried Nizamabad turmeric rhizomes, freshly stone-ground. Brilliant golden colour.',
    longDescription: 'Nizamabad in Telangana is renowned for producing turmeric with the highest curcumin content in India — often 5-7%.',
    variants: [
      { id: 'turmeric-100g', label: '100g', price: 45, stock: 55, sku: 'TP-100' },
      { id: 'turmeric-250g', label: '250g', price: 90, stock: 40, sku: 'TP-250' },
      { id: 'turmeric-500g', label: '500g', price: 165, stock: 30, sku: 'TP-500' },
      { id: 'turmeric-1kg', label: '1kg', price: 300, stock: 20, sku: 'TP-1000' }
    ],
    benefits: [
      { icon: '✨', title: 'High Curcumin', description: '5-7% curcumin content' },
      { icon: '🛡️', title: 'Anti-Inflammatory', description: 'Proven Ayurvedic benefits' },
      { icon: '🎨', title: 'Vibrant Colour', description: 'Natural golden hue' },
      { icon: '🍲', title: 'Authentic Taste', description: 'Earthy, warm aroma' }
    ],
    nutrition: {
      calories: '354 kcal/100g',
      keyNutrients: ['5-7% curcumin', 'Natural essential oils', 'Iron', 'Manganese']
    },
    ingredients: ['100% Nizamabad Turmeric Powder'],
    shelfLife: '10 months',
    images: {
      main: getProductImage('turmeric-powder'),
      alt: 'Bright yellow turmeric powder in wooden spoon'
    },
    colors: {
      gradient: 'from-yellow-50 to-amber-100',
      accent: 'border-yellow-300'
    },
    seo: {
      title: 'Nizamabad Turmeric Powder | Pasupu Podi | BRR Natural',
      description: 'Premium Nizamabad turmeric powder with 5-7% curcumin content. Vibrant golden colour.',
      keywords: ['turmeric powder', 'pasupu podi', 'nizamabad turmeric', 'curcumin']
    },
    relatedProducts: ['chilli-powder', 'coriander-powder'],
    frequentlyBoughtTogether: ['chilli-powder', 'groundnut-oil'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'coriander-powder',
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    telugu: 'ధనియాల పొడి',
    category: 'spice-powders',
    tags: ['traditional', 'organic'],
    emoji: '🌿',
    tagline: 'Fresh ground — aromatic & citrusy',
    description: 'Premium coriander seeds, freshly ground to preserve essential oils. Aromatic and citrusy.',
    longDescription: 'Our coriander powder is made from carefully selected coriander seeds, ground fresh to preserve the natural oils and aroma.',
    variants: [
      { id: 'coriander-100g', label: '100g', price: 40, stock: 50, sku: 'COR-100' },
      { id: 'coriander-250g', label: '250g', price: 85, stock: 35, sku: 'COR-250' },
      { id: 'coriander-500g', label: '500g', price: 150, stock: 25, sku: 'COR-500' }
    ],
    benefits: [
      { icon: '🌿', title: 'Fresh Aroma', description: 'Ground to order' },
      { icon: '💊', title: 'Digestive', description: 'Aids digestion' },
      { icon: '🍃', title: 'Pure', description: 'No additives' },
      { icon: '✨', title: 'Citrusy Notes', description: 'Natural flavor profile' }
    ],
    nutrition: {
      calories: '298 kcal/100g',
      keyNutrients: ['Dietary fiber', 'Iron', 'Magnesium', 'Vitamin C']
    },
    ingredients: ['100% Coriander Powder'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('coriander-powder'),
      alt: 'Greenish-brown coriander powder in wooden bowl'
    },
    colors: {
      gradient: 'from-green-50 to-lime-100',
      accent: 'border-green-300'
    },
    seo: {
      title: 'Coriander Powder | Dhaniyalu Podi | BRR Natural',
      description: 'Premium coriander powder with fresh aroma and citrusy notes. Ground fresh.',
      keywords: ['coriander powder', 'dhaniya powder', 'dhaniyalu podi', 'spice powder']
    },
    relatedProducts: ['cumin-powder', 'turmeric-powder'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'cumin-powder',
    slug: 'cumin-powder',
    name: 'Cumin Powder',
    telugu: 'జీలకర్ర పొడి',
    category: 'spice-powders',
    tags: ['traditional', 'organic'],
    emoji: '🌾',
    tagline: 'Earthy aroma — essential for tempering',
    description: 'Premium cumin seeds, stone-ground for authentic flavor. Earthy, warm aroma.',
    longDescription: 'Our cumin powder is made from high-quality cumin seeds, ground using traditional stone methods to preserve the essential oils.',
    variants: [
      { id: 'cumin-100g', label: '100g', price: 50, stock: 45, sku: 'CUM-100' },
      { id: 'cumin-250g', label: '250g', price: 100, stock: 30, sku: 'CUM-250' },
      { id: 'cumin-500g', label: '500g', price: 180, stock: 20, sku: 'CUM-500' }
    ],
    benefits: [
      { icon: '🌾', title: 'Earthy Aroma', description: 'Authentic flavor' },
      { icon: '💊', title: 'Digestive', description: 'Traditional remedy' },
      { icon: '🍃', title: 'Pure', description: 'No additives' },
      { icon: '🔥', title: 'Tadka Essential', description: 'Perfect for tempering' }
    ],
    nutrition: {
      calories: '375 kcal/100g',
      keyNutrients: ['Iron', 'Manganese', 'Calcium', 'Dietary fiber']
    },
    ingredients: ['100% Cumin Powder'],
    shelfLife: '10 months',
    images: {
      main: getProductImage('cumin-powder'),
      alt: 'Brown cumin powder in wooden bowl'
    },
    colors: {
      gradient: 'from-amber-50 to-yellow-100',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'Cumin Powder | Jeelakarra Podi | BRR Natural',
      description: 'Premium cumin powder with earthy aroma. Essential for tempering and cooking.',
      keywords: ['cumin powder', 'jeera powder', 'jeelakarra podi', 'spice powder']
    },
    relatedProducts: ['coriander-powder', 'chilli-powder'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

// Add placeholder products for remaining categories
const traditionalPowders: Product[] = [
  {
    id: 'sambar-powder',
    slug: 'sambar-powder',
    name: 'Sambar Powder',
    telugu: 'సాంబార్ పొడి',
    category: 'traditional-powders',
    tags: ['best-seller', 'traditional'],
    emoji: '🥘',
    tagline: 'Authentic Andhra style — perfect aroma',
    description: 'Traditional Andhra sambar powder with roasted lentils and spices. Authentic flavor.',
    longDescription: 'Our sambar powder is made using the traditional Andhra recipe with roasted toor dal, chana dal, urad dal, and spices.',
    variants: [
      { id: 'sambar-200g', label: '200g', price: 85, stock: 40, sku: 'SP-200' },
      { id: 'sambar-500g', label: '500g', price: 190, stock: 30, sku: 'SP-500' }
    ],
    benefits: [
      { icon: '🥘', title: 'Authentic Taste', description: 'Traditional Andhra recipe' },
      { icon: '🌿', title: 'No Preservatives', description: 'Pure ingredients' },
      { icon: '🍲', title: 'Easy to Use', description: 'Perfect sambar every time' },
      { icon: '✨', title: 'Fresh Roasted', description: 'Maximum aroma' }
    ],
    nutrition: {
      calories: '345 kcal/100g',
      keyNutrients: ['Protein from lentils', 'Dietary fiber', 'Spices']
    },
    ingredients: ['Toor Dal', 'Chana Dal', 'Urad Dal', 'Coriander Seeds', 'Cumin', 'Red Chillies', 'Turmeric', 'Fenugreek'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('sambar-powder'),
      alt: 'Aromatic sambar powder in wooden bowl'
    },
    colors: {
      gradient: 'from-orange-50 to-amber-100',
      accent: 'border-orange-300'
    },
    seo: {
      title: 'Sambar Powder | Andhra Style | BRR Natural',
      description: 'Traditional Andhra sambar powder with roasted lentils and spices. Authentic flavor.',
      keywords: ['sambar powder', 'andhra sambar', 'traditional powder']
    },
    relatedProducts: ['rasam-powder', 'idli-podi'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'rasam-powder',
    slug: 'rasam-powder',
    name: 'Rasam Powder',
    telugu: 'రసం పొడి',
    category: 'traditional-powders',
    tags: ['traditional', 'organic'],
    emoji: '🍲',
    tagline: 'Tangy & aromatic — perfect rasam',
    description: 'Traditional rasam powder with pepper, cumin, and spices. Tangy and flavorful.',
    longDescription: 'Our rasam powder is made with traditional ingredients like pepper, cumin, coriander, and curry leaves for authentic flavor.',
    variants: [
      { id: 'rasam-100g', label: '100g', price: 60, stock: 45, sku: 'RP-100' },
      { id: 'rasam-200g', label: '200g', price: 110, stock: 35, sku: 'RP-200' }
    ],
    benefits: [
      { icon: '🍲', title: 'Tangy Flavor', description: 'Perfect balance' },
      { icon: '💊', title: 'Digestive', description: 'Aids digestion' },
      { icon: '🌿', title: 'No Preservatives', description: 'Pure ingredients' },
      { icon: '✨', title: 'Aromatic', description: 'Fresh ground' }
    ],
    nutrition: {
      calories: '355 kcal/100g',
      keyNutrients: ['Pepper', 'Cumin', 'Coriander', 'Curry leaves']
    },
    ingredients: ['Black Pepper', 'Cumin', 'Coriander Seeds', 'Curry Leaves', 'Red Chillies', 'Turmeric'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('rasam-powder'),
      alt: 'Aromatic rasam powder with spices'
    },
    colors: {
      gradient: 'from-yellow-50 to-orange-100',
      accent: 'border-orange-400'
    },
    seo: {
      title: 'Rasam Powder | Charu Podi | BRR Natural',
      description: 'Traditional rasam powder with pepper and spices. Tangy and aromatic.',
      keywords: ['rasam powder', 'charu podi', 'traditional powder', 'pepper powder']
    },
    relatedProducts: ['sambar-powder', 'peanut-chutney-powder'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'peanut-chutney-powder',
    slug: 'peanut-chutney-powder',
    name: 'Peanut Chutney Powder',
    telugu: 'పల్లెల చట్నీ పొడి',
    category: 'traditional-powders',
    tags: ['traditional', 'best-seller'],
    emoji: '🥜',
    tagline: 'Andhra breakfast essential — nutty & spicy',
    description: 'Roasted peanut chutney powder with spices. Perfect for idli, dosa, and rice.',
    longDescription: 'Our peanut chutney powder is made with roasted peanuts, garlic, chillies, and traditional spices for authentic Andhra flavor.',
    variants: [
      { id: 'chutney-200g', label: '200g', price: 95, stock: 40, sku: 'PCP-200' },
      { id: 'chutney-500g', label: '500g', price: 210, stock: 30, sku: 'PCP-500' }
    ],
    benefits: [
      { icon: '🥜', title: 'Nutty Flavor', description: 'Roasted peanuts' },
      { icon: '🌶️', title: 'Spicy', description: 'Balanced heat' },
      { icon: '🌿', title: 'No Preservatives', description: 'Pure ingredients' },
      { icon: '✨', title: 'Versatile', description: 'Idli, dosa, rice' }
    ],
    nutrition: {
      calories: '567 kcal/100g',
      keyNutrients: ['Protein', 'Healthy fats', 'Fiber', 'Spices']
    },
    ingredients: ['Roasted Peanuts', 'Garlic', 'Red Chillies', 'Cumin', 'Curry Leaves', 'Salt'],
    shelfLife: '6 months',
    images: {
      main: getProductImage('peanut-chutney-powder'),
      alt: 'Nutty peanut chutney powder in bowl'
    },
    colors: {
      gradient: 'from-amber-50 to-orange-100',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'Peanut Chutney Powder | Pallelu Chutney Podi | BRR Natural',
      description: 'Traditional Andhra peanut chutney powder. Nutty, spicy, perfect for breakfast.',
      keywords: ['peanut chutney powder', 'pallelu chutney podi', 'idli podi', 'breakfast powder']
    },
    relatedProducts: ['sambar-powder', 'rasam-powder'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  }
];

const pantryStaples: Product[] = [
  {
    id: 'jaggery-powder',
    slug: 'jaggery-powder',
    name: 'Jaggery Powder',
    telugu: 'బెల్లం పొడి',
    category: 'pantry-staples',
    tags: ['best-seller', 'organic', 'traditional'],
    emoji: '🍯',
    tagline: 'Natural sweetener — rich in iron',
    description: 'Pure sugarcane jaggery powder. Natural sweetener rich in iron and minerals.',
    longDescription: 'Our jaggery powder is made from pure sugarcane juice without any chemicals. Rich in iron, magnesium, and potassium.',
    variants: [
      { id: 'jaggery-500g', label: '500g', price: 75, stock: 40, sku: 'JP-500' },
      { id: 'jaggery-1kg', label: '1kg', price: 140, stock: 30, sku: 'JP-1000' }
    ],
    benefits: [
      { icon: '🍯', title: 'Natural Sweetener', description: 'No chemicals' },
      { icon: '💪', title: 'Iron Rich', description: 'Good for anemia' },
      { icon: '🌿', title: 'Minerals', description: 'Magnesium, potassium' },
      { icon: '✨', title: 'Pure', description: 'No additives' }
    ],
    nutrition: {
      calories: '383 kcal/100g',
      keyNutrients: ['Iron', 'Magnesium', 'Potassium', 'Calcium']
    },
    ingredients: ['100% Sugarcane Jaggery'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('jaggery-powder'),
      alt: 'Golden brown jaggery powder in wooden bowl'
    },
    colors: {
      gradient: 'from-amber-100 to-orange-100',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'Jaggery Powder | Bellam Podi | BRR Natural',
      description: 'Pure sugarcane jaggery powder. Natural sweetener rich in iron and minerals.',
      keywords: ['jaggery powder', 'bellam', 'natural sweetener', 'organic jaggery']
    },
    relatedProducts: ['turmeric-powder', 'besan'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 'besan',
    slug: 'besan',
    name: 'Besan (Gram Flour)',
    telugu: 'సెనగల పిండి',
    category: 'pantry-staples',
    tags: ['traditional', 'organic'],
    emoji: '🟡',
    tagline: 'Premium quality — perfect for pakoras & sweets',
    description: 'Stone-ground chickpea flour. Perfect for pakoras, sweets, and traditional dishes.',
    longDescription: 'Our besan is made from premium quality chickpeas, stone-ground to preserve nutrition and flavor.',
    variants: [
      { id: 'besan-500g', label: '500g', price: 60, stock: 50, sku: 'BES-500' },
      { id: 'besan-1kg', label: '1kg', price: 110, stock: 35, sku: 'BES-1000' }
    ],
    benefits: [
      { icon: '🟡', title: 'High Protein', description: 'Rich in protein' },
      { icon: '💪', title: 'Gluten Free', description: 'Naturally gluten-free' },
      { icon: '🌿', title: 'Pure', description: 'No additives' },
      { icon: '✨', title: 'Fine Texture', description: 'Stone-ground' }
    ],
    nutrition: {
      calories: '387 kcal/100g',
      keyNutrients: ['Protein', 'Fiber', 'Iron', 'Magnesium']
    },
    ingredients: ['100% Chickpea Flour'],
    shelfLife: '10 months',
    images: {
      main: getProductImage('besan'),
      alt: 'Golden yellow besan flour in bowl'
    },
    colors: {
      gradient: 'from-yellow-50 to-amber-100',
      accent: 'border-yellow-400'
    },
    seo: {
      title: 'Besan | Senagala Pindi | BRR Natural',
      description: 'Premium stone-ground chickpea flour. Perfect for pakoras and sweets.',
      keywords: ['besan', 'gram flour', 'senagala pindi', 'chickpea flour']
    },
    relatedProducts: ['jaggery-powder', 'rice-flour'],
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: 'rice-flour',
    slug: 'rice-flour',
    name: 'Rice Flour',
    telugu: 'బియ్య్యల పిండి',
    category: 'pantry-staples',
    tags: ['traditional', 'organic'],
    emoji: '🍚',
    tagline: 'Fine ground — perfect for dosa & snacks',
    description: 'Premium rice flour, finely ground for dosa, idli, and traditional snacks.',
    longDescription: 'Our rice flour is made from premium quality rice, finely ground for perfect texture in dosa, idli, and snacks.',
    variants: [
      { id: 'rice-500g', label: '500g', price: 50, stock: 45, sku: 'RF-500' },
      { id: 'rice-1kg', label: '1kg', price: 90, stock: 30, sku: 'RF-1000' }
    ],
    benefits: [
      { icon: '🍚', title: 'Fine Texture', description: 'Perfect consistency' },
      { icon: '💪', title: 'Gluten Free', description: 'Naturally gluten-free' },
      { icon: '🌿', title: 'Pure', description: 'No additives' },
      { icon: '✨', title: 'Versatile', description: 'Dosa, idli, snacks' }
    ],
    nutrition: {
      calories: '366 kcal/100g',
      keyNutrients: ['Carbohydrates', 'Protein', 'Iron', 'B vitamins']
    },
    ingredients: ['100% Rice Flour'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('rice-flour'),
      alt: 'White rice flour in wooden bowl'
    },
    colors: {
      gradient: 'from-gray-50 to-slate-100',
      accent: 'border-gray-300'
    },
    seo: {
      title: 'Rice Flour | Biyyalu Pindi | BRR Natural',
      description: 'Premium rice flour for dosa, idli, and traditional snacks. Fine texture.',
      keywords: ['rice flour', 'biyyalu pindi', 'idli rice flour', 'dosa flour']
    },
    relatedProducts: ['besan', 'jaggery-powder'],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  }
];

const premiumProducts: Product[] = [
  {
    id: 'a2-ghee',
    slug: 'a2-ghee',
    name: 'A2 Desi Ghee',
    telugu: 'ఏ2 దేశీ నెయ్యి',
    category: 'premium-products',
    tags: ['premium', 'best-seller', 'organic'],
    emoji: '🧈',
    tagline: 'Grass-fed cows — pure & aromatic',
    description: 'Pure A2 ghee from grass-fed desi cows. Traditional bilona method, rich aroma.',
    longDescription: 'Our A2 ghee is made from milk of grass-fed desi cows using the traditional bilona method. Rich in A2 beta-casein.',
    variants: [
      { id: 'ghee-250ml', label: '250ml', price: 350, stock: 25, sku: 'A2G-250' },
      { id: 'ghee-500ml', label: '500ml', price: 680, stock: 20, sku: 'A2G-500' },
      { id: 'ghee-1l', label: '1 Litre', price: 1300, stock: 15, sku: 'A2G-1000' }
    ],
    benefits: [
      { icon: '🐄', title: 'A2 Protein', description: 'Grass-fed desi cows' },
      { icon: '🧈', title: 'Traditional Method', description: 'Bilona process' },
      { icon: '🌿', title: 'Pure', description: 'No additives' },
      { icon: '✨', title: 'Aromatic', description: 'Rich nutty aroma' }
    ],
    nutrition: {
      calories: '900 kcal/100ml',
      fat: '100g',
      keyNutrients: ['A2 Beta-casein', 'Vitamin A', 'Vitamin D', 'Omega-3']
    },
    ingredients: ['100% A2 Desi Cow Ghee'],
    shelfLife: '18 months',
    images: {
      main: getProductImage('a2-ghee'),
      alt: 'Golden A2 ghee in traditional brass pot'
    },
    colors: {
      gradient: 'from-amber-100 to-yellow-200',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'A2 Desi Ghee | Pure Bilona Ghee | BRR Natural',
      description: 'Pure A2 ghee from grass-fed desi cows. Traditional bilona method, rich aroma.',
      keywords: ['a2 ghee', 'desi ghee', 'bilona ghee', 'cow ghee']
    },
    relatedProducts: ['groundnut-oil', 'coconut-oil'],
    frequentlyBoughtTogether: ['turmeric-powder', 'jaggery-powder'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];

// Homemade Pickles
const homemadePickles: Product[] = [
  {
    id: 'mango-pickle',
    slug: 'mango-pickle',
    name: 'Mango Pickle',
    telugu: 'మామిడి అవకాయ',
    category: 'homemade-pickles',
    tags: ['best-seller', 'traditional', 'organic'],
    emoji: '🥭',
    tagline: 'Traditional Andhra avakaya — spicy & tangy',
    description: 'Homemade Andhra-style mango pickle with raw mangoes, mustard oil, and traditional spices.',
    longDescription: 'Our authentic Andhra avakaya is made from raw mangoes sourced from Nellore district. Sun-dried and hand-mixed with cold-pressed mustard oil and traditional spices.',
    variants: [
      { id: 'mango-250g', label: '250g', price: 120, stock: 40, sku: 'MP-250' },
      { id: 'mango-500g', label: '500g', price: 220, stock: 30, sku: 'MP-500' },
      { id: 'mango-1kg', label: '1kg', price: 400, stock: 20, sku: 'MP-1000' }
    ],
    benefits: [
      { icon: '🥭', title: 'Raw Mangoes', description: 'Fresh Nellore mangoes' },
      { icon: '🌿', title: 'No Preservatives', description: 'Traditional method' },
      { icon: '🌶️', title: 'Authentic Spice', description: 'Andhra recipe' },
      { icon: '✨', title: 'Sun-Dried', description: 'Natural process' }
    ],
    nutrition: {
      calories: '180 kcal/100g',
      keyNutrients: ['Vitamin C', 'Dietary fiber', 'Natural probiotics']
    },
    ingredients: ['Raw Mangoes', 'Mustard Oil', 'Fenugreek', 'Mustard Seeds', 'Red Chilli Powder', 'Turmeric', 'Salt'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('mango-pickle'),
      alt: 'Traditional Andhra mango pickle in ceramic jar'
    },
    colors: {
      gradient: 'from-yellow-100 to-orange-100',
      accent: 'border-orange-400'
    },
    seo: {
      title: 'Andhra Mango Pickle | Avakaya | BRR Natural',
      description: 'Traditional Andhra-style mango pickle with raw mangoes and mustard oil. Spicy and tangy.',
      keywords: ['mango pickle', 'avakaya', 'andhra pickle', 'homemade pickle']
    },
    relatedProducts: ['gongura-pickle', 'lemon-pickle'],
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: 'gongura-pickle',
    slug: 'gongura-pickle',
    name: 'Gongura Pickle',
    telugu: 'గోంగూర అవకాయ',
    category: 'homemade-pickles',
    tags: ['traditional', 'best-seller'],
    emoji: '🍃',
    tagline: 'Telangana specialty — tangy sorrel leaves',
    description: 'Traditional Telangana gongura pickle with fresh sorrel leaves and spices.',
    longDescription: 'Our gongura pickle is made from fresh sorrel leaves (gongura) sourced from Telangana. The leaves are sun-dried and mixed with traditional spices for authentic flavor.',
    variants: [
      { id: 'gongura-250g', label: '250g', price: 130, stock: 35, sku: 'GP-250' },
      { id: 'gongura-500g', label: '500g', price: 240, stock: 25, sku: 'GP-500' }
    ],
    benefits: [
      { icon: '🍃', title: 'Fresh Gongura', description: 'Telangana sorrel leaves' },
      { icon: '💊', title: 'Iron Rich', description: 'Natural iron source' },
      { icon: '🌿', title: 'No Preservatives', description: 'Traditional method' },
      { icon: '✨', title: 'Tangy Flavor', description: 'Authentic taste' }
    ],
    nutrition: {
      calories: '150 kcal/100g',
      keyNutrients: ['Iron', 'Vitamin C', 'Folic acid', 'Antioxidants']
    },
    ingredients: ['Fresh Gongura Leaves', 'Mustard Seeds', 'Fenugreek', 'Red Chilli Powder', 'Garlic', 'Salt'],
    shelfLife: '10 months',
    images: {
      main: getProductImage('gongura-pickle'),
      alt: 'Red gongura pickle in glass jar'
    },
    colors: {
      gradient: 'from-red-100 to-pink-100',
      accent: 'border-red-400'
    },
    seo: {
      title: 'Gongura Pickle | Telangana Specialty | BRR Natural',
      description: 'Traditional Telangana gongura pickle with fresh sorrel leaves. Tangy and nutritious.',
      keywords: ['gongura pickle', 'sorrel leaves pickle', 'telangana pickle', 'homemade']
    },
    relatedProducts: ['mango-pickle', 'tomato-pickle'],
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },
  {
    id: 'lemon-pickle',
    slug: 'lemon-pickle',
    name: 'Lemon Pickle',
    telugu: 'నిమ్మకాయ అవకాయ',
    category: 'homemade-pickles',
    tags: ['traditional', 'organic'],
    emoji: '🍋',
    tagline: 'Zesty & tangy — digestive aid',
    description: 'Homemade lemon pickle with fresh lemons, salt, and traditional spices.',
    longDescription: 'Our lemon pickle is made from fresh lemons that are salted and sun-dried for weeks to develop flavor. Mixed with traditional spices for authentic taste.',
    variants: [
      { id: 'lemon-250g', label: '250g', price: 110, stock: 45, sku: 'LP-250' },
      { id: 'lemon-500g', label: '500g', price: 200, stock: 35, sku: 'LP-500' }
    ],
    benefits: [
      { icon: '🍋', title: 'Fresh Lemons', description: 'Hand-picked lemons' },
      { icon: '💊', title: 'Digestive', description: 'Aids digestion' },
      { icon: '🌿', title: 'No Preservatives', description: 'Traditional method' },
      { icon: '✨', title: 'Zesty Flavor', description: 'Natural citrus taste' }
    ],
    nutrition: {
      calories: '160 kcal/100g',
      keyNutrients: ['Vitamin C', 'Citric acid', 'Antioxidants']
    },
    ingredients: ['Fresh Lemons', 'Salt', 'Red Chilli Powder', 'Turmeric', 'Mustard Seeds', 'Asafoetida'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('lemon-pickle'),
      alt: 'Yellow lemon pickle in glass jar'
    },
    colors: {
      gradient: 'from-yellow-100 to-lime-100',
      accent: 'border-yellow-400'
    },
    seo: {
      title: 'Lemon Pickle | Nimakaya Avakaya | BRR Natural',
      description: 'Homemade lemon pickle with fresh lemons and traditional spices. Zesty and digestive.',
      keywords: ['lemon pickle', 'nimakaya', 'citrus pickle', 'homemade pickle']
    },
    relatedProducts: ['mango-pickle', 'tomato-pickle'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'tomato-pickle',
    slug: 'tomato-pickle',
    name: 'Tomato Pickle',
    telugu: 'టమాటో అవకాయ',
    category: 'homemade-pickles',
    tags: ['traditional', 'new'],
    emoji: '🍅',
    tagline: 'Tangy tomato — unique Andhra flavor',
    description: 'Traditional Andhra tomato pickle with ripe tomatoes and aromatic spices.',
    longDescription: 'Our tomato pickle is made from ripe tomatoes sourced from local farms. Sun-dried and mixed with traditional Andhra spices for unique flavor.',
    variants: [
      { id: 'tomato-250g', label: '250g', price: 100, stock: 40, sku: 'TP-250' },
      { id: 'tomato-500g', label: '500g', price: 180, stock: 30, sku: 'TP-500' }
    ],
    benefits: [
      { icon: '🍅', title: 'Ripe Tomatoes', description: 'Fresh local tomatoes' },
      { icon: '💊', title: 'Lycopene Rich', description: 'Natural antioxidant' },
      { icon: '🌿', title: 'No Preservatives', description: 'Traditional method' },
      { icon: '✨', title: 'Unique Flavor', description: 'Andhra specialty' }
    ],
    nutrition: {
      calories: '140 kcal/100g',
      keyNutrients: ['Lycopene', 'Vitamin C', 'Vitamin A']
    },
    ingredients: ['Ripe Tomatoes', 'Mustard Seeds', 'Fenugreek', 'Red Chilli Powder', 'Garlic', 'Salt'],
    shelfLife: '8 months',
    images: {
      main: getProductImage('tomato-pickle'),
      alt: 'Red tomato pickle in glass jar'
    },
    colors: {
      gradient: 'from-red-100 to-orange-100',
      accent: 'border-red-300'
    },
    seo: {
      title: 'Tomato Pickle | Andhra Style | BRR Natural',
      description: 'Traditional Andhra tomato pickle with ripe tomatoes and spices. Tangy and unique.',
      keywords: ['tomato pickle', 'andhra pickle', 'homemade pickle', 'vegetable pickle']
    },
    relatedProducts: ['mango-pickle', 'gongura-pickle'],
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  }
];

// Traditional Food Products
const traditionalFoods: Product[] = [
  {
    id: 'murukulu',
    slug: 'murukulu',
    name: 'Murukulu',
    telugu: 'మురుకులు',
    category: 'traditional-foods',
    tags: ['best-seller', 'traditional'],
    emoji: '🥨',
    tagline: 'Crispy Andhra snack — perfect with tea',
    description: 'Traditional Andhra murukulu made with rice flour and spices. Crispy and flavorful.',
    longDescription: 'Our murukulu is made using the traditional Andhra recipe with rice flour, gram flour, and authentic spices. Hand-pressed and deep-fried for perfect crispiness.',
    variants: [
      { id: 'murukulu-250g', label: '250g', price: 85, stock: 50, sku: 'MRK-250' },
      { id: 'murukulu-500g', label: '500g', price: 160, stock: 40, sku: 'MRK-500' }
    ],
    benefits: [
      { icon: '🥨', title: 'Handmade', description: 'Traditional pressing' },
      { icon: '🌾', title: 'Rice Flour', description: 'Premium quality' },
      { icon: '✨', title: 'Crispy', description: 'Perfect texture' },
      { icon: '🌿', title: 'No Preservatives', description: 'Fresh made' }
    ],
    nutrition: {
      calories: '450 kcal/100g',
      keyNutrients: ['Carbohydrates', 'Protein', 'Fiber']
    },
    ingredients: ['Rice Flour', 'Gram Flour', 'Cumin Seeds', 'Sesame Seeds', 'Butter', 'Salt'],
    shelfLife: '3 months',
    images: {
      main: getProductImage('murukulu'),
      alt: 'Crispy murukulu spiral snacks'
    },
    colors: {
      gradient: 'from-amber-100 to-yellow-100',
      accent: 'border-amber-300'
    },
    seo: {
      title: 'Murukulu | Andhra Snack | BRR Natural',
      description: 'Traditional Andhra murukulu made with rice flour and spices. Crispy and flavorful.',
      keywords: ['murukulu', 'andhra snacks', 'traditional snacks', 'rice flour snacks']
    },
    relatedProducts: ['sakinalu', 'gyaralu'],
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: 'sakinalu',
    slug: 'sakinalu',
    name: 'Sakinalu',
    telugu: 'సకినాలు',
    category: 'traditional-foods',
    tags: ['traditional', 'premium'],
    emoji: '🥐',
    tagline: 'Telangana festival special — buttery',
    description: 'Traditional Telangana sakinalu made with rice flour and generous butter.',
    longDescription: 'Our sakinalu is a Telangana festival specialty made with rice flour and generous amounts of butter. Pressed into traditional shapes and fried to golden perfection.',
    variants: [
      { id: 'sakinalu-250g', label: '250g', price: 95, stock: 40, sku: 'SKN-250' },
      { id: 'sakinalu-500g', label: '500g', price: 180, stock: 30, sku: 'SKN-500' }
    ],
    benefits: [
      { icon: '🥐', title: 'Festival Special', description: 'Telangana tradition' },
      { icon: '🧈', title: 'Buttery', description: 'Generous butter' },
      { icon: '✨', title: 'Handmade', description: 'Traditional shapes' },
      { icon: '🌿', title: 'No Preservatives', description: 'Fresh made' }
    ],
    nutrition: {
      calories: '520 kcal/100g',
      keyNutrients: ['Carbohydrates', 'Healthy fats', 'Protein']
    },
    ingredients: ['Rice Flour', 'Butter', 'Cumin Seeds', 'Sesame Seeds', 'Salt'],
    shelfLife: '2 months',
    images: {
      main: getProductImage('sakinalu'),
      alt: 'Buttery sakinalu snacks'
    },
    colors: {
      gradient: 'from-yellow-100 to-amber-100',
      accent: 'border-yellow-400'
    },
    seo: {
      title: 'Sakinalu | Telangana Festival Snack | BRR Natural',
      description: 'Traditional Telangana sakinalu made with rice flour and butter. Buttery and delicious.',
      keywords: ['sakinalu', 'telangana snacks', 'festival snacks', 'butter snacks']
    },
    relatedProducts: ['murukulu', 'gyaralu'],
    createdAt: new Date('2024-03-25'),
    updatedAt: new Date('2024-03-25')
  },
  {
    id: 'gyaralu',
    slug: 'gyaralu',
    name: 'Gyaralu',
    telugu: 'గ్యారాలు',
    category: 'traditional-foods',
    tags: ['traditional', 'new'],
    emoji: '🍪',
    tagline: 'Light & crispy — rice flour rings',
    description: 'Traditional Andhra gyaralu made with rice flour. Light, crispy rings.',
    longDescription: 'Our gyaralu are light and crispy rice flour rings made using traditional Andhra methods. Perfect for snacking or with tea.',
    variants: [
      { id: 'gyaralu-250g', label: '250g', price: 80, stock: 45, sku: 'GYR-250' },
      { id: 'gyaralu-500g', label: '500g', price: 150, stock: 35, sku: 'GYR-500' }
    ],
    benefits: [
      { icon: '🍪', title: 'Light & Crispy', description: 'Perfect texture' },
      { icon: '🌾', title: 'Rice Flour', description: 'Premium quality' },
      { icon: '✨', title: 'Handmade', description: 'Traditional rings' },
      { icon: '🌿', title: 'No Preservatives', description: 'Fresh made' }
    ],
    nutrition: {
      calories: '420 kcal/100g',
      keyNutrients: ['Carbohydrates', 'Protein', 'Fiber']
    },
    ingredients: ['Rice Flour', 'Gram Flour', 'Cumin Seeds', 'Butter', 'Salt'],
    shelfLife: '3 months',
    images: {
      main: getProductImage('gyaralu'),
      alt: 'Crispy gyaralu ring snacks'
    },
    colors: {
      gradient: 'from-amber-50 to-yellow-100',
      accent: 'border-amber-300'
    },
    seo: {
      title: 'Gyaralu | Andhra Rice Snack | BRR Natural',
      description: 'Traditional Andhra gyaralu made with rice flour. Light, crispy rings perfect for snacking.',
      keywords: ['gyaralu', 'andhra snacks', 'rice snacks', 'traditional snacks']
    },
    relatedProducts: ['murukulu', 'sakinalu'],
    createdAt: new Date('2024-03-30'),
    updatedAt: new Date('2024-03-30')
  },
  {
    id: 'sathu-pindi',
    slug: 'sathu-pindi',
    name: 'Sathu Pindi',
    telugu: 'సాతు పిండి',
    category: 'traditional-foods',
    tags: ['traditional', 'best-seller'],
    emoji: '🌾',
    tagline: 'Telangana special — protein-rich flour',
    description: 'Traditional Telangana sathu pindi made with roasted gram and rice flour.',
    longDescription: 'Our sathu pindi is a Telangana specialty made with roasted gram flour, rice flour, and traditional spices. Protein-rich and nutritious.',
    variants: [
      { id: 'sathu-500g', label: '500g', price: 90, stock: 40, sku: 'STH-500' },
      { id: 'sathu-1kg', label: '1kg', price: 170, stock: 30, sku: 'STH-1000' }
    ],
    benefits: [
      { icon: '💪', title: 'Protein Rich', description: 'High protein content' },
      { icon: '🌾', title: 'Roasted Gram', description: 'Premium quality' },
      { icon: '✨', title: 'Nutritious', description: 'Traditional recipe' },
      { icon: '🌿', title: 'No Preservatives', description: 'Pure ingredients' }
    ],
    nutrition: {
      calories: '380 kcal/100g',
      keyNutrients: ['Protein', 'Fiber', 'Iron', 'B vitamins']
    },
    ingredients: ['Roasted Gram Flour', 'Rice Flour', 'Cumin', 'Pepper', 'Salt'],
    shelfLife: '6 months',
    images: {
      main: getProductImage('sathu-pindi'),
      alt: 'Golden sathu pindi flour'
    },
    colors: {
      gradient: 'from-amber-100 to-orange-100',
      accent: 'border-orange-300'
    },
    seo: {
      title: 'Sathu Pindi | Telangana Special | BRR Natural',
      description: 'Traditional Telangana sathu pindi made with roasted gram and rice flour. Protein-rich.',
      keywords: ['sathu pindi', 'telangana flour', 'protein flour', 'traditional flour']
    },
    relatedProducts: ['murukulu', 'besan'],
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-01')
  }
];

// Grains & Natural Staples
const grainsStaples: Product[] = [
  {
    id: 'unpolished-rice',
    slug: 'unpolished-rice',
    name: 'Unpolished Rice',
    telugu: 'అర్ధం బియ్య్య',
    category: 'grains-staples',
    tags: ['organic', 'traditional', 'best-seller'],
    emoji: '🍚',
    tagline: 'Whole grain — nutritious & flavorful',
    description: 'Premium unpolished rice with bran intact. Nutritious and flavorful.',
    longDescription: 'Our unpolished rice is sourced from organic farms in Telangana. The bran layer is preserved, making it more nutritious and flavorful than polished rice.',
    variants: [
      { id: 'rice-1kg', label: '1kg', price: 120, stock: 50, sku: 'UR-1000' },
      { id: 'rice-5kg', label: '5kg', price: 550, stock: 30, sku: 'UR-5000' },
      { id: 'rice-10kg', label: '10kg', price: 1050, stock: 20, sku: 'UR-10000' }
    ],
    benefits: [
      { icon: '🍚', title: 'Whole Grain', description: 'Bran preserved' },
      { icon: '💪', title: 'Nutritious', description: 'High fiber content' },
      { icon: '🌿', title: 'Organic', description: 'Farm fresh' },
      { icon: '✨', title: 'Flavorful', description: 'Natural taste' }
    ],
    nutrition: {
      calories: '360 kcal/100g',
      keyNutrients: ['Fiber', 'B vitamins', 'Magnesium', 'Phosphorus']
    },
    ingredients: ['100% Unpolished Rice'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('unpolished-rice'),
      alt: 'Unpolished brown rice grains'
    },
    colors: {
      gradient: 'from-amber-100 to-yellow-100',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'Unpolished Rice | Whole Grain Rice | BRR Natural',
      description: 'Premium unpolished rice with bran intact. Nutritious, flavorful, and organic.',
      keywords: ['unpolished rice', 'brown rice', 'whole grain rice', 'organic rice']
    },
    relatedProducts: ['rice-flour', 'besan'],
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05')
  }
];

// Village-made Powders
const villagePowders: Product[] = [
  {
    id: 'moringa-powder',
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    telugu: 'మునగ ఆకుల పొడి',
    category: 'village-powders',
    tags: ['organic', 'premium', 'new'],
    emoji: '🌿',
    tagline: 'Superfood — nutrient-dense drumstick leaves',
    description: 'Premium moringa powder made from dried drumstick leaves. Superfood rich in nutrients.',
    longDescription: 'Our moringa powder is made from organically grown drumstick leaves that are shade-dried and ground fresh. Rich in vitamins, minerals, and antioxidants.',
    variants: [
      { id: 'moringa-100g', label: '100g', price: 95, stock: 40, sku: 'MRG-100' },
      { id: 'moringa-250g', label: '250g', price: 220, stock: 30, sku: 'MRG-250' }
    ],
    benefits: [
      { icon: '🌿', title: 'Superfood', description: 'Nutrient-dense' },
      { icon: '💊', title: 'Vitamin Rich', description: 'Vitamins A, C, E' },
      { icon: '💪', title: 'Iron Rich', description: 'High iron content' },
      { icon: '✨', title: 'Organic', description: 'Pure leaves' }
    ],
    nutrition: {
      calories: '280 kcal/100g',
      keyNutrients: ['Vitamin A', 'Vitamin C', 'Iron', 'Calcium', 'Protein']
    },
    ingredients: ['100% Dried Moringa Leaves'],
    shelfLife: '12 months',
    images: {
      main: getProductImage('moringa-powder'),
      alt: 'Green moringa powder in wooden bowl'
    },
    colors: {
      gradient: 'from-green-100 to-emerald-100',
      accent: 'border-green-400'
    },
    seo: {
      title: 'Moringa Powder | Drumstick Leaf Powder | BRR Natural',
      description: 'Premium organic moringa powder from dried drumstick leaves. Superfood rich in nutrients.',
      keywords: ['moringa powder', 'drumstick leaves', 'superfood', 'organic powder']
    },
    relatedProducts: ['curry-leaf-powder', 'turmeric-powder'],
    createdAt: new Date('2024-04-10'),
    updatedAt: new Date('2024-04-10')
  },
  {
    id: 'curry-leaf-powder',
    slug: 'curry-leaf-powder',
    name: 'Curry Leaf Powder',
    telugu: 'కరివే ఆకుల పొడి',
    category: 'village-powders',
    tags: ['traditional', 'organic'],
    emoji: '🍃',
    tagline: 'Aromatic — digestive & hair health',
    description: 'Traditional curry leaf powder made from dried curry leaves. Aromatic and healthy.',
    longDescription: 'Our curry leaf powder is made from fresh curry leaves that are sun-dried and ground. Rich in antioxidants and traditionally used for digestive health and hair care.',
    variants: [
      { id: 'curry-leaf-100g', label: '100g', price: 75, stock: 45, sku: 'CLP-100' },
      { id: 'curry-leaf-250g', label: '250g', price: 170, stock: 35, sku: 'CLP-250' }
    ],
    benefits: [
      { icon: '🍃', title: 'Aromatic', description: 'Fresh aroma' },
      { icon: '💊', title: 'Digestive', description: 'Aids digestion' },
      { icon: '💇', title: 'Hair Health', description: 'Traditional use' },
      { icon: '✨', title: 'Pure', description: 'No additives' }
    ],
    nutrition: {
      calories: '320 kcal/100g',
      keyNutrients: ['Iron', 'Calcium', 'Vitamin A', 'Antioxidants']
    },
    ingredients: ['100% Dried Curry Leaves'],
    shelfLife: '10 months',
    images: {
      main: getProductImage('curry-leaf-powder'),
      alt: 'Dark green curry leaf powder'
    },
    colors: {
      gradient: 'from-green-100 to-lime-100',
      accent: 'border-green-300'
    },
    seo: {
      title: 'Curry Leaf Powder | Karivepaku Podi | BRR Natural',
      description: 'Traditional curry leaf powder from dried curry leaves. Aromatic and healthy.',
      keywords: ['curry leaf powder', 'karivepaku podi', 'herbal powder', 'organic']
    },
    relatedProducts: ['moringa-powder', 'coriander-powder'],
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-04-15')
  }
];

// Rural Specialties
const ruralSpecialties: Product[] = [
  {
    id: 'tamarind',
    slug: 'tamarind',
    name: 'Tamarind',
    telugu: 'చింతపండు',
    category: 'rural-specialties',
    tags: ['traditional', 'organic', 'best-seller'],
    emoji: '🫒',
    tagline: 'Natural souring agent — authentic taste',
    description: 'Premium tamarind pods sourced from organic farms. Natural souring agent for cooking.',
    longDescription: 'Our tamarind is sourced from organic farms in Telangana. The pods are sun-dried and packed fresh. Perfect for authentic Andhra and Telangana cuisine.',
    variants: [
      { id: 'tamarind-250g', label: '250g', price: 70, stock: 50, sku: 'TMR-250' },
      { id: 'tamarind-500g', label: '500g', price: 130, stock: 40, sku: 'TMR-500' },
      { id: 'tamarind-1kg', label: '1kg', price: 240, stock: 30, sku: 'TMR-1000' }
    ],
    benefits: [
      { icon: '🫒', title: 'Natural', description: 'No additives' },
      { icon: '💊', title: 'Digestive', description: 'Aids digestion' },
      { icon: '🌿', title: 'Organic', description: 'Farm fresh' },
      { icon: '✨', title: 'Authentic', description: 'Traditional taste' }
    ],
    nutrition: {
      calories: '239 kcal/100g',
      keyNutrients: ['Tartaric acid', 'Vitamin C', 'Magnesium', 'Potassium']
    },
    ingredients: ['100% Natural Tamarind Pods'],
    shelfLife: '18 months',
    images: {
      main: getProductImage('tamarind'),
      alt: 'Brown tamarind pods in bowl'
    },
    colors: {
      gradient: 'from-amber-100 to-orange-100',
      accent: 'border-amber-400'
    },
    seo: {
      title: 'Tamarind | Chintapandu | BRR Natural',
      description: 'Premium organic tamarind pods. Natural souring agent for authentic cooking.',
      keywords: ['tamarind', 'chintapandu', 'organic tamarind', 'souring agent']
    },
    relatedProducts: ['mango-pickle', 'sambar-powder'],
    createdAt: new Date('2024-04-20'),
    updatedAt: new Date('2024-04-20')
  }
];

// Bundle/Combo Products
const BUNDLES: Bundle[] = [
  {
    id: 'starter-spice-combo',
    slug: 'starter-spice-combo',
    name: 'Starter Spice Combo',
    description: 'Essential spices for every Indian kitchen. Perfect for beginners.',
    products: [
      { productId: 'chilli-powder', variantId: 'chilli-250g', quantity: 1 },
      { productId: 'turmeric-powder', variantId: 'turmeric-250g', quantity: 1 }
    ],
    originalPrice: 210,
    discountedPrice: 180,
    discountPercent: 14,
    image: getProductImage('starter-spice-combo'),
    imageAlt: 'Bundle of essential spice powders',
    tag: 'Best Value',
    stock: 20,
    limitPerCustomer: 3
  },
  {
    id: 'healthy-oil-combo',
    slug: 'healthy-oil-combo',
    name: 'Healthy Oil Combo',
    description: 'Premium cold pressed oils for healthy cooking. Groundnut + Sesame.',
    products: [
      { productId: 'groundnut-oil', variantId: 'groundnut-1l', quantity: 1 },
      { productId: 'sesame-oil', variantId: 'sesame-500ml', quantity: 1 }
    ],
    originalPrice: 580,
    discountedPrice: 520,
    discountPercent: 10,
    image: getProductImage('healthy-oil-combo'),
    imageAlt: 'Bundle of cold pressed oils',
    tag: 'Popular',
    stock: 15,
    limitPerCustomer: 2
  },
  {
    id: 'kitchen-essentials-combo',
    slug: 'kitchen-essentials-combo',
    name: 'Kitchen Essentials Combo',
    description: 'Complete pantry starter kit. Spices, oils, and staples.',
    products: [
      { productId: 'groundnut-oil', variantId: 'groundnut-500ml', quantity: 1 },
      { productId: 'chilli-powder', variantId: 'chilli-250g', quantity: 1 },
      { productId: 'turmeric-powder', variantId: 'turmeric-250g', quantity: 1 },
      { productId: 'jaggery-powder', variantId: 'jaggery-500g', quantity: 1 }
    ],
    originalPrice: 570,
    discountedPrice: 480,
    discountPercent: 16,
    image: getProductImage('kitchen-essentials-combo'),
    imageAlt: 'Complete kitchen essentials bundle',
    tag: 'Complete Kit',
    stock: 10,
    limitPerCustomer: 2
  },
  {
    id: 'pickle-combo-pack',
    slug: 'pickle-combo-pack',
    name: 'Pickle Combo Pack',
    description: 'Assorted homemade pickles. Mango, Gongura, Lemon, and Tomato.',
    products: [
      { productId: 'mango-pickle', variantId: 'mango-250g', quantity: 1 },
      { productId: 'gongura-pickle', variantId: 'gongura-250g', quantity: 1 },
      { productId: 'lemon-pickle', variantId: 'lemon-250g', quantity: 1 },
      { productId: 'tomato-pickle', variantId: 'tomato-250g', quantity: 1 }
    ],
    originalPrice: 460,
    discountedPrice: 380,
    discountPercent: 17,
    image: getProductImage('mango-pickle'),
    imageAlt: 'Assorted homemade pickles bundle',
    tag: 'Best Seller',
    stock: 15,
    limitPerCustomer: 2
  },
  {
    id: 'traditional-snacks-combo',
    slug: 'traditional-snacks-combo',
    name: 'Traditional Snacks Combo',
    description: 'Crispy Andhra and Telangana snacks. Murukulu, Sakinalu, and Gyaralu.',
    products: [
      { productId: 'murukulu', variantId: 'murukulu-250g', quantity: 1 },
      { productId: 'sakinalu', variantId: 'sakinalu-250g', quantity: 1 },
      { productId: 'gyaralu', variantId: 'gyaralu-250g', quantity: 1 }
    ],
    originalPrice: 270,
    discountedPrice: 230,
    discountPercent: 15,
    image: getProductImage('murukulu'),
    imageAlt: 'Traditional snacks bundle',
    tag: 'Popular',
    stock: 20,
    limitPerCustomer: 3
  },
  {
    id: 'telangana-special-combo',
    slug: 'telangana-special-combo',
    name: 'Telangana Special Combo',
    description: 'Authentic Telangana specialties. Gongura pickle, Sakinalu, and Sathu Pindi.',
    products: [
      { productId: 'gongura-pickle', variantId: 'gongura-500g', quantity: 1 },
      { productId: 'sakinalu', variantId: 'sakinalu-500g', quantity: 1 },
      { productId: 'sathu-pindi', variantId: 'sathu-500g', quantity: 1 }
    ],
    originalPrice: 510,
    discountedPrice: 430,
    discountPercent: 16,
    image: getProductImage('gongura-pickle'),
    imageAlt: 'Telangana specialties bundle',
    tag: 'Regional Special',
    stock: 12,
    limitPerCustomer: 2
  },
  {
    id: 'wellness-powder-combo',
    slug: 'wellness-powder-combo',
    name: 'Wellness Powder Combo',
    description: 'Nutritious village-made powders. Moringa and Curry Leaf.',
    products: [
      { productId: 'moringa-powder', variantId: 'moringa-100g', quantity: 1 },
      { productId: 'curry-leaf-powder', variantId: 'curry-leaf-100g', quantity: 1 },
      { productId: 'turmeric-powder', variantId: 'turmeric-250g', quantity: 1 }
    ],
    originalPrice: 210,
    discountedPrice: 175,
    discountPercent: 17,
    image: getProductImage('moringa-powder'),
    imageAlt: 'Wellness powders bundle',
    tag: 'Healthy Choice',
    stock: 18,
    limitPerCustomer: 3
  }
];

// Combine all products
export const PRODUCTS: Record<string, Product> = {};

[...coldPressedOils, ...spicePowders, ...traditionalPowders, ...pantryStaples, ...premiumProducts, ...homemadePickles, ...traditionalFoods, ...grainsStaples, ...villagePowders, ...ruralSpecialties].forEach(product => {
  PRODUCTS[product.id] = product;
});

export const PRODUCT_IDS = Object.keys(PRODUCTS);

export function getProductById(id: string): Product | undefined {
  return PRODUCTS[id];
}

export function getProductBySlug(slug: string): Product | undefined {
  return Object.values(PRODUCTS).find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return Object.values(PRODUCTS).filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return Object.values(PRODUCTS).filter(product => product.tags.includes('best-seller'));
}

export function getNewProducts(): Product[] {
  return Object.values(PRODUCTS).filter(product => product.tags.includes('new'));
}

export function getPremiumProducts(): Product[] {
  return Object.values(PRODUCTS).filter(product => product.tags.includes('premium'));
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(PRODUCTS).filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.includes(lowerQuery)) ||
    product.category.includes(lowerQuery)
  );
}

export function getRelatedProducts(productId: string): Product[] {
  const product = PRODUCTS[productId];
  if (!product || !product.relatedProducts) return [];
  return product.relatedProducts
    .map(id => PRODUCTS[id])
    .filter(Boolean) as Product[];
}

export function getFrequentlyBoughtTogether(productId: string): Product[] {
  const product = PRODUCTS[productId];
  if (!product || !product.frequentlyBoughtTogether) return [];
  return product.frequentlyBoughtTogether
    .map(id => PRODUCTS[id])
    .filter(Boolean) as Product[];
}

export function getBundles(): Bundle[] {
  return BUNDLES;
}

export function getBundleById(id: string): Bundle | undefined {
  return BUNDLES.find(bundle => bundle.id === id);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return BUNDLES.find(bundle => bundle.slug === slug);
}

export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS);
}
