import { I18nProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TechCapabilities from './components/TechCapabilities'
import Stats from './components/Stats'
import Architecture from './components/Architecture'
import BrandStory from './components/BrandStory'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <I18nProvider>
      <div className="noise relative min-h-screen bg-black text-slate-200">
        <Navbar />
        <Hero />
        <Products />
        <TechCapabilities />
        <Stats />
        <Architecture />
        <BrandStory />
        <CTA />
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App
