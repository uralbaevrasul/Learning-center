import { useTranslation } from "react-i18next";
import coursesText from "../translations/coursesText";

function Courses() {
  const { i18n } = useTranslation();
  const courses = coursesText[i18n.language];

  return (
    <div id="courses" className="bg-blue-50">
      <div className="flex flex-wrap justify-around items-center gap-6 md:gap-10 px-5 py-10">
        {courses.map((i, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl 
              border border-orange-500 bg-white p-5
              shadow-sm transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl
              hover:border-orange-500/40
              w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] xl:w-80"
          >
            <span
              className="pointer-events-none absolute inset-0 
                bg-gradient-to-br from-orange-500/5 via-indigo-500/5 to-purple-500/5 
                opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <figure className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
              <img
                src={i.src}
                alt={i.alt}
                className="w-7 transition-transform duration-300 group-hover:scale-110"
              />
            </figure>

            <div className="relative z-10">
              <h2
                className="mb-2 text-lg font-semibold text-slate-800 
                  group-hover:text-orange-600 transition-colors"
              >
                {i.name}
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {i.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;