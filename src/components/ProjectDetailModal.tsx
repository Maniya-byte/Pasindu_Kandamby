import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Project } from "@/data/portfolioData";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal — dynamic height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="relative z-10 flex w-full max-w-2xl flex-col rounded-2xl border border-border bg-card shadow-2xl"
            style={{ maxHeight: "min(90vh, 800px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — sticky */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Scrollable content */}
            <ScrollArea className="flex-1">
              <div className="p-5 sm:p-6 md:p-8">
                {/* Project number */}
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  #{project.number}
                </span>

                {/* Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 w-full rounded-xl object-cover"
                    style={{ maxHeight: "400px" }}
                  />
                ) : (
                  <div className="mb-6 flex h-48 sm:h-64 w-full items-center justify-center rounded-xl bg-secondary">
                    <span className="font-mono text-2xl text-muted-foreground">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="category-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Link */}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
