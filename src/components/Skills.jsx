import { motion } from 'framer-motion'
import { SKILLS } from '../constants/data'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-40 px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 font-bold">What I Know</p>
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((group, i) => (
            <motion.div 
              key={i} 
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/50 hover:bg-white/10 transition-all group shadow-2xl"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              animate={{ y: [0, -6, 0] }}
              viewport={{ once: true }} 
              transition={{ 
                opacity: { delay: i * 0.1 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
              }}
            >
              <p className="text-blue-400 font-black text-sm uppercase tracking-[0.2em] mb-6 group-hover:text-white transition-colors">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, j) => (
                  <span 
                    key={j} 
                    className="px-4 py-2 text-sm bg-white/10 text-white font-medium rounded-xl border border-white/10 group-hover:bg-white group-hover:text-black transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
