import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink, HiArrowDown } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { Section, SectionHeading, staggerContainer, fadeInUp } from './ui/Section'
import { projects } from '../data/site'

type Project = (typeof projects)[number]

function WebShots({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0)
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-xl shadow-accent/5">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="aspect-[16/10]">
          <img
            src={images[i]}
            alt={`${title} screenshot ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {images.map((src, n) => (
          <button
            key={src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show screenshot ${n + 1}`}
            className={`h-14 flex-1 overflow-hidden rounded-lg border transition-all ${
              n === i ? 'border-accent' : 'border-border opacity-60 hover:opacity-100'
            }`}
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  )
}

function PhoneShots({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="flex justify-center gap-3 overflow-x-auto py-1">
      {images.map((src, n) => (
        <img
          key={src}
          src={src}
          alt={`${title} screenshot ${n + 1}`}
          loading="lazy"
          className="h-64 w-auto shrink-0 rounded-2xl border border-border shadow-lg sm:h-72"
        />
      ))}
    </div>
  )
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-5 font-mono text-sm">
      <p className="mb-3 text-xs text-text-muted">how it works</p>
      {steps.map((s, n) => (
        <div key={s} className="flex flex-col items-center gap-2 pb-2">
          <div className="w-full rounded-lg border border-border bg-surface-muted px-4 py-3 text-center text-text">
            <span className="mr-2 text-accent">{String(n + 1).padStart(2, '0')}</span>
            {s}
          </div>
          {n < steps.length - 1 && <HiArrowDown className="h-4 w-4 text-accent" />}
        </div>
      ))}
    </div>
  )
}

function Visual({ p }: { p: Project }) {
  if (p.kind === 'web' && p.images) return <WebShots images={p.images} title={p.title} />
  if (p.kind === 'phone' && p.images) return <PhoneShots images={p.images} title={p.title} />
  if (p.flow) return <Flow steps={p.flow} />
  return null
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-surface-muted/50">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="04. Projects"
          title="Selected work"
          description="Full-stack, AI automation and embedded systems projects built from the ground up."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-8"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              className="grid items-center gap-8 rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 md:p-8 lg:grid-cols-2"
            >
              <div className={idx % 2 ? 'lg:order-2' : ''}>
                <span className="font-mono text-sm text-accent">{String(idx + 1).padStart(2, '0')}</span>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-text">{p.title}</h3>
                  <span className="rounded-md border border-border bg-surface-muted px-2 py-0.5 font-mono text-xs text-accent">
                    {p.subtitle}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent">
                      <FaGithub className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent">
                      <HiExternalLink className="h-4 w-4" /> Live demo
                    </a>
                  )}
                </div>
              </div>
              <div className={idx % 2 ? 'lg:order-1' : ''}>
                <Visual p={p} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}