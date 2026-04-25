'use client';

import React, { memo } from 'react';
import Image from 'next/image';

interface BRRLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  textVariant?: 'full' | 'compact';
}

const BRRLogo = memo(function BRRLogo({
  size = 'md',
  className = '',
  showText = true,
  textVariant = 'compact',
}: BRRLogoProps) {
  const logoSize = size === 'sm' ? 80 : size === 'lg' ? 120 : 100;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* BRR Brand Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src="/BRR_BrandLogo.jpeg"
          alt="BRR Natural Logo"
          width={logoSize}
          height={logoSize}
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Brand text */}
      {showText && (
        <div className="flex flex-col leading-tight min-w-0">
          <span className="font-serif font-bold text-primary tracking-tight text-[15px] sm:text-base leading-tight">
            BRR Natural
          </span>
          {textVariant === 'full' ? (
            <span className="hidden sm:block text-[9px] font-bold tracking-[0.22em] uppercase text-accent leading-none mt-0.5">
              Baikadi Rajireddy Natural
            </span>
          ) : (
            <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-accent leading-none mt-0.5">
              Pure &amp; Traditional
            </span>
          )}
        </div>
      )}
    </div>
  );
});

export default BRRLogo;