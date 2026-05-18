import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SEOHead } from '../hooks/useSEO';
import aimaireImg from '../assets/works/aimaire.png';
import nancyImg from '../assets/works/nancy.png';
import ritualsImg from '../assets/works/rituals.png';
import zeazhImg from '../assets/works/zeazh.png';
import thzedImg from '../assets/works/thzed.png';
import judeImg from '../assets/works/jude.png';

const projects = [
  {
    title: 'Aimaire Inc',
    category: 'Commercial Solutions',
    description: 'Premium corporate website for commercial interiors, kitchen equipment, display systems, and franchise setup solutions. Built with Next.js focusing on lead generation.',
    tags: ['Next.js', 'Commercial', 'Corporate'],
    image: aimaireImg,
    liveUrl: 'https://www.aimaireinc.com/',
    color: '#0D6EFD'
  },
  {
    title: 'Nancy Equipments',
    category: 'Industrial Manufacturing',
    description: 'Commercial kitchen fabrication website built with Next.js. Showcases stainless steel equipment manufacturing, product catalogs, and industrial solutions.',
    tags: ['Next.js', 'React', 'Industrial'],
    image: nancyImg,
    liveUrl: 'https://www.nancyequipments.in/',
    color: '#3B82F6'
  },
  {
    title: 'Reverse Rituals',
    category: 'E-commerce Platform',
    description: 'Full-stack MERN e-commerce platform for Ayurvedic hair care products. Includes customer shopping experience and complete admin dashboard.',
    tags: ['MERN Stack', 'E-commerce', 'Admin Dashboard'],
    image: ritualsImg,
    liveUrl: 'https://www.reverserituals.in/',
    color: '#1D4ED8'
  },
  {
    title: 'Zeazh - Digital Agency',
    category: 'Tech Agency',
    description: 'Modern tech agency website built with React showcasing web development, SEO services, internships, and tech expertise with interactive animations.',
    tags: ['React', 'Agency', 'Services'],
    image: zeazhImg,
    liveUrl: 'https://zeazh.com/',
    color: '#2563EB'
  },
  {
    title: 'Thzed - PhD Research',
    category: 'Academic Services',
    description: 'Modern academic service website for PhD guidance and research assistance. Features professional trust-focused UI with research showcase and publication sections.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Academic'],
    image: thzedImg,
    liveUrl: 'https://mohamedcoderx.github.io/Thzed-PhD-Website/',
    color: '#0D6EFD'
  },
  {
    title: 'Ashley Jude A',
    category: 'Creative Portfolio',
    description: 'Cinematic portfolio website for filmmaker and actor featuring immersive visuals, smooth scroll-based animations, and premium dark-themed UI.',
    tags: ['React', 'Portfolio', 'Creative'],
    image: judeImg,
    liveUrl: 'https://ashley-jude-portfolio.netlify.app/',
    color: '#3B82F6'
  }
];

const automations = [
  {
    title: 'Voice Stock Management',
    description: 'Automated stock management via Telegram voice commands. Check inventory, add products, and generate reports using voice AI technology.',
    icon: '🎙️',
    tags: ['Telegram Bot', 'Voice AI', 'Automation']
  },
  {
    title: 'Auto Mail Draft',
    description: 'AI-powered email automation that drafts personalized emails based on customer interactions and data patterns.',
    icon: '📧',
    tags: ['AI', 'Email', 'Automation']
  },
  {
    title: 'Lead Qualification AI',
    description: 'Automated lead scoring and qualification using AI to identify and prioritize high-potential prospects.',
    icon: '🎯',
    tags: ['AI', 'Lead Gen', 'Automation']
  },
  {
    title: 'Invoice Generation',
    description: 'Automated invoice creation and sending based on project milestones and delivery status.',
    icon: '📄',
    tags: ['Automation', 'Finance', 'Workflow']
  }
];

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className="group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden rounded-none"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/80 via-[var(--bg-color)]/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-[#0D6EFD]/10 backdrop-blur-md border border-[#0D6EFD]/30 text-[9px] font-bold tracking-[0.2em] uppercase text-[#0D6EFD] font-mono">
                {project.category}
              </span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-[#0D6EFD] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <div
                className="w-10 h-10 rounded-none flex items-center justify-center bg-[var(--tag-bg)] border border-[var(--tag-border)]"
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#0D6EFD] transition-colors" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                {project.title}
              </h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D6EFD] text-xs font-mono hover:underline"
              >
                Visit Site
              </a>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 text-[#0D6EFD] text-[10px] font-bold font-mono uppercase tracking-wider border border-[#0D6EFD]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const worksStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "GOFS Tech Portfolio – Our Works",
  "url": "https://gofstech.com/works",
  "description": "Browse GOFS Tech's portfolio of completed websites, mobile apps, and AI automation projects across multiple industries.",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gofstech.com/" },
      { "@type": "ListItem", "position": 2, "name": "Works", "item": "https://gofstech.com/works" }
    ]
  }
};

function WorksPage() {
  return (
    <>
      <SEOHead
        title="Portfolio – Digital Projects We've Built"
        description="Explore GOFS Tech's portfolio: e-commerce platforms, corporate websites, React apps, AI automations and more — built for real clients across industries."
        path="/works"
        keywords="GOFS Tech portfolio, web development projects, e-commerce websites, React projects India, digital agency work"
        structuredData={worksStructuredData}
      />
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-8 leading-[1.05]" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Our <span className="text-[#0D6EFD]">Works</span>
          </h1>
          <p className="max-w-3xl mx-auto text-[var(--text-muted)] text-[10px] font-bold font-mono uppercase tracking-[0.3em]">
            Curated selection of digital products built with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI & Automation
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-color)] mb-6 leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Future-Proof <br className="md:hidden" /> <span className="text-[#0D6EFD]">Solutions</span>
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
              We help businesses automate processes, reduce costs, and increase efficiency with smart automation solutions and bespoke AI integrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automations.map((auto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="p-8 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#0D6EFD]/50 transition-all group rounded-none"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{auto.icon}</div>
                <h3 className="text-xl font-black text-[var(--text-color)] mb-3" style={{ fontFamily: "'Unbounded', sans-serif" }}>{auto.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 font-medium">{auto.description}</p>
                <div className="flex flex-wrap gap-2">
                  {auto.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[#0D6EFD] text-[10px] font-bold font-mono uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-white/[0.03] border border-white/10 p-10 md:p-20 max-w-5xl mx-auto rounded-none">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Have a Project?
            </h2>
            <p className="text-white/40 mb-10 max-w-xl mx-auto font-medium">
              We'd love to hear about your project and help bring your vision to life. Let's create something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-bold px-10 py-5 transition-all rounded-none uppercase tracking-widest text-xs font-mono hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
              >
                Start Your Project <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://instagram.com/gofs_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white/10 text-white font-bold px-10 py-5 hover:bg-white/5 transition-all rounded-none uppercase tracking-widest text-xs font-mono"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default WorksPage;