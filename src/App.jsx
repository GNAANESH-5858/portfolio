import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <main className="relative z-0 bg-[#080810] text-white font-sans overflow-x-hidden">
      <ParticleBackground />
      <Navbar /><Hero /><About /><Skills /><Projects /><Contact /><Footer />
    </main>
  )
}
