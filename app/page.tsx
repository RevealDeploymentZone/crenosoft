import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crenosoft — AI Software Development & Automation Company in India",
  description: "Crenosoft builds AI-powered software, automation systems, web apps, and mobile solutions for businesses across India and globally.",
  alternates: { canonical: "https://www.crenosoft.in" },
};

const SERVICES = [
  { icon:"🤖", title:"AI Software Development", desc:"Custom LLMs, RAG systems, ML models and AI-powered SaaS products — built for production.", href:"/services/ai-software-development" },
  { icon:"⚡", title:"AI Automation", desc:"Intelligent workflows, RPA, and AI agents that eliminate repetitive work and save hours every week.", href:"/services/ai-automation" },
  { icon:"🌐", title:"Web Development", desc:"High-performance websites and web apps with Next.js and React — fast, scalable, SEO-ready.", href:"/services/web-development" },
  { icon:"📱", title:"Mobile App Development", desc:"Native and cross-platform iOS & Android apps that users love and keep coming back to.", href:"/services/mobile-app-development" },
  { icon:"☁️", title:"Cloud Solutions", desc:"End-to-end cloud architecture, migration, and DevOps on AWS, GCP, and Azure.", href:"/services/cloud-solutions" },
  { icon:"🎨", title:"UI/UX Design", desc:"Research-backed, pixel-perfect interfaces that convert visitors into customers.", href:"/services/ui-ux-design" },
];

const STATS: [string,string][] = [["150+","Projects Delivered"],["50+","Happy Clients"],["4+","Years"],["98%","Retention"]];

const TESTIMONIALS = [
  { q:"Crenosoft's AI automation saved our team 30+ hours a week. The ROI was immediate and measurable.", name:"Aditya Sharma", role:"Founder, FinTech Startup" },
  { q:"The web application they built outperformed everything we had before — blazing fast and beautifully designed.", name:"Priya Mehta", role:"CTO, E-commerce Platform" },
  { q:"They turned a complex compliance challenge into an elegant AI solution. Truly exceptional team.", name:"Rahul Verma", role:"Director, Healthcare SaaS" },
];

const WHY: [string,string,string][] = [
  ["🧠","AI-First Approach","Every solution has AI baked in from day one — never bolted on."],
  ["🔒","Security by Design","Enterprise-grade security practices in every line we write."],
  ["👥","Dedicated Teams","A focused, experienced team — not a revolving door of freelancers."],
  ["📊","Transparent Process","Weekly sprints, real-time updates, and honest communication."],
];

export default function Home() {
  return (
    <>
      <style>{`
        .sc:hover{transform:translateY(-3px)!important;box-shadow:0 12px 40px rgba(0,0,0,0.09)!important}
        .cta-btn:hover{opacity:.82}
        .cta-ghost:hover{background:#e5e5ea!important}
        @media(max-width:900px){.stat-row{grid-template-columns:repeat(2,1fr)!important}.why-grid{grid-template-columns:1fr!important;gap:40px!important}.testi-row{grid-template-columns:1fr!important}}
        @media(max-width:700px){.svc-grid{grid-template-columns:1fr!important}.hero-btns{flex-direction:column!important;align-items:stretch!important}}
      `}</style>

      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"#fff", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"120px 24px 80px", textAlign:"center", position:"relative", overflow:"hidden", borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 50% at 50% 0%, #f5f5f7, transparent)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1, maxWidth:820 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#f5f5f7", border:"1px solid #d2d2d7", borderRadius:100, padding:"6px 16px", marginBottom:40 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#3d3d3d", display:"block" }}/>
            <span style={{ fontSize:12, color:"#6e6e73", fontWeight:500, letterSpacing:"0.04em" }}>India&apos;s AI-First Software Company</span>
          </div>
          <h1 style={{ fontSize:"clamp(44px,8vw,88px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.045em", lineHeight:1.04, marginBottom:24 }}>
            We Build Software<br/>
            <span style={{ color:"#86868b" }}>That Thinks.</span>
          </h1>
          <p style={{ fontSize:"clamp(16px,2.2vw,20px)", color:"#6e6e73", maxWidth:560, margin:"0 auto 48px", lineHeight:1.65 }}>
            From AI automation and LLM-powered apps to world-class web and mobile products — your business goals drive every decision we make.
          </p>
          <div className="hero-btns" style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="cta-btn" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1d1d1f", color:"#fff", padding:"14px 28px", borderRadius:100, fontWeight:600, fontSize:15, textDecoration:"none", transition:"opacity 0.2s" }}>
              Start Your Project →
            </Link>
            <Link href="/services" className="cta-ghost" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#f5f5f7", border:"1px solid #d2d2d7", color:"#1d1d1f", padding:"14px 28px", borderRadius:100, fontWeight:500, fontSize:15, textDecoration:"none", transition:"background 0.2s" }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background:"#f5f5f7", borderBottom:"1px solid #e5e5ea" }}>
        <div className="stat-row" style={{ maxWidth:900, margin:"0 auto", padding:"48px 24px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
          {STATS.map(([v,l],i)=>(
            <div key={l} style={{ textAlign:"center", padding:"0 12px", borderRight:i<3?"1px solid #d2d2d7":"none" }}>
              <div style={{ fontSize:"clamp(30px,4vw,44px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em", lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:13, color:"#86868b", marginTop:6, fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background:"#fff", padding:"96px 24px" }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#86868b", letterSpacing:"0.1em", textTransform:"uppercase" as const, marginBottom:12 }}>What We Do</p>
            <h2 style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em", lineHeight:1.06, marginBottom:16 }}>Services Built for the AI Era</h2>
            <p style={{ fontSize:18, color:"#6e6e73", maxWidth:480, margin:"0 auto", lineHeight:1.6 }}>Every service designed to give your business a genuine competitive edge.</p>
          </div>
          <div className="svc-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {SERVICES.map(s=>(
              <Link key={s.href} href={s.href} className="sc" style={{ background:"#f5f5f7", borderRadius:20, padding:"32px 28px", border:"1px solid rgba(0,0,0,0.05)", textDecoration:"none", display:"block", transition:"transform 0.28s,box-shadow 0.28s" }}>
                <div style={{ fontSize:32, marginBottom:20 }}>{s.icon}</div>
                <h3 style={{ fontSize:18, fontWeight:700, color:"#1d1d1f", marginBottom:10, letterSpacing:"-0.025em" }}>{s.title}</h3>
                <p style={{ fontSize:14, color:"#6e6e73", lineHeight:1.65, marginBottom:20 }}>{s.desc}</p>
                <span style={{ fontSize:13, fontWeight:600, color:"#3d3d3d" }}>Learn more →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:48 }}>
            <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1d1d1f", color:"#fff", padding:"14px 28px", borderRadius:100, fontWeight:600, fontSize:14, textDecoration:"none" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CRENOSOFT */}
      <section style={{ background:"#f5f5f7", padding:"96px 24px" }}>
        <div className="why-grid" style={{ maxWidth:1160, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <div>
            <p style={{ fontSize:12, fontWeight:700, color:"#86868b", letterSpacing:"0.1em", textTransform:"uppercase" as const, marginBottom:12 }}>Why Crenosoft</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:20 }}>Software that scales with your ambition</h2>
            <p style={{ fontSize:16, color:"#6e6e73", lineHeight:1.75, marginBottom:32 }}>
              We&apos;re not just a vendor — we&apos;re a technology partner. Our team of AI engineers, full-stack developers, and product designers work together to deliver real business outcomes, from startups reaching product-market fit to enterprises modernising legacy systems.
            </p>
            <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:6, color:"#3d3d3d", fontWeight:600, fontSize:14, textDecoration:"none" }}>
              Meet the team →
            </Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {WHY.map(([icon,title,desc])=>(
              <div key={title} style={{ background:"#fff", borderRadius:16, padding:"24px 20px", border:"1px solid #e5e5ea" }}>
                <div style={{ fontSize:24, marginBottom:12 }}>{icon}</div>
                <h3 style={{ fontSize:14, fontWeight:700, color:"#1d1d1f", marginBottom:6 }}>{title}</h3>
                <p style={{ fontSize:13, color:"#6e6e73", lineHeight:1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background:"#fff", padding:"96px 24px" }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#86868b", letterSpacing:"0.1em", textTransform:"uppercase" as const, marginBottom:12 }}>Client Stories</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em" }}>Trusted by builders and businesses</h2>
          </div>
          <div className="testi-row" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {TESTIMONIALS.map(t=>(
              <div key={t.name} style={{ background:"#f5f5f7", borderRadius:20, padding:"32px 28px", border:"1px solid #e5e5ea" }}>
                <div style={{ display:"flex", gap:3, marginBottom:18 }}>{"★★★★★".split("").map((s,i)=><span key={i} style={{ color:"#f59e0b", fontSize:14 }}>{s}</span>)}</div>
                <p style={{ fontSize:15, color:"#1d1d1f", lineHeight:1.7, marginBottom:24, fontStyle:"italic" }}>&ldquo;{t.q}&rdquo;</p>
                <div style={{ fontSize:14, fontWeight:700, color:"#1d1d1f" }}>{t.name}</div>
                <div style={{ fontSize:13, color:"#86868b", marginTop:3 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#f5f5f7", padding:"96px 24px", textAlign:"center", borderTop:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.045em", lineHeight:1.06, marginBottom:20 }}>
            Ready to build something extraordinary?
          </h2>
          <p style={{ fontSize:18, color:"#6e6e73", lineHeight:1.65, marginBottom:48, maxWidth:480, margin:"0 auto 48px" }}>
            Whether you need AI automation, a production web app, or a complete digital product — Crenosoft is the team you want.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="cta-btn" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1d1d1f", color:"#fff", padding:"15px 30px", borderRadius:100, fontWeight:600, fontSize:15, textDecoration:"none", transition:"opacity 0.2s" }}>
              Get a Free Consultation →
            </Link>
            <Link href="/services" className="cta-ghost" style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1px solid #d2d2d7", color:"#1d1d1f", padding:"15px 30px", borderRadius:100, fontWeight:500, fontSize:15, textDecoration:"none", transition:"background 0.2s", background:"#fff" }}>
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
