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
        item.isCurrent
          ? 'bg-accent-gradient ring-4 ring-accent-from/25'
          : 'border-2 border-accent-from bg-bg'
      }`}
    />
    <article className="card">
      <p className="text-sm font-medium text-accent-from">
        {item.period} <span className="text-muted">· {item.duration}</span>
      </p>
      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.role}</h3>
      <p className="text-muted">
        {item.company} · {item.location}
      </p>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted marker:text-accent-from sm:text-base">
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
