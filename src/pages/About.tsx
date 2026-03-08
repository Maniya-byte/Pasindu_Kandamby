import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Twitter, Download } from "lucide-react";
import Layout from "@/components/Layout";
import { profileData } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 flex flex-col items-center gap-8 md:flex-row md:gap-14"
          >
            <div className="shrink-0">
              <div className="h-40 w-40 overflow-hidden rounded-2xl border-2 border-primary/30">
                <img
                  src={profilePhoto}
                  alt={profileData.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold md:text-5xl">About Me</h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {profileData.bio}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-primary" />
                  {profileData.email}
                </span>
              </div>
              <div className="mt-4 flex justify-center gap-3 md:justify-start">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={profileData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              {profileData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {profileData.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="category-badge text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-2">My Resume</h2>
            <p className="text-muted-foreground mb-6">
              Download my full CV to learn more about my background and qualifications.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Upload your CV as <code className="font-mono">public/cv.pdf</code> to make it downloadable.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
