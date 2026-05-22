import { useEffect, useRef, useState, useCallback } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ArrowRight, Mail } from 'lucide-react'

const MARQUEE_GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

interface TrailDot {
  x: number
  y: number
  id: number
  rotation: number
  gif: string
}

export function PartnerSection() {
  const { ref: viewRef, isInView } = useInViewAnimation()
  const containerRef = useRef<HTMLElement>(null)
  const [dots, setDots] = useState<TrailDot[]>([])
  const nextId = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    // Disable on mobile
    if (window.matchMedia('(max-width: 768px)').matches) return

    const container = containerRef.current
    if (!container) return

    const handleMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastSpawn.current < 80) return
      lastSpawn.current = now

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = nextId.current++
      const rotation = (Math.random() - 0.5) * 20
      const gif = MARQUEE_GIFS[Math.floor(Math.random() * MARQUEE_GIFS.length)]
      setDots(prev => [...prev.slice(-8), { x, y, id, rotation, gif }])
    }

    container.addEventListener('mousemove', handleMove)
    return () => container.removeEventListener('mousemove', handleMove)
  }, [])

  // Auto-remove after 1000ms
  useEffect(() => {
    if (dots.length === 0) return
    const timer = setTimeout(() => {
      setDots(prev => prev.slice(1))
    }, 1000)
    return () => clearTimeout(timer)
  }, [dots])

  return (
    <section
      id="contact"
      ref={(el) => {
        ;(viewRef as React.MutableRefObject<HTMLElement | null>).current = el
        containerRef.current = el
      }}
      className="relative py-24 md:py-32 px-6 bg-white overflow-hidden"
    >
      {/* Mouse trail GIF thumbnails */}
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute pointer-events-none transition-opacity duration-1000"
          style={{
            left: dot.x - 40,
            top: dot.y - 40,
            transform: `rotate(${dot.rotation}deg) scale(${1})`,
            opacity: 0,
            animation: 'trailFade 1s ease-out forwards',
          }}
        >
          <img
            src={dot.gif}
            alt=""
            className="w-20 h-20 rounded-xl object-cover shadow-lg"
          />
        </div>
      ))}

      <div className={cn(
        'relative max-w-7xl mx-auto py-40 md:py-48 rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] bg-white z-10 text-center',
        isInView ? 'animate-fadeInUp' : 'opacity-0'
      )}>
        <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12">
          Build with <span className="font-serif">HoyoMax</span>
        </h2>
        <a href="mailto:contact@hoyomax.me">
          <Button variant="primary" className="text-base px-10 py-4">
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-serif text-lg font-semibold mr-2">
              J
            </span>
            Start chat with John
          </Button>
        </a>
      </div>
    </section>
  )
}
