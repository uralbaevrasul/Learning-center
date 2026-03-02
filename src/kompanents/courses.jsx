function Courses() {
  const courses = [
    {
      src: "./src/images/mathematics_4090351.png",
      alt: "",
      name: "Matematika",
      text: "Matematika kursida o‘quvchilar DTM imtihonlariga va oliy ta’lim muassasalariga kirish testlariga puxta tayyorlanadi. Darslar davomida mantiqiy fikrlash, masalalarni tez va to‘g‘ri yechish ko‘nikmalari shakllantiriladi hamda testlar asosida doimiy nazorat olib boriladi.",
    },
    {
      src: "./src/images/eng_5486259.png",
      alt: "",
      name: "Ingliz tili",
      text: "Ingliz tili kursi o‘quvchilarni xalqaro sertifikatlarga, xususan IELTS imtihoniga tayyorlashga yo‘naltirilgan. Darslarda speaking, listening, reading va writing bo‘yicha alohida mashg‘ulotlar o‘tkazilib, real imtihon formatida sinovlar qilinadi.",
    },
    {
      src: "./src/images/book_5635254.png",
      alt: "",
      name: "Rus tili",
      text: "Rus tili kursida o‘quvchilar til bilimlarini mustahkamlash, erkin muloqot qilish va sertifikat imtihonlariga tayyorlanish imkoniyatiga ega bo‘ladilar. Shuningdek, grammatikani chuqur o‘rganish va amaliy mashqlar orqali tilni tez o‘zlashtirishga e’tibor qaratiladi.",
    },
  ];
  return (
    <div className="bg-blue-50">
      <div className="flex flex-wrap justify-around items-center gap-6 md:gap-10 px-5 py-10">
        {courses.map((i) => (
          <div
            className="group relative overflow-hidden rounded-2xl 
        border border-blue-500 bg-white p-5
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
        hover:border-blue-500/40
        /* Kengliklar: Mobil uchun to'liq, planshet uchun 2ta, kompyuter uchun 3-4ta */
        w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] xl:w-80"
          >
            {/* fon effekt */}
            <span
              className="pointer-events-none absolute inset-0 
          bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 
          opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <figure className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <img
                src={i.src}
                alt={i.alt}
                className="w-7 transition-transform duration-300 group-hover:scale-110"
              />
            </figure>

            <div className="relative z-10">
              <h2
                className="mb-2 text-lg font-semibold text-slate-800 
            group-hover:text-blue-600 transition-colors"
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
