import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { cn } from '../utils/cn';
import logo from "../assets/gofs-logo.png"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8 pointer-events-none">
      <nav
        className={cn(
          "max-w-[1280px] mx-auto flex items-center justify-between pointer-events-auto",
          "transition-all duration-500 ease-in-out px-6 py-3",
          "glass shadow-sm rounded-none",
          isScrolled ? "translate-y-1 shadow-xl bg-transparent/80 dark:bg-transparent/80" : "translate-y-0"
        )}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 " />
          </Link>
        </motion.div>

        {/* Desktop Links - Centered - JetBrains Mono */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className="text-[11px] font-bold tracking-[0.2em] text-[var(--text-muted)] hover:text-[#0D6EFD] transition-all duration-300 relative group font-mono uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#0D6EFD] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link to="/contact">
            <Button
              className="rounded-none bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-bold px-6 py-2.5 h-auto flex items-center gap-2 text-[11px] tracking-widest shadow-lg hover:shadow-[0_0_20px_rgba(217,255,0,0.4)] transition-all duration-300 font-mono uppercase"
            >
              Book Consultation <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 hover:bg-[#0D6EFD]/20 transition-colors text-[var(--text-color)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden mt-6 px-2 pointer-events-auto"
          >
            <div className="bg-[var(--glass-bg)] backdrop-blur-2xl border border-[var(--card-border)] shadow-2xl p-8 flex flex-col items-center gap-8 rounded-none">
              <nav className="flex flex-col items-center gap-6 font-mono">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-bold text-[var(--text-muted)] hover:text-[#0D6EFD] transition-all uppercase tracking-[0.2em]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="w-full h-[1px] bg-[var(--card-border)]" />

              <Link to="/contact" className="w-full">
                <Button
                  className="w-full justify-center bg-[#0D6EFD] text-white font-bold py-4 text-xs rounded-none hover:shadow-[0_0_20px_rgba(217,255,0,0.4)] transition-all font-mono uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Button>
              </Link>

              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


