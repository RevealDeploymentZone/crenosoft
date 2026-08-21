import type { Metadata } from "next";
import Link from "next/link";

type Block =
  | { t: "h2"; text: string }
  | { t: "p"; html: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; html: string };

interface PostData {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  excerpt: string;
  blocks: Block[];
  relatedPosts: string[];
  relatedServices: { label: string; href: string }[];
}

const ls = `style="color:#1d1d1f;font-weight:600;text-decoration:underline;text-underline-offset:3px"`;
const il = (href: string, text: string) => `<a href="${href}" ${ls}>${text}</a>`;
const el = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" ${ls}>${text}</a>`;

const POST_META: Record<string, { title: string; category: string; categoryColor: string; excerpt: string; image?: string }> = {
  "ai-automation-india-2025": { title: "Why AI Automation is the Biggest Business Opportunity in India Right Now", category: "AI Automation", categoryColor: "#f59e0b", excerpt: "Indian businesses are sitting on a goldmine of operational efficiency gains. Here's why 2025 is the year to act." },
  "custom-ai-software-development-india-2025": { title: "Custom AI Software Development for Indian Businesses: The Complete 2025 Guide", category: "AI Development", categoryColor: "#3d3d3d", excerpt: "Everything you need to know before investing in custom AI — from RAG vs fine-tuning to costs and vendor red flags." },
  "ui-ux-design-trends-2025-india": { title: "UI/UX Design Trends Dominating 2025: A Complete Guide for Indian Businesses", category: "UI/UX Design", categoryColor: "#8b5cf6", excerpt: "The shifts in user expectations separating high-performing Indian digital products from the rest." },
  "cloud-migration-guide-indian-startups-2025": { title: "Cloud Migration for Indian Startups: A Complete Step-by-Step Guide for 2025", category: "Cloud", categoryColor: "#3b82f6", excerpt: "The 6 Rs, AWS vs Azure vs GCP, cost breakdowns in INR, DPDP compliance, and common pitfalls." },
  "llm-integration-guide": { title: "A Practical Guide to Integrating LLMs into Your Business Software", category: "AI Development", categoryColor: "#3d3d3d", excerpt: "Key decisions from model selection to production deployment — what actually matters in a real LLM integration." },
  "nextjs-seo-2025": { title: "Next.js in 2025: Why It's Still the Best Choice for SEO-Focused Web Apps", category: "Web Development", categoryColor: "#06b6d4", excerpt: "How Next.js App Router has become the gold standard for Core Web Vitals and search visibility." },
  "ai-agent-basics": { title: "What Are AI Agents and How Can They Automate Your Business Workflows?", category: "AI Automation", categoryColor: "#f59e0b", excerpt: "AI agents browse the web, call APIs, and complete multi-step tasks autonomously. How they actually work." },
  "react-native-vs-flutter": { title: "React Native vs Flutter in 2025: Which Should You Choose?", category: "Mobile Development", categoryColor: "#10b981", excerpt: "An honest comparison based on real-world projects to help you pick the right cross-platform framework." },
  "cloud-cost-optimisation": { title: "5 AWS Cost Mistakes Indian Startups Make (And How to Fix Them)", category: "Cloud", categoryColor: "#3b82f6", excerpt: "The five most common AWS cost mistakes and the fixes that recover thousands per month." },
};

const POSTS: Record<string, PostData> = {
  "ai-automation-india-2025": {
    title: "Why AI Automation is the Biggest Business Opportunity in India Right Now",
    category: "AI Automation", categoryColor: "#f59e0b",
    date: "August 10, 2025", readTime: "6 min",
    excerpt: "Indian businesses are sitting on a goldmine of operational efficiency gains. Here's how AI automation is redefining what's possible — and why 2025 is the year to act.",
    relatedPosts: ["custom-ai-software-development-india-2025", "ai-agent-basics", "llm-integration-guide"],
    relatedServices: [{ label: "AI Automation", href: "/services/ai-automation" }, { label: "AI Software Development", href: "/services/ai-software-development" }],
    blocks: [
      { t: "p", html: `India is at an inflection point. With over 63 million SMEs, a fast-growing digital economy, and a workforce still heavily dependent on manual processes, the gap between where Indian businesses operate today and what ${il("/services/ai-automation", "AI automation")} makes possible is enormous. This is not a distant future scenario — it is happening now, at companies of every size across every sector.` },
      { t: "h2", text: "Why 2025 Is the Inflection Point" },
      { t: "p", html: `Three forces are converging. First, the cost of AI has collapsed — API access to frontier models from ${el("https://www.anthropic.com", "Anthropic")}, OpenAI, and Google now costs a fraction of what enterprise software licences cost a decade ago. Second, India's digital infrastructure — UPI, GST e-invoicing, Aadhaar-linked KYC, and near-universal smartphone adoption — has created rich, structured data that AI systems can act on immediately. Third, according to ${el("https://nasscom.in/", "NASSCOM")}'s 2025 Technology Sector Report, India now has the world's third-largest AI developer community with over 420,000 AI professionals, creating a deep local talent pool to build and maintain these systems.` },
      { t: "callout", html: `<strong>$17 billion</strong> — India's projected AI market size by 2027, growing faster than any other emerging economy. <em>(IBEF Digital Economy Report 2025)</em>` },
      { t: "h2", text: "Industries With the Fastest ROI" },
      { t: "p", html: `According to ${el("https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai", "McKinsey's 2024 AI State Report")}, companies that customise AI to their specific workflows report 3x higher productivity gains than those using off-the-shelf tools. In India, the impact is amplified by the scale of process inefficiency at the SME layer.` },
      { t: "ul", items: [
        `<strong>Fintech:</strong> ML models trained on UPI transaction history approve microloans in under 60 seconds — replacing days of manual underwriting.`,
        `<strong>Healthcare:</strong> AI transcription tools cut physician documentation time by 40–50%, allowing practitioners to see more patients.`,
        `<strong>Logistics:</strong> Demand forecasting incorporating festival calendars and regional patterns achieves 85–92% SKU-level accuracy.`,
        `<strong>E-commerce:</strong> ${il("/services/ai-software-development", "Custom recommendation engines")} outperform generic platform algorithms, reducing stockouts and improving conversion rates.`,
        `<strong>Professional services:</strong> AI-assisted contract review and research compress timelines that previously required junior associate hours.`,
      ]},
      { t: "h2", text: "Starting Right: The Narrow-First Approach" },
      { t: "p", html: `The most impactful implementations share one pattern: start narrow, prove ROI, then expand. Identify your single highest-frequency, highest-cost manual process and build an AI solution around that first. High-ROI starting points include automated invoice processing, customer onboarding document verification, lead qualification and CRM enrichment, support ticket triage, and scheduled report generation. Each is solvable in 6–12 weeks and typically pays back its development cost within 60–90 days. For a deeper technical breakdown, see our guide to ${il("/blog/custom-ai-software-development-india-2025", "custom AI software development for Indian businesses")}.` },
      { t: "h2", text: "Data Readiness: The Prerequisite Nobody Discusses" },
      { t: "p", html: `AI automation is only as good as the data it runs on. Many companies discover during their first AI project that data is fragmented across legacy systems, inconsistently formatted, or missing key fields. A data audit before development is not optional — companies that invest 2–3 weeks cleaning and structuring data before building see dramatically better outcomes. This applies whether you're building ${il("/blog/ai-agent-basics", "AI agents")}, ${il("/blog/llm-integration-guide", "LLM-powered features")}, or classical ML models. At Crenosoft, we've helped businesses across India cut operational costs by 30–60% through targeted ${il("/services/ai-automation", "AI automation")}. Book a free consultation — we'll identify your highest-value opportunity at zero cost.` },
    ],
  },

  "llm-integration-guide": {
    title: "A Practical Guide to Integrating LLMs into Your Business Software",
    category: "AI Development", categoryColor: "#3d3d3d",
    date: "July 28, 2025", readTime: "8 min",
    excerpt: "Not sure how to add AI intelligence to your existing tools? This step-by-step guide walks through key decisions — from model selection to production deployment.",
    relatedPosts: ["ai-agent-basics", "custom-ai-software-development-india-2025", "ai-automation-india-2025"],
    relatedServices: [{ label: "AI Software Development", href: "/services/ai-software-development" }],
    blocks: [
      { t: "p", html: `Large Language Models have moved from research curiosity to production infrastructure in under three years. GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro are now embedded in legal research tools, customer support platforms, and internal enterprise copilots across virtually every industry. But the gap between a working demo and a reliable production system remains large. The teams that bridge it successfully make a handful of architectural decisions correctly at the start — decisions that are easy to get wrong.` },
      { t: "h2", text: "Model Selection: Hosted API vs Self-Hosted" },
      { t: "p", html: `For most business applications, a hosted API — ${el("https://www.anthropic.com/api", "Anthropic")}, OpenAI, or Google — is the right choice. Hosted APIs offer predictable latency, no infrastructure management, and enterprise SLAs. The total cost of ownership is almost always lower than self-hosting once you factor in GPU infrastructure, model updates, and engineering time. Self-hosting makes sense when you have strict data residency requirements preventing data from leaving Indian servers, or when your inference volume is high enough that per-token API costs exceed owned hardware. For businesses with DPDP or healthcare obligations, Azure OpenAI Service with an Indian-region deployment is the compliance-friendly path.` },
      { t: "h2", text: "RAG vs Fine-Tuning: The Decision That Defines Your Project" },
      { t: "p", html: `${el("https://www.langchain.com/", "Retrieval-Augmented Generation (RAG)")} connects the model to your live data at inference time — retrieving relevant documents from your knowledge base and injecting them into the model's context. The model answers accurately about your products, policies, and workflows, and its knowledge stays current automatically. For most Indian businesses, RAG is the correct starting point: faster to implement, cheaper than fine-tuning, and far easier to debug when answers are wrong.` },
      { t: "p", html: `Fine-tuning is appropriate in a narrower set of cases: consistent output in a specific format or vocabulary, compressing a large system prompt into model weights at scale, or highly specialised tasks with sufficient training data. Fine-tuning does not make a model remember facts more reliably — it learns patterns and styles. Confusing these two approaches is the most common cause of failed LLM projects. See our full breakdown in ${il("/blog/custom-ai-software-development-india-2025", "custom AI software development for Indian businesses")}.` },
      { t: "h2", text: "Architecture Patterns That Work in Production" },
      { t: "ul", items: [
        `<strong>RAG pipeline:</strong> Document ingestion → chunking → embedding → vector store → retrieval → LLM generation. Use ${el("https://www.langchain.com/", "LangChain")} or ${el("https://www.llamaindex.ai/", "LlamaIndex")} as scaffolding.`,
        `<strong>Agent loop:</strong> LLM + tools (search, database, API calls) with memory — ideal for multi-step workflows. See ${il("/blog/ai-agent-basics", "how AI agents work")}.`,
        `<strong>Classifier + specialist:</strong> A small model routes requests to specialist models per category. Reduces cost and latency significantly at scale.`,
        `<strong>Structured output:</strong> Force JSON or schema-constrained output to feed downstream systems reliably without parsing issues.`,
      ]},
      { t: "h2", text: "Production Engineering Non-Negotiables" },
      { t: "ul", items: [
        `<strong>Latency:</strong> Stream responses, cache frequent queries, and use the smallest model that meets quality requirements.`,
        `<strong>Cost tracking:</strong> Monitor cost per request from day one — token costs compound quickly at scale and need to be part of your product economics.`,
        `<strong>Evaluation pipelines:</strong> Build automated quality tests with regression coverage before launch, not after.`,
        `<strong>PII handling:</strong> Redact or mask personal data before it enters any LLM prompt — a legal requirement under the DPDP Act for Indian businesses.`,
        `<strong>Adversarial testing:</strong> Test explicitly for jailbreaking, prompt injection, and unintended information extraction before going live.`,
      ]},
      { t: "h2", text: "DPDP Compliance for Indian Businesses" },
      { t: "p", html: `The ${el("https://www.meity.gov.in/data-protection-framework", "Digital Personal Data Protection Act (DPDP), 2023")} has specific implications for LLM deployments. Personal data processed by an LLM API is subject to consent and purpose-limitation requirements. If your model processes health, financial, or Aadhaar-linked data, you need a Data Protection Impact Assessment and explicit data processing agreements with your model provider. The safest architecture for sensitive data is Azure OpenAI in an Indian region with a signed DPA. Design compliance in from the start — retrofitting it after launch is painful and legally risky.` },
      { t: "h2", text: "Starting the Right Way" },
      { t: "p", html: `Engagements that succeed share a common structure: a clearly defined task (not "add AI to our product" but "reduce tier-1 support tickets by 60%"), a data audit before any model work, a ${il("/services/ai-software-development", "RAG-first architecture")} unless there is a specific reason to fine-tune, and automated evaluation from day one. Our AI engineering team offers a free technical review of your integration plan — no obligation.` },
    ],
  },

  "nextjs-seo-2025": {
    title: "Next.js in 2025: Why It's Still the Best Choice for SEO-Focused Web Apps",
    category: "Web Development", categoryColor: "#06b6d4",
    date: "July 15, 2025", readTime: "5 min",
    excerpt: "Server components, streaming, and App Router — how Next.js 14+ has become the gold standard for performance and search visibility.",
    relatedPosts: ["react-native-vs-flutter", "ui-ux-design-trends-2025-india", "cloud-migration-guide-indian-startups-2025"],
    relatedServices: [{ label: "Web Development", href: "/services/web-development" }],
    blocks: [
      { t: "p", html: `When Google made ${el("https://web.dev/vitals/", "Core Web Vitals")} a ranking signal, it codified something developers already knew: fast, well-structured pages rank better, convert better, and retain users more effectively than slow ones. ${el("https://nextjs.org/", "Next.js")} App Router — matured in v14 and v15 — has become the default choice for teams where SEO and performance are business-critical. The architectural decisions it makes by default are the same ones that produce better Lighthouse scores, better crawlability, and measurably better search visibility.` },
      { t: "h2", text: "React Server Components: The Bundle Size Revolution" },
      { t: "p", html: `React Server Components (RSC) render on the server and send HTML to the client — no JavaScript bundle, no hydration overhead, no client-side data fetch. For a typical marketing page or blog, 70–90% of components don't need interactivity. RSC means JavaScript is shipped only for components that genuinely require it: forms, menus, dropdowns. The result is dramatically smaller bundles and faster Time to Interactive — the Core Web Vitals metric most directly tied to search ranking. Google's crawler receives fully rendered HTML rather than a JavaScript shell it must execute, meaning more reliable and faster indexing of all your content.` },
      { t: "h2", text: "Streaming With Suspense Fixes the Latency Trade-Off" },
      { t: "p", html: `In the old server-rendering model, a page waited for all data to resolve before sending any HTML — one slow API call blocked the entire page. With streaming, Next.js sends the page shell and above-the-fold content immediately, then streams in slower sections as their data resolves. Google's crawler measures better Largest Contentful Paint (LCP), server-side data fetches can be parallelised, and users see content significantly faster. On data-heavy pages, streaming cuts perceived load time by 50% or more. Combined with thoughtful ${il("/blog/ui-ux-design-trends-2025-india", "UI/UX design")} choices, this compounds into a measurable conversion advantage.` },
      { t: "h2", text: "Fine-Grained Caching: SSG, ISR, and Dynamic Rendering" },
      { t: "p", html: `Next.js gives you precise caching control at the route level. Evergreen content — about pages, pricing, service descriptions — is pre-rendered at build time and served from the CDN edge at sub-50ms globally. Content that changes daily uses Incremental Static Regeneration (ISR): always fast, never stale. Only truly dynamic content — authenticated dashboards, real-time data — hits your server per request. This granularity means you're not choosing between a fast static site or a slow dynamic one — you get both in the same codebase, without the maintenance overhead of separate repos. For teams also building ${il("/blog/react-native-vs-flutter", "cross-platform mobile apps")}, a shared TypeScript stack with Next.js on web significantly reduces long-term maintenance cost.` },
      { t: "h2", text: "Real SEO Outcomes From Production" },
      { t: "p", html: `We build every client website at Crenosoft with ${el("https://nextjs.org/", "Next.js")}. The performance baseline is consistently higher than alternatives — typically 90+ Lighthouse scores on production, 95+ with careful optimisation. Clients migrating from WordPress or legacy React SPAs to Next.js App Router regularly see 20–40% increases in organic traffic within 90 days of launch, driven by improved Core Web Vitals, better crawl coverage, and richer metadata control. If you're planning a new ${il("/services/web-development", "web development project")} or evaluating a rebuild, our team will walk you through what a Next.js implementation looks like for your specific use case.` },
    ],
  },

  "ai-agent-basics": {
    title: "What Are AI Agents and How Can They Automate Your Business Workflows?",
    category: "AI Automation", categoryColor: "#f59e0b",
    date: "July 2, 2025", readTime: "7 min",
    excerpt: "AI agents can browse the web, write code, and complete complex tasks autonomously. We break down how they work — in plain language.",
    relatedPosts: ["llm-integration-guide", "ai-automation-india-2025", "custom-ai-software-development-india-2025"],
    relatedServices: [{ label: "AI Automation", href: "/services/ai-automation" }, { label: "AI Software Development", href: "/services/ai-software-development" }],
    blocks: [
      { t: "p", html: `AI agents represent the next phase of ${il("/services/ai-automation", "business automation")} — systems that don't just answer questions but take actions, make decisions, and complete multi-step tasks with minimal human oversight. Unlike a chatbot that responds and stops, an agent operates in a loop: perceive the environment, reason about what needs to happen, take an action (call an API, update a record, send a message), observe the result, and continue until the task is done. This makes agents fundamentally different from every AI tool that came before them.` },
      { t: "h2", text: "What Makes an Agent Different From a Chatbot" },
      { t: "p", html: `A chatbot generates text. An agent takes actions. An agent connected to your CRM can look up a customer, read their history, draft a personalised follow-up email, send it, and log the activity — without a human touching any step. The same workflow in a chatbot requires a human to copy-paste text, switch between tabs, and execute each step manually. The ${il("/blog/llm-integration-guide", "LLM at the core")} of an agent doesn't change — what changes is the scaffolding of tools, memory, and control flow that lets it act autonomously across your business systems.` },
      { t: "h2", text: "Business Applications Delivering Results Today" },
      { t: "ul", items: [
        `<strong>Research and reporting:</strong> Monitors competitor pricing, scans regulatory updates, aggregates market data, and compiles structured briefings — replacing hours of analyst work daily.`,
        `<strong>Customer support triage:</strong> Reads tickets, classifies by issue and urgency, retrieves documentation, drafts resolutions, and routes escalations — achieving 40–60% ticket deflection.`,
        `<strong>Data extraction and enrichment:</strong> Processes unstructured documents (invoices, contracts, medical records) and populates structured fields in your CRM or ERP.`,
        `<strong>Internal IT automation:</strong> Handles password resets, provisions access, diagnoses errors, and resolves tier-1 helpdesk tickets without human intervention.`,
        `<strong>Lead qualification:</strong> Researches inbound leads, scores against your ICP, enriches CRM records, and triggers the correct outreach sequence automatically.`,
      ]},
      { t: "h2", text: "Building Reliable Agents: Tool Design" },
      { t: "p", html: `Frameworks like ${el("https://www.langchain.com/", "LangChain")}, ${el("https://www.llamaindex.ai/", "LlamaIndex")}, and ${el("https://github.com/microsoft/autogen", "AutoGen")} provide scaffolding for tool use, memory, and multi-agent coordination. The tool abstraction is central: an agent is given a set of functions it can invoke — web search, database query, file write, API call — and the LLM reasons about which tools to use and in what order. Well-defined tools with clear inputs, outputs, and error states produce reliable agents. Vague, overlapping, or poorly documented tools produce agents that hallucinate, loop, or fail silently. Tool design is the single biggest determinant of agent reliability.` },
      { t: "h2", text: "Memory Architecture" },
      { t: "p", html: `Agents need different memory types: working memory for in-session state, episodic memory for past interactions with this user or task, and semantic memory for your domain knowledge and policies. Most production agents combine in-context storage for short-term state, a vector database for episodic and semantic retrieval, and a structured database for facts that need precise queries. Getting this right separates agents that feel coherent from agents that repeat themselves or confuse one customer's situation with another's. This closely mirrors the ${il("/blog/llm-integration-guide", "RAG architecture")} used in LLM applications generally.` },
      { t: "h2", text: "Evaluation: The Most Underinvested Area" },
      { t: "p", html: `Agents have stochastic, multi-step outputs where failure can occur at any point in a chain of actions. Effective evaluation requires: automated task completion metrics, trajectory analysis (were the steps reasonable?), adversarial testing (what happens with ambiguous inputs or missing data?), and human review of a random production sample. Build your evaluation pipeline before deploying — retrofitting it leaves you blind to failure modes. Crenosoft has built production agents for clients in insurance, SaaS, and logistics. If you're evaluating ${il("/services/ai-automation", "AI agents for your business")}, book a call — we'll give you an honest assessment based on what we've actually shipped.` },
    ],
  },

  "react-native-vs-flutter": {
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    category: "Mobile Development", categoryColor: "#10b981",
    date: "June 20, 2025", readTime: "6 min",
    excerpt: "Both are excellent cross-platform frameworks. Our honest comparison based on real-world projects to help you pick the right tool.",
    relatedPosts: ["nextjs-seo-2025", "ui-ux-design-trends-2025-india", "cloud-migration-guide-indian-startups-2025"],
    relatedServices: [{ label: "Mobile App Development", href: "/services/mobile-app-development" }],
    blocks: [
      { t: "p", html: `Cross-platform mobile development has matured to the point where the question is no longer whether you can ship a quality app — both ${el("https://reactnative.dev/", "React Native")} and ${el("https://flutter.dev/", "Flutter")} can — but which trade-offs fit your team, your product, and your long-term maintenance plan. Any agency that gives you a definitive winner without understanding your specific situation is oversimplifying. Here is an honest breakdown based on real production apps we have shipped with both.` },
      { t: "h2", text: "React Native: The JavaScript Ecosystem Advantage" },
      { t: "p", html: `React Native's core strength is ecosystem and knowledge reuse. If your team writes JavaScript or TypeScript — for your web frontend, Node.js backend, or both — React Native lets you share logic, types, and state management patterns across web and mobile. The JavaScript ecosystem is vast: every major third-party SDK from Stripe to Firebase has a React Native integration maintained by the SDK vendor. The ${el("https://reactnative.dev/docs/the-new-architecture/landing-page", "new architecture")} (JSI and Fabric, stable since v0.73) eliminates the asynchronous bridge that caused earlier performance issues, bringing performance close to Flutter's. For Indian teams where TypeScript expertise is widely available, React Native is often the pragmatic choice. It also pairs well with ${il("/blog/nextjs-seo-2025", "Next.js web applications")} in a unified TypeScript monorepo.` },
      { t: "h2", text: "Flutter: Pixel-Perfect Rendering Control" },
      { t: "p", html: `${el("https://flutter.dev/", "Flutter")} owns its own rendering pipeline via the Impeller graphics engine, drawing every pixel itself rather than delegating to native UI components. Your app looks and behaves identically on iOS, Android, web, and desktop — pixel-perfect across every surface. For applications where brand consistency, custom UI, or high-frame-rate animations are paramount — fintech dashboards, design-heavy consumer apps — Flutter gives you control that React Native's native component model still cannot fully match. The ${el("https://dart.dev/", "Dart language")} has a strong type system and tooling that produces reliable, maintainable codebases, and Flutter's hot reload makes UI iteration genuinely fast. See how Flutter's design system thinking connects with ${il("/blog/ui-ux-design-trends-2025-india", "broader UI/UX trends in India")}.` },
      { t: "h2", text: "The Decision Framework" },
      { t: "ul", items: [
        `<strong>Choose React Native if:</strong> your team knows JavaScript/TypeScript, you are sharing logic with a web application, you need deep third-party SDK integration, or time-to-market is the primary constraint.`,
        `<strong>Choose Flutter if:</strong> UI consistency across platforms is critical to your brand, you need high-performance animations or complex custom UI, or you want a single Dart stack across mobile and web.`,
        `<strong>Avoid either if:</strong> your team has no experience with the framework and your timeline is too tight to absorb the learning curve — in that case, start native on your primary platform.`,
      ]},
      { t: "h2", text: "India-Specific Talent Considerations" },
      { t: "p", html: `React Native developers are more abundant in India because the JavaScript prerequisite is lower — a React web developer can become productive in React Native within weeks. Flutter communities are growing fast in Bengaluru, Pune, and Hyderabad. For startups on tight timelines and budgets, React Native's larger talent pool makes hiring easier. For product companies where design is a differentiator, the additional investment in Flutter talent is usually justified. At Crenosoft, we build ${il("/services/mobile-app-development", "mobile applications")} with both — React Native for apps sharing logic with web, Flutter for performance-critical, design-heavy products. Book a call and we will recommend the right fit for your project.` },
    ],
  },

  "cloud-cost-optimisation": {
    title: "5 AWS Cost Mistakes Indian Startups Make (And How to Fix Them)",
    category: "Cloud", categoryColor: "#3b82f6",
    date: "June 8, 2025", readTime: "5 min",
    excerpt: "Cloud bills can spiral fast. Here are the five most common AWS cost mistakes and the fixes that save our clients thousands per month.",
    relatedPosts: ["cloud-migration-guide-indian-startups-2025", "nextjs-seo-2025", "react-native-vs-flutter"],
    relatedServices: [{ label: "Cloud Solutions", href: "/services/cloud-solutions" }],
    blocks: [
      { t: "p", html: `Cloud bills have a way of growing faster than revenue. We have audited dozens of AWS accounts for Indian startups from seed-stage to Series B, and the same five mistakes appear in almost every account. The good news: all five are fixable without application changes, and together they typically reduce monthly AWS spend by 35–60%. This guide covers what to look for and exactly what to do — applicable whether you are already on cloud or planning a ${il("/blog/cloud-migration-guide-indian-startups-2025", "migration")}.` },
      { t: "h2", text: "Mistake 1: Over-Provisioned EC2 Instances" },
      { t: "p", html: `Most teams select an instance type during initial setup and never revisit it. ${el("https://aws.amazon.com/compute-optimizer/", "AWS Compute Optimizer")} analyses actual CPU, memory, and network utilisation over 14 days and recommends right-sized alternatives for free. In our audits, 60–70% of EC2 instances run below 20% average CPU utilisation and can be downsized by one or two instance families with no perceptible performance impact. Savings: 30–50% on your compute line item — typically the largest single component of an AWS bill.` },
      { t: "h2", text: "Mistake 2: No S3 Lifecycle Policies" },
      { t: "p", html: `Object storage accumulates silently. Application logs, database backups, build artefacts, and media uploads from months past sit in Standard storage when they have not been accessed in ages. Set explicit lifecycle rules using the ${el("https://aws.amazon.com/s3/storage-classes/", "S3 storage classes")} framework: transition to S3-IA after 30 days, Glacier after 90 days, delete after 365. Alternatively, S3 Intelligent-Tiering automates this. On accounts with large S3 buckets, this single change commonly saves ₹30,000–₹2 lakh monthly.` },
      { t: "h2", text: "Mistakes 3 & 4: Dev/Test Running 24/7 and Orphaned Storage" },
      { t: "p", html: `Non-production environments running continuously cost the same as production but are only used 8–10 hours a day, 5 days a week. The ${el("https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/", "AWS Instance Scheduler")} (free) automatically stops and starts instances on a schedule. Stopping dev/test outside working hours and weekends eliminates approximately 65% of their runtime cost. Separately: when an EC2 instance is terminated, its EBS volumes often remain. We routinely find 10–30% of EBS spend going to orphaned volumes from terminated instances. A weekly Lambda function that detects unattached volumes and sends a Slack alert is enough to stop the accumulation.` },
      { t: "h2", text: "Mistake 5: No Reserved Capacity Planning" },
      { t: "p", html: `On-demand EC2 pricing is 2–4x more expensive than ${el("https://aws.amazon.com/savingsplans/", "Savings Plans")} for predictable workloads. Compute Savings Plans are flexible across instance families and regions — a 1-year, no-upfront-payment Savings Plan pays for itself within 3–4 months. Most startups should run at least their production database and application tier on Savings Plans. This is especially relevant if you are undertaking a ${il("/services/cloud-solutions", "cloud architecture review")} — getting compute commitments right from the start saves significantly over ad hoc corrections later.` },
      { t: "h2", text: "Taking Action" },
      { t: "p", html: `Priority order: (1) Run Compute Optimizer — free, no risk. (2) Add S3 lifecycle policies. (3) Schedule dev/test shutdowns. (4) Audit and clean orphaned EBS volumes. (5) Commit to Savings Plans based on your right-sized baseline. Final step: enable AWS Cost Anomaly Detection with Slack notifications so you are alerted within 24 hours if spend spikes unexpectedly. Crenosoft's DevOps team audits AWS accounts and implements all five fixes — on a typical Series A account, we recover ₹1–8 lakhs per month in wasted spend. Book a free cost audit with our team.` },
    ],
  },

  "custom-ai-software-development-india-2025": {
    title: "Custom AI Software Development for Indian Businesses: The Complete 2025 Guide",
    category: "AI Development", categoryColor: "#3d3d3d",
    date: "August 16, 2025", readTime: "10 min",
    excerpt: "Everything Indian startups and enterprises need to know before investing in custom AI — from RAG vs fine-tuning to realistic cost breakdowns and vendor red flags.",
    relatedPosts: ["llm-integration-guide", "ai-agent-basics", "ai-automation-india-2025"],
    relatedServices: [{ label: "AI Software Development", href: "/services/ai-software-development" }, { label: "AI Automation", href: "/services/ai-automation" }],
    blocks: [
      { t: "p", html: `Artificial intelligence is no longer the exclusive territory of Google, Amazon, or billion-dollar multinationals. In 2025, a mid-size logistics company in Pune, a fintech startup in Bengaluru, or a healthcare provider in Chennai can build and deploy production-grade AI software — custom-built to their exact workflows, data, and customers. But "custom AI software development" gets thrown around loosely. The result: Indian businesses either overspend on capabilities they do not need, or underspend on solutions so generic they barely move the needle.` },
      { t: "h2", text: "The Three Categories of Custom AI Software" },
      { t: "ul", items: [
        `<strong>${il("/blog/llm-integration-guide", "Custom LLM Applications")}:</strong> Wrap frontier models like GPT-4o or Claude 3.5 with your proprietary data using RAG or fine-tuning so the model behaves as an expert in your specific domain — answering questions about your products, policies, and customers accurately.`,
        `<strong>Custom Machine Learning Models:</strong> For structured data problems — fraud detection, demand forecasting, churn prediction — purpose-built models trained on your historical data consistently outperform generic AI. These are not LLM applications; they are classical ML pipelines.`,
        `<strong>AI-Powered SaaS Products:</strong> Integrating AI natively at the product layer creates compounding competitive advantages through intelligent onboarding, smart search, and automated analytics.`,
      ]},
      { t: "h2", text: "India's AI Ecosystem in 2025" },
      { t: "p", html: `${el("https://nasscom.in/", "NASSCOM")}'s 2025 Technology Sector Report confirms India now has the world's third-largest AI developer community, with over 420,000 AI professionals. Three forces are driving adoption: compute costs down 40% since 2022, massive SME process inefficiencies ripe for automation, and the DPDP Act clarifying compliance rules that previously created uncertainty around enterprise AI investment.` },
      { t: "callout", html: `According to ${el("https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai", "McKinsey's 2024 AI State Report")}, companies that customise AI to their specific workflows report <strong>3x higher productivity gains</strong> than those using off-the-shelf tools.` },
      { t: "h2", text: "Choosing the Right Technical Approach" },
      { t: "ul", items: [
        `<strong>Prompt Engineering:</strong> Best for general tasks. Low cost, no training data needed. Always start here before building anything custom.`,
        `<strong>RAG (Retrieval-Augmented Generation):</strong> Ideal when your AI needs to reference proprietary documents, FAQs, or internal records. Uses ${el("https://www.langchain.com/", "LangChain")} or ${el("https://www.llamaindex.ai/", "LlamaIndex")} as scaffolding. Updates automatically as your data changes.`,
        `<strong>Fine-Tuning:</strong> For consistent output style or domain-specific vocabulary. Higher one-time cost but reduces per-request latency and token cost at scale.`,
        `<strong>Custom Training:</strong> Only for novel problems with large structured datasets and in-house ML expertise. Rarely the right starting point.`,
      ]},
      { t: "h2", text: "Industry Applications and Realistic 2025 Costs" },
      { t: "p", html: `In fintech, ML models trained on UPI transaction history approve loans in under 60 seconds. In healthcare, AI transcription reduces physician documentation time by 50%. In logistics, ${il("/blog/ai-automation-india-2025", "demand forecasting models")} incorporating festival calendars achieve 85–92% SKU-level accuracy. Realistic costs in India: MVP (6–12 weeks) ₹8–25 lakhs; production-ready system ₹25–75 lakhs; ongoing maintenance ₹1–5 lakhs/month. These figures reflect open-framework builds using ${el("https://huggingface.co/", "Hugging Face")}, PyTorch, and LangChain — not proprietary platform lock-in.` },
      { t: "h2", text: "Red Flags to Avoid in AI Vendors" },
      { t: "ul", items: [
        "Jumping to chatbot demos without auditing your data first",
        "Guaranteeing '99% accuracy' before seeing your actual dataset",
        "No production deployment references they can share",
        "Proprietary platform lock-in — you should own the code and models",
        "Ignoring DPDP compliance requirements for personal data processing",
      ]},
      { t: "p", html: `At Crenosoft, every ${il("/services/ai-software-development", "AI project")} starts with a data audit and defined problem statement. We build on open frameworks so you own everything. Start narrow — one high-frequency, high-pain process — define measurable success criteria, and build an MVP in 6–8 weeks. For a technical deep-dive on ${il("/blog/ai-agent-basics", "AI agents")} and ${il("/blog/llm-integration-guide", "LLM integration patterns")}, see our related guides. Book a free consultation — we will map your highest-value AI opportunity at zero cost.` },
    ],
  },

  "ui-ux-design-trends-2025-india": {
    title: "UI/UX Design Trends Dominating 2025: A Complete Guide for Indian Businesses",
    category: "UI/UX Design", categoryColor: "#8b5cf6",
    date: "August 16, 2025", readTime: "9 min",
    excerpt: "From AI-generated interfaces to accessibility-first design and voice UX — the shifts separating high-performing Indian digital products.",
    relatedPosts: ["nextjs-seo-2025", "react-native-vs-flutter", "cloud-migration-guide-indian-startups-2025"],
    relatedServices: [{ label: "UI/UX Design", href: "/services/ui-ux-design" }, { label: "Web Development", href: "/services/web-development" }],
    blocks: [
      { t: "p", html: `Design is not decoration. The difference between a product that grows and one that stagnates often comes down to how clearly it communicates, how quickly users reach their goals, and how little friction stands in the way. According to ${el("https://www.forrester.com/", "Forrester Research")}, every ₹1 invested in UX returns ₹100 on average. The ${el("https://www.nngroup.com/", "Nielsen Norman Group")} finds that improving task completion rates by 10% yields 83% higher customer satisfaction. In India specifically, 53% of mobile users abandon a site that takes over 3 seconds to load. Design is a business metric — not a creative preference.` },
      { t: "h2", text: "AI-Augmented Design Workflows" },
      { t: "p", html: `Tools like Figma AI, Framer AI, and Uizard generate wireframes from plain-text descriptions in seconds — what took a week now takes a day. Leading e-commerce and fintech products are implementing UI personalisation: dynamically reordering navigation, surfacing relevant CTAs, and adjusting content density based on user behaviour. These personalisation implementations consistently deliver 15–30% conversion lifts. Automated design token management means a rebrand that used to take months now takes days — critical for ${il("/blog/react-native-vs-flutter", "cross-platform products")} that must look consistent across mobile and web simultaneously.` },
      { t: "h2", text: "Accessibility Is Now a Legal Requirement" },
      { t: "p", html: `${el("https://www.w3.org/WAI/WCAG22/quickref/", "WCAG 2.2 AA compliance")} — proper contrast ratios, keyboard navigation, screen reader compatibility, focus management, and reduced motion options — is table stakes in 2025. India's Rights of Persons with Disabilities Act (RPWD) and the EU's European Accessibility Act (in full enforcement since 2025 for export markets) have elevated accessibility to a legal requirement. More practically: accessible design is simply better design. When you design for users with low vision or motor impairments, you make your product easier for everyone. Accessibility testing should be part of every ${il("/services/ui-ux-design", "design process")} from the first prototype.` },
      { t: "h2", text: "Voice-First: India's Biggest Underexploited UX Opportunity" },
      { t: "p", html: `With 500 million Hindi speakers and India being the world's second-largest vernacular internet market, voice UI is a present — not future — opportunity. AI voice agents replacing legacy IVR systems reduce support costs while improving CSAT. Voice search on mobile is the primary input mode for a significant segment of Tier 2 and Tier 3 internet users — products optimising for conversational, Hindi-English mixed queries capture this segment entirely. For users with lower literacy or discomfort with keyboards, voice-to-text form input dramatically reduces drop-off in rural markets. This also connects naturally with ${il("/blog/ai-agent-basics", "AI agent workflows")} that can act on voice-initiated tasks.` },
      { t: "h2", text: "Micro-Interactions, Mobile-First, and Data Visualisation" },
      { t: "p", html: `Skeleton screens reduce perceived load time. Real-time inline form validation reduces abandonment by 22% (${el("https://baymard.com/", "Baymard Institute")} research). Thoughtfully designed empty states convert "nothing here" moments into engagement opportunities. Mobile-first has become mobile-only for many Indian users — thumb-zone optimisation, bandwidth-aware design for 4G averages, offline-first patterns, and bottom navigation conventions are non-negotiable. Data visualisation is increasingly a primary product surface: use ${el("https://colorbrewer2.org/", "ColorBrewer-standard colour palettes")} for accessibility, choose chart types that match the insight, and always contextualise numbers with benchmarks. These principles apply equally to ${il("/blog/nextjs-seo-2025", "Next.js web applications")} and native mobile products.` },
      { t: "h2", text: "Measuring Design Outcomes" },
      { t: "p", html: `Our ${il("/services/ui-ux-design", "UI/UX design team")} at Crenosoft works research-first: every engagement starts with user interviews or analytics review before a single Figma frame is opened. We consistently see 25–40% conversion lifts on redesign projects across e-commerce, fintech, and B2B SaaS. Fix the basics before optimising — slow load times and broken mobile layouts lose more conversions than any trend can recover. Define success metrics for every design decision and measure them. If you are unsure where your product's design is costing you conversions, start with a free design audit from our team.` },
    ],
  },

  "cloud-migration-guide-indian-startups-2025": {
    title: "Cloud Migration for Indian Startups: A Complete Step-by-Step Guide for 2025",
    category: "Cloud", categoryColor: "#3b82f6",
    date: "August 16, 2025", readTime: "11 min",
    excerpt: "A practical, jargon-free guide to cloud migration — covering the 6 Rs, AWS vs Azure vs GCP for India, cost breakdowns in INR, DPDP compliance, and common mistakes.",
    relatedPosts: ["cloud-cost-optimisation", "nextjs-seo-2025", "custom-ai-software-development-india-2025"],
    relatedServices: [{ label: "Cloud Solutions", href: "/services/cloud-solutions" }],
    blocks: [
      { t: "p", html: `Moving your business to the cloud is one of the most consequential infrastructure decisions you will make. Done well, it unlocks scalability, reliability, and cost efficiency that on-premise hosting cannot match. Done poorly, it creates spiralling costs, security vulnerabilities, and operational chaos. Three factors make 2025 the right moment: AWS now operates Mumbai and Hyderabad regions (enabling sub-20ms latency for Indian users), the ${el("https://www.meity.gov.in/data-protection-framework", "DPDP Act")}'s data localisation requirements can now be met within Indian cloud regions, and cloud-native competitors are gaining structural cost advantages that make delaying migration increasingly expensive.` },
      { t: "h2", text: "The 6 Rs: Choosing the Right Strategy Per Workload" },
      { t: "ul", items: [
        `<strong>Rehost (Lift and Shift):</strong> Move servers to cloud VMs with minimal code changes. Fastest and cheapest — but you pay cloud prices for an inefficient architecture.`,
        `<strong>Replatform:</strong> Targeted optimisations like moving to managed RDS without rewriting the application. Good middle ground.`,
        `<strong>Refactor:</strong> Rethink and rewrite using cloud-native services. Most expensive but best long-term ROI for strategic systems.`,
        `<strong>Repurchase:</strong> Replace custom solutions with SaaS equivalents — CRM, HR, finance tools. Often overlooked but highly effective.`,
        `<strong>Retain:</strong> Leave workloads not worth migrating now.`,
        `<strong>Retire:</strong> Decommission workloads no longer needed — most organisations find 10–20% can be retired immediately, reducing complexity and cost before migration even begins.`,
      ]},
      { t: "h2", text: "AWS vs Azure vs GCP for Indian Businesses" },
      { t: "p", html: `${el("https://aws.amazon.com/", "AWS")} leads for startups, e-commerce, AI/ML (SageMaker), and serverless (Lambda) — and has the deepest India partner and support ecosystem. Azure leads for enterprises using Microsoft 365, Active Directory, or SQL Server, with class-leading hybrid cloud integration. GCP is strongest for data analytics (BigQuery), Kubernetes (which Google invented), and Vertex AI — and is often cheapest for compute-heavy workloads due to automatic sustained use discounts. For most Indian startups: choose AWS for greenfield projects, Azure for Microsoft-centric enterprises, GCP if data analytics or Kubernetes at scale are core requirements. Avoid multi-cloud complexity in early stages. Read our ${il("/blog/cloud-cost-optimisation", "AWS cost optimisation guide")} once you are live to avoid the most common billing mistakes.` },
      { t: "h2", text: "The Five-Phase Migration Process" },
      { t: "ol", items: [
        `<strong>Discovery and Assessment (Weeks 1–3):</strong> Document every application, map dependencies, baseline performance, and audit compliance obligations under DPDP and PCI DSS. Build cost models using the ${el("https://calculator.aws/pricing/2/", "AWS Pricing Calculator")}.`,
        `<strong>Foundation (Weeks 3–6):</strong> Set up separate accounts for dev/staging/production, configure IAM with least-privilege, design VPCs, enable CloudTrail logging, and set billing alerts from day one.`,
        `<strong>Pilot Migration (Weeks 6–10):</strong> Migrate one non-critical workload first to exercise your runbooks and identify gaps before touching production.`,
        `<strong>Wave Execution (Weeks 10–24+):</strong> Organise workloads by dependency order and risk tier. Migrate during defined windows with rollback plans ready. Monitor for 48–72 hours before the next wave.`,
        `<strong>Optimisation (Month 3 onwards):</strong> Right-size instances based on real usage data, commit to reserved capacity for 40–70% discounts, implement auto-scaling, and tier storage by access frequency.`,
      ]},
      { t: "h2", text: "Security, DPDP Compliance, and Hidden Costs" },
      { t: "p", html: `Security non-negotiables: AES-256 encryption at rest, TLS 1.3 in transit, MFA on every console account, private subnets for databases, and continuous scanning via Amazon Inspector or Microsoft Defender. Document DPDP data flows with Indian-region residency confirmed for all personal data. Hidden costs: data egress fees (charged per GB leaving a region), AWS Business Support ($100/month minimum — never run production on free support), and third-party licensing surprises from Oracle and SAP. Realistic total costs for Indian businesses: assessment ₹2–8 lakhs, engineering and execution ₹15–60 lakhs, testing 15–20% of engineering cost, team training ₹1–3 lakhs.` },
      { t: "h2", text: "The DevOps Foundation That Makes Migration Stick" },
      { t: "p", html: `Infrastructure as Code with ${el("https://www.terraform.io/", "Terraform")} or CloudFormation makes environments reproducible and auditable. CI/CD pipelines via GitHub Actions or AWS CodePipeline ensure consistent, safe deployments. Kubernetes via EKS, GKE, or AKS provides scalability and portability for microservices. Observability through Datadog, Grafana, or CloudWatch is essential from day one. Common mistakes that derail migrations: no rollback plan, underestimating data migration complexity, treating cloud like on-premise, and skipping the pilot phase. Our ${il("/services/cloud-solutions", "cloud solutions team")} has migrated fintech, healthcare, logistics, and SaaS companies to AWS, Azure, and GCP. Book a free cloud readiness assessment — a 45-minute conversation that produces a migration strategy, cost model, and phased roadmap.` },
    ],
  },
};

// ── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────
const DATE_MAP: Record<string, string> = {
  "ai-automation-india-2025": "2025-08-10",
  "custom-ai-software-development-india-2025": "2025-08-16",
  "ui-ux-design-trends-2025-india": "2025-08-16",
  "cloud-migration-guide-indian-startups-2025": "2025-08-16",
  "building-ai-powered-saas-india-2025": "2025-08-16",
  "llm-integration-guide": "2025-07-28",
  "nextjs-seo-2025": "2025-07-15",
  "ai-agent-basics": "2025-07-02",
  "react-native-vs-flutter": "2025-06-20",
  "cloud-cost-optimisation": "2025-06-08",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  const meta = POST_META[slug];
  if (!post && !meta) return { title: "Article Not Found — Crenosoft" };
  const title = post?.title ?? meta?.title ?? "Crenosoft Blog";
  const description = post?.excerpt ?? meta?.excerpt ?? "";
  const url = `https://www.crenosoft.in/blog/${slug}`;
  const published = DATE_MAP[slug] ?? "2025-08-01";

  // Use per-article image if specified in POST_META, otherwise use article-specific path
  // To add custom images: place 1200×630 PNG files in /public/blog-images/{slug}.png
  // OR add image: "https://..." to the POST_META entry
  const ogImage = meta?.image ?? `https://www.crenosoft.in/blog-images/${slug}.png`;

  // Calculate optimal title: remove year if title exceeds 60 chars
  const shortTitle = title.replace(/ in 202[56]:?| 202[56]:?/g, '');
  const finalTitle = `${shortTitle} | Crenosoft`;

  return {
    title: { absolute: finalTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Crenosoft",
      locale: "en_IN",
      publishedTime: published,
      authors: ["https://www.crenosoft.in"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@crenosoft",
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function toId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function renderBlock(block: Block, idx: number) {
  const pStyle: React.CSSProperties = { fontSize: 16, color: "#3d3d3d", lineHeight: 1.85, marginBottom: 22 };
  const liStyle: React.CSSProperties = { fontSize: 16, color: "#3d3d3d", lineHeight: 1.75, marginBottom: 10 };
  switch (block.t) {
    case "h2":
      return (
        <h2 key={idx} id={toId(block.text)} style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em", lineHeight: 1.3, marginTop: 44, marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid #f0f0f0" }}>
          {block.text}
        </h2>
      );
    case "p":
      return <p key={idx} dangerouslySetInnerHTML={{ __html: block.html }} style={pStyle} />;
    case "ul":
      return (
        <ul key={idx} style={{ paddingLeft: 22, marginBottom: 22, marginTop: 4 }}>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} style={liStyle} />
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} style={{ paddingLeft: 22, marginBottom: 22, marginTop: 4 }}>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} style={liStyle} />
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={idx} dangerouslySetInnerHTML={{ __html: block.html }} style={{ background: "#f5f5f7", borderLeft: "4px solid #1d1d1f", borderRadius: "0 8px 8px 0", padding: "16px 20px", margin: "28px 0", fontSize: 15, color: "#3d3d3d", lineHeight: 1.7 }} />
      );
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>Article Not Found</h1>
        <p style={{ color: "#6e6e73", marginBottom: 32 }}>This article doesn&apos;t exist or has been moved.</p>
        <Link href="/blog" style={{ background: "#1d1d1f", color: "#fff", padding: "12px 24px", borderRadius: 100, textDecoration: "none", fontWeight: 600 }}>← Back to Blog</Link>
      </div>
    );
  }

  const toc = post.blocks.filter((b): b is { t: "h2"; text: string } => b.t === "h2");
  // ── Structured Data ───────────────────────────────────────────────────────
  const dateMap: Record<string, string> = {
    "ai-automation-india-2025": "2025-08-10",
    "custom-ai-software-development-india-2025": "2025-08-16",
    "ui-ux-design-trends-2025-india": "2025-08-16",
    "cloud-migration-guide-indian-startups-2025": "2025-08-16",
    "building-ai-powered-saas-india-2025": "2025-08-16",
    "llm-integration-guide": "2025-07-28",
    "nextjs-seo-2025": "2025-07-15",
    "ai-agent-basics": "2025-07-02",
    "react-native-vs-flutter": "2025-06-20",
    "cloud-cost-optimisation": "2025-06-08",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: dateMap[slug] ?? "2025-08-01",
    dateModified: dateMap[slug] ?? "2025-08-01",
    author: { "@type": "Organization", "@id": "https://www.crenosoft.in/#organization", name: "Crenosoft", url: "https://www.crenosoft.in" },
    publisher: { "@type": "Organization", "@id": "https://www.crenosoft.in/#organization", name: "Crenosoft", logo: { "@type": "ImageObject", url: "https://www.crenosoft.in/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.crenosoft.in/blog/${slug}` },
    url: `https://www.crenosoft.in/blog/${slug}`,
    image: "https://www.crenosoft.in/og-image.png",
    inLanguage: "en-IN",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.crenosoft.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.crenosoft.in/blog/${slug}` },
    ],
  };



  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 96, paddingBottom: 80 }}>

      {/* Header */}
      <div style={{ background: "#f5f5f7", borderBottom: "1px solid #e5e5ea", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#3d3d3d", textDecoration: "none", fontWeight: 500, display: "inline-block", marginBottom: 24 }}>← All Articles</Link>
          <div style={{ display: "inline-block", background: post.categoryColor, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.04em", marginBottom: 20, marginLeft: 12 }}>{post.category}</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 16 }}>{post.title}</h1>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.6, marginBottom: 20 }}>{post.excerpt}</p>
          <p style={{ fontSize: 13, color: "#86868b" }}>{post.date} &nbsp;·&nbsp; {post.readTime} read</p>
        </div>
      </div>

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "40px 24px 0" }}>

        {/* Table of Contents */}
        {toc.length > 2 && (
          <nav style={{ background: "#f9f9fb", border: "1px solid #e5e5ea", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#86868b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>In this article</p>
            <ol style={{ paddingLeft: 18, margin: 0 }}>
              {toc.map((h, i) => (
                <li key={i} style={{ marginBottom: 6 }}>
                  <a href={`#${toId(h.text)}`} style={{ fontSize: 14, color: "#1d1d1f", textDecoration: "none", lineHeight: 1.5, fontWeight: 500, borderBottom: "1px solid transparent" }}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Body */}
        <article>
          {post.blocks.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Related Services */}
        {post.relatedServices.length > 0 && (
          <div style={{ background: "#1d1d1f", borderRadius: 16, padding: "28px 32px", margin: "48px 0 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Explore our services</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>We help Indian businesses implement what you just read.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {post.relatedServices.map((s, i) => (
                <Link key={i} href={s.href} style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "9px 18px", borderRadius: 50, textDecoration: "none", fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)", whiteSpace: "nowrap" }}>
                  {s.label} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: "28px 32px", background: "#f5f5f7", borderRadius: 16, border: "1px solid #e5e5ea", textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>Ready to put these ideas into action?</p>
          <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 20 }}>Talk to our team — free consultation, no commitment.</p>
          <Link href="/contact" style={{ background: "#1d1d1f", color: "#fff", padding: "12px 24px", borderRadius: 100, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Book a Free Call →</Link>
        </div>

        {/* Related Posts */}
        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#86868b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Related Articles</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {post.relatedPosts.map((relSlug) => {
              const meta = POST_META[relSlug];
              if (!meta) return null;
              return (
                <Link key={relSlug} href={`/blog/${relSlug}`} style={{ background: "#f9f9fb", border: "1px solid #e5e5ea", borderRadius: 14, padding: "20px", textDecoration: "none", display: "block", transition: "transform 0.2s" }}>
                  <span style={{ display: "inline-block", background: meta.categoryColor + "18", color: meta.categoryColor, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20, letterSpacing: "0.04em", marginBottom: 10 }}>{meta.category}</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1d1d1f", lineHeight: 1.4, marginBottom: 8 }}>{meta.title}</p>
                  <p style={{ fontSize: 12, color: "#86868b", lineHeight: 1.6 }}>{meta.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

