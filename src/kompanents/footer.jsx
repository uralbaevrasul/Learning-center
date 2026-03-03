function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="text-blue-600">
            <h3 className="text-xl font-semibold text-blue-900 mb-6">
              Biz bilan bog‘lanish
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full px-4 py-3 rounded-lg border border-blue-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full px-4 py-3 rounded-lg border border-blue-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <textarea
                rows="4"
                placeholder="O‘quv markazga yubormoqchi bo‘lgan savolingiz yoki xabaringiz"
                className="w-full px-4 py-3 rounded-lg border border-blue-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium
                           hover:bg-blue-600 transition"
              >
                Yuborish
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-semibold text-blue-900 mb-6">
              O‘quv markaz bilan aloqa
            </h3>

            <p className="text-blue-800 mb-3">
              Telefon:
              <span className="ml-2 font-medium">+998 90 123 45 67</span>
            </p>

            <p className="text-blue-800 mb-6">
              Email:
              <span className="ml-2 font-medium">info@oqiwmarkaz.uz</span>
            </p>

            <p className="text-blue-700 leading-relaxed max-w-md">
              Siz ushbu forma orqali o‘quv markazimizga kurslar
              (matematika, ingliz tili, rus tili) bo‘yicha savollar,
              ro‘yxatdan o‘tish va maslahat olish uchun murojaat yuborishingiz mumkin.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-100 flex flex-col md:flex-row
                        items-center justify-between gap-3">
          <p className="text-sm text-blue-700">
            © 2026 O‘quv markazi. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-sm text-blue-600">
            Matematika • Ingliz tili • Rus tili
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;