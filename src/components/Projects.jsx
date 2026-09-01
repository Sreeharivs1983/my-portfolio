import { motion } from 'framer-motion'
import { SectionHeading } from './About.jsx'
import Reveal from './Reveal.jsx'

const FEATURED = [
  {
    name: 'NovaAI',
    tagline: 'RAG-based document assistant',
    description:
      'Ask questions against a set of PDF documents and get grounded answers. Handles document ingestion, chunking, semantic search, and LLM-based response generation.',
    stack: ['React', 'FastAPI', 'LangChain', 'FAISS', 'Gemini Embeddings', 'Groq'],
    command: 'novaai --query "summarize the onboarding doc"',
    output: [
      '> retrieving relevant chunks... 4 matches',
      '> generating answer with source citations',
      '✓ response ready in 1.2s',
    ],
    live: 'https://novaai-pdf-rag-chatbot.onrender.com',
    github: 'https://github.com/Sreeharivs1983/NovaAI-pdf-rag-chatbot',
  },
  {
    name: 'AI Resume Reviewer',
    tagline: 'LLM-powered resume analysis',
    description:
      'Upload a resume, get an ATS compatibility score, a skill-gap breakdown, and concrete rewrite suggestions — built around prompt-engineered LLM analysis rather than keyword matching.',
    stack: ['React', 'FastAPI', 'Groq API', 'GPT-OSS'],
    command: 'reviewer --score resume.pdf',
    output: [
      '> parsing resume... done',
      '> ATS score: 78/100',
      '✓ 6 improvement suggestions generated',
    ],
    live: 'https://ai-resume-reviewer-sreehari-vs.vercel.app',
    github: 'https://github.com/Sreeharivs1983/AI-Resume-Reviewer',
  },
  {
    name: 'Personal Book Manager',
    tagline: 'Full-stack library tracker',
    description:
      'A clean React + Next.js app for cataloguing a personal book collection, covering the full loop — UI, API routes, database operations, and deployment.',
    stack: ['React', 'Next.js'],
    command: 'books --add "the pragmatic programmer"',
    output: [
      '> validating entry...',
      '> saved to library (142 books total)',
      '✓ synced',
    ],
    live: 'https://personal-book-manager-nextjs.vercel.app',
    github: 'https://github.com/Sreeharivs1983/personal-book-manager-nextjs',
  },
]

const ALSO_BUILT = [
  'Flood & Landslide Prediction System — Python, Django, TensorFlow, Flutter',
  'Home Job Portal — MERN stack marketplace connecting workers and households',
  'Task & Project Management System — Django REST Framework + React, JWT auth, per-user data isolation',
  'Air-writing recognition tool — OpenCV, MediaPipe, Tesseract OCR',
]

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading command="ls projects/" />
      </Reveal>

      <div className="space-y-6">
        {FEATURED.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
          Also built
        </h3>
        <motion.ul className="mt-4 space-y-3">
          {ALSO_BUILT.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-sm leading-relaxed text-muted hover:text-ink transition-colors"
            >
              <span className="text-ink font-semibold">{item.split(' — ')[0]}</span>
              {' — '}
              <span className="text-muted">{item.split(' — ')[1]}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255, 180, 84, 0.15)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-xl border border-line/40 bg-gradient-to-br from-surface/60 to-surface2/40 backdrop-blur-sm transition-all duration-300 hover:border-amber/50"
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 border-b border-line/30 bg-surface2/50 px-4 py-3">
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="h-2.5 w-2.5 rounded-full bg-amber cursor-pointer"
        />
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="h-2.5 w-2.5 rounded-full bg-teal cursor-pointer"
        />
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="h-2.5 w-2.5 rounded-full bg-muted cursor-pointer"
        />
        <span className="ml-3 font-mono text-xs text-muted/70">
          {project.name.toLowerCase().replace(/\s+/g, '-')}.dev
        </span>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-5">
        {/* Left Content */}
        <motion.div className="md:col-span-3">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-amber to-orange-400 bg-clip-text text-transparent"
          >
            {project.name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-1 font-mono text-xs text-teal/90"
          >
            {project.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-sm leading-relaxed text-muted"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.ul
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.stack.map((tech, i) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: '#FFB454' }}
                className="rounded-md border border-line/50 px-2.5 py-1 font-mono text-xs text-muted hover:text-amber transition-all"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          {/* Links */}
          <motion.div
            className="mt-5 flex gap-6 font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4, color: '#FFB454' }}
              className="group relative text-ink hover:text-amber transition-colors"
            >
              Live demo
              <motion.span
                className="absolute -bottom-0.5 left-0 h-0.5 bg-amber"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4, color: '#FFB454' }}
              className="relative text-ink hover:text-amber transition-colors"
            >
              Source code
              <motion.span
                className="absolute -bottom-0.5 left-0 h-0.5 bg-amber"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Terminal Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-lg border border-line/30 bg-bg/40 p-4 font-mono text-xs leading-6 text-muted md:col-span-2"
        >
          <p className="text-teal font-semibold">$ {project.command}</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.05 }}
          >
            {project.output.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className={`${line.startsWith('✓') ? 'text-teal font-semibold' : 'text-muted'}`}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  )
}
