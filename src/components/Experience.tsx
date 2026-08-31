import { motion } from 'framer-motion'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { experience } from '../data/site'

export default function Experience() {
  return (
    <Section id="experience" className="bg-surface-muted/50">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="02. Experience"
          title="Where I've worked"
          description="Building production software in fast-moving startup environments."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          {experience.map((job) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              variants={fadeInUp}
              className="relative md:pl-10"
            >
              <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface md:block" />

              <div className="rounded-2xl border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-text">{job.role}</h3>
                    <p className="font-mono text-sm text-accent">{job.company}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-xs text-text-muted">{job.period}</p>
                    <p className="text-xs text-text-muted">{job.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
