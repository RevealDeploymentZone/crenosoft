import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fintech Software Development India — RBI Compliant, UPI, Lending | Crenosoft",
  description: "Custom fintech software development in India — payment platforms, lending systems, fraud detection, and RBI-compliant financial apps. PCI-DSS, ISO 27001. Lucknow.",
  keywords: ["fintech software development India","payment platform development India","RBI compliant fintech","lending software India","fraud detection India","UPI integration development"],
  alternates: { canonical: "https://www.crenosoft.in/industries/fintech" },
};

const WHAT_WE_BUILD = [
  ["💳","Payment Platforms & Gateways","Full-stack payment platforms with UPI, IMPS, NEFT, RTGS, and card processing — integrated with the National Payments Corporation of India (NPCI) ecosystem. We build the reconciliation engines, settlement systems, and dispute management workflows that make a payment platform production-ready, not just technically functional."],
  ["🏦","Lending & Credit Systems","Digital lending platforms for NBFCs and fintech lenders — loan origination, credit underwriting with bureau integrations (CIBIL, Experian, CRIF), e-KYC with Aadhaar OTP, and loan servicing. Built to comply with RBI's Digital Lending Guidelines 2022 and FAIR practice codes."],
  ["🔍","Fraud Detection & Risk Engines","Real-time transaction monitoring systems and fraud detection models using machine learning — trained on Indian transaction patterns including UPI fraud vectors, account takeover attempts, and synthetic identity fraud. Typical false-positive rates under 0.5% with 95%+ fraud capture."],
  ["📊","Wealth & Portfolio Management","Investment platforms, robo-advisors, and portfolio management tools for registered investment advisors and fintech wealth products. SEBI-compliant reporting, demat account integration via depository participant APIs, and mutual fund transaction routing via BSE Star MF or MFU."],
  ["🤖","AI for Financial Services","Credit scoring models using alternative data, AI-powered customer service for banking queries, document processing for loan applications, and intelligent collections workflows. Purpose-built for Indian financial data — not Western ML models applied to an Indian context."],
  ["🔐","Compliance & RegTech","Automated KYC/AML screening, transaction monitoring for PMLA compliance, regulatory reporting for RBI, SEBI, and IRDAI, and audit trail systems built to FIU-IND requirements. Compliance documentation for enterprise and enterprise banking partnerships."],
];

const CHALLENGES = [
  ["RBI & SEBI Regulatory Compliance","India's financial regulatory landscape requires software systems to be built to specific guidelines — RBI's Master Directions on Digital Lending, SEBI's investment adviser regulations, and IRDAI's digital insurance frameworks. We have worked with these requirements enough to build compliance in from the architecture phase rather than retrofit it later. This matters because regulatory remediation — especially for payment and lending systems — is expensive, time-consuming, and sometimes impossible without a rebuild."],
  ["Data Security at Financial Scale","Fintech systems handle personal financial data that falls under both the DPDP Act 2023 and specific RBI data localisation requirements. PCI-DSS certification for card data, ISO 27001 for overall information security, and SOC 2 Type II for enterprise clients — we build the technical controls that underpin these certifications, not just the documentation."],
  ["Integration with Indian Financial Infrastructure","The Indian financial infrastructure — NPCI's UPI, NACH, Aadhaar-based e-KYC, credit bureaus, depositories — has specific API standards and integration protocols that differ significantly from global payment infrastructure. We have integrated with NPCI's payment rails, NSDL and CDSL depository APIs, credit bureau APIs from all four major bureaus, and account aggregators under the AA framework."],
  ["Performance Under Indian Transaction Volumes","A payment platform that processes 10,000 transactions per day faces different engineering problems than one processing 10 million. India's UPI ecosystem processes over 14 billion transactions per month as of 2025. Systems that serve any meaningful slice of this need database architectures, caching strategies, and asynchronous processing designs built for this scale from day one."],
];

const FAQS = [
  ["Are you familiar with RBI's Digital Lending Guidelines 2022?","Yes. The guidelines introduced specific requirements around loan servicing accounts, disbursement directly to borrower accounts, key fact statements, and cooling-off periods. We have built lending platforms post-2022 that comply with these guidelines. We also track subsequent RBI communications on digital lending as they are released."],
  ["Can you build a NBFC-compliant lending platform?","Yes. We build digital lending platforms for NBFCs that include loan origination workflows, credit underwriting with bureau integration, e-KYC via Aadhaar OTP or video KYC, e-NACH mandate registration, and loan servicing modules. The architecture accounts for RBI's requirement that loan funds flow directly between the NBFC's escrow account and the borrower."],
  ["How do you approach PCI-DSS compliance for payment systems?","We design systems from the start to reduce PCI-DSS scope wherever possible — using tokenisation instead of storing card data, hosting cardholder data environments in isolated network segments, and using certified payment gateways for card processing. For clients pursuing formal PCI-DSS certification, we work alongside the QSA to ensure technical controls align with SAQ or full assessment requirements."],
  ["How long does a fintech MVP take to build?","A digital lending platform MVP (loan origination to disbursement): 16–24 weeks. A UPI-based payment platform MVP: 12–20 weeks. A fraud detection system: 10–16 weeks. These timelines assume clear requirements, available regulatory documents, and access to sandbox APIs from NPCI, bureaus, or banking partners. We give detailed estimates after a discovery call."],
  ["Do you work with banks or only fintech startups?","Both. We have worked with fintech startups building from scratch, NBFCs modernising legacy systems, and corporate treasury teams building internal financial tooling. The engineering requirements differ significantly between these — a startup's MVP and a bank's core banking replacement need fundamentally different approaches to architecture, testing, and deployment."],
  ["What does fintech software development cost in India?","UPI payment platform MVP: ₹15–30 lakhs. Digital lending platform: ₹20–50 lakhs. Fraud detection ML system: ₹12–25 lakhs. Wealth management platform: ₹18–40 lakhs. Regulatory reporting tool: ₹8–15 lakhs. These are starting ranges — actual cost depends on integration count, regulatory requirements, and performance targets."],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cap-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <Link href="/industries" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Industries</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>🏦</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Fintech Software Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            Payment platforms, lending systems, fraud detection, and regulatory-compliant financial software — built by engineers who understand RBI guidelines, NPCI integration, and the specific technical demands of Indian financial infrastructure.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your Fintech Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India's Fintech Market Demands Software Built for It</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India's fintech market is projected to reach{" "}
            <a href="https://www.ibef.org/industry/financial-services-india" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>$150 billion by 2025 according to IBEF</a>
            , driven by UPI adoption, digital lending growth, and the Account Aggregator framework enabling data-sharing across financial institutions. But building for this market is not the same as building for a Western fintech market.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The{" "}
            <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>NPCI's payment infrastructure</a>{" "}
            — UPI, IMPS, NACH, Bharat BillPay — has specific integration protocols and certification requirements. The{" "}
            <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>RBI's regulatory framework</a>{" "}
            for digital lending, payment aggregators, and NBFCs has evolved significantly since 2021. And the DPDP Act 2023 adds data handling obligations on top of the existing financial data regulations.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We build fintech software that accounts for all of this from day one — not as an afterthought. Our team has integrated with NPCI payment rails, built lending platforms for RBI-regulated NBFCs, and developed fraud detection systems for UPI transaction volumes. Read our broader AI approach:{" "}
            <Link href="/blog/custom-ai-software-development-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Custom AI Software Development in India →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Fintech Products We Develop</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build for Fintech</h2>
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

      {/* Compliance Box */}
      <section style={{ background:"#f5f5f7",padding:"64px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ background:"#fff",borderRadius:20,padding:"36px 32px",border:"1px solid #e5e5ea" }}>
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Regulatory Frameworks We Work With</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["RBI","Digital Lending Guidelines, PA/PG Framework, NBFC Master Directions"],
                ["NPCI","UPI, IMPS, NACH, Bharat BillPay, RuPay integration standards"],
                ["SEBI","Investment Adviser Regulations, AIF guidelines, algo trading rules"],
                ["IRDAI","InsurTech sandbox framework, digital insurance guidelines"],
                ["PCI-DSS","Scope reduction, tokenisation, cardholder data environment design"],
                ["DPDP Act","Consent management, data localisation, right to erasure for financial data"],
              ].map(([reg,desc])=>(
                <div key={reg} style={{ background:"#f5f5f7",borderRadius:12,padding:"16px 18px" }}>
                  <div style={{ fontSize:13,fontWeight:700,color:"#1d1d1f",marginBottom:4 }}>{reg}</div>
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
              ["LLM Integration Guide: Building AI into Financial Software","/blog/llm-integration-guide"],
              ["Custom AI Software Development India: Costs & Process","/blog/custom-ai-software-development-india-2025"],
              ["AI Automation for Indian Businesses","/blog/ai-automation-india-2025"],
              ["Cloud Migration for Indian Startups: Security & Compliance","/blog/cloud-migration-guide-indian-startups-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in Fintech Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["AI Software Development","/services/ai-software-development"],["AI Automation","/services/ai-automation"],["Web Development","/services/web-development"],["Cloud Solutions","/services/cloud-solutions"],["Mobile App Development","/services/mobile-app-development"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building a fintech product in India?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review the regulatory requirements, suggest an architecture, and give you a realistic scope and cost estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
