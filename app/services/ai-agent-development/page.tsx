import type { Metadata } from "next";
import Link from "next";

export const metadata: Metadata = {
  title: "AI Agent Development Services — Build Autonomous AI Agents | Crenosoft",
  description: "AI agent development services in India. Build autonomous agents that reason, plan, and execute multi-step tasks. LangChain, AutoGen, custom tool integration. DPDP-compliant AI agents. Based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/ai-agent-development" },
};

const CAPABILITIES = [
  ["🤖", "Research & Data Gathering Agents", "Autonomous agents that browse websites, extract structured data, monitor competitors, aggregate market intelligence, and compile research reports — without human supervision at each step. Configure monitoring rules, approval gates for high-stakes decisions, and scheduled execution. Output: formatted reports, structured data in your CRM/database, Slack summaries."],
  ["📧", "Customer Support & Triage Agents", "AI agents that read incoming support tickets, classify by issue type and urgency, retrieve relevant documentation from your knowledge base, draft resolution steps, and route escalations to the right team. Achieves 40–70% ticket deflection. Integrates with Zendesk, Freshdesk, Intercom, or custom helpdesk systems."],
  ["📊", "Business Process Automation Agents", "Multi-step workflow agents: invoice processing (extract data → validate → approve → update accounting system), lead qualification (research company → score fit → enrich CRM → trigger outreach), contract analysis (extract clauses → flag risks → summarize obligations). Replaces manual tasks that require judgment, not just data entry."],
  ["🔍", "Sales & Lead Intelligence Agents", "Agents that research inbound leads, score against your ICP (company size, industry, tech stack, funding), enrich CRM records with LinkedIn data and news mentions, identify decision-makers, and automatically trigger personalized outreach sequences. Integrates with Salesforce, HubSpot, Pipedrive, or custom CRMs."],
  ["💬", "Internal IT & Helpdesk Agents", "Autonomous agents handling tier-1 IT support: password resets, access provisioning, error diagnosis from logs, common troubleshooting (VPN issues, email setup, software installation). Uses internal knowledge base, ticketing system APIs (Jira, Linear, ServiceNow), and approval workflows for sensitive operations."],
  ["📝", "Content & Document Processing Agents", "Agents that read unstructured documents (PDFs, emails, scanned images), extract key information, classify by document type (invoice, contract, medical record, KYC form), validate against business rules, and populate structured fields in your database. Handles variation in format and layout — not brittle template-matching."],
  ["🧪", "Data Analysis & Reporting Agents", "Agents that query your databases, calculate KPIs, detect anomalies (revenue drops, spike in errors, unusual activity), generate formatted reports (PDF, Excel, dashboard), and deliver via email/Slack on schedule. Replaces manual monthly reporting that takes analysts hours. Integrates with PostgreSQL, BigQuery, Snowflake, MongoDB."],
  ["🔗", "API Integration & Workflow Agents", "Agents that orchestrate complex multi-system workflows: order placed → update inventory → create invoice → send WhatsApp notification → log in CRM → update analytics. Connects your existing tools (Salesforce, Tally, Zoho, Razorpay, Shiprocket) into automated pipelines without custom code for each integration."],
];

const APPROACH = [
  ["🎯", "Task-Specific, Not General-Purpose", "We don't build AGI — we build agents for defined business tasks. An agent that qualifies leads, not one that 'does sales'. An agent that triages support tickets, not one that 'handles customer service'. Narrow, well-scoped agents are reliable; general-purpose agents hallucinate and fail unpredictably. Clear boundaries = predictable outcomes."],
  ["🛠️", "Tool-First Architecture", "Agents are only as good as the tools they can invoke. We design tool interfaces carefully: clear inputs/outputs, error handling, idempotent operations (safe to retry), and rate limiting. Tools include: web search, database queries, API calls, file operations, email/Slack sending. Well-designed tools = reliable agent execution."],
  ["🔁", "Human-in-the-Loop for High-Stakes Decisions", "Agents operate autonomously for routine tasks but escalate ambiguous or high-risk decisions to humans. Approval gates configured per task: auto-approve routine operations, require human confirmation for deletions/payments/contract changes. Agents propose actions, humans approve — not full automation without oversight."],
  ["📈", "Observable & Debuggable", "Every agent execution logged: inputs, tool calls, decisions, outputs, errors, cost per run. Dashboard showing success rates, failure modes, execution time, token usage. When agents fail, we know exactly where and why. Observability is non-negotiable for production agents — 'it just doesn't work' is not acceptable debugging."],
  ["💰", "Cost-Conscious Design", "LLM API costs compound fast at scale. We optimize: use cheaper models (GPT-4o-mini, Claude Haiku) for simple tasks, reserve expensive models (GPT-4o, Claude Opus) for complex reasoning. Cache frequently-accessed data. Batch API calls where latency permits (50–90% cheaper). Monitor cost-per-task from day one."],
  ["🔒", "Security & Compliance Built-In", "Agents handling personal data comply with DPDP Act 2023: PII redaction before LLM calls, consent management, audit logging, data deletion on request. For fintech: RBI KYC requirements, transaction monitoring. For healthcare: ABDM compliance, PHI handling safeguards. Security failures in agents can expose entire databases — we build defensively."],
];

const FRAMEWORKS = [
  ["LangChain", "Most popular Python framework for building agent workflows. Provides pre-built tool integrations (Google Search, Wikipedia, SQL databases, APIs), memory management (conversation history, vector stores), and agent execution loops. We use LangChain for: research agents, data extraction, customer support. Fast to prototype, good ecosystem."],
  ["LlamaIndex", "Specialized for RAG (Retrieval-Augmented Generation) agents that need to query large document collections. Better than LangChain when primary task is searching internal knowledge bases, contracts, or manuals. We use LlamaIndex for: legal/compliance agents, technical documentation Q&A, enterprise knowledge management agents."],
  ["AutoGen (Microsoft)", "Multi-agent framework where multiple AI agents collaborate on complex tasks. One agent plans, another executes, a third validates. Useful for code generation agents, complex research projects, and scenarios requiring different specialized agents. More complex than single-agent frameworks but handles sophisticated workflows."],
  ["Custom (Python + OpenAI/Anthropic APIs)", "For production systems requiring full control: custom tool execution loops, specific error handling, precise cost tracking, custom caching strategies. We build custom when LangChain/LlamaIndex abstractions don't fit or when performance/cost optimization is critical. Typical for high-volume production agents processing thousands of requests daily."],
];

const PROCESS = [
  ["01", "Task Analysis & Tool Design", "Week 1: Identify the exact task the agent will automate. What inputs does it receive? What tools does it need (APIs, databases, web search)? What decisions require human approval? What outputs are expected? Documented clearly before any code. Ill-defined tasks produce unreliable agents — specificity is everything."],
  ["02", "Proof of Concept", "Week 2–3: Build working agent on sample data. Validate approach: does the agent reliably complete the task? Where does it fail? What tools are missing? What edge cases break it? This phase uncovers hidden complexity before committing to full build. If POC fails, pivot approach before spending weeks on wrong solution."],
  ["03", "Tool Integration & Testing", "Week 4–6: Integrate production APIs and databases. Build comprehensive test suite: happy paths, edge cases, error conditions, adversarial inputs (what if user tries to trick the agent?). Automated tests run on every code change. Production agents must be tested like production software — manual testing isn't sufficient."],
  ["04", "Evaluation Pipeline", "Build automated evaluation comparing agent outputs to expected results. For research agents: does extracted data match source documents? For support agents: do drafted responses resolve the issue? Track success rate, failure modes, execution time, cost per run. Evaluation metrics defined before deployment, not discovered after launch."],
  ["05", "Deployment & Monitoring", "Deploy with monitoring dashboards: success/failure rates, average execution time, cost per task, error types, escalation frequency. Alerts for anomalies (sudden spike in failures, cost explosion, timeout errors). Agents are stochastic — outputs vary run-to-run. Monitoring catches degradation before users complain."],
  ["06", "Iteration & Tuning", "First 30 days post-launch: analyze failures, improve tool logic, refine prompts, add error handling, update evaluation criteria. Agent performance improves iteratively as real-world edge cases emerge. Budget 20–30% of development time for post-launch tuning — agents aren't 'done' at deployment like traditional software."],
];

const PRICING: [string, string, string][] = [
  ["Simple Research Agent", "₹6–12 lakhs", "Single-task agent (web scraping, data extraction, report generation). 8–10 weeks."],
  ["Support Triage Agent", "₹8–15 lakhs", "Ticket classification, documentation retrieval, response drafting. 10–12 weeks."],
  ["Lead Qualification Agent", "₹10–18 lakhs", "CRM integration, research, scoring, enrichment. 10–14 weeks."],
  ["Multi-Tool Workflow Agent", "₹15–30 lakhs", "Complex multi-step workflows across 3+ systems. 12–16 weeks."],
  ["Custom Agent Platform", "₹25–60 lakhs", "Multi-agent system with orchestration, shared memory, human-in-loop. 16–24 weeks."],
];

const FAQS = [
  ["What's the difference between an AI agent and a chatbot?", "A chatbot generates text responses — it receives a question, produces an answer, and stops. An AI agent takes actions: it can call APIs, query databases, read files, send emails, update CRM records, and execute multi-step workflows autonomously. A chatbot tells you the answer; an agent does the work. For example: Chatbot → 'Your order #12345 shipped yesterday via FedEx.' Agent → searches order database, retrieves tracking number, calls FedEx API for status, composes email with tracking link, sends email to customer, logs activity in CRM — all without human intervention. The LLM (GPT-4, Claude) is the same; what changes is the scaffolding of tools, memory, and control flow that lets it act instead of just respond. If your task involves reasoning followed by action (not just text generation), you need an agent, not a chatbot."],
  ["How do you ensure agents don't make costly mistakes or take wrong actions?", "Five safety layers: (1) Tool boundaries — agents can only invoke tools we've explicitly given them. If delete-database isn't in the tool list, the agent can't delete databases no matter what prompt it receives. (2) Approval gates — high-stakes actions (payments, deletions, external communications) require human confirmation before execution. Agent proposes, human approves. (3) Dry-run mode — test agent logic without actually executing actions. Logs what it would have done. (4) Rate limiting and cost caps — agents can't burn through API quotas or budgets without hard limits. (5) Automated evaluation — test suite validates agent outputs against expected results for hundreds of scenarios before production deployment. Failures caught in testing, not production. Agent mistakes are almost always tool design failures (agent given wrong tools or tools with unclear interfaces), not LLM failures. Fix the tools, fix the agent."],
  ["What tasks are good candidates for AI agents vs traditional automation?", "Traditional automation (Zapier, custom scripts) works when: workflows are deterministic (if X then Y, no variation), inputs are structured (API responses, database fields), and business logic is simple (thresholds, filters). AI agents shine when: inputs are unstructured (emails, PDFs, natural language), business logic requires judgment (classify severity, assess quality, decide next step), workflows have branching paths based on context. Classic agent use cases: support ticket triage (read email, classify issue, retrieve docs, draft response), lead research (read company website, assess fit, score priority), invoice processing (extract data from PDFs regardless of layout, validate against PO, flag discrepancies). If you can write explicit rules covering every scenario, use traditional automation (cheaper, faster, deterministic). If rules are too complex or inputs too varied, use agents."],
  ["How long does it take to build a production-ready AI agent?", "Simple single-task agents (research, data extraction, reporting): 8–12 weeks from kickoff to production. Week 1–2: task definition and POC. Week 3–6: tool integration and testing. Week 7–10: evaluation pipeline and deployment. Week 11–12: post-launch tuning. Complex multi-tool workflow agents: 12–20 weeks depending on number of integrations, approval workflows, and edge case handling. Multi-agent systems (multiple specialized agents collaborating): 16–24 weeks — significantly more complex due to inter-agent communication, shared memory, and orchestration logic. Timelines assume: clear task definition from the start, API access to required systems, and stakeholder availability for testing and feedback. Delays come from: vague requirements ('make it intelligent'), missing API documentation, and scope creep mid-project."],
  ["Which AI models do you use for agents — GPT-4, Claude, or something else?", "We're model-agnostic and choose based on task requirements: OpenAI GPT-4o for complex multi-step reasoning, function calling, and tasks requiring broad knowledge. GPT-4o-mini for simple classification, data extraction, routine operations (80% cheaper). Anthropic Claude 3.5 Opus for nuanced judgment, safety-critical tasks, long-context workflows (200K tokens). Claude 3.5 Sonnet for cost-effective general-purpose agents. Claude 3 Haiku for high-volume tasks where cost matters (85% cheaper than Opus). Open-source models (Llama 3.1, Mistral) for sensitive data that can't leave your infrastructure — deployed on your own cloud. For production agents handling thousands of requests daily, we often use tiered routing: simple tasks → Haiku/GPT-4o-mini, complex tasks → Opus/GPT-4o. Right model selection cuts costs 50–80% without sacrificing quality."],
  ["Can agents integrate with our existing tools (CRM, ERP, databases)?", "Yes — that's the whole point. Agents connect to: CRMs (Salesforce, HubSpot, Zoho, Pipedrive), ERPs (SAP, Oracle, Tally, Odoo), Helpdesk (Zendesk, Freshdesk, Intercom), Databases (PostgreSQL, MySQL, MongoDB, BigQuery), Communication (Slack, Email, WhatsApp, Teams), Payment (Stripe, Razorpay), and Logistics (Shiprocket, Delhivery). Integration methods: REST APIs (preferred — reliable, well-documented), Database connections (direct SQL queries when API doesn't exist), Web scraping (last resort for systems without APIs), and Webhooks (for real-time triggers). We assess integration complexity during discovery phase. Modern SaaS tools with good APIs integrate easily (1–2 weeks). Legacy systems without APIs require workarounds (database-level integration or UI automation) and take longer (4–8 weeks)."],
  ["How do you handle DPDP Act 2023 compliance for AI agents processing personal data?", "Under India's DPDP Act 2023, AI agents processing personal data must implement: (1) Consent management — users must consent to data processing; agents can't act on personal data without documented consent. (2) PII redaction — personal data stripped or pseudonymized before sending to LLM APIs (OpenAI, Anthropic) unless contracts explicitly permit. Azure OpenAI in Indian regions preferred for sensitive data. (3) Audit logging — all agent actions logged with timestamps, inputs, outputs, data accessed. Retained per compliance requirements (typically 90 days minimum). (4) Data subject rights — agents must support user requests to access, correct, or delete their data. Cascading deletes across all systems. (5) Breach detection and notification — monitoring for unauthorized access, data exfiltration, prompt injection attacks. DPDP compliance isn't optional for agents handling Indian users' data — it's a legal requirement with penalties for violations. We build it in from architecture phase, not retrofit after launch."],
  ["What's the difference between agents built with LangChain vs custom code?", "LangChain (and LlamaIndex, AutoGen) provides pre-built abstractions: agent execution loops, tool integrations, memory management, prompt templates. Pros: faster to prototype, good for MVPs, large ecosystem of integrations. Cons: abstraction layers add latency and cost, less control over execution logic, harder to debug when things fail inside the framework. Custom code (Python + direct LLM API calls): full control over execution flow, precise error handling, optimized caching, tailored cost management. Pros: production-grade performance, easier debugging, better cost efficiency. Cons: more development time, you build everything from scratch. Our approach: POC with LangChain to validate feasibility quickly, production build in custom code when performance and cost matter. For low-volume internal tools, LangChain is fine. For high-volume production agents (thousands of executions daily), custom code pays for itself in reduced LLM costs and operational reliability."],
  ["Do agents get smarter over time, or do they stay static after deployment?", "Depends on design. Static agents: prompt and tool logic frozen at deployment. Performance doesn't improve unless we manually update prompts/tools based on failure analysis. Most agents start static because it's safer — predictable behavior, no drift. Adaptive agents: fine-tune on real usage data, update prompts based on success/failure patterns, expand tool capabilities as new integrations become available. Requires evaluation infrastructure to validate that changes improve performance (not degrade). True 'learning' agents (reinforcement learning, self-improvement) are research-stage, not production-ready. In practice: we deploy static agents, monitor failures for 30–60 days, manually improve prompts/tools based on learnings, redeploy updated version. Iterative improvement, not autonomous self-improvement. Future: fine-tuning on successful executions to improve domain-specific performance, but that requires significant usage data (1,000+ examples minimum) and evaluation to validate improvement."],
  ["What ongoing costs should we expect after agent deployment?", "Three cost buckets: (1) LLM API usage — cost per agent execution depends on model (GPT-4o: ~$0.01–0.10 per task, Claude Opus: ~$0.02–0.15, Haiku/GPT-4o-mini: ~$0.001–0.01). Scales with volume. Track cost-per-task from day one. (2) Infrastructure — hosting (AWS/GCP/Azure), databases, monitoring tools. Typically ₹10,000–₹50,000/month for production agents. (3) Maintenance — prompt updates, tool fixes, new integrations, evaluation pipeline updates. Either monthly retainer (₹50,000–₹2,00,000/month depending on complexity) or time-and-materials. Ongoing LLM costs are variable and depend on execution volume. A support agent handling 1,000 tickets/month at ₹2/ticket = ₹2,000/month LLM costs. Research agent running 100 reports/day at ₹10/report = ₹30,000/month. We model costs at scale during design phase so there are no surprises after launch. Budget rule of thumb: LLM costs typically 10–30% of total cost of ownership; rest is development, infrastructure, and maintenance."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.crenosoft.in/services/ai-agent-development/#service",
  name: "AI Agent Development Services",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/ai-agent-development",
  description: metadata.description as string,
  serviceType: "AI Agent Development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "AI Agent Development", item: "https://www.crenosoft.in/services/ai-agent-development" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .cp-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background: "#f5f5f7", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/services" style={{ display: "inline-block", fontSize: 13, color: "#86868b", textDecoration: "none", marginBottom: 28 }}>
            ← All Services
          </Link>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🤖</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 20 }}>
            AI Agent Development Services
          </h1>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Build autonomous AI agents that reason, plan, and execute multi-step business tasks without human intervention. Research agents, support triage, workflow automation, lead qualification. Production-ready, DPDP-compliant.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3d3d3d", color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Build Your AI Agent →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.2 }}>
            From Chatbots That Answer to Agents That Act
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Chatbots generate text. AI agents take actions. An agent connected to your CRM can research a lead, score it against your ICP, enrich the record with LinkedIn data and news mentions, and trigger a personalized outreach sequence — without a human touching any step. The same workflow in a chatbot requires a person to copy-paste text, switch tabs, and execute each action manually.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Agents operate in a loop: perceive the environment (read email, check database), reason about what needs to happen (classify ticket, assess severity), take action (call API, update record, send message), observe the result, and continue until the task is done. This makes agents fundamentally different from every AI tool that came before them.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            According to{" "}
            <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              McKinsey's 2024 State of AI Report
            </a>
            , organizations deploying AI agents for internal workflows report 30–50% time savings on tasks involving research, data extraction, and multi-system coordination. The ROI is clearest in high-frequency, multi-step tasks where judgment is required but the workflow is repeatable.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78 }}>
            Crenosoft builds production-grade AI agents for Indian businesses across fintech (fraud detection, loan processing), healthcare (patient triage, claims processing), logistics (route optimization, demand forecasting), and B2B SaaS (lead qualification, support automation). We specialize in agents that integrate with existing systems — Salesforce, Zendesk, PostgreSQL, Slack — and operate reliably at scale. This is{" "}
            <Link href="/services/ai-software-development" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              AI software development
            </Link>{" "}
            focused on autonomous task execution, not just text generation. Read our guide:{" "}
            <Link href="/blog/ai-agent-basics" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              What Are AI Agents? A Plain-Language Guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Agent Types
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>What We Build</h2>
          </div>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {CAPABILITIES.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Our Approach
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>How We Build Reliable Production Agents</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
            {APPROACH.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#f5f5f7", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section style={{ background: "#f5f5f7", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Technology Stack
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              Frameworks We Use
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>We're framework-agnostic and choose based on task requirements, not vendor preference.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FRAMEWORKS.map(([name, desc]) => (
              <div key={name} style={{ background: "#fff", borderRadius: 14, padding: "20px 24px", border: "1px solid #e5e5ea" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{name}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Development Process
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>From Concept to Production Agent</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PROCESS.map(([step, title, desc]) => (
              <div key={step} style={{ display: "flex", gap: 24, background: "#f5f5f7", borderRadius: 16, padding: "28px 24px", alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#e5e5ea", flexShrink: 0, lineHeight: 1, width: 40, textAlign: "center" }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#f5f5f7", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Pricing
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              AI Agent Development Costs
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>Indicative ranges for common agent types. Final quote after task analysis phase. Excludes 18% GST and ongoing LLM API costs.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e5e5ea", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
            {PRICING.map(([type, price, details]) => (
              <div key={type} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", padding: "18px 20px", borderBottom: "1px solid #e5e5ea", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 600 }}>{type}</span>
                <span style={{ fontSize: 14, color: "#3d3d3d", fontWeight: 700 }}>{price}</span>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{details}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", textAlign: "center", marginBottom: 48 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQS.map(([q, a]) => (
              <div key={q} style={{ padding: "24px 0", borderBottom: "1px solid #e5e5ea" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section style={{ background: "#f5f5f7", padding: "56px 24px", borderTop: "1px solid #e5e5ea" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#86868b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>
            Related Reading
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["What Are AI Agents? A Plain-Language Guide for Business Leaders", "/blog/ai-agent-basics"],
              ["AI Automation in India: Why 2025 Is the Year to Act", "/blog/ai-automation-india-2025"],
              ["LLM Integration Guide: Building AI Into Business Software", "/blog/llm-integration-guide"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", border: "1px solid #e5e5ea", fontSize: 14, fontWeight: 500, color: "#1d1d1f", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {label}
                <span style={{ color: "#86868b", fontSize: 16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background: "#fff", padding: "40px 24px", textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <p style={{ fontSize: 13, color: "#86868b", marginBottom: 14 }}>Related services</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["AI Software Development", "/services/ai-software-development"],
            ["AI Automation", "/services/ai-automation"],
            ["Custom Software Development", "/services/custom-software-development"],
          ].map(([n, h]) => (
            <Link key={h} href={h} style={{ border: "1px solid #d2d2d7", color: "#1d1d1f", padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: "none", background: "#f5f5f7" }}>
              {n} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#3d3d3d", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
          Ready to build your AI agent?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Tell us the task you want to automate. We'll assess feasibility, design the tool architecture, and provide a fixed-price proposal — no obligation.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#3d3d3d", padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Start Your Agent Project →
        </Link>
      </section>
    </>
  );
}
