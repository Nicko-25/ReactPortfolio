import { GraduationCap } from 'lucide-react';
import type { EducationEntry } from '@/models/portfolio';

interface EducationCardProps {
  entry: EducationEntry;
  featured?: boolean;
  className?: string;
}

export const EducationCard = ({ entry, featured = false, className = '' }: EducationCardProps) => (
  <article className={`card ${featured ? 'bg-surface-2' : ''} ${className}`}>
    <div className="flex items-start justify-between gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient text-white">
        <GraduationCap size={22} aria-hidden="true" />
      </span>
      {entry.status && (
        <span className="rounded-full border border-accent-from/40 px-3 py-1 text-xs font-semibold text-accent-from">
          {entry.status}
        </span>
      )}
    </div>
    <h3
      className={`mt-5 font-semibold ${featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}
    >
      {entry.title}
    </h3>
    <p className="mt-2 text-muted">
      {entry.institution} · {entry.location}
    </p>
    {entry.period && <p className="mt-1 text-sm font-medium text-accent-from">{entry.period}</p>}
    {entry.detail && <p className="mt-4 text-sm text-muted sm:text-base">{entry.detail}</p>}
  </article>
);
