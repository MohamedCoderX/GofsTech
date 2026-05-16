// No imports needed for this version

export const TrustedCompanies = () => {
  const companies = [
    'TechFlow', 'Quantum', 'Nexus AI', 'Aether', 'Synergy', 'Visionary', 'Apex', 'Horizon'
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <p className="text-[10px] font-black text-gray-900/20 tracking-[0.4em] uppercase">
          Trusted by high-growth startups globally
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap items-center">
          {[...companies, ...companies].map((name, i) => (
            <div 
              key={i}
              className="text-2xl md:text-3xl font-black text-gray-900/10 hover:text-gray-900 transition-all duration-500 cursor-default flex items-center gap-4 group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-50 group-hover:bg-primary transition-colors" />
              <span className="tracking-tighter">{name}</span>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
};
