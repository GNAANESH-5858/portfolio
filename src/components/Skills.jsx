import { motion } from 'framer-motion'
import { SKILLS } from '../constants/data'
export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32 px-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">What I Know</p>
        <h2 className="text-4xl font-black mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => (
            <motion.div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 text-xs bg-white/10 text-white/70 rounded-full border border-white/5">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
