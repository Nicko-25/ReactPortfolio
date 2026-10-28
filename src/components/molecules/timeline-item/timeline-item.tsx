import { TagChip } from '@/components/atoms/tag-chip';
import type { ExperienceViewModel } from '@/models/portfolio';

interface TimelineItemProps {
  item: ExperienceViewModel;
}

export const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className="relative pl-8 sm:pl-10">
    <span
      aria-hidden="true"
      className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full ${
        item.isCurrent ? 'bg-brand ring-4 ring-brand-soft' : 'border-2 border-brand bg-warm'
      }`}
    />
    <article className="card sm:p-8">
      <p className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-accent">
        {item.period} <span className="font-medium normal-case text-subtle">· {item.duration}</span>
      </p>
      <h3 className="mt-2 text-2xl font-bold leading-tight">{item.role}</h3>
      <p className="text-subtle">
        {item.company} · {item.location}
      </p>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] text-subtle marker:text-brand">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <li key={tag}>
            <TagChip label={tag} />
          </li>
        ))}
      </ul>
    </article>
  </div>
);
