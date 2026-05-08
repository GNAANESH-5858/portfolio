import { useState } from 'react'
import { motion } from 'framer-motion'
import { WEB3FORMS_KEY, HERO } from '../constants/data'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
    setTimeout(() => setStatus(null), 4000)
  }
  const inp = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
  return (
    <section id="contact" className="relative z-10 py-32 px-8 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-4xl font-black mb-12">Contact</h2>
        <form onSubmit={submit} className="flex flex-col gap-5">
          <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required className={inp} />
          <input name="email" type="email" value={form.email} onChange={handle} placeholder="Your Email" required className={inp} />
          <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message" rows={5} required className={inp} />
          <button type="submit" disabled={status === 'loading'} className="px-8 py-3 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-400 text-sm text-center">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>}
        </form>
      </motion.div>
    </section>
  )
}
