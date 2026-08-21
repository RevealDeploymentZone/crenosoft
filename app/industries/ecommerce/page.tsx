import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce & D2C Software Development India — UPI, WhatsApp Commerce | Crenosoft",
  description: "Custom e-commerce and D2C software development in India — storefronts, UPI payment integration, inventory automation, AI recommendations, WhatsApp commerce. Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/industries/ecommerce" },
};

const WHAT_WE_BUILD = [
  ["🛒","Custom Storefronts & Marketplaces","Headless e-commerce storefronts and multi-vendor marketplaces built on Next.js with server-side rendering for SEO and Core Web Vitals scores that matter for organic traffic. Custom product catalogues, variant management, bundling logic, and checkout flows — designed for the specific way Indian D2C brands sell, not forced into a Shopify template."],
  ["💳","UPI & Payment Gateway Integration","End-to-end payment integration with Razorpay, PayU, CCAvenue, and direct UPI intent flows — including EMI options, buy-now-pay-later via Simpl or LazyPay, and COD management with automated reconciliation. We build the payment retry logic, failed payment recovery flows, and refund automation that e-commerce platforms need at volume."],
  ["📦","Inventory & Order Management","Multi-warehouse inventory management, automated reordering triggers, order routing logic across fulfilment centres, and integration with logistics partners — Shiprocket, Delhivery, Blue Dart, Ecom Express. For brands managing both online and offline inventory, real-time sync that prevents overselling is the difference between a smooth sale and a refund nightmare."],
  ["🤖","AI Recommendations & Personalisation","Product recommendation engines using collaborative filtering and content-based models — trained on your transaction data, not generic retail datasets. Personalised homepage, category page merchandising, and cart cross-sell logic that increases average order value without requiring manual curation at scale."],
  ["💬","WhatsApp Commerce & Chatbots","WhatsApp Business API integrations for order updates, abandoned cart recovery, product catalogue sharing, and conversational selling. For Indian customers, WhatsApp is the primary messaging channel — a checkout flow that happens entirely inside WhatsApp converts significantly better than pushing users to a website for a segment that shops on mobile."],
  ["📊","Analytics & Customer Intelligence","RFM analysis, customer lifetime value modelling, cohort analysis, and return-on-ad-spend dashboards for performance marketing. For D2C brands spending significant amounts on Facebook, Google, and Instagram, understanding which customers actually convert to repeat buyers — versus one-time discount shoppers — changes how you allocate the next marketing rupee."],
];

const CHALLENGES = [
  ["India's E-commerce Market Has Different Dynamics","The assumptions baked into Shopify, WooCommerce, and most international e-commerce platforms reflect US or European shopping behaviour. Indian e-commerce has distinct patterns: COD still accounts for a significant share of orders in Tier 2 and 3 cities, UPI has overtaken cards for digital payments, WhatsApp drives discovery for many D2C brands, and return rates vary wildly by category and region. Software built on these assumptions performs better than software that ignores them."],
  ["Logistics Integration at Indian Scale","India's logistics landscape is fragmented — no single carrier covers all pincodes with the same service level. A functional e-commerce backend needs integrations with multiple courier partners, intelligent routing logic that selects the carrier based on pincode coverage and historical delivery performance, and real-time tracking that actually reflects what is happening rather than just the last scan. We have built these integrations with Shiprocket, Delhivery, Blue Dart, Shadowfax, and regional players."],
  ["GST Compliance in E-commerce","E-commerce in India creates specific GST obligations — Tax Collected at Source requirements for marketplace operators, HSN code mapping for every product category, invoice generation that meets GST requirements, and GSTR-1 and GSTR-3B reporting data. We build GST compliance into the transaction and reporting layer from the start, not as a finance team problem to solve at month end."],
  ["Performance Under Indian Traffic Conditions","Indian mobile users are increasingly on 4G and 5G, but page load time still directly affects conversion rates. A one-second delay in mobile page load time reduces conversions by approximately 20% according to Google research. For e-commerce on Indian mobile networks, server-side rendering, aggressive image optimisation, edge caching, and reduced JavaScript payload are not performance luxuries — they are conversion requirements."],
];

const FAQS = [
  ["Should we build a custom storefront or use Shopify/WooCommerce?","It depends on your stage and requirements. For a brand doing under ₹50 lakhs monthly revenue with standard product types, Shopify or WooCommerce with customisation is probably the right choice. For brands with complex product catalogues, subscription models, marketplace requirements, or performance constraints that off-the-shelf platforms cannot meet, a custom build makes economic sense. We will tell you honestly which category you are in."],
  ["How do you handle UPI payment failures and reconciliation?","UPI payments fail at a higher rate than cards — network issues, wrong UPI ID, insufficient balance, bank downtime. A production e-commerce platform needs payment retry flows, pending payment status polling, and automated reconciliation that matches settlement reports from payment gateways against your order management system. We build this into every payment integration, not as an afterthought."],
  ["Can you integrate with our existing ERP or inventory system?","Yes. Common integrations we have built: Tally Prime (via ODBC and Tally XML), SAP Business One, Unicommerce, Vinculum, and proprietary warehouse management systems with custom APIs. The integration approach depends on what data needs to flow in which direction and at what frequency — we scope this during discovery."],
  ["How long does a D2C e-commerce platform take to build?","A custom storefront with payment, basic inventory management, and order tracking: 12–18 weeks. A full platform with multi-warehouse inventory, AI recommendations, and WhatsApp integration: 20–32 weeks. A multi-vendor marketplace: 24–40 weeks. These timelines assume clear product requirements and available integration documentation from third-party systems."],
  ["How do you approach mobile-first design for Indian users?","Indian e-commerce is predominantly mobile. We design for thumb navigation, fast loading on 4G networks, UPI payment flows that work within the intent flow paradigm, and checkout experiences that do not require typing long card numbers. We test across a range of Android devices — including lower-end Redmi and Realme models — not just flagship devices."],
  ["What does e-commerce development cost in India?","Custom storefront (headless): ₹10–25 lakhs. Full D2C platform with payment + inventory + logistics: ₹20–45 lakhs. Multi-vendor marketplace: ₹35–80 lakhs. WhatsApp commerce integration: ₹4–8 lakhs. AI recommendation engine: ₹8–18 lakhs. All prices exclude GST and third-party API costs."],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.crenosoft.in/industries" },
    { "@type": "ListItem", position: 3, name: "E-commerce & D2C",     item: "https://www.crenosoft.in/industries/ecommerce" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .cap-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <Link href="/industries" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Industries</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>🛒</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>E-commerce & D2C Software Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            Custom storefronts, UPI payment integration, inventory automation, WhatsApp commerce, and AI recommendation engines — built for the way Indian consumers actually shop, not adapted from Western e-commerce templates.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your E-commerce Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India's E-commerce Market Needs Software Built for It</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India's e-commerce market is projected to reach{" "}
            <a href="https://www.ibef.org/industry/ecommerce" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>$325 billion by 2030 according to IBEF</a>
            , with D2C brands growing fastest. But the infrastructure and consumer behaviour driving this growth is distinctly Indian — UPI processed over 14 billion transactions per month as of 2025, WhatsApp has over 500 million Indian users, and a significant share of digital commerce happens through mobile-first, social-first, and conversational channels that most Western e-commerce platforms were not designed for.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The{" "}
            <a href="https://www.npci.org.in/what-we-do/upi/product-overview" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>NPCI's UPI payment rails</a>{" "}
            have fundamentally changed how Indian consumers pay online — the checkout experience that worked in 2019 with card entry forms does not reflect how most Indians prefer to pay today. Logistics infrastructure has improved dramatically with{" "}
            <a href="https://www.shiprocket.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Shiprocket</a>{" "}
            and other aggregators, but integrating effectively with multiple courier partners remains a technical challenge.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We build e-commerce software for Indian D2C brands and marketplaces that handles this complexity natively — not via plugins bolted onto an international platform. See how we approach AI in retail:{" "}
            <Link href="/blog/ai-automation-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>AI Automation for Indian Businesses →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>E-commerce Products We Develop</h2>
          </div>
          <div className="cap-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {WHAT_WE_BUILD.map(([icon,title,desc])=>(
              <div key={title as string} className="cap-card" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,0.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>Our Approach</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build for E-commerce</h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:28 }}>
            {CHALLENGES.map(([title,desc])=>(
              <div key={title as string} style={{ borderLeft:"3px solid #e5e5ea",paddingLeft:24 }}>
                <h3 style={{ fontSize:17,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:15,color:"#6e6e73",lineHeight:1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Box */}
      <section style={{ background:"#f5f5f7",padding:"64px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ background:"#fff",borderRadius:20,padding:"36px 32px",border:"1px solid #e5e5ea" }}>
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Integrations We Work With</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["Payments","Razorpay, PayU, CCAvenue, UPI intent, Simpl, LazyPay, COD management"],
                ["Logistics","Shiprocket, Delhivery, Blue Dart, Ecom Express, Shadowfax, DTDC"],
                ["ERP / Inventory","Tally Prime, SAP B1, Unicommerce, Vinculum, custom WMS"],
                ["Communication","WhatsApp Business API, MSG91, Intercom, Freshdesk"],
                ["Analytics","Google Analytics 4, Meta Pixel, CleverTap, MoEngage, Mixpanel"],
                ["Marketplaces","Amazon Seller Central API, Flipkart Seller Hub, Meesho APIs"],
              ].map(([cat,desc])=>(
                <div key={cat} style={{ background:"#f5f5f7",borderRadius:12,padding:"16px 18px" }}>
                  <div style={{ fontSize:13,fontWeight:700,color:"#1d1d1f",marginBottom:4 }}>{cat}</div>
                  <div style={{ fontSize:12,color:"#6e6e73",lineHeight:1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center" as const,marginBottom:48 }}>Frequently Asked Questions</h2>
          <div style={{ display:"flex",flexDirection:"column" as const }}>
            {FAQS.map(([q,a])=>(
              <div key={q as string} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.75 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog + Services Links */}
      <section style={{ background:"#f5f5f7",padding:"56px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:20 }}>Related Resources</p>
          <div style={{ display:"flex",flexDirection:"column" as const,gap:10,marginBottom:32 }}>
            {([
              ["AI Automation for Indian Businesses: Retail & E-commerce","/blog/ai-automation-india-2025"],
              ["Custom AI Software Development India: Costs & Process","/blog/custom-ai-software-development-india-2025"],
              ["Building an AI-Powered SaaS Product in India","/blog/building-ai-powered-saas-india-2025"],
              ["Cloud Migration for Indian Startups: Security & Compliance","/blog/cloud-migration-guide-indian-startups-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in E-commerce Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["Web Development","/services/web-development"],["Mobile App Development","/services/mobile-app-development"],["AI Software Development","/services/ai-software-development"],["AI Automation","/services/ai-automation"],["UI/UX Design","/services/ui-ux-design"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building an e-commerce product in India?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review your current stack, suggest an architecture, and give you a realistic scope and cost estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
