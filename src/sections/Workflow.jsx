import { motion } from 'framer-motion';
import { Card } from '../components/Card';

export const Workflow = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'Deep-dive workshops to understand your business and audience.',
      step: '01',
      side: 'left'
    },
    {
      title: 'Planning',
      description: 'Roadmap, sprints, milestones and success metrics defined.',
      step: '02',
      side: 'right'
    },
    {
      title: 'UI/UX Design',
      description: 'Pixel-perfect prototypes designed to convert and delight.',
      step: '03',
      side: 'left'
    },
    {
      title: 'Development',
      description: 'Production-grade code shipped in agile weekly iterations.',
      step: '04',
      side: 'right'
    },
    {
      title: 'Testing',
      description: 'Automated + manual QA across devices and edge cases.',
      step: '05',
      side: 'left'
    },
    {
      title: 'Deployment',
      description: 'Zero-downtime launches with monitoring and CI/CD.',
      step: '06',
      side: 'right'
    },
    {
      title: 'Support & Scaling',
      description: 'Continuous optimisation and 24/7 dedicated support.',
      step: '07',
      side: 'left'
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-gray-100 text-[10px] font-black tracking-[0.3em] text-gray-900/40 uppercase mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Process
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
            From idea to launch <br />
            in <span className="text-primary italic">7 steps.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05]" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  step.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Card Side */}
                <div className="w-[45%]">
                  <Card hover={false} className={`bg-white border border-gray-200 shadow-lg p-10 cursor-default hover:shadow-xl transition-all ${step.side === 'left' ? 'text-right' : 'text-left'}`}>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-3">
                      STEP &middot; {step.step}
                    </p>
                    <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className={`text-gray-900/40 text-sm leading-relaxed font-medium max-w-[320px] ${step.side === 'left' ? 'ml-auto' : 'mr-auto'}`}>
                      {step.description}
                    </p>
                  </Card>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(217,255,0,0.5)] z-10" />

                {/* Empty Side */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
