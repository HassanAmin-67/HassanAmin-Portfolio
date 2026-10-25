import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { experience } from '../data/site'

type Job = (typeof experience)[number]
const SHOWN = 2

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false)
  const extra = job.highlights.length - SHOWN
  const items = open ? job.highlights : job.highlights.slice(0, SHOWN)

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5 md:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-text">{job.role}</h3>
          <p className="font-mono text-sm text-accent">{job.company}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="font-mono text-xs text-text-muted">{job.period}</p>
          <p className="text-xs text-text-muted">{job.location}</p>
        </div>
      </div>

      {job.tags && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <li key={t} className="rounded-full bg-accent-muted px-3 py-1 font-mono text-xs font-medium text-accent">
              {t}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      {extra > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-4 font-mono text-xs text-accent transition-colors hover:text-accent-hover"
        >
          {open ? '− show less' : `+ ${extra} more`}
        </button>
      )}
    </div>
  )
}

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
            <motion.article key={`${job.company}-${job.period}`} variants={fadeInUp} className="relative md:pl-10">
              <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface md:block" />
              <JobCard job={job} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}