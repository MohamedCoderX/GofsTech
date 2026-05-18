import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Target, Zap, Award, CheckCircle, TrendingUp, Globe, Mail, Phone } from 'lucide-react';
import gofsLogo from '../assets/gofs-logo.png';
import gofsWord from '../assets/gofs-word.jpg';
import { SEOHead } from '../hooks/useSEO';

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About GOFS Tech – Our Story",
  "url": "https://gofstech.com/about",
  "description": "Learn the story of GOFS Tech — a digital agency founded from passion, persistence and friendship. From HTML freelancing to full-stack MERN solutions.",
  "inLanguage": "en-IN",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gofstech.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://gofstech.com/about" }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "GOFS Tech",
    "alternateName": "Group of Friends Solutions",
    "foundingDate": "2021",
    "founder": { "@type": "Person", "name": "Mohamed Ibrahim" },
    "url": "https://gofstech.com",
    "logo": "https://gofstech.com/gofs-logo.png"
  }
};

function AboutPage() {
  const stats = [
    { value: '10+', label: 'Projects Delivered' },
    { value: '10+', label: 'Happy Clients' },
    { value: '6+', label: 'Industries Served' },
    { value: '5+', label: 'Years Experience' }
  ];

  const services = [
    { icon: <Globe />, title: 'Web Development', desc: 'Custom websites, e-commerce platforms, web applications built with modern technologies' },
    { icon: <Zap />, title: 'App Development', desc: 'Native & cross-platform mobile apps for iOS and Android with exceptional user experience' },
    { icon: <Target />, title: 'AI & Automation', desc: 'Smart automation solutions including chatbots, voice bots, and workflow automation' },
    { icon: <TrendingUp />, title: 'Digital Marketing', desc: 'SEO, social media marketing, Google & Meta ads for business growth' },
    { icon: <Award />, title: 'UI/UX Design', desc: 'User-centered design that converts visitors into customers with beautiful interfaces' },
    { icon: <Users />, title: 'Full Stack Development', desc: 'End-to-end MERN stack applications with complete backend and database solutions' }
  ];

  return (
    <>
      <SEOHead
        title="About Us – Our Story & Mission"
        description="GOFS Tech was founded by Mohamed Ibrahim — from Telegram cold DMs to full-stack MERN solutions. Discover our journey, team, and capabilities in web, app, AI & digital marketing."
        path="/about"
        keywords="about GOFS Tech, Mohamed Ibrahim, digital agency story, MERN stack team India, web development company"
        structuredData={aboutStructuredData}
      />
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-medium tracking-[0.15em] uppercase mb-6 font-mono">
            About GOFS Tech
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Our <span className="text-[#0D6EFD]">Story</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto text-center mb-12">
            <img src={gofsLogo} alt="GOFS Logo" className="w-24 h-24 mx-auto mb-6" />
            <h2 className="text-2xl md:text-5xl font-black text-[var(--text-color)] mb-10" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Our Journey
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              At GOFS Tech, our journey started with a simple goal and one determined founder — <strong>Group Of Friends</strong>.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              What began as a small freelancing journey slowly turned into a growing creative tech team driven by passion, learning, and consistency. In the early days, Mohamed started by approaching people through Telegram groups, searching for anyone who needed a website. There were failures, ignored messages, and even clients who disappeared after work was completed — but every setback became motivation to improve.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              One of the first projects was a simple gaming tournament website built using only HTML and CSS. That small project sparked a bigger vision: to build something meaningful, create opportunities for others, and one day see GOFS Tech hiring talented students and developers.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              The journey wasn't easy. Countless nights were spent learning, watching videos about client acquisition, sales, freelancing strategies, business workflows, and web development. From sending cold DMs and making calls late into the night to finally landing the first paying client — every step taught valuable lessons.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              The first successful project brought in ₹7,000, but more importantly, it brought confidence. From there, the focus shifted toward improving technical skills, learning full-stack development with the MERN stack, understanding deployment, managing clients professionally, and building complete digital solutions.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-left mt-6">
              As the vision grew, friends who shared the same passion joined the journey. Together, the team evolved into a group of designers, developers, digital marketers, and sales professionals working toward one mission — building impactful digital experiences for businesses.
            </p>
            <p className="text-[#0D6EFD] leading-relaxed text-left mt-8 font-black uppercase tracking-widest text-sm font-mono italic">
              "Group of Friends Solutions"
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-none">
              <div className="text-3xl md:text-6xl font-black text-[var(--text-color)] mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-[var(--text-muted)] text-[10px] font-bold font-mono uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-5xl font-black text-[var(--text-color)] mb-12 text-center" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-8 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#0D6EFD]/30 transition-all rounded-none">
                <div className="w-14 h-14 rounded-none bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[#0D6EFD] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-[var(--text-color)] mb-3" style={{ fontFamily: "'Unbounded', sans-serif" }}>{service.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-10 md:p-20 max-w-5xl mx-auto rounded-none">
            <h2 className="text-2xl md:text-5xl font-black text-[var(--text-color)] mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Let's Build <span className="text-[#0D6EFD]">Together</span>
            </h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              GOFS Tech is more than a company — it's a journey built from persistence, teamwork, and the dream of creating opportunities for others.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-bold px-10 py-5 transition-all rounded-none uppercase tracking-widest text-xs font-mono hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
              >
                Get in Touch <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/works"
                className="inline-flex items-center border-2 border-[var(--card-border)] text-[var(--text-color)] font-bold px-10 py-5 hover:bg-[var(--card-bg)] transition-all rounded-none uppercase tracking-widest text-xs font-mono"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default AboutPage;