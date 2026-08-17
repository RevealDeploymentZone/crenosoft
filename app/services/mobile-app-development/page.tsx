import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Company India — iOS, Android, React Native, Flutter | Crenosoft",
  description: "Mobile app development in India — React Native, Flutter, Swift, Kotlin. Tested on real Indian Android devices. UPI payments, multilingual support, DPDP-compliant. Lucknow.",
  keywords: ["mobile app development India","React Native development India","Flutter app development India","iOS Android app development India","cross-platform app India","mobile app development Lucknow"],
  alternates: { canonical: "https://www.crenosoft.in/services/mobile-app-development" },
};

const CAPS = [
  ["📱","React Native Development","One TypeScript codebase, two platforms. Full-featured iOS and Android apps with Expo, React Navigation, Zustand state management, Firebase Cloud Messaging, and real-time capabilities — deployed to TestFlight and Google Play."],
  ["🎨","Flutter Development","Google's Skia/Impeller-powered framework for pixel-perfect, brand-consistent UIs across iOS and Android. Ideal for products with complex animations and custom design that standard components cannot deliver."],
  ["🍎","Native iOS (Swift)","SwiftUI and UIKit for products that need deep platform integration — Face ID, HealthKit, ARKit, Core Data, or Apple Watch. Native feels native when it matters."],
  ["🤖","Native Android (Kotlin)","Jetpack Compose and Android Architecture Components for India's dominant platform. We test across the full range of Indian OEM hardware — Xiaomi, Samsung, Realme, Vivo, and entry-level devices."],
  ["🧠","AI Features in Mobile","On-device ML with TensorFlow Lite and Core ML for privacy-preserving inference. Cloud AI via OpenAI, Anthropic, or Google Gemini for complex language tasks. Document scanning with OCR, personalisation, and smart search."],
  ["🚀","App Store Publishing","App Store Connect and Google Play Console setup, ASO (keyword research, screenshots, descriptions), privacy policy compliance, review rejection management, and staged rollout handling."],
];

const PROCESS = [
  ["01","Discovery & Platform Decision","We review requirements, target audience, budget, and timeline — and give you a frank recommendation on platform and technology. We define the MVP feature set and identify non-negotiables."],
  ["02","UX Design & Prototyping","Mobile-first design in Figma with thumb zone analysis, platform conventions (Apple HIG and Material 3), and an interactive prototype for user testing before development starts."],
  ["03","Development","Two-week sprints with TestFlight (iOS) or APK (Android) builds for every sprint. You test on your actual device — not simulator screenshots."],
  ["04","QA & Device Testing","Tested across a device matrix: multiple iOS versions, and multiple Android OEM devices (Xiaomi, Samsung, Realme) including entry-level hardware. Network condition testing for 4G and poor 3G."],
];

const FAQS = [
  ["Should we build native or cross-platform?","Cross-platform (React Native or Flutter) for most cases — one codebase, two platforms, faster launch, lower cost. Native Swift or Kotlin when you need deep hardware integration (ARKit, HealthKit, Bluetooth), performance-critical features like real-time video, or when your target audience is strongly iOS or strongly Android. Read the full comparison: React Native vs Flutter in 2025."],
  ["How long does it take to build a mobile app?","A focused MVP (core features, no scope creep): 10–16 weeks for cross-platform. Native apps for two platforms: 20–30 weeks. Timeline depends heavily on design complexity, number of backend integrations, and feedback speed during sprints. We give detailed estimates after the discovery phase."],
  ["Do you integrate Indian payment gateways?","Yes — Razorpay, Cashfree, PhonePe Business, and PayU for UPI, netbanking, wallets, and card payments. We handle the full integration including deep link handling for UPI apps, webhook management, and GST-compliant invoice generation."],
  ["How do you handle performance on affordable Indian Android devices?","We profile and optimise on real entry-level hardware (₹8,000–15,000 price range with 3–4GB RAM). This means aggressive image lazy loading, minimal bundle size, background task optimisation, and memory leak prevention. An app that performs on a Redmi A3 performs everywhere."],
  ["Can you add AI features to our existing app?","Yes. Common additions: AI-powered search, document scanning with OCR, chatbot integration, personalisation features, and recommendation systems. We audit the existing codebase first to understand what is practical to integrate versus what would require architectural changes."],
  ["What about App Store review rejections?","Apple rejects a significant percentage of first submissions. We minimise this with complete privacy policy documentation, accurate data usage disclosures, correct age ratings, and review of known rejection triggers before submission. When rejections do happen, we handle the resolution."],
];

const PRICING: [string,string][] = [
  ["Simple app (iOS + Android)","₹4–8 lakhs"],
  ["Consumer app with auth, profiles, feeds","₹8–18 lakhs"],
  ["E-commerce app with payments","₹12–25 lakhs"],
  ["On-demand / marketplace app","₹20–45 lakhs"],
  ["AI-powered mobile app","₹15–35 lakhs"],
  ["Enterprise mobile app","₹25–60 lakhs"],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp-card:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:900px){.cap-grid{grid-template-columns:repeat(2,1fr)!important}.price-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.cap-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>📱</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:20 }}>Mobile App Development</h1>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:560,margin:"0 auto 40px",lineHeight:1.65 }}>
            iOS and Android apps that work on real Indian hardware — from flagship iPhones to ₹8,000 Redmi phones. React Native, Flutter, Swift, and Kotlin. Full-cycle from design to App Store.
          </p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#3d3d3d",color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Build Your App →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background:"#fff",padding:"72px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:20,lineHeight:1.2 }}>Building for India&apos;s Mobile Market</h2>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            India has{" "}
            <a href="https://www.statista.com/statistics/467163/forecast-of-smartphone-users-in-india/" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>over 750 million smartphone users</a>{" "}
            — the second-largest mobile market in the world.{" "}
            <a href="https://www.statista.com/statistics/272698/global-market-share-held-by-mobile-operating-systems-since-2009/" target="_blank" rel="noopener noreferrer" style={{ color:"#3d3d3d",fontWeight:500 }}>Android holds over 95%</a>{" "}
            of India&apos;s smartphone market share. For most Indian consumer products, mobile is the primary product.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78,marginBottom:16 }}>
            Building for India is different from building for the US or Europe. A significant portion of users run mid-range and entry-level devices with 3–4GB RAM. UPI is the default payment method — not cards. Connectivity ranges from fiber at 100Mbps in Delhi to 2G in rural districts. Apps that perform beautifully on a flagship but lag on a Redmi A3 get uninstalled and one-starred.
          </p>
          <p style={{ fontSize:16,color:"#6e6e73",lineHeight:1.78 }}>
            We design and test across this full spectrum. Read our framework decision guide:{" "}
            <Link href="/blog/react-native-vs-flutter" style={{ color:"#3d3d3d",fontWeight:500 }}>React Native vs Flutter in 2025: The Honest Comparison →</Link>
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <p style={{ fontSize:12,fontWeight:700,color:"#3d3d3d",letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:12 }}>What We Build</p>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em" }}>Our Mobile Development Services</h2>
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
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>Our Mobile Development Process</h2>
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
            <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",marginBottom:12 }}>Mobile App Development Costs</h2>
            <p style={{ fontSize:15,color:"#6e6e73" }}>Cross-platform (React Native or Flutter) pricing. Native increases cost by 40–70%. All prices exclude GST and App Store developer fees.</p>
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
              ["React Native vs Flutter in 2025: Which Is Right for Your Project?","/blog/react-native-vs-flutter"],
              ["How to Build an AI-Powered SaaS Product in India in 2025","/blog/building-ai-powered-saas-india-2025"],
              ["UI/UX Design Trends for Indian Mobile Products in 2025","/blog/ui-ux-design-trends-2025-india"],
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
          {([["UI/UX Design","/services/ui-ux-design"],["Web Development","/services/web-development"],["AI Software Development","/services/ai-software-development"],["Cloud Solutions","/services/cloud-solutions"]] as [string,string][]).map(([n,h])=>(
            <Link key={h} href={h} style={{ border:"1px solid #d2d2d7",color:"#1d1d1f",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:500,textDecoration:"none" }}>{n} →</Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#3d3d3d",padding:"72px 24px",textAlign:"center" as const }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Tell us about your app idea</h2>
        <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",marginBottom:32,maxWidth:480,margin:"0 auto 32px" }}>We will review your concept, ask the questions that matter, and give you a clear breakdown of cost and timeline. No commitment required.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#3d3d3d",padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>Discuss Your App Idea →</Link>
      </section>
    </>
  );
}
