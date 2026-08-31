import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="font-mono text-sm text-text-muted">
          © {year} {siteConfig.name}. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-4">
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
              className="text-text-muted transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
