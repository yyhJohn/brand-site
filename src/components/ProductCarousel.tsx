import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { Bot, Globe, BookOpen, Users, FileText } from 'lucide-react'

const PRODUCTS = [
  {
    icon: Bot,
    name: 'OpenClaw AI Gateway',
    tags: ['AI', 'Gateway', 'Tools'],
    description: 'Multi-model routing, tool orchestration, Discord integration, and browser control — unified under one gateway.',
  },
  {
    icon: Globe,
    name: 'UniAPI Developer Platform',
    tags: ['API', 'TLS', 'Cloudflare'],
    description: 'Centralised API routing with automatic TLS, Cloudflare DNS management, and developer-first ergonomics.',
    link: 'https://uniapi.hoyomax.me',
  },
  {
    icon: BookOpen,
    name: 'AI Study Planner',
    tags: ['Education', 'AI', 'Strategy'],
    description: 'University comparison engine with GPA strategy planning and personalised study recommendations.',
    link: 'https://gpa.hoyomax.me',
  },
  {
    icon: Users,
    name: 'Campus Match',
    tags: ['Go', 'PostgreSQL', 'Social'],
    description: 'Social matching platform built with Go and PostgreSQL — fast, reliable, and privacy-first.',
  },
  {
    icon: FileText,
    name: 'Issue Reporting System',
    tags: ['Django', 'React', 'Tracking'],
    description: 'Full-stack issue tracking with Django backend and React frontend for streamlined bug reporting.',
  },
]

export function ProductCarousel() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon
            const Card = product.link ? 'a' : 'div'
            const cardProps = product.link
              ? { href: product.link, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <Card
                key={product.name}
                {...cardProps}
                className={cn(
                  'group rounded-2xl p-6 bg-white border border-[#051A24]/6 shadow-[0_1px_8px_rgba(5,26,36,0.03)] hover:shadow-[0_6px_24px_rgba(5,26,36,0.08)] transition-all duration-400 hover:border-[#051A24]/12',
                  isInView ? 'animate-fadeInUp' : 'opacity-0'
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6FCFF] flex items-center justify-center mb-4 group-hover:bg-[#051A24]/5 transition-colors">
                  <Icon className="w-5 h-5 text-[#051A24]" />
                </div>
                <h3 className="font-body text-base font-semibold text-[#0D212C] mb-2">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.tags.map(tag => (
                    <span key={tag} className="font-body text-[10px] uppercase tracking-wider text-[#273C46]/50 bg-[#F6FCFF] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-[#273C46] leading-relaxed">
                  {product.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
