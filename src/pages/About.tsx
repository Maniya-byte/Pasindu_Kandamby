import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Globe, Download, FileText, Sparkles } from "lucide-react";
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="mb-16 flex flex-col items-center gap-8 md:flex-row md:gap-14"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 rotate-3" />
                <div className="absolute -inset-3 rounded-2xl border border-primary/10 -rotate-3" />
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-xl" />
                {/* Image container */}
                <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-2 border-primary/40 bg-muted shadow-[var(--shadow-glow)]">
                  <img
                    src={profilePhoto}
                    alt={profileData.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* Corner accent */}
                <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center md:text-left"
            >
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
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Github className="h-4 w-4" />
                </a>
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={profileData.social.website} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              {profileData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {profileData.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4, type: "spring", stiffness: 200 }}
                  className="category-badge text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="relative overflow-hidden rounded-2xl border border-primary/30 p-10 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"
              >
                <FileText className="h-8 w-8 text-primary" />
              </motion.div>

              <h2 className="text-3xl font-bold mb-2">Want to know more?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Download my full CV to explore my complete professional background, certifications, and qualifications.
              </p>

              <motion.a
                href="/src/assets/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-shadow hover:shadow-[0_0_60px_-10px_hsl(36_90%_55%_/_0.5)]"
              >
                <Download className="h-5 w-5" />
                Download My CV
                <Sparkles className="h-4 w-4" />
              </motion.a>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
