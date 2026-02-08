
import React, { useState, useCallback } from 'react';
import Background from './components/Background';
import Envelope from './components/Envelope';
import MessageCard from './components/MessageCard';
import FloatingElements from './components/FloatingElements';
import { MESSAGE_CONFIG } from './constants';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpened) return;
    
    setIsOpened(true);
    
    // @ts-ignore
    if (window.confetti) {
      // @ts-ignore
      window.confetti({
        particleCount: 180,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#a78bfa', '#22d3ee', '#ffffff'],
        ticks: 300
      });
    }

    // Delay reveal to sync with envelope animations
    setTimeout(() => {
      setIsRevealed(true);
      setTimeout(() => setShowFloating(true), 1200);
    }, 1000);
  }, [isOpened]);

  return (
    <main className="relative w-screen h-[100dvh] overflow-hidden flex items-center justify-center animated-bg">
      <Background />
      
      {!isRevealed && (
        <div 
          className={`transition-all duration-1000 transform ${isOpened ? 'scale-150 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
          aria-label="Interactive envelope"
        >
          <Envelope onOpen={handleOpen} isOpened={isOpened} />
        </div>
      )}

      {isRevealed && (
        <MessageCard config={MESSAGE_CONFIG} />
      )}

      {showFloating && <FloatingElements />}

      {/* Subtle guide for user */}
      {!isOpened && (
        <div className="absolute bottom-12 left-0 right-0 text-center text-white/40 animate-pulse pointer-events-none uppercase tracking-[0.3em] text-[10px] font-bold z-20">
          Tap the envelope
        </div>
      )}
    </main>
  );
};

export default App;
