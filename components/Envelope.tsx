
import React from 'react';

interface EnvelopeProps {
  onOpen: () => void;
  isOpened: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen, isOpened }) => {
  return (
    <div 
      className="perspective-1000 group cursor-pointer touch-manipulation"
      onClick={onOpen}
      role="button"
      aria-label="Open message envelope"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
    >
      <div className={`relative w-64 h-40 sm:w-96 sm:h-60 preserve-3d transition-transform duration-1000 ${!isOpened ? 'group-hover:rotate-y-12 group-hover:-rotate-x-6 animate-float' : ''}`}>
        
        {/* Envelope Back Plate */}
        <div className="absolute inset-0 bg-pink-800 rounded-lg shadow-2xl border-t border-white/10" />

        {/* The Internal Letter Card */}
        <div 
          className={`absolute top-2 left-2 right-2 h-full bg-white/95 rounded transition-all duration-700 ease-in-out ${
            isOpened ? '-translate-y-40 opacity-0' : 'group-hover:-translate-y-4 translate-y-0'
          }`}
        >
          <div className="p-4 flex flex-col gap-2">
            <div className="w-1/2 h-2 bg-pink-100 rounded"></div>
            <div className="w-full h-2 bg-gray-100 rounded"></div>
            <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
          </div>
        </div>

        {/* Top Flap */}
        <div 
          className={`absolute top-0 left-0 w-full h-1/2 bg-pink-600 rounded-t-lg origin-top transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-20 preserve-3d shadow-inner`}
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transform: isOpened ? 'rotateX(180deg)' : 'rotateX(0deg)',
            zIndex: isOpened ? 5 : 20
          }}
        >
          {/* Inner part of flap when open */}
          <div className="absolute inset-0 bg-pink-500 opacity-50" style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }} />
        </div>

        {/* Envelope Front Panels */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(45deg, #db2777 50%, #be185d 50%)',
            clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
            borderRadius: '0 0 8px 8px'
          }}
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(-45deg, #db2777 50%, #be185d 50%)',
            clipPath: 'polygon(0 0, 0 100%, 50% 50%)',
            borderRadius: '8px 0 0 8px'
          }}
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, #db2777 50%, #be185d 50%)',
            clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
            borderRadius: '0 8px 8px 0'
          }}
        />
        
        {/* Interactive Wax Seal */}
        {!isOpened && (
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            <div className="bg-pink-500 rounded-full p-2 shadow-lg border-2 border-pink-400">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Envelope;
