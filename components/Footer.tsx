import Link from "next/link";

const SERVICES = [
  ["AI Software Development", "/services/ai-software-development"],
  ["AI Automation", "/services/ai-automation"],
  ["Web Development", "/services/web-development"],
  ["Mobile App Development", "/services/mobile-app-development"],
  ["Cloud Solutions", "/services/cloud-solutions"],
  ["UI/UX Design", "/services/ui-ux-design"],
];
const INDUSTRIES = [
  ["Fintech", "/industries/fintech"],
  ["Healthcare", "/industries/healthcare"],
  ["E-commerce & D2C", "/industries/ecommerce"],
  ["Logistics", "/industries/logistics"],
  ["EdTech", "/industries/edtech"],
  ["B2B SaaS", "/industries/b2b-saas"],
];
const COMPANY = [["About Us","/about"],["Blog","/blog"],["Careers","/about#careers"],["Contact","/contact"],["Privacy Policy","/privacy"],["Terms","/terms"]];

const FL = { display:"block" as const, fontSize:14, color:"#6e6e73", textDecoration:"none", padding:"4px 0", transition:"color 0.15s" };
const FH = { fontSize:12, fontWeight:700 as const, color:"#1d1d1f", letterSpacing:"0.05em" as const, textTransform:"uppercase" as const, marginBottom:16 };

export default function Footer() {
  return (
    <footer style={{ background:"#f5f5f7", borderTop:"1px solid #d2d2d7" }}>
      <style>{`
        .fl:hover{color:#3d3d3d!important}
        .footer-brand{flex:0 0 260px;min-width:200px}
        .footer-col{flex:1 1 140px;min-width:130px}
        @media(max-width:600px){.footer-brand{flex:0 0 100%}.footer-col{flex:0 0 calc(50% - 12px)}}
      `}</style>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 24px 0" }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:32 }}>

          <div className="footer-brand">
            <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none", marginBottom:16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/crenosoft-logo.png" alt="Crenosoft" style={{ height:"28px", width:"auto", display:"block" }} />
            </Link>
            <p style={{ fontSize:14, color:"#6e6e73", lineHeight:1.7, maxWidth:260, marginBottom:24 }}>
              AI-first software development company in India. We build intelligent products that help businesses grow faster and operate smarter.
            </p>
            <div style={{ display:"flex", gap:20 }}>
              {[["LinkedIn","https://linkedin.com/company/crenosoft"],["Twitter","https://twitter.com/crenosoft"],["GitHub","https://github.com/crenosoft"]].map(([l,h])=>(
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="fl" style={{ fontSize:13, color:"#86868b", textDecoration:"none" }}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <p style={FH}>Services</p>
            {SERVICES.map(([n,h])=><Link key={h} href={h} className="fl" style={FL}>{n}</Link>)}
          </div>

          <div className="footer-col">
            <p style={FH}>Industries</p>
            {INDUSTRIES.map(([n,h])=><Link key={h} href={h} className="fl" style={FL}>{n}</Link>)}
          </div>

          <div className="footer-col">
            <p style={FH}>Company</p>
            {COMPANY.map(([n,h])=><Link key={h} href={h} className="fl" style={FL}>{n}</Link>)}
          </div>

          <div className="footer-col">
            <p style={FH}>Contact</p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <a href="mailto:hello@crenosoft.in" style={{ fontSize:13, color:"#6e6e73", textDecoration:"none" }}>hello@crenosoft.in</a>
              <a href="tel:+918303805307" style={{ fontSize:13, color:"#6e6e73", textDecoration:"none" }}>+91 83038 05307</a>
              <a href="tel:+919939931010" style={{ fontSize:13, color:"#6e6e73", textDecoration:"none" }}>+91 99399 31010</a>
              <span style={{ fontSize:13, color:"#6e6e73", lineHeight:1.6 }}>551 KA/A154B, Azad Nagar,<br/>Alambagh, Lucknow – 226005</span>
              <span style={{ fontSize:12, color:"#86868b" }}>Available 24/7</span>
              <span style={{ fontSize:12, color:"#86868b" }}>LLPIN: ACP-2019</span>
            </div>
            <div style={{ marginTop:20 }}>
              <Link href="/contact" style={{ display:"inline-block", background:"#3d3d3d", color:"#fff", padding:"10px 20px", borderRadius:20, fontSize:13, fontWeight:600, textDecoration:"none" }}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop:48, paddingTop:24, paddingBottom:32, borderTop:"1px solid #d2d2d7", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12, fontSize:13, color:"#86868b" }}>
          <span>Copyright &copy; {new Date().getFullYear()} Crenosoft. All rights reserved.</span>
          <div style={{ display:"flex", gap:20 }}>
            <Link href="/privacy" style={{ color:"#86868b", textDecoration:"none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color:"#86868b", textDecoration:"none" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
