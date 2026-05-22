import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-12 md:pt-16 pb-16 bg-white">
      <div className="max-w-[440px] mx-auto">
        {/* Logo */}
        <h1
          className={cn(
            'font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.1s' }}
        >
          HoyoMax Studio
        </h1>

        {/* Tagline */}
        <p
          className={cn(
            'font-mono text-xs md:text-sm text-[#051A24] mb-2',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.2s' }}
        >
          AI products, web platforms, and developer systems
        </p>

        {/* Main heading */}
        <h2
          className={cn(
            'text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-6',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.3s' }}
        >
          Build <span className="font-serif">smarter products,</span>
          <br />
          the <span className="font-serif">AI-native way.</span>
        </h2>

        {/* Description */}
        <div
          className={cn(
            'flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I build AI-powered platforms, developer tools, and production-ready web systems that turn complex ideas into polished digital products.
          </p>
          <p>
            From OpenClaw automation and UniAPI infrastructure to AI study planning and campus systems, the studio focuses on practical products that can be shipped, tested, and scaled.
          </p>
          <p>
            Designed for founders, students, and builders who want fast execution without losing product quality.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6',
            isInView ? 'animate-fadeInUp' : 'opacity-0'
          )}
          style={{ animationDelay: '0.5s' }}
        >
          <a href="mailto:contact@hoyomax.me">
            <Button variant="primary">Start a chat</Button>
          </a>
          <a href="#products">
            <Button variant="secondary">View products</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
