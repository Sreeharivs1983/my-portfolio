import { motion } from 'framer-motion'
import { SectionHeading } from './About.jsx'
import Reveal from './Reveal.jsx'

const GROUPS = [
  {
    label: 'Programming Languages',
    icon: '💻',
    items: ['Python', 'JavaScript', 'Java', 'C', 'C++'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Bootstrap', 'Tailwind'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    label: 'Database',
    icon: '🗄️',
    items: ['MySQL', 'MongoDB'],
  },
  {
    label: 'AI/ML',
    icon: '🤖',
    items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'TensorFlow', 'LangChain', 'FAISS', 'Scikit-learn', 'Sentence Transformers', 'Gemini Embeddings', 'NumPy', 'Pandas', 'CNN', 'KNN'],
  },
  {
    label: 'Tools & Platforms',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'AWS', 'Flutter', 'Vercel'],
  },
  {
    label: 'DevOps & Cloud',
    icon: '☁️',
    items: ['Docker', 'CI/CD', 'Cloud Fundamentals'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <Reveal>
        <SectionHeading command="cat skills.json" />
      </Reveal>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: '-100px' }}
      >
        {GROUPS.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.08}>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-line/40 bg-gradient-to-br from-surface/60 to-surface2/40 p-3 sm:p-5 backdrop-blur-sm transition-all hover:border-amber/50 hover:shadow-lg h-full flex flex-col"
            >
              <motion.h3
                className="flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-teal font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <span className="text-lg sm:text-xl">{group.icon}</span>
                {group.label}
              </motion.h3>
              <motion.ul
                className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      scale: 1.08,
                      borderColor: '#FFB454',
                      boxShadow: '0 0 12px rgba(255, 180, 84, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md border border-line/60 px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs text-ink bg-bg/40 hover:text-amber transition-all cursor-default whitespace-nowrap"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  )
}
