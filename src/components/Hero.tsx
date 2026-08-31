import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig } from '../data/site'
import { fadeInUp, staggerContainer } from './ui/Section'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 font-mono text-xs text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.status}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-8 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 font-mono text-lg text-accent md:text-xl"
        >
          {siteConfig.title} · {siteConfig.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-text transition-all hover:border-accent/50 hover:text-accent"
          >
            <HiOutlineMail className="h-4 w-4" />
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center justify-center gap-4"
        >
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-text-muted transition-all hover:border-accent/50 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent"
          >
            <span className="font-mono text-xs">scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <HiArrowDown className="h-4 w-4" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
