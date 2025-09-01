export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* รูปภาพของคุณ */}
          <div className="md:w-1/3">
            <img 
              src="https://photos.fife.usercontent.google.com/pw/AP1GczPB5yqx1DAaxJ97daafbteQhOCL3xxEjTmP8ZoMR0vkBwxDuJeFdsQ6=w160-h160-s-no?authuser=0" // <--- วางลิงก์รูปภาพของคุณที่นี่
              alt="Portrait of the site owner"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg border-4 border-cyan-400"
            />
          </div>
          
          {/* เนื้อหาข้อความ */}
          <div className="md:w-2/3 text-left">
            <p className="text-lg text-gray-300 mb-4">
              สวัสดีครับ! ผมคือนักพัฒนา Full-Stack ที่มีความหลงใหลในการเปลี่ยนไอเดียให้กลายเป็นความจริงผ่านการเขียนโค้ด การเดินทางของผมในโลกเทคโนโลยีเริ่มต้นจากความสงสัยใคร่รู้ จนเติบโตมาเป็นความรักในการสร้างสรรค์ประสบการณ์ดิจิทัลที่สวยงาม มีประสิทธิภาพ และใช้งานง่าย
            </p>
            <p className="text-lg text-gray-300">
              ผมมีความเชี่ยวชาญในระบบนิเวศของ JavaScript โดยทำงานกับเทคโนโลยีอย่าง React, Next.js, และ Node.js เพื่อสร้างเว็บแอปพลิเคชันที่ไร้รอยต่อ ผมเป็นผู้เรียนรู้ตลอดชีวิตและพร้อมเสมอที่จะสำรวจเทคโนโลยีใหม่ๆ และพัฒนาฝีมือของตัวเองอยู่เสมอ
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}