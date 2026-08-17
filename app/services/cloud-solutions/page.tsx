import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Solutions India — AWS, GCP, Azure, DevOps | Crenosoft",
  description: "Cloud architecture, migration, and DevOps for Indian businesses — AWS Mumbai (ap-south-1) for DPDP compliance, CI/CD pipelines, Kubernetes, cost optimisation. Lucknow.",
  keywords: ["cloud solutions India","AWS cloud services India","cloud migration India","DevOps company India","cloud architecture India","cloud cost optimization India","Kubernetes DevOps India"],
  alternates: { canonical: "https://www.crenosoft.in/services/cloud-solutions" },
};

const CAPS = [
  ["🏗️","Cloud Architecture Design","Resilient, well-documented architectures on AWS, GCP, or Azure — designed for your actual scale and query patterns. Multi-AZ deployments, clear disaster recovery procedures with defined RTO and RPO, and documentation your team can actually operate."],
  ["🚚","Cloud Migration","On-premise to cloud migration using the 6 Rs framework (Rehost, Replatform, Refactor, Repurchase, Retain, Retire). Each workload assessed individually. Zero-downtime migration with fallback plans tested before cutover."],
  ["🔒","Security & Compliance","IAM least-privilege architecture, VPC design with private subnets, AES-256 encryption at rest, TLS 1.3 in transit, GuardDuty threat detection, CloudTrail audit logging. DPDP Act, RBI, and ABDM compliance documentation for enterprise sales."],
  ["📈","Performance & Scaling","Auto-scaling groups, Application Load Balancers, CloudFront CDN, ElastiCache (Redis) for application caching, read replicas, and PgBouncer connection pooling. Systems that handle 10x traffic spikes without manual intervention."],
  ["💰","Cost Optimisation","Infrastructure audits that identify oversized instances, unused resources, missing Reserved Instance coverage, and data transfer inefficiencies. Typical outcome: 40–60% cost reduction. We model costs at scale before you launch."],
  ["⚙️","DevOps & CI/CD","GitHub Actions or GitLab CI pipelines, Docker containerisation, AWS ECS Fargate or Kubernetes (EKS), Terraform infrastructure-as-code, secrets management with AWS Secrets Manager — zero manual deployments."],
];

const PROCESS = [
  ["01","Discovery","Assessment of current infrastructure (or greenfield requirements), workload characteristics, traffic patterns, regulatory requirements, and cost constraints. Findings and architecture recommendations before any implementation."],
  ["02","Architecture Design","Detailed infrastructure diagrams, Terraform module structure, CI/CD pipeline design, and security architecture. Reviewed and signed off before implementation starts."],
  ["03","Implementation","Infrastructure provisioned via Terraform — everything is code, nothing is clickops. CI/CD pipelines built and tested. Security controls applied. Monitoring and alerting configured."],
  ["04","Handover & Support","Complete documentation including architecture diagrams, operational runbooks, and incident response procedures. Team training. Ongoing managed services available on monthly retainer."],
];

const FAQS = [
  ["AWS, GCP, or Azure — which should we use?","For most Indian startups: AWS. Largest service catalogue, most available talent in India, most mature tooling, and best pricing for most workloads. GCP if you are building heavily on Google's AI/ML services (Vertex AI, BigQuery). Azure when enterprise clients require it — many Indian enterprises have existing Azure commitments through Microsoft licensing. We are certified on all three and recommend based on your actual situation."],
  ["Can you help reduce our existing AWS bill?","Yes, and this is one of the highest-ROI engagements we do. Common wins: right-sizing EC2 instances (30–50% savings), Reserved Instance and Savings Plans coverage (40–72% on applicable instances), deleting unused resources, and fixing data transfer inefficiencies. Send us a Cost Explorer export and we can identify the biggest issues quickly."],
  ["Do you set up Kubernetes for Indian startups?","We are honest here: most early-stage startups do not need Kubernetes. AWS ECS Fargate handles 90% of containerised workloads at far lower operational complexity. We recommend Kubernetes when you have genuine multi-cloud portability requirements, complex scheduling needs, or an existing Kubernetes investment. We will not sell you Kubernetes complexity to inflate a project scope."],
  ["How do you handle DPDP compliance in cloud architecture?","The DPDP Act 2023 requires personal data to be processed with appropriate safeguards. For cloud infrastructure, this means data stored in Indian regions (AWS Mumbai ap-south-1, GCP asia-south1, Azure India Central), AES-256 encryption at rest, TLS 1.3 in transit, access logging via CloudTrail or equivalent, and breach detection. We also produce compliance documentation packages for enterprise due diligence."],
  ["What does your incident response look like?","For managed clients: alerting configured via PagerDuty or Slack/WhatsApp, under-15-minute response time for P1 incidents, root cause analysis and post-mortem documentation. For non-managed clients: emergency response available on time-and-materials. We investigate, communicate status, implement fixes — not just alert and wait."],
  ["How long does a cloud migration take?","Assessment and architecture: 1–2 weeks. Implementation: 2–8 weeks depending on number of workloads, complexity, and whether refactoring is involved. Full migration with testing and cutover: typically 8–20 weeks for mid-sized systems. We give detailed timelines after the discovery phase."],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>☁️</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Cloud Solutions</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            Reliable, cost-efficient cloud infrastructure for Indian businesses — designed and managed by certified engineers who know what AWS bills look like when nobody is watching costs, and what happens when nobody tests the deployment pipeline.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your Infrastructure →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>Cloud Infrastructure Is a Business Problem, Not Just a Technical One</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Your cloud infrastructure directly affects your product&apos;s uptime, data security, regulatory compliance, and monthly costs. We have seen Indian SaaS products go down for 12+ hours during a marketing campaign because nobody set up auto-scaling. We have seen{" "}
            <a href="https://aws.amazon.com/aws-cost-management/aws-cost-explorer/" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>AWS bills</a>{" "}
            triple in one month after a developer left GPU instances running. We have seen customer data exposed through a misconfigured S3 bucket.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Most Indian startups either overpay for cloud — unused resources, wrong instance types, no Reserved pricing — or underpay in ways that cost them later. No monitoring, no alerting, no backup strategy, single points of failure everywhere.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We have audited enough cloud environments to know exactly where Indian startups lose money and where they take on risk they do not know about. Read our full guide:{" "}
            <Link href="/blog/cloud-migration-guide-indian-startups-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Cloud Migration for Indian Startups: The Complete 2025 Guide →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Do</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Cloud Services</h2>
          </div>
          <div className="cap-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {CAPS.map(([icon,title,desc])=>(
              <div key={title as string} className="cp-card" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,0.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>How We Work</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our Cloud Engagement Process</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:14 }}>
            {PROCESS.map(([step,title,desc])=>(
              <div key={step as string} style={{ display:"flex",gap:24,background:"#f5f5f7",borderRadius:16,padding:"28px 24px",alignItems:"flex-start" }}>
                <div style={{ fontSize:28,fontWeight:900,color:"#e5e5ea",flexShrink:0,lineHeight:1,width:40,textAlign:"center" as const }}>{step}</div>
                <div>
                  <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:6 }}>{title}</h3>
                  <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center" as const,marginBottom:48 }}>Frequently Asked Questions</h2>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:0 }}>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #d2d2d7" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section style={{ background:"#fff",padding:"56px 24px",borderTop:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:20,textAlign:"center" as const }}>Related Reading</p>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:10 }}>
            {([
              ["Cloud Migration for Indian Startups 2025: The Complete Playbook","/blog/cloud-migration-guide-indian-startups-2025"],
              ["Cloud Cost Optimisation: How Indian Startups Cut AWS Bills by 40–60%","/blog/cloud-cost-optimisation"],
              ["How to Build an AI-Powered SaaS: Architecture and Infrastructure","/blog/building-ai-powered-saas-india-2025"],
              ["LLM Integration Guide: Cloud Infrastructure for AI Workloads","/blog/llm-integration-guide"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#f5f5f7",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b",fontSize:16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#f5f5f7",padding:"40px 24px",textAlign:"center" as const,borderBottom:"1px solid #e5e5ea" }}>
        <p style={{ fontSize:13,color:"#86868b",marginBottom:14 }}>Related services</p>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {([["AI Software Development","/services/ai-software-development"],["Web Development","/services/web-development"],["AI Automation","/services/ai-automation"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none",background:"#fff" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Let&apos;s review your infrastructure</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>Whether you are starting from scratch, migrating, or fixing an existing setup that is costing too much — free first conversation, no obligation.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Infrastructure Review →</Link>
      </section>
    </>
  );
}
