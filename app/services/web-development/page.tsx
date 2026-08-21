import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Web Development Services India — Next.js, React, SaaS | Crenosoft",
  description: "Custom web development company in India. We build Next.js applications, React web apps, SaaS platforms, and e-commerce sites. SEO-first, Core Web Vitals optimized, DPDP-compliant. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services India | Crenosoft",
    description: "Custom web development—Next.js, React, SaaS platforms, e-commerce. SEO-first, performance-optimized.",
    url: "https://www.crenosoft.in/services/web-development",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services India | Crenosoft",
    description: "Custom web development—Next.js, React, SaaS platforms, e-commerce.",
  },
};

const CAPABILITIES = [
  {
    title: "Marketing & Corporate Websites",
    icon: "🌐",
    description: "Conversion-optimized websites using Next.js App Router—fast load times, structured data, Core Web Vitals compliance built in. Not a WordPress site with 40 plugins or a Wix template dressed up as custom development.",
  },
  {
    title: "SaaS Web Applications",
    icon: "⚙️",
    description: "Full-featured platforms with authentication, billing (Razorpay + Stripe), multi-tenancy, real-time capabilities, admin dashboards, and public APIs. Designed to scale from 100 to 100,000 users without a rewrite. See MVP Development for rapid launch approach.",
  },
  {
    title: "E-commerce Platforms",
    icon: "🛒",
    description: "Custom storefronts or headless Shopify/WooCommerce with Next.js frontend. UPI and Razorpay integration, GST calculation, Indian address validation, Shiprocket and Delhivery logistics integration, WhatsApp order notifications.",
  },
  {
    title: "SEO-First Development",
    icon: "📈",
    description: "Schema.org JSON-LD markup, semantic HTML5, dynamic sitemap generation, canonical URL management, hreflang for multilingual sites (Hindi, Tamil, Telugu, Marathi)—in the codebase, not a plugin. Every page targets specific keywords from day one.",
  },
  {
    title: "Performance Optimization",
    icon: "⚡",
    description: "Audits and fixes for existing sites—image optimization pipelines, code splitting, lazy loading, CDN configuration. Typical outcome: 40-70% improvement in LCP (Largest Contentful Paint), measurable ranking improvements within 90 days.",
  },
  {
    title: "API & Backend Development",
    icon: "🔌",
    description: "REST and GraphQL APIs, database architecture (PostgreSQL, MySQL, MongoDB, Redis), serverless functions, and third-party integrations. Designed for the query patterns your app actually runs, not just the happy path. See API Development Services.",
  },
];

const TECH_STACK = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: "Next.js 14/15, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Framer Motion",
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: "Node.js, Next.js API Routes, Express, NestJS, Python/Django, Go",
  },
  {
    category: "Databases",
    icon: "🗄️",
    technologies: "PostgreSQL, MySQL, MongoDB, Redis, Pinecone (vector DB for AI features)",
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    technologies: "Vercel, AWS (EC2, S3, CloudFront, RDS, Lambda), Google Cloud Platform, Docker, GitHub Actions",
  },
  {
    category: "Payment & Auth",
    icon: "💳",
    technologies: "Razorpay, Stripe, Cashfree, PayU, NextAuth, Clerk, Auth0",
  },
  {
    category: "Analytics & Monitoring",
    icon: "📊",
    technologies: "Google Analytics 4, Mixpanel, PostHog, Sentry, Vercel Analytics, Google Search Console",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Scoping",
    description: "We review your existing site (if applicable), map user journeys, define scope with a detailed specification document, identify SEO requirements, performance targets (Core Web Vitals), and technical constraints. Output: fixed-price estimate and timeline.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description: "Wireframes in Figma, then visual designs with your brand colors, typography, and UI components. All reviewed and approved before a single line of development code is written. Changes in Figma take an hour. Changes in code take a day.",
  },
  {
    number: 3,
    title: "Development in Sprints",
    description: "Two-week sprints. Staging deployment at the end of each sprint—you test on a real URL on your actual device, not screenshots. Every sprint ships working, tested software. You attend sprint reviews and provide feedback continuously.",
  },
  {
    number: 4,
    title: "QA, Security & Launch",
    description: "Cross-browser testing (Chrome, Safari, Firefox, Edge), responsive layout verification on 5+ screen sizes, performance benchmarking against Core Web Vitals, security review (OWASP top 10), accessibility audit (WCAG 2.1 AA), and zero-downtime deployment.",
  },
];

const BENEFITS = [
  {
    title: "SEO Built Into Development",
    icon: "🔍",
    description: "We don't bolt on SEO after launch. Every page has a primary keyword target, semantic HTML, Schema markup, optimized meta tags, and correct heading hierarchy from the first commit. Sites launch with 90+ Lighthouse SEO scores, not 60s that need months of fixes.",
  },
  {
    title: "Performance That Ranks",
    icon: "⚡",
    description: "Core Web Vitals are a ranking factor. We optimize LCP, FID, and CLS from the start—image formats (WebP, AVIF), lazy loading, code splitting, CDN caching. Typical result: 95+ Lighthouse performance, sub-2s load times, measurable ranking improvements within 60-90 days.",
  },
  {
    title: "DPDP Act 2023 Compliance",
    icon: "🔒",
    description: "Every web application includes DPDP compliance by default—consent management (cookie banners that actually work), data localization for Indian users, audit logs for data access, and cascading delete workflows. For regulated industries, we handle RBI, ABDM, and SEBI requirements.",
  },
  {
    title: "Modern, Maintainable Code",
    icon: "💻",
    description: "TypeScript, ESLint, Prettier, comprehensive test coverage, and CI/CD pipelines. Code reviews on every merge. Your codebase will be maintainable for years, not months. If you hire developers later, they won't curse our names.",
  },
  {
    title: "Indian Payment Integration",
    icon: "💳",
    description: "We've integrated Razorpay, Cashfree, PayU, and PhonePe Business for 50+ clients. UPI, cards, netbanking, wallets—all tested on real transactions. Webhook handling, reconciliation, GST-compliant invoices, and refund workflows included.",
  },
  {
    title: "Post-Launch Support",
    icon: "🛠️",
    description: "We don't disappear after launch. Monthly retainers (₹1-4 lakhs/month) include security updates, dependency upgrades, performance monitoring, Google Search Console reviews, and a fixed number of hours for bug fixes and small features.",
  },
];

const USE_CASES = [
  {
    title: "B2B SaaS Platforms",
    icon: "💼",
    description: "Multi-tenant SaaS applications with team workspaces, role-based access, usage-based billing, API keys, and webhooks. We've built CRM tools, project management platforms, analytics dashboards, and vertical SaaS for logistics, healthcare, and fintech.",
  },
  {
    title: "E-commerce & D2C Brands",
    icon: "🛍️",
    description: "Custom storefronts optimized for Indian market—COD, UPI, Razorpay integration, GST calculation, pincode-based shipping, Shiprocket/Delhivery logistics, WhatsApp order updates. Headless Shopify or fully custom—depending on your inventory complexity and growth plans.",
  },
  {
    title: "Marketing & Lead Generation Sites",
    icon: "📈",
    description: "High-conversion landing pages, multi-page corporate sites, service company websites. Built with Next.js for SEO and performance. Integrated with HubSpot, Salesforce, Zoho CRM, or custom lead management systems. Typical result: 90+ Lighthouse scores, 40-60% increase in organic traffic within 6 months.",
  },
  {
    title: "Internal Tools & Dashboards",
    icon: "📊",
    description: "Admin panels, inventory management systems, reporting dashboards, workflow automation interfaces. Built with React + TypeScript, connected to your existing databases (PostgreSQL, MySQL, MongoDB). Faster and more tailored than forcing Retool or no-code tools to fit your process.",
  },
  {
    title: "Marketplace & Aggregator Platforms",
    icon: "🏪",
    description: "Two-sided marketplaces connecting buyers and sellers—product listings, search and filters, messaging, escrow payments, reviews and ratings. We've built marketplaces for services, products, and professional networks. Built for scale from day one.",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    icon: "📱",
    description: "Web applications that work offline, send push notifications, and install like native apps. Common for field workforce tools, attendance systems, and inventory management. Built with Next.js PWA or React + Workbox for offline-first architecture.",
  },
];

const FAQS = [
  [
    "Why Next.js over WordPress or Webflow?",
    "WordPress and Webflow are good tools for certain use cases—blogs, simple corporate sites. But for anything that needs custom functionality, high performance, or is likely to evolve significantly, Next.js gives you a codebase you actually own and control. No plugin compatibility issues, no security vulnerabilities from unmaintained extensions, and no performance ceiling imposed by a platform. You can hire any React developer to maintain it—you're not locked into a Webflow expert. Full technical breakdown: Next.js SEO in 2025.",
  ],
  [
    "How much does web development cost in India?",
    "Indicative ranges: Marketing website (5-15 pages) ₹1.5-5 lakhs, corporate website with CMS ₹3-8 lakhs, SaaS MVP (core features) ₹8-20 lakhs, full SaaS platform ₹20-50 lakhs, custom e-commerce ₹10-30 lakhs, performance optimization audit and fixes ₹1-4 lakhs. All prices exclude GST. We give detailed estimates after reviewing your specific requirements—not ballpark figures from a 20-minute call. Factors: number of pages, custom features, integrations, SEO complexity, and timeline.",
  ],
  [
    "Do you build multilingual websites?",
    "Yes. We've built sites in Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, and other regional languages with proper i18n support (next-intl or react-i18next), hreflang configuration for regional SEO, correct text rendering for Devanagari and other scripts, and culturally appropriate design adaptations. Common for e-commerce sites targeting tier 2/3 cities and government/public sector projects.",
  ],
  [
    "Can you take over a half-built or broken website project?",
    "Yes, but we do a code review first (₹15,000-30,000 for 1-2 day audit). We need to understand the architecture, identify technical debt, estimate what getting to a maintainable state would require, and assess whether continuing or rebuilding is more cost-effective. We give you an honest assessment—including if we think a rebuild is cleaner than patching. We've rescued 20+ projects from other agencies, offshore teams, or abandoned freelancers.",
  ],
  [
    "How do you handle post-launch maintenance and updates?",
    "We offer monthly retainers (₹1-4 lakhs/month depending on site complexity and traffic): security updates, dependency upgrades, performance monitoring (Core Web Vitals, uptime), Google Search Console reviews, bug fixes, and small feature additions (10-20 hours/month). We don't disappear after launch. Clients typically stay with us for 12-24 months, then either take maintenance internal or continue on a reduced retainer.",
  ],
  [
    "Do you integrate with Indian payment gateways?",
    "Yes—Razorpay, Cashfree, PayU, and PhonePe Business for UPI, netbanking, wallets, and card payments. We handle the full integration: payment flow UI, webhook handling for payment status, reconciliation, GST-compliant invoice generation, and refund workflows. We've processed ₹100+ crores in payments through integrations we've built. All tested on real transactions in sandbox and production.",
  ],
  [
    "What's your approach to SEO for web development?",
    "SEO is built into development, not added later. Every page has: primary keyword in H1 and title tag, semantic HTML (header, nav, main, article, section), Schema.org JSON-LD markup (Organization, WebPage, BreadcrumbList, Product for e-commerce), optimized meta descriptions (140-160 chars), canonical URLs, sitemap.xml generation, robots.txt configuration, and structured internal linking. Sites launch with 90+ Lighthouse SEO scores. Post-launch, we track Google Search Console for indexing and ranking. See blog post: Next.js SEO Guide 2025.",
  ],
  [
    "Can you migrate our existing site to Next.js without losing SEO rankings?",
    "Yes—we've done 30+ migrations from WordPress, Wix, Shopify, and custom PHP/Ruby stacks to Next.js without ranking drops. Process: audit current site for all indexed URLs, map old URLs to new URL structure, implement 301 redirects for every changed URL, preserve all Schema markup, maintain or improve Core Web Vitals scores, submit new sitemap to Google Search Console, and monitor rankings weekly for 3 months. Most sites see ranking improvements within 60-90 days due to better performance.",
  ],
  [
    "Do you provide hosting or just the codebase?",
    "Both options. We can deploy to Vercel (₹0-5,000/month for most sites, auto-scaling), AWS (EC2 + RDS + S3 + CloudFront, ₹5,000-30,000/month), or your own infrastructure. We provide full DevOps setup: CI/CD pipelines (GitHub Actions), staging + production environments, SSL certificates, DNS configuration, database backups, and monitoring (Sentry for errors, Vercel Analytics or Google Analytics for traffic). Or we hand over the codebase and documentation for your team to deploy.",
  ],
  [
    "What happens if we need changes after the project is delivered?",
    "Small bug fixes (within 30 days of launch) are covered under warranty—no charge. New features, design changes, or functionality additions are quoted separately. We typically bill ₹3,000-8,000/hour for post-launch work depending on complexity. Most clients opt for a monthly retainer (₹1-4 lakhs/month) which includes 10-20 hours of development time for ongoing improvements. Change requests go through a formal process: scope definition, estimate, approval, then implementation.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "MVP Development",
    description: "Launch your product in 8-12 weeks",
    href: "/services/mvp-development",
  },
  {
    title: "Mobile App Development",
    description: "iOS, Android, React Native, Flutter",
    href: "/services/mobile-app-development",
  },
  {
    title: "Custom Software Development",
    description: "Tailored solutions for your business",
    href: "/services/custom-software-development",
  },
  {
    title: "API Development",
    description: "RESTful APIs and microservices",
    href: "/services/api-development",
  },
];

export default function WebDevelopmentPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/web-development/#service",
    name: "Custom Web Development Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/web-development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
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
        name: "Web Development",
        item: "https://www.crenosoft.in/services/web-development",
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
                <span className="text-5xl">🌐</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Custom Web Development Services
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                Fast, well-structured web applications and websites that rank on Google, handle real traffic, and are built to grow with your business—not fall over the moment you get featured somewhere.
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
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Modern Web Development for Indian Businesses
            </h2>
            <p className="text-slate-700">
              You don't need another WordPress site with 40 plugins that breaks every time one of them updates. You don't need a Wix template that looks like every other startup. You need a custom web application or website built with modern frameworks—Next.js, React, TypeScript—that gives you full control, scales with your business, and ranks on Google.
            </p>
            <p className="text-slate-700">
              At Crenosoft, we're a custom web development company based in India that specializes in building production-ready web applications for startups, growing companies, and enterprises. Whether you're launching an <Link href="/services/mvp-development" className="text-blue-600 hover:underline">MVP</Link>, building a SaaS platform, or creating a high-performance marketing site, we handle the entire lifecycle—from design to deployment to ongoing optimization.
            </p>
            <p className="text-slate-700">
              We build with Next.js because it's the best framework for SEO, performance, and developer experience. React for complex UIs. TypeScript for maintainability. Tailwind for design systems that scale. PostgreSQL or MongoDB for databases. Razorpay for payments. AWS or Vercel for hosting. Every tech choice is justified by your requirements—not our preferences. Read our technical deep-dive: <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Next.js Documentation →</a>
            </p>
            <p className="text-slate-700">
              Under India's <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPDP Act 2023</a>, every web application that collects personal data must implement consent management, data localization, and audit logs. We build these requirements in from the start—not as an afterthought. For regulated industries (fintech, healthcare, lending), we also handle RBI, ABDM, and SEBI compliance.
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
                From marketing sites to complex SaaS platforms, we cover the full spectrum of custom web development.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 text-4xl">{capability.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {capability.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our Tech Stack
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Modern, battle-tested technologies that scale from MVP to enterprise.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TECH_STACK.map((stack) => (
                <div
                  key={stack.category}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{stack.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {stack.category}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {stack.technologies}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our Development Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A transparent, collaborative 4-phase approach that delivers working software every 2 weeks.
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
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Why Choose Crenosoft for Web Development
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What makes us different from other web development companies in India.
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
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                What We've Built
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Real-world web applications and websites across industries.
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
        <section className="py-16">
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
        <section className="border-t border-slate-200 bg-slate-50 py-16">
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
              Ready to Build Your Web Application?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us about your project. We'll provide a technical proposal, timeline, and fixed-cost estimate within 3-5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Start Your Web Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
