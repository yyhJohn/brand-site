import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useI18n } from '../i18n'

export default function CTA() {
  const { t } = useI18n()

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          {t('cta.title').split('AI-native')[0]}
          <span className="gradient-text">AI-native</span>
          {t('cta.title').split('AI-native')[1] || ''}
        </h2>

        <p className="mt-6 text-lg text-slate-400 max-w-lg mx-auto">
          {t('cta.desc')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:hello@codecat.dev"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            <Mail className="w-4 h-4" />
            {t('cta.contact')}
          </motion.a>
          <motion.a
            href="#products"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-slate-300 font-medium hover:bg-white/10 transition-all"
          >
            {t('cta.explore')}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
