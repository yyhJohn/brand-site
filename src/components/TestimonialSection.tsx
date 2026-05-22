import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'

export function TestimonialSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className={cn(
        'max-w-3xl mx-auto text-center',
        isInView ? 'animate-fadeInUp' : 'opacity-0'
      )}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-6">
          What drives us
        </p>
        <blockquote className="font-serif text-3xl md:text-4xl text-[#0D212C] leading-relaxed mb-8 italic">
          "We don't just ship code. We architect systems that compound."
        </blockquote>
        <p className="font-body text-sm text-[#273C46]">
          — HoyoMax Studio, Birmingham UK
        </p>
      </div>
    </section>
  )
}
