import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legacy Application Modernization Services — Migrate to Cloud | Crenosoft",
  description: "Legacy application modernization services in India. Migrate legacy systems to cloud, refactor monoliths to microservices, replace outdated tech stacks. DPDP-compliant migrations. Based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/legacy-modernization" },
};

const SIGNS = [
  ["🐌", "Performance Degradation", "Your system slows down with each new feature. What took milliseconds five years ago now takes seconds. Database queries that served 1,000 users struggle with 10,000. Adding capacity (more servers, bigger databases) provides diminishing returns. The architecture wasn't designed for today's scale."],
  ["💸", "Rising Maintenance Costs", "More engineering time goes to keeping the lights on than shipping new features. Bug fixes take weeks because nobody understands the original codebase. Vendor support ended years ago. You're paying premium rates for contractors who know COBOL, Oracle Forms, or Visual Basic 6 — a shrinking talent pool charging more each year."],
  ["🔒", "Security Vulnerabilities", "Libraries with known CVEs that can't be patched without breaking the system. Authentication mechanisms that predate modern standards (no MFA, passwords stored in MD5). Compliance audits flagging the same issues repeatedly. PCI DSS, SOC 2, DPDP Act requirements impossible to meet without architectural changes."],
  ["🚫", "Integration Impossibilities", "New SaaS tools (Stripe, Twilio, Slack, Salesforce) can't integrate because your system has no API layer. Every integration requires custom one-off development and screen-scraping workarounds. Mobile app requirements can't be met because the backend assumes browser-based access. Modern authentication (OAuth, SSO) isn't supported."],
  ["📉", "Talent Flight", "New hires refuse to work on the legacy codebase — they want React, Node.js, Python, not .NET Framework 2.0 or PHP 5. Experienced engineers leave because maintaining legacy systems doesn't advance their careers. You're locked into a vendor whose developers retired or moved on. Knowledge exists only in the heads of 2-3 people."],
  ["⚠️", "Deployment Fear", "Production deployments happen quarterly instead of weekly because each one carries catastrophic risk. Rollback procedures are manual, untested, and take hours. Hotfixes require weekend emergency deployments. Development and production environments diverged years ago. Nobody is confident the system will come back up cleanly."],
];

const APPROACHES = [
  ["🔄", "Rehost (Lift and Shift)", "Move the application to cloud infrastructure (AWS, Azure, GCP) with minimal code changes. Fastest and cheapest but preserves all existing architectural problems. Suitable when: system works fine but on-premise costs are high, compliance requires cloud residency, or disaster recovery needs improvement. Timeline: 4–8 weeks. Cost: ₹3–8 lakhs.", "Low risk, fast, but you're still running legacy code in the cloud. Operational improvements (backups, scaling) but same technical debt."],
  ["🛠️", "Replatform", "Targeted optimizations while preserving core architecture. Migrate database to managed RDS/Cloud SQL, containerize with Docker, add caching layer (Redis), implement CI/CD. More benefit than rehost without full rewrite. Timeline: 8–16 weeks. Cost: ₹8–20 lakhs.", "Moderate risk, moderate effort. Gets you 70% of the benefits of full modernization at 30% of the cost and risk."],
  ["♻️", "Refactor (Rearchitect)", "Rewrite the application using modern architecture patterns: monolith → microservices, REST APIs for integrations, event-driven with message queues, cloud-native deployment (Kubernetes, serverless). Most expensive but eliminates technical debt. Timeline: 6–12 months. Cost: ₹25–80 lakhs.", "High cost, high benefit. Choose this when the business is being held back by technology limitations and ROI justifies the investment."],
  ["🔀", "Replace (Repurchase)", "Replace custom-built legacy system with commercial SaaS that does the same job. ERP → NetSuite, custom CRM → Salesforce, homegrown HR system → Zoho People. Often the best ROI if a mature SaaS exists. Timeline: 3–6 months (implementation + migration). Cost: ₹5–15 lakhs one-time + ongoing SaaS fees.", "Fastest path to modern capabilities if you're willing to adapt business processes to the SaaS product instead of custom-fitting software to processes."],
  ["⏸️", "Retain", "Keep the legacy system running but freeze new feature development. Invest in documentation, automated backups, monitoring, and disaster recovery. Extract data via scheduled exports for analytics in modern BI tools. Buys time while planning longer-term replacement.", "Valid strategy for systems that work but aren't strategic. Extract value elsewhere while deferring expensive migration."],
  ["🗑️", "Retire", "Shut down and decommission the system. Migrate critical data to replacement systems or cold storage. More common than founders think — many legacy systems exist because nobody had authority to kill them. Eliminates maintenance costs and technical debt completely.", "Best ROI is sometimes $0 spent on systems that no longer serve the business. Requires stakeholder courage to admit sunk cost."],
];

const PROCESS = [
  ["01", "Legacy System Assessment", "Discovery phase: document current architecture, technology stack, integrations, data volumes, user workflows, compliance requirements, and pain points. Interview key stakeholders, developers, and end users. Map dependencies — what breaks if this system goes down? Output: assessment report with current-state architecture diagrams, risk analysis, and recommended modernization approach (rehost/replatform/refactor/replace) with cost-benefit analysis for each."],
  ["02", "Modernization Strategy & Roadmap", "Define target-state architecture, technology stack, migration approach, and phased roadmap. For large systems: identify which modules to modernize first (usually highest-value or highest-pain), which to retire, and which to keep as-is. Risk mitigation plan for data migration, integration cutover, and user training. Stakeholder signoff required before implementation begins."],
  ["03", "Pilot Migration", "Modernize one non-critical module or workflow first to validate the approach and uncover hidden issues before touching production systems. Parallel run: new system operates alongside legacy for 2–4 weeks, outputs compared to validate correctness. Lessons learned incorporated into full migration plan. This de-risks the project significantly."],
  ["04", "Phased Rollout", "Migrate modules or user groups in waves, not all-at-once. Each wave: development → testing → staging validation → production deployment → monitoring period before next wave. Rollback plan tested for each wave. Data migration performed during low-traffic windows with database replication to minimize downtime. Cutover checklists document every step."],
  ["05", "Data Migration & Validation", "The hardest and most underestimated part of modernization. Legacy data is always messier than expected: inconsistent formats, orphaned records, encoding issues, business logic hidden in data. ETL pipelines built to clean, transform, and validate data. Automated reconciliation reports comparing record counts, checksums, business metrics before and after migration. Data issues resolved before cutover, not after."],
  ["06", "Decommissioning & Knowledge Transfer", "Once new system is stable in production: legacy system placed in read-only mode for 90 days (regulatory data retention), then decommissioned. Cold storage archives created for compliance. Team training on new system: admin workflows, troubleshooting guides, deployment procedures. Runbooks documented. Support handover to internal team or ongoing managed services. Final retrospective: what went well, what didn't, lessons for next project."],
];

const FAQS = [
  ["How do we know if our system needs modernization or if we should rebuild from scratch?", "Modernize when: (1) Core business logic is sound but technology is outdated. (2) Budget and timeline favor incremental improvement over big-bang rewrite. (3) Users are familiar with existing workflows and change management is a concern. (4) System has years of accumulated domain knowledge worth preserving. Rebuild when: (1) Codebase is unmaintainable — nobody understands it, documentation doesn't exist. (2) Architecture fundamentally can't scale (single-server monolith with no separation of concerns). (3) Technology stack is so outdated that migration tools don't exist (COBOL mainframes, FoxPro, Access databases). (4) Business model has changed so much that preserving old workflows holds the company back. In our experience, 70% of legacy systems benefit from modernization, 20% should be replaced with SaaS, and 10% require full rebuilds. We provide honest assessments based on your specific situation — not a one-size-all recommendation."],
  ["What's a realistic timeline for legacy modernization projects?", "Rehost (lift and shift): 6–12 weeks for mid-sized applications. Just moving infrastructure to cloud with minimal changes. Replatform (targeted optimizations): 3–6 months. Database migration, containerization, CI/CD, caching — moderate improvements without full rewrite. Refactor (rearchitect): 9–18 months for enterprise applications. Breaking monoliths into microservices, building APIs, redesigning data models — significant engineering effort. Replace with SaaS: 3–9 months depending on data migration complexity and business process changes required. Pilot + full rollout model: Add 25% to these timelines to account for pilot validation phase. Timelines depend heavily on: data volume and quality, integration complexity, compliance requirements, and your team's availability for UAT and training. We provide detailed Gantt charts after the assessment phase."],
  ["How do you minimize risk during migrations — what if something breaks?", "Six risk mitigation strategies: (1) Pilot migration first on non-critical module to validate approach before production systems. (2) Parallel runs where new and legacy systems operate side-by-side for 2–4 weeks, outputs compared before cutover. (3) Phased rollouts by module or user group, not big-bang. Each phase has defined rollback criteria. (4) Automated data validation — reconciliation reports comparing record counts, checksums, business metrics. Never trust migration without validation. (5) Rollback procedures tested before cutover, not discovered during crisis. Every production deployment has documented rollback plan executed during rehearsal. (6) Extended legacy system retention — old system kept in read-only mode for 60–90 days post-cutover for data comparison and emergency fallback. These strategies add 15–20% to project cost but reduce catastrophic failure risk by 80%+. Worth it for business-critical systems."],
  ["What happens to our data during modernization — is there data loss risk?", "Data migration is the highest-risk part of modernization. Mitigation strategies: (1) Never delete source data until new system is validated in production for 60–90 days. Legacy databases kept in read-only mode. (2) Automated reconciliation scripts comparing source and target databases: row counts, checksums, primary key coverage, referential integrity, business metric totals (revenue, user counts, transaction volumes). (3) Test migrations performed 2–3 times in staging environments before production cutover. Each test uncovers data quality issues (encoding problems, orphaned records, business logic in stored procedures). (4) Incremental migration where possible — sync initial bulk load, then incremental changes via CDC (change data capture) or transaction logs. (5) Data validation period before legacy system decommissioning. Users run reports in both systems, discrepancies investigated and resolved. In 15 years of migration projects, we've never had data loss in production because we validate obsessively in staging first. Data transformation logic is complex; assumptions about data quality are always wrong; testing is non-negotiable."],
  ["Can we modernize while still running the business — do we need downtime?", "Most modernizations happen with zero or minimal downtime. Strategies: (1) New system built and tested in parallel with legacy system still serving users. Cutover happens during planned maintenance window (typically weekend, low-traffic hours). Downtime: 2–6 hours. (2) Phased rollout by user group or geography. US users migrated first, then Europe, then Asia. Each group experiences brief cutover window but business never fully down. (3) Blue-green deployment for cloud-native architectures. New version (green) deployed alongside current version (blue), traffic gradually shifted, instant rollback if issues. Downtime: 0 seconds. (4) Database replication with synchronized cutover. Legacy and modern databases kept in sync via replication or CDC. Cutover involves DNS change and connection string update. Downtime: 5–30 minutes. Only scenarios requiring significant downtime: database schema changes incompatible with old application code, or data center physical relocations. Even then, typically 4–12 hours max, scheduled with stakeholder communication and rollback readiness."],
  ["How much does legacy modernization cost in India?", "Rehost (lift and shift): ₹3–12 lakhs depending on application size, infrastructure complexity, and data volume. Fastest and cheapest. Replatform (targeted improvements): ₹8–25 lakhs. Moderate code changes, database migration, containerization, CI/CD setup. Refactor (full rearchitecture): ₹25–1 crore+ for enterprise applications. Breaking monoliths into microservices, building API layers, redesigning databases. Most expensive but eliminates technical debt. Replace with SaaS: ₹5–20 lakhs implementation fees + ongoing SaaS subscription (₹50K–₹5L/month depending on platform and user count). These are typical ranges; actual cost depends on: application size (lines of code, database size), integration complexity, compliance requirements (DPDP, RBI, ABDM), team knowledge transfer needs, and post-migration support. We provide fixed-price quotes after assessment phase, not ballpark estimates based on 30-minute calls."],
  ["Do you support Indian government legacy systems and compliance requirements?", "Yes. We've modernized systems for PSUs, government departments, and regulated industries. Specific experience with: (1) MeitY guidelines for government cloud: data localization in Indian regions, empaneled cloud providers (NIC MeghRaj, AWS India, Azure India), security hardening per CERT-In standards. (2) DPDP Act 2023 compliance: personal data processing safeguards, consent management, data subject rights (access, erasure), breach notification procedures. (3) RBI regulations for fintech: KYC requirements, payment gateway security, audit logging, transaction monitoring. (4) ABDM integration for healthcare: patient data exchange standards, consent framework, PHR/EHR interoperability. (5) Legacy mainframe migrations (COBOL, DB2) to modern Java/Python stacks with equivalent business logic preserved. We produce compliance documentation, security architecture diagrams, and audit reports required for government procurement and regulatory approval."],
  ["Can you modernize systems built on outdated technology nobody uses anymore?", "Yes — that's exactly the problem modernization solves. We've migrated systems from: Visual Basic 6, FoxPro, Oracle Forms, PowerBuilder, ColdFusion, Classic ASP, Delphi, Lotus Notes, Progress 4GL, COBOL mainframes, Access databases, Perl CGI scripts, Flash/Flex frontends. Approach: (1) Reverse engineer business logic by reading code, interviewing users, and documenting workflows. Original developers often unavailable. (2) Extract data models from legacy databases, clean and normalize. (3) Reimplement business logic in modern stack (Python, Node.js, Java) with automated test coverage validating that outputs match legacy system. (4) Build modern frontend (React, Next.js) with familiar workflows to minimize user retraining. (5) Parallel validation period ensuring new system produces identical results to legacy before cutover. Challenge isn't technology — it's extracting implicit business rules buried in decades-old code. That's where experienced engineers who've done this before make the difference."],
  ["What post-migration support do you provide?", "Three support models: (1) Post-launch stabilization (included): 30 days of bug fixes, performance tuning, user training follow-ups, minor adjustments to workflows users find confusing. (2) Managed services retainer: Ongoing monthly support (₹1–5 lakhs/month depending on system complexity) for monitoring, maintenance, security patches, feature additions, and 24/7 incident response. Most clients choose this for first 6–12 months post-migration. (3) Transition to internal team: We train your developers on the modernized codebase, provide documentation (architecture diagrams, deployment runbooks, troubleshooting guides), and exit cleanly. Hybrid model also common: we handle infrastructure/DevOps, you handle feature development. All approaches include: system documentation (architecture, API docs, admin guides), operational runbooks (deployment procedures, backup/restore, incident response), recorded training sessions, and Slack/email support channel for questions during knowledge transfer period."],
  ["Should we modernize everything at once or in phases?", "Almost always phases. Big-bang modernization (replace entire system in one deployment) fails 40%+ of the time because: (1) Scope is too large to test comprehensively. Edge cases and hidden business logic emerge only in production. (2) User training overwhelms teams when everything changes simultaneously. (3) Data migration complexity compounds — you discover data issues too late to fix cleanly. (4) Rollback from failed big-bang deployment is catastrophic; rollback from failed phase is contained. Phased approach: Identify modules in priority order (highest value or highest pain first). Modernize module 1, validate with users for 2–4 weeks, then module 2. Each phase: design → develop → test → deploy → monitor → next phase. Users adapt incrementally. You build confidence with early wins. Budget risk is contained — if phase 1 fails, you haven't spent phase 2 budget yet. Only exception: very small systems (single module, <10,000 lines of code) where phasing adds more overhead than value."],
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
  "@id": "https://www.crenosoft.in/services/legacy-modernization/#service",
  name: "Legacy Application Modernization Services",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/legacy-modernization",
  description: metadata.description as string,
  serviceType: "Legacy Modernization",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "Legacy Modernization", item: "https://www.crenosoft.in/services/legacy-modernization" },
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
          <div style={{ fontSize: 56, marginBottom: 20 }}>🔄</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 20 }}>
            Legacy Application Modernization Services
          </h1>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Migrate legacy systems to modern cloud infrastructure without business disruption. Eliminate technical debt, reduce maintenance costs, enable mobile and API integrations. DPDP-compliant migrations for Indian businesses.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3d3d3d", color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Modernize Your Legacy System →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.2 }}>
            Your Legacy System Is Holding Back Growth
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Legacy systems don't die loudly. They slowly strangle businesses through rising maintenance costs, security vulnerabilities, talent flight, and integration impossibilities. The CRM built in 2008 that can't integrate with your new marketing automation SaaS. The ERP that requires weekend deployments and manual rollback procedures. The inventory system where only two people understand the codebase — and both are planning to retire.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            According to{" "}
            <a href="https://www.gartner.com/en/information-technology/insights/modernization" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              Gartner's 2024 IT Modernization Survey
            </a>
            , organizations spend 60–80% of their IT budgets maintaining legacy systems instead of building new capabilities. Indian enterprises are no exception — banks running core banking on decades-old mainframes, manufacturers using ERP systems from the early 2000s, logistics companies whose warehouse management can't talk to modern fleet tracking APIs.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Modernization solves this. Not by replacing everything overnight (big-bang rewrites fail 40% of the time), but through phased migration: assessment → pilot → rollout → decommissioning. Move to cloud infrastructure with auto-scaling and managed databases. Break monoliths into microservices with API layers. Replace obsolete tech stacks with modern frameworks that developers actually want to work on.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78 }}>
            Crenosoft has modernized legacy systems for enterprises across banking, manufacturing, logistics, and government. We've migrated Visual Basic 6 applications to React + Node.js, Oracle Forms to web-based SaaS, COBOL mainframes to Java microservices, and on-premise infrastructure to{" "}
            <Link href="/services/cloud-consulting" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              AWS/Azure cloud
            </Link>{" "}
            — all while keeping businesses operational. Read our guide:{" "}
            <Link href="/blog/cloud-migration-guide-indian-startups-2025" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              Cloud Migration for Indian Startups 2025 →
            </Link>
          </p>
        </div>
      </section>

      {/* Signs */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Warning Signs
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>Six Signs Your System Needs Modernization</h2>
          </div>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {SIGNS.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Modernization Approaches
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              The 6 Rs: Choosing the Right Strategy
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>Not every legacy system needs a full rewrite. We match the approach to your business goals, budget, and timeline.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {APPROACHES.map(([icon, title, desc, when]) => (
              <div key={title} style={{ background: "#f5f5f7", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e5ea" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ fontSize: 24 }}>{icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f" }}>{title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65, marginBottom: 8 }}>{desc}</p>
                <p style={{ fontSize: 13, color: "#3d3d3d", fontWeight: 500, fontStyle: "italic" }}>When to choose: {when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Our Process
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>Six-Phase Modernization Process</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PROCESS.map(([step, title, desc]) => (
              <div key={step} style={{ display: "flex", gap: 24, background: "#fff", borderRadius: 16, padding: "28px 24px", alignItems: "flex-start" }}>
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

      {/* Related + CTA */}
      <section style={{ background: "#f5f5f7", padding: "40px 24px", textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <p style={{ fontSize: 13, color: "#86868b", marginBottom: 14 }}>Related services</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["Cloud Consulting", "/services/cloud-consulting"],
            ["Cloud Migration", "/services/cloud-migration"],
            ["Custom Software Development", "/services/custom-software-development"],
            ["DevOps Services", "/services/devops-services"],
          ].map(([n, h]) => (
            <Link key={h} href={h} style={{ border: "1px solid #d2d2d7", color: "#1d1d1f", padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: "none", background: "#fff" }}>
              {n} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#3d3d3d", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
          Let's assess your legacy system
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Free assessment: we'll review your current system, identify modernization opportunities, and provide a phased roadmap with realistic cost and timeline estimates.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#3d3d3d", padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Get Free Assessment →
        </Link>
      </section>
    </>
  );
}
