'use client';

import { CSSProperties } from 'react';

interface HandDrawnProps {
  className?: string;
  style?: CSSProperties;
}

// Scribble Circle - for highlighting numbers/text
export function ScribbleCircle({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`absolute ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 M98,25 C138,26 175,63 176,103 C177,143 138,177 98,176 C58,175 23,138 22,98"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Chunky Arrow - hand-drawn style arrow
export function ChunkyArrow({ className = '', style, direction = 'right' }: HandDrawnProps & { direction?: 'right' | 'left' | 'down' | 'up' }) {
  const rotations = {
    right: '0',
    down: '90',
    left: '180',
    up: '270'
  };

  return (
    <svg
      viewBox="0 0 100 50"
      className={`${className}`}
      style={{ ...style, transform: `rotate(${rotations[direction]}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5,25 L70,25 M70,25 L55,15 M70,25 L55,35 M70,22 L95,25 L70,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Wobbly Underline - marker-style underline
export function WobblyUnderline({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={`w-full ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M5,12 Q30,8 50,11 T100,12 T150,10 T195,13"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Star Burst - for emphasis
export function StarBurst({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,10 L55,45 L90,40 L60,55 L80,85 L50,65 L20,85 L40,55 L10,40 L45,45 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

// Exclamation Doodle
export function ExclamationDoodle({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 50 150"
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25,15 L28,90 L22,90 Z M25,110 Q30,110 30,115 Q30,120 25,120 Q20,120 20,115 Q20,110 25,110"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

// Cross Hatch Pattern - for background texture
export function CrossHatch({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="crosshatch" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,0 L20,20 M0,20 L20,0" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#crosshatch)" />
    </svg>
  );
}

// Scribble X - for crossing out
export function ScribbleX({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15,15 L85,85 M18,13 L88,83 M85,15 L15,85 M83,18 L13,88"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Checkmark Scribble
export function CheckmarkScribble({ className = '', style }: HandDrawnProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,55 L40,75 L80,25 M22,53 L42,73 L82,23"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Marker Highlight Box - rough rectangle highlight
export function MarkerHighlight({ className = '', style, children }: HandDrawnProps & { children?: React.ReactNode }) {
  return (
    <span className={`relative inline-block ${className}`} style={style}>
      <svg
        viewBox="0 0 200 50"
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M5,8 L195,6 L198,42 L3,44 Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      {children}
    </span>
  );
}

// Brutalist Border Box - thick borders with offset shadow
export function BrutalistBox({ className = '', children, borderColor = 'border-black', shadowColor = 'shadow-black/40' }: { className?: string; children: React.ReactNode; borderColor?: string; shadowColor?: string }) {
  return (
    <div className={`border-[5px] ${borderColor} ${shadowColor} shadow-[8px_8px_0px] ${className}`}>
      {children}
    </div>
  );
}

// Stamp effect with distressed edges
export function StampBox({ className = '', children, color = 'border-red-600' }: { className?: string; children: React.ReactNode; color?: string }) {
  return (
    <div className={`relative border-4 ${color} ${className} transform -rotate-2`}>
      <div className="absolute inset-0 border-4 border-inherit transform rotate-1" />
      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  );
}
