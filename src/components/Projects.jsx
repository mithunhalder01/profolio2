import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
{
  id: '01',
  title: 'Kartik Painter Services',
  desc: 'A professional lead-generation website for a local painting contractor in Noida. Built to attract clients and showcase services with a clean, responsive UI. Features service listings, contact section, and a strong call-to-action flow.',
  tags: ['React', 'Tailwind CSS', 'Vercel'],
  github: 'https://github.com/mithunhalder01/kartikpainterservices',
  live: 'https://kartikpainterservices.vercel.app/',
  featured: false,
},
  {
  id: '02',
  title: 'Get Fit N Fine Gym',
  desc: 'A bold and energetic landing page for a gym brand with the tagline "Forge Your Legend". Designed to inspire and convert visitors into members with a strong visual identity, service highlights, and membership call-to-actions.',
  tags: ['React', 'Tailwind CSS', 'Vercel'],
  github: 'https://github.com/mithunhalder01/GetFit-N-Fine-Gym',
  live: 'https://get-fit-n-fine-gym.vercel.app/',
  featured: false,
},
  {
  id: '03',
  title: 'The Crochet Land',
  desc: 'A beautiful and aesthetic e-commerce style website for a handmade crochet brand. Showcases products with a warm, artsy vibe — designed to attract buyers and build brand identity for a small creative business.',
  tags: ['React', 'Tailwind CSS', 'Vercel'],
  github: 'https://github.com/mithunhalder01/the-crochet-land',
  live: 'https://the-crochet-land.vercel.app/',
  featured: false,
},
  {
    id: '04',
    title: 'WEATHER.IO',
    desc: 'Ambient weather app with data visualizations using D3.js. Smooth animated transitions for hourly and weekly forecasts.',
    tags: ['React', 'D3.js', 'OpenWeather API'],
    github: '#',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-neon">03 /</span>
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Projects</span>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-7xl text-white mb-16 max-w-7xl"
      >
        SELECTED <span className="neon-text">WORK</span>
      </motion.h2>

      {/* Projects list */}
      <div className="max-w-7xl space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group border border-white/5 hover:border-neon/30 transition-all duration-500 p-8 relative overflow-hidden"
          >
            {/* Hover bg */}
            <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/[0.02] transition-all duration-500" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-6 flex-1">
                {/* Project number */}
                <span className="font-display text-5xl text-white/10 group-hover:text-neon/30 transition-colors duration-500 leading-none pt-1">
                  {project.id}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="font-mono text-[9px] tracking-widest bg-neon text-dark px-2 py-0.5">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-white/40 leading-relaxed max-w-lg mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-widest text-neon/50 border border-neon/15 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={project.github}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-neon hover:border-neon/40 transition-all duration-300"
                >
                  <Github size={15} />
                </a>
                <a
                  href={project.live}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-neon hover:border-neon/40 transition-all duration-300"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 font-mono text-xs tracking-widest text-white/40 hover:text-neon transition-colors duration-300"
        >
          <span>VIEW ALL ON GITHUB</span>
          <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </section>
  )
}
