export interface Service {
  slug: string
  icon: string
  title: string
  short: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'bpo-outsourcing',
    icon: '🏢',
    title: 'BPO Outsourcing',
    short: 'End-to-end business process outsourcing that cuts costs and boosts efficiency.',
    description:
      'Our Business Process Outsourcing service takes over your repetitive, process-heavy operations so your in-house team can focus on growth. We map, optimize, and run your workflows with measurable SLAs and continuous improvement loops.',
    features: ['Process mapping & optimization', 'Dedicated delivery teams', 'SLA-backed quality metrics', 'Cost reduction up to 40%']
  },
  {
    slug: 'call-center-solutions',
    icon: '📞',
    title: 'Call Center Solutions',
    short: 'Inbound & outbound call handling with trained, professional agents.',
    description:
      'From inbound customer hotlines to outbound campaigns, our call center teams are trained in your products and brand voice. We scale agent capacity up or down based on seasonal demand.',
    features: ['Inbound & outbound support', 'Multilingual agents', 'IVR & omnichannel setup', 'Real-time call analytics']
  },
  {
    slug: 'customer-service-support',
    icon: '💬',
    title: 'Customer Service Support',
    short: '24/7 multi-channel customer care across chat, email, phone, and social.',
    description:
      'Deliver fast, empathetic customer experiences around the clock. Our support specialists handle chat, email, social media, and ticketing systems with first-response targets under 60 seconds.',
    features: ['24/7 availability', 'Omnichannel coverage', 'CSAT/NPS tracking', 'Escalation management']
  },
  {
    slug: 'data-back-office',
    icon: '🗄️',
    title: 'Data & Back Office Processing',
    short: 'Accurate data entry, processing, and back-office administration at scale.',
    description:
      'We handle high-volume data entry, document processing, invoicing, payroll, and record management with 99.9% accuracy guarantees and double-key verification workflows.',
    features: ['Data entry & validation', 'Document digitization', 'Invoice & payroll processing', '99.9% accuracy guarantee']
  },
  {
    slug: 'tech-support-helpdesk',
    icon: '🛠️',
    title: 'Tech Support & IT Helpdesk',
    short: 'Tier 1–3 technical support to keep your users productive.',
    description:
      'Our certified technicians resolve hardware, software, and network issues across all support tiers — reducing downtime and keeping end-users happy.',
    features: ['Tier 1–3 escalation', 'Remote diagnostics', 'Ticketing system integration', 'Certified IT professionals']
  },
  {
    slug: 'telemarketing-lead-generation',
    icon: '📈',
    title: 'Telemarketing & Lead Generation',
    short: 'Qualified pipeline generation through targeted outreach campaigns.',
    description:
      'We build qualified sales pipelines with researched prospect lists, cold outreach, appointment setting, and CRM hygiene — feeding your closers with warm, ready-to-buy leads.',
    features: ['Targeted list building', 'Cold calling & email campaigns', 'Appointment setting', 'CRM integration & reporting']
  }
]


services.push(
  {
    slug: 'administrative-services',
    icon: '📋',
    title: 'Administrative Services',
    short: 'Virtual assistants and admin support for everyday operations.',
    description:
      'Calendar management, travel booking, correspondence, scheduling, and general office coordination handled by vetted virtual assistants so executives can focus on strategy.',
    features: ['Virtual assistants', 'Calendar & email management', 'Travel arrangements', 'Meeting coordination']
  },
  {
    slug: 'finance-accounting',
    icon: '💰',
    title: 'Finance & Accounting Outsourcing',
    short: 'Bookkeeping, AP/AR, and financial reporting by qualified accountants.',
    description:
      'Outsource bookkeeping, accounts payable/receivable, reconciliations, and month-end close to a team of qualified accountants working on your preferred platforms.',
    features: ['Bookkeeping & reconciliation', 'Accounts payable / receivable', 'Financial reporting', 'Tax preparation support']
  },
  {
    slug: 'hr-recruitment',
    icon: '👥',
    title: 'HR & Recruitment Support',
    short: 'Sourcing, screening, and onboarding support for growing teams.',
    description:
      'We manage candidate sourcing, resume screening, interview coordination, and employee onboarding paperwork so your HR department can focus on culture and retention.',
    features: ['Candidate sourcing & screening', 'Interview coordination', 'Onboarding paperwork', 'HRIS management']
  },
  {
    slug: 'ecommerce-support',
    icon: '🛒',
    title: 'E-commerce Support',
    short: 'Product listing, order processing, and store management.',
    description:
      'Full-stack e-commerce operations: product listings, inventory sync, order fulfillment coordination, returns processing, and marketplace management across all major platforms.',
    features: ['Product listing optimization', 'Order & inventory management', 'Returns processing', 'Marketplace management']
  },
  {
    slug: 'digital-marketing',
    icon: '📣',
    title: 'Digital Marketing Operations',
    short: 'Campaign execution, SEO, and content ops handled offshore.',
    description:
      'Extend your marketing team with specialists in SEO, social media scheduling, paid campaign management, and content production at a fraction of local hiring costs.',
    features: ['SEO & content production', 'Social media management', 'Paid campaign execution', 'Performance reporting']
  },
  {
    slug: 'research-analytics',
    icon: '🔍',
    title: 'Research & Data Analytics',
    short: 'Market research, data mining, and actionable business insights.',
    description:
      'Our analysts conduct market research, competitor analysis, data mining, and dashboard reporting to turn raw information into decisions you can act on.',
    features: ['Market & competitor research', 'Data mining & cleansing', 'Dashboard & KPI reporting', 'Actionable insights']
  }
)

export const stats = [
  { value: '30+', label: 'Happy Clients' },
  { value: '50+', label: 'Completed Projects' },
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Expert Team Members' }
]

export const useServices = () => services
