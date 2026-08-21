import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Software Development Services India — Build Intelligent Applications | Crenosoft",
  description: "AI software development company in India. We build LLM applications, RAG systems, AI agents, computer vision, predictive ML models, and AI-powered SaaS. Production-ready, DPDP-compliant. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/ai-software-development",
  },
  openGraph: {
    title: "AI Software Development Services India | Crenosoft",
    description: "AI software development company in India. We build LLM applications, RAG systems, AI agents, computer vision, and AI-powered SaaS.",
    url: "https://www.crenosoft.in/services/ai-software-development",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Development Services India | Crenosoft",
    description: "AI software development company in India. We build LLM applications, RAG systems, AI agents, and AI-powered SaaS.",
  },
};

const AI_SERVICES = [
  {
    title: "AI Agent Development",
    icon: "🤖",
    description: "Autonomous AI systems that research, analyze, and take actions across tools and APIs without human intervention at each step.",
    link: "/services/ai-agent-development",
    kd: "KD 13",
  },
  {
    title: "AI Automation Services",
    icon: "⚡",
    description: "Automate repetitive workflows with AI — document processing, data entry, customer support triage, and intelligent routing.",
    link: "/services/ai-automation",
    kd: "KD 10",
  },
  {
    title: "Generative AI Development",
    icon: "✨",
    description: "Build applications powered by GPT-4, Claude, Gemini, and open-source LLMs — from chatbots to content generation systems.",
    link: "/services/generative-ai-development",
    kd: "KD 23",
  },
  {
    title: "AI Consulting Services",
    icon: "💡",
    description: "Strategic guidance on AI adoption — feasibility studies, architecture reviews, and build-vs-buy recommendations.",
    link: "/services/ai-consulting",
    kd: "KD 15",
  },
  {
    title: "AI Chatbot Development",
    icon: "💬",
    description: "Intelligent conversational interfaces for customer support, sales qualification, and internal knowledge management.",
    link: "/services/ai-chatbot-development",
    kd: "KD 9",
  },
  {
    title: "RAG Development Services",
    icon: "🔍",
    description: "Retrieval-Augmented Generation systems that ground LLM answers in your documents, contracts, and business data.",
    link: "/services/rag-development",
    kd: "KD 5",
  },
  {
    title: "AI Integration Services",
    icon: "🔌",
    description: "Connect AI capabilities to your existing systems — CRMs, ERPs, databases, and third-party APIs.",
    link: "/services/ai-integration",
    kd: "KD 22",
  },
];

const CORE_CAPABILITIES = [
  {
    title: "LLM Application Development",
    icon: "🧠",
    description: "Custom applications powered by GPT-4o, Claude 3.5 Sonnet/Opus, Gemini 1.5 Pro, Llama 3.1, and Mistral. We handle prompt engineering, context management, and production deployment—not just API calls wrapped in a UI.",
  },
  {
    title: "RAG Systems & Knowledge Bases",
    icon: "📚",
    description: "Retrieval-Augmented Generation pipelines that connect LLMs to your documents, support tickets, contracts, and internal wikis. Built with LangChain, LlamaIndex, Pinecone, Weaviate, or pgvector. Accurate answers grounded in your data.",
  },
  {
    title: "Computer Vision Solutions",
    icon: "👁️",
    description: "Document OCR, object detection, visual inspection, image classification, and facial recognition. We use AWS Rekognition, Google Vision AI, Azure Computer Vision, or custom PyTorch models deployed on your infrastructure.",
  },
  {
    title: "Predictive ML Models",
    icon: "📈",
    description: "Fraud detection, churn prediction, demand forecasting, credit scoring, and price optimization. Purpose-built models for structured business data using XGBoost, LightGBM, scikit-learn, and PyTorch.",
  },
  {
    title: "AI-Powered SaaS Products",
    icon: "☁️",
    description: "End-to-end development of B2B and B2C SaaS platforms with AI at the core. We build the AI pipeline, backend API, Next.js frontend, mobile app, and cloud infrastructure together—not in silos.",
  },
  {
    title: "Natural Language Processing",
    icon: "📝",
    description: "Sentiment analysis, entity extraction, text classification, summarization, and translation. For Indian businesses, we handle multilingual NLP in Hindi, Tamil, Bengali, and other regional languages.",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Data Audit & Discovery",
    description: "Before writing code, we audit your data—what exists, how clean it is, whether it's sufficient to train or fine-tune models. Most failed AI projects trace back to this question being skipped. We also define measurable success metrics upfront, not vague goals like 'the AI should feel smart.'",
  },
  {
    number: 2,
    title: "Architecture & Proof of Concept",
    description: "We design the AI pipeline and build a working proof of concept against your actual data—before committing to 3 months of development. This is when we discover whether the approach is viable, what the cost-per-query will be, and whether accuracy meets business requirements.",
  },
  {
    number: 3,
    title: "Production Development",
    description: "Full development with automated evaluation tests on every deployment. We track cost-per-query, latency, and output quality from day one—not as an afterthought. Code is versioned, prompts are versioned, and experiments are reproducible.",
  },
  {
    number: 4,
    title: "Deployment & Monitoring",
    description: "Deployment on your cloud (AWS, GCP, Azure) with full observability—Grafana or CloudWatch dashboards for model performance, API costs, and latency. We stay engaged post-launch to tune the system as real usage data comes in, not disappear after handoff.",
  },
];

const BENEFITS = [
  {
    title: "Production-Ready, Not Demos",
    icon: "🏭",
    description: "We don't hand you a Jupyter notebook and call it done. You get production infrastructure, CI/CD pipelines, monitoring dashboards, and automated evaluation tests. Software that runs reliably under load, not proof-of-concepts.",
  },
  {
    title: "DPDP Act 2023 Compliance",
    icon: "🔒",
    description: "Under India's Digital Personal Data Protection Act 2023, personal data flowing into LLM pipelines requires consent, PII redaction before third-party API calls, and cascading delete capabilities. We build this in from the start.",
  },
  {
    title: "Cost Optimization Built-In",
    icon: "💰",
    description: "We monitor cost-per-query in production and optimize aggressively—caching repetitive queries, using cheaper models for simple tasks, and batching API calls. Most AI projects blow their budget on avoidable API costs.",
  },
  {
    title: "Model-Agnostic Approach",
    icon: "🔄",
    description: "We're not locked into one vendor. We recommend OpenAI, Anthropic, Google, or open-source models based on your cost, latency, accuracy, and data privacy requirements. Your architecture doesn't depend on a single provider.",
  },
  {
    title: "Indian Market Expertise",
    icon: "🇮🇳",
    description: "We've shipped AI systems for Indian fintech (RBI compliance), healthcare (ABDM integration), logistics, and SaaS companies. We understand local compliance, multilingual requirements, and infrastructure constraints.",
  },
  {
    title: "Honest About What's Feasible",
    icon: "✅",
    description: "Not every problem needs AI. We'll tell you upfront if rule-based logic or a simple database query will work better than an LLM. We're optimizing for your business outcome, not selling AI for AI's sake.",
  },
];

const USE_CASES = [
  {
    title: "Customer Support Automation",
    icon: "💬",
    description: "AI chatbots that answer common questions from your knowledge base, escalate complex issues to humans, and learn from support ticket history. Reduce response time from hours to seconds.",
  },
  {
    title: "Intelligent Document Processing",
    icon: "📄",
    description: "Extract data from invoices, contracts, insurance claims, and government forms. Validate against business rules, flag anomalies, and route for human review only when needed. Works with scanned PDFs and handwritten text.",
  },
  {
    title: "Personalized Recommendations",
    icon: "🎯",
    description: "Product recommendations, content suggestions, or treatment plans based on user behavior, preferences, and historical data. Deployed on e-commerce sites, streaming platforms, and healthcare apps.",
  },
  {
    title: "Fraud Detection & Risk Scoring",
    icon: "🛡️",
    description: "Real-time fraud detection for financial transactions, insurance claims, or account signups. We train models on your historical fraud data and flag suspicious patterns before losses occur.",
  },
  {
    title: "Demand Forecasting & Inventory Optimization",
    icon: "📊",
    description: "Predict future demand for products, raw materials, or workforce capacity. Optimize inventory levels, reduce stockouts, and minimize waste. Common in logistics, retail, and manufacturing.",
  },
  {
    title: "Intelligent Search & Discovery",
    icon: "🔎",
    description: "Semantic search that understands intent, not just keywords. Users search in natural language, and the system returns relevant documents, products, or answers—even if the exact terms don't match.",
  },
];

const FAQS = [
  [
    "What's the difference between AI Software Development and AI Consulting?",
    "AI Consulting is strategic advisory—feasibility studies, architecture reviews, vendor selection, and roadmap planning. AI Software Development is building and deploying the actual system. Most clients start with a 2-4 week consulting engagement to assess feasibility, then move to development if the business case makes sense. See AI Consulting for details.",
  ],
  [
    "Do we need a large dataset to build AI software?",
    "Not always. Foundation models like GPT-4o and Claude come pre-trained on vast datasets. For many use cases, prompt engineering and RAG with your existing documents is sufficient. For custom ML models (fraud detection, demand forecasting), we assess during discovery whether you have enough labeled data—typically 10,000+ examples for supervised learning. If not, we discuss data collection strategies, synthetic data augmentation, or alternative approaches.",
  ],
  [
    "How do you prevent AI from giving wrong answers?",
    "No AI system is 100% accurate. What we do: (1) Build automated evaluation pipelines that measure accuracy against a test set on every deployment. (2) Use RAG to anchor answers in your documents, not the model's pre-training. (3) Add structured output validation to catch format errors. (4) Design UI patterns that set appropriate user expectations ('AI-generated, verify before acting'). (5) Build human escalation paths for high-stakes decisions. The goal is to make errors rare, detectable, and recoverable.",
  ],
  [
    "Which AI models and frameworks do you use?",
    "We're model-agnostic and choose based on your cost, latency, accuracy, and data privacy requirements. Common choices: OpenAI GPT-4o / GPT-4o-mini, Anthropic Claude 3.5 Sonnet/Opus, Google Gemini 1.5 Pro, open-source Llama 3.1, Mistral Large, and Phi-3. For data that cannot leave your infrastructure, we deploy open-source models on your AWS, GCP, or Azure account. Frameworks: LangChain, LlamaIndex, Haystack, Hugging Face Transformers, PyTorch, TensorFlow.",
  ],
  [
    "How long does an AI software project take?",
    "A focused MVP—one core use case, real data, production-ready deployment—typically takes 10-16 weeks. Complex systems with custom model training, multiple integrations, and compliance requirements take 4-6 months. We provide a detailed timeline after the discovery and proof-of-concept phase, not upfront based on a brief.",
  ],
  [
    "How much does AI software development cost in India?",
    "Indicative ranges: AI chatbot / knowledge assistant (₹5-15 lakhs), RAG system with custom data (₹8-20 lakhs), autonomous AI agent (₹12-30 lakhs), custom ML model for prediction/classification (₹8-25 lakhs), AI-powered SaaS MVP (₹15-35 lakhs), full-stack AI platform (₹30-80+ lakhs). Actual cost depends on data complexity, integrations, and scope. See Custom AI Software Development India: Pricing Guide 2025 for breakdown.",
  ],
  [
    "Do you handle DPDP Act 2023 compliance for AI systems?",
    "Yes. Every AI project includes DPDP compliance by default. We implement: (1) Consent management—users opt-in to AI processing with clear language about what data is used. (2) PII redaction—strip personally identifiable information before sending to third-party LLM APIs. (3) Data localization—Indian user data stored in India-region servers (AWS ap-south-1, GCP asia-south1, Azure Central India). (4) Audit logs—track what data was processed, when, and by whom. (5) Right to erasure—cascading delete across all systems when a user requests deletion. For regulated industries, we also handle RBI guidelines (fintech), ABDM compliance (healthcare), and SEBI requirements (capital markets).",
  ],
  [
    "Can you integrate AI into our existing software?",
    "Yes—that's our AI Integration service. Common scenarios: adding AI search to an existing web app, building a chatbot that pulls from your CRM, automating document processing in your ERP, or adding fraud detection to payment flows. We work with your current tech stack (Java, Python, .NET, PHP) and connect via REST APIs, message queues, or direct database access. See AI Integration Services.",
  ],
  [
    "What industries do you build AI software for?",
    "We've built AI systems for fintech (fraud detection, loan scoring, RBI-compliant lending platforms), healthcare (ABDM-compliant diagnostics, patient management, telemedicine), e-commerce (recommendation engines, catalog automation, personalized search), logistics (route optimization, demand forecasting, fleet tracking), B2B SaaS (AI-powered analytics, intelligent automation), and edtech (AI tutors, adaptive learning). AI applies across virtually every sector—our discovery process identifies where the ROI is highest.",
  ],
  [
    "Do you provide ongoing support after launch?",
    "Yes. AI systems require continuous tuning as usage patterns evolve. We offer monthly retainers (₹2-8 lakhs/month) that include: monitoring dashboards for cost, latency, and accuracy; prompt tuning as new edge cases emerge; model retraining when data drift is detected; infrastructure management and scaling; and priority bug fixes. Most clients stay with us for 12-24 months post-launch, then either take over maintenance internally or continue on a reduced retainer.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "AI Agent Development",
    description: "Autonomous AI systems that take action",
    href: "/services/ai-agent-development",
  },
  {
    title: "Custom Software Development",
    description: "Tailored solutions for your business",
    href: "/services/custom-software-development",
  },
  {
    title: "Cloud Consulting",
    description: "AWS, Azure, GCP infrastructure",
    href: "/services/cloud-consulting",
  },
  {
    title: "IT Staff Augmentation",
    description: "Hire AI/ML developers on demand",
    href: "/services/it-staff-augmentation",
  },
];

export default function AISoftwareDevelopmentPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/ai-software-development/#service",
    name: "AI Software Development Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/ai-software-development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Software Development Services",
      itemListElement: AI_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
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
        name: "AI Software Development",
        item: "https://www.crenosoft.in/services/ai-software-development",
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
                <span className="text-5xl">🤖</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                AI Software Development Services
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                Build production-ready AI software for your business—LLM applications, RAG systems, AI agents, computer vision, and predictive models. Not demos. Software that runs reliably in production.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Start Your AI Project
                </Link>
                <Link
                  href="#ai-services"
                  className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Why Most AI Projects Fail Before They Ship
            </h2>
            <p className="text-slate-700">
              Somewhere between the ChatGPT demo that impressed your board and the actual product your customers will use, things tend to go wrong. The model hallucinates. The latency is unacceptable. The outputs are inconsistent. The costs at scale are three times what was budgeted.
            </p>
            <p className="text-slate-700">
              The cause is almost never the AI technology itself—it's the lack of production engineering around it. Good AI software needs clean data before anything else, evaluation infrastructure so you know when outputs degrade, cost monitoring from day one, and compliance with India's <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPDP Act 2023</a> designed in from the start.
            </p>
            <p className="text-slate-700">
              At Crenosoft, we're an AI software development company based in India that specializes in building production-ready AI systems for startups, growing companies, and enterprises. Whether you're building an <Link href="/services/ai-agent-development" className="text-blue-600 hover:underline">AI agent</Link>, a RAG-powered knowledge base, or a <Link href="/services/custom-software-development" className="text-blue-600 hover:underline">custom SaaS platform</Link> with AI at the core, we handle the entire lifecycle—from data audits to post-launch monitoring.
            </p>
            <p className="text-slate-700">
              We've shipped AI systems for fintech, healthcare, logistics, and B2B SaaS companies across India. We know where the traps are because we've hit them, fixed them, and built processes to avoid them on the next project. Read our full breakdown: <Link href="/blog/custom-ai-software-development-india-2025" className="text-blue-600 hover:underline">Custom AI Software Development India: Pricing Guide 2025 →</Link>
            </p>
          </div>
        </section>

        {/* AI Services Grid */}
        <section id="ai-services" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our AI Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                From autonomous agents to RAG systems, we cover the full spectrum of AI software development. Click any service to learn more.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AI_SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-3 text-3xl transition-transform group-hover:scale-110">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      {service.kd}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Core AI Capabilities
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                The foundational AI technologies we use to build your custom solutions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CORE_CAPABILITIES.map((capability) => (
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
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our AI Development Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A proven 4-phase approach that gets AI systems into production reliably.
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
                Why Choose Crenosoft for AI Development
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What sets us apart from other AI software development companies in India.
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
                Common AI Use Cases
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Real-world applications we've built for Indian businesses across industries.
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
              Ready to Build Production-Ready AI Software?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us your use case. We'll review your data, assess feasibility, and give you an honest estimate—no commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Book Free Discovery Call
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
