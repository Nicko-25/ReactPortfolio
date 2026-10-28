import { MapPin } from 'lucide-react';
import { Reveal } from '@/components/atoms/reveal';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { StatItem } from '@/components/molecules/stat-item';
import { skillGroups } from '@/data/skills';
import { profile } from '@/data/profile';
import { fullYearsSince } from '@/adapters/experience-adapter';

export const AboutSection = () => {
  const years = fullYearsSince(profile.careerStart);
  return (
    <Section id="sobre-mi" labelledBy="sobre-mi-title">
      <SectionHeading
        id="sobre-mi-title"
        eyebrow="Sobre mí"
        title="Software que escala y se mantiene"
      />
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <div className="card h-full space-y-4 text-base text-muted sm:text-lg">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card h-full">
            <StatItem value={`+${years}`} label="años de experiencia profesional" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card flex h-full flex-col justify-between gap-6">
            <StatItem
              value={String(skillGroups.length)}
              label="áreas técnicas: backend, frontend, móvil, cloud e IA"
            />
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} aria-hidden="true" className="text-accent-from" />
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
