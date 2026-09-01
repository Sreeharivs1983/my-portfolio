import { motion } from 'framer-motion'
import { SectionHeading } from './About.jsx'
import Reveal from './Reveal.jsx'

const LINKS = [
  { label: 'Email', value: 'iamsreeharivs@gmail.com', href: 'mailto:iamsreeharivs@gmail.com', icon: '✉️' },
  { label: 'GitHub', value: 'github.com/Sreeharivs1983', href: 'https://github.com/Sreeharivs1983', icon: '🐙' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sreehari--vs', href: 'https://www.linkedin.com/in/sreehari--vs', icon: '💼' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <Reveal>
        <SectionHeading command="./contact.sh" />
      </Reveal>

      <Reveal delay={0.05}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-xl text-base leading-relaxed text-muted"
        >
          Looking for a trainee or entry-level full-stack role where I can
          keep building products end to end. Open to opportunities across
          Kerala's IT parks and remote-friendly teams — reach out any time.
        </motion.p>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.ul
          className="mt-8 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, staggerChildren: 0.1 }}
        >
          {LINKS.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ x: 8 }}
                className="group flex items-baseline gap-3 font-mono text-sm"
              >
                <span className="text-xl w-6">{link.icon}</span>
                <span className="w-16 shrink-0 text-muted group-hover:text-teal transition-colors font-semibold">
                  {link.label}
                </span>
                <motion.span
                  className="text-ink underline decoration-line hover:text-amber hover:decoration-amber transition-colors flex-1"
                  whileHover={{ color: '#FFB454' }}
                >
                  {link.value}
                </motion.span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </section>
  )
}
