import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading command="cat about.md" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal delay={0.05} className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-muted"
          >
            I'm a self-taught full-stack developer based in Kerala, with a
            B.Tech in Computer Science from APJ Abdul Kalam Technological
            University. Most of what I know came from building things —
            starting with a computer-vision air-writing tool, moving through
            MERN and Django full-stack apps, and most recently into
            LLM-powered products: retrieval-augmented chatbots, AI-assisted
            review tools, and the backend plumbing that makes them reliable.
            I like taking a project from a blank repo to something people can
            actually open and use.
          </motion.p>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-teal font-semibold">
              📚 Education
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-3 text-sm text-ink font-semibold"
            >
              B.Tech, Computer Science &amp; Engineering
              <br />
              <span className="text-muted">
                APJ Abdul Kalam Technological University · 2025
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-teal font-semibold">
                🏆 Certifications
              </h3>
              <motion.ul
                className="mt-3 space-y-2"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {['IBM Full Stack Software Developer', 'IBM AI Engineering', 'IBM Front-End Development'].map(
                  (cert, i) => (
                    <motion.li
                      key={cert}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="text-sm text-ink hover:text-amber transition-colors cursor-default flex items-start"
                    >
                      <span className="mr-2 text-amber">▹</span>
                      {cert}
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export function SectionHeading({ command }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 font-mono text-sm text-teal font-semibold tracking-wide"
    >
      $ {command}
    </motion.p>
  )
}
