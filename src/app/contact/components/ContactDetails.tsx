import React from 'react';
import Icon from '@/components/ui/AppIcon';

const contactItems = [
  {
    icon: 'PhoneIcon',
    label: 'Phone / WhatsApp',
    value: '+91 89783 95957',
    sub: 'Mon–Sat, 8am–8pm IST',
    href: 'tel:+918978385957',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'orders@brrnatural.in',
    sub: 'Reply within 24 hours',
    href: 'mailto:orders@brrnatural.in',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: 'MapPinIcon',
    label: 'Manufacturing',
    value: 'Karimnagar District, Telangana',
    sub: 'Huzurabad Mandal, Rangapur Village',
    href: 'https://maps.google.com/?q=Rangapur+Karimnagar+Telangana+India',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: 'ClockIcon',
    label: 'Business Hours',
    value: 'Monday – Saturday',
    sub: '8:00 AM – 8:00 PM IST',
    href: null,
    color: 'bg-muted text-muted-foreground',
  },
];

export default function ContactDetails() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-4">
              <span className="text-xs font-bold tracking-[0.35em] uppercase text-accent block mb-3">Contact Info</span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-tight leading-tight">
                Reach Us<br />
                <span className="italic text-primary">Directly</span>
              </h2>
            </div>
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border hover:border-accent/40 transition-all hover:shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* WhatsApp prominent CTA */}
            <a
              href="https://wa.me/918978385957?text=Hi%20BRR%20Natural%2C%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 whatsapp-btn justify-center text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.527 5.858L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.374l-.36-.214-3.736.979.999-3.641-.235-.374A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Order on WhatsApp — Fastest Response
            </a>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-full min-h-[400px] bg-muted flex flex-col">
              {/* Map embed placeholder */}
              <div className="flex-1 relative bg-gradient-to-br from-primary/5 to-accent/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121640.27!2d79.5!3d18.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf0b0b0b0b0b0%3A0x0!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  className="w-full h-full min-h-[400px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BRR Natural Location — Karimnagar, Telangana"
                />
              </div>
              <div className="p-5 bg-card border-t border-border flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">BRR Natural — Rangapur Village</p>
                  <p className="text-xs text-muted-foreground">Huzurabad Mandal, Karimnagar District, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}