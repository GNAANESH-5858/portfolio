import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/data'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-40 px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 font-bold">What I've Built</p>
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <motion.div 
              key={i} 
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/50 hover:bg-white/10 transition-all group shadow-2xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              animate={{ y: [0, -8, 0] }}
              viewport={{ once: true }} 
              transition={{ 
                opacity: { delay: i * 0.15 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }
              }}
            >
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors text-white">{p.title}</h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">{p.desc}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {p.tech.map((t, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/30 rounded-full group-hover:bg-blue-400 group-hover:text-white transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-6 pt-4 border-t border-white/5">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-white/60 hover:text-white text-base font-bold transition-all"
                >
                  <FiGithub /> GitHub
                </a>
                {p.live && (
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-white/60 hover:text-blue-400 text-base font-bold transition-all"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
