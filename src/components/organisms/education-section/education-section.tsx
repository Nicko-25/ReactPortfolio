import { Reveal } from '@/components/atoms/reveal';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { EducationCard } from '@/components/molecules/education-card';
import { education } from '@/data/education';

export const EducationSection = () => (
  <Section id="educacion" labelledBy="educacion-title">
    <SectionHeading id="educacion-title" eyebrow="Educación" title="Formación académica" />
    <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {education.map((entry, index) => (
        <li key={entry.id} className={index === 0 ? 'md:col-span-2' : ''}>
          <Reveal delay={index * 0.05} className="h-full">
            <EducationCard entry={entry} featured={index === 0} className="h-full" />
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
