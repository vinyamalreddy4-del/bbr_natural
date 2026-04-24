'use client';

import React, { memo, useMemo } from 'react';

interface BRRLogoProps {
  variant?: 'full' | 'icon' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const BRRLogo = memo(function BRRLogo({
  variant = 'full',
  size = 'md',
  className = '',
  onClick,
}: BRRLogoProps) {
  // Size configurations
  const sizeConfig = useMemo(() => ({
    sm: { icon: 28, text: 'text-sm', tagline: 'text-[8px]', gap: 'gap-2' },
    md: { icon: 36, text: 'text-base', tagline: 'text-[10px]', gap: 'gap-2.5' },
    lg: { icon: 48, text: 'text-lg', tagline: 'text-xs', gap: 'gap-3' },
  }), []);

  const config = sizeConfig[size];

  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center', config.gap];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className, config.gap]);

  // BRR Icon SVG - Compact, geometric design
  const BRRIcon = useMemo(() => (
    <svg
      width={config.icon}
      height={config.icon}
      viewBox="0 0 48 48"
      fill="none"
      className="flex-shrink-0"
      aria-label="BRR Natural Logo"
    >
      {/* Circular background with gradient */}
      <defs>
        <linearGradient id="brrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner filled circle */}
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="currentColor"
        opacity="0.08"
      />
      
      {/* B letter - stylized */}
      <path
        d="M10 14 L10 34 M10 14 L18 14 Q22 14 22 19 Q22 22 18 23 L10 23 M10 23 L19 23 Q23 23 23 28 Q23 34 18 34 L10 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* First R letter - stylized */}
      <path
        d="M24 14 L24 34 M24 14 L32 14 Q36 14 36 19 Q36 23 32 24 L24 24 M30 22 L36 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Leaf accent - representing "Natural" */}
      <path
        d="M38 12 Q42 16 38 20 Q34 16 38 12Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  ), [config.icon]);

  // Compact icon-only version
  if (variant === 'icon') {
    return (
      <div 
        className={`${containerClassName} justify-center`}
        onClick={onClick}
      >
        {BRRIcon}
      </div>
    );
  }

  // Full logo with text
  return (
    <div className={containerClassName} onClick={onClick}>
      {BRRIcon}
      
      {variant === 'full' && (
        <div className="flex flex-col leading-tight">
          <span className={`font-serif font-semibold text-primary ${config.text} tracking-tight`}>
            Baikadi Rajireddy Natural
          </span>
          <span className={`font-semibold tracking-[0.15em] uppercase text-accent ${config.tagline} leading-none`}>
            Pure & Traditional
          </span>
        </div>
      )}
      
      {variant === 'compact' && (
        <span className={`font-serif font-semibold text-primary ${config.text} tracking-tight`}>
          BRR Natural
        </span>
      )}
    </div>
  );
});

export default BRRLogo;