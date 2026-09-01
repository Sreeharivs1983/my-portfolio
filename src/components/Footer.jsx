import { motion } from 'framer-motion'

const SocialIcon = ({ icon: Icon, href, label, ariaLabel }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noreferrer' : undefined}
    aria-label={ariaLabel}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{
      scale: 1.15,
      filter: 'drop-shadow(0 0 12px rgba(255, 180, 84, 0.6))',
    }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-line/50 bg-surface/40 hover:bg-surface hover:border-amber transition-all duration-300"
    title={label}
  >
    <Icon className="w-6 h-6 text-ink hover:text-amber transition-colors" />
  </motion.a>
)

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

export default function Footer() {
  const socialLinks = [
    {
      icon: EmailIcon,
      label: 'Email',
      href: 'mailto:iamsreeharivs@gmail.com',
      ariaLabel: 'Email Sreehari'
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/Sreeharivs1983',
      ariaLabel: 'Visit GitHub profile'
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sreehari--vs',
      ariaLabel: 'Visit LinkedIn profile'
    },
  ]

  return (
    <footer className="border-t border-line/30 bg-gradient-to-t from-surface/40 to-bg">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 py-10"
      >
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {socialLinks.map((social, i) => (
            <SocialIcon
              key={social.label}
              icon={social.icon}
              href={social.href}
              label={social.label}
              ariaLabel={social.ariaLabel}
            />
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs text-muted text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-2"
          >
            © {new Date().getFullYear()} Sreehari V S. Built with React, Framer Motion &amp; Tailwind.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted/60 text-[11px]"
          >
            Designed to be fast, modern, and accessible. 🚀
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
