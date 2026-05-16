import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden group font-mono uppercase text-xs";
  
  const variants = {
    primary: "bg-[#0D6EFD] text-white hover:bg-[#2563EB] hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]",
    secondary: "bg-[var(--text-color)] text-[var(--bg-color)] hover:opacity-90",
    outline: "border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white",
    ghost: "text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--card-bg)]",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--text-color)] via-[var(--card-bg)] to-[var(--text-color)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      )}
    </motion.button>
  );
};
