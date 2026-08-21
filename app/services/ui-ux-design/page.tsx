import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Services India — Figma, Product Design, Design Systems | Crenosoft",
  description: "UI/UX design company in India. We do user research, wireframing, Figma prototypes, visual design, and design systems. Designed for Indian users, WCAG 2.1 compliant. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Services India | Crenosoft",
    description: "UI/UX design—user research, Figma prototypes, visual design, design systems. Built for Indian users.",
    url: "https://www.crenosoft.in/services/ui-ux-design",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services India | Crenosoft",
    description: "UI/UX design—user research, Figma prototypes, visual design, design systems.",
  },
};

const CAPABILITIES = [
  {
    title: "User Research & Testing",
    icon: "🔍",
    description: "User interviews, usability testing, analytics review (GA4, Hotjar heatmaps), and competitive analysis. We recruit and moderate sessions with your actual target users—not assumptions about them. Record sessions, identify patterns, and validate design decisions with data.",
  },
  {
    title: "Wireframing & Information Architecture",
    icon: "📐",
    description: "User flow diagrams, site maps, low-fidelity and mid-fidelity wireframes, and clickable prototypes in Figma. Structure validated before visual design begins—changes in wireframes take an hour, in code take a day. Get stakeholder alignment early.",
  },
  {
    title: "Visual Design & UI",
    icon: "🎨",
    description: "High-fidelity designs for every screen state (empty, loading, error, filled). Interactive prototype for stakeholder review. Responsive variants (desktop 1920px, laptop 1440px, tablet 768px, mobile 375px) with documented breakpoints. Dark mode where applicable.",
  },
  {
    title: "Design Systems",
    icon: "🧱",
    description: "Figma component library with variants and states, design tokens (color, spacing, typography, elevation, shadows), documentation for every component, and developer handoff with exact specs and CSS/Tailwind/React Native equivalents. Maintains design consistency at scale.",
  },
  {
    title: "Mobile App Design (iOS/Android)",
    icon: "📱",
    description: "iOS and Android designs following Apple Human Interface Guidelines and Google Material Design 3. Thumb zone analysis, 44pt minimum touch targets, gesture conventions, and connectivity-aware states (loading skeletons, offline mode, empty states). Platform-specific patterns.",
  },
  {
    title: "UX Audits & Redesigns",
    icon: "🔧",
    description: "Heuristic evaluation, analytics review (identify drop-off points), moderated usability sessions with 5-8 users, and a prioritized findings report with specific recommendations. For products losing users at a known friction point or facing poor conversion rates.",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discover",
    description: "Stakeholder interviews (understand business goals, constraints, brand guidelines), user interviews or analytics review (identify current user behavior and pain points), and competitive analysis (what works, what doesn't). Output: design brief, user personas, key jobs-to-be-done, and success metrics.",
  },
  {
    number: 2,
    title: "Define",
    description: "User journey mapping (end-to-end flows for primary user tasks), information architecture (site map, navigation structure), and feature prioritization (what's MVP, what's v2, what's nice-to-have). We align on what screens exist and how they connect before designing any of them. Output: user flows, sitemap, wireframes.",
  },
  {
    number: 3,
    title: "Design",
    description: "Wireframes → feedback → high-fidelity designs → feedback → interactive prototype. You have edit access to the Figma file from day one—not PowerPoint screenshots. Weekly design reviews via Zoom or Google Meet. Design covers all screen states: empty, loading, error, success, filled. Output: Figma design file, interactive prototype.",
  },
  {
    number: 4,
    title: "Test & Handover",
    description: "Moderated usability testing with 5-8 users (not your employees—actual target users). Identify friction points, validate assumptions, measure task completion rates. Design revisions based on findings. Developer handoff with organized layers, component documentation, spacing/color tokens, and implementation support during development sprints. Output: usability report, final designs, developer handoff file.",
  },
];

const BENEFITS = [
  {
    title: "Designed for Indian Users",
    icon: "🇮🇳",
    description: "Indian users span a huge range of devices (₹8,000 Android phones to iPhones), connectivity speeds (patchy 4G to fiber), literacy levels, and languages. We design for Tier 2/3 users, not just metro-city power users. Simpler language, icon-supported navigation, multilingual support, and trust signals (RBI/NBFC registration badges) that matter in India.",
  },
  {
    title: "User Research, Not Guesswork",
    icon: "🔬",
    description: "Almost every founding team believes they know their users well—and almost all are wrong about something important. We conduct user interviews (5-10 participants), usability testing (watch real users try to complete tasks), and analytics reviews (where do users drop off?). Design decisions backed by data, not opinions.",
  },
  {
    title: "WCAG 2.1 Accessibility Compliance",
    icon: "♿",
    description: "We design against WCAG 2.1 AA as the baseline—4.5:1 color contrast ratios, minimum 44px touch target sizes, focus states for keyboard navigation, screen reader-compatible markup. For government contracts or products with explicit accessibility requirements, we target WCAG 2.1 AAA. Required for public sector projects.",
  },
  {
    title: "Developer-Friendly Handoff",
    icon: "🔧",
    description: "Figma handoff file with auto-layout components, exact spacing values (8px grid), color tokens (#hex codes + Tailwind equivalents), typography specs (font family, size, weight, line-height), and interactive prototype showing hover, click, and animation states. Developers don't need to guess—everything is documented.",
  },
  {
    title: "Design Systems That Scale",
    icon: "📦",
    description: "For products with 20+ screens, a design system prevents design drift. Figma component library with variants (button primary/secondary/tertiary, input default/error/disabled), design tokens, and documentation. Designers and developers use the same components—changes propagate automatically. Critical for SaaS products, marketplaces, and enterprise tools.",
  },
  {
    title: "Implementation Support",
    icon: "🤝",
    description: "We don't disappear after handoff. Available during development sprints for design questions (\"what happens when this field is empty?\"), review implementation screenshots, and flag deviations before they ship to users. Most design-dev mismatches happen because designers aren't available during implementation.",
  },
];

const USE_CASES = [
  {
    title: "SaaS Product Design",
    icon: "💼",
    description: "B2B SaaS dashboards, admin panels, analytics interfaces, workflow tools. We design for power users who spend 4+ hours/day in the product—keyboard shortcuts, bulk actions, advanced filters, customizable views. Information density without cognitive overload. Figma component library for design consistency.",
  },
  {
    title: "Consumer Mobile App Design",
    icon: "📱",
    description: "Social apps, e-commerce, food delivery, fitness tracking, dating apps. Designed for thumb zones, gesture navigation, and variable connectivity. Loading skeletons for poor networks, empty states that encourage action, onboarding that doesn't explain—just guides. Platform-specific patterns (iOS vs Android).",
  },
  {
    title: "E-commerce & Marketplace Design",
    icon: "🛒",
    description: "Product catalogs, search and filters, cart and checkout, seller dashboards. We optimize for conversion—product images that load fast, trust signals (reviews, badges, return policy), one-tap checkout with UPI, and mobile-first design (80%+ of Indian e-commerce is mobile). A/B test candidates identified upfront.",
  },
  {
    title: "Fintech & Banking Design",
    icon: "💰",
    description: "UPI payment flows, loan applications, KYC verification, investment dashboards, expense tracking. Regulatory compliance (RBI guidelines for data display), security trust signals, clear error messages, and accessible design for diverse financial literacy levels. Tested with real users, not just internal stakeholders.",
  },
  {
    title: "Healthcare & Telemedicine Design",
    icon: "🏥",
    description: "Doctor-patient interfaces, appointment booking, prescription management, medical records, video consultation UIs. HIPAA-equivalent design patterns for sensitive health data, clear visual hierarchy for critical information, and accessible design for elderly users. ABDM/NDHM integration patterns.",
  },
  {
    title: "UX Audits for Existing Products",
    icon: "🔍",
    description: "Your product is losing users at a known point (onboarding, checkout, dashboard). We conduct heuristic evaluation (identify usability issues), analytics review (quantify drop-off), and usability testing (watch 5-8 users struggle). Prioritized recommendations with estimated impact. Typical audit duration: 1-2 weeks.",
  },
];

const FAQS = [
  [
    "Do we need user research if we know our users well?",
    "Almost every founding team believes they know their users well—and almost all are wrong about something important. The ones who genuinely know their users have talked to hundreds of them, recorded those conversations, and tracked what they got wrong. User research is not about validating what you already believe—it's about discovering the things you don't know you're wrong about. Even experienced PMs at Google, Meta, and Amazon run user research before major redesigns. If they need it, you need it.",
  ],
  [
    "What tools do you use for UI/UX design?",
    "Figma for everything—wireframes, visual design, prototypes, design systems, and developer handoff. We give every client full access to the Figma project from day one—not read-only, full edit access. If you have an existing design team, we collaborate in your Figma workspace. For user research, we use Google Meet (screen share + recording), Miro (journey mapping), and Hotjar or Clarity (heatmaps and session recordings). For usability testing, we use Maze or UserTesting.com, or conduct moderated sessions over Zoom.",
  ],
  [
    "Can you redesign only part of our product instead of the whole thing?",
    "Yes. Common partial redesigns: (1) Onboarding flow (highest-impact single flow in most SaaS products—improves activation rates 30-50%). (2) Dashboard (users land here daily, needs to surface what matters). (3) Checkout (optimize conversion, reduce cart abandonment). (4) A specific feature area that's causing support tickets. A UX audit first helps identify which part of the product to focus on for maximum impact. Most clients see better ROI from fixing one critical flow than redesigning everything.",
  ],
  [
    "How do you design for Indian users specifically?",
    "Indian users span a huge range: devices (₹8,000 Android phones with 3GB RAM to iPhones), connectivity (patchy 4G in tier 2/3 cities), literacy levels, and languages. We design for tier 2/3 users, not just metro-city power users. This means: (1) Simpler language (avoid jargon, explain acronyms). (2) Icon-supported navigation (not just text labels). (3) Multilingual from the start (Hindi, regional languages). (4) Performance on mid-range hardware (aggressive image compression, skeleton loading). (5) Trust signals that work in India (RBI/NBFC registration, physical address, phone number, testimonials from Indian customers). (6) UPI-first payment design (not Stripe card forms). We test with real users from tier 2/3 cities, not just Bangalore/Delhi.",
  ],
  [
    "How do you work with developers during implementation?",
    "Figma handoff file with: (1) Auto-layout components (developers can inspect spacing, padding, alignment). (2) Exact spacing values on 8px grid (no guessing '12px or 16px?'). (3) Color tokens with hex codes + Tailwind equivalents. (4) Typography specs (font family, size, weight, line-height, letter-spacing). (5) Interactive prototype showing hover states, click animations, transitions. (6) Component documentation (when to use what, edge cases). We're available during development sprints for design questions ('what happens when this field is empty?'), review implementation screenshots in Slack, and flag deviations before they ship. Most design-dev mismatches happen because designers aren't available during implementation.",
  ],
  [
    "What about accessibility compliance (WCAG)?",
    "We design against WCAG 2.1 AA as the baseline: (1) Color contrast ratios—4.5:1 for normal text, 3:1 for large text. (2) Minimum touch target sizes—44px × 44px on mobile, 24px × 24px on desktop. (3) Focus states for keyboard navigation (visible border on tab). (4) Screen reader-compatible markup patterns (semantic HTML, ARIA labels where needed). (5) No color-only information (icons or text labels required). For government contracts or products with explicit accessibility requirements (banking, healthcare, education), we target WCAG 2.1 AAA. Accessibility audits available separately (₹50,000-1 lakh for existing products).",
  ],
  [
    "How long does UI/UX design take?",
    "Depends on scope. UX audit for existing product: 1-2 weeks. Marketing website design (5-15 pages): 2-4 weeks. Mobile app design (10-20 screens): 4-8 weeks. SaaS web application design (30-50 screens + design system): 8-16 weeks. Timeline depends on: (1) Number of unique screens. (2) Whether user research is needed (adds 2-3 weeks). (3) Number of stakeholders (more reviewers = longer feedback cycles). (4) Complexity of interactions (simple CRUD vs real-time collaboration). We give detailed timelines after the discovery call, not ballpark from a brief.",
  ],
  [
    "How much does UI/UX design cost in India?",
    "Indicative ranges: UX audit (existing product) ₹1-3 lakhs, marketing website design (5-15 pages) ₹1.5-4 lakhs, mobile app design (iOS/Android) ₹3-8 lakhs, SaaS web application design ₹4-10 lakhs, design system build ₹3-8 lakhs, full product design (research to handoff) ₹8-20 lakhs. All prices exclude GST. Factors: number of screens, complexity of interactions, whether user research is included, whether design system is needed, and timeline (rushed = premium). We provide fixed-cost estimates after reviewing requirements, not from a brief call.",
  ],
  [
    "Can you work with our existing development team?",
    "Yes. We provide Figma handoff files that any developer can implement—React, Flutter, Swift, Kotlin, whatever your stack. We collaborate in your Slack/Discord, attend your sprint planning meetings, and review implementation during development. If your team has design questions ('what happens in this edge case?'), we're available. Most clients have existing dev teams—we just provide the design expertise they lack internally. If you don't have developers, see Web Development or Mobile App Development for full-stack services.",
  ],
  [
    "Do you provide ongoing design support after the initial project?",
    "Yes. Most products need ongoing design work—new features, A/B test variants, seasonal campaigns, design system maintenance. We offer monthly retainers (₹1-3 lakhs/month): design new features as they're prioritized, maintain design system (add new components, update tokens), review implementation quality, conduct quarterly usability audits, and provide priority support for design questions. Retainers typically include 20-40 hours of design work per month. Most SaaS clients stay with us for 12-24 months, then either hire internal designers or continue on reduced retainer.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "Web Development",
    description: "Next.js, React, SaaS platforms",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description: "iOS, Android, React Native, Flutter",
    href: "/services/mobile-app-development",
  },
  {
    title: "MVP Development",
    description: "Launch your product in 8-12 weeks",
    href: "/services/mvp-development",
  },
  {
    title: "Custom Software Development",
    description: "Tailored solutions for your business",
    href: "/services/custom-software-development",
  },
];

export default function UIUXDesignPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/ui-ux-design/#service",
    name: "UI/UX Design Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/ui-ux-design",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UI/UX Design Services",
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
        name: "UI/UX Design",
        item: "https://www.crenosoft.in/services/ui-ux-design",
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
                <span className="text-5xl">🎨</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                UI/UX Design Services India
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                User research, wireframing, Figma prototypes, visual design, and design systems. Designed for Indian users, WCAG 2.1 compliant, and developer-friendly handoff. Not just pretty screens—design that solves user problems.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Start Your Design Project
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
              Design That Works for Indian Users
            </h2>
            <p className="text-slate-700">
              Good design is not about aesthetics—it's about helping users complete tasks with minimum friction. A beautiful interface that confuses users is worse than an ugly one that works. At Crenosoft, we're a UI/UX design company based in India that focuses on usability first, aesthetics second.
            </p>
            <p className="text-slate-700">
              Indian users span a massive range of devices (₹8,000 Android phones with 3GB RAM to iPhones), connectivity speeds (patchy 4G in tier 2/3 cities), literacy levels, and languages. We design for this reality—not Silicon Valley assumptions. Simpler language, icon-supported navigation, multilingual support from the start, and performance on mid-range hardware. If it works for a tier 3 city user on a Redmi phone with slow 4G, it works for everyone.
            </p>
            <p className="text-slate-700">
              We work in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Figma</a> for all design work—wireframes, visual design, prototypes, design systems. You get full edit access from day one, not PowerPoint screenshots. For user research, we recruit real users from your target demographic (not your employees), conduct moderated sessions, and identify patterns across 5-10 interviews. Design decisions backed by data, not opinions.
            </p>
            <p className="text-slate-700">
              We design against <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WCAG 2.1 AA</a> standards as the baseline—color contrast ratios, minimum touch target sizes, keyboard navigation, screen reader compatibility. Required for government contracts and increasingly for B2B SaaS. Whether you're building a <Link href="/services/web-development" className="text-blue-600 hover:underline">SaaS platform</Link>, a <Link href="/services/mobile-app-development" className="text-blue-600 hover:underline">mobile app</Link>, or an e-commerce site, we handle the entire design lifecycle—from user research to developer handoff.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our UI/UX Design Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                From user research to design systems, we cover the full spectrum of product design.
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

        {/* Process Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our Design Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A structured 4-phase approach that moves from user research to developer-ready designs.
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
                Why Choose Crenosoft for UI/UX Design
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What makes us different from other design agencies in India.
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
                Types of Products We Design
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                From SaaS dashboards to mobile apps, we've designed products across industries.
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
              Ready to Improve Your Product's Design?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us about your product and design challenges. We'll provide a scope, timeline, and fixed-cost estimate within 3-5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Start Your Design Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
