import { ArrowRight, Mail } from 'lucide-react';
import { fullYearsSince } from '@/adapters/experience-adapter';
import profileImage from '@/assets/profile.webp';
import { ButtonLink } from '@/components/atoms/button-link';
import { Container } from '@/components/atoms/container';
import { StatItem } from '@/components/molecules/stat-item';
import { profile } from '@/data/profile';

export const HeroSection = () => {
  const years = fullYearsSince(profile.careerStart);
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-warm pb-[72px] pt-10 min-[900px]:pb-24 min-[900px]:pt-[72px]"
    >
      <Container className="grid items-center gap-12 min-[900px]:grid-cols-[1.2fr_0.8fr] min-[900px]:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            {profile.location}
          </p>
          <h1
            id="hero-title"
            className="text-[clamp(48px,7vw,92px)] font-extrabold uppercase leading-[0.98]"
          >
            {profile.firstName} <span className="text-brand">{profile.lastName}</span>
          </h1>
          <p className="mt-5 font-heading text-[26px] font-bold">{profile.role}</p>
          <p className="mt-4 max-w-[520px] text-lg text-muted">{profile.pitch}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#contacto" icon={<Mail size={18} aria-hidden="true" />}>
              Contáctame
            </ButtonLink>
            <ButtonLink
              href="#proyectos"
              variant="secondary"
              icon={<ArrowRight size={18} aria-hidden="true" />}
            >
              Ver proyectos
            </ButtonLink>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-7">
            <StatItem value={`+${years}`} label="años de experiencia" />
            <StatItem value="IA" label="Especialista en IA y datos" />
          </div>
        </div>

        <img
          src={profileImage}
          width={900}
          height={900}
          alt="Retrato de José Nicolás Pereira sonriendo, con saco negro y camisa blanca"
          fetchPriority="high"
          decoding="async"
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[20px] object-cover object-[center_top] min-[900px]:max-w-none"
        />
      </Container>
    </section>
  );
};
