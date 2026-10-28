import { ArrowUpRight } from 'lucide-react';
import { TagChip } from '@/components/atoms/tag-chip';
import { ProjectVisual } from '@/components/molecules/project-visual';
import type { Project } from '@/models/portfolio';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className = '' }: ProjectCardProps) => (
  <article className={`card flex flex-col gap-5 p-4 sm:p-5 ${className}`}>
    <ProjectVisual visual={project.visual} />
    <div className="flex flex-1 flex-col px-2 pb-2">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted sm:text-base">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <TagChip label={tag} />
          </li>
        ))}
      </ul>
      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-5 flex gap-4 text-sm font-semibold">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-from hover:underline"
            >
              Repositorio <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-from hover:underline"
            >
              Demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);
