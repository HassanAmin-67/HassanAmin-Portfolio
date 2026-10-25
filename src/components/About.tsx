import { motion } from 'framer-motion'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { siteConfig, stats, certifications } from '../data/site'

export default function About() {
  const rows = [
    ['name', siteConfig.name],
    ['role', siteConfig.title],
    ['education', siteConfig.education],
    ['location', siteConfig.location],
    ['focus', 'full-stack · AI-assisted development'],
    ['status', siteConfig.status],
  ]

  return (
    <Section id="about">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="01. About"
          title="A bit about me"
          description="Who I am, what I've been building, and what I'm looking for."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-text">
              {siteConfig.about}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <div className="mb-3 font-mono text-sm text-accent">
                <span className="text-text-muted">const</span> hassan = {'{'}
              </div>
              <div className="space-y-1.5 pl-4 font-mono text-sm text-text-muted">
                {rows.map(([k, v]) => (
                  <p key={k}>
                    <span className="text-accent">{k}</span>:{' '}
                    <span className="text-emerald-500">&quot;{v}&quot;</span>,
                  </p>
                ))}
              </div>
              <div className="mt-3 font-mono text-sm text-accent">{'}'}</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
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