import { useTranslation } from "react-i18next";
import pricesText from "../translations/pricesText";

function Prices() {
  const { i18n } = useTranslation();
  const price = pricesText[i18n.language]; // tilga qarab matnlarni oladi

  return (
    <section id="prices" className="bg-orange-50/50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Kurs Narxlari</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full shadow-sm" />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {price.map((i, index) => (
            <div
              key={index}
              className="group relative w-full sm:w-[320px] rounded-[2.5rem] border border-orange-200 bg-white p-8 text-center shadow-xl shadow-orange-950/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Premium Kurs
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{i.nomi}</h2>
              <div className="my-6 flex flex-col gap-3">
                {[i.turi1, i.turi2, i.turi3].map((t, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3 text-slate-600 text-sm font-medium">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
              <button
                className="mt-4 relative w-full group/btn overflow-hidden rounded-2xl bg-slate-900 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-orange-600 active:scale-95 shadow-xl"
              >
                <span className="relative z-10">{i.narx}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;