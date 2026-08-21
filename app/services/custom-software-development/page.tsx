import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Development Company — Tailored Solutions for Your Business | Crenosoft",
  description: "Partner with a trusted custom software development company in India. We build web apps, mobile solutions, APIs, MVPs, and enterprise systems tailored to your business needs. DPDP-compliant, scalable, and cost-effective.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company — Tailored Solutions | Crenosoft",
    description: "Partner with a trusted custom software development company in India. We build web apps, mobile solutions, APIs, MVPs, and enterprise systems tailored to your business needs.",
    url: "https://www.crenosoft.in/services/custom-software-development",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company — Tailored Solutions | Crenosoft",
    description: "Partner with a trusted custom software development company in India. We build web apps, mobile solutions, APIs, MVPs, and enterprise systems.",
  },
};

const CAPABILITIES = [
  {
    title: "MVP Development",
    icon: "🚀",
    description: "Launch your product in 8-12 weeks with a feature-complete MVP. We help startups validate ideas, secure funding, and iterate based on real user feedback.",
    link: "/services/mvp-development",
  },
  {
    title: "Web Application Development",
    icon: "🌐",
    description: "Build scalable, performant web apps with React, Next.js, Vue, or Angular. From SaaS platforms to internal tools, we architect for growth and maintainability.",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    description: "Native iOS/Android apps or cross-platform solutions with React Native and Flutter. We design for offline-first, performance, and app store compliance.",
    link: "/services/mobile-app-development",
  },
  {
    title: "API Development & Integration",
    icon: "🔌",
    description: "RESTful APIs, GraphQL endpoints, and microservices architecture. We build robust backends with Node.js, Python, Go, or Java, designed for security and scale.",
    link: "/services/api-development",
  },
  {
    title: "Legacy Modernization",
    icon: "🔄",
    description: "Migrate outdated systems to modern tech stacks. We re-architect monoliths into microservices, migrate databases, and ensure DPDP compliance during transformation.",
    link: "/services/legacy-modernization",
  },
  {
    title: "SaaS Product Development",
    icon: "☁️",
    description: "Multi-tenant SaaS platforms with billing, user management, and analytics. We handle everything from infrastructure setup to third-party integrations.",
    link: "/services/saas-development",
  },
  {
    title: "Enterprise Software Solutions",
    icon: "🏢",
    description: "CRM, ERP, inventory management, and workflow automation tools. Built for Indian compliance (GST, DPDP Act 2023) with role-based access and audit logs.",
    link: "#",
  },
  {
    title: "AI-Powered Applications",
    icon: "🤖",
    description: "Integrate LLMs, computer vision, or custom ML models into your software. From AI agents to recommendation engines, we make AI production-ready.",
    link: "/services/ai-software-development",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Requirements",
    description: "We start with a 1-2 week discovery phase to understand your business goals, technical constraints, and user needs. You'll get a detailed project brief, technical architecture proposal, and fixed-cost estimate. No surprises—just transparency.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description: "Our designers create wireframes, interactive prototypes, and UI mockups aligned with your brand. We validate designs with your team before writing a single line of code. For complex projects, we run user testing sessions to refine the experience.",
  },
  {
    number: 3,
    title: "Agile Development",
    description: "Development happens in 2-week sprints with working software delivered at the end of each sprint. You'll have access to a staging environment, attend sprint reviews, and provide feedback continuously. We use Git, CI/CD pipelines, and automated testing to maintain quality.",
  },
  {
    number: 4,
    title: "Testing & QA",
    description: "Every feature goes through manual QA, automated test suites, security audits, and performance benchmarks. We test across devices, browsers, and network conditions. For regulated industries, we provide compliance reports (DPDP, HIPAA, SOC 2).",
  },
  {
    number: 5,
    title: "Deployment & Launch",
    description: "We handle cloud setup (AWS, Azure, GCP), database migrations, DNS configuration, and SSL certificates. Post-launch, we monitor error rates, performance metrics, and user behavior for 2 weeks to catch any issues early.",
  },
  {
    number: 6,
    title: "Maintenance & Support",
    description: "After launch, we offer monthly retainers for bug fixes, feature enhancements, and infrastructure management. You get a dedicated Slack channel, SLA-backed response times, and quarterly architecture reviews to plan for scale.",
  },
];

const BENEFITS = [
  {
    title: "Fixed-Cost Transparency",
    icon: "💰",
    description: "No hourly billing surprises. You get a fixed price upfront based on scope, with change requests handled through a formal process. Most projects are ₹8-50 lakhs depending on complexity.",
  },
  {
    title: "Indian Compliance Built-In",
    icon: "🇮🇳",
    description: "We build DPDP Act 2023-compliant systems with data localization, consent management, and audit logs. For fintech, we integrate RBI guidelines. For healthcare, we handle ABDM/NDHM compliance.",
  },
  {
    title: "Modern Tech Stack",
    icon: "⚡",
    description: "React, Next.js, Node.js, Python, PostgreSQL, MongoDB, Redis, AWS/GCP. We don't use outdated frameworks. Your codebase will be maintainable for years, not months.",
  },
  {
    title: "Scalable Architecture",
    icon: "📈",
    description: "We architect for 10x growth from day one. Microservices, load balancing, CDN integration, and database sharding are built into the design—not bolted on later when things break.",
  },
  {
    title: "Dedicated Team Model",
    icon: "👥",
    description: "You work with a consistent team—not rotating contractors. Your PM, tech lead, and designers stay with you from discovery to deployment. Average team tenure is 3+ years at Crenosoft.",
  },
  {
    title: "Post-Launch Support",
    icon: "🛠️",
    description: "We don't disappear after launch. Monthly retainers start at ₹1.5 lakhs for bug fixes, feature additions, and infrastructure management. Or train your internal team to take over—your choice.",
  },
];

const FAQS = [
  [
    "How much does custom software development cost in India?",
    "Most projects range from ₹8-50 lakhs depending on complexity. A simple MVP (8-10 weeks, 2-3 features) starts at ₹8-12 lakhs. A mid-complexity web app with integrations (16-20 weeks, 10-15 features) runs ₹18-30 lakhs. Enterprise systems with compliance requirements (6+ months, multi-tenant, audit logs) are ₹35-50+ lakhs. We provide a fixed-cost estimate after a 1-week discovery phase. No hourly billing—just transparent pricing based on scope.",
  ],
  [
    "What's included in your custom software development services?",
    "Every project includes: requirements gathering and technical architecture, UI/UX design with interactive prototypes, agile development in 2-week sprints, manual QA and automated testing, cloud deployment (AWS/Azure/GCP), DPDP Act 2023 compliance implementation, 2 weeks of post-launch monitoring, and source code handover with documentation. You also get access to a staging environment, attend bi-weekly sprint reviews, and have a dedicated Slack channel for real-time communication.",
  ],
  [
    "How long does it take to build custom software?",
    "Timelines vary by complexity. An MVP takes 8-12 weeks, a mid-complexity web application takes 16-24 weeks, a SaaS platform with billing and multi-tenancy takes 24-36 weeks, and an enterprise system with legacy integrations takes 32+ weeks. We work in 2-week sprints, so you see working software every 2 weeks. Most projects have a 1-2 week discovery phase before development starts. Rush timelines (under 8 weeks) are possible but require prioritizing features aggressively.",
  ],
  [
    "Do you handle DPDP Act 2023 compliance?",
    "Yes. Every project includes DPDP compliance by default. We implement: data localization (Indian user data stored in India-region servers), consent management (opt-in checkboxes, withdrawal mechanisms), data breach notification systems (alert admins within 72 hours of a breach), audit logs (track who accessed what data, when), and data deletion workflows (\"right to be forgotten\" endpoints). For regulated industries, we also handle RBI guidelines (fintech), ABDM compliance (healthcare), and SEBI requirements (capital markets).",
  ],
  [
    "Can you integrate with our existing systems?",
    "Yes. We specialize in integrations and legacy modernization. Common scenarios include: connecting to ERP systems (SAP, Oracle, Zoho), integrating payment gateways (Razorpay, Stripe, PayU), syncing with CRMs (Salesforce, HubSpot, Pipedrive), pulling data from legacy databases (MySQL, Oracle, SQL Server), and connecting to third-party APIs (Google Workspace, Slack, Twilio). We use RESTful APIs, webhooks, or message queues (RabbitMQ, Kafka) depending on your architecture. If you have a legacy system that needs modernization, see our Legacy Modernization service.",
  ],
  [
    "What tech stack do you use?",
    "We choose based on your requirements, but our most common stacks are: Frontend (React, Next.js, Vue.js, React Native, Flutter), Backend (Node.js, Python/Django, Go, Java/Spring Boot), Databases (PostgreSQL, MongoDB, MySQL, Redis), Cloud (AWS, Azure, Google Cloud Platform), and DevOps (Docker, Kubernetes, GitHub Actions, Terraform). We avoid outdated frameworks (PHP 5, jQuery, AngularJS). Your codebase will use modern, maintainable technologies with active community support.",
  ],
  [
    "Do you provide ongoing maintenance after launch?",
    "Yes. We offer three post-launch options: Monthly retainer (₹1.5-5 lakhs/month for bug fixes, feature additions, infrastructure management, 24-48 hour response SLA), pay-per-incident (₹15,000-50,000 per task, good for infrequent changes), or knowledge transfer (we train your internal team to maintain the system, includes 4 weeks of shadowing and documentation handover). Most clients choose the monthly retainer for the first 6-12 months, then transition to pay-per-incident once the system stabilizes.",
  ],
  [
    "Can I hire your team full-time for my project?",
    "Yes—that's our IT Staff Augmentation service. You can hire dedicated developers, designers, or QA engineers on monthly contracts. Rates are ₹1.2-3.5 lakhs/month per person depending on seniority. They work exclusively on your project, attend your standups, and use your tools (Jira, Slack, GitHub). Minimum commitment is 3 months. After that, you can scale the team up or down with 30 days' notice. See IT Staff Augmentation for details.",
  ],
  [
    "What if requirements change during development?",
    "We expect requirements to evolve—especially for MVPs and startups. Minor changes (UI tweaks, copy updates, small workflow adjustments) are handled within the original budget. Major changes (new features, third-party integrations, architecture shifts) go through a formal change request process. We'll provide a revised timeline and cost estimate, you approve, and we adjust the roadmap. Most projects allocate 10-15% of the budget as a change buffer to avoid delays.",
  ],
  [
    "How do we communicate during the project?",
    "You'll have: a dedicated Slack channel for real-time questions (response time under 4 hours during IST business hours), bi-weekly sprint reviews over Zoom or Google Meet (30-60 minutes to demo working software), access to a project management tool (Jira, Linear, or Notion) where you can track progress, and monthly stakeholder reports summarizing what shipped, what's next, and any risks. Your PM is available for ad-hoc calls if something urgent comes up. We're in the IST timezone, so overlap with US/EU teams is usually 8 AM - 12 PM IST.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "MVP Development",
    description: "Launch your product in 8-12 weeks",
    href: "/services/mvp-development",
  },
  {
    title: "Legacy Modernization",
    description: "Migrate outdated systems to modern stacks",
    href: "/services/legacy-modernization",
  },
  {
    title: "IT Staff Augmentation",
    description: "Hire dedicated developers monthly",
    href: "/services/it-staff-augmentation",
  },
  {
    title: "AI Agent Development",
    description: "Build autonomous AI systems that take action",
    href: "/services/ai-agent-development",
  },
];

const USE_CASES = [
  {
    title: "Startups Validating an Idea",
    icon: "💡",
    description: "You need an MVP fast to test product-market fit or raise a seed round. We help you prioritize ruthlessly, launch in 8-12 weeks, and iterate based on user feedback.",
  },
  {
    title: "Growing Companies Hitting Scale Limits",
    icon: "📊",
    description: "Your existing system can't handle growth. Database queries are slow, the UI is clunky, and your team is spending more time firefighting than building. We re-architect for 10x scale.",
  },
  {
    title: "Enterprises Modernizing Legacy Systems",
    icon: "🏭",
    description: "You're running on a 10-year-old monolith built with outdated tech. Maintenance costs are high, new features take months, and you can't find developers who know the stack. We migrate you to a modern architecture without disrupting operations.",
  },
  {
    title: "Non-Technical Founders Building Their First Product",
    icon: "🎯",
    description: "You have a great idea but no technical co-founder. We act as your technical partner—translating requirements into working software, advising on architecture decisions, and helping you avoid expensive mistakes.",
  },
  {
    title: "Regulated Industries Needing Compliance",
    icon: "🔒",
    description: "You operate in fintech, healthcare, or government sectors where DPDP Act 2023, RBI, or ABDM compliance is mandatory. We build these requirements in from day one—not as an afterthought.",
  },
  {
    title: "Teams Needing Long-Term Maintenance",
    icon: "🤝",
    description: "You built software years ago, but the original vendor disappeared or your internal team lacks capacity. We take over maintenance, handle bug fixes, and add features as your business evolves.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/custom-software-development/#service",
    name: "Custom Software Development Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/custom-software-development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Software Development Services",
      itemListElement: CAPABILITIES.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.crenosoft.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.crenosoft.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Software Development",
        item: "https://www.crenosoft.in/services/custom-software-development",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-block rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 shadow-lg">
                <span className="text-5xl">💻</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Custom Software Development Company
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                We build web apps, mobile solutions, APIs, and enterprise systems tailored to your business needs. From MVP to scale, we're your technical partner in India.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="#capabilities"
                  className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Why Custom Software Development?
            </h2>
            <p className="text-slate-700">
              Off-the-shelf software works for common problems. But when your business has unique workflows, compliance requirements, or competitive advantages tied to technology, you need custom-built solutions. That's where we come in.
            </p>
            <p className="text-slate-700">
              At Crenosoft, we're a custom software development company based in India that specializes in building tailored applications for startups, growing companies, and enterprises. Whether you're launching your first MVP, modernizing a <Link href="/services/legacy-modernization" className="text-blue-600 hover:underline">legacy system</Link>, or building a multi-tenant SaaS platform, we handle the entire lifecycle—from requirements gathering to post-launch support.
            </p>
            <p className="text-slate-700">
              Unlike agencies that hand off cookie-cutter templates, we architect every project from scratch. You get a dedicated team (not rotating contractors), transparent fixed-cost pricing (no hourly billing surprises), and a modern tech stack (React, Node.js, Python, AWS) that won't become obsolete in two years. We're also experts in Indian compliance—every system we build is <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPDP Act 2023</a>-ready with data localization, consent management, and audit logs built in.
            </p>
            <p className="text-slate-700">
              Our process is agile and transparent. Development happens in 2-week sprints, you attend bi-weekly reviews to see working software, and you have access to a staging environment throughout the project. After launch, we don't disappear—most clients stay with us on monthly retainers for ongoing maintenance, feature additions, and infrastructure management. If you prefer, we can also train your internal team to take over. Your choice.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                What We Build
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                From MVPs to enterprise systems, we handle the full spectrum of custom software development services. Click any service to learn more.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CAPABILITIES.map((capability) => (
                <Link
                  key={capability.title}
                  href={capability.link}
                  className="cp-card group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-3 text-3xl transition-transform group-hover:scale-110">
                    {capability.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                How We Work
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Our 6-phase process ensures you get working software on time, on budget, and built to last.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Why Choose Crenosoft
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What makes us different from other custom software development companies in India.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 text-4xl">{benefit.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                When Custom Software Makes Sense
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Custom software development is ideal for these scenarios. Sound familiar?
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {USE_CASES.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mb-4 text-4xl">{useCase.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {useCase.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQS.map(([question, answer], index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                    {question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="border-t border-slate-200 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
              Related Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED_SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 py-16">
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Build Custom Software?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us about your project. We'll provide a technical proposal and fixed-cost estimate within 3-5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
