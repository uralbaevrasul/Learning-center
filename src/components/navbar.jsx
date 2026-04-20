import img1 from "../images/photo_2025-06-16_02-31-05.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {

  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("uz");

  const changeLanguage = (e) => {
    const value = e.target.value;
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <header className="sticky top-0 z-[100] px-4 py-3">
      <nav className="max-w-7xl mx-auto px-6 py-3 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-orange-100 shadow-xl shadow-orange-950/5 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-10 p-4 shadow-2xl bg-white rounded-3xl w-64 border border-orange-50 space-y-2">
              <li><a href="#courses" className="font-bold text-slate-700">{t("navbar.course")}</a></li>
              <li><a href="#results" className="font-bold text-slate-700">{t("navbar.results")}</a></li>
              <li><a href="#statistik" className="font-bold text-slate-700">{t("navbar.stats")}</a></li>
              <li><a href="#prices" className="font-bold text-slate-700">{t("navbar.prices")}</a></li>
            </ul>
          </div>
          <img src={img1} className="w-10 h-10 rounded-xl shadow-sm" alt="logo" />
          <span className="hidden sm:block font-black text-xl text-slate-900 tracking-tighter">LEARNING <span className="text-orange-600">CENTER</span></span>
        </div>

        <div className="hidden lg:flex items-center bg-orange-50/50 rounded-2xl px-2">
          <ul className="menu menu-horizontal gap-1 p-1">
            <li><a href="#courses" className="rounded-xl font-bold text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-colors uppercase tracking-widest">{t("navbar.course")}</a></li>
            <li><a href="#results" className="rounded-xl font-bold text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-colors uppercase tracking-widest">{t("navbar.results")}</a></li>
            <li><a href="#statistik" className="rounded-xl font-bold text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-colors uppercase tracking-widest">{t("navbar.stats")}</a></li>
            <li><a href="#prices" className="rounded-xl font-bold text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-colors uppercase tracking-widest">{t("navbar.prices")}</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <select
              value={lang}
              onChange={changeLanguage}
              className="appearance-none bg-orange-50 border border-orange-100 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer hover:border-orange-300 transition-all outline-none pr-8 shadow-sm"
            >
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
          
          <a href="#footer" className="hidden md:flex px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all">
            {t("navbar.connect")}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;