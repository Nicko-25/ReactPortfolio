import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-wrap px-6 ${className}`}>{children}</div>
);
