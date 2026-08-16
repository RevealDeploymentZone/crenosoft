import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Software Development Services India — Crenosoft",
  description: "Custom AI software development — LLM integrations, RAG systems, ML models, computer vision, and AI-powered SaaS products built for production in India.",
  keywords: ["AI software development India","custom AI solutions","LLM development","machine learning development","generative AI development"],
  alternates: { canonical: "https://www.crenosoft.in/services/ai-software-development" },
};

const CAPS = [
  ["💬","Conversational AI & Chatbots","Production-grade AI assistants powered by GPT-4, Claude, Gemini, and open-source LLMs — trained on your business data."],
  ["🧠","LLM Integration & Fine-tuning","Seamlessly embed large language models into your stack with RAG pipelines, vector databases, and prompt engineering."],
  ["👁️","Computer Vision","Automate visual inspection, object detection, document parsing, and image classification."],
  ["📈","Predictive Analytics","Build predictive models for sales forecasting, churn prediction, fraud detection, and more."],
  ["⚙️","AI-Powered SaaS","End-to-end development of B2B and B2C SaaS platforms with AI features at the core."],
  ["🤖","AI Agents","Autonomous AI agents that reason, plan, and act across tools and APIs to complete complex tasks."],
];

const PROCESS = [
  ["01","Discovery & Scoping","We dig into your use case, data assets, and success metrics to define a clear AI strategy."],
  ["02","Architecture & Design","Our engineers design the model selection, data pipeline, and integration architecture."],
  ["03","Build & Iterate","Rapid development cycles with continuous evaluation against real business benchmarks."],
  ["04","Deploy & Monitor","Production deployment with monitoring, alerting, and ongoing model maintenance."],
];

const FAQS = [
  ["What industries do you build AI software for?","We've built AI solutions for fintech, healthcare, e-commerce, legal, education, and logistics. AI applies across virtually every industry — our discovery process identifies the highest-impact opportunities."],
  ["Do I need a large dataset to start?","Not always. We can leverage foundation models, synthetic data, or transfer learning to achieve strong results even with limited data."],
  ["How long does an AI project take?","A focused MVP is ready in 6–10 weeks. Complex systems with custom training typically take 3–6 months. We'll give you a clear timeline after discovery."],
  ["Which AI models do you work with?","We're model-agnostic. We recommend the best fit based on cost, latency, accuracy, and privacy. We work with OpenAI, Anthropic, Google, Meta (Llama), Mistral, and more."],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:700px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 50% -10%,rgba(255,255,255,.1),transparent)",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>🤖</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>AI Software Development</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:520,margin:"0 auto 40px",lineHeight:1.65 }}>
            Custom, production-ready AI software that solves real business problems — from intelligent chatbots to computer vision systems.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Start Your AI Project →
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12 }}>Our Capabilities</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>What we build</h2>
          </div>
          <div className="cap-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {CAPS.map(([icon,title,desc])=>(
              <div key={title as string} className="cp-card" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,0.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12 }}>How We Work</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our AI development process</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
            {PROCESS.map(([step,title,desc])=>(
              <div key={step as string} style={{ display:"flex",gap:24,background:"#f5f5f7",borderRadius:16,padding:"28px 24px",alignItems:"flex-start" }}>
                <div style={{ fontSize:28,fontWeight:900,color:"#e5e5ea",flexShrink:0,lineHeight:1,width:40,textAlign:"center" }}>{step}</div>
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
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center",marginBottom:48 }}>Frequently asked questions</h2>
          <div style={{ display:"flex",flexDirection:"column",gap:0 }}>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background:"#fff",padding:"40px 24px",textAlign:"center",borderBottom:"1px solid #e5e5ea" }}>
        <p style={{ fontSize:13,color:"#86868b",marginBottom:14 }}>Related services</p>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {[["AI Automation","/services/ai-automation"],["Cloud Solutions","/services/cloud-solutions"],["Web Development","/services/web-development"]].map(([n,h])=>(
            <Link key={h} href={h as string} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n as string} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Let&apos;s build your AI product together</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32 }}>Book a free discovery call — no pressure, no jargon.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Consultation →</Link>
      </section>
    </>
  );
}
