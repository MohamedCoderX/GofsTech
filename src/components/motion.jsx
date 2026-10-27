import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-3d.webp';
import { cn } from '../utils/cn';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(pointer: fine)').matches;

// Adds .in to every .reveal element as it scrolls into view.
export function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const all = [...document.querySelectorAll('.reveal:not(.in)')];
    if (reduced() || !('IntersectionObserver' in window)) {
      all.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    // Reveal whatever is already on screen right away, observe the rest.
    const els = all.filter((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) { el.classList.add('in'); return false; }
      return true;
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

export function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...rest }) {
  return (
    <Tag className={cn('reveal', className)} style={{ ...style, '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

// Pointer-driven 3D tilt. Inert on touch devices and with reduced motion.
export function Tilt({ max = 8, className, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !finePointer()) return undefined;
    let raf = 0;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(1100px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
        el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
        el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
      });
    };
    const leave = () => { cancelAnimationFrame(raf); el.style.transform = ''; };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, [max]);
  return (
    <div ref={ref} className={cn('relative transition-transform duration-500 ease-out will-change-transform [transform-style:preserve-3d]', className)}>
      {children}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [background:radial-gradient(500px_circle_at_var(--gx,50%)_var(--gy,50%),rgb(255_255_255/0.09),transparent_45%)] group-hover:opacity-100" />
    </div>
  );
}

// The GOFS mark extruded into real 3D: stacked layers on the Z axis,
// slowly turning and leaning toward the pointer.
const LAYERS = 18;
export function Logo3D({ className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return undefined;
    let tx = 0; let ty = 0; let cx = 0; let cy = 0; let t = 0; let raf = 0;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 30;
      ty = (e.clientY / window.innerHeight - 0.5) * -20;
    };
    const loop = () => {
      t += 0.004;
      cx += (tx - cx) * 0.05; cy += (ty - cy) * 0.05;
      el.style.transform = `rotateX(${(12 + cy).toFixed(2)}deg) rotateY(${(Math.sin(t) * 28 + cx).toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className={cn('relative [perspective:1400px]', className)} aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-brand/30 blur-[90px]" />
      <div ref={ref} className="relative size-full [transform-style:preserve-3d]" style={{ transform: 'rotateX(12deg) rotateY(-18deg)' }}>
        {Array.from({ length: LAYERS }, (_, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            width="606"
            height="543"
            className="absolute inset-0 size-full object-contain"
            style={{
              transform: `translateZ(${(i - LAYERS / 2) * 2.2}px)`,
              filter: i === LAYERS - 1 ? 'none' : `brightness(${0.25 + (i / LAYERS) * 0.45}) saturate(1.2)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Marquee({ items, className }) {
  const row = [...items, ...items];
  return (
    <div className={cn('relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]', className)}>
      <div className="flex w-max animate-marquee gap-14 py-1 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-14 whitespace-nowrap font-display text-[28px] font-medium tracking-tight text-fg-2 md:text-[40px]" aria-hidden={i >= items.length}>
            {item}
            <span className="size-2 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
