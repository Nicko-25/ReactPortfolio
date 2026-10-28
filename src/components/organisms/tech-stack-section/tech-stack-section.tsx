import { Reveal } from '@/components/atoms/reveal';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { SkillGroupCard } from '@/components/molecules/skill-group-card';
import { skillGroups } from '@/data/skills';

// Bento spans on the 6-column desktop grid, keyed by group id.
const spans: Record<string, string> = {
  backend: 'lg:col-span-4',
  frontend: 'lg:col-span-2',
  mobile: 'lg:col-span-2',
  cloud: 'lg:col-span-4',
  ai: 'md:col-span-2 lg:col-span-6',
};

export const TechStackSection = () => (
  <Section id="stack" labelledBy="stack-title">
    <SectionHeading
      id="stack-title"
      eyebrow="Stack tecnológico"
      title="Herramientas con las que trabajo"
      description="Tecnologías que uso en el día a día construyendo un ERP empresarial multi-tenant."
    />
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
      {skillGroups.map((group, index) => (
        <Reveal key={group.id} delay={index * 0.05} className={spans[group.id]}>
          <SkillGroupCard group={group} className="h-full" />
        </Reveal>
      ))}
    </div>
  </Section>
);
