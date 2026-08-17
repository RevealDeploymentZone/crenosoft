import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve — Fintech, Healthcare, E-commerce, Logistics, EdTech, SaaS",
  description: "Crenosoft builds custom AI software, web apps, and automation systems for fintech, healthcare, e-commerce, logistics, EdTech, and B2B SaaS companies in India.",
  alternates: { canonical: "https://www.crenosoft.in/industries" },
};

const INDUSTRIES = [
  { icon:"🏦", name:"Fintech", slug:"fintech", desc:"Payment platforms, lending systems, fraud detection, and RBI-compliant financial software for Indian banks, NBFCs, and fintech startups.", tags:["RBI Compliance","PCI-DSS","UPI Integration","Fraud Detection"] },
  { icon:"🏥", name:"Healthcare", slug:"healthcare", desc:"ABDM-compliant patient management, telemedicine platforms, diagnostic AI, and healthcare SaaS built to DISHA and NMC standards.", tags:["ABDM","Telemedicine","EHR","Diagnostic AI"] },
  { icon:"🛒", name:"E-commerce & D2C", slug:"ecommerce", desc:"Custom storefronts, UPI payment integration, inventory automation, and AI recommendation engines for Indian D2C brands and marketplaces.", tags:["UPI Payments","Inventory AI","WhatsApp Commerce","Custom Storefront"] },
  { icon:"🚚", name:"Logistics", slug:"logistics", desc:"Route optimization, fleet tracking, warehouse automation, and demand forecasting for logistics companies and supply chain operators across India.", tags:["Route Optimization","Fleet Tracking","Warehouse AI","Demand Forecasting"] },
  { icon:"🎓", name:"EdTech", slug:"edtech", desc:"Learning management systems, adaptive assessments, AI tutors, and live class infrastructure for India's growing education technology market.", tags:["LMS","AI Tutor","Live Classes","Adaptive Learning"] },
  { icon:"⚙️", name:"B2B SaaS", slug:"b2b-saas", desc:"Full-stack product development for Indian and global SaaS founders — web, mobile, AI features, and cloud infrastructure under one roof.", tags:["Multi-tenancy","Billing","AI Features","Scalable Backend"] },
];

export default function Page() {
  return (
    <>
      <style>{`
        .ind-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 40px rgba(0,0,0,0.09)!important}
        @media(max-width:900px){.ind-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.ind-grid{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",border:"1px solid #d2d2d7",borderRadius:100,padding:"6px 16px",marginBottom:32 }}>
            <span style={{ fontSize:12,color:"#6e6e73",fontWeight:500,letterSpacing:"0.04em" }}>Industry-Specific Software Development</span>
          </div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Industries We Work With</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            We build software for Indian businesses that operate in regulated, high-stakes industries — where technical decisions have real consequences and compliance is not optional.
          </p>
        </div>
      </section>

      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div className="ind-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {INDUSTRIES.map(ind=>(
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="ind-card" style={{ background:"#f5f5f7",borderRadius:20,padding:"36px 28px",border:"1px solid rgba(0,0,0,0.05)",textDecoration:"none",display:"block",transition:"transform 0.28s,box-shadow 0.28s" }}>
                <div style={{ fontSize:40,marginBottom:20 }}>{ind.icon}</div>
                <h2 style={{ fontSize:20,fontWeight:700,color:"#1d1d1f",marginBottom:12,letterSpacing:"-0.025em" }}>{ind.name}</h2>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65,marginBottom:20 }}>{ind.desc}</p>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6,marginBottom:20 }}>
                  {ind.tags.map(tag=>(
                    <span key={tag} style={{ background:"#fff",border:"1px solid #d2d2d7",borderRadius:100,padding:"3px 10px",fontSize:11,color:"#3d3d3d",fontWeight:500 }}>{tag}</span>
                  ))}
                </div>
                <span style={{ fontSize:13,fontWeight:600,color:"#3d3d3d" }}>Explore {ind.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#1d1d1f",padding:"80px 24px",textAlign:"center" }}>
        <div style={{ maxWidth:600,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#fff",letterSpacing:"-0.04em",marginBottom:16 }}>Your industry not listed?</h2>
          <p style={{ fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.65,marginBottom:36 }}>We work across sectors. If you have a software problem, let&apos;s talk — we will tell you honestly whether we are the right fit.</p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#1d1d1f",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
