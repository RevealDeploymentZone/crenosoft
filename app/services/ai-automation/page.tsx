import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services India — Workflow & Document Automation | Crenosoft",
  description: "AI-powered business automation in India — document processing, email triage, workflow automation, and AI agents. Connect your existing tools. DPDP-compliant. Based in Lucknow.",
  keywords: ["AI automation India","business process automation India","intelligent automation India","workflow automation India","document automation India","RPA India"],
  alternates: { canonical: "https://www.crenosoft.in/services/ai-automation" },
};

const CAPS = [
  ["📄","Document Processing","Extract and validate data from invoices, contracts, KYC forms, and PDFs — regardless of layout or format. Accuracy rates of 95–99% on structured document types. Built with AWS Textract, Google Document AI, and custom NLP models."],
  ["📧","Email & Communication Automation","AI reads, categorises, and responds to incoming emails — trained on your products, policies, and tone. Handles volume that would take hours each day. Human escalation for anything genuinely complex or sensitive."],
  ["🔗","Workflow & System Integration","Connect your existing tools — Salesforce, SAP, Tally, Zoho, Google Workspace, Razorpay, Shiprocket — into automated workflows. A sales order triggers inventory, creates an invoice, sends a WhatsApp confirmation, and updates your CRM. No manual handoffs."],
  ["🤖","AI Agent Pipelines","Autonomous agents that research, gather data, make decisions, and take actions across tools — without human input at each step. Useful for lead research, multi-step back-office processes, and competitive monitoring."],
  ["📊","Automated Reporting","Pull data from your databases, SaaS tools, and spreadsheets on schedule. Calculate KPIs, flag anomalies, generate formatted reports in PDF or Excel, and deliver them via email, Slack, or WhatsApp. No more Sunday evening number-crunching."],
  ["🔎","Data Extraction & Enrichment","Scrape, structure, and enrich data from websites, portals, and directories at scale. Lead enrichment, market research, product catalog management — on a schedule, delivered to your CRM or database."],
];

const PROCESS = [
  ["01","Process Mapping","We document the exact current-state process with your operations team — every step, decision point, exception, and tool. Automating a broken or undocumented process makes a mess faster. This step is non-negotiable."],
  ["02","Feasibility & Scope","We identify which parts can be automated and which genuinely need human judgment. We prioritise by impact: how long does this take, how often, what does an error cost? Output is a ranked list with ROI estimates."],
  ["03","Build & Test","We build in stages using real data from your environment — not fabricated test cases. Every stage is tested against edge cases and exceptions before moving forward."],
  ["04","Pilot & Handover","The automation runs in parallel with the manual process for 2 weeks. We compare outputs, resolve gaps, and train your team on monitoring and exception handling."],
];

const FAQS = [
  ["What tasks are good candidates for AI automation?","Tasks that are high-volume, repetitive, and follow recognisable patterns — even with variation. Invoice processing, email triage, document classification, data entry from forms, report generation, and CRM updates are the most common starting points. If you can describe the steps a person follows to complete a task, it is usually viable. The question is whether ROI justifies the build cost."],
  ["How is this different from Zapier or Make.com?","Zapier and Make are excellent for simple, structured automations between tools with APIs — trigger X in app A, do Y in app B. They break down when inputs are unstructured (PDFs, emails, images), when tasks require judgment or context, or when workflows have complex branching logic with exceptions. AI automation handles these. For many clients the right answer is a combination: Zapier for simple trigger-based flows, custom AI for complex document and communication processing."],
  ["How do you measure ROI on automation projects?","Before starting, we establish baseline metrics: how long the task takes, how often it runs, error rate, and cost of errors. After implementation, we measure against that baseline. Typical results: 70–85% time reduction on document processing, 80–95% on report generation, 3–6 month payback period on most projects."],
  ["Can you integrate with our legacy ERP or on-premise systems?","Usually yes. Modern ERPs have APIs — integration is straightforward. For older systems without APIs, we use database-level integration or, as a last resort, UI automation. We always prefer API-level integration for reliability and maintainability."],
  ["What about DPDP compliance for automation systems?","Under India's DPDP Act 2023, automation pipelines that process personal data require appropriate consent, data minimisation, and the ability to delete a user's data on request. For fintech (RBI guidelines) and healthcare (DISHA, ABDM), there are additional sector-specific requirements. We build these obligations into the automation architecture from the start."],
  ["How long does an automation project take?","Simple document processing or reporting automations: 4–8 weeks. Multi-system workflow automations: 8–16 weeks. AI agent pipelines: 10–20 weeks depending on tools and decision complexity. We give detailed estimates after the process mapping phase — not based on a brief call."],
];

const ROI: [string,string,string][] = [
  ["Invoice processing","70–85%","Time saved per document"],
  ["Email triage & routing","50–70%","Volume handled without human"],
  ["Report generation","80–95%","Time reduction per report"],
  ["CRM data entry","85–95%","Manual entry eliminated"],
  ["KYC document processing","60–80%","Processing time reduction"],
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.crenosoft.in/services/ai-automation/#service",
  name: "AI Automation",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/ai-automation",
  description: metadata.description as string,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "AI Automation",   item: "https://www.crenosoft.in/services/ai-automation" },
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
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>⚡</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>AI Automation</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            Stop paying skilled people to do work a machine should handle. We build intelligent automation systems that run your repetitive operations accurately, reliably, around the clock — connected to the tools you already use.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Get Started →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>Traditional RPA Is Not Enough Anymore</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            RPA tools like UiPath and Blue Prism work well when processes are perfectly predictable and structured. The moment a form layout changes, a PDF arrives in a slightly different format, or an email comes without the expected subject line, the automation breaks and someone has to intervene manually.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            AI automation is different. It handles variation, interprets unstructured inputs using natural language processing, makes judgment calls based on context, and escalates genuinely ambiguous situations to a human — rather than failing silently.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            India&apos;s 63 million SMEs spend an estimated 30–40% of total working hours on tasks that can be automated. For a 20-person company, that is roughly 6 full-time employees doing work that generates no strategic value. Read our full analysis:{" "}
            <Link href="/blog/ai-automation-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Why AI Automation Is India&apos;s Biggest Business Opportunity in 2025 →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Automate</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Six Core Automation Services</h2>
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

      {/* ROI */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:44 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Results</p>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>What Automation Actually Saves</h2>
            <p style={{ fontSize:15,color:"#6e6e73" }}>Typical results from Crenosoft automation projects. We measure baseline before and after every engagement.</p>
          </div>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:0,border:"1px solid #e5e5ea",borderRadius:16,overflow:"hidden" }}>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",background:"#f5f5f7",padding:"14px 20px",borderBottom:"1px solid #e5e5ea" }}>
              <span style={{ fontSize:12,fontWeight:700,color:"#86868b",textTransform:"uppercase" as const,letterSpacing:"0.06em" }}>Task Type</span>
              <span style={{ fontSize:12,fontWeight:700,color:"#86868b",textTransform:"uppercase" as const,letterSpacing:"0.06em" }}>Result</span>
              <span style={{ fontSize:12,fontWeight:700,color:"#86868b",textTransform:"uppercase" as const,letterSpacing:"0.06em" }}>What It Means</span>
            </div>
            {ROI.map(([task,result,meaning])=>(
              <div key={task} style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"16px 20px",borderBottom:"1px solid #e5e5ea",background:"#fff" }}>
                <span style={{ fontSize:14,color:"#1d1d1f",fontWeight:500 }}>{task}</span>
                <span style={{ fontSize:14,color:"#3d3d3d",fontWeight:700 }}>{result}</span>
                <span style={{ fontSize:13,color:"#6e6e73" }}>{meaning}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:13,color:"#86868b",textAlign:"center" as const,marginTop:16 }}>Most projects pay back within 3–6 months when total labour cost, error cost, and speed-to-process are factored in.</p>
        </div>
      </section>

      {/* Process */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>How We Work</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our Automation Process</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:14 }}>
            {PROCESS.map(([step,title,desc])=>(
              <div key={step as string} style={{ display:"flex",gap:24,background:"#fff",borderRadius:16,padding:"28px 24px",alignItems:"flex-start" }}>
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
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center" as const,marginBottom:48 }}>Frequently Asked Questions</h2>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:0 }}>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section style={{ background:"#f5f5f7",padding:"56px 24px",borderTop:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:20,textAlign:"center" as const }}>Related Reading</p>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:10 }}>
            {([
              ["Why AI Automation Is India's Biggest Business Opportunity in 2025","/blog/ai-automation-india-2025"],
              ["What Are AI Agents? A Plain-Language Guide for Business Leaders","/blog/ai-agent-basics"],
              ["LLM Integration Guide: Building AI Into Business Software","/blog/llm-integration-guide"],
              ["Custom AI Software Development India: Costs, Process & Red Flags","/blog/custom-ai-software-development-india-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b",fontSize:16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background:"#fff",padding:"40px 24px",textAlign:"center" as const,borderBottom:"1px solid #e5e5ea" }}>
        <p style={{ fontSize:13,color:"#86868b",marginBottom:14 }}>Related services</p>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {([["AI Software Development","/services/ai-software-development"],["Cloud Solutions","/services/cloud-solutions"],["Web Development","/services/web-development"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Ready to stop doing work machines should do?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>Tell us which operations are eating your team&apos;s time. We will map the process, identify automation opportunities, and give you a clear estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Consultation →</Link>
      </section>
    </>
  );
}
