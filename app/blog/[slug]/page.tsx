import type { Metadata } from "next";
import Link from "next/link";

const POSTS: Record<string, { title: string; category: string; date: string; readTime: string; body: string[] }> = {
  "ai-automation-india-2025": {
    title: "Why AI Automation is the Biggest Business Opportunity in India Right Now",
    category: "AI Automation", date: "August 10, 2025", readTime: "6 min",
    body: [
      "India is at an inflection point. With over 63 million SMEs and a fast-growing digital economy, the adoption of AI automation is no longer a luxury — it's a competitive necessity. Businesses that automate their repetitive workflows today will compound efficiency gains for years to come.",
      "AI automation tools can now handle customer onboarding, invoice processing, lead qualification, and dozens of other time-consuming tasks with minimal human involvement. The ROI is immediate and measurable — our clients typically recover their investment within 60 to 90 days.",
      "The opportunity is especially large in sectors like fintech, healthcare, logistics, and e-commerce, where data volume and process complexity make manual workflows expensive and error-prone.",
      "At Crenosoft, we've helped businesses across India cut operational costs by 30–60% through targeted AI automation. If you haven't yet evaluated where AI can eliminate bottlenecks in your organisation, now is the time.",
    ],
  },
  "llm-integration-guide": {
    title: "A Practical Guide to Integrating LLMs into Your Business Software",
    category: "AI Development", date: "July 28, 2025", readTime: "8 min",
    body: [
      "Large Language Models (LLMs) like GPT-4, Claude, and Gemini have moved from research labs to production software in record time. But knowing how to integrate them sensibly — without blowing your budget or breaking your product — requires careful planning.",
      "The first decision is model selection. For most business use cases, a hosted API (OpenAI, Anthropic, Google) beats self-hosted models on cost and reliability at scale. Self-hosting makes sense when you have strict data residency requirements or very high inference volumes.",
      "Retrieval-Augmented Generation (RAG) is the most practical pattern for adding LLM intelligence to existing business software. Instead of fine-tuning, you connect the model to your company's documents, databases, or knowledge bases at inference time — keeping costs low and answers accurate.",
      "Production concerns include latency, cost per token, fallback strategies, and PII handling. Always test with adversarial inputs and implement output filtering before going live. Our team at Crenosoft has deployed LLM-powered features for clients in finance, legal, and healthcare — we're happy to help you navigate the right approach.",
    ],
  },
  "nextjs-seo-2025": {
    title: "Next.js in 2025: Why It's Still the Best Choice for SEO-Focused Web Apps",
    category: "Web Development", date: "July 15, 2025", readTime: "5 min",
    body: [
      "When Google's Core Web Vitals became a ranking factor, server-side rendering went from a nice-to-have to a must-have for competitive SEO. Next.js App Router, introduced in Next.js 13 and matured in v14/15, makes building fast, crawlable web applications genuinely enjoyable.",
      "React Server Components (RSC) allow you to ship zero JavaScript for components that don't need interactivity. For a typical marketing website, this means dramatically smaller bundles and faster Time to Interactive — both of which Google rewards directly in search rankings.",
      "Streaming with Suspense means your pages start rendering immediately, even before all data is fetched. Combined with static generation for evergreen content and incremental static regeneration for dynamic content, Next.js gives you fine-grained control over how and when pages are built.",
      "We build every client website at Crenosoft with Next.js. The performance baseline is simply higher than any alternative, and the SEO outcomes reflect that.",
    ],
  },
  "ai-agent-basics": {
    title: "What Are AI Agents and How Can They Automate Your Business Workflows?",
    category: "AI Automation", date: "July 2, 2025", readTime: "7 min",
    body: [
      "AI agents are software systems that can perceive their environment, reason about goals, and take actions autonomously — often across multiple tools and applications. Unlike a chatbot that just answers questions, an agent can browse the web, write code, call APIs, and complete multi-step tasks without constant human oversight.",
      "The most practical business applications today include: automated research and report generation, customer support triage, data extraction from unstructured documents, CRM data enrichment, and internal IT ticket resolution.",
      "Building a reliable agent requires careful design of the tool set, memory management, and guardrails. An agent with too many tools becomes unreliable; too few tools and it can't complete real tasks. Evaluation is also harder than for traditional software — you need both automated metrics and human review.",
      "Crenosoft has built production AI agents for clients in insurance, SaaS, and logistics. If you're exploring agents for your business, start with a narrow, well-defined workflow — and build from there.",
    ],
  },
  "react-native-vs-flutter": {
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    category: "Mobile Development", date: "June 20, 2025", readTime: "6 min",
    body: [
      "Both React Native and Flutter are excellent cross-platform frameworks that let you ship iOS and Android apps from a single codebase. The right choice depends on your team, your product, and your long-term maintenance plan.",
      "React Native is the better choice if your team already knows JavaScript/TypeScript, if you want to share logic with a web app, or if you need deep integration with the JavaScript ecosystem (analytics, payments, third-party SDKs). The new architecture (JSI/Fabric) has dramatically improved performance.",
      "Flutter is the better choice if UI consistency across platforms is critical, if you're targeting high-frame-rate animations and games, or if you want a single-language stack with Dart on both mobile and web. Flutter's widget system gives you pixel-perfect control that React Native's bridge architecture historically struggled with.",
      "At Crenosoft, we use both — React Native for apps that share logic with web, Flutter for performance-critical and design-heavy applications. Book a call and we'll recommend the right fit for your project.",
    ],
  },
  "cloud-cost-optimisation": {
    title: "5 AWS Cost Mistakes Indian Startups Make (And How to Fix Them)",
    category: "Cloud", date: "June 8, 2025", readTime: "5 min",
    body: [
      "Cloud bills have a way of growing faster than your revenue. We've audited dozens of AWS accounts for Indian startups, and the same five mistakes show up repeatedly.",
      "1. Over-provisioned EC2 instances. Most teams pick an instance size during initial setup and never revisit it. Use AWS Compute Optimizer to right-size based on actual usage — savings of 30–50% are common. 2. No lifecycle policies on S3. Old logs, backups, and artefacts accumulate silently. Set lifecycle rules to transition cold data to Glacier after 30 days and delete after 90.",
      "3. Running dev/test environments 24/7. Use AWS Instance Scheduler to automatically stop non-production resources outside working hours. 4. Unattached EBS volumes and snapshots. When you terminate an instance, the associated storage often stays. Write a weekly Lambda function to detect and alert on orphaned volumes.",
      "5. No reserved capacity planning. On-demand pricing is 2–4x more expensive than Reserved Instances or Savings Plans for predictable workloads. Even a 1-year partial upfront reservation pays for itself in 3–4 months. Crenosoft's DevOps team can audit your AWS account and implement these fixes — typically recovering $500–$5,000/month in wasted spend.",
    ],
  },
  "custom-ai-software-development-india-2025": {
    title: "Custom AI Software Development for Indian Businesses: The Complete 2025 Guide",
    category: "AI Development", date: "August 16, 2025", readTime: "10 min",
    body: [
      "Artificial intelligence is no longer the exclusive territory of Google, Amazon, or billion-dollar multinationals. In 2025, a mid-size logistics company in Pune, a fintech startup in Bengaluru, or a healthcare provider in Chennai can build and deploy production-grade AI software — custom-built to their exact workflows, data, and customers. But 'custom AI software development' gets thrown around loosely. It means different things to different vendors. The result? Indian businesses either overspend on capabilities they don't need, or underspend on a solution so generic it barely moves the needle.",
      "There are three primary categories of custom AI software. First, Custom LLM Applications: Large Language Models like GPT-4o, Claude 3.5, and Gemini 1.5 are general-purpose. Custom LLM applications wrap these models with your proprietary data using Retrieval-Augmented Generation (RAG), fine-tuning, or system prompt engineering so the model behaves as an expert in your domain. Second, Custom Machine Learning Models: for structured data problems like fraud detection, demand forecasting, and churn prediction, purpose-built ML models trained on your historical data outperform generic AI every time. Third, AI-Powered SaaS Products: if you're building software, integrating AI natively creates compounding competitive advantages through intelligent onboarding, smart search, and automated analytics at the product layer.",
      "India's AI adoption is accelerating faster than any other emerging economy. NASSCOM's 2025 Technology Sector Report confirms India now has the world's third-largest AI developer community, with over 420,000 AI professionals. The IBEF Digital Economy Report projects India's AI market will reach $17 billion by 2027. Falling compute costs (down 40% since 2022), massive SME process inefficiencies, growing data volumes from UPI and e-commerce, and the DPDP Act clarifying compliance rules are all accelerating enterprise AI investment.",
      "The right approach depends on your use case. Prompt Engineering works for general tasks with low cost and maintenance. RAG (Retrieval-Augmented Generation) is ideal when your AI needs to reference proprietary documents, FAQs, or internal records — medium cost, updates automatically. Fine-Tuning suits cases needing consistent output style or domain-specific vocabulary — higher one-time cost. Custom Training makes sense only for entirely novel problems with large structured datasets. For most Indian SMEs, RAG is the right starting point: it delivers contextually aware AI without fine-tuning complexity.",
      "Industry applications delivering ROI right now: In fintech, ML models trained on UPI transaction history approve loans in under 60 seconds. In healthcare, AI transcribes physician notes into EMR systems, reducing documentation time by 50%. In logistics, demand forecasting models incorporating festival calendars and regional trends achieve 85–92% SKU-level accuracy. In e-commerce, custom recommendation engines trained on your catalogue outperform generic platform algorithms significantly. Realistic 2025 costs in India: MVP development (6–12 weeks) ranges from ₹8–25 lakhs; production-ready systems from ₹25–75 lakhs; ongoing maintenance ₹1–5 lakhs/month. According to McKinsey's 2024 AI State Report, companies that customise AI to their workflows report 3x higher productivity gains than those using off-the-shelf tools.",
      "Watch for these red flags in vendors: jumping to chatbot demos without auditing your data, guaranteeing '99% accuracy' before seeing your dataset, no production deployment references, proprietary platform lock-in, and ignoring DPDP compliance. At Crenosoft, every AI project starts with a data audit and defined problem statement — built on open frameworks (LangChain, Hugging Face, PyTorch) so you own everything that gets built. The most successful companies start small: pick one high-frequency, high-pain process, audit the data around it, define measurable success criteria, and build a scoped MVP in 6–8 weeks. Book a free technical consultation with our AI team — we'll map your highest-value AI opportunity at zero cost or obligation.",
    ],
  },
  "ui-ux-design-trends-2025-india": {
    title: "UI/UX Design Trends Dominating 2025: A Complete Guide for Indian Businesses",
    category: "UI/UX Design", date: "August 16, 2025", readTime: "9 min",
    body: [
      "Design is not decoration. In 2025, the difference between a product that grows and one that stagnates often comes down to how clearly it communicates, how quickly users reach their goals, and how little friction stands in the way. For Indian businesses — where digital-first consumers are increasingly sophisticated, mobile penetration is near-universal, and competition is intense — UI/UX design has become a core business function, not an afterthought. Every ₹1 invested in UX returns ₹100 on average according to Forrester research. The Nielsen Norman Group consistently finds that improving task completion rates by 10% yields 83% higher customer satisfaction. In India specifically, 53% of mobile users abandon a site that takes over 3 seconds to load.",
      "The biggest shift in design workflows is AI augmentation. Tools like Figma AI, Framer AI, and Uizard generate wireframes from plain-text descriptions in seconds — what took a week now takes a day. Leading e-commerce and fintech products are implementing UI personalisation: dynamically reordering navigation, surfacing relevant CTAs, and adjusting content density based on user behaviour, delivering 15–30% conversion lifts. Automated design token management means a rebrand that used to take months now takes days — critical for Indian SaaS companies scaling across B2B and B2C surfaces simultaneously.",
      "Accessibility-first design is no longer optional. India's Rights of Persons with Disabilities Act (RPWD) and the EU's European Accessibility Act (in full enforcement since 2025 for export markets) have elevated accessibility to a legal requirement. WCAG 2.2 AA compliance — proper contrast ratios, keyboard navigation, screen reader compatibility, focus management, and reduced motion options — is table stakes. More practically: accessible design is simply better design. When you design for users with low vision or motor impairments, you make your product easier for everyone.",
      "Voice-first interfaces represent India's biggest underexploited UX opportunity. With 500 million Hindi speakers and India being the world's second-largest vernacular internet market, voice UI is a present opportunity. AI voice agents replacing IVR systems reduce support costs while improving CSAT. Voice search on mobile is the primary mode for a significant segment of Tier 2 and Tier 3 internet users — products optimising for conversational, Hindi-English mixed queries capture this segment. For users with lower literacy or uncomfortable with keyboards, voice-to-text form input dramatically reduces drop-off in rural markets.",
      "Micro-interactions and emotional design separate products that feel good from those that merely function. Skeleton screens reduce perceived load time. Real-time inline form validation reduces abandonment by 22% (Baymard Institute research). Thoughtfully designed empty states convert 'nothing here' moments into engagement opportunities. Mobile-first has become mobile-only for many Indian users — thumb-zone optimisation, bandwidth-aware design for 4G averages, offline-first patterns, and bottom navigation conventions are all non-negotiable. Data visualisation is increasingly a primary product surface: choose chart types that match the insight, contextualise with benchmarks, and use colour-blind accessible palettes (ColorBrewer is the standard reference).",
      "Our UI/UX design team at Crenosoft works research-first: every engagement starts with user interviews or analytics review before a single Figma frame is opened. We've seen this consistently deliver 25–40% conversion lifts on redesign projects across e-commerce, fintech, and B2B SaaS. Not every trend is relevant to every product — prioritise based on your specific users' devices, connectivity, and language preferences. Fix the basics before optimising (slow load times and broken mobile layouts lose more conversions than any trend can recover). Define success metrics for every design decision and measure them. If you're unsure where your product's design is costing you conversions, start with a free design audit from our team.",
    ],
  },
  "cloud-migration-guide-indian-startups-2025": {
    title: "Cloud Migration for Indian Startups: A Complete Step-by-Step Guide for 2025",
    category: "Cloud", date: "August 16, 2025", readTime: "11 min",
    body: [
      "Moving your business to the cloud is one of the most consequential infrastructure decisions you will make. Done well, it unlocks scalability, reliability, and cost efficiency that on-premise or legacy hosting simply cannot match. Done poorly, it creates spiralling costs, security vulnerabilities, and operational chaos. Three trends make 2025 critical: AWS now operates Mumbai and Hyderabad regions, Google Cloud has Mumbai and Delhi NCR, and Azure has three Indian regions — enabling sub-20ms latency for Indian users while keeping data in India. The DPDP Act's data localisation provisions require Indian businesses handling healthcare or financial data to keep it within Indian borders, and the major cloud providers now have the infrastructure to support this. Legacy on-premise servers are also becoming increasingly expensive to maintain as cloud-native competitors gain structural cost advantages.",
      "Before writing a migration plan, understand which strategy applies to each workload — the '6 Rs' framework. Rehost (Lift and Shift): move servers to cloud VMs with minimal code changes — fastest and cheapest, but you'll pay cloud prices for an inefficient architecture. Replatform (Lift, Tinker, Shift): targeted optimisations like moving to managed RDS or Cloud SQL without rewriting the application. Refactor: rethink and rewrite components to use cloud-native services — most expensive but delivers the best long-term ROI for strategic systems. Repurchase: replace custom solutions with SaaS equivalents like CRM, HR, or finance tools. Retain: leave workloads that are genuinely not worth migrating. Retire: decommission workloads no longer needed — most organisations find 10–20% can be retired during assessment.",
      "Choosing your cloud provider: AWS is strongest for startups, e-commerce, AI/ML (SageMaker), and serverless (Lambda) — deepest India partner ecosystem. Azure leads for enterprises using Microsoft 365, Active Directory, or SQL Server, with class-leading hybrid cloud integration. GCP is strongest for data analytics (BigQuery), Kubernetes (Google invented it), and Vertex AI — often cheapest for compute-heavy workloads with automatic sustained use discounts. Recommendation for most Indian startups: AWS for greenfield projects, Azure for Microsoft-centric enterprises, GCP if data analytics or Kubernetes at scale are core requirements. Avoid multi-cloud complexity in your early stages.",
      "The migration process has five phases. Phase 1 — Discovery and Assessment (Weeks 1–3): document every application, map dependencies, baseline performance, audit compliance obligations under DPDP and PCI DSS, and build cost models using AWS Pricing Calculator, Azure Calculator, or GCP Calculator. Phase 2 — Foundation (Weeks 3–6): set up separate accounts for dev/staging/production, configure IAM with least-privilege principles, design VPCs and subnets, configure CloudTrail logging, and set billing alerts from day one. Phase 3 — Pilot Migration (Weeks 6–10): migrate a non-critical workload first to exercise your process. Phase 4 — Wave Execution (Weeks 10–24+): organise workloads by dependency order and risk tier, migrate during defined windows with rollback plans ready, monitor for 48–72 hours before the next wave. Phase 5 — Optimisation (ongoing from Month 3): right-size instances after real usage data, commit to reserved instances for 40–70% discounts, implement auto-scaling, and tier storage by access frequency.",
      "Realistic costs for Indian businesses: assessment ₹2–8 lakhs, engineering and execution ₹15–60 lakhs for a mid-size environment, testing 15–20% of engineering cost, team training ₹1–3 lakhs. Watch for hidden costs: data egress fees (every GB leaving a cloud region is charged), support plans (AWS Business starts at $100/month — don't run production on free support), and third-party licensing surprises (Oracle, SAP). Security non-negotiables: encrypt all sensitive data with AES-256 at rest and TLS 1.3 in transit, enable MFA on every console account, segment networks with private subnets for databases, use Amazon Inspector or Microsoft Defender for Cloud continuously, and document DPDP data flows with Indian-region residency for personal data.",
      "The DevOps foundation that makes cloud migration stick: Infrastructure as Code with Terraform or CloudFormation makes environments reproducible and auditable. CI/CD pipelines via GitHub Actions or AWS CodePipeline ensure consistent, safe deployments. Kubernetes via EKS, GKE, or AKS provides scalability and portability for microservices. Observability through Datadog, Grafana, or CloudWatch is essential from day one. Common mistakes that derail migrations: no rollback plan, underestimating data migration complexity, treating cloud like on-premise, neglecting cost governance, and skipping the pilot phase. Our cloud solutions team at Crenosoft has migrated fintech, healthcare, logistics, and SaaS companies to AWS, Azure, and GCP. Book a free cloud readiness assessment — a 45-minute conversation that produces a migration strategy, cost model, and phased roadmap.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Article Not Found — Crenosoft" };
  return {
    title: `${post.title} — Crenosoft Blog`,
    description: post.body[0].slice(0, 160),
    alternates: { canonical: `https://www.crenosoft.in/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div style={{ minHeight:"100vh", background:"#fff", paddingTop:120, paddingBottom:80, paddingLeft:24, paddingRight:24, textAlign:"center" }}>
        <h1 style={{ fontSize:40, fontWeight:700, color:"#1d1d1f", marginBottom:16 }}>Article Not Found</h1>
        <p style={{ color:"#6e6e73", marginBottom:32 }}>This article doesn&apos;t exist or has been moved.</p>
        <Link href="/blog" style={{ background:"#1d1d1f", color:"#fff", padding:"12px 24px", borderRadius:100, textDecoration:"none", fontWeight:600 }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#fff", paddingTop:96, paddingBottom:80 }}>
      {/* Header */}
      <div style={{ background:"#f5f5f7", borderBottom:"1px solid #e5e5ea", padding:"48px 24px 40px" }}>
        <div style={{ maxWidth:720, margin:"0 auto" }}>
          <Link href="/blog" style={{ fontSize:13, color:"#3d3d3d", textDecoration:"none", fontWeight:500, display:"inline-block", marginBottom:24 }}>← All Articles</Link>
          <div style={{ display:"inline-block", background:"#1d1d1f", color:"#fff", fontSize:11, fontWeight:700, padding:"4px 12px", borderRadius:20, letterSpacing:"0.04em", marginBottom:20 }}>{post.category}</div>
          <h1 style={{ fontSize:"clamp(24px,4vw,40px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.03em", lineHeight:1.2, marginBottom:16 }}>{post.title}</h1>
          <p style={{ fontSize:13, color:"#86868b" }}>{post.date} &nbsp;·&nbsp; {post.readTime} read</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth:720, margin:"0 auto", padding:"48px 24px" }}>
        {post.body.map((para, i) => (
          <p key={i} style={{ fontSize:16, color:"#3d3d3d", lineHeight:1.8, marginBottom:24 }}>{para}</p>
        ))}
        <div style={{ marginTop:48, padding:"28px", background:"#f5f5f7", borderRadius:16, border:"1px solid #e5e5ea", textAlign:"center" }}>
          <p style={{ fontSize:16, fontWeight:700, color:"#1d1d1f", marginBottom:8 }}>Ready to put these ideas into action?</p>
          <p style={{ fontSize:14, color:"#6e6e73", marginBottom:20 }}>Talk to our team — free consultation, no commitment.</p>
          <Link href="/contact" style={{ background:"#1d1d1f", color:"#fff", padding:"12px 24px", borderRadius:100, textDecoration:"none", fontWeight:600, fontSize:14 }}>Book a Free Call →</Link>
        </div>
      </div>
    </div>
  );
}
