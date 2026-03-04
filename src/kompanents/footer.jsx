import { useState } from "react";

function Footer() {
  const userId = "6307407339";
  const token = "8601364594:AAE9jLgtdpauj4CgflW9tbIyaVwUX8Im2DE";
  const [user, setUser] = useState({ name: "", raqam: "", text: "" });
  const[loading,setLoading]=useState(false)
  async function handlesubmit(e) {
    e.preventDefault();
    // if (name.trim()==""|| raqam.trim()=="") {
    //   alert("Birinchi ma'lumot to'ldiring")
    //   return
    // }
    try {
      setLoading(true)
      let res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: userId,
            text: `📝 Foydalanuvchi

          👤 Ismi: ${user.name}
          📞 Telefon raqam: ${user.raqam}
          💬 Xabar:${user.text}
          `,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
    finally{
  setTimeout(() => {
    setLoading(false)
  },5000) ;
    }
  }
  return (
    <footer className="bg-orange-50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-orange-600">
            <h3 className="text-xl font-semibold text-orange-900 mb-6">
              Biz bilan bog‘lanish
            </h3>

            <form className="space-y-4" onSubmit={handlesubmit}>
              <input
                onInput={(e) => setUser({ ...user, name: e.target.value })}
                type="input"
                placeholder="Ismingiz"
                className="w-full px-4 py-3 rounded-lg border border-orange-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-orange-300"
              />

              <input
                onInput={(e) =>{ setUser({ ...user, raqam: e.target.value })}}
                type="number"
                placeholder="Telefon raqamingiz"
                className="w-full px-4 py-3 rounded-lg border border-orange-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-orange-300"
              />

              <textarea
                onInput={(e) => setUser({ ...user, text: e.target.value })}
                rows="4"
                placeholder="O‘quv markazga yubormoqchi bo‘lgan savolingiz yoki xabaringiz"
                className="w-full px-4 py-3 rounded-lg border border-orange-500 bg-white
                           focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
{loading?<button
                type="submit"
                className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium
                           hover:bg-orange-600 transition"
                           disabled
              >
               Jo'natilmoqda
              </button>:
              <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium
                         hover:bg-orange-600 transition"
                        
            >
             Jo'natish
            </button>}
              
            </form>
            {
              loading&&<>
              <div className="toast toast-bottom toast-start">
  <div className="alert alert-success">
    <span>Ma'lumot jo'natildi.</span>
  </div>
</div></>
            }
          </div>

          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-semibold text-orange-900 mb-6">
              O‘quv markaz bilan aloqa
            </h3>

            <p className="text-orange-800 mb-3">
              Telefon:
              <span className="ml-2 font-medium">+998 90 123 45 67</span>
            </p>

            <p className="text-orange-800 mb-6">
              Email:
              <span className="ml-2 font-medium">info@oqiwmarkaz.uz</span>
            </p>

            <p className="text-orange-700 leading-relaxed max-w-md">
              Siz ushbu forma orqali o‘quv markazimizga kurslar (matematika,
              ingliz tili, rus tili) bo‘yicha savollar, ro‘yxatdan o‘tish va
              maslahat olish uchun murojaat yuborishingiz mumkin.
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t border-orange-100 flex flex-col md:flex-row
                        items-center justify-between gap-3"
        >
          <p className="text-sm text-orange-700">
            © 2026 O‘quv markazi. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-sm text-orange-600">
            Matematika • Ingliz tili • Rus tili
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
