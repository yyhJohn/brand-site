const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

const ITEMS = [...GIFS, ...GIFS]

export function MarqueeSection() {
  return (
    <section className="py-12 overflow-hidden bg-[#F6FCFF]">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {ITEMS.map((gif, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-lg border border-[#051A24]/5"
          >
            <img
              src={gif}
              alt={`Product preview ${i + 1}`}
              className="h-[280px] md:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
