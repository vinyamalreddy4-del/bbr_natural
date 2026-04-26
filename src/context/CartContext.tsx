'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Cart, CartItem } from '@/types/product';

interface CartContextType {
  cart: Cart;
  addToCart: (productId: string, variantId: string, quantity: number, price: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'brr-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    subtotal: 0,
    total: 0,
    itemCount: 0
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Failed to parse saved cart:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const calculateCartTotals = (items: CartItem[]): Pick<Cart, 'subtotal' | 'total' | 'itemCount'> => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // No taxes/shipping for now
    return { itemCount, subtotal, total };
  };

  const addToCart = (productId: string, variantId: string, quantity: number, price: number) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.productId === productId && item.variantId === variantId
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = [...prevCart.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
      } else {
        // Add new item
        newItems = [...prevCart.items, { productId, variantId, quantity, price }];
      }

      const { itemCount, subtotal, total } = calculateCartTotals(newItems);
      return { items: newItems, itemCount, subtotal, total };
    });
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      );
      const { itemCount, subtotal, total } = calculateCartTotals(newItems);
      return { items: newItems, itemCount, subtotal, total };
    });
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      );
      const { itemCount, subtotal, total } = calculateCartTotals(newItems);
      return { items: newItems, itemCount, subtotal, total };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      subtotal: 0,
      total: 0,
      itemCount: 0
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
