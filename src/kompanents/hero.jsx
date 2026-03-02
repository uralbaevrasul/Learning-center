import img1 from "../src/images/photo_2025-06-16_02-31-05.jpg";
function Hero() {
    return <>
<div className="hero  bg-blue-50 min-h-screen bg-[url(../src/images/photo_2025-10-10_01-01-24.jpg)]">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={img1}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">O‘qiv markaz haqqida ma‘lumot</h1>
      <p className="py-6 font-medium">
      Gayratdin oqiw orayi — bu zamonaviy ta’lim markazi bo‘lib, u yerda o‘quvchilarga matematika, ingliz tili va rus tili fanlaridan kurslar tashkil etilgan.
Markazda darslar tajribali o‘qituvchilar tomonidan olib boriladi va o‘quv jarayonida qat’iy nazorat yo‘lga qo‘yilgan.

Kurslar davomida o‘quvchilarning davomatiga, bilim darajasiga hamda uy vazifalarining bajarilishiga alohida e’tibor beriladi.
Gayratdin oqiw orayida ta’lim sifati va intizom birinchi o‘rinda turadi.
      </p>
    </div>
  </div>
</div>
    </>
}
export default Hero