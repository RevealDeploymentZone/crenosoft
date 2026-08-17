import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logistics Software Development India — Route Optimization, Fleet Tracking, WMS | Crenosoft",
  description: "Custom logistics software development in India — route optimization, fleet tracking, warehouse automation, demand forecasting, and supply chain software. Lucknow.",
  keywords: ["logistics software development India","route optimization software India","fleet tracking software India","warehouse management system India","supply chain software India","last mile delivery software"],
  alternates: { canonical: "https://www.crenosoft.in/industries/logistics" },
};

const WHAT_WE_BUILD = [
  ["🗺️","Route Optimization & Dispatch","AI-powered route optimization for last-mile delivery, field service, and inter-city freight — accounting for Indian road conditions, traffic patterns, vehicle capacity constraints, and delivery time windows. Integrated with Google Maps Platform and HERE Maps, and able to handle the pin code-based address system that dominates Indian logistics."],
  ["📡","Fleet Tracking & Telematics","Real-time GPS tracking, driver behaviour monitoring, fuel consumption analytics, and maintenance scheduling for vehicle fleets. We integrate with standard OBD-II telematics devices and vehicle tracking hardware from Indian suppliers, then build the dashboards and alerting systems that operations teams actually use to manage their fleets."],
  ["🏭","Warehouse Management Systems","Inventory positioning, pick-pack-ship workflow management, barcode and QR code scanning integration, zone-based storage management, and cross-docking workflows. For Indian warehouses managing seasonal demand swings — particularly around Diwali, year-end, and cricket season — flexible capacity management is as important as steady-state efficiency."],
  ["🤖","Demand Forecasting & Supply Chain AI","Machine learning models for demand forecasting, inventory optimisation, supplier lead time prediction, and supply chain risk detection. Trained on Indian seasonal patterns, festival calendars, and regional demand variability — not generic global supply chain models that miss the Diwali spike or the monsoon slowdown in certain categories."],
  ["📋","Transport Management Systems","End-to-end TMS for freight booking, load planning, carrier selection, documentation (e-way bills, PODs), and freight reconciliation. Integration with GST e-way bill APIs, fastag data for highway transit tracking, and carrier portals for Delhivery, Blue Dart, DTDC, and other Indian carriers."],
  ["📊","Operations Analytics & Control Towers","Real-time logistics dashboards, delivery performance analytics, SLA breach detection, and multi-node supply chain visibility. For logistics companies and supply chain teams managing hundreds of orders simultaneously, a control tower that surfaces exceptions — not just confirms everything is on track — is the difference between proactive and reactive operations."],
];

const CHALLENGES = [
  ["India's Road and Address Infrastructure","Indian logistics software must contend with realities that most logistics software frameworks were not designed for: addresses without standardised formats, localities that exist in mapping databases under multiple spellings, road conditions that change seasonally, and a pin code system that covers large geographic areas. Route optimisation that works in a German city does not automatically work for last-mile delivery in a Tier 2 Indian city. We build systems that account for these realities."],
  ["GST Compliance in Logistics","Every consignment above ₹50,000 in value requires an e-way bill generated via the GST e-way bill portal. Managing e-way bill generation, validity extensions, and cancellation at scale — especially for logistics operators handling thousands of consignments daily — requires software integration with the GSTN API, not manual processes. We build e-way bill automation as a standard feature of TMS implementations, not an optional add-on."],
  ["Integration with Indian Carrier APIs","India has dozens of logistics carriers with varying API quality, documentation depth, and uptime reliability. A logistics platform that connects with multiple carriers — for rate comparison, booking, tracking, and exception management — needs carrier integration code that handles the inconsistencies between carrier APIs gracefully. We have built integrations with Delhivery, Blue Dart, Ecom Express, Shadowfax, DTDC, and Shiprocket, and we know where the documentation does not match reality."],
  ["Real-Time Data at Indian Fleet Scale","A logistics company operating a fleet of 500 vehicles generates significant real-time data — GPS pings every 30 seconds, fuel sensor readings, driver behaviour events, delivery confirmation PODs. Processing this at scale requires event streaming architectures, efficient time-series database storage, and analytics that surface actionable insights rather than drowning operations teams in raw data. We have built these systems and know the infrastructure choices that scale versus the ones that collapse at volume."],
];

const FAQS = [
  ["What map APIs do you use for route optimization in India?","We primarily use Google Maps Platform for geocoding and routing, with HERE Maps as an alternative for certain use cases. For hyperlocal delivery in dense urban areas, we have also integrated with MapmyIndia (now Maps of India) which has better coverage of Indian roads and addresses in Tier 2 and 3 cities. The choice depends on your geographic coverage requirements and budget constraints."],
  ["Can you integrate with the GST e-way bill system?","Yes. We have built GST e-way bill API integrations — generating e-way bills programmatically from consignment data, handling bulk generation for high-volume shippers, managing validity extension and cancellation workflows, and reconciling e-way bill data against actual delivery timelines for compliance reporting."],
  ["How do you handle driver mobile apps for last-mile delivery?","We build driver apps in React Native or Flutter — cross-platform so they run on the Android handsets that Indian delivery staff typically use. Core features: order assignment and routing with offline map caching, barcode/QR scanning for parcel pickup and delivery confirmation, photo POD capture, cash collection recording, and real-time sync with the dispatch system when connectivity allows. We pay particular attention to offline functionality given inconsistent connectivity in Tier 2 and 3 delivery areas."],
  ["How long does a logistics software project take?","A fleet tracking platform with driver app: 12–18 weeks. A TMS with carrier integrations and e-way bill support: 16–24 weeks. A warehouse management system: 14–22 weeks. A full logistics operations platform (TMS + WMS + fleet tracking): 28–40 weeks. These timelines assume carrier API documentation is available and e-way bill testing access is set up."],
  ["Do you work with logistics startups or established logistics companies?","Both. For startups building their first platform, we focus on an MVP that covers the core operational workflow. For established logistics companies modernising legacy systems, we focus on data migration planning, parallel run strategy, and user adoption. The engineering is similar; the project management approach is very different."],
  ["What does logistics software development cost in India?","Fleet tracking + driver app: ₹12–22 lakhs. TMS with carrier integrations: ₹18–35 lakhs. Warehouse management system: ₹15–30 lakhs. Route optimisation engine: ₹10–20 lakhs. Demand forecasting ML: ₹12–25 lakhs. Full logistics operations platform: ₹45–100 lakhs+. Prices exclude GST and third-party API costs."],
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
    { "@type": "ListItem", position: 3, name: "Logistics",     item: "https://www.crenosoft.in/industries/logistics" },
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
          <div style={{ fontSize:56,marginBottom:20 }}>🚚</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Logistics Software Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            Route optimization, fleet tracking, warehouse management, demand forecasting, and transport management systems — built for the specific infrastructure, regulations, and operating conditions of Indian logistics.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your Logistics Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India's Logistics Sector Is Growing Faster Than Most Software Can Keep Up</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India's logistics market is projected to reach{" "}
            <a href="https://www.ibef.org/industry/logistics.aspx" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>$380 billion by 2025 according to IBEF</a>
            , driven by e-commerce growth, infrastructure investment, and the government's National Logistics Policy pushing for greater digitisation. But logistics technology in India faces challenges that software designed for American or European supply chains handles poorly — address quality, carrier fragmentation, GST compliance, and the geographic diversity of a country that spans mountains, deserts, and dense urban centres.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The{" "}
            <a href="https://dpiit.gov.in/whats-new/national-logistics-policy" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>National Logistics Policy 2022</a>{" "}
            set a target to reduce logistics costs from 13–14% of GDP to under 8% — and digital technology is central to how that happens. From multimodal logistics infrastructure to real-time freight tracking, software that connects the moving parts is what enables that efficiency. We build that software.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We have built fleet tracking platforms, last-mile delivery systems, and warehouse management tools for logistics operators across India. Our systems handle e-way bill compliance, multi-carrier integration, and the kind of real-time data volumes that Indian logistics operations generate at scale. See how AI fits in:{" "}
            <Link href="/blog/ai-automation-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>AI Automation for Indian Businesses →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Logistics Products We Develop</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build for Logistics</h2>
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

      {/* Integration Box */}
      <section style={{ background:"#f5f5f7",padding:"64px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ background:"#fff",borderRadius:20,padding:"36px 32px",border:"1px solid #e5e5ea" }}>
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Systems and APIs We Integrate</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["Carriers","Delhivery, Blue Dart, Ecom Express, Shadowfax, DTDC, Shiprocket aggregator"],
                ["GST / Tax","GSTN e-way bill API, e-invoice generation, GSTR reconciliation data"],
                ["Maps","Google Maps Platform, HERE Maps, MapmyIndia for Indian coverage"],
                ["Telematics","OBD-II devices, Teltonika, Ruptela, Concox GPS hardware"],
                ["ERP / WMS","SAP S/4HANA, Oracle WMS, Tally, custom WMS APIs"],
                ["FASTag / NETC","NHAI FASTag data for highway tracking and toll analytics"],
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
              ["AI Automation for Indian Businesses: Supply Chain & Logistics","/blog/ai-automation-india-2025"],
              ["Custom AI Software Development India: Demand Forecasting & ML","/blog/custom-ai-software-development-india-2025"],
              ["Cloud Migration for Indian Startups: Scalable Infrastructure","/blog/cloud-migration-guide-indian-startups-2025"],
              ["Building AI-Powered SaaS Products in India","/blog/building-ai-powered-saas-india-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in Logistics Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["AI Software Development","/services/ai-software-development"],["Mobile App Development","/services/mobile-app-development"],["Web Development","/services/web-development"],["Cloud Solutions","/services/cloud-solutions"],["AI Automation","/services/ai-automation"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building a logistics product in India?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review the technical requirements, suggest an architecture, and give you a realistic scope and cost estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
