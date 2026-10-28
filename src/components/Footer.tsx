import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiArrowUp } from 'react-icons/hi'
import { siteConfig } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { href: siteConfig.social.github, icon: FaGithub, label: 'GitHub', external: true },
    { href: siteConfig.social.linkedin, icon: FaLinkedinIn, label: 'LinkedIn', external: true },
    { href: `mailto:${siteConfig.email}`, icon: HiOutlineMail, label: 'Email', external: false },
  ]

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="font-mono text-xs text-text-muted">
          <span className="text-accent">&copy; </span>
          {year} {siteConfig.name} <span className="text-border">|</span> built with React &amp; Tailwind
        </p>

        <div className="flex items-center gap-4">
          {links.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={label}
              className="text-text-muted transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-accent/50 hover:text-accent"
          >
            <HiArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}