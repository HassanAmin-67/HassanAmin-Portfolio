import { motion } from 'framer-motion'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { siteConfig, stats, certifications } from '../data/site'

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="01. About"
          title="Building things that matter"
          description="A quick snapshot of who I am and what drives my work."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8"
            >
              <div className="mb-4 font-mono text-sm text-accent">
                <span className="text-text-muted">const</span> about = {'{'}
              </div>

              <div className="space-y-3 pl-4 font-mono text-sm leading-relaxed text-text-muted md:text-base">
                <p>
                  <span className="text-accent">name</span>:{' '}
                  <span className="text-emerald-500">&quot;{siteConfig.name}&quot;</span>,
                </p>
                <p>
                  <span className="text-accent">role</span>:{' '}
                  <span className="text-emerald-500">&quot;{siteConfig.title}&quot;</span>,
                </p>
                <p>
                  <span className="text-accent">education</span>:{' '}
                  <span className="text-emerald-500">&quot;{siteConfig.education}&quot;</span>,
                </p>
                <p>
                  <span className="text-accent">location</span>:{' '}
                  <span className="text-emerald-500">&quot;{siteConfig.location}&quot;</span>,
                </p>
                <p>
                  <span className="text-accent">stack</span>:{' '}
                  <span className="text-emerald-500">&quot;{siteConfig.tagline}&quot;</span>,
                </p>
              </div>

              <div className="mt-4 font-mono text-sm text-accent">{'}'}</div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-text-muted"
            >
              {siteConfig.bio} Comfortable moving fast, learning on the job, and owning work end to end.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-3"
            >
              {certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs text-text-muted"
                >
                  {cert.name}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-border bg-surface-elevated p-6 text-center transition-shadow hover:shadow-lg hover:shadow-accent/5"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
