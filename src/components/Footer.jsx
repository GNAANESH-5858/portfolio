import { HERO } from '../constants/data'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-white/30 text-sm">© 2025 {HERO.name}</p>
      <div className="flex gap-5">
        <a href={HERO.github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors"><FiGithub size={18}/></a>
        <a href={HERO.linkedin} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors"><FiLinkedin size={18}/></a>
      </div>
    </footer>
  )
}
