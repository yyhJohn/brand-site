import { motion } from 'framer-motion'
import { Brain, Code2, Cloud, Network, Workflow, Cpu } from 'lucide-react'
import { useI18n } from '../i18n'

const capabilities = [
  {
    icon: Brain,
    titleKey: 'tech.cap.1',
    titleEn: 'AI Agent Orchestration',
    titleZh: 'AI Agent 编排',
    descEn: 'Autonomous agents with tool execution, persistent memory, and multi-channel integration.',
    descZh: '自主 Agent，支持工具执行、持久记忆和多渠道集成。',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Code2,
    titleKey: 'tech.cap.2',
    titleEn: 'Full-stack Engineering',
    titleZh: '全栈工程',
    descEn: 'End-to-end product development from React frontends to Node.js/Go backends and infrastructure.',
    descZh: '从 React 前端到 Node.js/Go 后端及基础设施的端到端产品开发。',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cloud,
    titleKey: 'tech.cap.3',
    titleEn: 'Cloud Architecture',
    titleZh: '云架构',
    descEn: 'Scalable cloud-native systems with Nginx, systemd, Docker, and automated deployment pipelines.',
    descZh: '基于 Nginx、systemd、Docker 和自动化部署流水线的可扩展云原生系统。',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Network,
    titleKey: 'tech.cap.4',
    titleEn: 'API Gateway Design',
    titleZh: 'API 网关设计',
    descEn: 'Unified API layers aggregating multiple providers with intelligent routing and failover.',
    descZh: '统一 API 层，聚合多提供商，支持智能路由和故障转移。',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Workflow,
    titleKey: 'tech.cap.5',
    titleEn: 'Process Automation',
    titleZh: '流程自动化',
    descEn: 'Automated workflows for translation, reporting, planning, and data processing at scale.',
    descZh: '翻译、报告、规划和数据处理的规模化自动工作流。',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Cpu,
    titleKey: 'tech.cap.6',
    titleEn: 'AI Model Integration',
    titleZh: 'AI 模型集成',
    descEn: 'Deep integration with OpenAI, Anthropic, Google, and 50+ AI providers through unified interfaces.',
    descZh: '通过统一接口深度集成 OpenAI、Anthropic、Google 等 50+ AI 提供商。',
    gradient: 'from-rose-500 to-pink-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function TechCapabilities() {
  const { lang, t } = useI18n()

  return (
    <section id="technology" className="relative py-32 px-6">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">{t('tech.badge')}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('tech.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            {t('tech.desc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.titleKey}
              variants={itemVariants}
              className="group relative glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br ${cap.gradient} mb-4`}>
                <cap.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {lang === 'zh' ? cap.titleZh : cap.titleEn}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {lang === 'zh' ? cap.descZh : cap.descEn}
              </p>

              <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${cap.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
