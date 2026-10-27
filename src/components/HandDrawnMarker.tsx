'use client';

import React, { useState, useEffect, useRef } from 'react';

export interface HandDrawnMarkerProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  baseTextColor?: string;
  delay?: number;
  duration?: number;
  variant?: 'wobbly1' | 'wobbly2' | 'heroTop' | 'heroBottom' | 'brushStroke';
  className?: string;
}

export const WOBBLY_PATHS: Record<string, string> = {
  wobbly1:
    'M 6,10 C 5,4.2 13,1.8 28,2.2 C 55,2.7 76,1.4 92,3 C 98,3.8 98.8,9.5 97.6,18 C 96.6,26.5 98.2,32.5 93.5,36.8 C 80,38.2 48,37.6 18,38.2 C 8.5,38.5 3.8,34.5 3.5,28 C 3.1,20.5 3.6,13.5 6,10 Z',
  wobbly2:
    'M 5,8 C 4,2.8 12,1.5 32,2 C 60,2.6 78,1.2 93,2.8 C 98.5,3.5 99,9 98,17.5 C 97,25.8 98.5,31.8 94,36.2 C 82,37.8 46,38 16,37.6 C 7.5,37.2 3.2,33.5 3,27 C 2.6,19.2 3.5,12.5 5,8 Z',
  heroTop:
    'M 6,11 C 5,4.5 14,1.8 32,2.2 C 60,2.6 82,1.2 94,3 C 98.8,3.8 99.2,9.5 98.2,18 C 97.2,26.2 98.4,32.5 94.5,36.8 C 82,38.2 50,37.5 18,38.2 C 8.5,38.5 3.8,34.5 3.5,27.5 C 3.1,19.8 3.8,14 6,11 Z',
  heroBottom:
    'M 6,9 C 5,3.2 15,1.8 35,2.4 C 62,2.9 80,1.5 92.5,3 C 98.2,3.8 98.8,9.5 97.8,18.5 C 96.8,26.8 98.2,32.8 93.5,36.8 C 80,38.2 44,38 16,37.5 C 7.8,37.2 3.5,33.5 3.2,27 C 2.8,19 3.5,13 6,9 Z',
  brushStroke:
    'M 4,12 C 10,5 28,3 52,2.8 C 76,2.6 92,4 98,9 C 99.5,15 97,28 94,34 C 84,37.5 56,38 24,37.5 C 10,37 4,32 3.5,24 C 3,18 3.5,14 4,12 Z'
};

export const HandDrawnMarker: React.FC<HandDrawnMarkerProps> = ({
  children,
  color = 'text-[#0284c7]',
  textColor = 'text-white',
  baseTextColor = 'text-inherit',
  delay = 0.15,
  duration = 0.65,
  variant = 'wobbly1',
  className = '',
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const pathData = WOBBLY_PATHS[variant] || WOBBLY_PATHS.wobbly1;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '60px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex items-center justify-center whitespace-nowrap px-3 sm:px-5 py-1 sm:py-2 leading-tight ${className}`}
      style={{
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
      }}
    >
      {/* 1. Base Layer */}
      <span className={`relative z-0 ${baseTextColor} font-black inline-flex items-center justify-center whitespace-nowrap leading-none`}>
        {children}
      </span>

      {/* 2. Revealing Layer */}
      <span
        aria-hidden="true"
        className="absolute -inset-x-1.5 sm:-inset-x-2.5 -inset-y-1 sm:-inset-y-1.5 flex items-center justify-center pointer-events-none z-10 select-none"
        style={{
          clipPath: isRevealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          WebkitClipPath: isRevealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: `clip-path ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, -webkit-clip-path ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }}
      >
        <span className="absolute inset-0 w-full h-full -z-10">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className={`w-full h-full ${color} fill-current drop-shadow-md`}
          >
            <path d={pathData} />
          </svg>
        </span>

        <span className={`relative z-10 ${textColor} font-black inline-flex items-center justify-center whitespace-nowrap leading-none`}>
          {children}
        </span>
      </span>
    </span>
  );
};

export const ChunkHighlight: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'cyan' | 'emerald' | 'amber';
}> = ({ children, className = '', color = 'blue' }) => {
  const colorMap = {
    blue: 'bg-sky-100/90 text-sky-950 border-sky-500',
    cyan: 'bg-cyan-100/90 text-cyan-950 border-cyan-500',
    emerald: 'bg-emerald-100/90 text-emerald-950 border-emerald-500',
    amber: 'bg-amber-100/90 text-amber-950 border-amber-500'
  };

  return (
    <span className={`inline-block px-1.5 py-0.5 rounded border-b-2 font-bold ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
};
