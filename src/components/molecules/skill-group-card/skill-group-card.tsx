import { TagChip } from '@/components/atoms/tag-chip';
import type { SkillGroup } from '@/models/portfolio';

interface SkillGroupCardProps {
  group: SkillGroup;
  number: string;
  className?: string;
}

export const SkillGroupCard = ({ group, number, className = '' }: SkillGroupCardProps) => (
  <article className={`card flex flex-col ${className}`}>
    <span
      aria-hidden="true"
      className="font-heading text-sm font-bold tracking-[0.1em] text-accent"
    >
      {number}
    </span>
    <h3 className="mt-1 text-[22px] font-bold">{group.title}</h3>
    <p className="mb-4 mt-2 text-[15px] text-subtle">{group.description}</p>
    <ul className="flex flex-wrap gap-2">
      {group.items.map((item) => (
        <li key={item}>
          <TagChip label={item} />
        </li>
      ))}
    </ul>
  </article>
);
