import { useRef, useEffect, } from "react";

const CERTIFICATES = [
  { image:"../src/images/photo_2026-01-15_22-08-57.jpg" },
  { image:"../src/images/photo_2026-02-09_00-31-22 (2).jpg" },
  { image:"../src/images/photo_2026-02-09_00-31-22.jpg" },
  { image:"../src/images/photo_2026-02-28_23-19-38.jpg" },
  { image:"../src/images/photo_2026-02-28_23-00-53.jpg" },
  { image:"../src/images/photo_2026-02-28_23-18-45.jpg"},
  {image:"../src/images/photo_2026-02-28_23-01-08.jpg"},
  {image:"../src/images/photo_2026-02-28_23-23-30.jpg"}
];
const ITEMS = [...CERTIFICATES, ...CERTIFICATES];

export default function InfiniteCarousel() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.6; 

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getHalfWidth = () => track.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= getHalfWidth()) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <div className="bg-blue-50 py-20 px-0  overflow-hidden">
      <div className="text-center mb-12 px-6">
        <span className="text-xs font-extrabold tracking-widest uppercase text-blue-600">
          Sertifikatlar
        </span>
        <h2
          className="mt-2 font-black text-4xl text-slate-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          O'quvchilar muvaffaqiyatlari
        </h2>
      </div>

      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{ willChange: "transform" }}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {ITEMS.map((c, i) => (
            <CertCard key={i} cert={c} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
      `}</style>
    </div>
  );
}

function CertCard({ cert }) {
  return (<div className="w-70 flex justify-center items-center">
    <img src={cert.image}  alt="" className="w-9/10" />
  </div>
  );
}