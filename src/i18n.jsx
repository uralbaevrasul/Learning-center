import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          navbar: {
            course: "Kurs haqida",
            results: "Natijalar",
            stats: "Statistika",
            prices: "Narxlar",
            connect: "Ulanish"
          }
        }
      },
    
      en: {
        translation: {
          navbar: {
            course: "About course",
            results: "Results",
            stats: "Statistics",
            prices: "Prices",
            connect: "Contact"
          }
        }
      },
    
      ru: {
        translation: {
          navbar: {
            course: "О курсе",
            results: "Результаты",
            stats: "Статистика",
            prices: "Цены",
            connect: "Связаться"
          }
        }
      }
    }
  });

export default i18n;