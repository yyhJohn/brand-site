import { useState, useEffect, useRef, useCallback } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Alex Chen',
    role: 'Founder, Nexgate',
    avatar: 'AC',
    text: 'The OpenClaw gateway transformed how we handle multi-model routing. What used to take weeks of integration now works out of the box.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'VP Product, LaunchPad',
    avatar: 'SM',
    text: 'UniAPI gave us a single endpoint for all our AI providers. The developer experience is exactly what we needed.',
  },
  {
    name: 'James Wu',
    role: 'CTO, DataFlow',
    avatar: 'JW',
    text: 'The GPA Planner went from concept to production in two weeks. The AI-powered recommendations are genuinely useful for students.',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    avatar: 'RF',
    text: 'Working with HoyoMax felt like having a senior engineering team on demand. Fast execution without cutting corners.',
  },
  {
    name: 'David Zhang',
    role: 'Head of Engineering, Paradigm',
    avatar: 'DZ',
    text: 'The deployment pipeline they set up — Nginx, TLS, Cloudflare, FRP — just works. Zero downtime in six months.',
  },
]

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 3000)
    return () => clearInterval(intervalRef.current)
  }, [paused, next])

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={cn(
          'flex items-center justify-between mb-12',
          isInView ? 'animate-fadeInUp' : 'opacity-0'
        )}>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D212C]">
            What <span className="font-serif">products</span> do
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#051A24] text-[#051A24]" />
              ))}
            </div>
            <span className="font-body text-sm text-[#273C46]">Built for real-world shipping</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${current * (427.5 + 24)}px)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8"
              >
                <Quote className="w-8 h-8 text-[#051A24]/10 mb-4" />
                <p className="font-body text-base text-[#0D212C] leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#051A24] to-[#273C46] flex items-center justify-center text-white font-body text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-[#0D212C]">{t.name}</p>
                    <p className="font-body text-xs text-[#273C46]">→ {t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#F6FCFF] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#051A24]" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === current ? 'bg-[#051A24] w-6' : 'bg-[#051A24]/20'
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#F6FCFF] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#051A24]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
