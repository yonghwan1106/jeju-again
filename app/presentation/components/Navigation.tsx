'use client';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Navigation({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-between px-12">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-lg transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Progress Indicator */}
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <span className="text-sm font-medium text-gray-700">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-blue-600'
                  : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-lg transition-all duration-200"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
