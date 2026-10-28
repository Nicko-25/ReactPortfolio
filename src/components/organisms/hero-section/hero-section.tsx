import { ArrowRight, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.webp';
import { ButtonLink } from '@/components/atoms/button-link';
import { GithubIcon } from '@/components/atoms/brand-icons';
import { Reveal } from '@/components/atoms/reveal';
import { profile } from '@/data/profile';

export const HeroSection = () => (
  <section
    id="inicio"
    aria-labelledby="hero-title"
    className="relative overflow-hidden pt-28 sm:pt-36"
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-from/20 blur-3xl" />
      <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-accent-to/15 blur-3xl" />
    </div>

    <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
      <Reveal>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-to" />
          {profile.location}
        </p>
        <h1
          id="hero-title"
          className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.firstName} <span className="gradient-text">{profile.lastName}</span>
        </h1>
        <p className="mt-5 text-2xl font-semibold text-fg/90 sm:text-3xl">{profile.role}</p>
        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{profile.pitch}</p>
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
          <ButtonLink
            href={profile.github.href}
            variant="secondary"
            aria-label="Perfil de GitHub de José Nicolás Pereira"
            icon={<GithubIcon size={18} />}
          >
            GitHub
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto w-full max-w-sm lg:max-w-none">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-[2rem] bg-accent-gradient opacity-60 blur-xl"
          />
          <img
            src={profileImage}
            width={900}
            height={900}
            alt="Retrato de José Nicolás Pereira sonriendo, con saco negro y camisa blanca"
            fetchPriority="high"
            decoding="async"
            className="relative aspect-square w-full rounded-[2rem] border border-line object-cover"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
