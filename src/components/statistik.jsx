import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import statisticsText from "../translations/statisticsText";

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
    <div className="relative bg-white rounded-3xl p-7 flex flex-col gap-4 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
         style={{
           boxShadow: "0 10px 30px -10px rgba(251, 146, 60, 0.1)",
           border: "1px solid #ffedd5",
           opacity: active ? 1 : 0,
           transform: active ? "translateY(0px)" : "translateY(28px)",
           transition: `opacity 0.6s ${index*0.12}s ease, transform 0.6s ${index*0.12}s ease, box-shadow 0.3s ease, transform 0.3s ease`
         }}>
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      <div className="relative w-14 h-14 rounded-2xl text-orange-600 bg-orange-50 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="relative">
        <div className="text-4xl font-black text-slate-900 tracking-tight leading-none group-hover:text-orange-600 transition-colors">
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div className="mt-2 text-sm font-bold text-slate-700 uppercase tracking-wider">{stat.label}</div>
        <div className="mt-1 text-xs text-slate-500 leading-relaxed">{stat.desc}</div>
      </div>
      <div className="relative h-1.5 bg-orange-100 rounded-full overflow-hidden mt-2">
        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
             style={{width: active ? `${Math.min((stat.value/1248)*100,100)}%` : "0%", transition: `width 1.6s ${index*0.12+0.3}s ease`}}/>
      </div>
    </div>
  );
}

export default function Statistics() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const { i18n } = useTranslation();

  const text = statisticsText[i18n.language];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setActive(true); }, { threshold: 0.1 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="statistik" ref={ref} className="bg-orange-50/50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"
             style={{opacity: active ? 1 : 0, transform: active ? "none" : "translateY(20px)", transition:"all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"}}>
          <span className="inline-block bg-orange-100 text-orange-600 text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm">
            {text.header.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            {text.header.title}
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {text.header.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.stats.map((s,i) => <StatCard key={i} stat={s} active={active} index={i}/>)}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-[2rem] p-8 md:p-10 flex flex-wrap justify-around items-center gap-8 shadow-2xl shadow-orange-500/20"
             style={{opacity: active?1:0, transform: active ? "scale(1)" : "scale(0.95)", transition:"all 0.7s 0.5s ease-out"}}>
          {text.bottom.map((item,i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform">{item.value}</div>
              <div className="text-orange-100 text-xs font-bold mt-2 uppercase tracking-widest opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}