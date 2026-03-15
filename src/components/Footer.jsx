import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 px-8 md:px-16 lg:px-24 py-12">
      {/* Neon gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <span className="font-display text-3xl tracking-widest neon-text">MH.</span>
          <p className="font-mono text-[10px] tracking-widest text-white/20 mt-1">
            MITHUN HALDER — FRONTEND DEVELOPER
          </p>
        </div>

        {/* Center — copyright */}
        <div className="font-mono text-[10px] tracking-widest text-white/20 text-center">
          © {new Date().getFullYear()} — DESIGNED & BUILT BY MITHUN HALDER
        </div>

        {/* Right — socials + scroll up */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Twitter, href: 'https://twitter.com' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-neon transition-colors duration-300"
            >
              <Icon size={15} />
            </a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-2" />

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-9 h-9 flex items-center justify-center neon-border text-white/30 hover:text-neon hover:border-neon/50 transition-all duration-300"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
