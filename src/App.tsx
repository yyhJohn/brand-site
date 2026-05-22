import { HeroSection } from './components/HeroSection'
import { MarqueeSection } from './components/MarqueeSection'
import { TestimonialSection } from './components/TestimonialSection'
import { ProductCarousel } from './components/ProductCarousel'
import { ProjectsSection } from './components/ProjectsSection'
import { PricingSection } from './components/PricingSection'
import { PartnerSection } from './components/PartnerSection'
import { Footer } from './components/Footer'
import { CopyrightBar } from './components/CopyrightBar'
import { BottomNav } from './components/BottomNav'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-[#051A24]">
      <div id="home">
        <HeroSection />
      </div>
      <MarqueeSection />
      <TestimonialSection />
      <div id="products">
        <ProductCarousel />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="services">
        <PricingSection />
      </div>
      <div id="contact">
        <PartnerSection />
      </div>
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  )
}
