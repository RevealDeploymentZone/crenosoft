import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crenosoft — AI Software Development & Automation Company in India",
  description: "Crenosoft builds AI-powered software, automation systems, web apps, and mobile products for Indian startups and enterprises. Custom AI development company based in Lucknow, India.",
  alternates: { canonical: "https://www.crenosoft.in" },
};

const SERVICES = [
  { icon:"🤖", title:"AI Software Development", desc:"Custom LLMs, RAG systems, ML models and AI-powered SaaS products — built for production. We work with OpenAI, Anthropic, Google Gemini, and open-source models like Llama and Mistral.", href:"/services/ai-software-development", blogLabel:"How to build AI SaaS in India →", blogHref:"/blog/building-ai-powered-saas-india-2025" },
  { icon:"⚡", title:"AI Automation", desc:"Intelligent document processing, email triage, and multi-step AI agents that eliminate repetitive work — connected to your existing tools like Salesforce, Tally, and Google Workspace.", href:"/services/ai-automation", blogLabel:"AI automation opportunity in India →", blogHref:"/blog/ai-automation-india-2025" },
  { icon:"🌐", title:"Web Development", desc:"High-performance web apps with Next.js and React — SEO-ready with Core Web Vitals built in from day one. Our clients see 20–40% organic traffic increases within 90 days of launch.", href:"/services/web-development", blogLabel:"Why Next.js wins for SEO in 2025 →", blogHref:"/blog/nextjs-seo-2025" },
  { icon:"📱", title:"Mobile App Development", desc:"Native iOS & Android and cross-platform apps with React Native and Flutter — built and tested on real Indian Android devices, including entry-level Redmi and Realme hardware.", href:"/services/mobile-app-development", blogLabel:"React Native vs Flutter 2025 →", blogHref:"/blog/react-native-vs-flutter" },
  { icon:"☁️", title:"Cloud Solutions", desc:"Cloud architecture, migration, and DevOps on AWS, GCP, and Azure — including AWS Mumbai (ap-south-1) for DPDP compliance. We have cut AWS bills by 40–60% after infrastructure audits.", href:"/services/cloud-solutions", blogLabel:"Cloud migration guide for Indian startups →", blogHref:"/blog/cloud-migration-guide-indian-startups-2025" },
  { icon:"🎨", title:"UI/UX Design", desc:"Research-backed design for Indian users — from Figma wireframes to production-ready design systems and developer handoff documentation. We design for thumb zones, Tier 2 devices, and multilingual users.", href:"/services/ui-ux-design", blogLabel:"UI/UX design trends in India 2025 →", blogHref:"/blog/ui-ux-design-trends-2025-india" },
];

const STATS: [string,string][] = [["150+","Projects Delivered"],["50+","Clients India & Abroad"],["4+","Years Building"],["98%","Retention Rate"]];

const TESTIMONIALS = [
  { q:"The AI automation Crenosoft built handles what used to take our team 35 hours a week. It runs overnight, and by morning everything is processed. The payback period was under 4 months.", name:"Aditya Sharma", role:"Founder, FinTech Startup" },
  { q:"We migrated to Next.js App Router with Crenosoft and went from a PageSpeed score of 41 to 94. Organic traffic is up 37% since launch. Their team actually cares about the outcome, not just the invoice.", name:"Priya Mehta", role:"CTO, E-commerce Platform" },
  { q:"They navigated DPDP compliance requirements without us having to explain them. The enterprise security review that used to take 3 months was cleared in 3 weeks because the architecture was already right.", name:"Rahul Verma", role:"Director, Healthcare SaaS" },
];

const WHY: [string,string,string][] = [
  ["🧠","AI engineers who have shipped in production","Building an AI demo is easy. Building an AI product that stays accurate over time, handles edge cases, and does not hallucinate in front of your customers is genuinely hard. We have done it for fintech, healthcare, and logistics companies across India."],
  ["🔒","Compliance built in, not bolted on","We understand DPDP Act requirements, RBI guidelines for fintech, and ABDM standards for healthcare. Indian regulatory compliance is part of the architecture from day one — not a remediation project 6 months after launch."],
  ["👥","No revolving door of freelancers","You get a dedicated team — the same engineers from discovery to launch. Every project is tracked with full client visibility. No monthly status calls where nothing has moved."],
  ["📊","We tell you when you do not need us","If a cheaper tool does the job, we say so. If your MVP scope is too large for your timeline, we re-scope it honestly. Clients stay because they trust us, not because they are locked in."],
];

const INDUSTRIES = [
  ["Fintech","Payment platforms, lending systems, fraud detection — built to RBI guidelines and PCI-DSS standards."],
  ["Healthcare","ABDM-compliant patient management, telemedicine, and diagnostic AI — following DISHA and NMC requirements."],
  ["E-commerce & D2C","Custom storefronts, UPI payment integration, inventory automation, and AI recommendation engines."],
  ["Logistics","Route optimization, fleet tracking, warehouse automation, and demand forecasting."],
  ["EdTech","Learning management systems, adaptive assessments, AI tutors, and live class infrastructure."],
  ["B2B SaaS","Full-stack product development for Indian and global SaaS founders — web, mobile, AI, and cloud under one roof."],
];

const BLOG_POSTS: [string,string][] = [
  ["How to Build an AI-Powered SaaS Product in India in 2025","/blog/building-ai-powered-saas-india-2025"],
  ["LLM Integration Guide: What Works in Production","/blog/llm-integration-guide"],
  ["What Are AI Agents? A Plain-Language Business Guide","/blog/ai-agent-basics"],
  ["React Native vs Flutter: The Honest 2025 Comparison","/blog/react-native-vs-flutter"],
  ["Next.js SEO in 2025: App Router and Core Web Vitals","/blog/nextjs-seo-2025"],
  ["Cloud Migration for Indian Startups: The Complete Guide","/blog/cloud-migration-guide-indian-startups-2025"],
];

export default function Home() {
  return (
    <>
      <style>{`
        .sc:hover{transform:translateY(-3px)!important;box-shadow:0 12px 40px rgba(0,0,0,0.09)!important}
        .cta-btn:hover{opacity:.82}
        .cta-ghost:hover{background:#e5e5ea!important}
        .blog-link:hover{background:#f0f0f0!important}
        @media(max-width:900px){.stat-row{grid-template-columns:repeat(2,1fr)!important}.testi-row{grid-template-columns:1fr!important}.why-grid{grid-template-columns:1fr!important}.ind-grid{grid-template-columns:1fr 1fr!important}.blog-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:700px){.svc-grid{grid-template-columns:1fr!important}.hero-btns{flex-direction:column!important;align-items:stretch!important}.ind-grid{grid-template-columns:1fr!important}.blog-grid{grid-template-columns:1fr!important}}
        @media(max-width:767px){.sec-pad{padding-top:52px!important;padding-bottom:52px!important}.sec-pad-sm{padding-top:40px!important;padding-bottom:40px!important}}
      `}</style>

      {/* HERO */}
      <section style={{ minHeight:"100vh",background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(80px,12vw,120px) 20px clamp(48px,8vw,80px)",textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 50% at 50% 0%, #f5f5f7, transparent)",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:820 }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#f5f5f7",border:"1px solid #d2d2d7",borderRadius:100,padding:"6px 16px",marginBottom:40 }}>
            <span style={{ width:7,height:7,borderRadius:"50%",background:"#3d3d3d",display:"block" }}/>
            <span style={{ fontSize:12,color:"#6e6e73",fontWeight:500,letterSpacing:"0.04em" }}>AI-First Software Development — India</span>
          </div>
          <h1 style={{ fontSize:"clamp(44px,8vw,88px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.045em",lineHeight:1.04,marginBottom:24 }}>
            We Build Software<br/>
            <span style={{ color:"#86868b" }}>That Thinks.</span>
          </h1>
          <p style={{ fontSize:"clamp(16px,2.2vw,20px)",color:"#6e6e73",maxWidth:580,margin:"0 auto 48px",lineHeight:1.65 }}>
            Custom AI software, automation systems, web apps, and mobile products for Indian startups and enterprises. 150+ projects shipped since 2022.
          </p>
          <div className="hero-btns" style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
            <Link href="/contact" className="cta-btn" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#1d1d1f",color:"#fff",padding:"12px 24px",borderRadius:100,fontWeight:600,fontSize:14,textDecoration:"none",transition:"opacity 0.2s" }}>
              Start Your Project →
            </Link>
            <Link href="/services" className="cta-ghost" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#f5f5f7",border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"14px 28px",borderRadius:100,fontWeight:500,fontSize:15,textDecoration:"none",transition:"background 0.2s" }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background:"#f5f5f7",borderBottom:"1px solid #e5e5ea" }}>
        <div className="stat-row" style={{ maxWidth:900,margin:"0 auto",padding:"48px 24px",display:"grid",gridTemplateColumns:"repeat(4,1fr)" }}>
          {STATS.map(([v,l],i)=>(
            <div key={l} style={{ textAlign:"center",padding:"0 12px",borderRight:i<3?"1px solid #d2d2d7":"none" }}>
              <div style={{ fontSize:"clamp(30px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:13,color:"#86868b",marginTop:6,fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="sec-pad-sm" style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:800,margin:"0 auto",textAlign:"center" }}>
          <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:16 }}>Who We Are</p>
          <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.1,marginBottom:28 }}>
            Built for Founders and Product Teams<br/>Who Are Done With Mediocre Software
          </h2>
          <p style={{ fontSize:17,color:"#6e6e73",lineHeight:1.78,marginBottom:18,maxWidth:700,margin:"0 auto 18px" }}>
            We are a software development company based in Lucknow, India, working with startups and businesses across India, the US, and the Middle East. Our team of engineers, AI specialists, and designers has shipped 150+ products since 2022 — from early-stage MVPs to enterprise platforms processing millions of transactions every month.
          </p>
          <p style={{ fontSize:17,color:"#6e6e73",lineHeight:1.78,marginBottom:36,maxWidth:700,margin:"0 auto 36px" }}>
            Most software agencies promise the world and deliver a demo. We operate differently. Every project at Crenosoft starts with understanding your business problem first, then picking the right technology to solve it. No fads, no inflated scopes, no disappearing after launch.
          </p>
          <Link href="/about" style={{ display:"inline-flex",alignItems:"center",gap:6,color:"#3d3d3d",fontWeight:600,fontSize:14,textDecoration:"none",borderBottom:"1px solid #d2d2d7",paddingBottom:2 }}>
            Learn how Crenosoft operates →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec-pad" style={{ background:"#f5f5f7",padding:"96px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(32px,5vw,56px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:16 }}>Services Built for the AI Era</h2>
            <p style={{ fontSize:18,color:"#6e6e73",maxWidth:520,margin:"0 auto",lineHeight:1.6 }}>We cover the full stack — AI, web, mobile, cloud, and design. Most clients start with one service and stay because we can handle everything.</p>
          </div>
          <div className="svc-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {SERVICES.map(s=>(
              <div key={s.href} className="sc" style={{ background:"#fff",borderRadius:20,padding:"32px 28px",border:"1px solid rgba(0,0,0,0.05)",display:"block",transition:"transform 0.28s,box-shadow 0.28s" }}>
                <div style={{ fontSize:32,marginBottom:20 }}>{s.icon}</div>
                <h3 style={{ fontSize:18,fontWeight:700,color:"#1d1d1f",marginBottom:10,letterSpacing:"-0.025em" }}>{s.title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65,marginBottom:20 }}>{s.desc}</p>
                <div style={{ display:"flex",flexDirection:"column" as const,gap:8 }}>
                  <Link href={s.href} style={{ fontSize:13,fontWeight:600,color:"#3d3d3d",textDecoration:"none" }}>Explore service →</Link>
                  <Link href={s.blogHref} style={{ fontSize:12,color:"#86868b",textDecoration:"none" }}>{s.blogLabel}</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center",marginTop:48 }}>
            <Link href="/services" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#1d1d1f",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:14,textDecoration:"none" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CRENOSOFT */}
      <section className="sec-pad" style={{ background:"#fff",padding:"96px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Why Crenosoft</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.1,marginBottom:16 }}>What makes working with us different</h2>
            <p style={{ fontSize:17,color:"#6e6e73",maxWidth:520,margin:"0 auto",lineHeight:1.65 }}>There are hundreds of software agencies in India. Here is what separates the ones who actually ship from the ones who stall.</p>
          </div>
          <div className="why-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16 }}>
            {WHY.map(([icon,title,desc])=>(
              <div key={title} style={{ background:"#f5f5f7",borderRadius:20,padding:"32px 28px",border:"1px solid #e5e5ea" }}>
                <div style={{ fontSize:28,marginBottom:16 }}>{icon}</div>
                <h3 style={{ fontSize:17,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sec-pad-sm" style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Industries</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.1 }}>Industries We Work With</h2>
          </div>
          <div className="ind-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {INDUSTRIES.map(([name,desc])=>(
              <div key={name} style={{ background:"#fff",borderRadius:16,padding:"24px 22px",border:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:15,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{name}</h3>
                <p style={{ fontSize:13,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec-pad" style={{ background:"#fff",padding:"96px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Client Stories</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>What our clients say</h2>
          </div>
          <div className="testi-row" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {TESTIMONIALS.map(t=>(
              <div key={t.name} style={{ background:"#f5f5f7",borderRadius:20,padding:"32px 28px",border:"1px solid #e5e5ea" }}>
                <div style={{ display:"flex",gap:3,marginBottom:18 }}>{"★★★★★".split("").map((s,i)=><span key={i} style={{ color:"#f59e0b",fontSize:14 }}>{s}</span>)}</div>
                <p style={{ fontSize:15,color:"#1d1d1f",lineHeight:1.7,marginBottom:24,fontStyle:"italic" }}>&ldquo;{t.q}&rdquo;</p>
                <div style={{ fontSize:14,fontWeight:700,color:"#1d1d1f" }}>{t.name}</div>
                <div style={{ fontSize:13,color:"#86868b",marginTop:3 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG RESOURCES */}
      <section className="sec-pad-sm" style={{ background:"#f5f5f7",padding:"80px 24px",borderTop:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#86868b",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Resources</p>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em",marginBottom:12 }}>Guides for Builders</h2>
            <p style={{ fontSize:16,color:"#6e6e73" }}>Practical, detailed guides on the decisions Indian founders and engineering teams actually face. No generic thought-leadership.</p>
          </div>
          <div className="blog-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12 }}>
            {BLOG_POSTS.map(([title,href])=>(
              <Link key={href} href={href} className="blog-link" style={{ background:"#fff",borderRadius:14,padding:"22px 20px",border:"1px solid #e5e5ea",textDecoration:"none",display:"flex",alignItems:"flex-start",gap:12,transition:"background 0.2s" }}>
                <span style={{ fontSize:16,marginTop:1,color:"#86868b",flexShrink:0 }}>→</span>
                <span style={{ fontSize:14,fontWeight:500,color:"#1d1d1f",lineHeight:1.5 }}>{title}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign:"center",marginTop:36 }}>
            <Link href="/blog" style={{ display:"inline-flex",alignItems:"center",gap:6,border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"10px 22px",borderRadius:100,fontWeight:500,fontSize:13,textDecoration:"none" }}>
              Read All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-pad" style={{ background:"#1d1d1f",padding:"96px 24px",textAlign:"center" }}>
        <div style={{ maxWidth:680,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(32px,5vw,56px)",fontWeight:700,color:"#fff",letterSpacing:"-0.045em",lineHeight:1.06,marginBottom:20 }}>
            Got a project in mind?
          </h2>
          <p style={{ fontSize:18,color:"rgba(255,255,255,0.65)",lineHeight:1.65,maxWidth:480,margin:"0 auto 48px" }}>
            Free 45-minute discovery call. We look at your product, ask the questions that matter, and give honest feedback — whether we are the right fit or not.
          </p>
          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
            <Link href="/contact" className="cta-btn" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#1d1d1f",padding:"15px 30px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none",transition:"opacity 0.2s" }}>
              Book Free Consultation →
            </Link>
            <Link href="/services" style={{ display:"inline-flex",alignItems:"center",gap:8,border:"1px solid rgba(255,255,255,0.2)",color:"#fff",padding:"15px 30px",borderRadius:100,fontWeight:500,fontSize:15,textDecoration:"none" }}>
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
