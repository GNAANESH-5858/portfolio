import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/data'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 px-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">What I've Built</p>
        <h2 className="text-4xl font-black mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t, j) => <span key={j} className="px-2 py-1 text-xs text-blue-400 border border-blue-500/30 rounded-full">{t}</span>)}
              </div>
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"><FiGithub /> GitHub</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/50 hover:text-blue-400 text-sm transition-colors"><FiExternalLink /> Live Demo</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
