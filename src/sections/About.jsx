import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import img from "../assets/about.png";

export const About = () => {
  const stats = [
    { label: '5x', sub: 'FASTER DELIVERY' },
    { label: 'AI', sub: 'FIRST APPROACH' },
    { label: '100%', sub: 'IN-HOUSE TEAM' },
    { label: '∞', sub: 'SCALABILITY' },
  ];

  return (
    <section id="about" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Image card ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-none overflow-hidden border border-[var(--card-border)] aspect-4/5 group">
              <img
                src={img}
                alt="GOFS Team"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />

              {/* Gradient fade at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/80 via-[var(--bg-color)]/10 to-transparent" />

              {/* Bottom-left: Est + tagline */}
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-[10px] font-black tracking-[0.4em] text-primary mb-2 uppercase">EST · 2025</p>
                <h3 className="text-2xl font-black text-white tracking-tight">Built for Founders</h3>
              </div>

              {/* Bottom-right: Satisfaction floating card */}
              <div className="absolute bottom-4 right-4 z-20 md:block hidden ">
                <div className="bg-[var(--bg-color)]/60 backdrop-blur-2xl border border-[var(--card-border)] p-6 rounded-none relative overflow-hidden min-w-[160px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                  <div className="relative z-10 ">
                    <p className="text-[9px] font-black tracking-[0.25em] text-[var(--text-muted)] mb-3 uppercase">Client Satisfaction</p>
                    <p className="text-4xl font-black text-primary mb-1">98%</p>
                    <p className="text-[10px] text-[var(--text-muted)] font-medium leading-snug max-w-[130px]">
                      Across delivered projects in 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase w-fit font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              About GOFS Tech
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-black leading-[1.05] tracking-tight text-[var(--text-color)]">
              A modern digital <br />
              studio <br />
              engineered for <br />
              <span className="text-[#0D6EFD] italic">scalable growth.</span>
            </h2>

            {/* Body copy */}
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] text-base leading-relaxed font-medium max-w-xl">
                GOFS Tech is a modern digital solutions company that partners with startups and businesses to
                build scalable products. We blend cutting-edge engineering with a deeply client-focused
                mindset, treating every project like our own.
              </p>
              <p className="text-[var(--text-muted)] text-base leading-relaxed font-medium max-w-xl">
                From discovery to deployment, our team is fluent in modern stacks, AI-driven workflows, and
                architectures built to scale — so you can move fast without breaking things.
              </p>
            </div>

            {/* Stats row — sits inside the right column */}
            <div className="grid grid-cols-4 gap-3 mt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex flex-col gap-1"
                >
                  <p className="text-xl md:text-2xl font-black text-[var(--text-color)]">{stat.label}</p>
                  <p className="text-[8px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

