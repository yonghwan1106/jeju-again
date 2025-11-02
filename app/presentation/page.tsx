'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import { slides } from './slides';

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <div key={currentSlide}>
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />

      {/* Keyboard Hints */}
      <div className="fixed top-4 right-4 z-40 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
        <p className="opacity-70">
          ← → 방향키로 이동 | Home/End: 처음/마지막
        </p>
      </div>
    </div>
  );
}
