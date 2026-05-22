import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    name: 'OpenClaw AI Gateway',
    category: 'AI Infrastructure',
    year: '2024',
    description: 'Multi-model AI gateway with tool orchestration, Discord bot integration, and browser automation.',
  },
  {
    name: 'UniAPI Developer Platform',
    category: 'Developer Tools',
    year: '2024',
    description: 'Centralised API management platform with TLS automation and Cloudflare DNS integration.',
    link: 'https://uniapi.hoyomax.me',
  },
  {
    name: 'AI Study Planner',
    category: 'Education',
    year: '2023',
    description: 'Intelligent university comparison and GPA strategy planning tool for students.',
    link: 'https://gpa.hoyomax.me',
  },
  {
    name: 'Issue Reporting System',
    category: 'Internal Tools',
    year: '2023',
    description: 'Full-stack issue tracking system with Django REST API and React frontend.',
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={cn(
          'text-center mb-16',
          isInView ? 'animate-fadeInUp' : 'opacity-0'
        )}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-4">
            Projects
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D212C]">
            Selected work
          </h2>
        </div>

        <div className="space-y-0">
          {PROJECTS.map((project, i) => {
            const Wrapper = project.link ? 'a' : 'div'
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
            <Wrapper
              key={project.name}
              {...wrapperProps}
              className={cn(
                'group flex items-center justify-between py-6 border-b border-[#051A24]/6 last:border-0 cursor-pointer hover:bg-[#F6FCFF]/50 -mx-4 px-4 rounded-xl transition-all duration-300',
                isInView ? 'animate-fadeInUp' : 'opacity-0'
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-body text-lg font-medium text-[#0D212C] group-hover:text-[#051A24] transition-colors">
                    {project.name}
                  </h3>
                  <span className="font-body text-[10px] uppercase tracking-wider text-[#273C46]/40 bg-[#F6FCFF] px-2 py-0.5 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="font-body text-xs text-[#273C46]/60 mb-1">{project.category}</p>
                <p className="font-body text-sm text-[#273C46] max-w-md">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#273C46]/30 group-hover:text-[#051A24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4" />
            </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
