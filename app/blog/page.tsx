import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI, Software Development & Technology Insights",
  description: "Expert insights on AI software development, automation trends, web development best practices, and technology strategy for Indian businesses.",
  alternates: { canonical: "https://www.crenosoft.in/blog" },
};

const posts = [
  { slug:"ai-automation-india-2025", title:"Why AI Automation is the Biggest Business Opportunity in India Right Now", excerpt:"Indian businesses are sitting on a goldmine of operational efficiency gains. Here's how AI automation is redefining what's possible — and why 2025 is the year to act.", category:"AI Automation", categoryColor:"#f59e0b", date:"August 10, 2025", readTime:"6 min", featured:true },
  { slug:"custom-ai-software-development-india-2025", title:"Custom AI Software Development for Indian Businesses: The Complete 2025 Guide", excerpt:"Everything Indian startups and enterprises need to know before investing in custom AI — from RAG vs fine-tuning to realistic cost breakdowns and vendor red flags.", category:"AI Development", categoryColor:"#3d3d3d", date:"August 16, 2025", readTime:"10 min", featured:false },
  { slug:"ui-ux-design-trends-2025-india", title:"UI/UX Design Trends Dominating 2025: A Complete Guide for Indian Businesses", excerpt:"From AI-generated interfaces to accessibility-first design and voice UX — the shifts in user expectations that are separating high-performing Indian digital products.", category:"UI/UX Design", categoryColor:"#8b5cf6", date:"August 16, 2025", readTime:"9 min", featured:false },
  { slug:"cloud-migration-guide-indian-startups-2025", title:"Cloud Migration for Indian Startups: A Complete Step-by-Step Guide for 2025", excerpt:"A practical, jargon-free guide to cloud migration — covering the 6 Rs, AWS vs Azure vs GCP for India, cost breakdowns in INR, DPDP compliance, and common mistakes.", category:"Cloud", categoryColor:"#3b82f6", date:"August 16, 2025", readTime:"11 min", featured:false },
  { slug:"llm-integration-guide", title:"A Practical Guide to Integrating LLMs into Your Business Software", excerpt:"Not sure how to add AI intelligence to your existing tools? This step-by-step guide walks through key decisions — from model selection to production deployment.", category:"AI Development", categoryColor:"#3d3d3d", date:"July 28, 2025", readTime:"8 min", featured:false },
  { slug:"nextjs-seo-2025", title:"Next.js in 2025: Why It's Still the Best Choice for SEO-Focused Web Apps", excerpt:"Server components, streaming, and App Router — how Next.js 14+ has become the gold standard for performance and search visibility.", category:"Web Development", categoryColor:"#06b6d4", date:"July 15, 2025", readTime:"5 min", featured:false },
  { slug:"ai-agent-basics", title:"What Are AI Agents and How Can They Automate Your Business Workflows?", excerpt:"AI agents can browse the web, write code, and complete complex tasks autonomously. We break down how they work — in plain language.", category:"AI Automation", categoryColor:"#f59e0b", date:"July 2, 2025", readTime:"7 min", featured:false },
  { slug:"react-native-vs-flutter", title:"React Native vs Flutter in 2025: Which Should You Choose?", excerpt:"Both are excellent cross-platform frameworks. Our honest comparison based on real-world projects to help you pick the right tool.", category:"Mobile Development", categoryColor:"#10b981", date:"June 20, 2025", readTime:"6 min", featured:false },
  { slug:"cloud-cost-optimisation", title:"5 AWS Cost Mistakes Indian Startups Make (And How to Fix Them)", excerpt:"Cloud bills can spiral fast. Here are the five most common AWS cost mistakes and the fixes that save our clients thousands per month.", category:"Cloud", categoryColor:"#3b82f6", date:"June 8, 2025", readTime:"5 min", featured:false },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured)!;
  const rest = posts.filter(p => !p.featured);
  return (
    <>
      <style>{`
        .blog-card { background:white; border-radius:20px; padding:28px; border:1px solid rgba(0,0,0,0.07); text-decoration:none; display:block; transition:transform 0.3s,box-shadow 0.3s; }
        .blog-card:hover { transform:translateY(-4px); box-shadow:0 20px 40px rgba(0,0,0,0.08); }
        .cat-pill { display:inline-block; font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.03em; }
      `}</style>

      {/* Hero */}
      <section style={{ background:"white", paddingTop:120, paddingBottom:60, paddingLeft:24, paddingRight:24, borderBottom:"1px solid #f0f0f0" }}>
        <div style={{ maxWidth:640, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:16 }}>Insights &amp; Ideas</p>
          <h1 style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#111", letterSpacing:-1.5, lineHeight:1.1, marginBottom:16 }}>The Crenosoft Blog</h1>
          <p style={{ fontSize:17, color:"#666", lineHeight:1.6 }}>Practical perspectives on AI, software development, and building technology that works for your business.</p>
        </div>
      </section>

      <section style={{ background:"#f5f5f7", padding:"64px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>

          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration:"none", display:"block", marginBottom:24 }}>
            <div style={{ background:"#111", borderRadius:24, padding:"48px", color:"white", position:"relative", overflow:"hidden", transition:"transform 0.3s" }}>
              <div style={{ position:"absolute", top:"-20%", right:"-10%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.2),transparent 65%)", pointerEvents:"none" }} />
              <span className="cat-pill" style={{ background:"rgba(99,102,241,0.25)", color:"#a5b4fc", marginBottom:20 }}>Featured · {featured.category}</span>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,36px)", fontWeight:700, letterSpacing:-0.8, lineHeight:1.2, marginBottom:16, maxWidth:600 }}>{featured.title}</h2>
              <p style={{ fontSize:15, color:"rgba(255,255,255,0.55)", lineHeight:1.65, maxWidth:560, marginBottom:24 }}>{featured.excerpt}</p>
              <div style={{ display:"flex", alignItems:"center", gap:20, fontSize:13, color:"rgba(255,255,255,0.4)" }}>
                <span style={{ display:"flex", alignItems:"center", gap:6 }}><Calendar size={12}/>{featured.date}</span>
                <span style={{ display:"flex", alignItems:"center", gap:6 }}><Clock size={12}/>{featured.readTime} read</span>
              </div>
              <div style={{ marginTop:24, display:"inline-flex", alignItems:"center", gap:6, background:"#3d3d3d", color:"white", padding:"11px 22px", borderRadius:50, fontSize:14, fontWeight:600 }}>
                Read Article <ArrowRight size={14}/>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <span className="cat-pill" style={{ background:`${post.categoryColor}15`, color:post.categoryColor, marginBottom:14 }}>{post.category}</span>
                <h2 style={{ fontSize:17, fontWeight:700, color:"#111", lineHeight:1.35, marginBottom:10, letterSpacing:-0.3 }}>{post.title}</h2>
                <p style={{ fontSize:13, color:"#777", lineHeight:1.65, marginBottom:18 }}>{post.excerpt}</p>
                <div style={{ display:"flex", gap:16, fontSize:12, color:"#bbb" }}>
                  <span style={{ display:"flex", alignItems:"center", gap:5 }}><Calendar size={11}/>{post.date}</span>
                  <span style={{ display:"flex", alignItems:"center", gap:5 }}><Clock size={11}/>{post.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background:"white", padding:"64px 24px", textAlign:"center" }}>
        <div style={{ maxWidth:480, margin:"0 auto" }}>
          <h2 style={{ fontSize:28, fontWeight:700, color:"#111", letterSpacing:-0.8, marginBottom:10 }}>Get insights in your inbox</h2>
          <p style={{ fontSize:15, color:"#777", marginBottom:28 }}>Monthly deep-dives on AI, software, and technology strategy — no noise, just value.</p>
          <div style={{ display:"flex", gap:8, maxWidth:380, margin:"0 auto" }}>
            <input type="email" placeholder="your@email.com" style={{ flex:1, padding:"11px 16px", border:"1.5px solid #e5e5e7", borderRadius:50, fontSize:14, outline:"none", fontFamily:"inherit" }} />
            <button style={{ background:"#3d3d3d", color:"white", border:"none", padding:"11px 22px", borderRadius:50, fontSize:14, fontWeight:600, cursor:"pointer" }}>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
