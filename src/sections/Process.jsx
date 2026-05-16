import { motion } from 'framer-motion';
import { Card } from '../components/Card';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-dive workshops to understand your business and audience.',
    side: 'left'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Roadmap, sprints, milestones and success metrics defined.',
    side: 'right'
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description: 'Pixel-perfect prototypes designed to convert and delight.',
    side: 'left'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Production-grade code shipped in agile weekly iterations.',
    side: 'right'
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Automated + manual QA across devices and edge cases.',
    side: 'left'
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'Zero-downtime launches with monitoring and CI/CD.',
    side: 'right'
  },
  {
    number: '07',
    title: 'Support & Scaling',
    description: 'Continuous optimisation and 24/7 dedicated support.',
    side: 'left'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-14 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:mb-32 mb-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Process
          </div>

          <h2 className="text-3xl md:text-7xl font-black text-[var(--text-color)] tracking-tight leading-[1.05]">
            From idea to launch <br />
            in <span className="text-[#0D6EFD] italic">7 steps.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--card-border)] -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => {
              const isEven = step.side === 'left';
              return (
                <div key={i} className="relative flex flex-col md:flex-row w-full items-center">
                  {/* Timeline Dot with Pulse Animation */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0D6EFD] z-10 shadow-[0_0_15px_rgba(13,110,253,0.5)]">
                    <div className="absolute inset-0 bg-[#0D6EFD] animate-ping opacity-75" />
                  </div>

                  {/* Card Wrapper */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pr-16 md:justify-end' : 'md:pl-16 md:ml-auto md:justify-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                      className="w-[400px] max-w-full"
                    >
                      <Card
                        hover={false}
                        glowColor="#0D6EFD"
                        className="bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg p-6 hover:shadow-[0_0_20px_rgba(217,255,0,0.2)] hover:border-[#0D6EFD]/30 transition-all group rounded-none"
                      >
                        <p className={`text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          STEP &middot; {step.number}
                        </p>
                        <h3 className={`text-2xl font-black text-[var(--text-color)] mb-3 tracking-tight ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[var(--text-muted)] text-xs leading-relaxed font-medium ${isEven ? 'md:text-right ml-auto' : 'md:text-left mr-auto'}`}>
                          {step.description}
                        </p>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
