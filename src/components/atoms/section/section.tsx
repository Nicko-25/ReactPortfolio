import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  labelledBy: string;
  children: ReactNode;
}

export const Section = ({ id, labelledBy, children }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
  >
    {children}
  </section>
);
