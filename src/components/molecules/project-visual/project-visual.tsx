import { Database, Globe, MessagesSquare, Server, Smartphone, type LucideIcon } from 'lucide-react';
import type { ProjectVisual as ProjectVisualType } from '@/models/portfolio';

interface ProjectVisualProps {
  visual: ProjectVisualType;
}

const icons: Record<ProjectVisualType, LucideIcon> = {
  server: Server,
  messages: MessagesSquare,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
};

// Each visual gets a different gradient angle so cards look distinct without images.
const angles: Record<ProjectVisualType, number> = {
  server: 135,
  messages: 200,
  globe: 90,
  smartphone: 160,
  database: 45,
};

export const ProjectVisual = ({ visual }: ProjectVisualProps) => {
  const Icon = icons[visual];
  return (
    <div
      aria-hidden="true"
      className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(${angles[visual]}deg, rgb(var(--btn-from)), rgb(var(--btn-to)))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />
      <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-sm">
        <Icon size={30} />
      </span>
    </div>
  );
};
