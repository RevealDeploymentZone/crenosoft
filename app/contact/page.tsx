"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, Briefcase, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  return (
    <>
      <style>{`
        .form-input { width:100%; padding:12px 14px; border:1.5px solid #e5e5e7; border-radius:10px; font-size:14px; color:#111; font-family:inherit; outline:none; transition:border-color 0.2s; background:white; box-sizing:border-box; }
        .form-input:focus { border-color:#3d3d3d; }
        .contact-icon-box { width:44px; height:44px; border-radius:12px; background:#f0f0ff; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .reason-card { background:#f5f5f7; border-radius:16px; padding:20px; border:1px solid rgba(0,0,0,0.05); text-align:center; }
        @media(max-width:767px){
          .contact-hero{padding-top:96px!important;padding-bottom:40px!important}
          .contact-grid{grid-template-columns:1fr!important;gap:40px!important}
          .name-grid{grid-template-columns:1fr!important}
          .contact-sec{padding:40px 20px!important}
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero" style={{ background:"white", paddingTop:120, paddingBottom:64, paddingLeft:24, paddingRight:24, borderBottom:"1px solid #f0f0f0" }}>
        <div style={{ maxWidth:640, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontSize:12, fontWeight:700, color:"#3d3d3d", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:16 }}>Get In Touch</p>
          <h1 style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#111", letterSpacing:-1.5, lineHeight:1.1, marginBottom:16 }}>
            Let&apos;s start a conversation
          </h1>
          <p style={{ fontSize:17, color:"#666", lineHeight:1.6 }}>
            Whether you have a specific project in mind or just exploring what&apos;s possible with AI — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Reason cards */}
      <section style={{ background:"#f5f5f7", padding:"40px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:14 }}>
          {[
            { icon: Briefcase, title: "Start a project", desc: "Have a product idea or business challenge?" },
            { icon: MessageSquare, title: "General enquiry", desc: "Questions about services, process, or pricing?" },
            { icon: HelpCircle, title: "Partnership", desc: "Looking to partner with us on a project?" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="reason-card">
              <div style={{ width:40, height:40, borderRadius:12, background:"white", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                <Icon size={18} style={{ color:"#3d3d3d" }} />
              </div>
              <h3 style={{ fontSize:14, fontWeight:700, color:"#111", marginBottom:4 }}>{title}</h3>
              <p style={{ fontSize:13, color:"#888", lineHeight:1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact-sec" style={{ background:"white", padding:"64px 24px" }}>
        <div className="contact-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>

          {/* Form */}
          <div>
            <h2 style={{ fontSize:24, fontWeight:700, color:"#111", marginBottom:28, letterSpacing:-0.5 }}>Send us a message</h2>
            <form action="https://formsubmit.co/hello@crenosoft.in" method="POST" style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <input type="hidden" name="_subject" value="New Contact Form Submission from Crenosoft Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display:"none" }} />

              <div className="name-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div>
                  <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>First name</label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="Rahul"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>Last name</label>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Sharma"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>Email address</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="rahul@company.com"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>Phone (optional)</label>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>Service you&apos;re interested in</label>
                <select
                  name="Service Interested"
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option>AI Software Development</option>
                  <option>AI Automation</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>UI/UX Design</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#444", marginBottom:6 }}>Tell us about your project</label>
                <textarea
                  name="Message"
                  rows={5}
                  placeholder="Describe your project, challenge, or question..."
                  className="form-input"
                  style={{ resize:"none" }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  background:"#3d3d3d",
                  color:"white",
                  border:"none",
                  padding:"14px",
                  borderRadius:12,
                  fontSize:15,
                  fontWeight:600,
                  cursor:"pointer",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  gap:8,
                  transition:"background 0.2s"
                }}
              >
                Send Message <ArrowRight size={16} />
              </button>
              <p style={{ fontSize:12, color:"#aaa", textAlign:"center" }}>
                We respond within 1 business day. See our{" "}
                <Link href="/privacy" style={{ color:"#3d3d3d", textDecoration:"none" }}>Privacy Policy</Link>.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize:24, fontWeight:700, color:"#111", marginBottom:24, letterSpacing:-0.5 }}>Other ways to reach us</h2>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
              {[
                { icon: Mail, label:"Email us", value:"hello@crenosoft.in", href:"mailto:hello@crenosoft.in" },
                { icon: Phone, label:"Call us", value:"+91 83038 05307 / +91 99399 31010", href:"tel:+918303805307" },
                { icon: MapPin, label:"Location", value:"551 KA/A154B, Azad Nagar, Alambagh, Lucknow, UP – 226005", href:null },
                { icon: Clock, label:"Working Hours", value:"Available 24/7  |  LLPIN: ACP-2019", href:null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display:"flex", alignItems:"center", gap:14, background:"#f5f5f7", padding:"16px", borderRadius:14, border:"1px solid rgba(0,0,0,0.05)" }}>
                  <div className="contact-icon-box"><Icon size={18} style={{ color:"#3d3d3d" }} /></div>
                  <div>
                    <div style={{ fontSize:12, color:"#aaa", marginBottom:2 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize:14, fontWeight:600, color:"#111", textDecoration:"none" }}>{value}</a>
                    ) : (
                      <div style={{ fontSize:14, fontWeight:600, color:"#111" }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:"#f0f0ff", borderRadius:16, padding:24, border:"1px solid #e0e0ff" }}>
              <h3 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:14 }}>Explore our services</h3>
              {[
                { name:"AI Software Development", href:"/services/ai-software-development" },
                { name:"AI Automation Services", href:"/services/ai-automation" },
                { name:"Web Development", href:"/services/web-development" },
                { name:"About Crenosoft", href:"/about" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 0", fontSize:14, color:"#444", textDecoration:"none", borderBottom:"1px solid #e0e0ff" }}>
                  {l.name} <ArrowRight size={14} style={{ color:"#3d3d3d" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
