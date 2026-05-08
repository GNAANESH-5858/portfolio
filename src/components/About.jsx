import { motion } from 'framer-motion'
import { ABOUT } from '../constants/data'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-40 px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 font-bold">About Me</p>
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-white">Who I Am</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-white/80 text-xl leading-relaxed font-medium">
              {ABOUT.bio}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {ABOUT.highlights.map((h, i) => (
              <motion.div 
                key={i} 
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                animate={{ y: [0, -4, 0] }}
                viewport={{ once: true }} 
                transition={{ 
                  opacity: { delay: i * 0.1 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                }}
              >
                <p className="text-white font-bold text-lg">{h}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
