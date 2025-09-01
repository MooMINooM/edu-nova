export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white flex flex-col justify-center items-center min-h-[calc(100vh-64px)] p-4 text-center">
      
      {/* --- ส่วนหัวข้อหลัก --- */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
        EduNova
      </h1>

      {/* --- ส่วนคำโปรยภาษาไทย --- */}
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-cyan-400 font-semibold">
        ขับเคลื่อนคุณภาพการศึกษา ด้วยนวัตกรรม
      </p>

      {/* --- ส่วนคำโปรยภาษาอังกฤษ --- */}
      <p className="mt-2 max-w-2xl text-base sm:text-lg text-gray-300">
        Driving Educational Quality through Innovation
      </p>

      {/* --- ส่วนปุ่ม --- */}
      <a 
        href="/projects" 
        className="mt-8 px-8 py-3 text-base md:text-lg bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 transition-transform hover:scale-105"
      >
        ชมผลงานของฉัน
      </a>
    </section>
  );
}