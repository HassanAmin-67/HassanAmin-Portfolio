import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { Section, SectionHeading, fadeInUp, staggerContainer } from './ui/Section'
import { siteConfig } from '../data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          label="05. Contact"
          title="Let's connect"
          description="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                <HiOutlineMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-text transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                <HiOutlinePhone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Phone</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="font-medium text-text transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                <HiOutlineLocationMarker className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="font-medium text-text">{siteConfig.location}</p>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="leading-relaxed text-text-muted">
              Whether you have a question, a project proposal, or just want to connect —
              my inbox is always open. I&apos;ll do my best to get back to you promptly.
            </motion.p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <span className="text-4xl">✓</span>
                <p className="mt-4 text-lg font-semibold text-text">Message sent!</p>
                <p className="mt-2 text-sm text-text-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
                >
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </Section>
  )
}
