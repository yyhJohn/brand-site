import { useRef, useState, useEffect } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { cn } from '../lib/utils'

const PROJECTS = [
  {
    name: 'OpenClaw AI Gateway',
    description: 'AI automation gateway with providers, tools, browser control, Discord integration, and secure systemd deployment.',
    image: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    link: '#',
  },
  {
    name: 'UniAPI Developer Platform',
    description: 'A developer-facing API and frontend platform deployed with Vite, Nginx, FRP, TLS, and Cloudflare DNS.',
    image: 'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
    link: 'https://uniapi.hoyomax.me',
  },
  {
    name: 'AI Study Planner',
    description: 'An AI-powered planning website for university applications, module selection, GPA strategy, and study route decisions.',
    image: 'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
    link: 'https://gpa.hoyomax.me',
  },
  {
    name: 'Issue Reporting System',
    description: 'A Django REST and React system for reporting, processing, and tracking issues with test coverage and team workflow.',
    image: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    link: '#',
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

  const Wrapper = project.link && project.link !== '#' ? 'a' : 'div'
  const wrapperProps = project.link && project.link !== '#'
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-800',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Text block - offset left */}
      <div className="ml-4 md:ml-28 mb-6">
        <Wrapper {...wrapperProps} className="group cursor-pointer">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24] group-hover:text-[#0D212C] transition-colors">
            {project.name}
          </h3>
          <p className="font-body text-sm md:text-base text-[#051A24]/70 mt-2 max-w-lg">
            {project.description}
          </p>
        </Wrapper>
      </div>

      {/* Full-width image */}
      <Wrapper {...wrapperProps}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full rounded-2xl shadow-lg object-cover h-[280px] md:h-[500px]"
          loading="lazy"
        />
      </Wrapper>
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
            Projects
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D212C]">
            Selected work
          </h2>
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
