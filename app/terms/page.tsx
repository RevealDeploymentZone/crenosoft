import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Crenosoft",
  description: "Read Crenosoft's Terms of Service governing the use of our website and software development services.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://www.crenosoft.in/terms" },
};

const SECTIONS = [
  ["1. Services", "Crenosoft provides software development, AI solutions, and related technology services as described on this website. Specific terms for each project are governed by a separate Statement of Work (SOW) or contract."],
  ["2. Intellectual Property", "Upon full payment, clients receive ownership of all custom code and deliverables created for their project, unless otherwise agreed in writing. Crenosoft retains ownership of pre-existing tools, frameworks, and methodologies."],
  ["3. Limitation of Liability", "Crenosoft's liability shall not exceed the total fees paid for the relevant project in the preceding 3 months. We are not liable for indirect, incidental, or consequential damages."],
  ["4. Governing Law", "These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996."],
  ["5. Contact", "Questions about these terms? Contact us at hello@crenosoft.in or call +91 83038 05307."],
];

export default function TermsPage() {
  return (
    <div style={{ minHeight:"100vh", background:"#fff", paddingTop:96, paddingBottom:80, paddingLeft:24, paddingRight:24 }}>
      <div style={{ maxWidth:720, margin:"0 auto" }}>
        <Link href="/" style={{ fontSize:13, color:"#3d3d3d", textDecoration:"none", fontWeight:500 }}>← Back to Home</Link>
        <h1 style={{ fontSize:"clamp(28px,4vw,44px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.03em", marginTop:24, marginBottom:8 }}>Terms of Service</h1>
        <p style={{ fontSize:13, color:"#86868b", marginBottom:48 }}>Last updated: August 2025</p>
        <p style={{ fontSize:15, color:"#3d3d3d", lineHeight:1.75, marginBottom:32 }}>
          By accessing <strong>www.crenosoft.in</strong> or engaging Crenosoft for services, you agree to these Terms of Service. Please read them carefully.
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
