import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-14 overflow-hidden">
      {/* Background with blended image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--bg-color)] z-10 opacity-90 transition-colors duration-300" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(13,110,253,0.15),transparent_50%)] z-10" />
      </div>
      
      {/* Static Blobs (prevents lag and reduces animation workload) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0D6EFD]/10 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-[120px] pointer-events-none z-10" />
      
      <div className="container relative z-20 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Motto & Quote */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              "Group of Friends Solutions"
            </div>
            <p className="text-[var(--text-muted)] text-[10px] font-bold font-mono tracking-[0.3em] uppercase">
              Several Minds • One Vision • Better Solutions
            </p>
          </motion.div>
           
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 leading-[1.05] max-w-7xl mx-auto tracking-tight text-4xl md:text-8xl font-black"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Transforming Ideas <br />
            Into <span className="text-[#0D6EFD]">Scalable</span> Digital <br />
            Products
          </motion.h1>
          
          <p className="max-w-2xl mx-auto mb-14 text-md md:text-xl text-[var(--text-muted)] leading-relaxed font-normal">
            We build high-performance websites, mobile apps, AI automation systems, 
            and digital solutions that help businesses grow faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                className="w-full bg-[#0D6EFD] text-white px-8 py-5 h-auto text-[13px] tracking-[0.1em] font-bold rounded-none"
              >
                Book Free Consultation <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="w-full border-white/20 text-white px-8 py-5 h-auto text-[13px] tracking-[0.1em] font-bold rounded-none hover:bg-white/5"
              >
                View Our Services <ArrowUpRight className="w-4 h-4 ml-1 opacity-60" />
              </Button>
            </Link>
          </div>

          {/* Contact Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-20 flex items-center justify-center gap-5 text-[var(--text-muted)] font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            <Phone size={12} className="text-[#0D6EFD]" />
            <span>Call us</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--card-border)]" />
            <a href="tel:+916374270471" className="text-[var(--text-color)] hover:text-[#0D6EFD] transition-colors tracking-widest">+91 63742 70471</a>
          </motion.div>

          {/* Stats Grid */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { label: 'Projects Delivered', value: '10+' },
              { label: 'Happy Clients', value: '10+' },
              { label: 'Industries', value: '6+' },
              { label: 'Support', value: '24/7' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: "'Unbounded', system-ui, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase whitespace-nowrap font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};