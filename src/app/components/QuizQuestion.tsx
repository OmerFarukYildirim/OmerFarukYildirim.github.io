import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export function QuizQuestion({
  question,
  options,
  correctAnswer,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-pink-600 font-semibold">
              Soru {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-gray-500 text-sm">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
        >
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-800 text-center">
            {question}
          </h2>

          <div className="space-y-4">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => onAnswer(index === correctAnswer)}
                  className="w-full text-left p-6 text-lg bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 text-gray-800 border-2 border-pink-300 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                  variant="outline"
                >
                  <span className="font-semibold text-pink-600 mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
