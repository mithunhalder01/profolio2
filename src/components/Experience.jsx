import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'FRONTEND DEVELOPER',
    company: 'TechCorp Solutions',
    period: '2023 — Present',
    type: 'Full-time',
    desc: 'Leading frontend development for multiple client-facing web apps. Architected reusable component libraries, improved performance by 40%, and mentored junior developers.',
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    role: 'UI DEVELOPER INTERN',
    company: 'StartupXYZ',
    period: '2022 — 2023',
    type: 'Internship',
    desc: 'Built responsive landing pages and interactive dashboards. Collaborated closely with designers and backend engineers in an agile sprint workflow.',
    skills: ['React', 'CSS', 'Figma', 'REST APIs'],
  },
  {
    role: 'FREELANCE DEVELOPER',
    company: 'Self-employed',
    period: '2021 — 2022',
    type: 'Freelance',
    desc: 'Delivered 10+ websites and apps for clients across e-commerce, education, and hospitality industries. Managed end-to-end project delivery.',
    skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'Shopify'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-neon">04 /</span>
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Experience</span>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <div className="max-w-7xl grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-white self-start sticky top-32"
        >
          WORK <br /><span className="neon-text">HISTORY</span>
        </motion.h2>

        {/* Right — timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-px bg-white/10 origin-top"
          />

          <div className="space-y-12 pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-10 top-2 w-2 h-2 rounded-full bg-dark border border-neon/40 group-hover:bg-neon group-hover:shadow-[0_0_10px_#39FF14] transition-all duration-300" />

                {/* Card */}
                <div className="neon-border p-8 hover:border-neon/40 transition-all duration-500 group-hover:bg-neon/[0.02]">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2">
                        <Briefcase size={12} className="text-neon/60" />
                        <span className="font-mono text-xs text-neon/70">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-white/30 mb-1">
                        <Calendar size={11} />
                        <span className="font-mono text-[10px] tracking-widest">{exp.period}</span>
                      </div>
                      <span className="font-mono text-[9px] tracking-widest border border-white/10 text-white/30 px-2 py-0.5">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-white/40 leading-relaxed mb-6">{exp.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] tracking-wider bg-white/[0.04] text-white/40 px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
