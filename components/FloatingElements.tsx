
import React, { useMemo } from 'react';
import { FloatingElement } from '../types';

const FloatingElements: React.FC = () => {
  const elements = useMemo(() => {
    const items: FloatingElement[] = [];
    const types: ('heart' | 'flower' | 'butterfly')[] = ['heart', 'flower', 'butterfly'];
    
    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        type: types[i % 3],
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 10,
        scale: 0.5 + Math.random() * 0.8,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5
      });
    }
    return items;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            transform: `scale(${el.scale})`,
            opacity: 0.4
          }}
        >
          {el.type === 'heart' && (
            <svg className="w-8 h-8 text-pink-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {el.type === 'flower' && (
            <svg className="w-8 h-8 text-cyan-400 fill-current" viewBox="0 0 24 24">
              <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7Z" />
            </svg>
          )}
          {el.type === 'butterfly' && (
            <svg className="w-8 h-8 text-violet-400 fill-current" viewBox="0 0 24 24">
              <path d="M12,18.5C12,18.5 10.5,17 9.5,16.5C8.5,16 7,16 5.5,16.5C4,17 3,18 3,19.5C3,21 4.5,22 6.5,22C8.5,22 10.5,21 12,19.5C13.5,21 15.5,22 17.5,22C19.5,22 21,21 21,19.5C21,18 20,17 18.5,16.5C17,16 15.5,16 14.5,16.5C13.5,17 12,18.5 12,18.5M12,5.5C12,5.5 13.5,7 14.5,7.5C15.5,8 17,8 18.5,7.5C20,7 21,6 21,4.5C21,3 19.5,2 17.5,2C15.5,2 13.5,3 12,4.5C10.5,3 8.5,2 6.5,2C4.5,2 3,3 3,4.5C3,6 4,7 5.5,7.5C7,8 8.5,8 9.5,7.5C10.5,7 12,5.5 12,5.5Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
