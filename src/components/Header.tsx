'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BRRLogo from '@/components/ui/BRRLogo';
import Icon from '@/components/ui/AppIcon';
import CartIcon from '@/components/cart/CartIcon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products', hasDropdown: true },
    { label: 'Contact', href: '/contact' },
  ];

  const categoryLinks = [
    { label: 'Oils', href: '/products?category=cold-pressed-oils', emoji: '🫒' },
    { label: 'Spices', href: '/products?category=spice-powders', emoji: '🌶️' },
    { label: 'Pickles', href: '/products?category=homemade-pickles', emoji: '🥭' },
    { label: 'Traditional Foods', href: '/products?category=traditional-foods', emoji: '🥨' },
    { label: 'Grains', href: '/products?category=grains-staples', emoji: '🍚' },
    { label: 'Wellness Powders', href: '/products?category=village-powders', emoji: '🌿' },
    { label: 'Rural Specialties', href: '/products?category=rural-specialties', emoji: '🫒' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-border/30 ${
          scrolled
            ? 'bg-background/97 backdrop-blur-xl shadow-[0_1px_0_0_rgba(232,213,163,0.6)] py-2.5'
            : 'bg-background/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo */}
          <Link href="/homepage" className="flex items-center shrink-0 group">
            <BRRLogo
              size="sm"
              showText={true}
              textVariant="full"
              className="group-hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks?.map((link) => (
              <div key={link?.href} className="relative group">
                <Link
                  href={link?.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative flex items-center gap-1"
                  onMouseEnter={() => link?.hasDropdown && setProductsDropdown(true)}
                  onMouseLeave={() => link?.hasDropdown && setProductsDropdown(false)}
                >
                  {link?.label}
                  {link?.hasDropdown && (
                    <Icon name="ChevronDownIcon" size={14} className="text-muted-foreground" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
                
                {/* Products Dropdown */}
                {link?.hasDropdown && productsDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl py-2 z-50"
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    {categoryLinks?.map((cat) => (
                      <Link
                        key={cat?.href}
                        href={cat?.href}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors text-sm text-foreground"
                      >
                        <span className="text-lg">{cat?.emoji}</span>
                        <span className="font-medium">{cat?.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <CartIcon />
            <a
              href="tel:+918978385957"
              className="flex items-center gap-1.5 text-xs font-bold text-primary border border-primary/25 rounded-full px-3.5 py-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
            >
              <Icon name="PhoneIcon" size={13} variant="solid" />
              Call Now
            </a>
            <a
              href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-xs !py-2 !px-4"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="Bars3Icon" size={24} className="text-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[101] bg-background shadow-2xl transform transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <BRRLogo size="sm" showText={true} textVariant="compact" />
          <button
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={22} className="text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {navLinks?.map((link) => (
            <div key={link?.href}>
              <Link
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-muted hover:text-primary transition-all"
              >
                {link?.label}
              </Link>
              {/* Mobile Category Links for Products */}
              {link?.hasDropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {categoryLinks?.map((cat) => (
                    <Link
                      key={cat?.href}
                      href={cat?.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-all"
                    >
                      <span>{cat?.emoji}</span>
                      <span>{cat?.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="px-6 flex flex-col gap-3 mt-2">
          <a
            href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn justify-center text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Order on WhatsApp
          </a>
          <a
            href="tel:+918978385957"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-full px-4 py-3 hover:bg-primary/5 transition-colors"
          >
            <Icon name="PhoneIcon" size={16} variant="solid" />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}