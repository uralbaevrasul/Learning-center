export default function Footer() {
    return (
      <footer className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
  
          {/* Chap qism – kontakt ma'lumot */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Bog‘lanish
            </h3>
  
            <p className="text-blue-700 mb-2">
              O‘quv markazimiz bilan bog‘lanish uchun:
            </p>
  
            <div className="space-y-2 text-blue-800 font-medium">
              <p>📞 +998 90 123 45 67</p>
              <p>📞 +998 93 765 43 21</p>
              <p>📍 Qo‘ng‘irot tumani</p>
            </div>
          </div>
  
          {/* O‘ng qism – xabar yuborish formasi */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">
              Bizga xabar yuboring
            </h4>
  
            <form className="space-y-4 text-blue-700">
  
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full rounded-lg border border-blue-500 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
  
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                className="w-full rounded-lg border border-blue-500 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
  
              <textarea
                rows={4}
                placeholder="Qaysi kursga yozilmoqchisiz (Qaysi yo‘nalish bo‘yicha)?"
                className="w-full rounded-lg border border-blue-500 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              />
  
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-300
                           text-blue-50 font-semibold py-2.5 rounded-lg
                           transition"
              >
                Yuborish
              </button>
            </form>
          </div>
  
        </div>
  
        {/* pastki chiziq */}
        <div className="border-t border-blue-100 text-center py-4 text-blue-700 text-sm">
          © 2026 O‘quv markazi. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    );
  }