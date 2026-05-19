import { Globe, Smartphone, Database, Bot, FlaskConical, Megaphone, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


// ── Color map ─────────────────────────────────────────────────────────────────
const COLORS = {
  primary: '#0D6EFD',
  secondary: '#1D4ED8',
};

// ── Cursor-tracking card ──────────────────────────────────────────────────────
const ServiceCard = ({ service }) => {
  const colorHex = COLORS[service.accent];
  const textClass = service.accent === 'primary' ? 'text-primary' : 'text-secondary';
  const bgHoverClass = service.accent === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-secondary';

  return (
    <Link to={`/services/${service.slug}`} className="h-full">
      <Card
        hover={false}
        glowColor={colorHex}
        className="h-full group bg-[var(--card-bg)] border-[var(--card-border)] shadow-xl hover:shadow-2xl p-10 flex flex-col relative cursor-pointer transition-all duration-500 rounded-none"
      >
        {/* Step number */}
        <div className="absolute top-10 right-10 z-10">
          <span className="text-[10px] font-bold text-[var(--text-muted)] tracking-[0.3em] font-mono">{service.number}</span>
        </div>

        {/* Icon box */}
        <div className="relative z-10 flex justify-between items-start mb-12">
          <div className="w-14 h-14 rounded-none border border-[var(--card-border)] flex items-center justify-center bg-[var(--tag-bg)] text-[var(--text-color)] group-hover:scale-110 group-hover:bg-[#0D6EFD] group-hover:border-[#0D6EFD] group-hover:text-white transition-all duration-500">
            {service.icon}
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 flex-grow">
          <h3 className={`text-2xl md:text-4xl font-black mb-6 tracking-tight text-[var(--text-color)] transition-colors duration-300 group-hover:text-[#0D6EFD]`} style={{ fontFamily: "'Unbounded', sans-serif" }}>
            {service.title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-10 max-w-sm font-medium">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {service.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 group/bullet">
                <div
                  className="w-1.5 h-1.5 rounded-none flex-shrink-0"
                  style={{ background: `${colorHex}` }}
                />
                <span className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] group-hover/bullet:text-[var(--text-color)] transition-colors uppercase font-mono">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore link */}
        <div className={`relative z-10 flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase mt-auto text-[var(--text-muted)] group-hover:gap-4 transition-all duration-300 group-hover:text-[#0D6EFD] font-mono`}>
          Explore <ArrowRight className="w-4 h-4" />
        </div>
      </Card>
    </Link>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website Development',
      slug: 'web-development',
      description: 'Corporate sites, e-commerce, portfolios, and custom web applications built for performance.',
      bullets: ['Corporate sites', 'Web apps', 'E-commerce', 'Portfolios'],
      number: '01',
      span: 'md:col-span-3',
      accent: 'primary',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'App Development',
      slug: 'app-development',
      description: 'Native and cross-platform mobile apps that delight users.',
      bullets: ['Android & iOS', 'SaaS', 'React Native', 'Startup MVPs'],
      number: '02',
      span: 'md:col-span-2',
      accent: 'secondary',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Software Development',
      slug: 'software-development',
      description: 'Bespoke business software — CRMs, ERPs, dashboards and admin panels.',
      bullets: ['CRM systems', 'Dashboards', 'ERP solutions', 'Custom tools'],
      number: '03',
      span: 'md:col-span-2',
      accent: 'primary',
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Automation',
      slug: 'ai-automation',
      description: 'Chatbots, workflow automation and AI-driven customer support pipelines.',
      bullets: ['AI chatbots', 'Lead gen', 'Workflows', 'AI tools'],
      number: '04',
      span: 'md:col-span-3',
      accent: 'secondary',
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'Cloud Solutions',
      slug: 'cloud-solutions',
      description: 'Prototype and validate emerging tech ideas before going to market.',
      bullets: ['Cloud infra', 'DevOps', 'CI/CD', 'Scaling'],
      number: '05',
      span: 'md:col-span-3',
      accent: 'primary',
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'SEO, Google & Meta ads, branding and lead-generation marketing.',
      bullets: ['SEO', 'Social media', 'Paid Ads', 'Strategy'],
      number: '06',
      span: 'md:col-span-2',
      accent: 'secondary',
    },
  ];

  return (
    <section id="services" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Services
          </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-7xl font-black text-[var(--text-color)] leading-[0.95] tracking-tight"
            >
              Full-stack <br /> solutions to <br />
              <span className="text-[#0D6EFD] italic">scale your <br /> business.</span>
            </motion.h2>
          </div>

          <p className="max-w-lg text-[var(--text-muted)] text-sm leading-relaxed mb-4">
            From a single landing page to a complete AI-powered platform — <br className="hidden md:block" />
            we cover every stage of your digital product journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={service.span}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
