import { useRef } from 'react';

// Order matches the reference image exactly
const techs = [
  'AI APIs', 'Python', 'Docker', 'React.js', 'Next.js',
  'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Firebase',
  'PostgreSQL', 'AWS', 'Framer Motion', 'Figma', 'GraphQL',
];

const TechPill = ({ name }) => (
  <div className="flex-shrink-0 flex items-center gap-4 px-10 py-5 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-none text-lg font-bold text-[var(--text-muted)] hover:text-[var(--text-color)] hover:border-[#0D6EFD] hover:bg-[var(--card-bg)] transition-all duration-300 cursor-default group whitespace-nowrap">
    <div className="w-2.5 h-2.5 rounded-none bg-[var(--text-muted)] opacity-20 group-hover:bg-[#0D6EFD] group-hover:opacity-100 transition-colors duration-300 flex-shrink-0" />
    {name}
  </div>
);

const TechStack = () => {
  const trackRef = useRef(null);

  // Pause on hover
  const pause = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

  return (
    <section className="py-14 relative overflow-hidden bg-transparent">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD]" />
          Our Stack
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-color)] tracking-tight leading-tight">
          Built with the world's{' '}
          <span className="text-[#0D6EFD] italic">most loved</span> tech.
        </h2>
      </div>

      {/* Marquee track */}
      <div
        className="relative flex overflow-hidden py-4"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 md:w-40 w-[70px] bg-gradient-to-r from-[var(--bg-color)] via-[var(--bg-color)]/80 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 md:w-40 w-[70px] bg-gradient-to-l from-[var(--bg-color)] via-[var(--bg-color)]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling row */}
        <div
          ref={trackRef}
          className="flex gap-5 animate-marquee"
          style={{ willChange: 'transform' }}
        >
          {/* Triple the list so the loop is seamless at any viewport width */}
          {[...techs, ...techs, ...techs].map((tech, idx) => (
            <TechPill key={idx} name={tech} />
          ))}
        </div>
      </div>

      {/* Inject keyframe animation via <style> */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
