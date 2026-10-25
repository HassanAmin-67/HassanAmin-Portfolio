import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { siteConfig } from '../data/site'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4"
    >
      <nav className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>
          {siteConfig.name.split(' ')[0].toLowerCase()}
          <span className="animate-pulse text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs text-text-muted transition-colors hover:text-accent"
              >
                {item.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-accent/50 px-3 py-2 font-mono text-xs text-accent transition-all hover:bg-accent hover:text-white sm:inline-block"
          >
            resume
          </a>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-text-muted transition-all hover:border-accent/50 hover:text-accent"
          >
            {theme === 'dark' ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-text md:hidden"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-sm text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
                  >
                    {item.label.toLowerCase()}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-4 py-3 font-mono text-sm text-accent"
                >
                  resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}