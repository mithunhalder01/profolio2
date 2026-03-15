import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  const nameRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    // GSAP - animate the neon line
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.2, delay: 1.2, ease: 'power4.out' }
    )

    // GSAP - letter stagger on name
    const letters = nameRef.current?.querySelectorAll('.letter')
    if (letters) {
      gsap.fromTo(
        letters,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          delay: 0.3,
          ease: 'power4.out',
        }
      )
    }
  }, [])

  const firstName = 'MITHUN'
  const lastName = 'HALDER'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden scanline"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(57,255,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Neon circle accent */}
      <div className="absolute top-1/3 right-10 md:right-24 w-64 h-64 rounded-full border border-neon/10 opacity-60" />
      <div className="absolute top-1/3 right-10 md:right-24 w-48 h-48 mt-8 ml-8 rounded-full border border-neon/5" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-neon" />
          <span className="font-mono text-xs tracking-[0.3em] text-neon uppercase">
            Available for work
          </span>
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
        </motion.div>

        {/* Big name */}
        <div ref={nameRef} className="overflow-hidden mb-2">
          <div className="flex flex-wrap">
            {firstName.split('').map((char, i) => (
              <span
                key={i}
                className="letter font-display text-[14vw] md:text-[13vw] lg:text-[11vw] leading-none text-white tracking-tight inline-block"
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-4">
            {lastName.split('').map((char, i) => (
              <span
                key={i}
                className="letter font-display text-[14vw] md:text-[13vw] lg:text-[11vw] leading-none neon-text tracking-tight inline-block"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Neon line */}
        <div ref={lineRef} className="h-px bg-neon w-full max-w-2xl mb-8" />

        {/* Role + desc */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <p className="font-display text-3xl md:text-4xl tracking-widest text-white/80 mb-4">
              FRONTEND DEVELOPER
            </p>
            <p className="font-body text-sm text-white/40 max-w-sm leading-relaxed">
              Crafting pixel-perfect, high-performance web experiences. Turning
              ideas into interactive reality with clean code and creative vision.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center neon-border text-white/50 hover:text-neon hover:border-neon/60 transition-all duration-300 group"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-neon" />
        </motion.div>
      </motion.div>

      {/* Corner coordinate */}
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/20 tracking-widest">
        22.5726°N / 88.3639°E
      </div>
    </section>
  )
}
