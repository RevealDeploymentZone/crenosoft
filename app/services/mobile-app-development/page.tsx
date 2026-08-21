import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Company India — iOS, Android, React Native, Flutter | Crenosoft",
  description: "Custom mobile app development company in India. We build iOS, Android, React Native, and Flutter apps. Tested on real Indian devices, UPI payments, multilingual support, DPDP-compliant. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/mobile-app-development",
  },
  openGraph: {
    title: "Custom Mobile App Development Company India | Crenosoft",
    description: "Custom mobile app development—iOS, Android, React Native, Flutter. Tested on real Indian devices.",
    url: "https://www.crenosoft.in/services/mobile-app-development",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development Company India | Crenosoft",
    description: "Custom mobile app development—iOS, Android, React Native, Flutter.",
  },
};

const CAPABILITIES = [
  {
    title: "React Native Development",
    icon: "⚛️",
    description: "One TypeScript codebase, two platforms. Full-featured iOS and Android apps with Expo, React Navigation, Zustand state management, Firebase Cloud Messaging, and real-time capabilities. Deployed to TestFlight and Google Play.",
  },
  {
    title: "Flutter Development",
    icon: "🎨",
    description: "Google's Skia/Impeller-powered framework for pixel-perfect, brand-consistent UIs across iOS and Android. Ideal for products with complex animations and custom design that standard components can't deliver. Dart language.",
  },
  {
    title: "Native iOS (Swift/SwiftUI)",
    icon: "🍎",
    description: "SwiftUI and UIKit for products that need deep platform integration—Face ID, HealthKit, ARKit, Core Data, Apple Watch, or Wallet. Native feels native when it matters. Required for apps with complex Apple ecosystem integration.",
  },
  {
    title: "Native Android (Kotlin/Compose)",
    icon: "🤖",
    description: "Jetpack Compose and Android Architecture Components for India's dominant platform (87% market share). We test across the full range of Indian OEM hardware—Xiaomi, Samsung, Realme, Vivo, and entry-level devices under ₹10,000.",
  },
  {
    title: "AI Features in Mobile Apps",
    icon: "🧠",
    description: "On-device ML with TensorFlow Lite and Core ML for privacy-preserving inference. Cloud AI via OpenAI, Anthropic, or Google Gemini for complex language tasks. Document scanning with OCR, personalization, smart search, and chatbots.",
  },
  {
    title: "App Store Publishing & ASO",
    icon: "🚀",
    description: "App Store Connect and Google Play Console setup, ASO (keyword research, screenshots, descriptions), privacy policy compliance, review rejection management, staged rollout handling, and ongoing store optimization.",
  },
];

const TECH_STACK = [
  {
    platform: "Cross-Platform",
    icon: "📱",
    technologies: "React Native, Expo, Flutter, Dart, TypeScript, React Navigation, Zustand, Redux Toolkit",
  },
  {
    platform: "iOS Native",
    icon: "🍎",
    technologies: "Swift, SwiftUI, UIKit, Combine, Core Data, HealthKit, ARKit, AVFoundation",
  },
  {
    platform: "Android Native",
    icon: "🤖",
    technologies: "Kotlin, Jetpack Compose, Coroutines, Room, Hilt, WorkManager, CameraX",
  },
  {
    platform: "Backend & APIs",
    icon: "⚙️",
    technologies: "Firebase (Auth, Firestore, Storage, Functions, FCM), Supabase, Node.js REST APIs, GraphQL",
  },
  {
    platform: "Payment Integration",
    icon: "💳",
    technologies: "Razorpay, Cashfree, PhonePe Business, PayU, Stripe (international), in-app purchases",
  },
  {
    platform: "Analytics & Monitoring",
    icon: "📊",
    technologies: "Firebase Analytics, Mixpanel, Sentry, Crashlytics, Google Analytics 4",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Platform Decision",
    description: "We review requirements, target audience, budget, and timeline—and give you a frank recommendation on platform (native vs cross-platform) and technology stack. We define the MVP feature set, identify technical risks, and prioritize features for launch. Output: project brief, timeline, and fixed-cost estimate.",
  },
  {
    number: 2,
    title: "UX Design & Prototyping",
    description: "Mobile-first design in Figma with thumb zone analysis (right-hand, left-hand reachability), platform conventions (Apple Human Interface Guidelines and Material Design 3), and an interactive prototype for user testing before development starts. We validate navigation, gestures, and screen flows.",
  },
  {
    number: 3,
    title: "Development in Sprints",
    description: "Two-week sprints with TestFlight (iOS) or APK (Android) builds for every sprint. You test on your actual device—not simulator screenshots. Every sprint ships working, tested features. Code is reviewed, tested with unit tests, and deployed to staging. You attend sprint reviews and provide feedback continuously.",
  },
  {
    number: 4,
    title: "QA, Device Testing & Launch",
    description: "Tested across a device matrix: multiple iOS versions (iOS 15+), and multiple Android OEM devices (Xiaomi, Samsung, Realme, Oppo) including entry-level hardware (3-4GB RAM). Network condition testing for 4G and poor 3G. App Store submission, rejection handling, and staged rollout (20% → 50% → 100%).",
  },
];

const BENEFITS = [
  {
    title: "Tested on Real Indian Devices",
    icon: "📱",
    description: "We don't just test on iPhone 15 Pro and Pixel 8. We profile and optimize on real entry-level Android devices (₹8,000-15,000 price range with 3-4GB RAM) from Xiaomi, Realme, and Samsung. If it works on a Redmi A3, it works everywhere. This is critical for reaching tier 2/3 cities.",
  },
  {
    title: "UPI & Indian Payment Integration",
    icon: "💳",
    description: "We've integrated Razorpay, Cashfree, PhonePe Business, and PayU for 40+ mobile apps. UPI deep linking (opens Google Pay, PhonePe, Paytm directly), webhook handling, payment reconciliation, GST-compliant invoices, and refund workflows. All tested on real transactions in sandbox and production.",
  },
  {
    title: "Multilingual & Regional Support",
    icon: "🌏",
    description: "Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada, Malayalam—proper i18n with correct text rendering for Devanagari and other scripts. Right-to-left (RTL) support for Urdu if needed. Font optimization to avoid large bundle sizes. Common for e-commerce and government apps targeting tier 2/3 cities.",
  },
  {
    title: "DPDP Act 2023 Compliance",
    icon: "🔒",
    description: "Every mobile app includes DPDP compliance by default—consent management (explicit opt-ins, not pre-checked boxes), data minimization, audit logs for data access, and cascading delete workflows. For regulated industries (fintech, healthcare, lending), we handle RBI, ABDM, and SEBI requirements. Data localization for Indian users.",
  },
  {
    title: "Offline-First Architecture",
    icon: "📴",
    description: "Critical for India's patchy mobile networks. Apps work offline and sync when connectivity returns—using SQLite, Realm, or WatermelonDB for local storage. Users don't lose work when 4G drops to 3G or disappears in a metro tunnel. Common for field workforce, attendance, and inventory apps.",
  },
  {
    title: "App Store Approval Expertise",
    icon: "✅",
    description: "Apple rejects 40%+ of first submissions. We minimize this with complete privacy policy documentation, accurate data usage disclosures (App Tracking Transparency), correct age ratings, and review of known rejection triggers. When rejections happen (they will), we handle the resolution. 95%+ approval rate on resubmissions.",
  },
];

const USE_CASES = [
  {
    title: "Consumer Apps (B2C)",
    icon: "🛍️",
    description: "Social networking, content streaming, fitness tracking, food delivery, ride-hailing, dating apps. We've built apps with user-generated content, social feeds, real-time messaging, payment wallets, and push notifications. Optimized for scale—1,000 to 1 million users.",
  },
  {
    title: "E-commerce & Retail Apps",
    icon: "🛒",
    description: "Product catalogs, cart management, UPI/Razorpay checkout, order tracking, WhatsApp notifications, loyalty programs, and offline mode. Custom storefronts or headless Shopify/WooCommerce with mobile app frontend. Deep linking for marketing campaigns (WhatsApp, Instagram, Google Ads).",
  },
  {
    title: "Fintech & Banking Apps",
    icon: "💰",
    description: "UPI payments, loan applications, KYC verification, expense tracking, investment platforms, insurance. RBI-compliant architecture with data localization, audit logs, and secure transaction handling. Integration with payment aggregators, NPCI, and banking APIs.",
  },
  {
    title: "Healthcare & Telemedicine Apps",
    icon: "🏥",
    description: "ABDM/NDHM integration, prescription management, doctor-patient video consultations, appointment booking, medical records storage. HIPAA-equivalent compliance for healthcare data. Video calling with Agora, Twilio, or Jitsi. HL7 FHIR standards for interoperability.",
  },
  {
    title: "On-Demand & Marketplace Apps",
    icon: "🚚",
    description: "Two-sided marketplaces connecting service providers and customers—home services, logistics, freelance platforms. Real-time location tracking, job matching algorithms, escrow payments, ratings and reviews. Built for scale from day one.",
  },
  {
    title: "Enterprise & Internal Apps",
    icon: "💼",
    description: "Field workforce management, attendance tracking, inventory management, sales force automation, delivery tracking. Offline-first architecture for poor connectivity. Integration with existing ERP systems (SAP, Oracle, Zoho). Single Sign-On (SSO) with Azure AD or Okta.",
  },
];

const FAQS = [
  [
    "Should we build native or cross-platform?",
    "Cross-platform (React Native or Flutter) for most cases—one codebase, two platforms, faster launch, 40-50% lower cost. Native Swift or Kotlin when you need: (1) Deep hardware integration (ARKit, HealthKit, Bluetooth Low Energy, NFC). (2) Performance-critical features like real-time video processing or 3D graphics. (3) Target audience strongly skewed to iOS-only or Android-only. (4) Complex Apple ecosystem integration (Watch, Wallet, WidgetKit). For 80% of apps, cross-platform is the right choice. Read full comparison: React Native vs Flutter in 2025.",
  ],
  [
    "How long does it take to build a mobile app?",
    "A focused MVP (core features, no scope creep): 10-16 weeks for cross-platform (React Native/Flutter). Native apps for both iOS and Android: 20-30 weeks (essentially two projects). Timeline depends heavily on: design complexity (custom animations add time), number of backend integrations (payment, maps, third-party APIs), feedback speed during sprints (slow feedback = delayed timelines), and whether backend already exists. We give detailed estimates after the discovery phase, not from a 20-minute call.",
  ],
  [
    "Do you integrate Indian payment gateways?",
    "Yes—Razorpay, Cashfree, PhonePe Business, PayU for UPI, netbanking, wallets, and card payments. We handle the full integration: UPI deep linking (opens Google Pay, PhonePe, Paytm directly from your app), webhook management for payment status callbacks, payment reconciliation (matching payments to orders), GST-compliant invoice generation, refund workflows, and failed payment retry logic. We've processed ₹50+ crores through mobile payment integrations we've built. All tested on real transactions in sandbox and production.",
  ],
  [
    "How do you handle performance on affordable Indian Android devices?",
    "We profile and optimize on real entry-level hardware (₹8,000-15,000 price range with 3-4GB RAM, typically Snapdragon 4xx or MediaTek Helio). This means: (1) Aggressive image lazy loading and compression. (2) Minimal bundle size (code splitting, tree shaking). (3) Background task optimization (WorkManager, not constant polling). (4) Memory leak prevention (profiling with Android Studio Memory Profiler). (5) Network optimization (caching, offline mode, request batching). An app that performs on a Redmi A3 or Samsung Galaxy A04 performs everywhere. Critical for reaching tier 2/3 cities.",
  ],
  [
    "Can you add AI features to our existing app?",
    "Yes. Common additions: (1) AI-powered search (semantic search, not just keyword matching). (2) Document scanning with OCR (invoices, ID cards, receipts). (3) Chatbot integration (customer support, product recommendations). (4) Personalization features (recommended products, content feeds). (5) Recommendation systems (collaborative filtering, content-based). We audit the existing codebase first to understand architecture, assess what's practical to integrate versus what requires refactoring, and provide a scope and estimate. Typical timeline: 4-8 weeks for feature addition.",
  ],
  [
    "What about App Store review rejections?",
    "Apple rejects 40%+ of first submissions for: incomplete privacy policies, inaccurate data usage disclosures (you claimed 'no data collected' but analytics SDK is present), age rating issues (app contains user-generated content but rated 4+), missing App Tracking Transparency prompt, or violating design guidelines. We minimize rejections with: complete privacy policy documentation, accurate Privacy Nutrition Labels (what data is collected, how it's used), correct age ratings, review of known rejection triggers before submission, and test builds on TestFlight before production submission. When rejections happen (they will), we handle the resolution—usually resolved within 2-3 business days. 95%+ approval rate on resubmissions.",
  ],
  [
    "How much does mobile app development cost in India?",
    "Indicative ranges: Simple app (iOS + Android, basic features) ₹4-8 lakhs, consumer app with auth, profiles, feeds ₹8-18 lakhs, e-commerce app with payments ₹12-25 lakhs, on-demand / marketplace app (two-sided) ₹20-45 lakhs, AI-powered mobile app ₹15-35 lakhs, enterprise mobile app with ERP integration ₹25-60 lakhs. All prices exclude GST. Factors: native vs cross-platform (native costs 40-50% more), design complexity (custom animations, complex UI), backend development (new backend vs connecting to existing), integrations (payments, maps, analytics, third-party APIs), and timeline (rushed timeline = higher cost). We provide fixed-cost estimates after discovery, not ballpark from a brief call.",
  ],
  [
    "Do you handle backend development or just the mobile app?",
    "Both. We can build the full stack—mobile app + backend API + database + cloud infrastructure. Most projects use Firebase (Auth, Firestore, Storage, Functions, FCM) for rapid development, or Node.js/Python REST APIs with PostgreSQL/MongoDB for custom requirements. If you already have a backend, we connect to your existing APIs. Backend cost is typically 30-40% of total project cost. See API Development Services for backend-only projects.",
  ],
  [
    "Can you take over a half-built mobile app project?",
    "Yes, but we do a code review first (₹20,000-40,000 for 1-2 day audit). We need to understand: codebase quality (is it maintainable?), architecture (is it scalable?), technical debt (what needs refactoring?), test coverage (are there tests?), and whether the current approach is viable. We give you an honest assessment—including if we think a rebuild is faster/cheaper than continuing. We've rescued 15+ mobile projects from other agencies, offshore teams, or abandoned freelancers. Common issues: no state management, spaghetti code, memory leaks, no offline mode, poor performance.",
  ],
  [
    "Do you provide post-launch support and app updates?",
    "Yes. Mobile apps require ongoing maintenance—OS updates (iOS 18, Android 15), dependency upgrades, App Store guideline changes, bug fixes, and feature additions. We offer monthly retainers (₹1.5-5 lakhs/month depending on app complexity): security updates, dependency upgrades, crash monitoring and fixes, performance optimization, App Store / Play Store updates, new feature development (10-20 hours/month), and priority support. Most clients stay with us for 12-24 months post-launch, then either take maintenance internal or continue on reduced retainer.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "Web Development",
    description: "Next.js, React, SaaS platforms",
    href: "/services/web-development",
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
  {
    title: "UI/UX Design",
    description: "User research and product design",
    href: "/services/ui-ux-design",
  },
];

export default function MobileAppDevelopmentPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/mobile-app-development/#service",
    name: "Custom Mobile App Development Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/mobile-app-development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Services",
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
        name: "Mobile App Development",
        item: "https://www.crenosoft.in/services/mobile-app-development",
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
                <span className="text-5xl">📱</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Custom Mobile App Development
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                Build iOS and Android apps that work on real Indian devices, integrate with UPI payments, and handle patchy mobile networks. Not just simulator demos—production-ready apps tested on entry-level hardware.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Build Your Mobile App
                </Link>
                <Link
                  href="#capabilities"
                  className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Mobile App Development for the Indian Market
            </h2>
            <p className="text-slate-700">
              India has 750 million smartphone users. 87% use Android—mostly affordable devices under ₹15,000 from Xiaomi, Samsung, Realme, and Oppo. Network quality is inconsistent. Payment preferences skew heavily toward UPI. Users expect apps in Hindi, Tamil, Telugu, and regional languages—not just English.
            </p>
            <p className="text-slate-700">
              At Crenosoft, we're a custom mobile app development company based in India that builds apps for this reality—not Silicon Valley. We test on real entry-level Android devices, not just Pixel 8 and iPhone 15 Pro. We integrate UPI deep linking, not just Stripe. We build offline-first architectures for patchy 4G networks. We handle multilingual support with proper text rendering for Devanagari scripts.
            </p>
            <p className="text-slate-700">
              Whether you're building a consumer app, an e-commerce platform, a fintech product, or an internal enterprise tool, we handle the entire lifecycle—from <Link href="/services/ui-ux-design" className="text-blue-600 hover:underline">UX design</Link> to App Store publishing to ongoing maintenance. We build with <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">React Native</a>, <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Flutter</a>, native Swift, or native Kotlin—depending on your requirements, not our preferences.
            </p>
            <p className="text-slate-700">
              Under India's <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPDP Act 2023</a>, mobile apps that collect personal data must implement consent management, data localization, and audit logs. We build these requirements in from the start. For regulated industries (fintech, healthcare, lending), we also handle RBI, ABDM, and SEBI compliance.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Platforms We Build On
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Native, cross-platform, or hybrid—we recommend the right technology based on your requirements and budget.
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
                Our Mobile Tech Stack
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Modern frameworks and tools that scale from MVP to enterprise.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TECH_STACK.map((stack) => (
                <div
                  key={stack.platform}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{stack.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {stack.platform}
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
                Our Mobile Development Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A proven 4-phase approach that delivers TestFlight/APK builds every 2 weeks.
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
                Why Choose Crenosoft for Mobile Development
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What makes us different from other mobile app development companies in India.
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
                Types of Mobile Apps We Build
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Real-world mobile applications across industries and use cases.
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us about your idea. We'll provide a platform recommendation, timeline, and fixed-cost estimate within 3-5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Start Your Mobile Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
