import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: 'Active Users', value: '500K+', description: 'Growing every month' },
    { label: 'Projects Done', value: '1,200+', description: 'Across 20 countries' },
    { label: 'Client Rating', value: '4.9/5', description: 'Based on 500 reviews' },
    { label: 'Success Rate', value: '99%', description: 'Proven track record' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-900/40">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
