import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineClipboardCopy,
  HiCheck,
} from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Section, SectionHeading, fadeInUp } from './ui/Section'
import { siteConfig } from '../data/site'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${siteConfig.email}`
    }
  }

  const links = [
    { href: siteConfig.social.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: siteConfig.social.github, icon: FaGithub, label: 'GitHub' },
    { href: siteConfig.resume, icon: HiOutlineDocumentText, label: 'Resume' },
  ]

  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          label="05. Contact"
          title="Let's talk"
          description="Hiring, or have something in mind? Email is the fastest way to reach me."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-surface-elevated shadow-xl shadow-accent/5"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-text-muted">~/contact</span>
          </div>

          <div className="p-6 md:p-8">
            <p className="font-mono text-sm text-text-muted">
              <span className="text-accent">$ </span>mail hassan
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 block break-all text-xl font-semibold text-text transition-colors hover:text-accent sm:text-2xl"
            >
              {siteConfig.email}
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                <HiOutlineMail className="h-4 w-4" />
                Email me
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-muted px-6 py-3 text-sm font-semibold text-text transition-all hover:border-accent/50 hover:text-accent"
              >
                {copied ? <HiCheck className="h-4 w-4 text-emerald-500" /> : <HiOutlineClipboardCopy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              {links.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-xs text-text-muted transition-all hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-text-muted">
                <HiOutlineLocationMarker className="h-3.5 w-3.5" />
                {siteConfig.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}