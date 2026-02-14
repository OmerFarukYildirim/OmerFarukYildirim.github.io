import { motion } from 'motion/react';
import { Heart, Brain, Home, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface MainMenuProps {
  onSelectActivity: (activity: 'garden' | 'quiz') => void;
}

export function MainMenu({ onSelectActivity }: MainMenuProps) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
        >
          <Heart className="w-28 h-28 text-pink-500 fill-pink-500 mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 text-pink-600 font-bold">
  Sevgililer Günümüz Kutlu Olsun 💕
</h1>
<p className="text-xl md:text-2xl text-gray-700 mb-4">
 Bu site bizim gülüm
</p>
<div className="flex items-center justify-center gap-2 text-pink-500">
  <Sparkles className="fill-pink-500" />
  <p className="text-lg">Aşağıdan birini seç bakim</p>
  <Sparkles className="fill-pink-500" />
</div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Heart Garden Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button
              onClick={() => onSelectActivity('garden')}
              className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-300 hover:border-pink-400 transition-colors text-left"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-6 rounded-full">
                  <Heart className="w-12 h-12 text-white fill-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-pink-600 mb-3 text-center">
                Kalp Bahçesi 🌸
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Buraya basarsan kalp bahçemizin kapıları açılır
              </p>
              <div className="flex justify-center">
                <span className="text-pink-500 text-sm font-semibold">
                  Tıkla
                </span>
              </div>
            </button>
          </motion.div>

          {/* Memory Quiz Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button
              onClick={() => onSelectActivity('quiz')}
              className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-300 hover:border-purple-400 transition-colors text-left"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-6 rounded-full">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-purple-600 mb-3 text-center">
                Hafıza Quizi 🎯
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Bakalım ne kadar hatırlıyoruz
              </p>
              <div className="flex justify-center">
                <span className="text-purple-500 text-sm font-semibold">
                  Quize Başla →
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-600 text-lg mt-8"
        >
          Sonsuz aşkla yapıldı ❤️ Şubat 14, 2026
        </motion.p>
      </div>
    </motion.div>
  );
}
