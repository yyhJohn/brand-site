import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Languages, Bot, GraduationCap, Heart, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n'

interface Product {
  name: string
  subtitleEn: string
  subtitleZh: string
  descKey: string
  tags: string[]
  status: 'Active' | 'Beta' | 'Research' | 'Prototype'
  icon: LucideIcon
  gradient: string
  link?: string
}

const products: Product[] = [
  {
    name: 'UniAPI',
    subtitleEn: 'Unified AI API Gateway',
    subtitleZh: '统一 AI API 网关',
    descKey: 'products.uniapi.desc',
    tags: ['TypeScript', 'PostgreSQL', 'Stripe'],
    status: 'Active',
    icon: Globe,
    gradient: 'from-indigo-500 to-blue-500',
    link: 'https://uniapi.hoyomax.me',
  },
  {
    name: 'Auto Translator',
    subtitleEn: 'Cross-platform Real-time Translation',
    subtitleZh: '跨平台实时翻译',
    descKey: 'products.translator.desc',
    tags: ['Swift', 'AI', 'macOS/iOS'],
    status: 'Active',
    icon: Languages,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'OpenClaw Gateway',
    subtitleEn: 'AI Agent Orchestration Platform',
    subtitleZh: 'AI Agent 编排平台',
    descKey: 'products.openclaw.desc',
    tags: ['Node.js', 'Discord', 'Browser', 'Exec'],
    status: 'Active',
    icon: Bot,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'GPA Planner',
    subtitleEn: 'AI-powered Study Abroad Planning',
    subtitleZh: 'AI 留学规划',
    descKey: 'products.gpa.desc',
    tags: ['React', 'PostgreSQL', 'AI'],
    status: 'Beta',
    icon: GraduationCap,
    gradient: 'from-amber-500 to-orange-500',
    link: 'https://gpa.hoyomax.me',
  },
  {
    name: 'Campus Match',
    subtitleEn: 'Campus Social Matching Platform',
    subtitleZh: '校园社交匹配平台',
    descKey: 'products.campus.desc',
    tags: ['React Native', 'Real-time', 'Maps'],
    status: 'Research',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Issue Reporting',
    subtitleEn: 'Map-based Issue Management',
    subtitleZh: '地图化问题管理',
    descKey: 'products.issue.desc',
    tags: ['Go', 'PostgreSQL', 'GIS'],
    status: 'Prototype',
    icon: MapPin,
    gradient: 'from-emerald-500 to-green-500',
  },
]

const statusColors: Record<string, string> = {
  Active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Research: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Prototype: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

const statusLabels: Record<string, { en: string; zh: string }> = {
  Active: { en: 'Active', zh: '已上线' },
  Beta: { en: 'Beta', zh: '测试中' },
  Research: { en: 'Research', zh: '研发中' },
  Prototype: { en: 'Prototype', zh: '原型阶段' },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Products() {
  const { lang, t } = useI18n()

  return (
    <section id="products" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">{t('products.badge')}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            {t('products.desc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              className="group relative glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${product.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} mb-5`}>
                <product.icon className="w-6 h-6 text-white" />
              </div>

              {/* Status badge */}
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[product.status]}`}>
                {statusLabels[product.status][lang]}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all">
                {product.name}
              </h3>
              <p className="text-sm text-indigo-400/80 font-medium">
                {lang === 'zh' ? product.subtitleZh : product.subtitleEn}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {t(product.descKey)}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/5 rounded-md text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-slate-500 group-hover:text-indigo-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('products.learn')}
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <div className="mt-5 flex items-center gap-1 text-sm text-slate-500 group-hover:text-indigo-400 transition-colors">
                  {t('products.learn')}
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
