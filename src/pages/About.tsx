import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Globe, GraduationCap, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { profileData } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.jpg";
import ProgressiveImage from "@/components/ProgressiveImage";
import CvDownloadButton from "@/components/CvDownloadButton";

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
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 rotate-3" />
                <div className="absolute -inset-3 rounded-2xl border border-primary/10 -rotate-3" />
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-xl" />
                <ProgressiveImage
                  src={profilePhoto}
                  alt={profileData.name}
                  containerClassName="relative h-44 w-44 rounded-2xl border-2 border-primary/40 bg-muted shadow-[var(--shadow-glow)]"
                  className="h-full w-full object-cover object-center"
                />
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
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Github className="h-4 w-4" />
                </a>
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={profileData.social.website} target="_blank" rel="noopener noreferrer" className="social-icon-link">
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
            <h2 className="section-heading">Experience</h2>
            <div className="space-y-6">
              {profileData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="info-card"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="info-card-title">{exp.role}</h3>
                    <span className="info-card-meta">{exp.period}</span>
                  </div>
                  <p className="info-card-subtitle">{exp.company}</p>
                  <p className="info-card-description">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="section-heading flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {profileData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="info-card"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="info-card-title">{edu.degree}</h3>
                    <span className="info-card-meta">{edu.period}</span>
                  </div>
                  <p className="info-card-subtitle">{edu.institution}</p>
                  <p className="info-card-description">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="section-heading flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h2>
            <div className="space-y-4">
              {profileData.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="info-card"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="info-card-title">{cert.name}</h3>
                    <span className="info-card-meta">{cert.year}</span>
                  </div>
                  <p className="info-card-subtitle">{cert.issuer}</p>
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
            <h2 className="section-heading">Skills</h2>
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
            className="relative overflow-visible rounded-2xl border border-primary/30 p-10 text-center"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
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
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Archive className="h-8 w-8 text-primary" />
                </motion.div>
              </motion.div>

              <h2 className="text-3xl font-bold mb-2">Want to know more?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Download my full CV to explore my complete professional background, certifications, and qualifications.
              </p>

              <CvDownloadButton />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

// Import needed for the icon in the CV section
import { Archive } from "lucide-react";
