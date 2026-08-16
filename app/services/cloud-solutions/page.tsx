import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cloud Solutions India — AWS, GCP & Azure Architecture | Crenosoft", description: "Cloud architecture, migration, DevOps, and managed services on AWS, Google Cloud, and Azure. Scalable, cost-efficient cloud infrastructure for businesses.", alternates: { canonical: "https://www.crenosoft.in/services/cloud-solutions" } };
const ICON="☁️"; const TITLE="Cloud Solutions"; const SUB="Scalable infrastructure, zero downtime."; const ACCENT="#3b82f6";
const DESC="Reliable, scalable, and cost-efficient cloud infrastructure — built and managed by certified cloud engineers who understand your business needs.";
const ITEMS=[["🏛️","Cloud Architecture","Designing resilient architectures on AWS, GCP, or Azure — microservices, serverless, or traditional deployments."],["🔄","Cloud Migration","Lift-and-shift or re-architecting — we migrate your apps to the cloud with zero business disruption."],["🔒","Security & Compliance","IAM, VPC design, encryption, and compliance frameworks (ISO 27001, SOC 2, GDPR) built in."],["📈","Performance & Scaling","Auto-scaling, load balancing, CDN config, and database optimisation for traffic spikes."],["💰","Cost Optimisation","Cloud bills spiralling? We audit infrastructure and implement right-sizing and spend governance."],["🚢","DevOps & CI/CD","Automated deployment pipelines, Docker containers, Kubernetes, and infrastructure-as-code with Terraform."]];
const FAQS=[["Which cloud provider should I use?","AWS is the most mature. GCP excels for AI/ML. Azure is preferred for Microsoft-heavy stacks. We will help you choose — or manage multi-cloud if needed."],["Can you migrate our on-premises servers?","Yes. We handle the full migration lifecycle: assessment, planning, execution, testing, and post-migration optimisation. Most migrations complete with zero downtime."],["What is DevOps and why do I need it?","DevOps automates and integrates software development and IT operations — meaning faster deployments, fewer production bugs, and teams that ship confidently."],["Do you offer ongoing managed services?","Yes. We offer cloud infrastructure monitoring, incident response, cost governance, and ongoing optimisation retainers."]]

export default function Page() {
  return (
    <>
      <style>{`
        .cp2:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:700px){.grid3{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute",inset:0,background:"none",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>{ICON}</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:16 }}>{TITLE}</h1>
          <p style={{ fontSize:16,fontWeight:600,color:ACCENT,marginBottom:16 }}>{SUB}</p>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:520,margin:"0 auto 40px",lineHeight:1.65 }}>{DESC}</p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:ACCENT,color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Get Started →
          </Link>
        </div>
      </section>

      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:ACCENT,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Offer</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our {TITLE} services</h2>
          </div>
          <div className="grid3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {ITEMS.map(([icon,title,desc])=>(
              <div key={title as string} className="cp2" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center",marginBottom:48 }}>Frequently asked questions</h2>
          <div>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:ACCENT,padding:"72px 24px",textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Ready to get started?</h2>
        <p style={{ fontSize:16,color:"#6e6e73",marginBottom:32 }}>Book a free consultation and let&apos;s discuss your project.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:ACCENT,padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>
          Book Free Consultation →
        </Link>
      </section>
    </>
  );
}
