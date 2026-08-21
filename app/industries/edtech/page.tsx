import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EdTech Software Development India — LMS, AI Tutor, Live Classes | Crenosoft",
  description: "Custom EdTech software development in India — learning management systems, adaptive assessments, AI tutors, live class infrastructure, and education SaaS. Lucknow.",
  alternates: { canonical: "https://www.crenosoft.in/industries/edtech" },
};

const WHAT_WE_BUILD = [
  ["📚","Learning Management Systems","Full-featured LMS platforms for schools, coaching institutes, corporate L&D teams, and online education businesses — course creation, video content delivery, quizzes and assessments, student progress tracking, and certificate generation. Built for the Indian education market, which means Hinglish content support, low-bandwidth video playback options, and UPI payment integration for course purchases."],
  ["🎓","Live Class Infrastructure","Real-time video class platforms with multi-participant video, interactive whiteboards, screen sharing, breakout rooms, and recording with automated transcript generation. We build these systems on WebRTC with media server infrastructure sized for the concurrent student volumes Indian coaching institutes actually run — not sized for a Western classroom."],
  ["🤖","AI Tutors & Adaptive Learning","Conversational AI tutors that answer student questions in the context of course material, adaptive assessment systems that adjust difficulty based on student performance, and personalised study plan generators. We build these on top of foundation models with RAG pipelines anchored to course content — so the AI tutor answers questions about your syllabus, not generic knowledge."],
  ["📝","Assessment & Test Platforms","Online examination platforms with anti-cheating controls, timer management, question bank management with randomisation, partial scoring for subjective answers, and detailed performance analytics. For competitive exam preparation platforms, full-length mock test infrastructure that mimics the actual exam interface is critical for student preparation."],
  ["📱","Student & Parent Mobile Apps","Mobile apps for students (course access, live classes, doubt submission, progress tracking) and parents (attendance, performance reports, fee payment). Built in React Native for cross-platform delivery — important when your students are on Android devices ranging from entry-level Redmi phones to flagship Samsungs."],
  ["📊","Learning Analytics & Outcomes","Data analytics platforms that track student engagement, predict dropout risk, identify learning gaps at the cohort level, and measure learning outcomes against target benchmarks. For EdTech companies raising investment or working with institutional clients, demonstrable learning outcomes data is increasingly a commercial requirement, not just a nice-to-have."],
];

const CHALLENGES = [
  ["Building for India's Student Population","India's student population is not a homogeneous group. A platform built for IIT-JEE preparation in Delhi needs to work equally well for a Class 10 student in a small town in Bihar — different device capabilities, different connectivity speeds, different prior knowledge, different language comfort levels. We design EdTech platforms for the full range of the Indian student population, not just the urban, English-fluent, high-bandwidth segment."],
  ["Video Delivery at Indian Bandwidth Conditions","Video is the core content format for most EdTech products, and video delivery in India has to contend with bandwidth variability that does not exist in developed markets. We build video delivery infrastructure on adaptive bitrate streaming — automatically adjusting quality based on available bandwidth — with offline download capability for students who cannot rely on consistent connectivity during their study sessions. CDN selection for Indian geography matters as much as the encoding pipeline."],
  ["Payment and Monetisation for Indian Families","Indian education purchases are often family decisions with specific payment behaviour: EMI preferences for larger course purchases, preference for familiar payment methods (UPI, net banking), and sensitivity to transaction failures during checkout. An EdTech platform that only offers credit card checkout, or that does not support zero-cost EMI through Bajaj Finance or similar partners, leaves significant revenue on the table. We build payment flows designed for how Indian families actually buy education."],
  ["Content Protection and Anti-Cheating","Paid course content needs protection from screen recording, downloading, and redistribution. Online assessments need controls to prevent impersonation and answer sharing. We implement DRM for video content using Widevine and FairPlay, browser-based proctoring with webcam and screen monitoring, and question bank rotation strategies that reduce the effectiveness of paper leaks. These controls need to work across the device range Indian students use, not just on the latest iOS devices."],
];

const FAQS = [
  ["What video infrastructure do you use for live classes?","We build on WebRTC for real-time video, with Janus or mediasoup as the media server layer for multi-participant classes. For large webinar-style sessions (100+ participants), we use scalable infrastructure with SFU (Selective Forwarding Unit) architecture. Recording is handled with automatic cloud storage and CDN distribution. We scale infrastructure to handle the concurrent loads that Indian coaching institutes run — particularly during peak exam season batches."],
  ["Can you build a platform similar to BYJU's or Unacademy?","We can build the technical components that power platforms like these — adaptive learning, live classes, recorded content delivery, doubt resolution, and student analytics. The differentiator for BYJU's and Unacademy is their content and brand, not proprietary technology. We give you the technical foundation; your content team and product vision is what makes it yours."],
  ["How do you handle regional language support in EdTech products?","We build multi-language support from the architecture phase — not as a translation sprint after the product is built. This includes Unicode support throughout the data model, right-to-left text rendering for Urdu, font selection for regional scripts (Devanagari, Tamil, Telugu, Bengali), and language detection for AI tutor responses. For voice-based features, we have integrated with regional language ASR models from Sarvam AI and Bhashini."],
  ["How long does an EdTech platform take to build?","An LMS MVP (course delivery, video, assessments, payments): 12–18 weeks. A live class platform: 14–22 weeks. A full EdTech platform with AI tutor and analytics: 24–36 weeks. A competitive exam prep platform with adaptive testing: 20–32 weeks. Timelines assume content structure and curriculum mapping are available from your team."],
  ["Do you work with schools, coaching institutes, or online-first EdTech startups?","All three. For schools and coaching institutes, we typically modernise existing operations or build digital extensions of their classroom model. For EdTech startups, we build new products from scratch. The product requirements differ significantly, but the underlying technical challenges — video delivery, assessment integrity, payment flows — are consistent across all three."],
  ["What does EdTech software development cost in India?","LMS platform MVP: ₹10–22 lakhs. Live class platform: ₹14–28 lakhs. AI tutor integration: ₹8–18 lakhs. Mobile app (student + parent): ₹8–16 lakhs. Full EdTech platform: ₹30–70 lakhs. Adaptive assessment engine: ₹12–24 lakhs. Prices exclude GST and third-party infrastructure costs (video CDN, cloud hosting)."],
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
    { "@type": "ListItem", position: 3, name: "EdTech",     item: "https://www.crenosoft.in/industries/edtech" },
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
          <div style={{ fontSize:56,marginBottom:20 }}>🎓</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,60px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>EdTech Software Development in India</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:580,margin:"0 auto 40px",lineHeight:1.65 }}>
            Learning management systems, adaptive assessments, AI tutors, live class infrastructure, and student analytics — built for the scale, device diversity, and payment behaviour of India's education technology market.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Discuss Your EdTech Project →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>India's EdTech Market Has Distinct Technical Requirements</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India has the world's largest student population — over 250 million students in schools alone, plus tens of millions in higher education and skill development programmes. The{" "}
            <a href="https://www.ibef.org/industry/education-sector-india" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Indian EdTech market is projected to reach $10.4 billion by 2025 according to IBEF</a>
            . But the technology requirements to serve this market are different from what US or European EdTech companies have built for.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            The{" "}
            <a href="https://www.education.gov.in/national-education-policy-new" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>National Education Policy 2020</a>{" "}
            has accelerated digital adoption across schools and universities. DIKSHA and the{" "}
            <a href="https://swayam.gov.in" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>SWAYAM platform</a>{" "}
            have established digital content delivery norms. And the post-2020 normalisation of live online classes has created a market that expects high-quality video learning as a baseline, not a premium feature.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We build EdTech software for coaching institutes, schools, online education startups, and corporate training platforms across India. Our systems handle the video delivery, assessment, and payment challenges that are specific to this market. See how AI fits into education products:{" "}
            <Link href="/blog/ai-agent-basics" style={{ color:"#3d3d3d",fontWeight:500 }}>What Are AI Agents? How Businesses Use Them →</Link>
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>EdTech Products We Develop</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.035em" }}>How We Build for EdTech</h2>
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
            <h2 style={{ fontSize:"clamp(20px,2.5vw,28px)",fontWeight:700,color:"#1d1d1f",marginBottom:16 }}>Technologies and Integrations We Use</h2>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
              {[
                ["Video Infrastructure","WebRTC, Janus, mediasoup, AWS IVS, Cloudflare Stream, adaptive bitrate HLS"],
                ["Content Protection","Widevine DRM, FairPlay DRM, HLS encryption, watermarking"],
                ["AI / ML","GPT-4o, Claude 3.5, RAG for course-specific Q&A, Sarvam AI for Hindi NLP"],
                ["Payments","Razorpay (UPI + EMI), CCAvenue, Bajaj Finance EMI integration"],
                ["Mobile","React Native (Android + iOS), offline content sync, background download"],
                ["Analytics","Mixpanel, Amplitude, custom learning analytics dashboards"],
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
              ["LLM Integration Guide: Building AI Tutors and Educational Tools","/blog/llm-integration-guide"],
              ["What Are AI Agents? How Businesses Use Them","/blog/ai-agent-basics"],
              ["Custom AI Software Development India: Costs & Process","/blog/custom-ai-software-development-india-2025"],
              ["Building an AI-Powered SaaS Product in India","/blog/building-ai-powered-saas-india-2025"],
            ] as [string,string][]).map(([label,href])=>(
              <Link key={href} href={href} style={{ background:"#fff",borderRadius:12,padding:"16px 20px",border:"1px solid #e5e5ea",fontSize:14,fontWeight:500,color:"#1d1d1f",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                {label}<span style={{ color:"#86868b" }}>→</span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize:13,fontWeight:700,color:"#86868b",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14 }}>Services Used in EdTech Projects</p>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {([["AI Software Development","/services/ai-software-development"],["Mobile App Development","/services/mobile-app-development"],["Web Development","/services/web-development"],["UI/UX Design","/services/ui-ux-design"],["Cloud Solutions","/services/cloud-solutions"]] as [string,string][]).map(([n,h])=>(
              <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",background:"#fff",color:"#1d1d1f",padding:"8px 16px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Building an EdTech product in India?</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",maxWidth:500,margin:"0 auto 32px" }}>Tell us what you are building. We will review the technical requirements, suggest an architecture for your audience and content type, and give you a realistic scope and cost estimate.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Book Free Discovery Call →</Link>
      </section>
    </>
  );
}
