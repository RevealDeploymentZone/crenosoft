import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MVP Development Services — Launch Your Product Faster | Crenosoft",
  description: "MVP development services for Indian startups. Build and launch your minimum viable product in 8-12 weeks. Validate product-market fit before full development. Based in Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/services/mvp-development" },
};

const APPROACH = [
  ["🎯", "Core Features Only", "We identify the absolute minimum feature set needed to test your core hypothesis with real users. Everything else gets cut. Most MVPs ship with 40–60% fewer features than initially planned — and that's exactly right. Focus on one job-to-be-done executed well, not ten half-finished workflows."],
  ["⚡", "Fast Time to Market", "Target: 8–12 weeks from kickoff to users in production. Week 1–2: Scope definition and wireframes. Week 3–8: Core feature development with weekly demos. Week 9–10: Testing and polish. Week 11–12: Launch preparation and deployment. Speed matters — market validation beats perfection."],
  ["💰", "Fixed Scope, Fixed Price", "After discovery, we provide a fixed-price quote for defined MVP scope. Changes require formal change requests with cost/timeline impacts documented. This protects you from scope creep and us from endless iteration. Budget transparency from day one — no surprise invoices."],
  ["🔧", "Production-Ready from Launch", "MVPs are real products, not prototypes. Proper authentication, secure API endpoints, database backups, error tracking (Sentry), basic monitoring (Uptime Robot or Better Uptime), HTTPS with valid certificates, and DPDP-compliant data handling. No technical debt requiring immediate rewrites."],
  ["📊", "Built-In Analytics", "Google Analytics 4 or Mixpanel event tracking configured before launch. Core user flows instrumented: sign-up completion rate, feature usage, drop-off points, conversion funnels. Data-driven decisions from day one — guessing is expensive. Know which features users actually engage with."],
  ["🚀", "Scalable Foundation", "MVPs built on stacks that scale to 10,000+ users without architectural rewrites. Next.js on Vercel or AWS Amplify for web, React Native or Flutter for mobile, PostgreSQL or MongoDB for databases, AWS S3 for file storage. No WordPress, no PHP, no legacy stacks requiring migration when you grow."],
];

const STACK = [
  ["Web App MVPs", "Next.js 14+ (React Server Components, App Router), TypeScript, Tailwind CSS, Vercel deployment. Authentication via NextAuth.js or Clerk. Stripe for payments. Fastest way to ship production-grade web products."],
  ["Mobile App MVPs", "React Native with Expo for iOS + Android from single codebase. TypeScript for type safety. Native modules only when absolutely necessary. Firebase Auth + Firestore for backend. TestFlight and Google Play beta distribution from week 8."],
  ["B2B SaaS MVPs", "Next.js frontend + Node.js/Express backend, PostgreSQL database, Stripe Billing for subscriptions, AWS SES for transactional emails, multi-tenant architecture from day one. Role-based access control (RBAC) for team features."],
  ["AI-Powered MVPs", "OpenAI GPT-4o or Claude 3.5 Sonnet via API, LangChain for RAG workflows, Pinecone or pgvector for embeddings, streaming responses for better UX. Cost tracking per request from launch. See: AI Software Development."],
  ["E-Commerce MVPs", "Next.js storefront, Stripe Checkout, Razorpay for Indian payments, Shiprocket API integration for logistics, AWS S3 for product images, admin dashboard for inventory management. Mobile-first design for Indian users."],
  ["Marketplace MVPs", "Two-sided platform architecture: buyer + seller dashboards, escrow payment workflows, review/rating systems, in-app messaging, KYC verification for sellers (Aadhaar eSign API). Commission or subscription revenue models."],
];

const PROCESS = [
  ["01", "Discovery & Scope Definition", "1-week structured discovery: user personas, core user journey, must-have vs nice-to-have features, tech stack selection, third-party integrations, compliance requirements (DPDP, payments, KYC). Output: prioritized feature list, wireframes, fixed-price proposal. No development starts until scope is locked."],
  ["02", "Design & Prototype", "Figma wireframes → interactive prototype with clickable flows. Mobile-first for Indian markets. Accessibility basics (WCAG 2.1 AA). Brand colors, typography, component library established. User testing with 5–8 target users before coding begins. Design signoff required before week 3."],
  ["03", "Sprint-Based Development", "2-week sprints with demos every Friday. Week 3–4: Authentication, database schema, basic CRUD. Week 5–6: Core feature 1. Week 7–8: Core feature 2. Week 9–10: Integrations, edge cases, error handling. Weekly builds deployed to staging for client testing. Bugs logged in Linear/GitHub Issues."],
  ["04", "Testing & QA", "Manual testing: happy paths, edge cases, mobile responsiveness, cross-browser (Chrome, Safari, Firefox). Automated: API integration tests, authentication flows, payment workflows. Load testing with k6 if expecting high traffic. Security: OWASP top 10 checklist, dependency vulnerability scan (Snyk)."],
  ["05", "Launch & Handover", "Production deployment with DNS configuration, SSL certificates, environment variables secured, database backups automated, monitoring configured (Sentry for errors, Uptime Robot for downtime alerts). Documentation: admin guide, API docs, deployment runbook. Live training session with your team. 2-week post-launch support included."],
];

const PRICING: [string, string, string][] = [
  ["Simple Web MVP", "₹5–10 lakhs", "Landing page, sign-up, 2–3 core features, admin dashboard. 8–10 weeks."],
  ["Mobile App MVP", "₹8–15 lakhs", "iOS + Android from React Native, 3–4 key screens, backend API, analytics. 10–12 weeks."],
  ["B2B SaaS MVP", "₹12–25 lakhs", "Multi-tenant, team features, subscriptions, integrations, admin panel. 12–16 weeks."],
  ["Marketplace MVP", "₹15–30 lakhs", "Two-sided platform, escrow payments, reviews, messaging, KYC. 14–18 weeks."],
  ["AI-Powered MVP", "₹10–20 lakhs", "LLM integration, RAG pipeline, custom UI, usage tracking, cost controls. 10–14 weeks."],
];

const FAQS = [
  ["What exactly is an MVP, and why should we build one first?", "An MVP (Minimum Viable Product) is the simplest version of your product that real users can test to validate your core hypothesis. Instead of spending 12–18 months building every feature you think users want, you build just enough to test the most critical assumption — usually in 8–12 weeks and ₹5–15 lakhs. If users don't engage with the MVP, you've saved 80% of the cost and time you would have spent building a full product nobody wants. If they do engage, you now have real usage data showing exactly which features to prioritize next — not guesses. According to CB Insights, 35% of startups fail because they build products nobody wants. MVPs prevent that."],
  ["How do you decide which features make the cut for an MVP?", "We use the MoSCoW method: Must-have (core value prop, without this the product is useless), Should-have (important but can be manual workarounds initially), Could-have (nice additions if time permits), Won't-have (explicitly deferred to post-MVP). Must-haves typically account for 40–60% of your initial feature wishlist. For example, an e-commerce MVP must have: product listings, cart, checkout, payment. It does NOT need: wishlists, reviews, recommendations, gift cards, loyalty points — those come after you validate people will actually buy. We push back hard on feature creep — our job is to launch fast, not build everything."],
  ["What happens after the MVP launches — do you continue development?", "Three paths: (1) Post-MVP support retainer: We stay engaged on monthly retainer for bug fixes, feature additions, and optimizations as you gather user feedback. Typical: ₹1–3 lakhs/month for 10–20 hours of development work. (2) Transition to your team: We document everything, train your developers, hand over the codebase, and exit cleanly. (3) Full product build: MVP validated, now build the full roadmap. We expand the team and build in 3–6 month phases. Most clients choose option 1 for 3–6 months post-launch, then either hire in-house or commit to full product development."],
  ["Can you build MVPs for non-technical founders, or do we need a tech co-founder?", "We work with non-technical founders regularly — you do NOT need a technical co-founder to build an MVP. What you do need: (1) Clear problem definition (who has this problem, how painful is it). (2) Realistic budget (₹5–25 lakhs depending on complexity). (3) Willingness to make product decisions quickly (we'll present options, you choose). (4) Basic understanding that product development is iterative — features will change based on user feedback. We handle all technical decisions (tech stack, architecture, deployment) and explain trade-offs in plain language. Your job is to understand your users and validate the business model — ours is to build the product."],
  ["How do you handle changes or new features mid-development?", "Scope is locked after discovery phase. If you want to add features or change existing ones mid-project, we document the impact: (1) Cost increase (new features = more development hours). (2) Timeline delay (new work pushes launch date). (3) Trade-offs (adding feature X means cutting feature Y to stay on schedule). Small changes (copy tweaks, minor UI adjustments) are absorbed. Medium changes (new workflow, new integration) require formal change request and quote. Large changes (new user type, architectural shift) require project re-scoping. This prevents the classic trap: endless iteration → blown budget → never launching."],
  ["Do MVPs comply with Indian regulations like DPDP Act 2023?", "Yes. Every MVP we build includes: (1) User consent for data collection (required by DPDP Act 2023). (2) Privacy policy and terms of service (templates provided, legal review recommended). (3) Data encryption at rest (AES-256) and in transit (TLS 1.3). (4) Data stored in Indian cloud regions (AWS Mumbai, Azure India) if processing personal data of Indian users. (5) User data deletion capability (DPDP right to erasure). (6) Breach detection and logging (required for DPDP compliance). For fintech MVPs: RBI KYC requirements via Aadhaar eSign API. For healthcare: ABDM integration if patient data involved. Compliance is built in, not bolted on later."],
  ["What if the MVP fails — do we lose all the investment?", "You don't lose the investment, you gain validated learning and a codebase. If users don't engage with the MVP, you now have data about WHY (analytics show where they dropped off, user interviews reveal misconceptions). You can pivot the product, target different users, or shut down cleanly — all much cheaper than spending 18 months on a full product launch that also fails. The codebase remains yours — authentication, database schema, API integrations, payment flows, admin panel. Many failed MVPs become building blocks for the next idea. Software is never wasted if you learn from it."],
  ["Can you build MVPs for mobile-first or mobile-only products?", "Yes — most Indian consumer products are mobile-first because that's where users are. We build mobile MVPs using React Native (iOS + Android from single codebase), Flutter (when pixel-perfect UI matters), or progressive web apps (PWAs) that feel native but avoid app store approval delays. Mobile MVPs include: biometric authentication (Face ID, fingerprint), push notifications, offline-first architecture (works with spotty 4G), image upload and compression, location services (if needed), and app store submission (we handle TestFlight and Google Play beta distribution). Budget add ₹2–4 lakhs to web MVP pricing for native mobile."],
  ["How long does it take to see users actually using the MVP after launch?", "Depends on distribution strategy. B2B SaaS: Expect 4–8 weeks post-launch to close first paying customers (enterprise sales cycles are long). Consumer apps: Can get first 100 users in days if you have audience (social media, email list) or paid ads budget. Marketplace: Cold start problem — need enough supply and demand sides simultaneously, typically 8–12 weeks to liquidity. Our job is to build and launch the product; your job is user acquisition. We can advise on growth tactics and integrate analytics to measure what works, but we're not a marketing agency. Launch is day one, not the finish line."],
  ["Do you provide ongoing support after MVP launches, or are we on our own?", "2 weeks of free post-launch support included: bug fixes, critical issues, deployment problems, urgent changes. After that, three options: (1) Monthly support retainer (₹50,000–₹2,00,000/month depending on scope) for ongoing development, bug fixes, and feature additions. (2) Time-and-materials: Pay per task, no commitment, higher hourly rate. (3) Hand off to your team: We train your developers, document everything, and exit. Most clients choose option 1 for first 3–6 months while gathering user feedback and iterating. Once product-market fit is clear, they either hire in-house team or commit to full product build with us."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.crenosoft.in/services/mvp-development/#service",
  name: "MVP Development Services",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/mvp-development",
  description: metadata.description as string,
  serviceType: "MVP Development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "MVP Development", item: "https://www.crenosoft.in/services/mvp-development" },
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
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background: "#f5f5f7", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/services" style={{ display: "inline-block", fontSize: 13, color: "#86868b", textDecoration: "none", marginBottom: 28 }}>
            ← All Services
          </Link>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🚀</div>
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 20 }}>
            MVP Development Services
          </h1>
          <p style={{ fontSize: 18, color: "#6e6e73", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Launch your product in 8–12 weeks. Test your idea with real users before spending 18 months building features nobody wants. Fixed scope, fixed price, production-ready from day one.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3d3d3d", color: "#fff", padding: "14px 28px", borderRadius: 100, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Build Your MVP →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.2 }}>
            Most Startups Build Too Much, Too Slow
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            The classic mistake: 12–18 months building every feature in your product spec, burning through ₹30–80 lakhs, launching to... crickets. Users don't behave how you thought they would. Features you spent months on go unused. The workflows you designed don't match how people actually want to solve the problem.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            According to{" "}
            <a href="https://www.cbinsights.com/research/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              CB Insights' analysis of startup failures
            </a>
            , 35% of startups fail because they build products nobody wants. Not because the tech was hard, or the team was weak, or funding ran out — because they never validated product-market fit with real users before committing to full-scale development.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78, marginBottom: 16 }}>
            An MVP (Minimum Viable Product) solves this. You build just enough to test your core hypothesis with real users — typically 40–60% fewer features than initially planned. Launch in 8–12 weeks instead of 12–18 months. Budget ₹5–15 lakhs instead of ₹30–80 lakhs. If users don't engage, you've saved 80% of the cost. If they do engage, you now have real data showing which features to prioritize next — not guesses.
          </p>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.78 }}>
            Crenosoft has built MVPs for funded startups across fintech (UPI payments, lending), healthtech (telemedicine, diagnostics), e-commerce (D2C brands, marketplaces), logistics (fleet tracking, route optimization), and B2B SaaS (HR tech, sales automation). We specialize in getting products live fast — not building every feature perfectly. This is{" "}
            <Link href="/services/custom-software-development" style={{ color: "#3d3d3d", fontWeight: 500 }}>
              custom software development
            </Link>{" "}
            optimized for speed and market validation, not enterprise perfection.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Our Approach
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em" }}>How We Build MVPs Differently</h2>
          </div>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {APPROACH.map(([icon, title, desc]) => (
              <div key={title} className="cp-card" style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Technology Stack
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              Tech Stacks That Scale Beyond MVP
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>Production-grade tools that work for 100 users today and 100,000 users tomorrow.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STACK.map(([type, stack]) => (
              <div key={type} style={{ background: "#f5f5f7", borderRadius: 14, padding: "20px 24px", border: "1px solid #e5e5ea" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{type}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Process
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em" }}>From Idea to Live Product in 8–12 Weeks</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PROCESS.map(([step, title, desc]) => (
              <div key={step} style={{ display: "flex", gap: 24, background: "#fff", borderRadius: 16, padding: "28px 24px", alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#e5e5ea", flexShrink: 0, lineHeight: 1, width: 40, textAlign: "center" }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#3d3d3d", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Pricing
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: 12 }}>
              MVP Development Costs in India
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73" }}>Indicative fixed-price ranges. Final quote after discovery phase. All prices exclude 18% GST.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e5e5ea", borderRadius: 16, overflow: "hidden", background: "#f5f5f7" }}>
            {PRICING.map(([type, price, details]) => (
              <div key={type} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr", padding: "18px 20px", borderBottom: "1px solid #e5e5ea", alignItems: "center", gap: 16, background: "#fff" }}>
                <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 600 }}>{type}</span>
                <span style={{ fontSize: 14, color: "#3d3d3d", fontWeight: 700 }}>{price}</span>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{details}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#f5f5f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", textAlign: "center", marginBottom: 48 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQS.map(([q, a]) => (
              <div key={q} style={{ padding: "24px 0", borderBottom: "1px solid #d2d2d7" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ background: "#fff", padding: "40px 24px", textAlign: "center", borderBottom: "1px solid #e5e5ea" }}>
        <p style={{ fontSize: 13, color: "#86868b", marginBottom: 14 }}>Related services</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["Custom Software Development", "/services/custom-software-development"],
            ["AI Software Development", "/services/ai-software-development"],
            ["Mobile App Development", "/services/mobile-app-development"],
            ["Web Development", "/services/web-development"],
          ].map(([n, h]) => (
            <Link key={h} href={h} style={{ border: "1px solid #d2d2d7", color: "#1d1d1f", padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: "none", background: "#f5f5f7" }}>
              {n} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#3d3d3d", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
          Ready to validate your idea?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          Tell us your product idea. We'll scope it, price it, and get you live in 8–12 weeks — with real users testing your core hypothesis, not slide decks.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#3d3d3d", padding: "13px 26px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          Start Your MVP →
        </Link>
      </section>
    </>
  );
}
