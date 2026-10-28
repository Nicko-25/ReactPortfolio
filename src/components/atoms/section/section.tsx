import type { ReactNode } from 'react';
import { Container } from '@/components/atoms/container';

export type SectionTone = 'paper' | 'warm' | 'dark';

interface SectionProps {
  id: string;
  labelledBy: string;
  tone?: SectionTone;
  children: ReactNode;
}

const tones: Record<SectionTone, string> = {
  paper: 'bg-paper',
  warm: 'bg-warm',
  dark: 'band-dark bg-ink text-fg',
};

export const Section = ({ id, labelledBy, tone = 'paper', children }: SectionProps) => (
  <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${tones[tone]}`}>
    <Container>{children}</Container>
  </section>
);
