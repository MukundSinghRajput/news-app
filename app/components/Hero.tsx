'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stars = starsRef.current
    if (!stars) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      stars.style.transform = `translateY(${scrollPosition * 0.5}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={starsRef}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">NewsAPI</h1>
          <p className="text-xl mb-6">Your Gateway to Real-Time News</p>
          <a 
            href="/docs"
            className="inline-block py-2 px-6 bg-white text-black font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-black hover:text-white border-2 border-white mt-6"
          >
            View Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
