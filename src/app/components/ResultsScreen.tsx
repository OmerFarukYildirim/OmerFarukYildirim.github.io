import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ResultsScreen({ score, totalQuestions, onRestart }: ResultsScreenProps) {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage === 100) {
      return {
        title: "Kusursuz Skor! 🎉",
        message: "Her şeyi hatırlıyorsun! Anılarımız benim için her şey demek, tıpkı senin gibi. ❤️",
        emoji: "🥰"
      };
    } else if (percentage >= 70) {
      return {
        title: "Harika! 💖",
        message: "Çok iyisin! Paylaştığımız bu anılar çok değerli, her gün yenilerini eklemeyi seviyorum.",
        emoji: "😍"
      };
    } else {
      return {
        title: "Güzel Deneme! 💕",
        message: "Bazı detaylar uçup gitse de sana olan aşkım asla bitmez. Hadi yeni anılar biriktirelim!",
        emoji: "🥰"
      };
    }
  };

  const result = getMessage();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          <div className="relative inline-block">
            <Heart className="w-32 h-32 text-pink-500 fill-pink-500 mx-auto" />
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-pink-600">
            {result.title}
          </h1>
          <div className="text-6xl mb-6">{result.emoji}</div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-300"
        >
          <div className="mb-6">
            <div className="text-6xl font-bold text-pink-600 mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: totalQuestions }, (_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < score
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300 fill-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xl text-gray-700">
              {result.message}
            </p>
          </div>

          <motion.div
            className="border-t-2 border-pink-200 pt-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-2xl text-pink-600 mb-4">
            "Seninle olan her an bir hazine. Nice güzel anılarımıza! 💑"
            </p>
            <p className="text-gray-600 italic">
            - Tüm kalbimle, daima ❤️
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
           Tekrar Oyna 💕
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
