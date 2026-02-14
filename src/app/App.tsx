import { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { Confetti } from './components/Confetti';
import { DoYouLoveMe } from './components/DoYouLoveMe';
import { MainMenu } from './components/MainMenu';
import { HeartGarden } from './components/HeartGarden';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultsScreen } from './components/ResultsScreen';

const quizData = [
  {
    question: "İlk datemizde üstümdekinin rengi neydi? 🌟",
    options: [
      "siyah",
      "krem",
      "beyaz",
      "kahverengi"
    ],
    correctAnswer: 0, 
  },
  {
    question: "İlk izlediğimiz filmin türü neydi? 🎬",
    options: [
      "Romantik komedi",
      "Aksiyon filmi",
      "Korku filmi",
      "Animasyon filmi"
    ],
    correctAnswer: 0,
  },
  {
    question: "Sende en sevdiğim şey? 💝",
    options: [
      "Gülüşün",
      "Zeki minnak olman",
      "Dürüst aşk olman",
      "Her şey!"
    ],
    correctAnswer: 3,
  },
  {
    question: "Hangi şarkı beni sana hatırlatır? 🎵",
    options: [
      "Keşke - yalın",
      "Dilerim ki - dktt",
      "Lafügüzaf - Gökhan Türkmen",
      "Neyleyim İstanbulu - Murat D."
    ],
    correctAnswer: 0,
  },
  {
    question: "Beraber yapmayı en sevdiğin şey? 💑",
    options: [
      "Beraber yemek yapmak",
      "Yürüyüş yapmak",
      "Dizi izlemek",
      "PS5 oynamak"
    ],
    correctAnswer: 0,
  },
];

type Screen = 'do-you-love-me' | 'menu' | 'garden' | 'quiz-welcome' | 'quiz' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('do-you-love-me');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStart = () => {
    setScreen('quiz');
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setScreen('results');
      }
    }, 1000);
  };

  const handleRestart = () => {
    setScreen('quiz-welcome');
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleSelectActivity = (activity: 'garden' | 'quiz') => {
    if (activity === 'garden') {
      setScreen('garden');
    } else {
      setScreen('quiz-welcome');
    }
  };

  const handleBackToMenu = () => {
    setScreen('menu');
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleYesClick = () => {
    setScreen('menu');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 relative overflow-hidden">
      {screen !== 'garden' && screen !== 'do-you-love-me' && <FloatingHearts />}
      <Confetti show={showConfetti} />
      
      <div className="relative z-10">
        {screen === 'do-you-love-me' && <DoYouLoveMe onYesClick={handleYesClick} />}
        
        {screen === 'menu' && <MainMenu onSelectActivity={handleSelectActivity} />}
        
        {screen === 'garden' && <HeartGarden onBack={handleBackToMenu} />}
        
        {screen === 'quiz-welcome' && <WelcomeScreen onStart={handleStart} />}
        
        {screen === 'quiz' && (
          <QuizQuestion
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            correctAnswer={quizData[currentQuestion].correctAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={quizData.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {screen === 'results' && (
          <ResultsScreen
            score={score}
            totalQuestions={quizData.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}