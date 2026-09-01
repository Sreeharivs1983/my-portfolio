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
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-3 sm:px-6 py-3 sm:py-4 gap-4">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] sm:text-xs md:text-sm font-semibold text-ink transition-all hover:text-amber hover:scale-110 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          sreehari<span className="text-amber">.</span>dev
        </motion.a>

        {/* Mobile Menu Button - Only on Mobile */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="w-7 h-1 bg-amber rounded-full"
          />
          <motion.div
            animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            className="w-7 h-1 bg-ink rounded-full"
          />
          <motion.div
            animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            className="w-7 h-1 bg-amber rounded-full"
          />
        </motion.button>

        {/* Desktop Menu - Hidden on Mobile */}
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
          animate={mobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 md:hidden bg-bg/98 backdrop-blur-md border-b border-line/50 overflow-hidden"
        >
          <motion.ul className="flex flex-col gap-1 font-mono text-sm text-muted px-4 py-4">
            {LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <motion.a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded transition-all duration-300 ${
                    active === link.href ? 'text-amber font-semibold bg-surface/40' : 'text-ink hover:text-amber hover:bg-surface/20'
                  }`}
                  whileHover={{ x: 8 }}
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
