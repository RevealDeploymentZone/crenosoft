import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B SaaS Development India — Multi-Tenant, Billing, AI Features | Crenosoft",
  description: "Full-stack B2B SaaS development in India — multi-tenancy architecture, billing, AI features, web and mobile, cloud infrastructure. For Indian and global SaaS founders. Lucknow.",
  keywords: ["B2B SaaS development India","SaaS product development India","multi-tenant software India","SaaS startup India","custom SaaS development","SaaS MVP India"],
  alternates: { canonical: "https://www.crenosoft.in/industries/b2b-saas" },
};

const WHAT_WE_BUILD = [
  ["⚙️","Multi-Tenant SaaS Architecture","Multi-tenant backends with proper data isolation — schema-per-tenant, row-level security, or hybrid approaches depending on your compliance requirements and performance tradeoffs. We design the tenancy model at the architecture phase, not as a retrofit after the product is built. The architecture decision made at this stage affects every future feature, migration, and security audit."],
  ["💳","Subscription Billing & Pricing","Subscription management and billing infrastructure integrated with Razorpay or Stripe — usage-based billing, seat-based pricing, free trials with automated conversion flows, proration on plan changes, and dunning management for failed payments. For SaaS founders, billing logic is one of the most underestimated sources of technical debt — we build it right the first time."],
  ["🤖","AI Features & Product Intelligence","LLM-powered features built into SaaS products — AI assistants, automated report generation, intelligent data analysis, and workflow automation. We build these as product features that work reliably in production, not demos that look good in a deck. See our detailed approach in the AI Software Development service."],
  ["🌐","Web Application Frontend","Next.js frontends with SSR for SEO-critical pages, React with Tanstack Query for complex dashboard interfaces, and design system implementations that keep the UI consistent as the product grows. We build admin dashboards, onboarding flows, and customer-facing portals — with performance budgets and Core Web Vitals targets from day one."],
  ["📊","Analytics & Product Metrics","Product analytics integration (PostHog, Mixpanel, Amplitude), custom internal dashboards for your team, and customer-facing analytics features for SaaS products where data visibility is part of the value proposition. For B2B SaaS, in-app reporting is often a sales requirement, not just a nice product feature."],
  ["☁️","Cloud Infrastructure & DevOps","Production-grade cloud infrastructure on AWS, GCP, or Azure — containerised deployments on Kubernetes or ECS, CI/CD pipelines, environment management, monitoring with Datadog or Grafana, and cost optimisation. We set up infrastructure that your team can operate and extend without needing us for every deployment."],
];

const CHALLENGES = [
  ["Multi-Tenancy Architecture Decisions Are Not Reversible","The decision between shared database with tenant IDs, schema-per-tenant, and database-per-tenant affects every query you write, every compliance audit you go through, and every enterprise customer's security review. Getting this wrong at the start is expensive to fix — not because the code is complicated, but because changing the tenancy model after a product has customers means migrating live production data with no downtime. We walk through this decision explicitly with every SaaS client before writing the first line of product code."],
  ["Pricing and Billing Complexity","SaaS billing looks simple from the outside — charge per seat, charge per month. In practice it involves proration logic for mid-cycle upgrades, credit notes for downgrade refunds, usage metering for API-based pricing, grandfathering legacy customers when pricing changes, and reconciling your billing system against what payment gateways actually settled. We have built billing systems for SaaS products at various stages and know what complexity looks like before it surfaces as a support ticket or a customer dispute."],
  ["Enterprise Sales Requirements","When B2B SaaS products move upmarket to enterprise customers, technical requirements change significantly: SSO with SAML 2.0 or OIDC, audit logs that satisfy InfoSec review, role-based access control granular enough for enterprise org structures, data residency options for regulated industries, and penetration test reports that procurement teams ask for. We build these capabilities with a clear sense of which enterprise deals are already in the pipeline, so the scope of work reflects actual sales requirements rather than a theoretical enterprise checklist."],
  ["The India vs Global SaaS Decision","Many Indian SaaS founders face a fork: build for the Indian market first, or build for global markets from day one. The technical implications differ — Indian market means Razorpay + INR pricing + GST compliance + regional language considerations; global means Stripe + multi-currency + GDPR + international data residency. We help founders think through this decision and build the technical foundation that does not force an expensive rebuild when the market strategy evolves."],
];

const FAQS = [
  ["What tech stack do you use for B2B SaaS products?","We are stack-pragmatic and recommend based on your team's existing skills, scalability requirements, and hiring market. Common stack for Indian SaaS: Next.js frontend, Node.js or Python backend, PostgreSQL, Redis, deployed on AWS or GCP. For products where we are setting the stack from scratch, we lean toward well-supported, mainstream choices — not whatever framework was released last month. Read our detailed technology breakdown: Next.js Web Development."],
  ["How do you handle DPDP Act compliance for SaaS products?","Under India's DPDP Act 2023, SaaS products handling personal data need consent management, data processing agreements with customers, mechanisms for users to request data deletion, and breach notification procedures. We build these into the product architecture — consent logs in the database, cascading delete workflows, and the documentation structure that legal teams need for compliance sign-off. If your product also handles European customer data, we align DPDP requirements with GDPR simultaneously."],
  ["Can you help with a SaaS that's already built but has scaling problems?","Yes. Common situations we get called in for: PostgreSQL queries that performed fine at 100 customers but are timing out at 1,000; a multi-tenant architecture that was implemented incorrectly and is leaking data between tenants; a billing system that was patched together and is now losing revenue on edge cases. We diagnose the problem, propose a fix, and implement it — usually without requiring a full rebuild."],
  ["How long does a SaaS MVP take to build?","A focused SaaS MVP — core workflow, one user role, basic billing, web frontend — is typically 12–16 weeks. A more complete early product with multiple user roles, full billing lifecycle, API, and mobile app is 20–32 weeks. We define MVP scope explicitly in a discovery session — the word 'MVP' means different things to different founders, and scoping it precisely affects both cost and timeline."],
  ["Do you work with solo founders or teams?","Both. For solo founders, we function as a full engineering team — product decisions included. For teams with an existing CTO or lead engineer, we augment capacity on specific workstreams. We are explicit about what we think needs to be owned internally versus what we can own, because that boundary affects how the product evolves after the initial build."],
  ["What does B2B SaaS development cost in India?","SaaS MVP (core workflow + billing + web): ₹15–30 lakhs. Full product with mobile app + API: ₹25–55 lakhs. Enterprise feature set (SSO, audit logs, RBAC): ₹8–18 lakhs additional. AI features integrated into product: ₹8–20 lakhs depending on complexity. Infrastructure setup + CI/CD: ₹2–5 lakhs. All prices exclude GST and third-party service costs."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q as string,
    acceptedAnswer: { "@type": "Answer", text: a as string },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.crenosoft.in/industries" },
    { "@type": "ListItem", position: 3, name: "B2B SaaS",     item: "https://www.crenosoft.in/industries/b2b-saas" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .cap-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <Link href="/industries" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Industries</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>⚙️</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>B2B SaaS Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            Full-stack product development for Indian and global SaaS founders — multi-tenancy architecture, subscription billing, AI features, web and mobile, and cloud infrastructure under one roof.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your SaaS Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India Is Building the Next Generation of Global SaaS Companies</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India's SaaS industry is projected to reach{" "}
            <a href="https://nasscom.in/knowledge-center/publications/indian-saas-report-2024" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>$50 billion in revenue by 2030 according to Nasscom</a>
            , with companies like Zoho, Freshworks, and Chargebee demonstrating that Indian engineering teams can build SaaS products that compete globally. The ecosystem of SaaS-focused founders, investors, and go-to-market expertise has grown significantly over the past five years.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            But building a SaaS product well requires more than writing features. Multi-tenancy architecture, subscription billing, enterprise security requirements, and the infrastructure decisions that determine whether your product can scale from 10 customers to 10,000 — these are the technical foundations that separate SaaS products that grow from ones that require expensive rebuilds at the worst possible moment. We have seen what goes wrong and we build to avoid it.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We build B2B SaaS products end-to-end — from the first line of code on an MVP to enterprise feature additions on mature products. See our detailed thinking on building AI into SaaS:{" "}
            <Link href="/blog/building-ai-powered-saas-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>How to Build an AI-Powered SaaS in India →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>SaaS Capabilities We Develop</h2>
          </div>
          <div className="cap-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {WHAT_WE_BUILD.map(([icon,title,desc])=>(
              <div key={title as string} className="cap-card" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,0.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Our Approach</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build SaaS Products</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:28 }}>
            {CHALLENGES.map(([title,desc])=>(
              <div key={title as string} style={{ borderLeft:"3px solid #e5e5ea",paddingLeft:24 }}>
                <h3 style={{ fontSize:17,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:15,color:"#6e6e73",lineHeight:1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Box */}
      <section style={{ background:"#f5f5f7",padding:"64px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ background:"#fff",borderRadius:20,padding:"36px 32px",border:"1px solid #e5e5ea" }}>
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Enterprise Features We Build</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["SSO / Auth","SAML 2.0, OIDC, Google Workspace SSO, Microsoft Entra ID"],
                ["Security","Audit logs, SOC 2 controls, penetration test readiness, VAPT support"],
                ["Compliance","DPDP Act 2023, GDPR (for global products), data residency options"],
                ["Billing","Razorpay, Stripe, usage metering, dunning, proration, invoice generation"],
                ["Integrations","REST API + webhooks, Zapier/Make connector, Salesforce/HubSpot sync"],
                ["Reliability","99.9% SLA infrastructure, multi-region failover, RTO/RPO planning"],
              ].map(([cat,desc])=>(
                <div key={cat} style={{ background:"#f5f5f7",borderRadius:12,padding:"16px 18px" }}>
                  <div style={{ fontSize:13,fontWeight:700,color:"#1d1d1f",marginBottom:4 }}>{cat}</div>
                  <div style={{ fontSize:12,color:"#6e6e73",lineHeight:1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center" as const,marginBottom:48 }}>Frequently Asked Questions</h2>
          <div style={{ display:"flex",flexDirection:"column" as const }}>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog + Services Links */}
      <section style={{ background:"#f5f5f7",padding:"56px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:20 }}>Related Resources</p>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:10,marginBottom:32 }}>
            {([
              ["How to Build an AI-Powered SaaS Product in India in 2025","/blog/building-ai-powered-saas-india-2025"],
              ["LLM Integration Guide: RAG vs Fine-Tuning for SaaS Products","/blog/llm-integration-guide"],
              ["Custom AI Software Development India: Costs & Process","/blog/custom-ai-software-development-india-2025"],
              ["Cloud Migration for Indian Startups: Security & Compliance","/blog/cloud-migration-guide-indian-startups-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in SaaS Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["AI Software Development","/services/ai-software-development"],["Web Development","/services/web-development"],["Mobile App Development","/services/mobile-app-development"],["Cloud Solutions","/services/cloud-solutions"],["UI/UX Design","/services/ui-ux-design"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building a SaaS product?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review your architecture plan, suggest the right technical foundation, and give you a realistic scope and cost estimate — no commitment required.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
