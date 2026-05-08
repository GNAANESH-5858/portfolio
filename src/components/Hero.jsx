import { motion } from 'framer-motion'
import { HERO } from '../constants/data'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-16 px-8 max-w-6xl w-full mx-auto">
        <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Full-Stack Developer</motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black leading-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            {HERO.name.split(' ')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{HERO.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.p className="text-white/50 text-lg mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{HERO.tagline}</motion.p>
          <motion.p className="text-white/30 text-sm mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{HERO.sub}</motion.p>
          <motion.div className="flex gap-4 flex-wrap justify-center md:justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <a href="#projects" className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">View Work</a>
            <a href="#contact" className="px-8 py-3 border border-white/20 hover:border-blue-400 text-white/70 hover:text-white font-semibold rounded-full transition-all backdrop-blur-sm">Contact Me</a>
          </motion.div>
          <motion.div className="flex gap-5 mt-8 justify-center md:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            {[{icon: <FiGithub />, url: HERO.github},{icon: <FiLinkedin />, url: HERO.linkedin},{icon: <FiMail />, url: `mailto:${HERO.email}`}].map((s,i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 text-xl transition-colors">{s.icon}</a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-blue-500/30 relative z-10">
              <img src={HERO.photo} alt={HERO.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
