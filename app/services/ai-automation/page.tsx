import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "AI Automation Services India — Crenosoft", description: "Intelligent business process automation — RPA, AI agents, workflow automation, and document processing for Indian businesses.", alternates: { canonical: "https://www.crenosoft.in/services/ai-automation" } };
const ICON="⚡"; const TITLE="AI Automation"; const SUB="Automate everything. Scale effortlessly."; const ACCENT="#f59e0b";
const DESC="Stop wasting skilled people on repetitive work. Crenosoft builds intelligent automation systems that handle your operational tasks — accurately, reliably, around the clock.";
const ITEMS=[["📄","Document Processing","Automatically extract, classify, and process data from invoices, contracts, forms, and PDFs using AI-powered OCR and NLP."],["📧","Email & Communication","AI that reads, categorises, and responds to emails — escalating only conversations that need human attention."],["🔄","Workflow Automation","Connect your CRM, ERP, Slack, and spreadsheets into intelligent workflows that run without manual intervention."],["🤖","AI Agent Pipelines","Deploy autonomous AI agents that browse the web, use tools, and complete multi-step tasks on your behalf."],["📊","Automated Reporting","Auto-generate reports, dashboards, and insights from your data on any schedule — daily, weekly, or real-time."],["🗃️","Data Extraction","Scrape, structure, and enrich data from any source and route it where it needs to go."]];
const FAQS=[["What tasks can AI automation handle?","Any task that is rule-based, repetitive, or follows a predictable pattern. Common examples: data entry, invoice processing, email triage, report generation, CRM updates."],["How does AI automation differ from traditional RPA?","Traditional RPA follows rigid rules and breaks when forms change. AI automation adds intelligence — it handles unstructured data, manages variations, and recovers from unexpected inputs."],["Which platforms do you integrate with?","We integrate with virtually any platform via API: Salesforce, HubSpot, SAP, Zoho, Slack, Google Workspace, Microsoft 365, Notion, Jira, and more."],["How do we measure ROI?","We establish baseline metrics before implementation — hours spent, error rates, processing times — then track improvements. Most clients see payback within 3–6 months."]]

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
