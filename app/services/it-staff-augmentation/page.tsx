import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Staff Augmentation Services India — Hire Skilled Developers | Crenosoft",
  description: "IT staff augmentation services in India. Hire pre-vetted developers for AI, web, mobile, cloud, and DevOps projects. Flexible contracts, integrated teams, faster than traditional hiring. Based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/it-staff-augmentation" },
};

const ROLES = [
  ["💻", "AI/ML Engineers", "Full-stack AI developers with production LLM experience — RAG systems, AI agents, prompt engineering, model fine-tuning. Python, LangChain, PyTorch, TensorFlow. Minimum 3 years AI product development."],
  ["⚛️", "Full-Stack Developers", "React, Next.js, Node.js, TypeScript engineers who ship end-to-end features. Experience with serverless, database design, API development, and cloud deployment. Comfortable working autonomously."],
  ["📱", "Mobile Developers", "React Native and Flutter engineers who have shipped consumer and enterprise apps to the App Store and Google Play. Native iOS (Swift) and Android (Kotlin) specialists available for platform-specific work."],
  ["☁️", "Cloud/DevOps Engineers", "AWS, Azure, GCP certified engineers with Infrastructure as Code (Terraform, CloudFormation) and CI/CD (GitHub Actions, GitLab CI) expertise. Kubernetes, Docker, monitoring, and cost optimization experience."],
  ["🎨", "UI/UX Designers", "Product designers fluent in Figma, with a portfolio of shipped consumer and B2B products. User research, wireframing, prototyping, design systems, and accessibility. Comfortable working with engineering teams daily."],
  ["📊", "Data Engineers", "ETL pipeline developers with Python, SQL, and data warehouse experience (BigQuery, Redshift, Snowflake). Build scalable data infrastructure for analytics and ML. Experience with Airflow, dbt, and cloud data platforms."],
  ["🧪", "QA Engineers", "Manual and automated testing engineers. Selenium, Cypress, Playwright for end-to-end tests. API testing with Postman/Newman. Performance testing, load testing, security testing. Integrate into CI/CD pipelines."],
  ["⚡", "Backend Engineers", "Python, Node.js, Go, Java backend engineers. Microservices, databases (PostgreSQL, MySQL, MongoDB), message queues (RabbitMQ, Kafka), caching (Redis), and REST/GraphQL APIs."],
];

const BENEFITS = [
  ["⚡", "Faster Than Traditional Hiring", "Traditional tech hiring in India takes 45–90 days on average. We provide pre-vetted developers in 7–14 days — shortlisted based on your tech stack, industry, and work style. No 3-month sourcing cycle."],
  ["💰", "Lower Risk Than Full-Time Hires", "Not ready to commit to a permanent hire? Staff augmentation lets you scale up for a project and scale down when it's complete — without severance obligations or unused bench time. You pay for productive time, not idle capacity."],
  ["🔧", "Embedded in Your Team", "Our engineers join your Slack, attend your standups, use your Git workflow, and report to your engineering lead. They work your timezone and follow your processes. This is not offshore outsourcing where you brief and hope — this is an extension of your existing team."],
  ["📈", "Scale Without HR Overhead", "Need two backend engineers for 6 months? Done. Need to double your mobile team for a product launch? We can ramp in 2 weeks. No recruitment process, no onboarding infrastructure, no payroll complexity. You focus on building; we handle staffing logistics."],
  ["🎯", "Fill Skill Gaps Quickly", "Can't find an ML engineer locally? Need a Flutter specialist for 3 months? We fill niche skill requirements where local hiring is too slow or expensive. Useful for exploring new tech stacks before committing to permanent headcount."],
  ["✅", "Pre-Vetted for Indian Compliance", "All engineers are full-time Crenosoft employees with valid employment contracts, PAN, GST, and TDS compliance. Invoicing is clean, payments are corporate (not freelancer arrangements), and everything meets audit requirements for funded startups."],
];

const PROCESS = [
  ["01", "Requirements & Shortlisting", "We discuss your tech stack, team structure, project scope, and culture fit requirements. Within 3 business days, we share 3–5 shortlisted profiles with resumes, GitHub links, and portfolio work — pre-screened for technical capability and communication skills."],
  ["02", "Technical Interviews", "You interview our candidates directly — we don't hide them behind account managers. Ask any technical questions you would ask a full-time hire. We can coordinate pair programming sessions or take-home assignments if that's part of your process."],
  ["03", "Contract & Onboarding", "Once you select a candidate, we finalize the contract (flexible: monthly, quarterly, project-based). The engineer joins your Slack/Teams, gets added to your repositories, and starts within 1 week. We provide a 2-week trial period with a straightforward exit if the fit isn't right."],
  ["04", "Ongoing Management", "The engineer reports to your team lead for day-to-day work. We handle payroll, benefits, HR, and compliance. You provide technical direction and feedback. We check in biweekly to ensure the engagement is working smoothly, resolve blockers, and handle contract renewals."],
];

const PRICING: [string, string, string][] = [
  ["Junior (1–3 years)", "₹60,000–₹1,00,000/month", "Good for well-defined tasks under supervision"],
  ["Mid-Level (3–6 years)", "₹1,00,000–₹1,80,000/month", "Independent execution, mentors juniors"],
  ["Senior (6–10 years)", "₹1,80,000–₹3,00,000/month", "Architecture, technical leadership, complex projects"],
  ["Staff/Principal (10+ years)", "₹3,00,000–₹5,00,000/month", "Strategic technical decisions, domain expertise"],
];

const FAQS = [
  ["What is IT staff augmentation?", "Staff augmentation is when you hire skilled developers or engineers to work as an extension of your existing team — for a defined period, on your projects, under your management. Unlike outsourcing (where you hand off a project to an external team), augmented staff work as part of your team, use your tools, follow your processes, and report to your engineering lead. It's faster and more flexible than full-time hiring, without the commitment of permanent headcount."],
  ["How is this different from hiring freelancers?", "Freelancers work on multiple clients simultaneously, set their own hours, and often disappear mid-project. Staff augmentation provides dedicated engineers who work full-time on your project, your hours, integrated into your workflow. All engineers are full-time Crenosoft employees with employment contracts, benefits, and accountability — not independent contractors juggling side work. Invoicing is corporate and GST-compliant, critical for funded startups under audit."],
  ["How quickly can we get someone started?", "We can shortlist 3–5 candidates within 3 business days. If you interview and select immediately, the engineer can start within 7–10 days. For niche skills (e.g., Rust, Solidity, embedded systems), allow 2–3 weeks for sourcing. Traditional tech hiring in India averages 60–90 days; staff augmentation collapses that to under 2 weeks."],
  ["What if the engineer doesn't work out?", "All engagements include a 2-week trial period. If the fit isn't right — technically, culturally, or otherwise — you can exit with no penalty and no notice period. After the trial, we require 2 weeks' notice for termination. In practice, most engagements extend beyond the initial contract because the engineers integrate well and deliver results."],
  ["Can we convert an augmented engineer to a full-time hire?", "Yes. If you want to hire one of our engineers permanently after 6 months, we facilitate the transition at no additional fee. We designed this model to help startups derisk hiring decisions — work with someone for 6 months on real projects before committing to a permanent role."],
  ["Do the engineers work from our office or remotely?", "Remote by default. Our engineers work from their location (typically Lucknow, Delhi, Bengaluru, Pune). If you need on-site presence in Mumbai, Bengaluru, Delhi NCR, or Hyderabad, we can arrange it at an additional cost to cover relocation and accommodation. Hybrid arrangements (2–3 days on-site per week) are also possible."],
  ["What timezone do the engineers work?", "Indian Standard Time (IST) by default. If you need overlap with US or Europe timezones, we can arrange flexible hours — for example, 12 PM–9 PM IST for US East Coast overlap, or 11 AM–8 PM IST for Europe overlap. Full night-shift work (US West Coast hours) is available but costs 30–40% more due to lifestyle impact and limited candidate availability."],
  ["How do you vet engineers before presenting them?", "Every engineer goes through: (1) Technical screening — coding test, system design (for senior roles), framework-specific questions. (2) Portfolio/GitHub review — we check real work, not just resumes. (3) Communication assessment — all engineers are fluent in English and comfortable on video calls. (4) Reference checks — we verify previous employment and project outcomes. You only see candidates who pass all four filters."],
  ["What contract terms do you offer?", "Monthly rolling contracts (1-month notice), quarterly contracts (more cost-effective, 15% discount), and project-based contracts (fixed scope and duration). Minimum engagement is 1 month. All contracts are Master Service Agreements (MSA) with Statements of Work (SOW) for each engineer — audit-compliant for funded startups. Payment terms: NET 15 after invoice, with GST."],
  ["Do you provide developers for equity or revenue share?", "No. We are not a development partner; we provide skilled labour on a time-and-materials basis. If you're a very early-stage startup unable to afford market rates, we recommend building an MVP yourself or finding a technical co-founder. Staff augmentation works best for funded startups, growth-stage companies, and enterprises with committed budgets."],
];

const COMPARISON: [string, string, string, string][] = [
  ["Speed to start", "7–14 days", "60–90 days", "1–3 days (but unreliable)"],
  ["Commitment", "Monthly or project-based", "Permanent (severance obligations)", "None (may disappear)"],
  ["Integration", "Embedded in your team", "Embedded in your team", "External, juggling multiple clients"],
  ["Management overhead", "Low (we handle HR, payroll)", "High (full onboarding, benefits)", "High (chasing, coordinating)"],
  ["Compliance & invoicing", "Corporate invoicing, GST", "Full employment contract", "Individual invoices (audit risk)"],
  ["Trial period / flexibility", "2-week trial, easy exit", "3–6 month probation, severance", "No trial, high churn risk"],
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
  "@id": "https://www.crenosoft.in/services/it-staff-augmentation/#service",
  name: "IT Staff Augmentation Services",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/it-staff-augmentation",
  description: metadata.description as string,
  serviceType: "IT Staff Augmentation",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "60000-500000",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "60000-500000",
      priceCurrency: "INR",
      unitText: "per month",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "IT Staff Augmentation", item: "https://www.crenosoft.in/services/it-staff-augmentation" },
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
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}.comp-table{font-size:12px!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}.comp-table{font-size:11px!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background: "#f5f5f7", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/services" style={{ display: "inline-block", fontSize: 13, color: "#86868b", textDecoration: "none", marginBottom: 28 }}>
            ← All Services
          </Link>
          <div style={{ fontSize: 56, marginBottom: 20 }}>👥</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 20 }}>
            IT Staff Augmentation Services
          </h1>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Hire pre-vetted developers to extend your team — without the 90-day hiring cycle. AI engineers, full-stack developers, mobile specialists, cloud architects. Integrated into your workflow, working your hours, delivering from day one.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3d3d3d", color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Hire Developers Now →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.2 }}>
            The Fastest Way to Scale Your Engineering Team
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Your product roadmap is ambitious. Your hiring pipeline is not. The average tech hire in India takes 60–90 days from job post to start date — if you find the right candidate at all. For niche skills like AI/ML engineering, Flutter development, or cloud architecture, that timeline stretches to 4–6 months.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Staff augmentation bypasses that entirely. We provide pre-vetted, experienced developers who integrate into your team in 7–14 days. They join your Slack, use your GitHub workflow, attend your standups, and report to your engineering lead. This is not outsourcing where you brief a remote team and hope for the best — these engineers work as an extension of your existing team.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            According to{" "}
            <a href="https://www.gartner.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              Gartner's 2024 IT Staffing Survey
            </a>
            , 68% of Indian startups and mid-market companies now use staff augmentation to fill skill gaps faster than traditional hiring. The model works because it derisks both sides: you get productive engineering capacity without permanent headcount commitment, and engineers get stable employment with variety across projects.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78 }}>
            Crenosoft has provided staff augmentation for funded startups, growth-stage SaaS companies, and enterprises across fintech, healthtech, logistics, and e-commerce. Our engineers have shipped{" "}
            <Link href="/services/ai-software-development" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              AI-powered features
            </Link>
            ,{" "}
            <Link href="/services/mobile-app-development" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              mobile apps
            </Link>
            ,{" "}
            <Link href="/services/cloud-solutions" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              cloud infrastructure
            </Link>
            , and full-stack web applications — integrated into client teams with minimal onboarding friction.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Roles We Fill
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>Engineers Ready to Join Your Team</h2>
          </div>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {ROLES.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Why Staff Augmentation
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>Six Reasons Companies Choose This Model</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
            {BENEFITS.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#f5f5f7", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ background: "#f5f5f7", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Comparison
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              Staff Augmentation vs Full-Time Hiring vs Freelancers
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>How the three models compare on the factors that matter for fast-moving teams.</p>
          </div>
          <div className="comp-table" style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e5ea", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", background: "#f5f5f7", padding: "14px 20px", borderBottom: "1px solid #e5e5ea" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em" }}></span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Staff Aug.</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Full-Time</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Freelancers</span>
            </div>
            {COMPARISON.map(([metric, aug, full, free]) => (
              <div key={metric} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", padding: "16px 20px", borderBottom: "1px solid #e5e5ea", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 600 }}>{metric}</span>
                <span style={{ fontSize: 13, color: "#3d3d3d" }}>{aug}</span>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{full}</span>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{free}</span>
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
              How It Works
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>From Requirements to Onboarded in 7–14 Days</h2>
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
              Staff Augmentation Rates in India
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>
              Monthly rates by experience level. All-inclusive: salary, benefits, HR, payroll, compliance. Prices exclude 18% GST. 15% discount on quarterly contracts.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e5e5ea", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
            {PRICING.map(([level, rate, note]) => (
              <div key={level} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", padding: "18px 20px", borderBottom: "1px solid #e5e5ea", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 600 }}>{level}</span>
                <span style={{ fontSize: 14, color: "#3d3d3d", fontWeight: 700 }}>{rate}</span>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{note}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#86868b", textAlign: "center", marginTop: 20 }}>
            Final rates depend on specific skills (AI/ML, blockchain, Rust), timezone requirements, and contract length. Request a detailed quote via our{" "}
            <Link href="/contact" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              contact page
            </Link>
            .
          </p>
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

      {/* Use Cases */}
      <section style={{ background: "#f5f5f7", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 32, textAlign: "center" }}>
            When Staff Augmentation Makes Sense
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              ["🚀", "Product Launch Sprints", "Need to double your mobile team for 3 months to hit a launch deadline? Staff augmentation gives you the capacity surge without permanent headcount."],
              ["🔬", "Exploring New Tech Stacks", "Want to test Flutter or add AI features but don't want to commit to hiring permanent specialists? Bring in an expert for 3–6 months to evaluate and train your team."],
              ["🏗️", "Filling Niche Skill Gaps", "Can't find a cloud architect or ML engineer locally? We source specialists who are otherwise hard to hire in India's competitive talent market."],
              ["⚖️", "Seasonal or Project-Based Work", "E-commerce businesses scaling for festival season, SaaS companies building one-off enterprise features — staff augmentation matches your variable capacity needs."],
              ["📉", "Avoiding Bench Time", "Funded startups with volatile roadmaps can scale teams up and down without paying for idle developers during planning phases or fundraising gaps."],
              ["🎓", "Training Your Team", "Bring in a senior engineer to mentor your junior developers, establish best practices, and build internal capabilities before they roll off."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "#fff", padding: "20px 24px", borderRadius: 14, border: "1px solid #e5e5ea" }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background: "#fff", padding: "40px 24px", textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <p style={{ fontSize: 13, color: "#86868b", marginBottom: 14 }}>Related services</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["Custom Software Development", "/services/custom-software-development"],
            ["AI Software Development", "/services/ai-software-development"],
            ["MVP Development", "/services/mvp-development"],
            ["Cloud Solutions", "/services/cloud-solutions"],
          ].map(([n, h]) => (
            <Link key={h} href={h} style={{ border: "1px solid #d2d2d7", color: "#1d1d1f", padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
              {n} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#3d3d3d", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
          Need developers this month?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Tell us your tech stack, team size, and project scope. We'll shortlist 3–5 pre-vetted candidates within 3 business days — ready to interview immediately.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#3d3d3d", padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Get Started →
        </Link>
      </section>
    </>
  );
}
