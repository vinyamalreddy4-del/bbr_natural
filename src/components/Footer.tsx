import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Pattern 7: Arc Browser Split */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/homepage" className="flex items-center gap-3">
              <AppLogo size={40} />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium text-primary leading-tight">BRR Natural</span>
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-accent">Pure & Traditional</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chemical-free cold pressed oils and natural spices, made the way your grandparents knew. From Rangapur Village, Karimnagar, Telangana.
            </p>
            {/* Trust strip */}
            <div className="flex flex-col gap-1.5">
              {['🌿 Farm to Bottle', '✅ Pure & Traditional', '🏡 From Our Village to Your Kitchen']?.map((t) => (
                <span key={t} className="text-xs text-muted-foreground font-medium">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918978385957"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
              </a>
              <a
                href="tel:+918978385957"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Phone"
              >
                <Icon name="PhoneIcon" size={15} variant="solid" />
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Products</span>
              <div className="flex flex-col gap-2">
                <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Groundnut Oil</Link>
                <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sesame Oil</Link>
                <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Chilli Powder</Link>
                <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Turmeric Powder</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Company</span>
              <div className="flex flex-col gap-2">
                <Link href="/homepage" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
                <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</Link>
                <Link href="/homepage#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Process</Link>
                <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © 2026 BRR Natural (Baikadi Rajireddy Natural). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-medium">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}