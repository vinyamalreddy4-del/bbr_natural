'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  disabled = false,
  size = 'md'
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min && !disabled) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max && !disabled) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  const buttonSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className="flex items-center border border-border rounded-full overflow-hidden bg-background">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min || disabled}
        className={`${buttonSizeClasses[size]} flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-label="Decrease quantity"
      >
        <Icon name="MinusIcon" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        className={`${sizeClasses[size]} w-12 text-center font-semibold text-foreground bg-transparent border-0 focus:outline-none focus:ring-0`}
        aria-label="Quantity"
      />
      
      <button
        onClick={handleIncrement}
        disabled={quantity >= max || disabled}
        className={`${buttonSizeClasses[size]} flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-label="Increase quantity"
      >
        <Icon name="PlusIcon" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      </button>
    </div>
  );
}
