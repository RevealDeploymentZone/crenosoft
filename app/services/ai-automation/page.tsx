import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services India — Intelligent Workflow & Document Automation | Crenosoft",
  description: "AI-powered business automation in India—document processing, email triage, workflow automation, and AI agents. Reduce manual work by 70-85%. DPDP-compliant. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation Services India | Crenosoft",
    description: "AI-powered business automation—document processing, email triage, and workflow automation. Reduce manual work by 70-85%.",
    url: "https://www.crenosoft.in/services/ai-automation",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services India | Crenosoft",
    description: "AI-powered business automation—document processing, email triage, and workflow automation.",
  },
};

const CAPABILITIES = [
  {
    title: "Document Processing & OCR",
    icon: "📄",
    description: "Extract and validate data from invoices, contracts, KYC forms, insurance claims, and PDFs—regardless of layout or format. Accuracy rates of 95-99% on structured document types. Built with AWS Textract, Google Document AI, and custom NLP models.",
  },
  {
    title: "Email & Communication Automation",
    icon: "📧",
    description: "AI reads, categorizes, and responds to incoming emails—trained on your products, policies, and tone. Handles volume that would take hours each day. Human escalation for anything genuinely complex or sensitive.",
  },
  {
    title: "Workflow & System Integration",
    icon: "🔗",
    description: "Connect your existing tools—Salesforce, SAP, Tally, Zoho, Google Workspace, Razorpay, Shiprocket—into automated workflows. A sales order triggers inventory, creates an invoice, sends a WhatsApp confirmation, and updates your CRM. No manual handoffs.",
  },
  {
    title: "AI Agent Pipelines",
    icon: "🤖",
    description: "Autonomous agents that research, gather data, make decisions, and take actions across tools—without human input at each step. Useful for lead research, multi-step back-office processes, and competitive monitoring. See AI Agent Development for deep-dive.",
  },
  {
    title: "Automated Reporting & Analytics",
    icon: "📊",
    description: "Pull data from databases, SaaS tools, and spreadsheets on schedule. Calculate KPIs, flag anomalies, generate formatted reports in PDF or Excel, and deliver via email, Slack, or WhatsApp. No more Sunday evening number-crunching.",
  },
  {
    title: "Data Extraction & Enrichment",
    icon: "🔎",
    description: "Scrape, structure, and enrich data from websites, portals, and directories at scale. Lead enrichment, market research, product catalog management—on a schedule, delivered to your CRM or database.",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Process Mapping",
    description: "We document the exact current-state process with your operations team—every step, decision point, exception, and tool. Automating a broken or undocumented process makes a mess faster. This step is non-negotiable.",
  },
  {
    number: 2,
    title: "Feasibility & Prioritization",
    description: "We identify which parts can be automated and which genuinely need human judgment. We prioritize by impact: how long does this take, how often, what does an error cost? Output is a ranked list with ROI estimates for each candidate.",
  },
  {
    number: 3,
    title: "Build & Test",
    description: "We build in stages using real data from your environment—not fabricated test cases. Every stage is tested against edge cases and exceptions before moving forward. You see working automations in 2-week sprints.",
  },
  {
    number: 4,
    title: "Pilot & Handover",
    description: "The automation runs in parallel with the manual process for 2 weeks. We compare outputs, resolve gaps, and train your team on monitoring and exception handling. After validation, we hand over documentation and admin access.",
  },
];

const BENEFITS = [
  {
    title: "70-85% Time Reduction",
    icon: "⏱️",
    description: "Typical results on document processing, report generation, and CRM updates. We measure baseline before starting and track savings monthly. Most projects pay back within 3-6 months when total labor cost and error cost are factored in.",
  },
  {
    title: "Works With Your Existing Tools",
    icon: "🔧",
    description: "We don't force you to switch ERPs or CRMs. We connect to Salesforce, Zoho, Tally, SAP, Google Workspace, Razorpay, Shiprocket, WhatsApp Business API, and 100+ other tools via APIs or webhooks. For legacy systems without APIs, we use database integration.",
  },
  {
    title: "Handles Variation, Not Just Perfect Data",
    icon: "🎯",
    description: "Traditional RPA breaks when inputs change. AI automation handles variation—different PDF layouts, missing fields, emails without expected subject lines. It interprets context using NLP and escalates ambiguous cases to humans.",
  },
  {
    title: "DPDP Act 2023 Compliance Built-In",
    icon: "🔒",
    description: "Automation pipelines that process personal data require consent, data minimization, and cascading delete capabilities. We build these obligations into the architecture from the start. For fintech (RBI) and healthcare (ABDM), we handle sector-specific requirements.",
  },
  {
    title: "Scales Without Hiring",
    icon: "📈",
    description: "When order volume doubles, you don't hire 5 more data entry staff. The automation handles it. Cost scales with usage, not headcount. Most clients see 10x volume growth without adding operations staff.",
  },
  {
    title: "24/7 Operation",
    icon: "🌙",
    description: "Automations run around the clock. Orders placed at midnight are processed immediately. Reports are generated at 6 AM before your team arrives. Exception alerts come via Slack or email in real-time.",
  },
];

const USE_CASES = [
  {
    title: "Invoice & Purchase Order Processing",
    icon: "🧾",
    description: "Extract data from supplier invoices, validate against purchase orders, flag discrepancies, and create accounting entries in Tally or SAP. Reduce processing time from 15 minutes per invoice to under 1 minute.",
  },
  {
    title: "KYC Document Verification",
    icon: "✅",
    description: "Extract data from Aadhaar, PAN, driving licenses, and utility bills. Validate against government databases, detect tampering, and flag documents for manual review only when genuinely ambiguous. Common in fintech, insurance, and lending.",
  },
  {
    title: "Customer Support Triage",
    icon: "💬",
    description: "AI reads incoming support emails, categorizes by issue type, extracts key details (order ID, product, error message), and routes to the right team. Responds automatically to common questions. Reduces first-response time from hours to minutes.",
  },
  {
    title: "Lead Enrichment & Qualification",
    icon: "🎯",
    description: "New lead from website form? AI looks up company details (size, industry, funding), finds decision-maker LinkedIn profiles, scores lead quality, and updates CRM with a summary. Sales reps work qualified leads only.",
  },
  {
    title: "Report Generation & Distribution",
    icon: "📊",
    description: "Pull sales, inventory, or financial data from your ERP/database. Calculate KPIs, generate charts, format as PDF or Excel, and email to stakeholders. Runs on schedule—daily, weekly, or monthly. No more manual report assembly.",
  },
  {
    title: "Order-to-Fulfillment Automation",
    icon: "📦",
    description: "Order placed on Shopify? Automation checks inventory in ERP, creates a picking list, books courier via Shiprocket API, sends WhatsApp order confirmation, and updates accounting in Tally. Zero manual handoffs between systems.",
  },
];

const ROI_EXAMPLES = [
  {
    task: "Invoice processing",
    before: "15 min/invoice",
    after: "1 min/invoice",
    saving: "70-85% time saved",
  },
  {
    task: "Email triage & routing",
    before: "2-4 hours/day",
    after: "30 min/day",
    saving: "50-70% volume handled without human",
  },
  {
    task: "Report generation",
    before: "3 hours/report",
    after: "5 min automated",
    saving: "80-95% time reduction",
  },
  {
    task: "CRM data entry",
    before: "5-10 min/lead",
    after: "Fully automated",
    saving: "85-95% manual entry eliminated",
  },
  {
    task: "KYC document processing",
    before: "20 min/application",
    after: "6 min/application",
    saving: "60-80% processing time reduction",
  },
];

const FAQS = [
  [
    "What tasks are good candidates for AI automation?",
    "Tasks that are high-volume, repetitive, and follow recognizable patterns—even with variation. Invoice processing, email triage, document classification, data entry from forms, report generation, and CRM updates are the most common starting points. If you can describe the steps a person follows to complete a task, it's usually viable. The question is whether ROI justifies the build cost. Tasks done 100+ times per month with 10+ minutes per task are usually strong candidates.",
  ],
  [
    "How is this different from Zapier or Make.com?",
    "Zapier and Make are excellent for simple, structured automations between tools with APIs—trigger X in app A, do Y in app B. They break down when inputs are unstructured (PDFs, emails, images), when tasks require judgment or context, or when workflows have complex branching logic with exceptions. AI automation handles these. For many clients the right answer is a combination: Zapier for simple trigger-based flows, custom AI for complex document and communication processing.",
  ],
  [
    "How do you measure ROI on automation projects?",
    "Before starting, we establish baseline metrics: how long the task takes, how often it runs, error rate, and cost of errors. After implementation, we measure against that baseline. Typical results: 70-85% time reduction on document processing, 80-95% on report generation, 3-6 month payback period on most projects. For a 20-person team spending 30% of time on automatable tasks, the labor savings alone justify the investment in under 6 months.",
  ],
  [
    "Can you integrate with our legacy ERP or on-premise systems?",
    "Usually yes. Modern ERPs (SAP, Oracle, Zoho) have APIs—integration is straightforward. For older systems without APIs, we use database-level integration (direct SQL queries to read/write data) or, as a last resort, UI automation (RPA). We always prefer API-level integration for reliability and maintainability. If your ERP is truly ancient with no database access, we'll discuss workarounds during discovery.",
  ],
  [
    "What about DPDP Act 2023 compliance for automation systems?",
    "Under India's Digital Personal Data Protection Act 2023, automation pipelines that process personal data require appropriate consent, data minimization, and the ability to delete a user's data on request. For fintech (RBI guidelines) and healthcare (DISHA, ABDM), there are additional sector-specific requirements. We build these obligations into the automation architecture from the start—consent management, PII redaction, audit logs, and cascading delete workflows.",
  ],
  [
    "How long does an automation project take?",
    "Simple document processing or reporting automations: 4-8 weeks. Multi-system workflow automations: 8-16 weeks. AI agent pipelines with complex decision-making: 10-20 weeks depending on tools and decision complexity. We give detailed estimates after the process mapping phase—not based on a brief call. Most projects are delivered in 2-week sprints with working software at the end of each sprint.",
  ],
  [
    "What happens when the automation encounters an edge case it can't handle?",
    "We design automations with explicit escalation paths. When confidence is low (e.g., document field is ambiguous, email intent is unclear), the system flags the item for human review and sends a Slack or email alert. You don't discover failures after the fact—you're notified in real-time. Over time, we tune the system based on escalation patterns to handle more edge cases automatically.",
  ],
  [
    "Can we start with a small pilot before committing to full automation?",
    "Yes—that's the recommended approach. We start with one high-impact, well-defined task (e.g., invoice processing for one supplier, email triage for one inbox). Build it, run it in parallel with the manual process for 2 weeks, measure results. If ROI is clear, we expand to additional tasks. If not, we stop. Most clients pilot one task (₹3-8 lakhs), then expand to 5-10 tasks within 6 months.",
  ],
  [
    "Do you provide ongoing support after the automation is live?",
    "Yes. Automation systems require monitoring and tuning as business processes evolve. We offer monthly retainers (₹1-3 lakhs/month) that include: exception monitoring and resolution, updates when underlying systems or APIs change, performance optimization, and new workflow additions. Most clients stay with us for 12-24 months, then either take over maintenance internally or continue on a reduced retainer.",
  ],
  [
    "How much does AI automation cost in India?",
    "Indicative ranges: Simple document processing automation (₹3-8 lakhs), multi-system workflow automation (₹8-18 lakhs), AI agent pipeline with decision-making (₹12-25 lakhs), full back-office automation suite (₹20-50 lakhs). Actual cost depends on number of systems, data volume, and complexity of decision logic. We provide a fixed-cost estimate after process mapping. Most projects have 3-6 month payback periods when labor savings, error reduction, and speed improvements are factored in.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "AI Agent Development",
    description: "Autonomous AI systems that take action",
    href: "/services/ai-agent-development",
  },
  {
    title: "AI Software Development",
    description: "Custom LLM applications and ML models",
    href: "/services/ai-software-development",
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
];

export default function AIAutomationPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/ai-automation/#service",
    name: "AI Automation Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.crenosoft.in/services/ai-automation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
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
        name: "AI Automation",
        item: "https://www.crenosoft.in/services/ai-automation",
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
                <span className="text-5xl">⚡</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                AI Automation Services India
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                Stop paying skilled people to do work a machine should handle. We build intelligent automation systems that run your repetitive operations accurately, reliably, around the clock—connected to the tools you already use.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Automate Your Workflows
                </Link>
                <Link
                  href="#capabilities"
                  className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
                >
                  What We Automate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Traditional RPA Is Not Enough Anymore
            </h2>
            <p className="text-slate-700">
              RPA tools like UiPath and Blue Prism work well when processes are perfectly predictable and structured. The moment a form layout changes, a PDF arrives in a slightly different format, or an email comes without the expected subject line, the automation breaks and someone has to intervene manually.
            </p>
            <p className="text-slate-700">
              AI automation is different. It handles variation, interprets unstructured inputs using natural language processing, makes judgment calls based on context, and escalates genuinely ambiguous situations to a human—rather than failing silently or processing incorrect data.
            </p>
            <p className="text-slate-700">
              India's 63 million SMEs spend an estimated 30-40% of total working hours on tasks that can be automated—invoice processing, email triage, report generation, CRM updates. For a 20-person company, that's roughly 6 full-time employees doing work that generates no strategic value. At Crenosoft, we build <Link href="/services/ai-agent-development" className="text-blue-600 hover:underline">AI agents</Link> and automation pipelines that free your team to focus on growth, not data entry.
            </p>
            <p className="text-slate-700">
              Read our full analysis: <Link href="/blog/ai-automation-india-2025" className="text-blue-600 hover:underline">Why AI Automation Is India's Biggest Business Opportunity in 2025 →</Link>
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                What We Automate
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Six core automation capabilities that eliminate repetitive work across your business.
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

        {/* ROI Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                What Automation Actually Saves
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Typical results from Crenosoft automation projects. We measure baseline before and after every engagement.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 p-4 font-semibold text-slate-700">
                <div>Task Type</div>
                <div>Before Automation</div>
                <div>After Automation</div>
                <div>Result</div>
              </div>
              {ROI_EXAMPLES.map((example, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 border-b border-slate-100 p-4 text-slate-600 last:border-b-0"
                >
                  <div className="font-medium text-slate-900">{example.task}</div>
                  <div>{example.before}</div>
                  <div>{example.after}</div>
                  <div className="font-semibold text-blue-600">{example.saving}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-600">
              Most projects pay back within 3-6 months when total labor cost, error cost, and speed-to-process are factored in.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Our Automation Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A proven 4-phase approach that delivers measurable ROI, not just technology demos.
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
                Why Choose Crenosoft for AI Automation
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What sets our automation services apart from traditional RPA vendors.
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
                Common Automation Use Cases
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Real-world automations we've built for Indian businesses across industries.
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
              Ready to Stop Doing Work Machines Should Do?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us which operations are eating your team's time. We'll map the process, identify automation opportunities, and give you a clear ROI estimate.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
