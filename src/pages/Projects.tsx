import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { categories, projects, type Project } from "@/data/portfolioData";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleCategory = (id: string) => {
    setActiveCategory(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
              My Work
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">All Projects</h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Browse projects by category. Click any project to see full details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => handleCategory("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Layout>
  );
}
