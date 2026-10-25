import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDocumentText } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig, roles } from '../data/site'
import { fadeInUp, staggerContainer } from './ui/Section'

const script = [
  { cmd: 'whoami', out: ['hassan-amin  ·  software engineer'] },
  { cmd: 'cat stack.txt', out: ['react  node  express  postgres', 'tailwind  redux  n8n  gemini'] },
  { cmd: 'ls projects/', out: ['job-fit-analyzer/  movie-search/', 'prayer-tracker/  smartswitch/'] },
  { cmd: 'echo $STATUS', out: ['● open to work  ·  Lahore, PK  ·  remote ok'] },
]

type Line = { t: string; k: 'cmd' | 'out' }

function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let cancelled = false
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))
    ;(async () => {
      await wait(900)
      for (const step of script) {
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return
          setTyping(step.cmd.slice(0, i))
          await wait(60)
        }
        await wait(300)
        if (cancelled) return
        setLines((l) => [
          ...l,
          { t: step.cmd, k: 'cmd' },
          ...step.out.map((t) => ({ t, k: 'out' as const })),
        ])
        setTyping('')
        await wait(600)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-accent/10">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-text-muted">~/hassan-amin</span>
      </div>
      <div className="min-h-[280px] space-y-1.5 p-5 font-mono text-sm leading-relaxed">
        {lines.map((l, i) =>
          l.k === 'cmd' ? (
            <p key={i} className="pt-2">
              <span className="text-accent">$ </span>
              <span className="text-text">{l.t}</span>
            </p>
          ) : (
            <p key={i} className="text-text-muted">{l.t}</p>
          ),
        )}
        <p className="pt-2">
          <span className="text-accent">$ </span>
          <span className="text-text">{typing}</span>
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
        </p>
      </div>
    </div>
  )
}

function RoleCycler() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="inline-block h-7 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const grid = {
    backgroundImage:
      'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
    backgroundSize: '48px 48px',
    maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 72%)',
    WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 72%)',
  } as const

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.09]" style={grid} />
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 font-mono text-xs text-text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.status}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Hassan
            <br />
            <span className="text-gradient">Amin</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-5 font-mono text-lg text-accent md:text-xl">
            <span className="text-text-muted">&gt; </span>
            <RoleCycler />
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-5 max-w-md text-lg leading-relaxed text-text-muted">
            {siteConfig.pitch}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              See my work
            </a>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-text transition-all hover:border-accent/50 hover:text-accent"
            >
              <HiOutlineDocumentText className="h-4 w-4" />
              Resume
            </a>
            {[
              { href: siteConfig.social.github, icon: FaGithub, label: 'GitHub' },
              { href: siteConfig.social.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-text-muted transition-all hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <Terminal />
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="font-mono text-xs">scroll</span>
        <HiArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}