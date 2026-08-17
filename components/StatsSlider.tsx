"use client";
import { useEffect, useRef, useCallback } from "react";

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+",  label: "Clients India & Abroad" },
  { value: "4+",   label: "Years Building" },
  { value: "98%",  label: "Retention Rate" },
];

export default function StatsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const goTo = useCallback((i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  }, []);

  const next = useCallback(() => {
    if (pausedRef.current) return;
    idxRef.current = (idxRef.current + 1) % STATS.length;
    goTo(idxRef.current);
  }, [goTo]);

  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const handleInteraction = useCallback(() => {
    pausedRef.current = true;
    setTimeout(resume, 3000);
  }, [resume]);

  useEffect(() => {
    timerRef.current = setInterval(next, 2500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  return (
    <>
      <style>{`
        .stats-slider { display: none }
        .stats-desktop { display: grid }
        @media (max-width: 767px) {
          .stats-desktop { display: none !important }
          .stats-slider {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 36px 0;
          }
          .stats-slider::-webkit-scrollbar { display: none }
          .stat-card {
            flex: 0 0 72vw;
            scroll-snap-align: center;
            text-align: center;
            padding: 0 20px;
          }
        }
      `}</style>

      {/* Mobile auto-slider */}
      <div
        ref={containerRef}
        className="stats-slider"
        onTouchStart={handleInteraction}
        onClick={handleInteraction}
      >
        {STATS.map((s) => (
          <div key={s.label} className="stat-card">
            <div style={{ fontSize: "clamp(32px,9vw,48px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 13, color: "#6e6e73", marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="stat-row stats-desktop" style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: "center", padding: "0 12px", borderRight: i < 3 ? "1px solid #d2d2d7" : "none" }}>
            <div style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 14, color: "#6e6e73", marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
