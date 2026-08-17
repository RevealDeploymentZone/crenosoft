"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const NAV_SERVICES = [
  { name: "AI Software Development", href: "/services/ai-software-development", desc: "LLMs, ML models & intelligent apps" },
  { name: "AI Automation", href: "/services/ai-automation", desc: "Workflows, RPA & AI agents" },
  { name: "Web Development", href: "/services/web-development", desc: "Next.js, React & full-stack" },
  { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "iOS, Android & cross-platform" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions", desc: "AWS, GCP, Azure & DevOps" },
  { name: "UI/UX Design", href: "/services/ui-ux-design", desc: "User research & product design" },
];

const NAV_INDUSTRIES = [
  { name: "Fintech", href: "/industries/fintech", desc: "RBI-compliant payments & lending" },
  { name: "Healthcare", href: "/industries/healthcare", desc: "ABDM, telemedicine & diagnostic AI" },
  { name: "E-commerce & D2C", href: "/industries/ecommerce", desc: "UPI, inventory & WhatsApp commerce" },
  { name: "Logistics", href: "/industries/logistics", desc: "Fleet tracking & route optimization" },
  { name: "EdTech", href: "/industries/edtech", desc: "LMS, AI tutors & live classes" },
  { name: "B2B SaaS", href: "/industries/b2b-saas", desc: "Multi-tenant products & billing" },
];

function CrenosoftLogo({ size = 32 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/crenosoft-logo.png" width={size} height={size} alt="Crenosoft" style={{ borderRadius:"50%", objectFit:"cover" }} />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropEnter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const handleDropLeave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };
  const handleIndEnter = () => { if (indCloseTimer.current) clearTimeout(indCloseTimer.current); setIndOpen(true); };
  const handleIndLeave = () => { indCloseTimer.current = setTimeout(() => setIndOpen(false), 120); };

  return (
    <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:9999, background:"rgba(255,255,255,0.92)", backdropFilter:"saturate(180%) blur(20px)", WebkitBackdropFilter:"saturate(180%) blur(20px)", borderBottom:"1px solid rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 22px", height:58, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <CrenosoftLogo size={34} />
          <span style={{ fontSize:17, fontWeight:700, color:"#1d1d1f", letterSpacing:-0.5 }}>crenosoft</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:"flex", alignItems:"center", gap:28, fontSize:13, fontWeight:500 }} className="desk-nav">
          {/* Services dropdown */}
          <div onMouseEnter={handleDropEnter} onMouseLeave={handleDropLeave} style={{ position:"relative" }}>
            <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, fontWeight:500, color:"#1d1d1f", display:"flex", alignItems:"center", gap:4, padding:"4px 0" }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition:"transform 0.2s", transform:open?"rotate(180deg)":"rotate(0)" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {open && <div style={{ position:"absolute", top:"100%", left:"-20px", right:"-20px", height:12, background:"transparent" }} />}
            {open && (
              <div style={{ position:"absolute", top:"calc(100% + 12px)", left:"50%", transform:"translateX(-50%)", width:360, background:"#fff", borderRadius:18, boxShadow:"0 4px 32px rgba(0,0,0,0.12),0 0 0 1px rgba(0,0,0,0.06)", padding:8, zIndex:1000 }}>
                {NAV_SERVICES.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    style={{ display:"block", padding:"10px 14px", borderRadius:10, textDecoration:"none", transition:"background 0.15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#f5f5f7")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                    <div style={{ fontSize:13, fontWeight:600, color:"#1d1d1f" }}>{s.name}</div>
                    <div style={{ fontSize:12, color:"#86868b", marginTop:1 }}>{s.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div onMouseEnter={handleIndEnter} onMouseLeave={handleIndLeave} style={{ position:"relative" }}>
            <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, fontWeight:500, color:"#1d1d1f", display:"flex", alignItems:"center", gap:4, padding:"4px 0" }}>
              Industries
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition:"transform 0.2s", transform:indOpen?"rotate(180deg)":"rotate(0)" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {indOpen && <div style={{ position:"absolute", top:"100%", left:"-20px", right:"-20px", height:12, background:"transparent" }} />}
            {indOpen && (
              <div style={{ position:"absolute", top:"calc(100% + 12px)", left:"50%", transform:"translateX(-50%)", width:320, background:"#fff", borderRadius:18, boxShadow:"0 4px 32px rgba(0,0,0,0.12),0 0 0 1px rgba(0,0,0,0.06)", padding:8, zIndex:1000 }}>
                {NAV_INDUSTRIES.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setIndOpen(false)}
                    style={{ display:"block", padding:"10px 14px", borderRadius:10, textDecoration:"none", transition:"background 0.15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#f5f5f7")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                    <div style={{ fontSize:13, fontWeight:600, color:"#1d1d1f" }}>{s.name}</div>
                    <div style={{ fontSize:12, color:"#86868b", marginTop:1 }}>{s.desc}</div>
                  </Link>
                ))}
                <div style={{ borderTop:"1px solid #f0f0f0", marginTop:4, paddingTop:4 }}>
                  <Link href="/industries" onClick={() => setIndOpen(false)}
                    style={{ display:"block", padding:"10px 14px", borderRadius:10, textDecoration:"none", transition:"background 0.15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#f5f5f7")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                    <div style={{ fontSize:13, fontWeight:600, color:"#3d3d3d" }}>All Industries →</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {[{l:"About",h:"/about"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(n=>(
            <Link key={n.h} href={n.h} style={{ color:"#1d1d1f", textDecoration:"none" }}
              onMouseEnter={e=>(e.currentTarget.style.opacity="0.6")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
              {n.l}
            </Link>
          ))}

          <Link href="/contact"
            style={{ background:"#1d1d1f", color:"#fff", padding:"8px 18px", borderRadius:20, fontSize:12, fontWeight:600, textDecoration:"none", transition:"opacity 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.opacity="0.8")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
            Get Started
          </Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", color:"#1d1d1f", padding:4 }} className="mob-btn">
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {menuOpen && (
        <div style={{ background:"#fff", borderTop:"1px solid #f0f0f0", padding:"16px 22px 24px" }}>
          <p style={{ fontSize:11, fontWeight:700, color:"#86868b", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:10 }}>Services</p>
          {NAV_SERVICES.map(s=>(
            <Link key={s.href} href={s.href} onClick={()=>setMenuOpen(false)}
              style={{ display:"block", padding:"11px 0", color:"#1d1d1f", fontSize:15, fontWeight:500, borderBottom:"1px solid #f5f5f5", textDecoration:"none" }}>
              {s.name}
            </Link>
          ))}
          <p style={{ fontSize:11, fontWeight:700, color:"#86868b", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:10, marginTop:16 }}>Industries</p>
          {NAV_INDUSTRIES.map(s=>(
            <Link key={s.href} href={s.href} onClick={()=>setMenuOpen(false)}
              style={{ display:"block", padding:"11px 0", color:"#1d1d1f", fontSize:15, fontWeight:500, borderBottom:"1px solid #f5f5f5", textDecoration:"none" }}>
              {s.name}
            </Link>
          ))}
          <div style={{ marginTop:8 }}>
            {["About","Blog","Contact"].map(l=>(
              <Link key={l} href={`/${l.toLowerCase()}`} onClick={()=>setMenuOpen(false)}
                style={{ display:"block", padding:"11px 0", color:"#1d1d1f", fontSize:15, fontWeight:500, borderBottom:"1px solid #f5f5f5", textDecoration:"none" }}>
                {l}
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={()=>setMenuOpen(false)}
            style={{ display:"block", marginTop:16, background:"#1d1d1f", color:"#fff", padding:14, borderRadius:12, textAlign:"center", fontSize:15, fontWeight:600, textDecoration:"none" }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width:767px){.desk-nav{display:none!important}.mob-btn{display:flex!important}}
      `}</style>
    </header>
  );
}
