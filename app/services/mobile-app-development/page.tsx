import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development India — iOS, Android & Cross-Platform | Crenosoft",
  description: "Native and cross-platform mobile apps for iOS and Android. React Native, Flutter, Swift, Kotlin — high-performance apps built by experts in India.",
  alternates: { canonical: "https://www.crenosoft.in/services/mobile-app-development" },
};

const ICON = "📱";
const TITLE = "Mobile App Development";
const SUB = "Apps users love and keep coming back to.";
const ACCENT = "#10b981";
const DESC = "Crenosoft builds iOS and Android apps with performance, design, and scalability at their core. From concept to the App Store — we handle everything.";

const ITEMS: [string,string,string][] = [
  ["⚛️","React Native","One codebase, two platforms. Near-native performance with 80% code sharing — perfect for most product teams."],
  ["🎯","Flutter","Google's UI toolkit for pixel-perfect, natively compiled apps with consistent performance across all devices."],
  ["🍎","Swift (iOS Native)","Maximum performance and access to every Apple API — ideal for complex, hardware-heavy iOS experiences."],
  ["🤖","Kotlin (Android Native)","Native Android development for apps requiring deep system integration, custom hardware, or peak performance."],
  ["📲","App Store Submission","Full submission management — screenshots, metadata, privacy compliance, and review response handling."],
  ["🔔","Push & Real-time Features","In-app notifications, real-time chat, offline-first architecture, biometric auth, and in-app purchases."],
];

const FAQS: [string,string][] = [
  ["Native or cross-platform?","For most businesses, React Native or Flutter offers the best balance of quality, speed, and cost. Native is ideal for apps with very specific platform requirements like ARKit or deep Android system integration."],
  ["Do you handle App Store submission?","Yes. We manage the full App Store and Google Play submission process including screenshots, metadata, privacy policy, and responding to review feedback."],
  ["Can you add AI features to a mobile app?","Yes. We integrate on-device AI (Core ML, TensorFlow Lite) for privacy-sensitive features, and cloud AI APIs for NLP, image recognition, and personalisation."],
  ["What happens after launch?","We offer ongoing maintenance packages — keeping your app compatible with OS updates, improving performance, and iterating on user feedback."],
];

export default function Page() {
  return (
    <>
      <style>{`
        .cp3:hover{transform:translateY(-3px)!important;box-shadow:0 12px 32px rgba(0,0,0,.08)!important}
        @media(max-width:700px){.g3{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background:"#f5f5f7",paddingTop:120,paddingBottom:80,paddingLeft:24,paddingRight:24,textAlign:"center",position:"relative",overflow:"hidden",borderBottom:"1px solid #e5e5ea" }}>
        <div style={{ position:"absolute",inset:0,background:"none",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto" }}>
          <Link href="/services" style={{ display:"inline-block",fontSize:13,color:"#86868b",textDecoration:"none",marginBottom:28 }}>← All Services</Link>
          <div style={{ fontSize:56,marginBottom:20 }}>{ICON}</div>
          <h1 style={{ fontSize:"clamp(36px,6vw,64px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.04em",lineHeight:1.06,marginBottom:16 }}>{TITLE}</h1>
          <p style={{ fontSize:16,fontWeight:600,color:ACCENT,marginBottom:16 }}>{SUB}</p>
          <p style={{ fontSize:18,color:"#6e6e73",maxWidth:520,margin:"0 auto 40px",lineHeight:1.65 }}>{DESC}</p>
          <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:ACCENT,color:"#fff",padding:"14px 28px",borderRadius:100,fontWeight:600,fontSize:15,textDecoration:"none" }}>
            Build Your App →
          </Link>
        </div>
      </section>

      <section style={{ background:"#f5f5f7",padding:"80px 24px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em" }}>How we build mobile apps</h2>
          </div>
          <div className="g3" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
            {ITEMS.map(([icon,title,desc])=>(
              <div key={title} className="cp3" style={{ background:"#fff",borderRadius:18,padding:"28px 24px",border:"1px solid rgba(0,0,0,.06)",transition:"transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontSize:28,marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"#fff",padding:"80px 24px" }}>
        <div style={{ maxWidth:720,margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#1d1d1f",letterSpacing:"-0.03em",textAlign:"center",marginBottom:48 }}>Frequently asked questions</h2>
          {FAQS.map(([q,a])=>(
            <div key={q} style={{ padding:"24px 0",borderBottom:"1px solid #e5e5ea" }}>
              <h3 style={{ fontSize:16,fontWeight:700,color:"#1d1d1f",marginBottom:10 }}>{q}</h3>
              <p style={{ fontSize:14,color:"#6e6e73",lineHeight:1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background:ACCENT,padding:"72px 24px",textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginBottom:14 }}>Your app idea deserves expert hands</h2>
        <p style={{ fontSize:16,color:"#6e6e73",marginBottom:32 }}>Let&apos;s discuss your concept and get it live on the App Store.</p>
        <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:ACCENT,padding:"13px 26px",borderRadius:100,fontWeight:700,fontSize:14,textDecoration:"none" }}>
          Discuss Your App Idea →
        </Link>
      </section>
    </>
  );
}
