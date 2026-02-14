import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
        >
          <Heart className="w-24 h-24 text-pink-500 fill-pink-500 mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-pink-600">
            Sevgililer Günümüz Kutlu Olsun 💕
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
           Sana özel bir şeyler hazırladım 💕
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-300"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl text-pink-600">Hafıza Testimiz 🧠</h2>
            <Sparkles className="text-yellow-500 fill-yellow-500" />
          </div>
          <p className="text-gray-600 mb-6">
            Hafızamızı biraz test edelim! Seninle olan özel anılarımızı hatırlıyor musun?
          </p>
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
            Quize Hazırsan Goo 💖
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-500 text-sm"
        >
          Sonsuz aşkla yapıldı ❤️
        </motion.p>
      </div>
    </motion.div>
  );
}
