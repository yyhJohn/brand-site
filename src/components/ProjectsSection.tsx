import { useRef, useState, useEffect } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'

const PROJECTS = [
  {
    name: 'UniAPI',
    subtitle: 'Unified AI API Gateway',
    description: 'Aggregate 50+ AI model providers behind a single API. Subscription management, usage analytics, and intelligent routing built-in. Deployed with TypeScript, PostgreSQL, Stripe, Nginx, and Cloudflare DNS.',
    image: '/uniapi-preview.png',
    link: 'https://uniapi.hoyomax.me',
    tags: ['TypeScript', 'PostgreSQL', 'Stripe', 'Nginx'],
  },
  {
    name: 'AI Study Planner',
    subtitle: 'AI-powered Study Abroad Planning',
    description: 'Intelligent academic planning platform for students. Compare 500+ global universities, predict GPA trajectories, optimize course selections, and get AI-powered study abroad recommendations.',
    image: '/gpa-preview.png',
    link: 'https://gpa.hoyomax.me',
    tags: ['React', 'PostgreSQL', 'AI', 'Tailwind CSS'],
  },
]

function ProjectItem({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-800',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Text block */}
      <div className="ml-4 md:ml-28 mb-6">
        <a href={project.link} target="_blank" rel="noreferrer" className="group cursor-pointer">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#273C46]/60 mb-2">
            {project.subtitle}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24] group-hover:text-[#0D212C] transition-colors">
            {project.name}
          </h3>
          <p className="font-body text-sm md:text-base text-[#051A24]/70 mt-2 max-w-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map(tag => (
              <span key={tag} className="font-body text-[10px] uppercase tracking-wider text-[#273C46]/50 bg-[#F6FCFF] px-2 py-0.5 rounded-full border border-[#051A24]/6">
                {tag}
              </span>
            ))}
          </div>
        </a>
      </div>

      {/* Full-width image */}
      <a href={project.link} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full rounded-2xl shadow-lg object-cover h-[280px] md:h-[500px]"
          loading="lazy"
        />
      </a>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
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
          <p className="font-body text-sm text-[#273C46] mt-4 max-w-md mx-auto">
            Two products, one vision — AI-native tools that ship.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {PROJECTS.map((project, i) => (
            <ProjectItem key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
