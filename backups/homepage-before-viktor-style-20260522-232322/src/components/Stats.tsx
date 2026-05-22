import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '../i18n'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  prefix?: string
}

function AnimatedCounter({ value, suffix, label, prefix = '' }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * value)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useI18n()

  const stats = [
    { value: 40, suffix: 'M+', label: t('stats.tokens') },
    { value: 1200, suffix: 'M+', label: t('stats.monthly') },
    { value: 6, suffix: '+', label: t('stats.lines') },
    { value: 75, suffix: '%', label: t('stats.faster') },
  ]

  return (
    <section className="relative py-32 px-6">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">{t('stats.badge')}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('stats.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 md:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
