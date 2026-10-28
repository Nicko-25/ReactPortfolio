import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { SkillGroupCard } from '@/components/molecules/skill-group-card';
import { skillGroups } from '@/data/skills';

// Spans on the 6-column desktop grid, keyed by group id.
const spans: Record<string, string> = {
  backend: 'lg:col-span-3',
  frontend: 'lg:col-span-3',
  mobile: 'lg:col-span-2',
  cloud: 'lg:col-span-2',
  ai: 'sm:col-span-2 lg:col-span-2',
};

export const TechStackSection = () => (
  <Section id="stack" labelledBy="stack-title" tone="dark">
    <SectionHeading
      id="stack-title"
      eyebrow="Stack tecnológico"
      title="Herramientas con las que trabajo"
      description="Tecnologías que uso en el día a día construyendo un ERP empresarial multi-tenant."
    />
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {skillGroups.map((group, index) => (
        <li key={group.id} className={spans[group.id]}>
          <SkillGroupCard
            group={group}
            number={String(index + 1).padStart(2, '0')}
            className="h-full"
          />
        </li>
      ))}
    </ul>
  </Section>
);
