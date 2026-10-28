import { MapPin } from 'lucide-react';
import { fullYearsSince } from '@/adapters/experience-adapter';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { StatItem } from '@/components/molecules/stat-item';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';

export const AboutSection = () => {
  const years = fullYearsSince(profile.careerStart);
  return (
    <Section id="sobre-mi" labelledBy="sobre-mi-title" tone="paper">
      <SectionHeading
        id="sobre-mi-title"
        eyebrow="Sobre mí"
        title="Software que escala y se mantiene"
      />
      <div className="grid gap-6 min-[900px]:grid-cols-3">
        <div className="card space-y-4 p-6 text-base text-subtle sm:p-8 sm:text-lg min-[900px]:col-span-2">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="card flex flex-col justify-between gap-8 sm:p-8">
          <StatItem value={`+${years}`} label="años de experiencia profesional" />
          <StatItem
            value={String(skillGroups.length)}
            label="áreas técnicas: backend, frontend, móvil, cloud e IA"
          />
          <p className="flex items-center gap-2 text-sm text-subtle">
            <MapPin size={16} aria-hidden="true" className="text-accent" />
            {profile.location}
          </p>
        </div>
      </div>
    </Section>
  );
};
