import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { projects } from "@/data/portfolioData";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <section className="section-padding flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Go Back
            </button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </motion.button>

          {/* Project number */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
          >
            #{project.number}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span key={tag} className="category-badge">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-8"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: "500px" }}
              />
            ) : (
              <div className="flex h-48 sm:h-64 w-full items-center justify-center rounded-xl bg-secondary">
                <span className="font-mono text-2xl text-muted-foreground">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8"
          >
            {project.description}
          </motion.p>

          {/* External link */}
          {project.link && project.link !== "#" && (
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Visit Project <ExternalLink className="h-4 w-4" />
            </motion.a>
          )}
        </div>
      </section>
    </Layout>
  );
}
