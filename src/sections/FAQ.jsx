import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Card } from '../components/Card';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What kind of technologies do you use?',
      answer: 'We specialize in modern stacks including React, Next.js, Node.js, and Python for AI/ML. Our infrastructure is primarily built on AWS and Google Cloud with high-performance edge deployment.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Small projects usually take 4-8 weeks, while large enterprise transformations can span 6-12 months. We use agile methodologies to deliver value incrementally throughout the process.'
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes, we provide 24/7 maintenance and support packages to ensure your systems remain secure, updated, and optimized for performance as your user base grows.'
    },
    {
      question: 'Can you integrate AI into our existing products?',
      answer: 'Absolutely. We specialize in retrofitting legacy applications with modern AI capabilities, from recommendation engines to automated data processing and predictive analytics.'
    },
    {
      question: 'Is my data secure with your solutions?',
      answer: 'Security is at the core of everything we build. We implement end-to-end encryption, SOC 2 compliance standards, and regular penetration testing to ensure maximum data protection.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p>Everything you need to know about our process and technology.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <Card 
              key={i} 
              className="p-0 overflow-hidden cursor-pointer hover:border-primary/20"
              hover={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <div className={openIndex === i ? "text-primary" : "text-gray-900/20"}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-900/60 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
