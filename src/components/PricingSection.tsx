import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { ArrowRight, Sparkles } from 'lucide-react'

const PLANS = [
  {
    name: 'Product Sprint',
    price: 'From £499',
    description: 'A focused 2-week engagement to design, build, and ship an MVP or key feature.',
    features: ['Strategy & scoping session', 'Design & prototype', 'Production-ready build', 'Deployment & handover'],
    cta: 'Start a Sprint',
    highlight: true,
  },
  {
    name: 'Long-term Build Partner',
    price: 'Custom',
    description: 'Ongoing development partnership for scaling products, platforms, and internal tools.',
    features: ['Dedicated engineering hours', 'Architecture & DevOps', 'Priority support channel', 'Monthly strategy reviews'],
    cta: 'Let\'s Talk',
    highlight: false,
  },
]

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[#F6FCFF]">
      <div className="max-w-4xl mx-auto">
        <div className={cn(
          'text-center mb-16',
          isInView ? 'animate-fadeInUp' : 'opacity-0'
        )}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-4">
            Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D212C]">
            How we work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-3xl p-8 md:p-10 transition-all duration-500',
                plan.highlight
                  ? 'bg-[#051A24] text-white shadow-[0_8px_40px_rgba(5,26,36,0.2)]'
                  : 'bg-white border border-[#051A24]/8 shadow-[0_2px_16px_rgba(5,26,36,0.04)]',
                isInView ? 'animate-fadeInUp' : 'opacity-0'
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {plan.highlight && <Sparkles className="w-4 h-4 text-[#F6FCFF]/60" />}
                <p className={cn(
                  'font-body text-xs uppercase tracking-[0.2em]',
                  plan.highlight ? 'text-white/60' : 'text-[#273C46]/60'
                )}>
                  {plan.name}
                </p>
              </div>
              <p className={cn(
                'font-serif text-3xl mb-4',
                plan.highlight ? 'text-white' : 'text-[#0D212C]'
              )}>
                {plan.price}
              </p>
              <p className={cn(
                'font-body text-sm leading-relaxed mb-8',
                plan.highlight ? 'text-white/70' : 'text-[#273C46]'
              )}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={cn(
                    'font-body text-sm flex items-center gap-2',
                    plan.highlight ? 'text-white/80' : 'text-[#273C46]'
                  )}>
                    <span className={cn(
                      'w-1.5 h-1.5 rounded-full',
                      plan.highlight ? 'bg-white/40' : 'bg-[#051A24]/20'
                    )} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? 'secondary' : 'primary'}
                className={cn(
                  'w-full',
                  plan.highlight && 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                )}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
