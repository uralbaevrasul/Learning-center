import { useTranslation } from "react-i18next";
import pricesText from "../translations/pricesText";

function Prices() {
  const { i18n } = useTranslation();
  const price = pricesText[i18n.language]; // tilga qarab matnlarni oladi

  return (
    <div id="prices" className="px-5 py-10 flex flex-wrap justify-around items-center bg-orange-200 gap-6">
      {price.map((i, index) => (
        <div
          key={index}
          className="
            group 
            w-full sm:w-[270px] 
            rounded-3xl
            border border-orange-400/60
            bg-gradient-to-b from-white to-orange-100/60
            p-6 text-center
            shadow-md
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{i.nomi}</h2>
          <div className="mx-auto my-4 h-[2px] w-16 rounded-full bg-orange-400" />
          <ul className="mb-6 space-y-2 text-sm text-slate-600">
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              {i.turi1}
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              {i.turi2}
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              {i.turi3}
            </li>
          </ul>
          <button
            className="
              relative w-full overflow-hidden rounded-xl
              bg-gradient-to-r from-orange-500 to-orange-600
              py-3 text-sm font-semibold text-white
              shadow-lg shadow-orange-500/30
              transition-all duration-300
              hover:from-orange-600 hover:to-orange-700
              active:scale-95
            "
          >
            {i.narx}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Prices;