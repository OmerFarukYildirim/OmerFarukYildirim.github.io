import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ConfettiProps {
  show: boolean;
}

export function Confetti({ show }: ConfettiProps) {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    if (show) {
      setParticles(Array.from({ length: 50 }, (_, i) => i));
      const timer = setTimeout(() => setParticles([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((i) => {
        const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{ backgroundColor: color, left: startX, top: -20 }}
            initial={{ y: -20, rotate: 0, opacity: 1 }}
            animate={{
              y: window.innerHeight + 20,
              rotate: Math.random() * 720,
              x: startX + (Math.random() - 0.5) * 400,
              opacity: 0,
            }}
            transition={{
              duration: 2 + Math.random(),
              ease: 'easeIn',
            }}
          />
        );
      })}
    </div>
  );
}
