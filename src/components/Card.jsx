import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Card = ({
  children,
  className,
  style,
  glow = false,
  hoverGlow = false,
  hover = true,
  cursorGlow = true, // Enabled by default to give all cards the effect
  glowColor = '#0D6EFD'
}) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cursorGlow) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    if (!cursorGlow) return;
    setIsHovered(false);
    setPos({ x: 50, y: 50 });
  };

  const handleMouseEnter = () => {
    if (!cursorGlow) return;
    setIsHovered(true);
  };

  // Combine static styles with dynamic border color if cursor glow is active and hovered
  const combinedStyle = {
    ...style,
    ...(cursorGlow && isHovered ? { borderColor: `${glowColor}50` } : {})
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      style={combinedStyle}
      className={cn(
        "glass-card rounded-none p-6 transition-all duration-300 relative overflow-hidden",
        (glow || hoverGlow) && "glow-border",
        className
      )}
    >
      {/* Global Cursor-following glow blob */}
      {cursorGlow && (
        <div
          className="absolute pointer-events-none w-[300px] h-[300px] rounded-full blur-[100px] z-0"
          style={{
            background: glowColor,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isHovered ? 0.15 : 0,
            transition: isHovered
              ? 'left 0.1s ease-out, top 0.1s ease-out, opacity 0.5s ease'
              : 'opacity 0.5s ease',
          }}
        />
      )}

      {children}
    </motion.div>
  );
};
