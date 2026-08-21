import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offshore Software Development Company India — Dedicated Teams | Crenosoft",
  description: "Offshore software development company in India. Dedicated teams, cost-effective development, IP protection, DPDP Act 2023 compliance. 30-50% cost savings vs US/UK/Australia. Based in Lucknow.",
  alternates: {
    canonical: "https://www.crenosoft.in/services/offshore-software-development",
  },
  openGraph: {
    title: "Offshore Software Development Company India | Crenosoft",
    description: "Offshore software development—dedicated teams, cost-effective, IP protection, DPDP compliant.",
    url: "https://www.crenosoft.in/services/offshore-software-development",
    type: "website",
    siteName: "Crenosoft",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Software Development Company India | Crenosoft",
    description: "Offshore software development—dedicated teams, cost-effective, IP protection.",
  },
};

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Development Team",
    icon: "👥",
    description: "Full-time developers, designers, and QA engineers working exclusively on your project. They attend your standups, use your tools (Jira, Slack, GitHub), and integrate with your existing team. Monthly billing, scale up or down with 30 days notice. See IT Staff Augmentation for details.",
  },
  {
    title: "Project-Based Offshore Development",
    icon: "📋",
    description: "Fixed-scope, fixed-cost projects delivered by our team in India. You define requirements, we provide timeline and estimate, and we deliver working software. Ideal for well-defined projects—MVPs, feature additions, redesigns, integrations. See MVP Development or Custom Software Development.",
  },
  {
    title: "Hybrid Model (Onshore + Offshore)",
    icon: "🌍",
    description: "Product Manager or Tech Lead in your timezone (US, UK, Australia) + development team in India. Daily overlap for real-time collaboration, async work during your night. Best of both worlds—timezone alignment + cost savings. Common for US/UK/Australian companies expanding offshore.",
  },
];

const BENEFITS = [
  {
    title: "30-50% Cost Savings",
    icon: "💰",
    description: "Senior developers in India cost ₹2-3.5 lakhs/month (US$30,000-50,000/year fully loaded). Equivalent US developers cost US$120,000-180,000/year. UK/Australia similar. Real savings after accounting for communication overhead, time zone differences, and project management. Not just hourly rate arbitrage—sustained cost advantage at scale.",
  },
  {
    title: "Access to Large Talent Pool",
    icon: "🎓",
    description: "India produces 1.5 million engineering graduates annually—largest in the world. Deep talent pool in React, Node.js, Python, Java, mobile development, AI/ML, DevOps, and cloud. Easier to hire specialists (Kubernetes expert, Flutter developer, ML engineer) than in smaller markets. Lower risk of talent bottlenecks.",
  },
  {
    title: "Timezone Overlap with US/UK/AU",
    icon: "🕐",
    description: "India (IST, UTC+5:30) has 4-5 hour daily overlap with US East Coast (9 AM IST = 11:30 PM EST previous day), 3-4 hours with UK (9 AM IST = 3:30 AM GMT), and full overlap with Australia (IST aligns with AEST afternoon). Enough for daily standups, code reviews, and unblocking. Async work during your night—progress when you wake up.",
  },
  {
    title: "IP Protection & Legal Framework",
    icon: "🔒",
    description: "Every developer signs NDAs and IP assignment agreements—all work product belongs to you, not us. India recognizes international IP law, has enforceable contract law, and provides legal recourse for breaches. For US/UK clients, we can sign contracts under your local jurisdiction. DPDP Act 2023 ensures data protection standards comparable to GDPR.",
  },
  {
    title: "Mature Tech Ecosystem",
    icon: "🏙️",
    description: "India has 30+ years of offshore development experience—Bangalore, Hyderabad, Pune, NCR are established tech hubs. Stable infrastructure (power, internet), English-speaking workforce, and business culture aligned with Western expectations. Not experimenting with new offshore locations—proven at scale by Google, Microsoft, Amazon, and 500+ Fortune 500 companies.",
  },
  {
    title: "Scalability Without Hiring Delays",
    icon: "📈",
    description: "Need to add 3 developers next month? We can do that. US/UK hiring takes 3-6 months (job post → interviews → offer → notice period). In India, we hire from our network in 2-4 weeks. Your offshore team scales with your roadmap, not your hiring capacity. Critical for startups with funding who need to move fast.",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Team Design",
    description: "Understand your tech stack, project requirements, team structure, and communication preferences. Define roles needed (senior/mid/junior developers, QA, DevOps, designers), timezone expectations, and ramp-up timeline. Output: team structure, monthly cost estimate, and onboarding plan.",
  },
  {
    number: 2,
    title: "Team Assembly & Interviews",
    description: "We shortlist candidates from our network (most are current employees or contractors we've worked with). You interview candidates over Zoom—assess technical skills, communication, and culture fit. You make the final hiring decision. Typical timeline: 2-3 weeks to assemble a 3-5 person team.",
  },
  {
    number: 3,
    title: "Onboarding & Integration",
    description: "Team gets access to your codebase, tools (GitHub, Jira, Slack, Figma), and documentation. We run knowledge transfer sessions with your existing team (if applicable). First week: setup and learning. Second week: first commits. By week 3-4, team is contributing at full capacity.",
  },
  {
    number: 4,
    title: "Ongoing Collaboration",
    description: "Team attends your daily standups, sprint planning, and retrospectives. Code reviews, PRs, and technical discussions happen in your GitHub/GitLab. We provide monthly reports (velocity, hours logged, sprint goals achieved), but day-to-day management is yours. We handle HR, payroll, benefits, workspace—you focus on product.",
  },
];

const USE_CASES = [
  {
    title: "Startups Post-Seed/Series A",
    icon: "🚀",
    description: "You raised funding and need to build fast. Hiring 5-10 engineers in SF/NY/London takes 6-12 months and burns runway. Offshore team in India operational in 4-6 weeks at 40-50% lower cost. Common setup: 1-2 senior engineers + PM in US/UK, 5-8 developers + QA in India. Typical savings: US$300,000-500,000/year.",
  },
  {
    title: "SMBs Scaling Product Teams",
    icon: "📊",
    description: "Your product is growing, backlog is piling up, but you can't justify hiring 10 full-time engineers locally. Start with 2-3 offshore developers to handle feature backlog while onshore team focuses on architecture and critical features. Scale to 5-10 as product grows. Monthly cost: ₹5-12 lakhs vs ₹20-40 lakhs for equivalent local hires.",
  },
  {
    title: "Enterprises Building New Products",
    icon: "🏢",
    description: "Large companies (banks, insurance, telecom) building digital products or internal tools. Internal IT teams lack mobile/cloud/AI expertise. Offshore team provides specialists without permanent headcount. Common for 6-18 month projects where hiring full-time doesn't make sense. We've worked with BFSI, telecom, and manufacturing enterprises.",
  },
  {
    title: "Product Companies Expanding Capacity",
    icon: "💼",
    description: "Your product team is at capacity—every sprint, features get pushed to next quarter. Add offshore developers to increase throughput without local hiring delays. They handle well-defined features, bug fixes, and tech debt while onshore team focuses on complex architecture and customer-facing work. 2x-3x sprint velocity common outcome.",
  },
  {
    title: "Agencies Handling Overflow Work",
    icon: "🏭",
    description: "Digital agencies and dev shops with more client work than local capacity. Offshore team handles overflow—either as white-label (invisible to your client) or transparent (we attend client calls with your branding). Maintain client relationships while scaling delivery. Monthly retainer model—only pay for hours used.",
  },
  {
    title: "Maintenance & Support Teams",
    icon: "🛠️",
    description: "Your product is live, but needs ongoing maintenance—bug fixes, dependency upgrades, minor feature additions. Offshore team handles L2/L3 support, monitors production, and resolves incidents. Frees your onshore team for new product development. Cost-effective 24/7 coverage with IST timezone providing overnight support for US/UK.",
  },
];

const FAQS = [
  [
    "How much does offshore software development actually save?",
    "Real savings after accounting for all costs: 30-50% for most companies. Math: Senior developer in US costs US$120,000-180,000/year salary + 25-30% for benefits/taxes = US$150,000-230,000 fully loaded. Equivalent senior developer in India costs ₹2-3.5 lakhs/month (US$30,000-50,000/year) fully loaded through us. That's 60-75% savings on paper. But you also need: (1) 10-20% overhead for communication and coordination. (2) Project manager to bridge timezones (₹1-2 lakhs/month). (3) Occasional travel for team building (₹2-5 lakhs/year). Net result: 30-50% sustained savings at scale. For a 5-person offshore team, typical savings are US$200,000-300,000/year vs hiring locally in US/UK/Australia.",
  ],
  [
    "How do you handle time zone differences?",
    "India Standard Time (IST, UTC+5:30) has daily overlap with major markets: US East Coast (4-5 hours overlap, 9 AM IST = 11:30 PM EST previous day), US West Coast (1-2 hours overlap, 9 AM IST = 8:30 PM PST previous day), UK (3-4 hours overlap, 9 AM IST = 3:30 AM GMT), Australia (full overlap, IST aligns with AEST afternoon). Enough for daily standups, code reviews, and unblocking. Team works async during your night—you wake up to completed work. For deeper collaboration, we recommend hybrid model: PM/Tech Lead in your timezone + development team in India. Best of both worlds—real-time alignment + cost savings.",
  ],
  [
    "What about IP protection and data security?",
    "Every developer signs: (1) Non-Disclosure Agreement (NDA) covering confidential information. (2) IP assignment agreement—all work product (code, designs, documentation) belongs to you, not us. (3) Non-compete (cannot work for your competitors for 1 year after leaving project). India recognizes international IP law, has enforceable contract law, and provides legal recourse for breaches. For US/UK/Australian clients, we can sign contracts under your local jurisdiction for additional legal certainty. Data security: all data stays in your cloud (AWS, Azure, GCP), not ours. Developers access via VPN with 2FA. Code lives in your GitHub/GitLab, not ours. Under India's DPDP Act 2023, we're required to implement data protection standards comparable to GDPR. We're audited annually for ISO 27001 (information security) compliance.",
  ],
  [
    "How do you ensure code quality?",
    "Every commit goes through: (1) Peer code review by senior developer before merging. (2) Automated tests (unit, integration, E2E) must pass in CI/CD pipeline. (3) Weekly code quality reviews using SonarQube or similar—track technical debt, code coverage, complexity. (4) Monthly architecture reviews with your tech lead or CTO. We follow your coding standards, use your linting rules (ESLint, Prettier), and adhere to your PR process. Quality issues caught early—not after months of development. For critical projects, we can provide dedicated QA engineer who reviews every feature before it reaches staging.",
  ],
  [
    "Can we interview and approve team members?",
    "Yes—you make the final hiring decision. Process: (1) We shortlist 2-3 candidates per role based on your requirements. (2) You interview candidates over Zoom—assess technical skills (live coding, system design), communication, and culture fit. (3) You choose who joins your team. (4) If a team member isn't performing after 1-2 months, we replace them at no cost. Most clients interview 5-8 candidates to fill 3-4 roles. Typical interview: 45-60 minutes—15 min intro, 20-30 min technical discussion or live coding, 10-15 min Q&A about experience and availability.",
  ],
  [
    "What happens if a team member leaves?",
    "We handle backfilling at no additional cost. Process: (1) Team member gives 30-60 days notice (industry standard in India). (2) We start replacement search immediately. (3) Outgoing member overlaps with new person for knowledge transfer (1-2 weeks). (4) New member gets up to speed during overlap—minimal disruption. Typical attrition: 10-15% annually (lower than India tech industry average of 20-25%). For critical roles, we can maintain a backup candidate bench—if someone leaves, replacement starts within 1 week.",
  ],
  [
    "How does communication work day-to-day?",
    "Team uses your tools and processes: Slack/Discord for chat, Zoom/Google Meet for video calls, Jira/Linear/GitHub Issues for task tracking, GitHub/GitLab for code and PRs, Figma for design reviews. Daily standup at a time that works for both timezones (typically 9-10 AM IST = late evening US, early morning UK, afternoon Australia). Async communication for non-urgent items—detailed PR descriptions, Loom videos for demos, written status updates. Team responds to messages within 4 hours during IST business hours (9 AM - 6 PM IST). For urgent issues (production down), we provide 24/7 on-call with 30-minute response SLA.",
  ],
  [
    "Can we start with a small team and scale up?",
    "Yes—that's the recommended approach. Most clients start with 2-3 developers for a 3-month pilot. Assess velocity, code quality, communication, and culture fit. If it works, scale to 5-10 developers over next 6-12 months. If it doesn't, you're not locked in—30 days notice to scale down or exit. Typical growth path: Month 1-3 (2-3 devs, pilot project), Month 4-9 (5-7 devs, feature development + tech debt), Month 10-18 (8-12 devs, multiple workstreams). We've grown teams from 2 to 20+ developers over 18-24 months for successful engagements.",
  ],
  [
    "What's included in the monthly rate?",
    "Fully loaded cost includes: developer salary + benefits (health insurance, paid leave, bonuses), workspace and equipment (laptop, monitor, desk), internet and power backup, HR and payroll administration, and our management overhead (10-15%). You pay one monthly invoice—we handle everything else. Typical rates: Junior developer (1-3 years experience) ₹1.2-1.8 lakhs/month, Mid-level developer (3-6 years) ₹1.8-2.5 lakhs/month, Senior developer (6-10 years) ₹2.5-3.5 lakhs/month, Tech Lead (10+ years) ₹3.5-5 lakhs/month. All prices exclude GST (18% for Indian clients, 0% for international clients under export of services).",
  ],
  [
    "Do you provide project management or is that on us?",
    "Both options available: (1) You manage directly—team attends your standups, you assign tasks in Jira, you review PRs. We provide administrative support (HR, payroll, replacement hiring) but day-to-day management is yours. Good for companies with existing engineering leadership. (2) We provide dedicated Project Manager (₹1-2 lakhs/month)—acts as Scrum Master, runs standups, manages backlog, tracks velocity, escalates blockers. Good for companies without spare management capacity. Hybrid also common: your PM sets direction, our PM handles day-to-day execution. Most clients start with option 1, add PM later as team scales past 5-7 people.",
  ],
];

const RELATED_SERVICES = [
  {
    title: "IT Staff Augmentation",
    description: "Hire skilled developers on demand",
    href: "/services/it-staff-augmentation",
  },
  {
    title: "Custom Software Development",
    description: "Project-based offshore development",
    href: "/services/custom-software-development",
  },
  {
    title: "MVP Development",
    description: "Launch your product in 8-12 weeks",
    href: "/services/mvp-development",
  },
  {
    title: "Web Development",
    description: "Next.js, React, SaaS platforms",
    href: "/services/web-development",
  },
];

export default function OffshoreSoftwareDevelopmentPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crenosoft.in/services/offshore-software-development/#service",
    name: "Offshore Software Development Services",
    description: metadata.description,
    provider: {
      "@id": "https://www.crenosoft.in/#organization",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    url: "https://www.crenosoft.in/services/offshore-software-development",
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
        name: "Offshore Software Development",
        item: "https://www.crenosoft.in/services/offshore-software-development",
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
                <span className="text-5xl">🌍</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Offshore Software Development Company
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600">
                Dedicated development teams in India at 30-50% lower cost than US/UK/Australia. IP-protected, DPDP-compliant, and integrated with your existing workflows. Not body shops—long-term technical partners.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Build Your Offshore Team
                </Link>
                <Link
                  href="#engagement-models"
                  className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
                >
                  Explore Engagement Models
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Why Indian Offshore Development Works
            </h2>
            <p className="text-slate-700">
              India has been the world's largest offshore software development hub for 30+ years—not by accident, but because it works. Google, Microsoft, Amazon, Goldman Sachs, and 500+ Fortune 500 companies have significant engineering teams in India. Not call centers—actual product development teams building features, fixing bugs, and shipping code.
            </p>
            <p className="text-slate-700">
              At Crenosoft, we're an offshore software development company based in Lucknow, India that specializes in building dedicated teams for US, UK, Australian, and European companies. Whether you're a post-seed startup that needs to scale fast, an SMB expanding your product team, or an enterprise building new digital products, we provide experienced developers who integrate with your existing workflows and culture.
            </p>
            <p className="text-slate-700">
              The math is simple: a senior developer in the US costs US$150,000-230,000/year fully loaded. Equivalent developer in India costs US$30,000-50,000/year through us. That's 60-75% savings on paper. After accounting for communication overhead, project management, and coordination, real sustained savings are 30-50%. For a 5-person team, typical savings are US$200,000-300,000/year. That's runway, marketing budget, or two additional US hires.
            </p>
            <p className="text-slate-700">
              We're not a body shop that throws warm bodies at your problem. Every developer is interviewed by you before joining—you assess technical skills, communication, and culture fit. They attend your standups, use your tools (Jira, Slack, GitHub), and work as an extension of your team. Under India's <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPDP Act 2023</a>, we implement data protection standards comparable to GDPR. All work is IP-protected with signed agreements—code belongs to you, not us.
            </p>
          </div>
        </section>

        {/* Engagement Models */}
        <section id="engagement-models" className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Engagement Models
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Three ways to work with our offshore development teams in India.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 text-4xl">{model.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {model.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {model.description}
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
                Why Choose India for Offshore Development
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                What makes India the world's largest and most mature offshore development market.
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

        {/* Process Section */}
        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                How We Build Your Offshore Team
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                From discovery to full integration—typically 4-6 weeks to operational team.
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

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Who Benefits from Offshore Development
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Common scenarios where offshore teams provide the best ROI.
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
              Ready to Build Your Offshore Team?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Tell us about your tech stack, team needs, and timeline. We'll provide candidate profiles, monthly cost estimate, and ramp-up plan within 3-5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Build Your Offshore Team
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
