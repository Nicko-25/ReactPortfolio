import { ArrowUpRight } from 'lucide-react';
import { TagChip } from '@/components/atoms/tag-chip';
import type { Project } from '@/models/portfolio';

interface ProjectCardProps {
  project: Project;
  number: string;
  className?: string;
}

export const ProjectCard = ({ project, number, className = '' }: ProjectCardProps) => (
  <article
    className={`flex flex-col overflow-hidden rounded-[20px] border border-line bg-paper shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1 hover:border-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
  >
    <div
      aria-hidden="true"
      className="flex h-[150px] items-center justify-center border-b border-line bg-warm font-heading text-[54px] font-extrabold text-brand"
    >
      {number}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
      <p className="mb-4 mt-2 text-[15px] text-muted">{project.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <TagChip label={tag} />
          </li>
        ))}
      </ul>
      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-5 flex gap-4 text-sm font-bold">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand hover:underline"
            >
              Repositorio <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand hover:underline"
            >
              Demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);
