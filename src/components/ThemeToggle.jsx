import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center w-12 h-12 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[#0D6EFD] transition-all duration-500 rounded-none shadow-[var(--shadow-premium)] overflow-hidden animate-glow-blink hover:animate-none"
      aria-label="Toggle theme"
    >
      {/* Animated Background Highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D6EFD]/0 via-[#0D6EFD]/5 to-[#0D6EFD]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      <div className="relative flex items-center justify-center w-6 h-6 z-10">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-[#0D6EFD]" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: !isDark ? 1 : 0,
            rotate: !isDark ? 0 : -90,
            opacity: !isDark ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-[#0D6EFD]" />
        </motion.div>
      </div>
    </button>
  );
}