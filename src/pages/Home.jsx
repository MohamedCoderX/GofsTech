import { motion } from 'framer-motion';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { About } from '../sections/About';
import { Features } from '../sections/Features';
import TechStack from '../sections/TechStack';
import { Work } from '../sections/Work';
import Process from '../sections/Process';
import { Testimonials } from '../sections/Testimonials';
import { ContactCTA } from '../sections/ContactCTA';

function Home() {
  return (
    <div className="relative min-h-screen text-[var(--text-color)] selection:bg-[#0D6EFD] selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(13,110,253,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0D6EFD]/10 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10">
        <Hero />
        <Services />
            <Work />
        <About />
        <Features />
        <TechStack />
    
        <Process />
        <Testimonials />
        <ContactCTA />
      </div>
    </div>
  );
}

export default Home;