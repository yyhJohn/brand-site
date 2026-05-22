import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'zh'

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({ lang: 'en', setLang: () => {}, t: (k) => k })

const messages: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.technology': 'Technology',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.launch': 'Launch Console',
    'nav.try': 'Try Products',

    // Hero
    'hero.badge': 'AI-Native Product Ecosystem',
    'hero.title.1': 'Build the Future with',
    'hero.title.2': 'AI-Native Products',
    'hero.desc': 'An integrated ecosystem of developer tools, AI infrastructure, and intelligent automation — designed to accelerate how you build, ship, and scale.',
    'hero.cta.explore': 'Explore Products',
    'hero.cta.demo': 'View Demo',
    'hero.stat.1': 'AI Models',
    'hero.stat.2': 'Uptime',
    'hero.stat.3': 'Products',

    // Products
    'products.badge': 'Product Ecosystem',
    'products.title': 'Six products. One vision.',
    'products.desc': 'From API infrastructure to AI agents — every product designed to work together.',
    'products.learn': 'Learn More',
    'products.uniapi.desc': 'Aggregate 50+ AI model providers behind a single API. Subscription management, usage analytics, and intelligent routing built-in.',
    'products.translator.desc': 'Seamless real-time translation across macOS and iOS with AI-powered context awareness and system-wide integration.',
    'products.openclaw.desc': 'Orchestrate autonomous AI agents with tool execution, multi-channel messaging, browser automation, and persistent memory.',
    'products.gpa.desc': 'Intelligent academic planning tool that analyzes transcripts, predicts GPA trajectories, and recommends optimal course selections.',
    'products.campus.desc': 'Smart social discovery for university students. AI-driven compatibility matching with real-time chat and campus event integration.',
    'products.issue.desc': 'GIS-powered issue reporting and tracking system with real-time map visualization, priority routing, and resolution analytics.',

    // Tech
    'tech.badge': 'Technology Stack',
    'tech.title': 'Built with modern infrastructure.',
    'tech.desc': 'Every product leverages a shared foundation of battle-tested technologies.',

    // Stats
    'stats.badge': 'By the Numbers',
    'stats.title': 'Scale that speaks for itself.',
    'stats.tokens': 'Daily AI Tokens Processed',
    'stats.monthly': 'Monthly AI Workflow Tokens',
    'stats.lines': 'Product Lines',
    'stats.faster': 'Faster Development Workflow',

    // Architecture
    'arch.badge': 'System Architecture',
    'arch.title': 'End-to-end AI pipeline.',
    'arch.desc': 'From user request to intelligent response — a unified architecture built for scale.',

    // Brand Story
    'brand.badge': 'About Us',
    'brand.title': 'An ecosystem built around intelligence.',
    'brand.desc.1': 'We are an AI-native product studio building tools that bridge the gap between raw AI capability and real-world productivity.',
    'brand.desc.2': 'Every product in our ecosystem is designed to work independently — and even better together. From API gateways to autonomous agents, from translation tools to academic planners, we create technology that amplifies human potential.',
    'brand.principle.1.title': 'AI-First Design',
    'brand.principle.1.desc': 'Every product starts with the question: how can AI make this 10x better?',
    'brand.principle.2.title': 'Developer Experience',
    'brand.principle.2.desc': 'Clean APIs, clear docs, and tools that respect your time.',
    'brand.principle.3.title': 'Integrated Ecosystem',
    'brand.principle.3.desc': 'Products that share infrastructure, data, and intelligence.',

    // CTA
    'cta.title': 'Build the future with AI-native products.',
    'cta.desc': 'Ready to explore the ecosystem? Start building today.',
    'cta.contact': 'Contact Me',
    'cta.explore': 'Explore Ecosystem',

    // Footer
    'footer.desc': 'AI-native product ecosystem building the future of developer tools and intelligent infrastructure.',
    'footer.products': 'Products',
    'footer.technology': 'Technology',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  zh: {
    // 导航栏
    'nav.products': '产品',
    'nav.solutions': '解决方案',
    'nav.technology': '技术',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.launch': '控制台',
    'nav.try': '体验产品',

    // 首屏
    'hero.badge': 'AI 原生产品生态',
    'hero.title.1': '以 AI 原生产品',
    'hero.title.2': '构建未来',
    'hero.desc': '一个集开发者工具、AI 基础设施和智能自动化于一体的产品生态 — 加速构建、交付和扩展。',
    'hero.cta.explore': '探索产品',
    'hero.cta.demo': '查看演示',
    'hero.stat.1': 'AI 模型',
    'hero.stat.2': '可用率',
    'hero.stat.3': '产品线',

    // 产品矩阵
    'products.badge': '产品生态',
    'products.title': '六大产品，一个愿景。',
    'products.desc': '从 API 基础设施到 AI Agent — 每个产品协同工作。',
    'products.learn': '了解更多',
    'products.uniapi.desc': '聚合 50+ AI 模型提供商，统一 API 接入。内置订阅管理、用量分析和智能路由。',
    'products.translator.desc': 'macOS 和 iOS 全平台实时翻译，AI 驱动的上下文感知，系统级集成。',
    'products.openclaw.desc': '编排自主 AI Agent，支持工具执行、多渠道消息、浏览器自动化和持久记忆。',
    'products.gpa.desc': '智能学业规划工具，分析成绩单、预测 GPA 轨迹、推荐最优选课方案。',
    'products.campus.desc': '大学生智能社交匹配平台，AI 驱动的兼容性匹配、实时聊天和校园活动集成。',
    'products.issue.desc': 'GIS 驱动的问题上报与追踪系统，实时地图可视化、优先级路由和解决分析。',

    // 技术能力
    'tech.badge': '技术栈',
    'tech.title': '现代化基础设施。',
    'tech.desc': '每个产品都建立在经过实战检验的共享技术基础之上。',

    // 数据
    'stats.badge': '数据一览',
    'stats.title': '用数据说话。',
    'stats.tokens': '每日 AI Token 处理量',
    'stats.monthly': '月度 AI 工作流 Token',
    'stats.lines': '产品线',
    'stats.faster': '开发效率提升',

    // 架构
    'arch.badge': '系统架构',
    'arch.title': '端到端 AI 流水线。',
    'arch.desc': '从用户请求到智能响应 — 为规模化而生的统一架构。',

    // 品牌故事
    'brand.badge': '关于我们',
    'brand.title': '围绕智能构建的生态。',
    'brand.desc.1': '我们是一个 AI 原生产品工作室，致力于弥合原始 AI 能力与实际生产力之间的鸿沟。',
    'brand.desc.2': '生态中的每个产品既可以独立运行，也能协同增效。从 API 网关到自主 Agent，从翻译工具到学业规划，我们创造放大人类潜能的技术。',
    'brand.principle.1.title': 'AI 优先设计',
    'brand.principle.1.desc': '每个产品的起点都是：AI 如何让这件事好 10 倍？',
    'brand.principle.2.title': '开发者体验',
    'brand.principle.2.desc': '简洁的 API、清晰的文档、尊重你时间的工具。',
    'brand.principle.3.title': '一体化生态',
    'brand.principle.3.desc': '产品之间共享基础设施、数据和智能。',

    // CTA
    'cta.title': '以 AI 原生产品，构建未来。',
    'cta.desc': '准备好探索生态了吗？从今天开始构建。',
    'cta.contact': '联系我',
    'cta.explore': '探索生态',

    // Footer
    'footer.desc': 'AI 原生产品生态，构建开发者工具和智能基础设施的未来。',
    'footer.products': '产品',
    'footer.technology': '技术',
    'footer.contact': '联系',
    'footer.rights': '保留所有权利。',
  },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Lang
      if (saved) return saved
      return navigator.language.startsWith('zh') ? 'zh' : 'en'
    }
    return 'en'
  })

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : 'en'
  }

  const t = (key: string): string => messages[lang][key] || key

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
