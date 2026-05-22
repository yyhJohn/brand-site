import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-white">
      <div className={cn(
        'max-w-3xl mx-auto text-center',
        isInView ? 'animate-fadeInUp' : 'opacity-0'
      )}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-6">
          HoyoMax Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-normal text-[#0D212C] leading-[1.1] mb-8">
          We build tools that
          <br />
          <span className="italic">think for you</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-[#273C46] max-w-xl mx-auto leading-relaxed mb-10">
          AI products, developer platforms, and creative systems — designed with precision, shipped with care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects">
            <Button variant="primary">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="mailto:contact@hoyomax.me">
            <Button variant="secondary">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>

      {/* Soft gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F6FCFF] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
    </section>
  )
}
