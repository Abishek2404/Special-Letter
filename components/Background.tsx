
import React, { useMemo } from 'react';
import { StarProps } from '../types';

const Background: React.FC = () => {
  const stars = useMemo(() => {
    const s: StarProps[] = [];
    for (let i = 0; i < 150; i++) {
      s.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3}px`,
        duration: `${2 + Math.random() * 5}s`,
      });
    }
    return s;
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0f172a]">
      {/* Dynamic Gradient Layer */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 60%)',
          animation: 'pulse 10s infinite ease-in-out'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30 mix-blend-color-dodge"
        style={{
          background: 'radial-gradient(circle at 20% 30%, #ec4899 0%, transparent 50%)',
          animation: 'pulse 15s infinite ease-in-out reverse'
        }}
      />
      
      {/* Stars Layer */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Background;
