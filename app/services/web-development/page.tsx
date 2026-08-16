import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services India — Next.js, React & Full-Stack | Crenosoft",
  description: "High-performance websites and web apps built with Next.js, React, and modern frameworks. SEO-optimised, scalable, beautifully designed.",
  alternates: { canonical: "https://www.crenosoft.in/services/web-development" },
};

const ICON = "🌐";
const TITLE = "Web Development";
const SUB = "Fast, scalable, conversion-ready.";
const ACCENT = "#06b6d4";
const DESC = "From marketing websites to complex SaaS platforms, we build high-performance web applications using Next.js, React, and modern backend technologies — with SEO and performance built in from day one.";

const ITEMS: [string, string, string][] = [
  ["🚀", "Marketing & Corporate Sites", "Conversion-optimised websites built with Next.js for blazing-fast load times and top Google rankings."],
  ["🏗️", "SaaS Web Applications", "Full-featured SaaS platforms with auth, billing, dashboards, and real-time features — built to scale."],
  ["🛒", "E-commerce Platforms", "Custom e-commerce or Shopify/WooCommerce builds — optimised for conversion and seamless user journeys."],
  ["🔍", "SEO-First Development", "Technical SEO, Core Web Vitals, structured data, and sitemap config included on every project."],
  ["⚡", "Performance Optimisation", "Audit and refactor existing web apps for speed — images, code splitting, caching, and server response."],
  ["🔌", "API & Backend Development", "Robust REST and GraphQL APIs, serverless functions, and database architecture tailored to your needs."],
];

const FAQS: [string, string][] = [
  ["What web technologies does Crenosoft use?", "Our primary frontend stack is Next.js with React and TypeScript. For backends we use Node.js, Python (FastAPI/Django), and Go. We deploy on Vercel, AWS, and GCP."],
  ["Do you build websites that rank on Google?", "Absolutely. SEO is built into our development process — semantic HTML, structured data, fast load times, Core Web Vitals, and sitemap configuration on every project."],
  ["Can you redesign my existing website?", "Yes. We handle both greenfield projects and legacy migrations, preserving what works while rebuilding what does not — with minimal downtime and SEO disruption."],
  ["What about post-launch maintenance?", "We offer flexible post-launch support — from on-call bug fixes to a dedicated monthly retainer including updates, monitoring, and small feature work."],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp2:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:700px){.grid3{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background:"#f5f5f7", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 50% -10%,${ACCENT}44,transparent)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
          <Link href="/services" style={{ display: "inline-block", fontSize: 13, color: "#86868b", textDecoration: "none", marginBottom: 28 }}>← All Services</Link>
          <div style={{ fontSize: 56, marginBottom: 20 }}>{ICON}</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 16 }}>{TITLE}</h1>
          <p style={{ fontSize: 16, fontWeight: 600, color: ACCENT, marginBottom: 16 }}>{SUB}</p>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.65 }}>{DESC}</p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACCENT, color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Get Started →
          </Link>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 12 }}>What We Offer</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>Our {TITLE} services</h2>
          </div>
          <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {ITEMS.map(([icon, title, desc]) => (
              <div key={title} className="cp2" style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", textAlign: "center", marginBottom: 48 }}>Frequently asked questions</h2>
          <div>
            {FAQS.map(([q, a]) => (
              <div key={q} style={{ padding: "24px 0", borderBottom: "1px solid #e5e5ea" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: ACCENT, padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>Ready to get started?</h2>
        <p style={{ fontSize: 16, color: "#6e6e73", marginBottom: 32 }}>Book a free consultation and let&apos;s discuss your project.</p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: ACCENT, padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Book Free Consultation →
        </Link>
      </section>
    </>
  );
}
