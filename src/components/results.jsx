import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import carouselText from "../translations/carouselText";

import img1 from "../images/photo_2026-01-15_22-08-57.jpg";
import img2 from "../images/photo_2026-02-09_00-31-22 (2).jpg";
import img3 from "../images/photo_2026-02-09_00-31-22.jpg";
import img4 from "../images/photo_2026-02-28_23-19-38.jpg";
import img5 from "../images/photo_2026-02-28_23-00-53.jpg";
import img6 from "../images/photo_2026-02-28_23-18-45.jpg";
import img7 from "../images/photo_2026-02-28_23-01-08.jpg";
import img8 from "../images/photo_2026-02-28_23-23-30.jpg";

const CERTIFICATES = [
  { image: img1 }, { image: img2 }, { image: img3 }, { image: img4 },
  { image: img5 }, { image: img6 }, { image: img7 }, { image: img8 },
];

const ITEMS = [...CERTIFICATES, ...CERTIFICATES];

function CertCard({ cert }) {
  return (
    <div className="w-[300px] flex-shrink-0 px-4 group">
      <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-3 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20 group-hover:-rotate-1 group-hover:scale-[1.02]">
        <img src={cert.image} alt="Certificate" className="w-full h-auto rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default function InfiniteCarousel() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.8; 
  const { i18n } = useTranslation();
  const text = carouselText[i18n.language];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section id="results" className="bg-orange-50/30 py-24 px-0 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-orange-50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none z-10" />

      <div className="text-center mb-16 px-6 relative z-10">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-600 bg-orange-100 px-4 py-1.5 rounded-full mb-4 inline-block">
          {text.subtitle}
        </span>
        <h2 className="mt-2 font-black text-4xl md:text-5xl text-slate-900 tracking-tight">
          {text.title}
        </h2>
      </div>

      <div className="relative group/track">
        <div
          ref={trackRef}
          className="flex w-max"
          style={{ willChange: "transform" }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {ITEMS.map((c, i) => (
            <CertCard key={i} cert={c} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-orange-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orange-50 to-transparent z-20 pointer-events-none" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        #results { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </section>
  );
}