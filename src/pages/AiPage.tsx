import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import '@fontsource/geist-sans'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4'

const products = [
  { name: 'UniAPI', desc: 'Unified AI API Gateway', link: 'https://uniapi.hoyomax.me', color: '#6366f1' },
  { name: 'AI Study Planner', desc: 'AI-powered study abroad planning', link: 'https://gpa.hoyomax.me', color: '#a855f7' },
]

// Duplicate for seamless marquee
const MARQUEE_ITEMS = [...products, ...products, ...products, ...products]

export default function AiPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

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
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>
            Products <ChevronDown size={14} />
          </button>
          <button className="px-3 py-1.5 rounded-md text-sm" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>Technology</button>
          <button className="px-3 py-1.5 rounded-md text-sm" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>About</button>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm" style={{ color: 'hsl(40, 6%, 95%)', opacity: 0.9 }}>
            Learn <ChevronDown size={14} />
          </button>
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
