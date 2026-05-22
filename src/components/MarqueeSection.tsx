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

// Double the array for seamless loop
const ITEMS = [...GIFS, ...GIFS]

export function MarqueeSection() {
  return (
    <section className="py-12 overflow-hidden bg-[#F6FCFF]">
      <div className="flex animate-marquee">
        {ITEMS.map((gif, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-40 mx-4 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(5,26,36,0.06)] border border-[#051A24]/5"
          >
            <img
              src={gif}
              alt={`Product preview ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
