
import React, { useEffect, useState } from 'react';
import { MessageConfig } from '../types';

interface MessageCardProps {
  config: MessageConfig;
  onReplay?: () => void;
}

const MessageCard: React.FC<MessageCardProps> = ({ config }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const sequence = [400, 800, 1200, 1600, 2000];
    const timers = sequence.map((delay, index) => 
      setTimeout(() => setVisibleSteps(index + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const renderMessageWithHighlights = () => {
    let text = config.message;
    const parts = text.split(new RegExp(`(${config.highlightedKeywords.join('|')})`, 'gi'));
    
    return parts.map((part, i) => {
      const isHighlight = config.highlightedKeywords.some(
        keyword => keyword.toLowerCase() === part.toLowerCase()
      );
      
      return isHighlight ? (
        <span key={i} className="text-pink-400 font-bold drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  return (
    <div className="relative z-10 w-full max-w-xl px-4 py-4 max-h-[90dvh] flex items-center justify-center">
      <div className={`glass rounded-[2rem] p-6 sm:p-12 lg:p-16 w-full transition-all duration-1000 transform ${visibleSteps > 0 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'} overflow-y-auto max-h-[85dvh] hide-scrollbar relative`}>
        
        {/* Greeting */}
        <h2 className={`font-cursive text-3xl sm:text-5xl lg:text-6xl text-white mb-4 sm:mb-8 transition-all duration-1000 ${visibleSteps > 1 ? 'opacity-100' : 'opacity-0'}`}>
          {config.greeting}
        </h2>

        {/* Main Body */}
        <div className={`text-white/90 text-base sm:text-xl lg:text-2xl font-light leading-relaxed mb-6 sm:mb-10 transition-all duration-1000 ${visibleSteps > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {renderMessageWithHighlights()}
        </div>

        {/* Quote Block */}
        <div className={`border-l-4 border-pink-500/50 pl-4 sm:pl-8 my-6 sm:my-10 transition-all duration-1000 ${visibleSteps > 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <p className="font-serif-elegant italic text-lg sm:text-2xl lg:text-3xl text-pink-50 mb-3 sm:mb-4 leading-snug">
            "{config.quote}"
          </p>
          <cite className="text-pink-400 text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase not-italic">
            — {config.author}
          </cite>
        </div>

        {/* Footer & Signature */}
        <div className={`flex flex-col transition-all duration-1000 ${visibleSteps > 4 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/40 mb-1 italic text-xs sm:text-sm">{config.signature}</p>
          <p className="font-cursive text-2xl sm:text-4xl text-pink-500 drop-shadow-lg leading-tight">{config.recipient}</p>
        </div>

        {/* Decorative corner glows */}
        <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-pink-600/20 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 sm:w-40 sm:h-40 bg-violet-600/20 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none" />
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default MessageCard;
