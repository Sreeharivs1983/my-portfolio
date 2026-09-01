import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-line/50 bg-bg/60 backdrop-blur-md shadow-lg'
          : 'border-b border-line/20 bg-bg/40 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm font-semibold text-ink transition-all hover:text-amber hover:scale-110"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          sreehari<span className="text-amber">.</span>dev
        </motion.a>
        <motion.ul
          className="flex items-center gap-8 font-mono text-sm text-muted"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.a
                href={link.href}
                className={`transition-all duration-300 ${
                  active === link.href ? 'text-ink font-semibold' : 'hover:text-ink'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
              <motion.span
                className="absolute -bottom-[17px] left-0 h-[2px] bg-gradient-to-r from-amber to-teal"
                initial={{ width: 0 }}
                animate={{ width: active === link.href ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  )
}
