import { useTranslation } from "react-i18next";
import coursesText from "../translations/coursesText";

function Courses() {
  const { i18n } = useTranslation();
  const courses = coursesText[i18n.language];

  return (
    <section id="courses" className="bg-orange-50/50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Bizning Kurslar</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full shadow-sm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((i, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white p-8 shadow-xl shadow-orange-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-orange-50 text-3xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <img
                  src={i.src}
                  alt={i.alt}
                  className="w-10 transition-transform duration-500 group-hover:scale-110 group-hover:invert"
                />
              </div>

              <div className="relative z-10">
                <h2 className="mb-3 text-2xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                  {i.name}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {i.text}
                </p>
                <div className="mt-6 flex items-center text-orange-600 font-black text-xs uppercase tracking-widest gap-2 group/link cursor-pointer">
                  Batafsil ma'lumot
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;