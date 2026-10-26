import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/img/logo.webp';
import { Button } from './ui';
import { cn } from '../utils/cn';

const NAV = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          'mx-auto flex h-[60px] max-w-[1320px] items-center justify-between gap-6 rounded-full border px-3 pl-5 transition-all duration-500',
          scrolled || open ? 'border-line bg-surface/80 shadow-[0_10px_30px_-20px_rgb(11_13_18/0.25)] backdrop-blur-xl' : 'border-transparent bg-transparent',
        )}
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="GOFS Tech home">
          <img src={logo} alt="" width="34" height="30" className="h-[26px] w-auto" />
          <span className="font-display text-[18px] font-semibold tracking-tight">GOFS Tech</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('rounded-full px-4 py-2 text-[14px] transition-colors', isActive ? 'bg-fg/[0.06] text-fg' : 'text-fg-2 hover:text-fg')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/book" className="px-5 py-2.5 text-[14px]">Book a call</Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto mt-2 max-w-[1320px] rounded-[28px] border border-line bg-bg/95 p-6 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="block border-b border-line py-4 font-display text-3xl font-medium tracking-tight">
              {item.label}
            </Link>
          ))}
          <Button to="/book" className="mt-6 w-full">Book a call</Button>
        </nav>
      )}
    </header>
  );
}
