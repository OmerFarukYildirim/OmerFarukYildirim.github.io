import { useState, useRef, useEffect } from 'react';
import './DoYouLoveMe.css';

interface DoYouLoveMeProps {
  onYesClick: () => void;
}

export function DoYouLoveMe({ onYesClick }: DoYouLoveMeProps) {
  const [showResult, setShowResult] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (questionContainerRef.current && noButtonRef.current) {
      setNoButtonPosition({ x: 0, y: 0 });
    }
  }, []);

  const handleNoButtonHover = () => {
    if (questionContainerRef.current) {
      const nextCount = noClickCount + 1;
      setNoClickCount(nextCount);

      // 5. denemeden sonra artık state üzerinden pozisyonu değil, 
      // CSS animasyonunu yöneteceğiz.
      if (nextCount >= 10) return;

      const containerWidth = questionContainerRef.current.offsetWidth;
      const containerHeight = questionContainerRef.current.offsetHeight;
      
      const newX = Math.floor(Math.random() * (containerWidth - 50));
      const newY = Math.floor(Math.random() * (containerHeight - 300));
      
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = () => {
    setShowResult(true);
    setTimeout(() => {
      onYesClick();
    }, 2000);
  };

  return (
    <div className="do-you-love-me-wrapper">
      {!showResult ? (
        <div className="question-container-custom container-custom" ref={questionContainerRef}>
          <video className="local-gif" src="/reply-me-love.mp4" autoPlay muted loop />
          <h2 className="question-custom">Beni Seviyor musun?</h2>
          
          <div className="button-container-custom" style={{ position: 'relative', height: '150px' }}>
            {/* YES BUTONU */}
            <button 
              className="yes-btn-custom btn-custom"
              onClick={handleYesClick}
              style={{
                position: 'relative',
                zIndex: noClickCount >= 10 ? 20 : 2
              }}
            >
              Evet
            </button>

            {/* NO BUTONU */}
            <button 
              ref={noButtonRef}
              // 5. kezde 'no-btn-surrender' sınıfını ekleyerek animasyonu başlatıyoruz
              className={`no-btn-custom btn-custom ${noClickCount >= 10 ? 'no-btn-surrender' : ''}`}
              onMouseEnter={handleNoButtonHover}
              style={{
                position: 'absolute',
                // 5. adımdan sonra pozisyonu CSS'e bırakıyoruz
                left: noClickCount >= 10 ? '50%' : `${noButtonPosition.x}px`,
                top: noClickCount >= 10 ? '50%' : `${noButtonPosition.y}px`,
                zIndex: noClickCount >= 10 ? 5 : 10,
                opacity: noClickCount >= 10 ? 0.6 : 1
              }}
            >
              Hayır
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container-custom container-custom">
          <video className="gif-result" src="/love-me.mp4" autoPlay loop />
          <h2>Başka ihtimal olmadığını ikimizde biliyoruz :D Şimdi gidiyoruz 😍!</h2>
        </div>
      )}

      {/* Heart Loader */}
      <div className="cssload-main">
        <div className="cssload-heart"><span className="cssload-heartL"></span><span className="cssload-heartR"></span><span className="cssload-square"></span></div>
        <div className="cssload-shadow"></div>
      </div>
    </div>
  );
}