import { MotionConfig } from 'framer-motion';
import { HomePage } from '@/pages';

export const App = () => (
  <MotionConfig reducedMotion="user">
    <HomePage />
  </MotionConfig>
);
