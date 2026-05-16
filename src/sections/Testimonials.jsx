import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import nancyImg from '../assets/works/nancy.png';
import ritualsImg from '../assets/works/rituals.png';
import zeazhImg from '../assets/works/zeazh.png';
import thzedImg from '../assets/works/thzed.png';
import aimaireImg from '../assets/works/aimaire.png';

const testimonials = [
  {
    quote: "GOFS Tech transformed our online presence completely. Our commercial kitchen equipment website now generates 3x more leads. Professional, timely, and highly skilled team.",
    name: "Nancy Joseph",
    role: "Founder · Nancy Equipments",
    image: nancyImg
  },
  {
    quote: "The e-commerce platform they built for our Ayurvedic hair care brand exceeded all expectations. The admin dashboard makes inventory management so easy. Highly recommended!",
    name: "Rituals Team",
    role: "Founder · Reverse Rituals",
    image: ritualsImg
  },
  {
    quote: "Our digital agency website looks stunning! The animations and responsive design are flawless. GOFS team truly understands modern web development.",
    name: "Zeazh Team",
    role: "CEO · Zeazh Digital Agency",
    image: zeazhImg
  },
  {
    quote: "Professional academic portfolio website for our PhD research services. Clean design, easy navigation, and excellent client experience. Will collaborate again!",
    name: "Thzed Team",
    role: "Founder · Thzed PhD Services",
    image: thzedImg
  },
  {
    quote: "Premium corporate website for our commercial interior business. Lead generation has increased significantly since the launch. Great work!",
    name: "Aimaire Team",
    role: "Director · Aimaire Inc",
    image: aimaireImg
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD]" />
            Testimonials
          </div>

          <h2 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Loved by <span className="text-[#0D6EFD]">Clients</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card hover={false} className="bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg p-12 rounded-none relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
              <div className="absolute top-10 left-10 text-[180px] font-bold text-[#0D6EFD]/5 leading-none pointer-events-none select-none">
                "
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#0D6EFD] text-[#0D6EFD]" />
                  ))}
                </div>

                <div className="relative min-h-[180px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <blockquote className="text-xl md:text-3xl font-black text-[var(--text-color)] leading-tight mb-10 tracking-tight">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none overflow-hidden border border-white/10 flex-shrink-0">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div>
                          <p className="text-lg font-black text-[var(--text-color)]">{testimonials[currentIndex].name}</p>
                          <p className="text-[var(--text-muted)] text-[10px] font-bold font-mono uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex items-center justify-between mt-12 px-6">
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#0D6EFD]' : 'w-2 bg-[var(--card-border)]'
                    }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-none border border-[var(--card-border)] flex items-center justify-center text-[var(--text-color)] hover:bg-[#0D6EFD] hover:border-[#0D6EFD] hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-none border border-[var(--card-border)] flex items-center justify-center text-[var(--text-color)] hover:bg-[#0D6EFD] hover:border-[#0D6EFD] hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};