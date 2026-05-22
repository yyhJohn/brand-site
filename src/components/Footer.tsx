import { Mail, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#051A24]/6 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-xl text-[#0D212C] mb-3">HoyoMax Studio</p>
            <p className="font-body text-sm text-[#273C46] leading-relaxed">
              AI products, developer platforms, and creative systems — built in Birmingham, shipped worldwide.
            </p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#273C46]/60 mb-4">
              Products
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://uniapi.hoyomax.me" target="_blank" rel="noreferrer" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors">
                  UniAPI
                </a>
              </li>
              <li>
                <a href="https://gpa.hoyomax.me" target="_blank" rel="noreferrer" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors">
                  GPA Planner
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors">
                  OpenClaw
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors">
                  Campus Match
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#273C46]/60 mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@hoyomax.me" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@hoyomax.me
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li className="font-body text-sm text-[#273C46] flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Birmingham, UK
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
