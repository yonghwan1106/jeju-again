'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function Slide({ children, className = '', backgroundColor = 'bg-white' }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`h-screen w-full flex items-center justify-center overflow-hidden ${backgroundColor} ${className}`}
    >
      <div className="max-w-7xl w-full px-6 py-6 max-h-screen overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
}
