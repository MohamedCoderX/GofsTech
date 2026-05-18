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
import { SEOHead } from '../hooks/useSEO';

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GOFS Tech – Premium Digital Agency",
  "url": "https://gofstech.com/",
  "description": "GOFS Tech is a premium digital agency offering web development, mobile app development, AI automation, digital marketing and cloud solutions.",
  "inLanguage": "en-IN",
  "isPartOf": {
    "@type": "WebSite",
    "name": "GOFS Tech",
    "url": "https://gofstech.com"
  },
  "about": {
    "@type": "Organization",
    "name": "GOFS Tech",
    "url": "https://gofstech.com"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gofstech.com/"
      }
    ]
  }
};

function Home() {
  return (
    <>
      <SEOHead
        title="Premium Digital Agency – Web, App & AI Solutions"
        description="GOFS Tech builds high-performance websites, mobile apps, AI automations and digital marketing campaigns. From startups to enterprises — we deliver results."
        path="/"
        keywords="digital agency India, web development India, app development, AI automation, MERN stack, Next.js, React, e-commerce"
        structuredData={homeStructuredData}
      />

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
    </>
  );
}

export default Home;