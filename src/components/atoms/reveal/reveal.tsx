import { LazyMotion, domAnimation, m } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in App.
export const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <LazyMotion features={domAnimation} strict>
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  </LazyMotion>
);
