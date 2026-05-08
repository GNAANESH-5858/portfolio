import { HERO } from '../constants/data'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-12 py-6 flex justify-between items-center transition-all duration-300">
      <motion.span 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-white font-bold tracking-[0.2em] text-lg uppercase cursor-default"
      >
        {HERO.name.split(' ')[0]}
      </motion.span>
      <ul className="flex gap-10 text-base font-medium text-white/90">
        {links.map(l => (
          <li key={l}>
            <a 
              href={`#${l.toLowerCase()}`} 
              className="hover:text-blue-400 transition-all duration-300 relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
