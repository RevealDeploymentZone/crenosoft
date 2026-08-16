import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — AI Development, Automation & More | Crenosoft",
  description: "Explore Crenosoft's services: AI software development, AI automation, web development, mobile apps, cloud solutions, and UI/UX design.",
  alternates: { canonical: "https://www.crenosoft.in/services" },
};

const SVCS = [
  { icon:"🤖", title:"AI Software Development", sub:"Build software that learns", desc:"We design and develop custom AI applications — from intelligent chatbots and recommendation engines to computer vision systems and LLM-powered platforms.", href:"/services/ai-software-development", accent:"#3d3d3d", items:["Custom LLM integrations","RAG & knowledge base systems","ML model training & deployment","AI API development"] },
  { icon:"⚡", title:"AI Automation", sub:"Work smarter, not harder", desc:"Repetitive tasks cost your team time and money. We build intelligent automation pipelines that handle data entry, report generation, workflows, and more.", href:"/services/ai-automation", accent:"#f59e0b", items:["RPA & intelligent agents","Workflow automation","Data extraction & processing","AI-driven decisions"] },
  { icon:"🌐", title:"Web Development", sub:"Fast, scalable, conversion-ready", desc:"From marketing sites to complex SaaS platforms, we build high-performance web applications using Next.js, React, and modern backend technologies.", href:"/services/web-development", accent:"#06b6d4", items:["Next.js & React applications","SEO-optimised architecture","Headless CMS integration","API design & development"] },
  { icon:"📱", title:"Mobile App Development", sub:"Native quality, cross-platform efficiency", desc:"Crenosoft builds iOS and Android apps that users love. Using React Native and Flutter for cross-platform delivery, or Swift/Kotlin for native performance.", href:"/services/mobile-app-development", accent:"#10b981", items:["iOS & Android apps","React Native & Flutter","App Store optimisation","Offline-first architecture"] },
  { icon:"☁️", title:"Cloud Solutions", sub:"Scalable infrastructure, zero downtime", desc:"Cloud architecture, migration, and managed services on AWS, GCP, and Azure. We optimise for cost, reliability, and the speed your product demands.", href:"/services/cloud-solutions", accent:"#3b82f6", items:["Cloud migration & lift-shift","Kubernetes & containers","DevOps & CI/CD pipelines","Cost optimisation"] },
  { icon:"🎨", title:"UI/UX Design", sub:"Design that converts and delights", desc:"Our design team creates intuitive, pixel-perfect interfaces backed by user research, competitor analysis, and proven design principles.", href:"/services/ui-ux-design", accent:"#ec4899", items:["User research & personas","Wireframing & prototyping","Design system creation","Usability testing"] },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .sv:hover{transform:translateY(-3px)!important;box-shadow:0 12px 40px rgba(0,0,0,.09)!important}
        @media(max-width:700px){.sv-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#fff",paddingTop:120,paddingBottom:64,paddingLeft:24,paddingRight:24,borderBottom:"1px solid #e5e5ea",textAlign:"center" }}>
        <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:14 }}>What We Do</p>
        <h1 style={{ fontSize:"clamp(36px,6vw,68px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:18 }}>
          Services for every stage<br/>of your journey
        </h1>
        <p style={{ fontSize:18,color:"#6e6e73",maxWidth:480,margin:"0 auto",lineHeight:1.6 }}>
          From your first AI prototype to enterprise-scale automation — Crenosoft has the expertise to take you there.
        </p>
      </section>

      {/* Services grid */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div className="sv-grid" style={{ maxWidth:1160,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
          {SVCS.map(s=>(
            <Link key={s.href} href={s.href} className="sv" style={{ background:"#fff",borderRadius:20,padding:"36px 30px",border:"1px solid rgba(0,0,0,0.06)",textDecoration:"none",display:"block",transition:"transform 0.28s,box-shadow 0.28s" }}>
              <div style={{ fontSize:36,marginBottom:20 }}>{s.icon}</div>
              <div style={{ fontSize:12,fontWeight:700,color:s.accent,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:8 }}>{s.sub}</div>
              <h2 style={{ fontSize:20,fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>{s.title}</h2>
              <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65,marginBottom:20 }}>{s.desc}</p>
              <ul style={{ listStyle:"none",paddingLeft:0,marginBottom:24,display:"flex",flexDirection:"column",gap:7 }}>
                {s.items.map(it=>(
                  <li key={it} style={{ display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#1d1d1f" }}>
                    <span style={{ width:16,height:16,borderRadius:"50%",background:`${s.accent}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:9 }}>✓</span>
                    {it}
                  </li>
                ))}
              </ul>
              <span style={{ fontSize:13,fontWeight:600,color:s.accent }}>Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" }}>
        <div style={{ maxWidth:560,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:16 }}>Not sure which service you need?</h2>
          <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,lineHeight:1.6 }}>Book a free 30-minute discovery call. We&apos;ll listen first, then recommend the right path forward.</p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"14px 28px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>
            Book Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
