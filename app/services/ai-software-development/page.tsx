import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Software Development Company India — Custom LLM, RAG, ML | Crenosoft",
  description: "Custom AI software development in India — LLM integrations, RAG systems, ML models, AI agents, and AI-powered SaaS. Production-ready, DPDP-compliant. Based in Lucknow.",
  keywords: ["AI software development India","custom LLM development","RAG system India","AI SaaS development","machine learning company India","AI development Lucknow"],
  alternates: { canonical: "https://www.crenosoft.in/services/ai-software-development" },
};

const CAPS = [
  ["💬","Conversational AI & LLM Applications","Custom AI assistants, knowledge bases, and document analysis tools powered by GPT-4o, Claude 3.5, Gemini 1.5 Pro, and open-source Llama and Mistral models — trained on your business data and integrated into your existing product."],
  ["🔍","RAG Systems & Knowledge Bases","Retrieval-Augmented Generation pipelines that connect LLMs to your documents, contracts, and support history. Accurate, grounded answers — not hallucinations. Built with LangChain or LlamaIndex, Pinecone or pgvector."],
  ["🤖","Autonomous AI Agents","Multi-step agents that reason, plan, and take actions across tools and APIs — research, CRM updates, draft and send — without human intervention at each step. Human-in-the-loop approval gates for high-stakes decisions."],
  ["👁️","Computer Vision","Document OCR, object detection, visual inspection, and image classification using AWS Textract, Google Document AI, and custom PyTorch models. Deployed on your cloud, not third-party SaaS."],
  ["📈","Predictive ML Models","Fraud detection, demand forecasting, churn prediction, loan default scoring — purpose-built models for structured business data using XGBoost, scikit-learn, and PyTorch."],
  ["⚙️","AI-Powered SaaS Products","End-to-end development of B2B and B2C SaaS platforms with AI at the core — AI pipeline, backend API, Next.js web frontend, React Native or Flutter mobile app, and cloud infrastructure together."],
];

const PROCESS = [
  ["01","Data & Discovery","Before writing code, we audit your data — what exists, how clean it is, whether it is sufficient. Most failed AI projects trace back to this question being skipped. We also define measurable success metrics, not just 'the AI should feel smart.'"],
  ["02","Architecture & Proof of Concept","We design the AI pipeline and build a working proof of concept against your actual data — before 3 months of development. This is when we find out whether the approach is viable, not after."],
  ["03","Production Build","Full development with automated evaluation tests on every deployment. We track cost-per-query, latency, and output quality from day one in production, not as an afterthought."],
  ["04","Deploy & Monitor","Deployment on your cloud (AWS, GCP, or Azure) with full observability — dashboards for model performance, cost, and latency. We stay engaged post-launch to tune the system as real usage data comes in."],
];

const FAQS = [
  ["What industries do you build AI software for?","We have built AI solutions for fintech (fraud detection, loan scoring), healthcare (ABDM-compliant diagnostics, patient management), e-commerce (recommendation engines, catalog automation), logistics (route optimization, demand forecasting), and B2B SaaS. AI applies across virtually every sector — our discovery process identifies where the impact is highest."],
  ["Do we need a large dataset to start?","Not always. Foundation models like GPT-4o and Claude come pre-trained on vast datasets. For many use cases, prompt engineering and RAG with your existing documents is sufficient. For custom ML models, we assess during discovery whether you have enough labelled data, and if not, we discuss data collection strategies or synthetic data augmentation."],
  ["How do you prevent the AI from giving wrong answers?","No AI system is 100% accurate. What we do: build evaluation pipelines that measure accuracy against a test set, use RAG to anchor answers in your documents, add structured output validation to catch format errors, and design UI patterns that set appropriate user expectations. We also build human escalation paths for high-stakes decisions."],
  ["How long does an AI project take?","A focused MVP — one core use case, real data, production-ready — is typically 10–16 weeks. Complex systems with custom training and multiple integrations take 4–6 months. We give a detailed timeline after the discovery and proof-of-concept phase, not upfront based on a brief."],
  ["Which AI models do you work with?","We are model-agnostic and recommend based on cost, latency, accuracy, and data privacy requirements. We work with OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet and Opus, Google Gemini 1.5 Pro, and open-source models including Llama 3.1, Mistral, and Phi-3. For data that cannot leave your infrastructure, we deploy open-source models on your own cloud."],
  ["How do you handle DPDP compliance for AI systems?","Under India's DPDP Act 2023, personal data flowing into LLM pipelines requires user consent, PII must be stripped before sending to third-party APIs, and users have the right to erasure. We build consent management, PII redaction, and cascading delete capabilities into the data architecture from the start — not as a retrofit."],
];

const PRICING: [string,string][] = [
  ["AI Chatbot / Knowledge Assistant","₹5–15 lakhs"],
  ["RAG System with Custom Data","₹8–20 lakhs"],
  ["AI-Powered SaaS MVP","₹15–35 lakhs"],
  ["Custom ML Model (prediction/classification)","₹8–25 lakhs"],
  ["Autonomous AI Agent","₹12–30 lakhs"],
  ["Full-Stack AI Platform","₹30–80 lakhs"],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}.price-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 50% -10%,rgba(255,255,255,.1),transparent)",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>🤖</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>AI Software Development</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            Custom, production-ready AI software for Indian businesses — from intelligent chatbots and RAG systems to autonomous agents and AI-powered SaaS. Not demos. Software that runs reliably in production.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Start Your AI Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em",marginBottom:20,lineHeight:1.2 }}>Why Most AI Projects Fail Before They Ship</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Somewhere between the ChatGPT demo that impressed your board and the actual product your customers will use, things tend to go wrong. The model hallucinates. The latency is unacceptable. The outputs are inconsistent. The costs at scale are three times what was budgeted.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The cause is almost never the AI technology itself — it is the lack of production engineering around it. Good AI software needs clean data before anything else, evaluation infrastructure so you know when outputs degrade, cost monitoring from day one, and compliance with India&apos;s{" "}
            <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>DPDP Act 2023</a>{" "}
            designed in from the start.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            Our team has shipped AI systems for fintech, healthcare, logistics, and B2B SaaS companies across India. We know where the traps are because we have hit them, fixed them, and built processes to avoid them on the next project. Read our full breakdown:{" "}
            <Link href="/blog/building-ai-powered-saas-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>How to Build an AI-Powered SaaS Product in India in 2025 →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Our Capabilities</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>What We Build</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our AI Development Process</h2>
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

      {/* Pricing */}
      <section style={{ background:"#f5f5f7",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:44 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Pricing</p>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>AI Development Costs in India</h2>
            <p style={{ fontSize:15,color:"#6e6e73" }}>Indicative ranges based on completed projects. Actual cost depends on data complexity, integrations, and scope. All prices exclude GST.</p>
          </div>
          <div className="price-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
            {PRICING.map(([type,range])=>(
              <div key={type} style={{ background:"#fff",borderRadius:14,padding:"20px 22px",border:"1px solid #e5e5ea",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                <span style={{ fontSize:14,color:"#1d1d1f",fontWeight:500 }}>{type}</span>
                <span style={{ fontSize:14,color:"#3d3d3d",fontWeight:700,whiteSpace:"nowrap" as const }}>{range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize:13,color:"#86868b",textAlign:"center" as const,marginTop:20 }}>
            For a full breakdown see:{" "}
            <Link href="/blog/custom-ai-software-development-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Custom AI Software Development India: Pricing Guide 2025 →</Link>
          </p>
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
            {[
              ["LLM Integration Guide: RAG vs Fine-Tuning, Architecture & DPDP","/blog/llm-integration-guide"],
              ["What Are AI Agents? How Businesses Use Them","/blog/ai-agent-basics"],
              ["Why AI Automation Is India's Biggest Business Opportunity in 2025","/blog/ai-automation-india-2025"],
              ["How to Build an AI-Powered SaaS in India: Architecture, Stack & Costs","/blog/building-ai-powered-saas-india-2025"],
            ].map(([label,href])=>(
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
          {([["AI Automation","/services/ai-automation"],["Cloud Solutions","/services/cloud-solutions"],["Web Development","/services/web-development"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Let&apos;s build your AI product together</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>Tell us your use case. We will review your data, assess feasibility, and give you an honest estimate — no commitment required.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
