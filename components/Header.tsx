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

function CrenosoftLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/crenosoft-logo.png" alt="Crenosoft" style={{ height:"36px", width:"auto", display:"block" }} />
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
        <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
          <CrenosoftLogo />
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
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{ display:"none", background:"none", border:"none", outline:"none", cursor:"pointer", color:"#1d1d1f", padding:6 }} className="mob-btn">
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            : <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {menuOpen && (
        <div style={{ background:"#fff", borderTop:"1px solid #f0f0f0", padding:"20px 20px 28px", maxHeight:"80vh", overflowY:"auto" }}>

          {/* Quick links */}
          <div style={{ display:"flex", gap:8, marginBottom:20 }}>
            {[{l:"About",h:"/about"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(n=>(
              <Link key={n.h} href={n.h} onClick={()=>setMenuOpen(false)}
                style={{ flex:1, textAlign:"center", padding:"8px 0", background:"#f5f5f7", borderRadius:10, fontSize:13, fontWeight:500, color:"#1d1d1f", textDecoration:"none" }}>
                {n.l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <p style={{ fontSize:11, fontWeight:700, color:"#86868b", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:8 }}>Services</p>
          <div style={{ background:"#f5f5f7", borderRadius:14, overflow:"hidden", marginBottom:16 }}>
            {NAV_SERVICES.map((s, i)=>(
              <Link key={s.href} href={s.href} onClick={()=>setMenuOpen(false)}
                style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", color:"#1d1d1f", fontSize:14, fontWeight:500, borderBottom: i < NAV_SERVICES.length-1 ? "1px solid #e5e5ea" : "none", textDecoration:"none", background:"transparent" }}>
                <span>{s.name}</span>
                <span style={{ color:"#86868b", fontSize:12 }}>›</span>
              </Link>
            ))}
          </div>

          {/* Industries */}
          <p style={{ fontSize:11, fontWeight:700, color:"#86868b", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:8 }}>Industries</p>
          <div style={{ background:"#f5f5f7", borderRadius:14, overflow:"hidden", marginBottom:20 }}>
            {NAV_INDUSTRIES.map((s, i)=>(
              <Link key={s.href} href={s.href} onClick={()=>setMenuOpen(false)}
                style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", color:"#1d1d1f", fontSize:14, fontWeight:500, borderBottom: i < NAV_INDUSTRIES.length-1 ? "1px solid #e5e5ea" : "none", textDecoration:"none", background:"transparent" }}>
                <span>{s.name}</span>
                <span style={{ color:"#86868b", fontSize:12 }}>›</span>
              </Link>
            ))}
          </div>

          <Link href="/contact" onClick={()=>setMenuOpen(false)}
            style={{ display:"block", background:"#1d1d1f", color:"#fff", padding:"14px", borderRadius:14, textAlign:"center", fontSize:15, fontWeight:600, textDecoration:"none" }}>
            Get Started →
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width:767px){.desk-nav{display:none!important}.mob-btn{display:flex!important}}
      `}</style>
    </header>
  );
}
