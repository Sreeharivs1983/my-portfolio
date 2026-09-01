import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CODE_LINES = [
  'const developer = {',
  '  name: "Sreehari V S",',
  '  roles: ["Full-Stack Developer", "Generative AI Developer", "AI/ML Developer"],',
  '  based_in: "Kerala, India",',
  '  builds_with: ["React", "Node.js", "Python", "LLMs"],',
  '  status: "open to trainee & entry-level roles",',
  '};',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
}

export default function Hero() {
  const [linesShown, setLinesShown] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setLinesShown(CODE_LINES.length)
      return
    }
    if (linesShown >= CODE_LINES.length) return
    const timer = setTimeout(() => setLinesShown((n) => n + 1), 220)
    return () => clearTimeout(timer)
  }, [linesShown])

  return (
    <section
      id="top"
      className="relative mx-auto max-w-4xl overflow-hidden px-4 sm:px-6 pb-12 sm:pb-20 pt-12 sm:pt-16 md:pt-24"
    >
      {/* Enhanced ambient floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="orb orb-amber -left-24 -top-24 h-72 w-72"
          animate={{
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb orb-teal -right-16 top-32 h-64 w-64"
          animate={{
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-mono text-xs sm:text-sm text-teal font-semibold tracking-wide"
      >
        $ whoami
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.pre
          className="mt-6 overflow-x-auto rounded-xl border border-line/40 bg-gradient-to-br from-surface/80 to-surface2/80 px-6 py-6 font-mono text-[13px] leading-7 text-ink backdrop-blur-md md:text-[15px] shadow-lg hover:shadow-glow-amber transition-all duration-300"
          whileHover={{
            borderColor: 'rgba(255, 180, 84, 0.4)',
            boxShadow: '0 0 30px rgba(255, 180, 84, 0.2)',
          }}
        >
          {CODE_LINES.slice(0, linesShown).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Highlighted line={line} />
              {i === linesShown - 1 && linesShown < CODE_LINES.length && (
                <span className="caret">&nbsp;</span>
              )}
            </motion.div>
          ))}
          {linesShown >= CODE_LINES.length && <span className="caret">&nbsp;</span>}
        </motion.pre>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-8 max-w-xl text-base leading-relaxed text-muted"
      >
        2025 CS graduate who ships complete products end to end — frontend,
        backend, and increasingly the LLM layer in between. Recent work
        spans a RAG-based document assistant, an AI resume reviewer, and a
        full-stack book manager, all deployed and live.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
      >
        <motion.a
          whileHover={{
            y: -4,
            boxShadow: '0 0 30px rgba(255, 180, 84, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          href="#work"
          className="flex-1 sm:flex-none rounded-lg bg-gradient-to-r from-amber to-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-semibold text-bg shadow-lg transition-all hover:shadow-glow-lg text-center"
        >
          View projects
        </motion.a>
        <motion.a
          whileHover={{
            y: -4,
            borderColor: '#FFB454',
            color: '#FFB454',
            boxShadow: '0 0 20px rgba(255, 180, 84, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="flex-1 sm:flex-none rounded-lg border border-line px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-semibold text-ink transition-all text-center"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  )
}

function Highlighted({ line }) {
  const highlightKeyword = (text) => {
    const keywords = ['const', 'return']
    const strings = ['"', "'"]
    const brackets = ['{', '}', '[', ']', '(', ')']

    let result = []
    let i = 0

    while (i < text.length) {
      let matched = false

      for (let keyword of keywords) {
        if (text.substr(i, keyword.length) === keyword) {
          result.push(
            <span key={`kw-${i}`} className="text-teal font-semibold">
              {keyword}
            </span>
          )
          i += keyword.length
          matched = true
          break
        }
      }

      if (!matched) {
        if (text[i] === '"' || text[i] === "'") {
          const stringChar = text[i]
          let stringContent = stringChar
          i++
          while (i < text.length && text[i] !== stringChar) {
            stringContent += text[i]
            i++
          }
          if (i < text.length) {
            stringContent += text[i]
            i++
          }
          result.push(
            <span key={`str-${i}`} className="text-amber">
              {stringContent}
            </span>
          )
          matched = true
        }
      }

      if (!matched) {
        for (let bracket of brackets) {
          if (text[i] === bracket) {
            result.push(
              <span key={`br-${i}`} className="text-teal">
                {bracket}
              </span>
            )
            i++
            matched = true
            break
          }
        }
      }

      if (!matched) {
        result.push(text[i])
        i++
      }
    }

    return result
  }

  return <>{highlightKeyword(line)}</>
}
