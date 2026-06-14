import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Card } from '../components/Card';

export const ContactCTA = () => {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'CHAT WITH US INSTANTLY',
      title: 'WhatsApp',
      value: '+91 63742 70471',
      action: 'Open WhatsApp',
      accentColor: '#0D6EFD',
      textClass: 'text-primary',
      bgHoverClass: 'group-hover:bg-primary',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'SPEAK TO OUR TEAM',
      title: 'Direct Call',
      value: '+91 63742 70471',
      action: 'Call Now',
      accentColor: '#1D4ED8',
      textClass: 'text-secondary',
      bgHoverClass: 'group-hover:bg-secondary',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'DROP US AN EMAIL',
      title: 'Email',
      value: 'gofstechnology@gmail.com',
      action: 'Send Email',
      accentColor: '#0D6EFD',
      textClass: 'text-primary',
      bgHoverClass: 'group-hover:bg-primary',
    }
  ];

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Let's Talk
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-10 leading-[1.05]">
            Ready to <span className="text-[#0D6EFD]">build</span> <br />
            something great?
          </h2>

          <p className="max-w-2xl mx-auto text-[var(--text-muted)] text-base md:text-lg leading-relaxed font-medium">
            We respond within 1 business hour. Free 30-min consultation — <br className="hidden md:block" />
            no sales pitch, just real solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {contacts.map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card
                hover={false}
                glowColor={contact.accentColor}
                className="h-full text-left p-8 md:p-12 rounded-none bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg hover:shadow-[0_0_20px_rgba(217,255,0,0.3)] relative group cursor-pointer transition-all"
              >
                <div className={`relative z-10 w-12 h-12 rounded-none bg-[var(--tag-bg)] flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 group-hover:text-white ${contact.textClass} ${contact.bgHoverClass}`}>
                  {contact.icon}
                </div>

                <p className="relative z-10 text-[10px] font-bold tracking-[0.3em] text-[var(--text-muted)] uppercase mb-4 font-mono">{contact.label}</p>
                <h3 className="relative z-10 text-3xl font-black text-[var(--text-color)] mb-2 tracking-tight">{contact.title}</h3>
                <p className="relative z-10 text-sm font-medium text-[var(--text-muted)] mb-10">{contact.value}</p>

                <div className={`relative z-10 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all duration-300 font-mono ${contact.textClass}`}>
                  {contact.action} <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-color)]" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Links row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-12 border-t border-[var(--card-border)]">
          {['TRUSTED BY MODERN BUSINESSES', 'SCALABLE & SECURE', '24/7 SUPPORT', 'LATEST TECH'].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />}
              <span className="text-[10px] font-black tracking-[0.3em] text-[var(--text-muted)] uppercase">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
