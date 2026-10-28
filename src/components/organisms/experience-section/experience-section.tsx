import { useMemo } from 'react';
import { adaptExperience } from '@/adapters/experience-adapter';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { TimelineItem } from '@/components/molecules/timeline-item';
import { experience } from '@/data/experience';

export const ExperienceSection = () => {
  const items = useMemo(() => experience.map((entry) => adaptExperience(entry)), []);
  return (
    <Section id="experiencia" labelledBy="experiencia-title" tone="warm">
      <SectionHeading
        id="experiencia-title"
        eyebrow="Experiencia"
        title="Trayectoria profesional"
      />
      <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-[6px] before:top-4 before:w-px before:bg-ink/20">
        {items.map((item) => (
          <li key={item.id}>
            <TimelineItem item={item} />
          </li>
        ))}
      </ol>
    </Section>
  );
};
