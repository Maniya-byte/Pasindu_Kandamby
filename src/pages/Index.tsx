import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Network, Server, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { categories, projects, profileData, type Project } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.jpg";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Shield,
};

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-6xl">
          <HeroCarousel />
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-primary/30 md:h-56 md:w-56">
              <img
                src={profilePhoto}
                alt={profileData.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
              {profileData.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {profileData.title}
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              {profileData.bio}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {profileData.skills.map((skill) => (
                <span key={skill} className="category-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
              What I Do
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Project Categories
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Network;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/projects?category=${cat.id}`}
                    className="card-hover flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
                Recent Work
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground md:flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Layout>
  );
}
