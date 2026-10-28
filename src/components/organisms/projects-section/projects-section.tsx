import { Reveal } from '@/components/atoms/reveal';
import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { ProjectCard } from '@/components/molecules/project-card';
import { projects } from '@/data/projects';

export const ProjectsSection = () => (
  <Section id="proyectos" labelledBy="proyectos-title">
    <SectionHeading
      id="proyectos-title"
      eyebrow="Proyectos"
      title="En lo que he trabajado"
      description="Descripciones generales de proyectos del entorno profesional. Por confidencialidad no se muestran detalles internos ni capturas."
    />
    <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
      {projects.map((project, index) => (
        <li key={project.id} className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
          <Reveal delay={index * 0.05} className="h-full">
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
