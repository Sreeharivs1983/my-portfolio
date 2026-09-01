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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-4">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs sm:text-sm font-semibold text-ink transition-all hover:text-amber hover:scale-110"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          sreehari<span className="text-amber">.</span>dev
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1 z-50"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-amber"
          />
          <motion.div
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-ink"
          />
          <motion.div
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-amber"
          />
        </motion.button>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex items-center gap-8 font-mono text-sm text-muted"
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

        {/* Mobile Menu */}
        <motion.div
          animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10, pointerEvents: 'none' }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 md:hidden bg-bg/95 backdrop-blur-md border-b border-line/30"
        >
          <motion.ul className="flex flex-col items-start gap-4 font-mono text-sm text-muted px-4 sm:px-6 py-4">
            {LINKS.map((link) => (
              <motion.li
                key={link.href}
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block transition-all duration-300 ${
                    active === link.href ? 'text-ink font-semibold' : 'hover:text-ink'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </nav>
    </header>
  )
}
