import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-neon">05 /</span>
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Contact</span>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <div className="max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-8"
          >
            LET'S<br /><span className="neon-text">WORK</span><br />TOGETHER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm text-white/40 leading-relaxed max-w-sm mb-12"
          >
            Got a project in mind? I'm always open to discussing new opportunities,
            creative ideas, or just a friendly chat about frontend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: 'mithun@example.com', href: 'mailto:mithun@example.com' },
              { icon: Phone, label: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: MapPin, label: 'West Bengal, India', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center neon-border group-hover:bg-neon/10 transition-all duration-300">
                  <Icon size={14} className="text-neon" />
                </div>
                <span className="font-mono text-sm text-white/40 group-hover:text-neon transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            { name: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'John Doe' },
            { name: 'email', label: 'YOUR EMAIL', type: 'email', placeholder: 'john@example.com' },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="group">
              <label className="font-mono text-[10px] tracking-[0.3em] text-white/30 block mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full bg-transparent border-b border-white/10 focus:border-neon/60 outline-none py-3 font-body text-sm text-white/70 placeholder:text-white/20 transition-colors duration-300"
              />
            </div>
          ))}

          <div className="group">
            <label className="font-mono text-[10px] tracking-[0.3em] text-white/30 block mb-2">
              YOUR MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full bg-transparent border-b border-white/10 focus:border-neon/60 outline-none py-3 font-body text-sm text-white/70 placeholder:text-white/20 transition-colors duration-300 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 font-mono text-xs tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
              sent
                ? 'bg-neon/20 text-neon border border-neon/30'
                : 'bg-neon text-dark hover:bg-acid'
            }`}
          >
            {sent ? (
              'MESSAGE SENT ✓'
            ) : (
              <>
                SEND MESSAGE
                <Send size={14} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
