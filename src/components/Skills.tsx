import { motion } from 'framer-motion'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { skills } from '../data/site'

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="03. Skills"
          title="Tech stack"
          description="What I build with, grouped by what I use it for."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                <span className="text-text-muted">~/ </span>
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}