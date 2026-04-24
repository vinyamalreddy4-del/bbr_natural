import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function PackagingSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block">Packaging</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-tight">
              Premium Packaging,<br />
              <span className="italic text-primary">Pure Inside</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our oils come in food-grade glass bottles with tamper-evident seals. Spices are packed in airtight kraft pouches with a resealable zip. Every pack is labelled with the pressing date and batch number.
            </p>
            <div className="flex flex-col gap-3">
              {[
              { icon: '🫙', title: 'Glass Bottles for Oils', desc: 'Food-grade, BPA-free, recyclable' },
              { icon: '📦', title: 'Kraft Pouches for Spices', desc: 'Airtight, resealable, compostable' },
              { icon: '🏷️', title: 'Batch Labelling', desc: 'Pressing date + farm source printed' },
              { icon: '🚚', title: 'Secure Delivery', desc: 'Bubble-wrapped for safe transit' }]?.
              map((item) =>
              <div key={item?.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <span className="text-xl shrink-0">{item?.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item?.title}</p>
                    <p className="text-xs text-muted-foreground">{item?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Packaging mockup image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-border shadow-md">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1bbf30022-1773055140274.png"
                  alt="Premium glass oil bottle with clean label on a wooden surface, warm natural lighting, minimal product photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">Glass Bottles</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-border shadow-md">
                  <AppImage
                    src="https://images.unsplash.com/photo-1642505173110-c51e4fc1d5c0"
                    alt="Kraft paper spice pouch with natural ingredients beside it, clean minimal background"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 15vw" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">Kraft Pouches</span>
                  </div>
                </div>
                <div className="bg-primary rounded-2xl p-5 flex flex-col gap-3">
                  <span className="text-3xl">🌿</span>
                  <p className="font-serif text-lg font-light text-primary-foreground leading-snug">
                    Eco-friendly packaging. Good for you, good for the earth.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Recyclable', 'Compostable', 'BPA-Free']?.map((tag) =>
                    <span key={tag} className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full">{tag}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}