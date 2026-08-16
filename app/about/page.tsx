import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Target, Lightbulb, Users, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Crenosoft — AI-First Software Company in India",
  description: "Learn about Crenosoft — an AI-first software development company in India. Our story, mission, team, and values that drive us to build software that genuinely changes businesses.",
  alternates: { canonical: "https://www.crenosoft.in/about" },
};

const values = [
  { icon: Target, title: "Outcome-Obsessed", desc: "We care about your results, not just deliverables. Every decision is measured against its impact on your business goals.", color: "#3d3d3d" },
  { icon: Lightbulb, title: "AI-First Thinking", desc: "We don't add AI as a feature. We start by asking how intelligence can fundamentally improve the solution.", color: "#f59e0b" },
  { icon: Heart, title: "Craftsmanship", desc: "Clean code, thoughtful architecture, and attention to detail are the foundation of software that actually lasts.", color: "#ec4899" },
  { icon: Users, title: "Partnership", desc: "Honest communication, shared ownership, and long-term thinking define every client engagement.", color: "#10b981" },
];

const team = [
  { name: "Arjun Kapoor", role: "Founder & CEO", bio: "Full-stack engineer and AI enthusiast with 8+ years building products for startups and enterprises across India and globally.", initials: "AK", color: "#3d3d3d" },
  { name: "Sneha Patel", role: "Head of AI Engineering", bio: "ML engineer with deep expertise in NLP, computer vision, and LLM fine-tuning. Previously at a leading AI research lab.", initials: "SP", color: "#3d3d3d" },
  { name: "Dev Malhotra", role: "Head of Product & Design", bio: "Product designer and strategist who has shipped products used by millions. Passionate about design systems.", initials: "DM", color: "#a855f7" },
  { name: "Kavya Reddy", role: "Head of Engineering", bio: "Backend specialist with expertise in distributed systems, cloud architecture, and building APIs that scale globally.", initials: "KR", color: "#7c3aed" },
];

const milestones = [
  { year: "2022", event: "Crenosoft founded with a team of 4 engineers" },
  { year: "2023", event: "Crossed 50 projects — expanded into AI software development" },
  { year: "2024", event: "Launched AI Automation practice; team grew to 20+" },
  { year: "2025", event: "Serving clients across India, UK, USA, and Southeast Asia" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Crenosoft",
  url: "https://www.crenosoft.in/about",
  mainEntity: { "@type": "Organization", name: "Crenosoft", url: "https://www.crenosoft.in", foundingDate: "2022" },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style>{`
        .tm-card { background:#f5f5f7; border-radius:20px; padding:28px; border:1px solid rgba(0,0,0,0.05); transition:transform 0.3s,box-shadow 0.3s; }
        .tm-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.08); }
        .val-card { background:white; border-radius:20px; padding:28px; border:1px solid rgba(0,0,0,0.07); text-align:center; }
      `}</style>

      {/* Hero — white with subtle top padding */}
      <section style={{ background:"white", paddingTop:120, paddingBottom:80, paddingLeft:24, paddingRight:24, borderBottom:"1px solid #f0f0f0" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:16 }}>About Us</p>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)", fontWeight:700, letterSpacing:-2, lineHeight:1.08, color:"#111", marginBottom:20 }}>
            We&apos;re Crenosoft.<br />
            <span style={{ background:"linear-gradient(135deg,#3d3d3d,#3d3d3d,#a855f7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              We build software that thinks.
            </span>
          </h1>
          <p style={{ fontSize:18, color:"#666", maxWidth:580, margin:"0 auto", lineHeight:1.65 }}>
            An AI-first software company born in India, built for the world. We combine deep technical expertise with genuine business curiosity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background:"#f5f5f7", padding:"80px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:14 }}>Our Mission</p>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)", fontWeight:700, color:"#111", letterSpacing:-1, lineHeight:1.2, marginBottom:20 }}>
              Make AI-powered software accessible to every ambitious business
            </h2>
            <p style={{ fontSize:15, color:"#555", lineHeight:1.75, marginBottom:16 }}>
              For too long, advanced AI and high-quality software were reserved for companies with deep pockets and Silicon Valley addresses. We started Crenosoft to change that.
            </p>
            <p style={{ fontSize:15, color:"#555", lineHeight:1.75, marginBottom:32 }}>
              From a growing e-commerce brand in Chennai to a fintech startup in Bangalore — every business deserves technology that gives them a genuine advantage.
            </p>
            <div style={{ display:"flex", gap:32 }}>
              {[{ v:"150+", l:"Projects" }, { v:"20+", l:"Team members" }, { v:"4+", l:"Countries" }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize:32, fontWeight:700, color:"#3d3d3d", letterSpacing:-1 }}>{s.v}</div>
                  <div style={{ fontSize:13, color:"#888", marginTop:2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:"#111", borderRadius:24, padding:36, color:"white" }}>
            <Globe size={36} style={{ color:"#86868b", marginBottom:16 }} />
            <h3 style={{ fontSize:22, fontWeight:700, marginBottom:12, letterSpacing:-0.5 }}>India-based. Globally trusted.</h3>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.7, marginBottom:24 }}>
              Our team is based across India — a nation producing some of the world&apos;s finest engineers, designers, and AI researchers. We combine the cost advantages of Indian talent with the quality standards of the world&apos;s best product companies.
            </p>
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:6, color:"#86868b", textDecoration:"none", fontWeight:600, fontSize:14 }}>
              Work with us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background:"white", padding:"80px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>What Drives Us</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:700, color:"#111", letterSpacing:-1.2 }}>Our values</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="val-card">
                  <div style={{ width:48, height:48, borderRadius:14, background:`${v.color}15`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                    <Icon size={22} style={{ color:v.color }} />
                  </div>
                  <h3 style={{ fontSize:16, fontWeight:700, color:"#111", marginBottom:8 }}>{v.title}</h3>
                  <p style={{ fontSize:13, color:"#777", lineHeight:1.6 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background:"#f5f5f7", padding:"80px 24px" }} id="team">
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>The People</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:700, color:"#111", letterSpacing:-1.2 }}>Meet the core team</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))", gap:16 }}>
            {team.map((m) => (
              <div key={m.name} className="tm-card">
                <div style={{ width:56, height:56, borderRadius:16, background:m.color, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:18, fontWeight:800, marginBottom:16 }}>
                  {m.initials}
                </div>
                <h3 style={{ fontSize:16, fontWeight:700, color:"#111" }}>{m.name}</h3>
                <p style={{ fontSize:12, color:"#3d3d3d", fontWeight:600, marginBottom:8, marginTop:2 }}>{m.role}</p>
                <p style={{ fontSize:13, color:"#666", lineHeight:1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background:"white", padding:"80px 24px" }}>
        <div style={{ maxWidth:640, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>Our Journey</p>
            <h2 style={{ fontSize:"clamp(24px,3vw,40px)", fontWeight:700, color:"#111", letterSpacing:-1 }}>From founding to global</h2>
          </div>
          <div>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display:"flex", gap:24, paddingBottom:32, borderBottom: i < milestones.length - 1 ? "1px solid #f0f0f0" : "none", marginBottom: i < milestones.length - 1 ? 32 : 0 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#3d3d3d", width:40, flexShrink:0, paddingTop:2 }}>{m.year}</div>
                <p style={{ fontSize:15, color:"#444", lineHeight:1.6 }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section style={{ background:"#f5f5f7", padding:"80px 24px", textAlign:"center" }} id="careers">
        <div style={{ maxWidth:560, margin:"0 auto" }}>
          <Award size={36} style={{ color:"#3d3d3d", marginBottom:16 }} />
          <h2 style={{ fontSize:"clamp(24px,3vw,40px)", fontWeight:700, color:"#111", letterSpacing:-1, marginBottom:16 }}>Join the Crenosoft team</h2>
          <p style={{ fontSize:15, color:"#666", lineHeight:1.7, marginBottom:32 }}>
            We&apos;re always looking for exceptional engineers, designers, and product thinkers excited about AI. Remote-friendly, competitive pay, and real ownership of your work.
          </p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#3d3d3d", color:"white", padding:"13px 28px", borderRadius:50, textDecoration:"none", fontWeight:600, fontSize:15 }}>
            View Open Roles <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
