import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Home, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface HeartGardenProps {
  onBack: () => void;
}

interface BloomingHeart {
  id: number;
  x: number;
  y: number;
  message: string;
  color: string;
  type: 'heart' | 'photo'; // Add type to differentiate between heart and photo
  photoUrl?: string; // Optional photo URL
}


const couplePhotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg"
];

const loveMessages = [
  "Kalbim her an senin için çarpıyor 💓",
  "Seninle geçen her gün bir hediye 🎁",
  "Dünyadaki en sevdiğim insansın 🌍",
  "Gülüşünü her şeyden çok seviyorum 😊",
  "Sen her şeyi güzelleştiriyorsun ✨",
  "Sana sahip olduğum için çok şanslıyım 🍀",
  "Huzur bulduğum tek yer sensin 🏠",
  "Varlığın için her gün minnettarım 🙏",
  "Bulutlu günlerde bile benim güneşimsin ☀️",
  "Sana her gün yeniden aşık oluyorum 💕",
  "Başıma gelen en güzel şeysin 🌟",
  "Kalbim tamamen sana ait 💖",
  "Sen benim eksik parçamsın 🧩",
  "Seninle her anın kıymetini biliyorum ⏰",
  "Sen benim gerçekleşen rüyamısın 💭",
  "Seni dünyalar kadar seviyorum 🌙",
  "Sen benim her şeyimsin 💝",
  "İyi ki varsın aşkım 🌺",
  "Hayatı güzelleştirdiğin için teşekkürler 🌈",
  "Sonsuza kadar seninleyim 💍"
];

export function HeartGarden({ onBack }: HeartGardenProps) {
  const [hearts, setHearts] = useState<BloomingHeart[]>([]);
  const [heartId, setHeartId] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  const colors = [
    '#FF69B4', // Hot Pink
    '#FFB6C1', // Light Pink
    '#FF1493', // Deep Pink
    '#DB7093', // Pale Violet Red
    '#FFC0CB', // Pink
    '#FF85C1', // Salmon Pink
  ];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (showInstructions) setShowInstructions(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newHeart: BloomingHeart = {
      id: heartId,
      x,
      y,
      message: randomMessage,
      color: randomColor,
      type: 'heart' // Default to heart type
    };

    // Randomly choose to add a photo instead of a heart
    if (Math.random() < 0.5) { // 30% chance to add a photo
      newHeart.type = 'photo';
      newHeart.photoUrl = couplePhotos[Math.floor(Math.random() * couplePhotos.length)];
    }

    setHearts([...hearts, newHeart]);
    setHeartId(heartId + 1);

    // Remove heart after animation completes
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 4000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-2 border-pink-300 hover:bg-pink-50 rounded-full px-6"
          >
            <Home className="w-5 h-5 mr-2" />
            Menüye Dön
          </Button>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-pink-300">
            <span className="text-pink-600 font-semibold">
              💕 {hearts.length} tane kalp açıldı 🌸
            </span>
          </div>
        </div>
      </div>

      {/* Title */}
      <motion.div
        className="absolute top-24 left-0 right-0 z-10 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-2 drop-shadow-lg">
          Kalp Bahçemiz 🌸
        </h1>
        
      </motion.div>

      {/* Instructions */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-400 max-w-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-16 h-16 text-yellow-400 fill-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-pink-600 mb-3 text-center">
                Buraya bas 👆
              </h2>
              <p className="text-gray-700 text-center text-lg">
                Hepsi senin için açılacak 💕
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Garden Area */}
      <div
        className="min-h-screen cursor-pointer relative"
        onClick={handleClick}
        style={{ touchAction: 'none' }}
      >
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute pointer-events-none"
              style={{
                left: heart.x,
                top: heart.y,
              }}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0, y: -100 }}
              exit={{ scale: 0, opacity: 0, y: -200 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <div className="relative">
                {heart.type === 'photo' && heart.photoUrl ? (
                  // Photo with heart frame
                  <motion.div
                    className="relative"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    {/* Heart-shaped frame container */}
                    <div className="relative w-32 h-32">
                      {/* Photo */}
                      <img 
                        src={heart.photoUrl} 
                        alt="Our memory"
                        className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-pink-400"
                      />
                      {/* Heart overlay in corner */}
                      <div className="absolute -top-2 -right-2">
                        <Heart 
                          className="w-10 h-10"
                          style={{ color: heart.color, fill: heart.color }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Regular Heart Icon
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <Heart
                      className="w-16 h-16"
                      style={{ color: heart.color, fill: heart.color }}
                    />
                  </motion.div>
                )}

                {/* Message Bubble */}
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-xl border-2 border-pink-300">
                    <p className="text-sm font-semibold text-gray-800">
                      {heart.message}
                    </p>
                  </div>
                </motion.div>

                {/* Sparkles around heart */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: Math.cos(i * 2.1) * 40,
                      top: Math.sin(i * 2.1) * 40,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ 
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  >
                    <Sparkles 
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}