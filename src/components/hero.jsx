import img1 from "../images/photo_2025-06-16_02-31-05.jpg";
import { useTranslation } from "react-i18next";
import heroText from "../translations/heroText";

function Hero() {
  const { i18n } = useTranslation();
  const t = heroText[i18n.language];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-orange-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/40 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-300/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-[fadeIn_1s_ease-out]">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
              Kelajakni biz bilan quring
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              {t.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#footer" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2">
                Ro'yxatdan o'tish
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#courses" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black transition-all hover:border-orange-500 hover:text-orange-600 flex items-center justify-center">
                Kurslarni ko'rish
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group animate-[slideIn_1s_ease-out]">
            <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-6 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] -rotate-3 opacity-5 group-hover:-rotate-6 transition-transform duration-700" />
            <img 
              src={img1} 
              alt="Hero Illustration" 
              className="relative z-10 w-full rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(251,146,60,0.3)] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </section>
  );
}

export default Hero;