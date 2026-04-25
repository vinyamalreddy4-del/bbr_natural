import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AboutCTA() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent">Taste the Difference</span>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight">
          Ready to experience<br />
          <span className="italic text-primary">real purity?</span>
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-md">
          Order directly from the Baikadi family. WhatsApp us and we&apos;ll deliver fresh-pressed oils and spices from Rangapur Village to your door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-base">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
            </svg>
            Order on WhatsApp
          </a>
          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-semibold text-primary border-2 border-primary/30 rounded-full px-6 py-3.5 hover:bg-primary/5 transition-all">
            <Icon name="ArrowRightIcon" size={16} />
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
