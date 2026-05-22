import { motion } from 'framer-motion'
import { User, Monitor, Network, Cpu, Wrench, Database } from 'lucide-react'
import { useI18n } from '../i18n'

const layers = [
  { icon: User, label: 'User', sub: 'Web / Mobile / CLI', color: 'from-slate-400 to-slate-500' },
  { icon: Monitor, label: 'Web App', sub: 'React / Next.js', color: 'from-indigo-400 to-indigo-600' },
  { icon: Network, label: 'API Gateway', sub: 'UniAPI / OpenClaw', color: 'from-cyan-400 to-cyan-600' },
  { icon: Cpu, label: 'AI Providers', sub: 'OpenAI / Anthropic / Google', color: 'from-purple-400 to-purple-600' },
  { icon: Wrench, label: 'Agent Tools', sub: 'Browser / Exec / Search', color: 'from-amber-400 to-amber-600' },
  { icon: Database, label: 'Data / Automation', sub: 'PostgreSQL / Redis / Cron', color: 'from-emerald-400 to-emerald-600' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const nodeVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Architecture() {
  const { t } = useI18n()

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">{t('arch.badge')}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('arch.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            {t('arch.desc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {layers.map((layer, i) => (
            <motion.div key={layer.label} variants={nodeVariants}>
              <div className="glass-card rounded-2xl p-5 flex items-center gap-5 group hover:bg-white/[0.06] transition-all duration-500">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                  <layer.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold">{layer.label}</div>
                  <div className="text-sm text-slate-500">{layer.sub}</div>
                </div>
                <div className="hidden sm:block text-xs text-slate-600 font-mono">
                  Layer {i + 1}
                </div>
              </div>

              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 * (i + 1) }}
                    className="w-px h-6 bg-gradient-to-b from-white/10 to-white/5 origin-top"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            className="text-slate-400 text-xs font-mono space-y-12"
          >
            <div>request →</div>
            <div>route →</div>
            <div>proxy →</div>
            <div>invoke →</div>
            <div>execute →</div>
            <div>persist</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
