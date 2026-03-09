import img1 from "../images/photo_2025-06-16_02-31-05.jpg";
import { useTranslation } from "react-i18next";
import heroText from "../translations/heroText";

function Hero() {
  const { i18n } = useTranslation();
  const t = heroText[i18n.language];

  return (
    <div className="hero bg-orange-50 min-h-screen bg-[url(../src/images/photo_2025-10-10_01-01-24.jpg)]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{t.title}</h1>
          <p className="py-6 font-medium">{t.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;