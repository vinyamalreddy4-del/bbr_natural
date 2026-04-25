'use client';

import React, { memo } from 'react';

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
  const iconSize = size === 'sm' ? 40 : size === 'lg' ? 60 : 48;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Premium BRR SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BRR Natural Logo"
        className="flex-shrink-0"
      >
        <defs>
          <radialGradient id="brrBg" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFFBF0" />
            <stop offset="100%" stopColor="#F5E6C0" />
          </radialGradient>
          <linearGradient id="brrRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8922A" />
            <stop offset="50%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#A67520" />
          </linearGradient>
          <linearGradient id="brrLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7C1F" />
            <stop offset="100%" stopColor="#2D5016" />
          </linearGradient>
        </defs>

        {/* Outer decorative ring */}
        <circle cx="30" cy="30" r="29" stroke="url(#brrRing)" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Inner background circle */}
        <circle cx="30" cy="30" r="26" fill="url(#brrBg)" />

        {/* Second inner ring */}
        <circle cx="30" cy="30" r="24" stroke="#C8922A" strokeWidth="0.6" fill="none" opacity="0.4" />

        {/* Leaf motif at top */}
        <path
          d="M30 7 C28 9.5 26.5 12 28 14 C29 15.5 31 15.5 32 14 C33.5 12 32 9.5 30 7Z"
          fill="url(#brrLeaf)"
          opacity="0.9"
        />
        <line x1="30" y1="14" x2="30" y2="17" stroke="#4A7C1F" strokeWidth="0.8" opacity="0.7" />

        {/* BRR Letters — bold, centered, premium */}
        {/* B */}
        <path
          d="M11 22 L11 38 M11 22 L17.5 22 Q21 22 21 25.5 Q21 28 17.5 29 L11 29 M11 29 L18 29 Q22 29 22 32.5 Q22 36 18 36 L11 36"
          stroke="#2D5016"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* First R */}
        <path
          d="M25 22 L25 38 M25 22 L31.5 22 Q35 22 35 25.5 Q35 29 31.5 30 L25 30 M30 29 L35.5 38"
          stroke="#2D5016"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Second R */}
        <path
          d="M38 22 L38 38 M38 22 L44.5 22 Q48 22 48 25.5 Q48 29 44.5 30 L38 30 M43 29 L48.5 38"
          stroke="#2D5016"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Bottom tagline bar */}
        <rect x="14" y="41" width="32" height="1" rx="0.5" fill="#C8922A" opacity="0.5" />

        {/* Dot accents */}
        <circle cx="12" cy="44" r="1" fill="#C8922A" opacity="0.6" />
        <circle cx="30" cy="44" r="1" fill="#C8922A" opacity="0.6" />
        <circle cx="48" cy="44" r="1" fill="#C8922A" opacity="0.6" />
      </svg>

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