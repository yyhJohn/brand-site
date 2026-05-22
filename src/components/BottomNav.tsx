import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { Home, Layers, Briefcase, MessageSquare } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', icon: Home, href: '#home' },
  { label: 'Products', icon: Layers, href: '#products' },
  { label: 'Projects', icon: Briefcase, href: '#projects' },
  { label: 'Contact', icon: MessageSquare, href: '#contact' },
]

export function BottomNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#051A24]/8 rounded-full px-2 py-2 shadow-[0_4px_24px_rgba(5,26,36,0.1)] transition-all duration-500',
      visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
    )}>
      {NAV_ITEMS.map(item => {
        const Icon = item.icon
        return (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs text-[#273C46] hover:bg-[#F6FCFF] hover:text-[#051A24] transition-all duration-200"
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
