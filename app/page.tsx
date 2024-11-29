import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Capabilities />
      <Pricing />
      <Footer />
    </main>
  )
}

