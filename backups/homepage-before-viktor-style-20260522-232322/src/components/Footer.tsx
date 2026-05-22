import { Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()

  const footerLinks = {
    [t('footer.products')]: [
      { label: 'UniAPI', href: 'https://uniapi.hoyomax.me' },
      { label: 'Auto Translator', href: '#' },
      { label: 'OpenClaw Gateway', href: '#' },
      { label: 'GPA Planner', href: 'https://gpa.hoyomax.me' },
      { label: 'Campus Match', href: '#' },
      { label: 'Issue Reporting', href: '#' },
    ],
    [t('footer.technology')]: [
      { label: 'AI Agents', href: '#technology' },
      { label: 'API Gateway', href: '#technology' },
      { label: 'Cloud Architecture', href: '#technology' },
      { label: 'Automation', href: '#technology' },
    ],
    [t('footer.contact')]: [
      { label: 'GitHub', href: 'https://github.com/yyhJohn' },
      { label: 'Email', href: 'mailto:hello@codecat.dev' },
      { label: 'Console', href: '#' },
    ],
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-base font-semibold text-white">
                CodeCat<span className="text-indigo-400">.</span>dev
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-slate-300 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} CodeCat.dev — {t('footer.rights')}
          </p>
          <p className="text-xs text-slate-700">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
