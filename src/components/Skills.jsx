import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'React / Next.js', level: 90, category: 'Framework' },
  { name: 'TypeScript', level: 82, category: 'Language' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Framer Motion', level: 85, category: 'Animation' },
  { name: 'GSAP', level: 78, category: 'Animation' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'Figma', level: 75, category: 'Design' },
  { name: 'Git / GitHub', level: 88, category: 'Tool' },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind', 'Framer', 'GSAP', 'Redux', 'Zustand', 'REST API',
  'Git', 'Figma', 'Vite', 'Webpack',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-32 px-8 md:px-16 lg:px-24 relative">
      {/* Bg accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-neon">02 /</span>
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Skills</span>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <div className="max-w-7xl grid lg:grid-cols-2 gap-16">
        {/* Skill bars */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl text-white mb-12"
          >
            MY <span className="neon-text">STACK</span>
          </motion.h2>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-sm text-white/80">{skill.name}</span>
                    <span className="font-mono text-[9px] tracking-widest text-neon/60 border border-neon/20 px-2 py-0.5">
                      {skill.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/30">{skill.level}%</span>
                </div>
                <div className="h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: i * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-y-0 left-0 bg-neon origin-left"
                    style={{ width: `${skill.level}%` }}
                  />
                  {/* Glow dot at end */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.07 + 1.3 }}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_#39FF14]"
                    style={{ left: `calc(${skill.level}% - 3px)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech tags */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-12"
          >
            TECH <span className="neon-text">RADAR</span>
          </motion.h2>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ borderColor: 'rgba(57,255,20,0.6)', color: '#39FF14', scale: 1.05 }}
                className="font-mono text-xs tracking-wider px-4 py-2 border border-white/10 text-white/40 cursor-default transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 border-l-2 border-neon pl-6"
          >
            <p className="font-body text-sm text-white/40 italic leading-relaxed">
              "First, solve the problem. Then, write the code."
            </p>
            <cite className="font-mono text-[10px] text-neon/60 tracking-widest mt-2 block">
              — John Johnson
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
