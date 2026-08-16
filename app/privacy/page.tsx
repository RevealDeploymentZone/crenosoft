import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Crenosoft",
  description: "Read Crenosoft's Privacy Policy to understand how we collect, use, and protect your personal information.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://www.crenosoft.in/privacy" },
};

const SECTIONS = [
  ["1. Information We Collect", "We may collect personal information you voluntarily provide (name, email, phone number) when you fill out our contact form or subscribe to our newsletter. We also collect non-personal data automatically through analytics tools (page views, device type, location region)."],
  ["2. How We Use Your Information", "We use the information we collect to respond to enquiries, improve our website and services, send marketing communications (with your consent), and comply with legal obligations."],
  ["3. Sharing Your Information", "We do not sell, trade, or rent your personal information. We may share data with trusted third-party service providers strictly necessary to operate our business, under confidentiality agreements."],
  ["4. Cookies", "Our website uses cookies to enhance your experience. You may disable cookies in your browser settings, though some features may not function correctly."],
  ["5. Data Security", "We implement industry-standard security measures to protect your data. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security."],
  ["6. Your Rights", "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@crenosoft.in."],
  ["7. Contact Us", "For any privacy-related questions, contact us at hello@crenosoft.in or call +91 83038 05307."],
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight:"100vh", background:"#fff", paddingTop:96, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
      <div style={{ maxWidth:720, margin:"0 auto" }}>
        <Link href="/" style={{ fontSize:13, color:"#3d3d3d", textDecoration:"none", fontWeight:500 }}>← Back to Home</Link>
        <h1 style={{ fontSize:"clamp(28px,4vw,44px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.03em", marginTop:24, marginBottom:8 }}>Privacy Policy</h1>
        <p style={{ fontSize:13, color:"#86868b", marginBottom:48 }}>Last updated: August 2025</p>
        <p style={{ fontSize:15, color:"#3d3d3d", lineHeight:1.75, marginBottom:32 }}>
          Crenosoft (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit <strong>www.crenosoft.in</strong> or engage our services.
        </p>
        {SECTIONS.map(([heading, body]) => (
          <div key={heading} style={{ marginBottom:32 }}>
            <h2 style={{ fontSize:17, fontWeight:700, color:"#1d1d1f", marginBottom:10 }}>{heading}</h2>
            <p style={{ fontSize:15, color:"#3d3d3d", lineHeight:1.75 }}>{body}</p>
          </div>
        ))}
        <div style={{ marginTop:48, padding:"24px", background:"#f5f5f7", borderRadius:16, border:"1px solid #e5e5ea" }}>
          <p style={{ fontSize:13, color:"#6e6e73", lineHeight:1.7 }}>
            <strong style={{ color:"#1d1d1f" }}>Crenosoft</strong> — LLPIN: ACP-2019<br/>
            551 KA/A154B, Azad Nagar, Alambagh, Lucknow, Uttar Pradesh, India – 226005<br/>
            📞 +91 83038 05307 / +91 99399 31010 &nbsp;|&nbsp; ✉ hello@crenosoft.in
          </p>
        </div>
      </div>
    </div>
  );
}
