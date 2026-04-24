'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type ProductId = 'groundnut-oil' | 'sesame-oil' | 'chilli-powder' | 'turmeric-powder';

const PRODUCTS: Record<ProductId, {
  id: ProductId;
  name: string;
  telugu: string;
  emoji: string;
  tagline: string;
  description: string;
  longDesc: string;
  sizes: {label: string;price: number;}[];
  benefits: {icon: string;title: string;desc: string;}[];
  nutritional: string[];
  image: string;
  imageAlt: string;
  color: string;
  accentColor: string;
  category: 'oil' | 'spice';
}> = {
  'groundnut-oil': {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    telugu: 'వేరుశెనగ నూనె',
    emoji: '🥜',
    tagline: 'Best for frying & everyday cooking',
    description: 'Cold pressed from farm-fresh Andhra groundnuts using the traditional wooden chekku. Rich, nutty aroma with a high smoke point — perfect for deep frying, tempering, and everything in between.',
    longDesc: 'Our groundnut oil is extracted from premium quality groundnuts sourced from Kurnool district, known for producing some of India\'s finest peanuts. The cold pressing process at below 45°C ensures all natural Vitamin E, Omega-6 fatty acids, and antioxidants are preserved intact.',
    sizes: [
    { label: '500ml', price: 180 },
    { label: '1 Litre', price: 340 },
    { label: '2 Litres', price: 650 },
    { label: '5 Litres', price: 1550 }],

    benefits: [
    { icon: '🔥', title: 'High Smoke Point', desc: '230°C — ideal for deep frying' },
    { icon: '💊', title: 'Vitamin E Rich', desc: 'Natural antioxidant protection' },
    { icon: '🫀', title: 'Heart Healthy', desc: 'Balanced Omega-3 & Omega-6' },
    { icon: '🍳', title: 'Versatile Use', desc: 'Frying, tempering, tadka' }],

    nutritional: ['High in monounsaturated fats', 'Natural Vitamin E', 'Resveratrol antioxidant', 'No cholesterol'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1135f90f7-1772316634495.png",
    imageAlt: 'Golden groundnut oil in a glass bottle with groundnuts scattered around, warm amber color, natural lighting on wooden surface',
    color: 'from-amber-50 to-yellow-100',
    accentColor: 'border-amber-300',
    category: 'oil'
  },
  'sesame-oil': {
    id: 'sesame-oil',
    name: 'Sesame Oil',
    telugu: 'నువ్వుల నూనె',
    emoji: '🌱',
    tagline: 'Authentic Andhra taste & Ayurvedic grade',
    description: 'Stone-cold pressed from premium white sesame seeds. Deep, nutty aroma with golden colour. Used in Andhra cooking, Ayurvedic therapies, and skin care for centuries.',
    longDesc: 'Our sesame oil is extracted from carefully selected white sesame seeds using the ancient wooden chekku process. Rich in sesamin and sesamolin — natural antioxidants unique to sesame — this oil has been used in Andhra kitchens and Ayurvedic practices for over 3000 years.',
    sizes: [
    { label: '250ml', price: 130 },
    { label: '500ml', price: 240 },
    { label: '1 Litre', price: 460 }],

    benefits: [
    { icon: '🦴', title: 'Rich in Calcium', desc: 'Supports bone density' },
    { icon: '🧴', title: 'Skin & Hair', desc: 'Traditional Ayurvedic use' },
    { icon: '🫀', title: 'Lignans', desc: 'Unique sesame antioxidants' },
    { icon: '🍜', title: 'Tadka & Finishing', desc: 'Authentic Andhra flavour' }],

    nutritional: ['Sesamin & Sesamolin', 'Natural Vitamin E & K', 'Rich in calcium & magnesium', 'Antibacterial properties'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b060a05b-1772807806391.png",
    imageAlt: 'Dark golden sesame oil in a small bottle with sesame seeds, warm earthy tones, rustic wooden background',
    color: 'from-amber-100 to-orange-100',
    accentColor: 'border-orange-300',
    category: 'oil'
  },
  'chilli-powder': {
    id: 'chilli-powder',
    name: 'Chilli Powder',
    telugu: 'మిర్చి పొడి',
    emoji: '🌶️',
    tagline: 'Guntur variety — pure heat, deep colour',
    description: 'Sun-dried Guntur red chillies, hand-cleaned and stone-ground fresh. Deep brick-red colour, authentic Andhra heat, and rich capsaicin — no artificial colour or preservatives.',
    longDesc: 'Guntur district produces some of the world\'s finest chillies, known for their intense heat and deep natural red colour. Our chilli powder is made exclusively from Grade-A Guntur chillies, dried naturally under the sun and ground fresh in stone mills to preserve all volatile oils responsible for flavour and colour.',
    sizes: [
    { label: '100g', price: 55 },
    { label: '250g', price: 120 },
    { label: '500g', price: 220 },
    { label: '1kg', price: 400 }],

    benefits: [
    { icon: '🎨', title: 'Natural Colour', desc: 'No artificial dye added' },
    { icon: '🔥', title: 'Pure Capsaicin', desc: 'Authentic Guntur heat' },
    { icon: '💊', title: 'Metabolism Boost', desc: 'Natural capsaicin benefits' },
    { icon: '🍱', title: 'Andhra Cuisine', desc: 'Authentic regional taste' }],

    nutritional: ['Natural capsaicin', 'Vitamin C & A', 'No artificial colour', 'No preservatives'],
    image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b",
    imageAlt: 'Vibrant red Guntur chilli powder in a wooden bowl with whole red chillies, bright red color, rustic background',
    color: 'from-red-50 to-orange-100',
    accentColor: 'border-red-300',
    category: 'spice'
  },
  'turmeric-powder': {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    telugu: 'పసుపు పొడి',
    emoji: '🟡',
    tagline: 'Nizamabad variety — high curcumin, vibrant gold',
    description: 'Naturally dried Nizamabad turmeric rhizomes, freshly stone-ground. Brilliant golden colour, earthy aroma, and high curcumin content for maximum health benefits.',
    longDesc: 'Nizamabad in Telangana is renowned for producing turmeric with the highest curcumin content in India — often 5-7%, compared to 3-4% in other varieties. Our turmeric is sourced directly from farmers, sun-dried for 3 weeks, and freshly ground in stone mills just before packaging.',
    sizes: [
    { label: '100g', price: 45 },
    { label: '250g', price: 90 },
    { label: '500g', price: 165 },
    { label: '1kg', price: 300 }],

    benefits: [
    { icon: '✨', title: 'High Curcumin', desc: '5-7% curcumin content' },
    { icon: '🛡️', title: 'Anti-Inflammatory', desc: 'Proven Ayurvedic benefits' },
    { icon: '🎨', title: 'Vibrant Colour', desc: 'Natural golden hue' },
    { icon: '🍲', title: 'Authentic Taste', desc: 'Earthy, warm aroma' }],

    nutritional: ['5-7% curcumin', 'Natural essential oils', 'Iron & Manganese', 'Antioxidant properties'],
    image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727",
    imageAlt: 'Bright golden turmeric powder in a wooden bowl with whole turmeric roots, vibrant yellow color, natural background',
    color: 'from-yellow-50 to-amber-100',
    accentColor: 'border-yellow-300',
    category: 'spice'
  }
};

const PRODUCT_IDS: ProductId[] = ['groundnut-oil', 'sesame-oil', 'chilli-powder', 'turmeric-powder'];

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'oil' | 'spice'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductId>('groundnut-oil');
  const [selectedSize, setSelectedSize] = useState<Record<ProductId, number>>({
    'groundnut-oil': 0,
    'sesame-oil': 0,
    'chilli-powder': 1,
    'turmeric-powder': 1
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.cat-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredIds = PRODUCT_IDS.filter(
    (id) => activeFilter === 'all' || PRODUCTS[id].category === activeFilter
  );

  const active = PRODUCTS[selectedProduct];
  const sizeIdx = selectedSize[selectedProduct];

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter tabs */}
        <div
          className="cat-reveal flex flex-wrap gap-2 mb-10"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>

          {(['all', 'oil', 'spice'] as const).map((f) =>
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            activeFilter === f ?
            'bg-primary text-primary-foreground shadow-sm' :
            'bg-muted text-muted-foreground hover:bg-muted/70'}`
            }>

              {f === 'all' ? 'All Products' : f === 'oil' ? '🫙 Oils' : '🌶️ Spices'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Product list cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {filteredIds.map((id, idx) => {
              const p = PRODUCTS[id];
              const isActive = selectedProduct === id;
              return (
                <div
                  key={id}
                  className={`cat-reveal product-card cursor-pointer ${isActive ? 'border-accent shadow-lg' : ''}`}
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`
                  }}
                  onClick={() => setSelectedProduct(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProduct(id)}
                  aria-pressed={isActive}>

                  <div className="flex items-center gap-4 p-4">
                    <div className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br ${p.color} border ${p.accentColor}`}>
                      <AppImage
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        className="object-cover"
                        sizes="80px" />

                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-sm text-foreground">{p.name}</h3>
                          <p className="text-xs text-muted-foreground">{p.telugu}</p>
                        </div>
                        <p className="font-serif text-lg font-medium text-accent shrink-0">
                          ₹{p.sizes[selectedSize[id]].price}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {p.tagline}
                      </p>
                    </div>
                    <Icon
                      name="ChevronRightIcon"
                      size={18}
                      className={`shrink-0 transition-transform ${isActive ? 'rotate-90 text-accent' : 'text-muted-foreground'}`} />

                  </div>
                </div>);

            })}
          </div>

          {/* Product detail panel */}
          <div className="lg:col-span-7">
            <div
              className="cat-reveal bg-card rounded-3xl border border-border overflow-hidden shadow-sm"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s' }}>

              {/* Product image */}
              <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${active.color} overflow-hidden`}>
                <AppImage
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-4xl">{active.emoji}</span>
                </div>
                <div className="absolute bottom-5 left-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">{active.name}</h2>
                  <p className="text-white/80 text-sm">{active.telugu}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{active.description}</p>

                {/* Benefits */}
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {active.benefits.map((b) =>
                    <div key={b.title} className="flex items-start gap-2 p-3 bg-muted/50 rounded-xl border border-border">
                        <span className="text-base shrink-0">{b.icon}</span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{b.title}</p>
                          <p className="text-xs text-muted-foreground">{b.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Size selector */}
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Choose Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {active.sizes.map((s, i) =>
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize((prev) => ({ ...prev, [selectedProduct]: i }))}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                      sizeIdx === i ?
                      'bg-primary text-primary-foreground border-primary' :
                      'border-border text-muted-foreground hover:border-primary/50'}`
                      }>

                        {s.label} — ₹{s.price}
                      </button>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/918978385957?text=Hi%20BBR%20Natural%2C%20I%20want%20to%20order%20${encodeURIComponent(active.name)}%20(${encodeURIComponent(active.sizes[sizeIdx].label)})%20-%20%E2%82%B9${active.sizes[sizeIdx].price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn flex-1 justify-center text-sm">

                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                    </svg>
                    Order {active.sizes[sizeIdx].label} for ₹{active.sizes[sizeIdx].price}
                  </a>
                  <a
                    href="tel:+918978385957"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-primary border-2 border-primary/30 rounded-full px-5 py-3 hover:bg-primary/5 transition-all">

                    <Icon name="PhoneIcon" size={15} variant="solid" />
                    Call to Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}