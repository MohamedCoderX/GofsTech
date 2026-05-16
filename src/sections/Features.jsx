import { Cpu, Zap, Layers, Fingerprint, Headphones, Sparkles, Search, Smartphone } from 'lucide-react';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: 'Modern Tech Stack',
      description: 'React, Next.js, Node, Python, MongoDB — production-ready architectures.',
      span: 'md:col-span-2',
      accent: 'primary',
    },
    {
      icon: <Zap className="w-5 h-5 text-secondary" />,
      title: 'Fast Delivery',
      description: 'Ship in weeks, not quarters.',
      span: 'md:col-span-1',
      accent: 'secondary',
    },
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      title: 'Scalable Solutions',
      description: 'Engineered to handle 10x growth from day one.',
      span: 'md:col-span-1',
      accent: 'primary',
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-secondary" />,
      title: 'AI-Driven Approach',
      description: 'From copy to code — we integrate AI where it matters.',
      span: 'md:col-span-2',
      accent: 'secondary',
    },
    {
      icon: <Headphones className="w-5 h-5 text-primary" />,
      title: 'Dedicated Support',
      description: '24/7 humans, real Slack channels.',
      span: 'md:col-span-1',
      accent: 'primary',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-secondary" />,
      title: 'High-Performance Design',
      description: 'Pixel-perfect, accessible, animated.',
      span: 'md:col-span-1',
      accent: 'secondary',
    },
    {
      icon: <Search className="w-5 h-5 text-primary" />,
      title: 'SEO Optimized',
      description: 'Built for search, ranked to convert.',
      span: 'md:col-span-1',
      accent: 'primary',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-secondary" />,
      title: 'Mobile Responsive',
      description: 'Flawless on every screen size.',
      span: 'md:col-span-3',
      accent: 'secondary',
    },
  ];

  return (
    <section id="features" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Why Choose Us
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-3xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl mx-auto text-[var(--text-color)]"
          >
            The unfair <br />
            advantage that <br />
            startups <span className="text-[#0D6EFD] italic">trust.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={feature.span}
            >
              <Card
                hover={false}
                glowColor={feature.accent === 'primary' ? '#0D6EFD' : '#1D4ED8'}
                className="h-full bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg hover:shadow-[0_0_20px_rgba(217,255,0,0.2)] transition-all duration-500 p-8 group cursor-default rounded-none"
              >
                <div
                  className={`w-10 h-10 rounded-none border border-[var(--card-border)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 bg-[var(--tag-bg)]`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-[var(--text-color)] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
