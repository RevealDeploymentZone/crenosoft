"use client";
import { useEffect, useRef, useCallback } from "react";

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+",  label: "Clients India & Abroad" },
  { value: "4+",   label: "Years Building" },
  { value: "98%",  label: "Retention Rate" },
];

export default function StatsSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    idx.current = (idx.current + 1) % STATS.length;
    const cardW = el.scrollWidth / STATS.length;
    el.scrollTo({ left: cardW * idx.current, behavior: "smooth" });
  }, []);

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(slide, 2500);
  }, [slide]);

  const pause = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    setTimeout(start, 3000);
  }, [start]);

  useEffect(() => {
    start();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [start]);

  return (
    <>
      <style>{`
        .stats-slider{display:none}
        .stats-desktop{display:grid}
        @media(max-width:767px){
          .stats-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:32px 0;gap:0}
          .stats-slider::-webkit-scrollbar{display:none}
          .stats-slider-card{flex:0 0 70vw;scroll-snap-align:center;text-align:center;padding:0 12px;border-right:1px solid #d2d2d7}
          .stats-slider-card:last-child{border-right:none}
          .stats-desktop{display:none!important}
        }
      `}</style>

      {/* Mobile slider */}
      <div
        ref={ref}
        className="stats-slider"
        onTouchStart={pause}
        onClick={pause}
      >
        {STATS.map((s) => (
          <div key={s.label} className="stats-slider-card">
            <div style={{ fontSize:"clamp(30px,8vw,44px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em", lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:13, color:"#6e6e73", marginTop:8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="stat-row stats-desktop" style={{ maxWidth:900, margin:"0 auto", padding:"48px 24px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign:"center", padding:"0 12px", borderRight: i < 3 ? "1px solid #d2d2d7" : "none" }}>
            <div style={{ fontSize:"clamp(30px,4vw,44px)", fontWeight:700, color:"#1d1d1f", letterSpacing:"-0.04em", lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:14, color:"#6e6e73", marginTop:8 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
