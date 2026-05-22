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
              Navigation
            </p>
            <ul className="space-y-2.5">
              {['Products', 'Projects', 'Services', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#273C46]/60 mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:17367009925yyh@gmail.com" className="font-body text-sm text-[#273C46] hover:text-[#051A24] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> 17367009925yyh@gmail.com
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
