'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type FormData = {
  name: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  product: '',
  quantity: '',
  message: '',
};

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit — backend connection point
    // TODO: Connect to backend/email service/WhatsApp API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const whatsappMsg = `Hi BBR Natural, I want to inquire about:
Product: ${form.product || 'Not specified'}
Quantity: ${form.quantity || 'Not specified'}
Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`;

  if (submitted) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
            <Icon name="CheckCircleIcon" size={40} className="text-primary" variant="solid" />
          </div>
          <h2 className="font-serif text-3xl font-light text-foreground">Inquiry Received!</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Thank you, <strong>{form.name}</strong>. We&apos;ll reach out to you on <strong>{form.phone}</strong> within a few hours.
          </p>
          <p className="text-sm text-muted-foreground">
            For faster response, WhatsApp us directly:
          </p>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Send via WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Inquiry Form</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-tight leading-tight">
                Send Us an<br />
                <span className="italic text-primary">Inquiry</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fill in your details and we&apos;ll get back to you with pricing, availability, and delivery info.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: '⚡', title: 'Fast Response', desc: 'We reply within 2–4 hours on business days' },
                { icon: '🛒', title: 'Bulk Orders Welcome', desc: 'Special pricing for 10L+ oil or 5kg+ spices' },
                { icon: '🚚', title: 'Pan-India Delivery', desc: 'We ship via courier to all Indian states' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl border border-border p-6 sm:p-8 flex flex-col gap-5 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Lakshmi Devi"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                {/* Product */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="product" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    <option value="">Select a product</option>
                    <option value="Groundnut Oil">Groundnut Oil (వేరుశెనగ నూనె)</option>
                    <option value="Sesame Oil">Sesame Oil (నువ్వుల నూనె)</option>
                    <option value="Chilli Powder">Chilli Powder (మిర్చి పొడి)</option>
                    <option value="Turmeric Powder">Turmeric Powder (పసుపు పొడి)</option>
                    <option value="Mixed Order">Mixed Order (Multiple Products)</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="quantity" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Quantity / Size Required
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 2 litres groundnut oil, 500g chilli powder"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Message / Special Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements, delivery address, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 whatsapp-btn justify-center text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                  </svg>
                  Or WhatsApp Directly
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}