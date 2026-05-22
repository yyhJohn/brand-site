import { useEffect, useRef, useState } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ArrowRight, Mail } from 'lucide-react'

export function PartnerSection() {
  const { ref: viewRef, isInView } = useInViewAnimation()
  const containerRef = useRef<HTMLElement>(null)
  const [dots, setDots] = useState<{ x: number; y: number; id: number }[]>([])
  const nextId = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = nextId.current++
      setDots(prev => [...prev.slice(-12), { x, y, id }])
    }

    container.addEventListener('mousemove', handleMove)
    return () => container.removeEventListener('mousemove', handleMove)
  }, [])

  // Auto-remove dots after 800ms
  useEffect(() => {
    if (dots.length === 0) return
    const timer = setTimeout(() => {
      setDots(prev => prev.slice(1))
    }, 800)
    return () => clearTimeout(timer)
  }, [dots])

  return (
    <section
      ref={(el) => {
        ;(viewRef as React.MutableRefObject<HTMLElement | null>).current = el
        containerRef.current = el
      }}
      className="relative py-24 md:py-32 px-6 bg-[#051A24] overflow-hidden"
    >
      {/* Mouse trail dots */}
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 rounded-full bg-white/10 pointer-events-none animate-trail-dot"
          style={{ left: dot.x, top: dot.y }}
        />
      ))}

      <div className={cn(
        'relative max-w-3xl mx-auto text-center z-10',
        isInView ? 'animate-fadeInUp' : 'opacity-0'
      )}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
          Partner with us
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Let's build something
          <br />
          <span className="italic text-white/70">worth shipping</span>
        </h2>
        <p className="font-body text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
          Whether it's an AI product, a developer platform, or an internal tool — we're ready.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:contact@hoyomax.me">
            <Button variant="primary" className="bg-white text-[#051A24] hover:bg-white/90">
              <Mail className="w-4 h-4" /> Email Us
            </Button>
          </a>
          <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10">
            View GitHub <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
