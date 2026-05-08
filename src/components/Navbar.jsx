import { HERO } from '../constants/data'
const links = ['About','Skills','Projects','Contact']
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full relative z-50 backdrop-blur-md bg-black/30 border-b border-white/5 px-8 py-4 flex justify-between items-center">
      <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">{HERO.name.split(' ')[0]}</span>
      <ul className="flex gap-8 text-sm text-white/60">
        {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{l}</a></li>)}
      </ul>
    </nav>
  )
}
