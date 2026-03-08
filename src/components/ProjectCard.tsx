import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolioData";

interface Props {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index, onClick }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group card-hover rounded-xl border border-border bg-card p-6 flex flex-col gap-4 cursor-pointer"
      onClick={onClick}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full rounded-lg object-cover"
        />
      ) : (
        <div className="flex h-48 w-full items-center justify-center rounded-lg bg-secondary">
          <span className="font-mono text-sm text-muted-foreground">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="category-badge">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
          View Project <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}
