import { useRef, useEffect, useState } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Quote } from 'lucide-react'

const BADGES = ['OpenClaw', 'UniAPI', 'AI Planner', 'Campus Match']

export function TestimonialSection() {
  const { ref, isInView } = useInViewAnimation()
  const imgRef = useRef<HTMLImageElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const viewH = window.innerHeight
        const progress = (viewH - rect.top) / (viewH + rect.height)
        setOffset(Math.max(-200, Math.min(200, (progress - 0.5) * 200)))
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className={cn(isInView ? 'animate-fadeInUp' : 'opacity-0')} style={{ animationDelay: '0.1s' }}>
          <Quote className="w-6 h-6 text-[#051A24] mx-auto mb-6" />
        </div>

        <h2
          className={cn(
            'font-serif text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-6',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.2s' }}
        >
          <span className="font-serif">AI</span> should not just answer questions — it should help ship{' '}
          <span className="font-serif">real products</span>.
        </h2>

        <p
          className={cn(
            'font-body italic text-sm text-[#273C46] mb-8',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.3s' }}
        >
          — John Yu / HoyoMax Studio
        </p>

        {/* Product badges */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-4 mb-10',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.4s' }}
        >
          {BADGES.map(badge => (
            <span
              key={badge}
              className="font-body font-medium text-[#051A24] text-[18px] md:text-[20px] px-3"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Parallax image */}
        <div
          className={cn(
            'flex justify-center',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.5s' }}
        >
          <img
            ref={imgRef}
            src="https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif"
            alt="HoyoMax product preview"
            className="w-full max-w-xs rounded-2xl shadow-lg"
            loading="lazy"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      </div>
    </section>
  )
}
