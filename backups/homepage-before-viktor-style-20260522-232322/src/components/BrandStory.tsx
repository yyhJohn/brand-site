import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

export default function BrandStory() {
  const { t } = useI18n()

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-8">
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">{t('brand.badge')}</span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            {t('brand.title')}
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
            {t('brand.desc.1')}
          </p>

          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t('brand.desc.2')}
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-sm font-semibold text-white mb-1">{t('brand.principle.1.title')}</h4>
              <p className="text-xs text-slate-500">{t('brand.principle.1.desc')}</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold text-white mb-1">{t('brand.principle.2.title')}</h4>
              <p className="text-xs text-slate-500">{t('brand.principle.2.desc')}</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold text-white mb-1">{t('brand.principle.3.title')}</h4>
              <p className="text-xs text-slate-500">{t('brand.principle.3.desc')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
