'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { cart, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label={`Open cart with ${cart.itemCount} items`}
    >
      <Icon name="ShoppingCartIcon" size={24} className="text-foreground" />
      {cart.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cart.itemCount}
        </span>
      )}
    </button>
  );
}
