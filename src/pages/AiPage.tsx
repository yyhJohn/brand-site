import { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  Zap,
  Database,
  BarChart3,
  GraduationCap,
  Globe,
  Route,
  Code2,
  Mail,
} from 'lucide-react'
import '@fontsource/geist-sans'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4'

const products = [
  { name: 'UniAPI', desc: 'Unified AI API Gateway', link: 'https://uniapi.hoyomax.me', color: '#6366f1' },
  { name: 'AI Study Planner', desc: 'AI-powered study abroad planning', link: 'https://gpa.hoyomax.me', color: '#a855f7' },
]

// Duplicate for seamless marquee
const MARQUEE_ITEMS = [...products, ...products, ...products, ...products]

const features = [
  {
    icon: Zap,
    title: 'AI Model Routing',
    desc: '50+ AI providers through a single unified API endpoint',
    color: '#fcd34d',
  },
  {
    icon: Database,
    title: 'Smart Caching',
    desc: 'Intelligent response caching to reduce costs and latency',
    color: '#6366f1',
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    desc: 'Real-time dashboards for token usage, costs, and performance',
    color: '#a855f7',
  },
  {
    icon: GraduationCap,
    title: 'GPA Prediction',
    desc: 'AI-powered GPA trajectory analysis and course optimization',
    color: '#fcd34d',
  },
  {
    icon: Globe,
    title: 'University Matching',
    desc: 'Smart comparison of 500+ global universities',
    color: '#6366f1',
  },
  {
    icon: Route,
    title: 'Study Route Planning',
    desc: 'Personalized application strategy and timeline',
    color: '#a855f7',
  },
]

const techStack = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Nginx',
  'Docker', 'Cloudflare', 'Stripe', 'Go', 'Python',
  'Tailwind CSS', 'Prisma', 'Vite', 'Linux', 'systemd',
]

const stats = [
  { value: 50, suffix: '+', label: 'AI Providers' },
  { value: 500, suffix: '+', label: 'Universities' },
  { value: 10, suffix: 'ms', label: 'Average Latency' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
]

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in-up')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const startTime = performance.now()
          const isFloat = !Number.isInteger(value)

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
            const current = value * eased
            setDisplay(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))
            if (progress < 1) requestAnimationFrame(animate)
            else setDisplay(value)
          }
          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function AiPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const featuresRef = useFadeIn()
  const productsRef = useFadeIn()
  const statsRef = useFadeIn()
  const techRef = useFadeIn()
  const ctaRef = useFadeIn()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_MS = 500

    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (remaining <= FADE_MS / 1000 && video.style.opacity !== '0') {
        video.style.transition = `opacity ${FADE_MS}ms ease-out`
        video.style.opacity = '0'
      }
    }

    const onEnded = () => {
      video.style.transition = 'none'
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play()
        requestAnimationFrame(() => {
          video.style.transition = `opacity ${FADE_MS}ms ease-in`
          video.style.opacity = '1'
        })
      }, 100)
    }

    const onPlay = () => {
      if (video.style.opacity === '0') {
        video.style.transition = `opacity ${FADE_MS}ms ease-in`
        video.style.opacity = '1'
      }
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    video.addEventListener('play', onPlay)

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      video.removeEventListener('play', onPlay)
    }
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'hsl(260, 87%, 3%)',
        color: 'hsl(40, 6%, 95%)',
        fontFamily: "'Geist Sans', system-ui, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav className="w-full py-5 px-8 flex items-center justify-between relative z-10">
        <a href="/" className="font-serif text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          HoyoMax
        </a>
        <div className="hidden md:flex items-center gap-1">
          <a href="#features" className="px-3 py-1.5 rounded-md text-sm hover:opacity-100 transition-opacity" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>
            Features
          </a>
          <a href="#products" className="px-3 py-1.5 rounded-md text-sm hover:opacity-100 transition-opacity" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>
            Products
          </a>
          <a href="#technology" className="px-3 py-1.5 rounded-md text-sm hover:opacity-100 transition-opacity" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>
            Technology
          </a>
        </div>
        <a
          href="mailto:contact@hoyomax.me"
          className="rounded-full px-4 py-2 text-sm font-medium"
          style={{
            background: 'hsla(260, 87%, 20%, 0.6)',
            color: 'hsl(40, 6%, 95%)',
            border: '1px solid hsla(260, 60%, 50%, 0.3)',
          }}
        >
          Get Started
        </a>
      </nav>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, hsla(40, 6%, 95%, 0.2), transparent)' }}
      />

      {/* Hero */}
      <section className="flex-1 relative flex items-center justify-center overflow-visible">
        {/* Background video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0 }}
          />
        </div>

        {/* Blur overlay */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            width: 984,
            height: 527,
            opacity: 0.9,
            background: 'rgb(3, 7, 18)',
            filter: 'blur(82px)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1
            className="font-bold leading-none"
            style={{
              fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif",
              fontSize: 'clamp(80px, 15vw, 220px)',
            }}
          >
            <span style={{ color: 'hsl(40, 6%, 95%)' }}>Power </span>
            <span
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)',
              }}
            >
              AI
            </span>
          </h1>
          <p
            className="text-lg leading-8 max-w-md mt-[9px]"
            style={{ color: 'hsl(40, 6%, 82%)', opacity: 0.8 }}
          >
            AI-native products, developer platforms,<br />and intelligent infrastructure
          </p>
          <div className="flex gap-4 mt-[25px]">
            <a
              href="https://uniapi.hoyomax.me"
              target="_blank"
              rel="noreferrer"
              className="px-[29px] py-[24px] rounded-full text-sm font-medium"
              style={{
                background: 'hsla(260, 87%, 20%, 0.6)',
                color: 'hsl(40, 6%, 95%)',
                border: '1px solid hsla(260, 60%, 50%, 0.3)',
              }}
            >
              Explore UniAPI
            </a>
            <a
              href="https://gpa.hoyomax.me"
              target="_blank"
              rel="noreferrer"
              className="px-[29px] py-[24px] rounded-full text-sm font-medium"
              style={{
                background: 'transparent',
                color: 'hsl(40, 6%, 95%)',
                border: '1px solid hsla(40, 6%, 95%, 0.2)',
              }}
            >
              Try AI Planner
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 relative z-10">
        <div ref={featuresRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif" }}
            >
              Powerful Features
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(40, 6%, 65%)' }}>
              Everything you need to build, deploy, and scale AI-powered applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className="liquid-glass rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(40, 6%, 65%)' }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 px-8 relative z-10">
        <div ref={productsRef} className="max-w-6xl mx-auto space-y-24">
          {/* UniAPI Card */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif" }}
              >
                UniAPI
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'hsl(40, 6%, 65%)' }}>
                The unified AI API gateway that aggregates 50+ model providers behind a single endpoint. Smart routing, subscription management, and real-time analytics built in.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'PostgreSQL', 'Stripe', 'Nginx'].map((tag) => (
                  <span
                    key={tag}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium"
                    style={{ color: 'hsl(40, 6%, 82%)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://uniapi.hoyomax.me"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full px-6 py-3 text-sm font-medium"
                style={{
                  background: 'hsla(240, 80%, 60%, 0.2)',
                  color: 'hsl(40, 6%, 95%)',
                  border: '1px solid hsla(240, 80%, 60%, 0.4)',
                }}
              >
                Visit UniAPI →
              </a>
            </div>
            <div className="flex-1 w-full">
              <div
                className="rounded-2xl aspect-video flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, hsla(240, 80%, 60%, 0.15), hsla(270, 80%, 60%, 0.15))',
                  border: '1px solid hsla(240, 80%, 60%, 0.2)',
                }}
              >
                <span className="text-6xl font-bold" style={{ color: 'hsla(240, 80%, 60%, 0.3)' }}>U</span>
              </div>
            </div>
          </div>

          {/* AI Study Planner Card */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif" }}
              >
                AI Study Planner
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'hsl(40, 6%, 65%)' }}>
                An intelligent academic planning platform for students. Compare universities, predict GPA trajectories, optimize course selections, and get AI-powered study abroad recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'PostgreSQL', 'AI', 'Tailwind CSS'].map((tag) => (
                  <span
                    key={tag}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium"
                    style={{ color: 'hsl(40, 6%, 82%)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://gpa.hoyomax.me"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full px-6 py-3 text-sm font-medium"
                style={{
                  background: 'hsla(280, 80%, 60%, 0.2)',
                  color: 'hsl(40, 6%, 95%)',
                  border: '1px solid hsla(280, 80%, 60%, 0.4)',
                }}
              >
                Try AI Planner →
              </a>
            </div>
            <div className="flex-1 w-full">
              <div
                className="rounded-2xl aspect-video flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, hsla(280, 80%, 60%, 0.15), hsla(320, 80%, 60%, 0.15))',
                  border: '1px solid hsla(280, 80%, 60%, 0.2)',
                }}
              >
                <span className="text-6xl font-bold" style={{ color: 'hsla(280, 80%, 60%, 0.3)' }}>A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 relative z-10">
        <div ref={statsRef} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: 'linear-gradient(to right, #6366f1, #a855f7)',
                  }}
                >
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm" style={{ color: 'hsl(40, 6%, 65%)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="technology" className="py-24 px-8 relative z-10">
        <div ref={techRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif" }}
            >
              Built with Modern Tech
            </h2>
            <p className="text-lg" style={{ color: 'hsl(40, 6%, 65%)' }}>
              Powered by the tools and frameworks we trust
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="liquid-glass rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{ color: 'hsl(40, 6%, 82%)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative z-10">
        <div ref={ctaRef} className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'General Sans', 'Geist Sans', system-ui, sans-serif" }}
          >
            Ready to build with AI?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'hsl(40, 6%, 65%)' }}>
            Get in touch or explore our open-source projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@hoyomax.me"
              className="rounded-full px-8 py-4 text-base font-medium inline-flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                color: '#fff',
              }}
            >
              <Mail size={18} />
              Start Building
            </a>
            <a
              href="https://github.com/yyhJohn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-8 py-4 text-base font-medium inline-flex items-center justify-center gap-2"
              style={{
                background: 'transparent',
                color: 'hsl(40, 6%, 95%)',
                border: '1px solid hsla(40, 6%, 95%, 0.2)',
              }}
            >
              <Code2 size={18} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 relative z-10 border-t" style={{ borderColor: 'hsla(40, 6%, 95%, 0.08)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold">HoyoMax Studio</span>
            <span className="mx-2" style={{ color: 'hsl(40, 6%, 40%)' }}>© 2026</span>
          </div>
          <div className="text-sm" style={{ color: 'hsl(40, 6%, 50%)' }}>
            Birmingham, UK
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yyhJohn"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'hsl(40, 6%, 70%)' }}
            >
              <Code2 size={18} />
            </a>
            <a
              href="mailto:contact@hoyomax.me"
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'hsl(40, 6%, 70%)' }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Product Marquee */}
      <div className="w-full pb-10 relative z-10">
        <div className="max-w-5xl mx-auto flex items-center gap-12 px-8">
          <span className="text-sm whitespace-nowrap" style={{ color: 'hsla(40, 6%, 95%, 0.5)' }}>
            Our products<br />live & shipping
          </span>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-16" style={{ animation: 'ai-marquee 20s linear infinite', width: 'max-content' }}>
              {MARQUEE_ITEMS.map((product, i) => (
                <a
                  key={i}
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 whitespace-nowrap group"
                >
                  <div
                    className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ color: product.color }}
                  >
                    {product.name[0]}
                  </div>
                  <div>
                    <span className="text-base font-semibold" style={{ color: 'hsl(40, 6%, 95%)' }}>{product.name}</span>
                    <span className="block text-xs" style={{ color: 'hsla(40, 6%, 95%, 0.4)' }}>{product.desc}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
