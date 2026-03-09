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
    <>
      <div className="navbar text-orange-600 sticky top-0 z-50 max-w-[1540px] w-full mx-auto rounded-2xl bg-orange-200/20 backdrop-blur-md shadow-sm">

        <div className="navbar-start">
          <div className="dropdown">

            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-orange-50 rounded-box z-1 mt-3 w-52 p-2 shadow">

              <li><a href="#courses">{t("navbar.course")}</a></li>
              <li><a href="#results">{t("navbar.results")}</a></li>
              <li><a href="#statistik">{t("navbar.stats")}</a></li>
              <li><a href="#prices">{t("navbar.prices")}</a></li>

            </ul>

          </div>

          <img src={img1} className="w-10" alt="logo" />
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li><a href="#courses">{t("navbar.course")}</a></li>
            <li><a href="#results">{t("navbar.results")}</a></li>
            <li><a href="#statistik">{t("navbar.stats")}</a></li>
            <li><a href="#prices">{t("navbar.prices")}</a></li>

          </ul>
        </div>


        <select
          value={lang}
          onChange={changeLanguage}
          className="border border-orange-300 rounded-md px-2 py-1 bg-orange-50 text-gray-700 outline-none cursor-pointer"
        >
          <option value="uz">🇺🇿 O'zbek</option>
          <option value="en">🇺🇸 English</option>
          <option value="ru">🇷🇺 Русский</option>
        </select>


        <div className="navbar-end">
          <a href="#footer" className="btn bg-orange-500 border-0">
            {t("navbar.connect")}
          </a>
        </div>

      </div>
    </>
  )
}

export default Navbar;