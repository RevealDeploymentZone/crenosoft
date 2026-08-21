import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Software Development India — ABDM, Telemedicine, EHR | Crenosoft",
  description: "Custom healthcare software development in India — ABDM-compliant patient management, telemedicine platforms, diagnostic AI, and EHR systems. DISHA-compliant. Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/industries/healthcare" },
};

const WHAT_WE_BUILD = [
  ["🏥","Patient Management & EHR Systems","Electronic health record systems and patient management platforms built to NMC and DISHA standards — appointment scheduling, clinical notes, prescription management, lab result integration, and discharge summaries. Designed for the workflows of Indian clinics, hospitals, and diagnostic chains rather than adapted from Western EHR templates."],
  ["📱","Telemedicine Platforms","Video consultation platforms, asynchronous messaging systems, and remote patient monitoring tools — built with WebRTC for reliable video, integrated with payment gateways for consultation fees, and structured around ABDM Health IDs for patient identity. Compliant with MCI telemedicine practice guidelines updated 2020."],
  ["🧠","Diagnostic AI & Medical Imaging","AI-assisted diagnostic tools for radiology, pathology, and ophthalmology — trained on Indian patient datasets, not Western imaging databases. Chest X-ray screening, diabetic retinopathy detection, and report summarization for radiologists who review hundreds of scans per day."],
  ["🔗","ABDM Integration & Health Locker","Full integration with India's Ayushman Bharat Digital Mission infrastructure — Health ID creation and verification, ABHA-linked record sharing, PHR app integration, and consent management under the Health Data Management Policy. We have built ABDM sandbox integrations and production systems."],
  ["💊","Pharmacy & Prescription Systems","Digital prescription platforms, pharmacy management systems, and medication adherence tools — integrated with drug databases, GST-compliant billing, and connected to lab and diagnostic ordering workflows. Built for standalone pharmacies, hospital pharmacy chains, and D2C health platforms."],
  ["📊","Healthcare Analytics & Population Health","Clinical data analytics, bed management dashboards, revenue cycle analytics, and population health monitoring platforms. For hospital groups managing multiple facilities, real-time data across locations helps operational decisions that otherwise rely on end-of-month reports."],
];

const CHALLENGES = [
  ["ABDM Compliance and Health Data Standards","India's Ayushman Bharat Digital Mission has created a new infrastructure layer for healthcare data — Health IDs, Health Facility Registry, Healthcare Professionals Registry, and the consent-based data sharing framework. Building ABDM-compliant software means integrating with ABDM sandbox APIs, handling HL7 FHIR data standards, and implementing consent managers correctly. We have worked through this integration process and know where the documentation gaps are and how to resolve them."],
  ["DISHA and Health Data Privacy","The Digital Information Security in Healthcare Act (DISHA) framework governs health data handling in India. Unlike financial data, health data carries particular sensitivity — patients have strong rights over who accesses their records, and violations carry significant regulatory consequences. We build consent management, audit trails, and data access controls into healthcare systems from the architecture phase, not as an afterthought when a client asks about compliance before launch."],
  ["Interoperability with Indian Healthcare Infrastructure","Indian healthcare runs on a fragmented infrastructure — government hospitals on NIC systems, private hospitals on a mix of international and local HIS platforms, labs on LIMS systems with proprietary export formats. Building software that integrates across this landscape requires working with HL7, FHIR, and custom APIs from vendors who do not always prioritise developer documentation. We have built integrations with laboratory information systems, diagnostic equipment APIs, and hospital management systems used across India."],
  ["Designing for the Indian Healthcare User","A telemedicine platform designed for a US or European patient — where users have stable broadband, a single primary care physician, and comprehensive insurance records — will fail in the Indian context. Indian patients may consult multiple doctors simultaneously across public and private systems, have limited bandwidth for video calls, use regional languages, and pay out-of-pocket rather than through insurance. We design for this reality, not for an assumed user profile that does not exist in most of India."],
];

const FAQS = [
  ["What is ABDM and why does it matter for healthcare software?","ABDM — Ayushman Bharat Digital Mission — is India's national digital health infrastructure. It creates Health IDs (ABHA numbers) for every citizen, a Health Facility Registry, and a consent-based data sharing framework. Healthcare software built without ABDM integration will increasingly struggle with interoperability as the ecosystem matures. Government hospitals are already required to integrate; private facilities are being incentivised. We build ABDM integration as a standard feature rather than an add-on."],
  ["Can you build a telemedicine platform that complies with Indian regulations?","Yes. The Medical Council of India's Telemedicine Practice Guidelines (2020) set requirements around first consultation protocols, prescription standards, and the categories of conditions that can be managed via teleconsultation. We build telemedicine platforms that follow these guidelines — structured consultation flows, compliant e-prescription generation, and proper documentation of teleconsultation sessions."],
  ["How do you handle patient data security for healthcare applications?","Healthcare data requires stronger controls than most data categories. We implement role-based access controls so clinical staff see only what they need for patient care, audit logs for every data access event, encryption at rest and in transit, and data residency within India for compliance with data localisation requirements. For enterprise clients, we support SOC 2 Type II and ISO 27001 audit requirements."],
  ["How long does a healthcare software project take?","A telemedicine MVP (video consultation, appointment booking, basic EHR): 14–20 weeks. A full patient management and EHR system: 20–36 weeks depending on integrations. Diagnostic AI model development: 16–28 weeks depending on dataset availability and validation requirements. ABDM integration adds 4–8 weeks to any project timeline. We give accurate estimates after a discovery session."],
  ["Do you work with hospitals, clinics, or health tech startups?","All three. Our work ranges from early-stage health tech startups building their first product to hospital groups modernising legacy HIS systems and diagnostic chains building patient-facing apps. The engineering requirements differ significantly — a startup MVP and a hospital's core patient record system need different approaches to architecture, data migration, and deployment."],
  ["What does healthcare software development cost in India?","Telemedicine platform MVP: ₹12–25 lakhs. Patient management system: ₹15–35 lakhs. Diagnostic AI model: ₹18–40 lakhs. ABDM integration module: ₹4–8 lakhs. Full hospital information system: ₹40–100 lakhs+. These are starting ranges — actual cost depends on integration count, regulatory requirements, and whether AI components are included."],
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
    { "@type": "ListItem", position: 3, name: "Healthcare",     item: "https://www.crenosoft.in/industries/healthcare" },
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
          <div style={{ fontSize:56,marginBottom:20 }}>🏥</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Healthcare Software Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            ABDM-compliant patient management, telemedicine platforms, diagnostic AI, and EHR systems — built by engineers who understand India's health data regulations, NPCI payment integration, and the real workflows of Indian healthcare providers.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your Healthcare Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India's Healthcare Digitisation Has Specific Technical Requirements</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India's digital health market is projected to reach{" "}
            <a href="https://www.ibef.org/industry/healthcare-india" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>$50 billion by 2033 according to IBEF</a>
            , driven by telemedicine adoption post-pandemic, the rollout of the Ayushman Bharat Digital Mission, and a growing private healthcare sector that is investing in operational efficiency. But building software for this market is not the same as adapting a Western electronic health record or telemedicine platform for Indian conditions.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The{" "}
            <a href="https://abdm.gov.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Ayushman Bharat Digital Mission</a>{" "}
            has built a national health data infrastructure — Health IDs, health facility registries, and consent-based data sharing — that any serious healthcare software product must now account for. The{" "}
            <a href="https://main.mohfw.gov.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Ministry of Health and Family Welfare's</a>{" "}
            Digital Information Security in Healthcare Act framework adds specific data handling obligations. And the practical reality of Indian healthcare — multiple languages, varied device capabilities, fragmented insurance coverage — demands software built for this context.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We build healthcare software that accounts for all of this from day one. Our team has integrated with ABDM APIs, built telemedicine platforms under MCI guidelines, and developed diagnostic AI systems trained on Indian patient data. See our broader approach:{" "}
            <Link href="/blog/custom-ai-software-development-india-2025" style={{ color:"#3d3d3d",fontWeight:500 }}>Custom AI Software Development in India →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Healthcare Products We Develop</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build for Healthcare</h2>
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

      {/* Regulatory Box */}
      <section style={{ background:"#f5f5f7",padding:"64px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ background:"#fff",borderRadius:20,padding:"36px 32px",border:"1px solid #e5e5ea" }}>
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Regulatory Frameworks We Work With</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["ABDM","Health ID, ABHA, Health Facility Registry, consent framework, FHIR data standards"],
                ["MCI / NMC","Telemedicine Practice Guidelines 2020, clinical documentation standards"],
                ["DISHA","Health data security, patient consent, breach notification, data localisation"],
                ["DPDP Act","Personal data handling, right to erasure, consent management for health records"],
                ["CDSCO","Software as Medical Device guidelines for AI diagnostic tools"],
                ["IRDAI","Digital health insurance integrations, cashless claim processing APIs"],
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
              ["LLM Integration Guide: Building AI into Healthcare Software","/blog/llm-integration-guide"],
              ["Custom AI Software Development India: Costs & Process","/blog/custom-ai-software-development-india-2025"],
              ["AI Automation for Indian Businesses","/blog/ai-automation-india-2025"],
              ["Cloud Migration for Indian Startups: Security & Compliance","/blog/cloud-migration-guide-indian-startups-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in Healthcare Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["AI Software Development","/services/ai-software-development"],["Web Development","/services/web-development"],["Mobile App Development","/services/mobile-app-development"],["Cloud Solutions","/services/cloud-solutions"],["UI/UX Design","/services/ui-ux-design"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building a healthcare product in India?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review the regulatory requirements, suggest an architecture, and give you a realistic scope and cost estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
