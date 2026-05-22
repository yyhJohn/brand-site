import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Globe } from 'lucide-react'
import { useI18n } from '../i18n'

export default function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.technology'), href: '#technology' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 blur-lg bg-indigo-500/30 group-hover:bg-cyan-500/30 transition-colors" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              CodeCat<span className="text-indigo-400">.</span>dev
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
              title={lang === 'en' ? '切换到中文' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? '中文' : 'EN'}
            </button>

            <a
              href="#contact"
              className="btn-glow ml-4 px-5 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
            >
              {t('nav.try')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-light text-slate-300 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 w-fit flex items-center gap-2 text-lg text-slate-400 hover:text-white"
                onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setMobileOpen(false) }}
              >
                <Globe className="w-5 h-5" />
                {lang === 'en' ? '切换到中文' : 'Switch to English'}
              </motion.button>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-block w-fit px-8 py-3 text-sm font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.try')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
