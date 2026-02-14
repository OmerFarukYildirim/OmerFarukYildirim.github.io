import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            rotate: Math.random() * 360,
            scale: 0.3 + Math.random() * 0.7,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360 + 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <Heart
            className="text-pink-300 fill-pink-300 opacity-20"
            size={20 + Math.random() * 30}
          />
        </motion.div>
      ))}
    </div>
  );
}
