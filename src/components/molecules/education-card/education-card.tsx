import type { EducationEntry } from '@/models/portfolio';

interface EducationCardProps {
  entry: EducationEntry;
  featured?: boolean;
  className?: string;
}

export const EducationCard = ({ entry, featured = false, className = '' }: EducationCardProps) => (
  <article className={`card ${className}`}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      {entry.period && (
        <p className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-accent">
          {entry.period}
        </p>
      )}
      {entry.status && (
        <span className="rounded-md bg-brand-soft px-3 py-1 text-xs font-bold text-ink">
          {entry.status}
        </span>
      )}
    </div>
    <h3
      className={`mt-3 font-bold leading-tight ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}
    >
      {entry.title}
    </h3>
    <p className="mt-2 text-subtle">
      {entry.institution} · {entry.location}
    </p>
    {entry.detail && <p className="mt-4 text-[15px] text-subtle">{entry.detail}</p>}
  </article>
);
