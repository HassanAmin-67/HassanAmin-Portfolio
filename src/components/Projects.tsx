import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { projects } from '../data/site'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <Section id="projects" className="bg-surface-muted/50">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="04. Projects"
          title="Selected work"
          description="Full-stack and embedded systems projects built from the ground up."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {featured.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 md:p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-2xl text-accent">{'//'}</span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-text-muted transition-colors hover:text-accent"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-text-muted transition-colors hover:text-accent"
                    >
                      <HiExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-text transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <span className="rounded-md border border-border bg-surface-muted px-2 py-0.5 font-mono text-xs text-accent">
                    {project.subtitle}
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-xs text-text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
