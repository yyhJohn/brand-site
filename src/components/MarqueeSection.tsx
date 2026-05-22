const PREVIEWS = [
  { src: '/uniapi-preview.png', name: 'UniAPI' },
  { src: '/gpa-preview.png', name: 'AI Study Planner' },
]

const ITEMS = [...PREVIEWS, ...PREVIEWS, ...PREVIEWS, ...PREVIEWS]

export function MarqueeSection() {
  return (
    <section className="py-12 overflow-hidden bg-[#F6FCFF]">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {ITEMS.map((item, i) => (
          <a
            key={i}
            href={item.name === 'UniAPI' ? 'https://uniapi.hoyomax.me' : 'https://gpa.hoyomax.me'}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-lg border border-[#051A24]/5 group"
          >
            <img
              src={item.src}
              alt={`${item.name} preview`}
              className="h-[280px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
