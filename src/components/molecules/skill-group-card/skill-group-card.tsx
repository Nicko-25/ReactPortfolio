import { Brain, Cloud, Layout, Server, Smartphone, type LucideIcon } from 'lucide-react';
import { TagChip } from '@/components/atoms/tag-chip';
import type { SkillGroup } from '@/models/portfolio';

interface SkillGroupCardProps {
  group: SkillGroup;
  className?: string;
}

const icons: Record<SkillGroup['icon'], LucideIcon> = {
  server: Server,
  layout: Layout,
  smartphone: Smartphone,
  cloud: Cloud,
  brain: Brain,
};

export const SkillGroupCard = ({ group, className = '' }: SkillGroupCardProps) => {
  const Icon = icons[group.icon];
  return (
    <article className={`card flex flex-col ${className}`}>
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient text-white">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="text-xl font-semibold">{group.title}</h3>
      <p className="mt-2 text-sm text-muted sm:text-base">{group.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <TagChip label={item} />
          </li>
        ))}
      </ul>
    </article>
  );
};
