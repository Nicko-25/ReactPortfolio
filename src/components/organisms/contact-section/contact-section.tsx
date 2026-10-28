import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsappIcon } from '@/components/atoms/brand-icons';
import { ButtonLink } from '@/components/atoms/button-link';
import { Reveal } from '@/components/atoms/reveal';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { ContactLink } from '@/components/molecules/contact-link';
import { profile } from '@/data/profile';

export const ContactSection = () => (
  <Section id="contacto" labelledBy="contacto-title">
    <SectionHeading
      id="contacto-title"
      eyebrow="Contacto"
      title="Trabajemos juntos"
      description="Escríbeme para conversar sobre un proyecto, una oportunidad o una colaboración."
    />
    <Reveal>
      <div className="grid gap-8 rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-2">
        <ul className="space-y-2">
          <li>
            <ContactLink
              icon={<Mail size={20} aria-hidden="true" />}
              label="Correo"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
          </li>
          <li>
            <ContactLink
              icon={<Phone size={20} aria-hidden="true" />}
              label="Teléfono"
              value={profile.phoneDisplay}
              href={profile.phoneHref}
            />
          </li>
          <li>
            <ContactLink
              icon={<MapPin size={20} aria-hidden="true" />}
              label="Ubicación"
              value={profile.location}
            />
          </li>
        </ul>
        <div className="flex flex-col justify-center gap-4">
          <ButtonLink href={`mailto:${profile.email}`} icon={<Mail size={18} aria-hidden="true" />}>
            Enviar correo
          </ButtonLink>
          <ButtonLink
            href={profile.whatsappHref}
            variant="secondary"
            icon={<WhatsappIcon size={18} />}
          >
            Escribir por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  </Section>
);
