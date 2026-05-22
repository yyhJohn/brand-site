import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Globe, BookOpen } from 'lucide-react'

const PRODUCTS = [
  {
    icon: Globe,
    name: 'UniAPI',
    subtitle: 'Unified AI API Gateway',
    tags: ['TypeScript', 'PostgreSQL', 'Stripe', 'Nginx'],
    description: 'Aggregate 50+ AI model providers behind a single API. Subscription management, usage analytics, and intelligent routing. Deployed with TLS, Cloudflare DNS, and production-ready infrastructure.',
    link: 'https://uniapi.hoyomax.me',
  },
  {
    icon: BookOpen,
    name: 'AI Study Planner',
    subtitle: 'AI-powered Study Abroad Planning',
    tags: ['React', 'PostgreSQL', 'AI', 'Tailwind CSS'],
    description: 'Intelligent academic planning platform. Compare 500+ global universities, predict GPA trajectories, optimize course selections, and get personalised application strategy recommendations.',
    link: 'https://gpa.hoyomax.me',
  },
]

export function ProductCarousel() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className={cn(
          'text-center mb-16',
          isInView ? 'animate-fadeInUp' : 'opacity-0'
        )}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-4">
            Products
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D212C]">
            What we've built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon
            return (
              <a
                key={product.name}
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'group rounded-2xl p-8 bg-white border border-[#051A24]/6 shadow-[0_1px_8px_rgba(5,26,36,0.03)] hover:shadow-[0_6px_24px_rgba(5,26,36,0.08)] transition-all duration-400 hover:border-[#051A24]/12',
                  isInView ? 'animate-fadeInUp' : 'opacity-0'
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F6FCFF] flex items-center justify-center mb-5 group-hover:bg-[#051A24]/5 transition-colors">
                  <Icon className="w-6 h-6 text-[#051A24]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#0D212C] mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-[#273C46]/60 mb-3">{product.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map(tag => (
                    <span key={tag} className="font-body text-[10px] uppercase tracking-wider text-[#273C46]/50 bg-[#F6FCFF] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-[#273C46] leading-relaxed">
                  {product.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
