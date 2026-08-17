import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Company India — Figma, Product Design, Design Systems | Crenosoft",
  description: "UI/UX design services in India — user research, wireframes, Figma prototypes, design systems, and developer handoff. Designed for Indian users. WCAG 2.1 compliant. Lucknow.",
  keywords: ["UI UX design company India","UX design services India","Figma design India","product design India","mobile UI design India","design system India","UX research India"],
  alternates: { canonical: "https://www.crenosoft.in/services/ui-ux-design" },
};

const CAPS = [
  ["🔍","User Research","User interviews, usability testing, analytics review (GA4, Hotjar heatmaps), and competitive analysis. We recruit and moderate sessions with your actual target users — not assumptions about them."],
  ["📐","Wireframing & Information Architecture","User flow diagrams, site maps, low-fidelity and mid-fidelity wireframes, and clickable prototypes in Figma. Structure validated before visual design begins — changes in wireframes take an hour, in code take a day."],
  ["🎨","Visual Design","High-fidelity designs for every screen state (empty, loading, error, filled). Interactive prototype for stakeholder review. Responsive variants (desktop, tablet, mobile) with documented breakpoints. Dark mode where applicable."],
  ["🧱","Design Systems","Figma component library with variants and states, design tokens (colour, spacing, typography, elevation), documentation for every component, and developer handoff with exact specs and CSS/React Native equivalents."],
  ["📱","Mobile App Design","iOS and Android designs following Apple Human Interface Guidelines and Google Material Design 3. Thumb zone analysis, 44pt minimum touch targets, gesture conventions, and connectivity-aware states (loading skeletons, offline mode)."],
  ["🔧","UX Audits & Redesigns","Heuristic evaluation, analytics review, moderated usability sessions with 5–8 users, and a prioritised findings report with specific recommendations. For products losing users at a known friction point."],
];

const PROCESS = [
  ["01","Discover","Stakeholder interviews, user interviews or analytics review, and competitive analysis. Output: design brief, user personas, key jobs-to-be-done."],
  ["02","Define","User journey mapping, information architecture, and feature prioritisation. We align on what screens exist and how they connect before designing any of them."],
  ["03","Design","Wireframes → feedback → high-fidelity designs → feedback → interactive prototype. You have edit access to the Figma file from day one — not PowerPoint screenshots."],
  ["04","Test & Handover","Moderated usability testing with 5–8 users, design revisions based on findings, and developer handoff with organised layers, component documentation, and implementation support during development sprints."],
];

const FAQS = [
  ["Do we need user research if we know our users well?","Almost every founding team believes they know their users well — and almost all are wrong about something important. The ones who genuinely know their users have talked to hundreds of them, recorded those conversations, and tracked what they got wrong. User research is not about validating what you already believe — it is about discovering the things you do not know you are wrong about."],
  ["What tools do you use?","Figma for everything — wireframes, visual design, prototypes, design systems, and developer handoff. We give every client full access to the Figma project from day one. If you have an existing design team, we collaborate in your workspace."],
  ["Can you redesign only part of our product?","Yes. Common partial redesigns: onboarding flow (highest-impact single flow in most SaaS products), dashboard, checkout, or a specific feature area. A UX audit first helps identify which part of the product to focus on for maximum impact."],
  ["How do you design for Indian users specifically?","Indian users span a huge range of devices, connectivity speeds, literacy levels, and languages. We design for Tier 2 and Tier 3 users, not just metro-city power users. This means simpler language and icon-supported navigation for low-literacy contexts, multilingual support from the start, performance on mid-range Android hardware, and trust signals (security badges, RBI or NBFC registration) that carry more weight in India than they do internationally."],
  ["How do you work with developers during implementation?","Figma handoff file with auto-layout components, exact spacing values, colour tokens, and interactive prototype showing hover, click, and animation states. We are available during development sprints for design questions, review implementation screenshots, and flag deviations before they ship to users."],
  ["What about accessibility compliance?","We design against WCAG 2.1 AA as the baseline — colour contrast ratios, minimum touch target sizes, focus states for keyboard navigation, and screen reader-compatible markup patterns. For government contracts or products with explicit accessibility requirements, we target WCAG 2.1 AAA."],
];

const PRICING: [string,string][] = [
  ["UX audit (existing product)","₹1–3 lakhs"],
  ["Marketing website design","₹1.5–4 lakhs"],
  ["Mobile app design (iOS/Android)","₹3–8 lakhs"],
  ["SaaS web application design","₹4–10 lakhs"],
  ["Design system build","₹3–8 lakhs"],
  ["Full product design (research to handoff)","₹8–20 lakhs"],
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
  "@id": "https://www.crenosoft.in/services/ui-ux-design/#service",
  name: "UI/UX Design",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/ui-ux-design",
  description: metadata.description as string,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "UI/UX Design",   item: "https://www.crenosoft.in/services/ui-ux-design" },
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
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}.price-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>🎨</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>UI/UX Design</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            We design digital products that Indian users find easy to use and keep coming back to. From user research and wireframes to Figma-ready designs, prototypes, and developer-ready design systems.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Get Started →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>Design Is Measurable</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Bad UX shows up in your numbers: high bounce rates, low activation rates in SaaS products, high support ticket volume for tasks users should find obvious, poor App Store ratings, and abandoned checkouts. Every one of these is a design problem before it is a marketing problem.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            <a href="https://www.forrester.com" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Forrester Research</a>&apos;s finding that every $1 invested in UX returns $100 is often cited. The exact multiple varies, but the direction is consistent: products that are easier to use get used more, retained longer, and recommended more often.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We design for Indian users — which means designing for a range of device capabilities, connectivity speeds, and cultural contexts that are genuinely different from the Silicon Valley user most design frameworks assume. Read our latest research:{" "}
            <Link href="/blog/ui-ux-design-trends-2025-india" style={{ color:"#3d3d3d",fontWeight:500 }}>UI/UX Design Trends for Indian Products in 2025 →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Our Services</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>What We Design</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our Design Process</h2>
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
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>Design Services Pricing</h2>
            <p style={{ fontSize:15,color:"#6e6e73" }}>Indicative ranges. Actual cost depends on scope, complexity, and timeline. All prices exclude GST.</p>
          </div>
          <div className="price-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
            {PRICING.map(([type,range])=>(
              <div key={type} style={{ background:"#fff",borderRadius:14,padding:"20px 22px",border:"1px solid #e5e5ea",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                <span style={{ fontSize:14,color:"#1d1d1f",fontWeight:500 }}>{type}</span>
                <span style={{ fontSize:14,color:"#3d3d3d",fontWeight:700,whiteSpace:"nowrap" as const }}>{range}</span>
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
              ["UI/UX Design Trends for Indian Products in 2025","/blog/ui-ux-design-trends-2025-india"],
              ["React Native vs Flutter: Design Implications for Cross-Platform Apps","/blog/react-native-vs-flutter"],
              ["Next.js Web Development: Why Performance Is a Design Decision","/blog/nextjs-seo-2025"],
              ["How to Build an AI-Powered SaaS: Design, Stack, and Architecture","/blog/building-ai-powered-saas-india-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b",fontSize:16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#fff",padding:"40px 24px",textAlign:"center" as const,borderBottom:"1px solid #e5e5ea" }}>
        <p style={{ fontSize:13,color:"#86868b",marginBottom:14 }}>Related services</p>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {([["Web Development","/services/web-development"],["Mobile App Development","/services/mobile-app-development"],["AI Software Development","/services/ai-software-development"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Let&apos;s look at your product together</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>Share your existing product or describe what you are building. We will tell you where design can make the biggest difference. No pitch, just honest feedback.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Design Review →</Link>
      </section>
    </>
  );
}
