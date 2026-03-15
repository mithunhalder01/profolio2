import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Code2, Zap, Coffee } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years Experience', icon: Zap },
  { value: '20+', label: 'Projects Built', icon: Code2 },
  { value: '∞', label: 'Cups of Coffee', icon: Coffee },
  { value: '100%', label: 'Passion', icon: User },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-neon">01 /</span>
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">About Me</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 h-px bg-white/10 origin-left"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl">
        {/* Left — text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-8"
          >
            BUILDING<br />
            <span className="neon-text">DIGITAL</span><br />
            EXPERIENCES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/50 leading-relaxed mb-6 text-sm max-w-md"
          >
            I'm Mithun Halder, a Frontend Developer based in India. I specialize
            in building visually stunning, high-performance web applications that
            push the boundaries of what's possible in a browser.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-white/30 leading-relaxed text-sm max-w-md"
          >
            From pixel-perfect UI to buttery smooth animations — I obsess over
            every detail. I believe great interfaces should feel as good as they
            look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest px-6 py-3 bg-neon text-dark font-medium hover:bg-acid transition-colors duration-300"
            >
              LET'S TALK
            </a>
            <a
              href="/resume.pdf"
              className="font-mono text-xs tracking-widest px-6 py-3 neon-border text-white/60 hover:text-neon transition-colors duration-300"
            >
              RESUME ↗
            </a>
          </motion.div>
        </div>

        {/* Right — stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="neon-border p-6 group hover:border-neon/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/[0.03] transition-all duration-500" />
              <Icon size={18} className="text-neon mb-4 opacity-70" />
              <div className="font-display text-5xl text-white mb-1">{value}</div>
              <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
