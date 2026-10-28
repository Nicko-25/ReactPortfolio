import { Section } from '@/components/atoms/section';
import { SectionHeading } from '@/components/atoms/section-heading';
import { ProjectCard } from '@/components/molecules/project-card';
import { projects } from '@/data/projects';

export const ProjectsSection = () => (
  <Section id="proyectos" labelledBy="proyectos-title" tone="paper">
    <SectionHeading
      id="proyectos-title"
      eyebrow="Proyectos"
      title="En lo que he trabajado"
      description="Descripciones generales de proyectos del entorno profesional. Por confidencialidad no se muestran detalles internos ni capturas."
    />
    <ul className="grid gap-6 sm:grid-cols-2 min-[900px]:grid-cols-3">
      {projects.map((project, index) => (
        <li key={project.id}>
          <ProjectCard
            project={project}
            number={String(index + 1).padStart(2, '0')}
            className="h-full"
          />
        </li>
      ))}
    </ul>
  </Section>
);
