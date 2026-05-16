import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Smartphone, Code, Bot, Megaphone, Cloud, BarChart3, Zap, Shield, Rocket } from 'lucide-react';

const services = [
  {
    slug: 'web-development',
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    shortDesc: 'High-performance websites and web applications that convert visitors into customers.',
    description: 'We build websites that not only look stunning but also drive results. From corporate websites to complex e-commerce platforms, our team delivers solutions that improve your business metrics.',
    features: ['Custom Website Development', 'E-commerce Solutions', 'Progressive Web Apps', 'CMS Development', 'API Integration', 'Performance Optimization'],
    benefits: ['Increase conversion rates', 'Improve search rankings', 'Better user experience', 'Scalable architecture'],
    color: '#0D6EFD'
  },
  {
    slug: 'app-development',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'App Development',
    shortDesc: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    description: 'Reach your customers wherever they are with mobile applications that are fast, reliable, and engaging. We build apps that become essential tools for your users.',
    features: ['iOS Development', 'Android Development', 'React Native Apps', 'Flutter Apps', 'App UI/UX Design', 'App Store Submission'],
    benefits: ['Expand your reach', 'Increase customer engagement', 'Build brand loyalty', 'Real-time analytics'],
    color: '#3B82F6'
  },
  {
    slug: 'software-development',
    icon: <Code className="w-8 h-8" />,
    title: 'Software Development',
    shortDesc: 'Custom software solutions tailored to your unique business requirements.',
    description: 'Off-the-shelf software doesn\'t always fit your business needs. We build custom solutions that streamline operations, reduce costs, and give you competitive advantage.',
    features: ['Custom CRM Development', 'ERP Systems', 'Business Dashboards', 'Inventory Management', 'Workflow Automation', 'Legacy Modernization'],
    benefits: ['Automate processes', 'Reduce operational costs', 'Improve efficiency', 'Better data insights'],
    color: '#1D4ED8'
  },
  {
    slug: 'ai-automation',
    icon: <Bot className="w-8 h-8" />,
    title: 'AI & Automation',
    shortDesc: 'Intelligent automation solutions that save time and reduce costs.',
    description: 'Transform your business operations with AI-powered tools that handle repetitive tasks, provide instant responses, and learn from data to improve continuously.',
    features: ['AI Chatbots', 'Voice Assistants', 'Workflow Automation', 'Lead Generation AI', 'Data Analysis', 'Process Optimization'],
    benefits: ['24/7 operations', 'Reduce manual work', 'Faster responses', 'Cost savings'],
    color: '#2563EB'
  },
  {
    slug: 'digital-marketing',
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    shortDesc: 'Data-driven marketing strategies that deliver measurable ROI.',
    description: 'Grow your business with marketing strategies that are backed by data and focused on results. We help you reach the right audience with the right message.',
    features: ['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Meta Ads', 'Content Strategy', 'Email Marketing'],
    benefits: ['Increase visibility', 'Generate quality leads', 'Better ROI', 'Brand growth'],
    color: '#0D6EFD'
  },
  {
    slug: 'cloud-solutions',
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    shortDesc: 'Scalable cloud infrastructure that grows with your business.',
    description: 'Leverage the power of cloud computing to reduce costs, improve reliability, and scale effortlessly. We help you migrate, optimize, and manage your cloud infrastructure.',
    features: ['Cloud Migration', 'AWS Services', 'Azure Solutions', 'DevOps', 'CI/CD Pipelines', '24/7 Monitoring'],
    benefits: ['Reduce costs', 'Ensure reliability', 'Easy scaling', 'Better security'],
    color: '#3B82F6'
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-medium tracking-[0.15em] uppercase mb-6 font-mono">
            Our Services
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Digital Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-[var(--text-muted)] text-[10px] font-bold font-mono uppercase tracking-[0.3em]">
            Engineering excellence for the modern web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/services/${service.slug}`}>
                <div className="group h-full bg-[var(--card-bg)] border border-[var(--card-border)] p-8 hover:border-[#0D6EFD]/50 transition-all duration-500 cursor-pointer rounded-none">
                  <div
                    className="w-14 h-14 rounded-none flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-[var(--text-color)] mb-3 group-hover:text-[#0D6EFD] transition-colors" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-medium">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center text-[#0D6EFD] font-bold text-[10px] uppercase tracking-widest font-mono">
                    Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-10 md:p-20 max-w-5xl mx-auto rounded-none">
            <h2 className="text-2xl md:text-5xl font-black text-[var(--text-color)] mb-6 leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Ready to <span className="text-[#0D6EFD]">Scale?</span>
            </h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto font-medium">
              Book a free consultation and we'll help you identify the best solutions for your business challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-bold px-10 py-5 transition-all rounded-none uppercase tracking-widest text-xs font-mono hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
            >
              Book Free Consultation <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesPage;