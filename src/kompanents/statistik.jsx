import { useState, useEffect, useRef } from "react";

const STATS = [
  {
    icon: "👥",
    label: "Jami o'quvchilar",
    value: 1248,
    suffix: "+",
    desc: "Barcha kurslar bo'yicha",
  },
  {
    icon: "📐",
    label: "Matematika sertifikati",
    value: 342,
    suffix: "",
    desc: "Muvaffaqiyatli bitiruvchilar",
  },
  {
    icon: "ENG",
    label: "Ingliz tili sertifikati",
    value: 487,
    suffix: "",
    desc: "Muvaffaqiyatli bitiruvchilar",
  },
  {
    icon: "RU",
    label: "Rus tili sertifikati",
    value: 198,
    suffix: "",
    desc: "Muvaffaqiyatli bitiruvchilar",
  },
];

function useCounter(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, active]);
  return count;
}

function StatCard({ stat, active, index }) {
  const count = useCounter(stat.value, active);

  return (
    <div id="statistik">
      <div 
      className="relative bg-white rounded-3xl p-7 flex flex-col gap-4 overflow-hidden group"
      style={{
        boxShadow: "0 2px 20px rgba(59,130,246,0.08)",
        border: "1.5px solid #dbeafe",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ${index * 0.12}s ease, transform 0.6s ${index * 0.12}s ease`,
      }}
    >
      {/* top accent line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full" />

      {/* hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

      {/* icon */}
      <div className="relative w-12 h-12 rounded-2xl text-orange-500 font-bold bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl">
        {stat.icon}
      </div>

      {/* number */}
      <div className="relative">
        <div className="text-4xl font-black text-orange-600 tracking-tight leading-none">
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div className="mt-1.5 text-sm font-bold text-slate-700">{stat.label}</div>
        <div className="mt-1 text-xs text-slate-400">{stat.desc}</div>
      </div>

      {/* bottom progress bar */}
      <div className="relative h-1.5 bg-orange-50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          style={{
            width: active ? `${Math.min((stat.value / 1248) * 100, 100)}%` : "0%",
            transition: `width 1.6s ${index * 0.12 + 0.3}s ease`,
          }}
        />
      </div>
    </div>
    </div>
  
  );
}

export default function Statistics() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-orange-50 py-24 px-6">

      {/* Header */}
      <div
        className="text-center mb-14"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "none" : "translateY(16px)",
          transition: "all 0.6s ease",
        }}
      >
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          📊 Statistika
        </span>
        <h2 className="text-4xl font-black text-slate-800 leading-tight">
          Bizning natijalarimiz
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-xs mx-auto">
          2025-yil davomida erishilgan ko'rsatkichlar
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} active={active} index={i} />
        ))}
      </div>

      {/* Bottom banner */}
      <div
        className="max-w-5xl mx-auto mt-8 bg-orange-600 rounded-3xl px-8 py-6 flex flex-wrap justify-around items-center gap-6"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 0.7s 0.6s ease",
          boxShadow: "0 8px 32px rgba(59,130,246,0.25)",
        }}
      >
        {[
          { label: "Muvaffaqiyat darajasi", value: "95%" },
          { label: "Yil tajriba", value: "5+" },
          { label: "O'qituvchilar", value: "12" },
          { label: "Kurslar", value: "3" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-black text-white">{item.value}</div>
            <div className="text-orange-200 text-xs font-semibold mt-1">{item.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}