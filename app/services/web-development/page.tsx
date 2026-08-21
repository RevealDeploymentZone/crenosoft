import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Company India — Next.js, React, SaaS | Crenosoft",
  description: "Web development company in India — Next.js, React, SaaS applications, e-commerce, and performance optimization. SEO-first, Core Web Vitals optimised. Based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/web-development" },
};

const CAPS = [
  ["🌐","Marketing & Corporate Websites","Conversion-optimised websites using Next.js App Router — fast load times, structured data, Core Web Vitals compliance built in. Not a Wix site dressed up as a custom build."],
  ["⚙️","SaaS Web Applications","Full-featured platforms with authentication, billing (Razorpay + Stripe), multi-tenancy, real-time capabilities, admin dashboards, and a public API. Designed to scale from 100 to 100,000 users without a rewrite."],
  ["🛒","E-commerce Platforms","Custom storefronts or headless Shopify/WooCommerce with Next.js frontend. UPI and Razorpay integration, GST calculation, Indian address validation, Shiprocket and Delhivery logistics integration."],
  ["📈","SEO-First Development","Schema.org JSON-LD markup, semantic HTML5, dynamic sitemap generation, canonical URL management, hreflang for multilingual sites (Hindi, Tamil, Telugu, Marathi) — in the codebase, not a plugin."],
  ["⚡","Performance Optimisation","Audits and fixes for existing sites — image optimisation pipelines, code splitting, lazy loading, CDN configuration. Typical outcome: 40–70% improvement in LCP, measurable ranking improvements within 90 days."],
  ["🔌","API & Backend Development","REST and GraphQL APIs, database architecture (PostgreSQL, Redis), serverless functions, and third-party integrations. Designed for the query patterns your app actually runs, not just the happy path."],
];

const PROCESS = [
  ["01","Discovery & Scoping","We review your existing site (if applicable), map user journeys, define scope with a detailed specification, identify SEO requirements, performance targets, and technical constraints."],
  ["02","Design","Wireframes in Figma, then visual designs. All reviewed and approved before a single line of development code is written. Changes in Figma take an hour. Changes in code take a day."],
  ["03","Development","Two-week sprints. Staging deployment at the end of each sprint — you test on a real URL on your actual device, not screenshots. Every sprint ships working, tested software."],
  ["04","QA & Launch","Cross-browser testing, responsive layout verification, performance benchmarking, security review (OWASP top 10), accessibility audit (WCAG 2.1 AA), and zero-downtime deployment."],
];

const FAQS = [
  ["Why Next.js over WordPress or Webflow?","WordPress and Webflow are good tools for certain use cases. But for anything that needs custom functionality, high performance, or is likely to evolve significantly, Next.js gives you a codebase you actually own and control. No plugin compatibility issues, no security vulnerabilities from unmaintained extensions, and no performance ceiling imposed by a platform. Full breakdown: Next.js SEO in 2025."],
  ["How much does a website or web app cost?","Marketing website (5–15 pages): ₹1.5–5 lakhs. Corporate website with CMS: ₹3–8 lakhs. SaaS MVP: ₹8–20 lakhs. Custom e-commerce: ₹10–30 lakhs. Performance optimisation audit and fixes: ₹1–4 lakhs. All prices exclude GST. We give detailed estimates after reviewing your specific requirements — not ballpark figures from a 20-minute call."],
  ["Do you build multilingual websites?","Yes. We have built sites in Hindi, Tamil, Telugu, Marathi, Bengali, and other regional languages with proper i18n support, hreflang configuration for regional SEO, and correct text rendering for Devanagari and other scripts."],
  ["Can you take over a half-built project?","Yes, but we do a code review first. We need to understand the architecture, identify technical debt, and estimate what getting to a maintainable state would require. We give you an honest assessment — including if we think a rebuild is cleaner than continuing."],
  ["How do you handle post-launch maintenance?","We offer monthly retainers: security updates, dependency upgrades, performance monitoring, and a fixed number of hours for bug fixes and small features. We do not disappear after launch. We also handle Google Search Console monitoring and Core Web Vitals tracking as part of SEO-focused retainers."],
  ["Do you integrate with Indian payment gateways?","Yes — Razorpay, Cashfree, PayU, and PhonePe Business for UPI, netbanking, wallets, and card payments. We handle the full integration including webhook handling, reconciliation, and GST-compliant invoice generation."],
];

const PRICING: [string,string][] = [
  ["Marketing website (5–15 pages)","₹1.5–5 lakhs"],
  ["Corporate website with CMS","₹3–8 lakhs"],
  ["SaaS MVP (core features)","₹8–20 lakhs"],
  ["Full SaaS platform","₹20–50 lakhs"],
  ["Custom e-commerce platform","₹10–30 lakhs"],
  ["Performance optimisation","₹1–4 lakhs"],
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
  "@id": "https://www.crenosoft.in/services/web-development/#service",
  name: "Web Development",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/web-development",
  description: metadata.description as string,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "Web Development",   item: "https://www.crenosoft.in/services/web-development" },
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
          <div style={{ fontSize:56,marginBottom:20 }}>🌐</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Web Development</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            Fast, well-structured web applications and websites that rank on Google, handle real traffic, and are built to grow with your business — not fall over the moment you get featured somewhere.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Get Started →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>What Good Web Development Actually Means in 2025</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            A website that loads in 4 seconds loses 25% of visitors before the first impression.{" "}
            <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Google&apos;s Core Web Vitals</a>{" "}
            are a confirmed ranking signal — a slow site is a penalised site. A SaaS application with poor architecture becomes a rewrite candidate within 18 months of launch.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Our primary stack is{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Next.js</a>{" "}
            with React and TypeScript, deployed on{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Vercel</a>{" "}
            or AWS. This combination gives you server-side rendering for SEO, edge caching for performance, and the best developer experience for production web applications.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            Our clients consistently see 20–40% organic traffic increases within 90 days of launching on Next.js App Router. Read why:{" "}
            <Link href="/blog/nextjs-seo-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Next.js in 2025: Why It&apos;s Still the Best Choice for SEO-Focused Web Apps →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Our Web Development Services</h2>
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

      {/* Tech Stack */}
      <section style={{ background:"#fff",padding:"64px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:24,textAlign:"center" as const }}>Our Technology Stack</h2>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:0,border:"1px solid #e5e5ea",borderRadius:16,overflow:"hidden" }}>
            {([
              ["Frontend","Next.js 14/15, React 18/19, TypeScript, Tailwind CSS"],
              ["Auth","Clerk, Auth.js, JWT"],
              ["Database","PostgreSQL, Redis, Supabase, MongoDB"],
              ["ORM","Prisma, Drizzle"],
              ["Payments","Razorpay, Stripe, PhonePe, Cashfree"],
              ["Hosting","Vercel, AWS (ECS, Lambda), GCP Cloud Run"],
              ["CMS","Sanity, Contentful, Strapi, MDX"],
              ["Testing","Vitest, Playwright, Cypress"],
            ] as [string,string][]).map(([layer,tools],i)=>(
              <div key={layer} style={{ display:"grid",gridTemplateColumns:"130px 1fr",padding:"14px 20px",borderBottom:i<7?"1px solid #e5e5ea":"none",background:i%2===0?"#fff":"#fafafa" }}>
                <span style={{ fontSize:13,fontWeight:700,color:"#3d3d3d" }}>{layer}</span>
                <span style={{ fontSize:13,color:"#6e6e73" }}>{tools}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>How We Work</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our Development Process</h2>
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

      {/* Pricing */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:44 }}>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>Pricing</h2>
            <p style={{ fontSize:15,color:"#6e6e73" }}>Indicative ranges based on completed projects. All prices exclude GST.</p>
          </div>
          <div className="price-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
            {PRICING.map(([type,range])=>(
              <div key={type} style={{ background:"#f5f5f7",borderRadius:14,padding:"20px 22px",border:"1px solid #e5e5ea",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                <span style={{ fontSize:14,color:"#1d1d1f",fontWeight:500 }}>{type}</span>
                <span style={{ fontSize:14,color:"#3d3d3d",fontWeight:700,whiteSpace:"nowrap" as const }}>{range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
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
      <section style={{ background:"#fff",padding:"56px 24px",borderTop:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:20,textAlign:"center" as const }}>Related Reading</p>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:10 }}>
            {([
              ["Next.js SEO in 2025: App Router, Core Web Vitals, and Performance","/blog/nextjs-seo-2025"],
              ["How to Build an AI-Powered SaaS Product in India in 2025","/blog/building-ai-powered-saas-india-2025"],
              ["UI/UX Design Trends for Indian Products in 2025","/blog/ui-ux-design-trends-2025-india"],
              ["React Native vs Flutter: Which Should Your Startup Choose?","/blog/react-native-vs-flutter"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#f5f5f7",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b",fontSize:16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background:"#f5f5f7",padding:"40px 24px",textAlign:"center" as const,borderBottom:"1px solid #e5e5ea" }}>
        <p style={{ fontSize:13,color:"#86868b",marginBottom:14 }}>Related services</p>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {([["UI/UX Design","/services/ui-ux-design"],["AI Software Development","/services/ai-software-development"],["Mobile App Development","/services/mobile-app-development"],["Cloud Solutions","/services/cloud-solutions"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none",background:"#fff" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Let&apos;s build something that actually ranks and converts</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>Share your project and we will give you a clear estimate of scope, cost, and timeline. No padded quotes, no vague &ldquo;it depends&rdquo; without explanation.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Consultation →</Link>
      </section>
    </>
  );
}
