import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card } from '../components/Card';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import aimaireImg from '../assets/works/aimaire.png';
import nancyImg from '../assets/works/nancy.png';
import ritualsImg from '../assets/works/rituals.png';
import zeazhImg from '../assets/works/zeazh.png';
import thzedImg from '../assets/works/thzed.png';
import judeImg from '../assets/works/jude.png';

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
      <div style={{ perspective: 1200 }}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Card hover={false} className="group bg-[var(--card-bg)] border-[var(--card-border)] shadow-xl p-2 rounded-none overflow-hidden hover:shadow-[0_0_30px_rgba(217,255,0,0.2)] transition-all duration-700 cursor-pointer">
            <div className="relative aspect-[16/10] rounded-none overflow-hidden mb-6" style={{ transform: "translateZ(40px)" }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700 ease-[0.25,1,0.5,1]"
              />
              <div className="absolute top-5 left-5 z-20" style={{ transform: "translateZ(30px)" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-color)]/40 backdrop-blur-md border border-[var(--card-border)] rounded-none font-mono">
                  <div className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
                  <span className="text-[9px] font-bold text-[var(--text-color)]/90 tracking-[0.2em] uppercase">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="absolute top-5 right-5 z-20 translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.25,1,0.5,1]" style={{ transform: "translateZ(40px)" }}>
                <div className={`w-11 h-11 rounded-none flex items-center justify-center text-white shadow-lg ${project.dotColor === 'bg-[#0D6EFD]' ? 'bg-[#0D6EFD] shadow-[0_0_20px_rgba(13,110,253,0.3)]' : 'bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/80 via-[var(--bg-color)]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>
            <div className="px-5 pb-5" style={{ transform: "translateZ(20px)" }}>
              <h3 className="text-2xl font-black mb-2 text-[var(--text-color)] group-hover:text-[#0D6EFD] transition-colors duration-300 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </a>
  );
};

export const Work = () => {
  const projects = [
    {
      title: 'Aimaire Inc',
      description: 'Premium corporate website for commercial interiors, kitchen equipment, and franchise solutions.',
      tag: 'Commercial',
      image: aimaireImg,
      liveUrl: 'https://www.aimaireinc.com/',
      dotColor: 'bg-[#0D6EFD]'
    },
    {
      title: 'Nancy Equipments',
      description: 'Commercial kitchen fabrication website with product catalogs and industrial solutions.',
      tag: 'Industrial',
      image: nancyImg,
      liveUrl: 'https://www.nancyequipments.in/',
      dotColor: 'bg-[#3B82F6]'
    },
    {
      title: 'Reverse Rituals',
      description: 'Full-stack MERN e-commerce platform for Ayurvedic hair care products with admin dashboard.',
      tag: 'E-commerce',
      image: ritualsImg,
      liveUrl: 'https://www.reverserituals.in/',
      dotColor: 'bg-[#0D6EFD]'
    },
    {
      title: 'Zeazh - Digital Agency',
      description: 'Modern tech agency website with interactive animations and SaaS-inspired layout.',
      tag: 'Agency',
      image: zeazhImg,
      liveUrl: 'https://zeazh.com/',
      dotColor: 'bg-[#3B82F6]'
    },
    {
      title: 'Thzed - PhD Research',
      description: 'Modern academic service website for PhD guidance and research assistance services.',
      tag: 'Academic',
      image: thzedImg,
      liveUrl: 'https://mohamedcoderx.github.io/Thzed-PhD-Website/',
      dotColor: 'bg-[#0D6EFD]'
    },
    {
      title: 'Ashley Jude A',
      description: 'Cinematic portfolio website for filmmaker and actor with immersive visuals and animations.',
      tag: 'Portfolio',
      image: judeImg,
      liveUrl: 'https://ashley-jude-portfolio.netlify.app/',
      dotColor: 'bg-[#3B82F6]'
    }
  ];

  return (
    <section id="work" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Portfolio
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-7xl font-black text-[var(--text-color)] leading-[0.95] tracking-tight"
            >
              Building <br />
              <span className="text-[#0D6EFD] italic">Next-gen <br /> Experiences.</span>
            </motion.h2>
          </div>

          <p className="max-w-lg text-[var(--text-muted)] text-sm leading-relaxed mb-4">
            A showcase of our recent projects across diverse industries — <br className="hidden md:block" />
            delivering measurable impact through code and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/works"
            className="inline-flex items-center gap-2 text-[#0D6EFD] font-medium hover:gap-3 transition-all"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};