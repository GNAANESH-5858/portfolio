import { motion } from 'framer-motion'
import { HERO } from '../constants/data'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-16 px-8 max-w-6xl w-full mx-auto">
        <motion.div 
          className="flex-1 text-center md:text-left" 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }} 
          transition={{ 
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Full-Stack Developer</motion.p>
          <motion.h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            {HERO.name.split(' ')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{HERO.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.p className="text-white/90 text-xl mb-4 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{HERO.tagline}</motion.p>
          <motion.p className="text-white/60 text-base mb-10 max-w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{HERO.sub}</motion.p>
          
          <motion.div className="flex gap-4 flex-wrap justify-center md:justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <a href="#projects" className="px-10 py-4 bg-white text-black hover:bg-blue-400 hover:text-white font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">View Work</a>
            <a href="#contact" className="px-10 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all backdrop-blur-sm">Contact Me</a>
          </motion.div>
          
          <motion.div className="flex gap-6 mt-12 justify-center md:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            {[{icon: <FiGithub />, url: HERO.github},{icon: <FiLinkedin />, url: HERO.linkedin},{icon: <FiMail />, url: `mailto:${HERO.email}`}].map((s,i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-2xl transition-all hover:scale-110">{s.icon}</a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-shrink-0" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }} 
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-20 scale-125" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative z-10 shadow-2xl">
              <img src={HERO.photo} alt={HERO.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
