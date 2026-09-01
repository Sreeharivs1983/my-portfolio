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

  const handleNavClick = (href) => {
    setActive(href)
    setMobileMenuOpen(false)
  }

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
      className={`sticky top-0 z-[100] overflow-visible transition-all duration-300 ${
        isScrolled
          ? 'border-b border-line/50 bg-bg/60 backdrop-blur-md shadow-lg'
          : 'border-b border-line/20 bg-bg/40 backdrop-blur'
      }`}
    >
      <nav className="relative z-[101] mx-auto flex max-w-4xl items-center justify-between px-3 sm:px-6 py-3 sm:py-4 gap-4 overflow-visible">
        <motion.a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm sm:text-base md:text-lg font-semibold text-ink transition-all hover:text-amber hover:scale-110 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          sreehari<span className="text-amber">.</span>dev
        </motion.a>

        <div className="md:hidden relative ml-auto">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="z-[120] flex h-10 w-10 items-center justify-center rounded-full p-2"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="text-3xl leading-none text-amber">×</span>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block h-1 w-7 rounded-full bg-amber" />
                <span className="block h-1 w-7 rounded-full bg-ink" />
                <span className="block h-1 w-7 rounded-full bg-amber" />
              </div>
            )}
          </motion.button>

          <motion.div
            initial={false}
            animate={
              mobileMenuOpen
                ? { opacity: 1, x: 0, y: 0, pointerEvents: 'auto' }
                : { opacity: 0, x: 18, y: -8, pointerEvents: 'none' }
            }
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[92px] z-[130] overflow-hidden rounded-2xl border border-line/50 bg-bg/95 shadow-2xl backdrop-blur-md pointer-events-auto"
          >
            <div className="flex justify-end p-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/40 text-2xl text-amber hover:bg-surface/60"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <motion.ul className="flex flex-col gap-2 px-4 pb-5 pt-1 font-mono text-2xl text-muted">
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
                    className={`block py-3 px-2 rounded-xl transition-all duration-300 ${
                      active === link.href ? 'text-amber font-semibold' : 'text-ink hover:text-amber'
                    }`}
                    whileHover={{ x: 6 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

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
                onClick={() => handleNavClick(link.href)}
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
