import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(147,51,234,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_45%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Portfolio />
        <CTA />
        <footer className="py-10 text-center text-slate-400/70">
          © {new Date().getFullYear()} Muhammad At Thoriq Syaputra. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App