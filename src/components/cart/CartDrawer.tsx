'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import QuantitySelector from '@/components/product/QuantitySelector';
import { useCart } from '@/context/CartContext';
import { getProductById, getProductBySlug } from '@/lib/data/products';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, isOpen, setIsOpen } = useCart();

  const generateWhatsAppMessage = () => {
    if (cart.items.length === 0) return '';
    
    let message = 'Hi BRR Natural, I want to order:\n\n';
    cart.items.forEach((item) => {
      const product = getProductById(item.productId);
      if (product) {
        const variant = product.variants.find(v => v.id === item.variantId);
        message += `- ${product.name} (${variant?.label || item.variantId}) x ${item.quantity} - ₹${item.price * item.quantity}\n`;
      }
    });
    message += `\nTotal: ₹${cart.total}`;
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/918978385957?text=${generateWhatsAppMessage()}`;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[101] bg-background shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">Your Cart</h2>
              <p className="text-sm text-muted-foreground">{cart.itemCount} items</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close cart"
            >
              <Icon name="XMarkIcon" size={24} className="text-foreground" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-5">
            {cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="font-serif text-xl text-foreground mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">Add some products to get started</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary font-semibold hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.items.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;

                  const variant = product.variants.find(v => v.id === item.variantId);
                  if (!variant) return null;

                  return (
                    <div
                      key={`${item.productId}-${item.variantId}`}
                      className="flex gap-4 p-4 bg-card rounded-xl border border-border"
                    >
                      {/* Product Image */}
                      <div className={`relative w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br ${product.colors.gradient} shrink-0`}>
                        <img
                          src={product.images.main}
                          alt={product.images.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-foreground truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">{variant.label}</p>
                        <p className="font-serif text-lg font-medium text-accent mt-1">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.productId, item.variantId)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Icon name="TrashIcon" size={16} className="text-muted-foreground" />
                        </button>
                        <QuantitySelector
                          quantity={item.quantity}
                          onQuantityChange={(qty) => updateQuantity(item.productId, item.variantId, qty)}
                          min={1}
                          max={variant.stock}
                          size="sm"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-border p-5 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl font-medium text-foreground">₹{cart.subtotal}</span>
              </div>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Clear Cart
              </button>

              {/* Checkout Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full whatsapp-btn justify-center text-base"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272-.297-1.04-1.016-1.04-2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
                Order via WhatsApp (₹{cart.total})
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
