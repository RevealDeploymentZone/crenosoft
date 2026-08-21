import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Consulting Services India — AWS, Azure, GCP Experts | Crenosoft",
  description: "Cloud consulting services in India. AWS, Azure, GCP architecture, migration, DevOps, cost optimization. DPDP-compliant infrastructure in Mumbai region. Certified cloud architects based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/cloud-consulting" },
};

const CAPS = [
  ["🏗️", "Cloud Architecture Design", "Scalable, resilient cloud architectures on AWS, GCP, or Azure designed for your actual workload patterns. Multi-AZ deployments with documented disaster recovery procedures (RTO/RPO defined), load balancing, auto-scaling, and infrastructure that survives traffic spikes without manual intervention."],
  ["🚚", "Cloud Migration Services", "On-premise to cloud migration using the 6 Rs framework (Rehost, Replatform, Refactor, Repurchase, Retain, Retire). Each workload assessed individually with detailed migration plans, zero-downtime cutover strategies, and tested rollback procedures for every production migration."],
  ["🔒", "Security & Compliance", "IAM least-privilege architecture, VPC design with private subnets for databases, AES-256 encryption at rest, TLS 1.3 in transit, GuardDuty threat detection, CloudTrail audit logging, and Security Hub continuous monitoring. DPDP Act 2023, RBI, and ABDM compliance documentation for enterprise clients."],
  ["📈", "Performance Optimization", "Application Load Balancers, CloudFront CDN with edge caching, ElastiCache (Redis/Memcached) for session management, database read replicas, connection pooling (PgBouncer), and query optimization. Systems designed to handle 10× traffic without performance degradation."],
  ["💰", "Cloud Cost Optimization", "Infrastructure audits identifying oversized instances, unused EBS volumes, missing Reserved Instance coverage, inefficient data transfer patterns, and unoptimized S3 storage classes. Typical savings: 40–65% monthly reduction. We model costs at scale before you deploy to production."],
  ["⚙️", "DevOps & CI/CD", "GitHub Actions or GitLab CI pipelines with automated testing, Docker containerization, AWS ECS Fargate or Kubernetes (EKS/GKE/AKS), Terraform infrastructure-as-code, secrets management with AWS Secrets Manager or HashiCorp Vault, and blue-green deployments with instant rollback capability."],
  ["📊", "Monitoring & Observability", "CloudWatch or Datadog dashboards tracking application metrics, infrastructure health, cost anomalies, and security events. PagerDuty alerting for critical incidents, Slack/WhatsApp notifications for warnings, log aggregation with retention policies, and distributed tracing for microservices debugging."],
  ["🔄", "Disaster Recovery Planning", "Multi-region backup strategies, automated snapshot policies, cross-region replication for critical data, documented recovery runbooks with tested procedures, RTO/RPO analysis per workload, and quarterly disaster recovery drills to validate that backups actually restore correctly."],
];

const BENEFITS = [
  ["⚡", "Cloud-Native from Day One", "Start with the right architecture instead of retrofitting cloud services onto on-premise patterns. Serverless where appropriate (Lambda, Cloud Functions), managed databases (RDS, Cloud SQL) instead of self-managed EC2 instances, and ephemeral infrastructure via Terraform that can be destroyed and recreated at will."],
  ["💵", "Predictable Monthly Costs", "No surprise bills. Reserved Instance recommendations for steady-state workloads (40–72% savings), Savings Plans for compute flexibility, budget alerts before overruns, cost allocation tags for per-team/per-project billing, and monthly cost optimization reviews identifying waste before it compounds."],
  ["🛡️", "Enterprise-Grade Security", "Security controls that pass enterprise vendor assessments and regulatory audits. Multi-factor authentication enforced, encryption at rest and in transit, network segmentation with security groups and NACLs, automated vulnerability scanning, and SOC 2 / ISO 27001 readiness documentation for SaaS companies."],
  ["📈", "Scales With Your Growth", "Infrastructure that grows from 100 users to 100,000 without architectural rewrites. Auto-scaling groups that respond to traffic in under 60 seconds, database read replicas added automatically under load, CDN edge caching reducing origin requests by 80–95%, and queue-based decoupling preventing cascading failures."],
  ["🔧", "Zero-Downtime Deployments", "Blue-green deployments with instant rollback, database migrations that run without locking tables, feature flags allowing gradual rollouts, canary deployments routing 5% of traffic to new versions first, and deployment pipelines that automatically roll back if error rates spike."],
  ["🇮🇳", "DPDP Act 2023 Compliance", "Personal data stored in Indian cloud regions (AWS Mumbai ap-south-1, Azure India Central, GCP asia-south1), access logs retained for regulatory compliance, breach detection and notification systems, data residency guarantees in cloud contracts, and compliance documentation packages for enterprise due diligence."],
];

const PROCESS = [
  ["01", "Infrastructure Discovery & Assessment", "Current infrastructure audit (or greenfield requirements gathering): workload characteristics, traffic patterns, data volumes, integration points, regulatory obligations, and budget constraints. Output: findings report with architecture recommendations, cost estimates, and migration complexity assessment before any implementation begins."],
  ["02", "Architecture Design & Review", "Detailed AWS/Azure/GCP architecture diagrams (network topology, security groups, data flows), Terraform module structure, CI/CD pipeline design, disaster recovery strategy, and cost projections at scale. Architecture reviewed with your engineering team and signed off before implementation — changes are expensive once infrastructure is running."],
  ["03", "Infrastructure Provisioning", "All infrastructure deployed via Terraform or CloudFormation — everything is code, nothing is manual console work (clickops). CI/CD pipelines built and tested with staging deployments before touching production. Security controls applied (IAM policies, encryption, network segmentation). Monitoring, logging, and alerting configured from day one."],
  ["04", "Migration & Cutover (if applicable)", "For migration projects: pilot migration of non-critical workload first to validate runbooks and uncover issues. Staged migration of remaining workloads by dependency order with defined rollback criteria. Production cutover during low-traffic windows with engineering team on standby. Post-migration monitoring for 72 hours before declaring success."],
  ["05", "Documentation & Knowledge Transfer", "Complete operational documentation: architecture diagrams with Lucidchart/draw.io exports, Terraform code with inline comments, deployment runbooks, incident response procedures, cost optimization playbook, and disaster recovery drills. Live training sessions with your team covering deployments, monitoring, troubleshooting, and cost management."],
  ["06", "Ongoing Managed Services (Optional)", "Monthly retainer for ongoing cloud management: cost optimization reviews, security patch management, performance tuning, capacity planning, 24/7 incident response with <15 minute P1 response time, quarterly disaster recovery drills, and infrastructure-as-code maintenance as your product evolves."],
];

const FAQS = [
  ["Which cloud provider should we choose — AWS, Azure, or GCP?", "For most Indian startups: AWS. It has the largest service catalog, the most available certified talent in India, the most mature third-party tooling ecosystem, and competitive pricing for typical SaaS workloads. Choose Azure if you have existing Microsoft 365 or Active Directory integration requirements, or if enterprise clients mandate it (common in banking, government). Choose GCP if you're building heavily on Google's AI/ML stack (Vertex AI, BigQuery, Cloud TPUs) or need the best Kubernetes implementation (GKE). We're certified on all three and recommend based on your specific technical and commercial requirements, not vendor kickbacks."],
  ["Can you reduce our existing cloud bill without breaking anything?", "Yes, and this is one of the highest-ROI consulting engagements we do. Common quick wins: right-sizing EC2 instances based on actual CPU/memory usage (30–50% savings on compute), implementing Reserved Instances or Savings Plans for steady-state workloads (40–72% discount), deleting orphaned EBS volumes and unattached Elastic IPs, transitioning infrequently accessed S3 data to cheaper storage classes (Standard → IA → Glacier), and fixing data transfer inefficiencies (inter-AZ traffic, unnecessary internet egress). Send us your AWS Cost Explorer export or Azure Cost Management data — we can identify the biggest cost leaks within 48 hours and provide a prioritized action plan."],
  ["Do we really need Kubernetes, or is that overkill?", "We're honest here: most early-stage startups do NOT need Kubernetes. AWS ECS Fargate, Google Cloud Run, or Azure Container Instances handle 90% of containerized workloads at far lower operational complexity and cost. Kubernetes makes sense when you have genuine multi-cloud portability requirements (unlikely for most startups), very complex scheduling needs (batch jobs, ML training with GPU allocation), or you're already heavily invested in Kubernetes tooling and expertise. We will not upsell you Kubernetes complexity to inflate project scope — if ECS Fargate solves your problem, we'll recommend that and save you months of operational overhead."],
  ["How do you ensure DPDP Act 2023 compliance in cloud architecture?", "India's Digital Personal Data Protection Act 2023 requires that personal data be processed with appropriate technical and organizational safeguards. For cloud infrastructure, this means: (1) Data stored in Indian cloud regions (AWS Mumbai ap-south-1, Azure India Central, GCP asia-south1) to meet data residency requirements. (2) AES-256 encryption at rest for databases and object storage. (3) TLS 1.3 in transit for all data movement. (4) Access logging via CloudTrail/Azure Monitor/Cloud Audit Logs with 90-day retention for compliance audits. (5) Breach detection systems (GuardDuty, Security Center) with automated alerting. We also produce DPDP compliance documentation packages for enterprise sales cycles, including architecture diagrams annotated with data flows, security controls matrix, and vendor due diligence questionnaires pre-filled."],
  ["What does your incident response look like for managed clients?", "For clients on monthly managed services retainers: Critical (P1) incidents — system down, data breach, security compromise — we respond within 15 minutes, 24/7/365. P2 (significant degradation) within 2 hours. P3 (minor issues, feature requests) within 1 business day. Incident response includes: immediate triage and stabilization, transparent status updates via Slack/email, root cause analysis (RCA) documented within 48 hours, and corrective actions implemented to prevent recurrence. For non-managed clients: emergency on-call support available at time-and-materials rates with 2-hour P1 response SLA. We investigate, communicate status clearly, implement fixes, and document learnings — not just alert you and leave you to fix it yourself."],
  ["How long does a typical cloud migration take?", "Discovery and architecture design: 2–3 weeks (includes workload assessment, dependency mapping, architecture design, cost modeling, and migration plan documentation). Proof-of-concept migration (1 non-critical workload): 1–2 weeks to validate runbooks and identify issues before touching production. Full production migration: 4–12 weeks depending on number of workloads, data volumes, integration complexity, and whether refactoring is required (lift-and-shift is faster, refactor-to-cloud-native takes longer but yields better long-term cost/performance). Post-migration stabilization and optimization: 2–4 weeks. Total end-to-end for mid-sized applications: 10–20 weeks. We provide detailed Gantt charts and weekly status updates after the discovery phase."],
  ["Do you provide training for our team to manage infrastructure themselves?", "Yes — knowledge transfer is included in every engagement. Live training sessions covering: Terraform infrastructure-as-code workflow (plan, apply, state management), CI/CD pipeline operation and troubleshooting, AWS Console/CLI navigation for common tasks, monitoring dashboard interpretation and alert response, cost optimization techniques they can apply monthly, security best practices and compliance checklists, incident response procedures with documented runbooks. We also provide recorded video walkthroughs and written documentation (Markdown in your Git repo) so new team members can onboard without repeating training. Goal is to make you self-sufficient — not create dependency so we can bill forever."],
  ["What's your pricing model for cloud consulting?", "Three engagement models: (1) Project-based: Fixed-price quote for defined scope (migration, architecture design, cost optimization audit). Typical range: ₹3–15 lakhs depending on infrastructure complexity. (2) Time-and-materials: Hourly or daily rates for ongoing work without defined end date. Useful for exploratory work, troubleshooting, or variable-scope projects. Rates: ₹8,000–₹20,000/day depending on seniority. (3) Monthly managed services retainer: Fixed monthly fee for ongoing cloud management, monitoring, optimization, and 24/7 incident response. Range: ₹50,000–₹3,00,000/month depending on infrastructure size and SLA requirements. All pricing excludes 18% GST. We provide detailed proposals after discovery phase."],
  ["Can you help with multi-cloud or hybrid cloud setups?", "We can, but we're candid about the trade-offs. Multi-cloud (workloads split across AWS + GCP + Azure) makes sense for: (1) Regulatory requirements (data must stay in specific regions only one cloud offers). (2) Best-of-breed services (AWS for general compute, GCP for BigQuery analytics, Azure for Microsoft integration). (3) Vendor lock-in avoidance for very large enterprises. For most startups and mid-market companies, multi-cloud adds 3–5× operational complexity (multiple IAM systems, monitoring tools, cost management platforms, CI/CD pipelines) without proportional benefit. Hybrid cloud (on-premise + cloud) is common during migrations but expensive long-term — we typically recommend moving fully to cloud within 12–24 months unless there are hard compliance or latency requirements keeping workloads on-premise."],
  ["Do you support Indian government cloud requirements (MeitY empanelment, etc.)?", "Yes. For government clients and PSUs, we design architectures meeting MeitY guidelines including data localization (all data in Indian regions), empaneled cloud service providers (AWS India, Azure India, NIC's MeghRaj), security hardening per CIS benchmarks, audit logging for RTI compliance, and vulnerability management per CERT-In requirements. We've supported multiple government RFP responses and can produce the technical documentation, compliance matrices, and security architecture diagrams required for public sector procurement."],
];

const COMPARISON: [string, string, string][] = [
  ["AWS (Amazon Web Services)", "Largest service catalog, most mature, best for most Indian startups. Strong support for AI/ML, serverless, and IoT. Pricing competitive at scale.", "Choose if: Building SaaS, mobile backend, AI/ML workloads. Need broadest service selection. Want largest talent pool in India."],
  ["Microsoft Azure", "Best for Microsoft 365 / Active Directory integration. Strong in hybrid cloud, enterprise SaaS, and .NET workloads. Common in banking/govt.", "Choose if: Enterprise clients mandate it. Heavy Microsoft tooling. Existing EA with Microsoft. Banking/fintech regulatory preference."],
  ["Google Cloud Platform (GCP)", "Best for data analytics (BigQuery), Kubernetes (GKE invented it), and AI/ML (Vertex AI, TPUs). Cleanest UI, most generous free tier.", "Choose if: Data/analytics-heavy. Kubernetes-first strategy. Google Workspace integration. ML research workloads."],
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
  "@id": "https://www.crenosoft.in/services/cloud-consulting/#service",
  name: "Cloud Consulting Services",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/cloud-consulting",
  description: metadata.description as string,
  serviceType: "Cloud Consulting",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "Cloud Consulting", item: "https://www.crenosoft.in/services/cloud-consulting" },
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
          <div style={{ fontSize: 56, marginBottom: 20 }}>☁️</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 20 }}>
            Cloud Consulting Services
          </h1>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Expert cloud architecture, migration, and optimization for Indian businesses. AWS, Azure, GCP certified consultants who design infrastructure that scales, stays secure, and doesn't blow your budget.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3d3d3d", color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Get Cloud Consulting →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.2 }}>
            Cloud Infrastructure Done Right From Day One
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Bad cloud architecture is expensive in ways that don't show up until it's too late. We've seen Indian SaaS companies go down for 12+ hours during their biggest marketing campaign because nobody configured auto-scaling. We've seen{" "}
            <a href="https://aws.amazon.com/aws-cost-management/" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              AWS bills
            </a>{" "}
            triple in a month after a developer left GPU instances running. We've seen customer data exposed through a misconfigured S3 bucket that passed code review.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            Most Indian startups either overpay for cloud — unused resources, wrong instance types, no Reserved pricing — or underpay in ways that create risk. No monitoring, no alerting, no backup strategy tested under load, single points of failure everywhere, and infrastructure diagrams that don't match what's actually running.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            According to{" "}
            <a href="https://www.gartner.com/en/information-technology" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              Gartner's 2024 Cloud Infrastructure Report
            </a>
            , organizations waste an average of 32% of cloud spend on unused or over-provisioned resources. For Indian startups, that number is often higher because engineering teams are optimizing for shipping features, not managing infrastructure costs.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78 }}>
            Crenosoft's cloud consulting practice has audited and optimized infrastructure for funded startups, growth-stage SaaS companies, and enterprises across fintech, healthtech, logistics, and e-commerce. We've migrated applications handling millions of Indian users from on-premise data centers to{" "}
            <Link href="/services/cloud-migration" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              cloud infrastructure
            </Link>{" "}
            that meets DPDP Act 2023 requirements, scales automatically, and costs 40–60% less than their previous setup. Read our complete guide:{" "}
            <Link href="/blog/cloud-migration-guide-indian-startups-2025" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              Cloud Migration for Indian Startups 2025 →
            </Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Our Services
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>What We Provide</h2>
          </div>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {CAPS.map(([icon, title, desc]) => (
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
              Why Crenosoft Cloud Consulting
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>Six Core Benefits</h2>
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

      {/* Cloud Provider Comparison */}
      <section style={{ background: "#f5f5f7", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Platform Comparison
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              AWS vs Azure vs GCP for Indian Businesses
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>We're certified on all three and recommend based on your specific requirements, not vendor partnerships.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {COMPARISON.map(([platform, strengths, choose]) => (
              <div key={platform} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e5ea" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{platform}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65, marginBottom: 10 }}>{strengths}</p>
                <p style={{ fontSize: 13, color: "#3d3d3d", fontWeight: 500, fontStyle: "italic" }}>{choose}</p>
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
              How We Work
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>Our Cloud Consulting Process</h2>
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

      {/* FAQs */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", textAlign: "center", marginBottom: 48 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQS.map(([q, a]) => (
              <div key={q} style={{ padding: "24px 0", borderBottom: "1px solid #d2d2d7" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section style={{ background: "#fff", padding: "56px 24px", borderTop: "1px solid #e5e5ea" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#86868b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>
            Related Reading
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Cloud Migration for Indian Startups: Complete 2025 Guide", "/blog/cloud-migration-guide-indian-startups-2025"],
              ["5 AWS Cost Mistakes Indian Startups Make (And How to Fix Them)", "/blog/cloud-cost-optimisation"],
              ["Next.js in 2025: Cloud Infrastructure for SEO-Focused Web Apps", "/blog/nextjs-seo-2025"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ background: "#f5f5f7", borderRadius: 12, padding: "16px 20px", border: "1px solid #e5e5ea", fontSize: 14, fontWeight: 500, color: "#1d1d1f", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {label}
                <span style={{ color: "#86868b", fontSize: 16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background: "#f5f5f7", padding: "40px 24px", textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <p style={{ fontSize: 13, color: "#86868b", marginBottom: 14 }}>Related services</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["DevOps Services", "/services/devops-services"],
            ["Cloud Migration", "/services/cloud-migration"],
            ["AI Software Development", "/services/ai-software-development"],
            ["Web Development", "/services/web-development"],
          ].map(([n, h]) => (
            <Link key={h} href={h} style={{ border: "1px solid #d2d2d7", color: "#1d1d1f", padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: "none", background: "#fff" }}>
              {n} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#3d3d3d", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
          Let's review your cloud infrastructure
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Free infrastructure assessment. We'll identify cost optimization opportunities, security gaps, and scalability bottlenecks — no obligation.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#3d3d3d", padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Book Free Cloud Assessment →
        </Link>
      </section>
    </>
  );
}
