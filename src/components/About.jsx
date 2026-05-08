import { motion } from 'framer-motion'
import { ABOUT } from '../constants/data'
export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-4xl font-black mb-10">Who I Am</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-white/60 text-lg leading-relaxed">{ABOUT.bio}</p>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT.highlights.map((h, i) => (
              <motion.div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-blue-400 font-bold">{h}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
