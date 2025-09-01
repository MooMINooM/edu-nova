import Image from 'next/image'; // 1. นำเข้า Image

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3">
            {/* 2. เปลี่ยน <img> เป็น <Image> และเพิ่ม width/height */}
            <Image
              src="https://drive.google.com/uc?id=1Wwqx4RpGSwlbR6m4tTrtgC590zyCr407"
              alt="Portrait of the site owner"
              width={256}  // 3. กำหนดขนาดกว้าง
              height={256} // 4. กำหนดขนาดสูง
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg border-4 border-cyan-400"
            />
          </div>
          <div className="md:w-2/3 text-left">
            <p className="text-lg text-gray-300 mb-4">
              ผมคือนักพัฒนา Full-Stack ที่มีความหลงใหลในการเปลี่ยนไอเดียให้กลายเป็นความจริงผ่านการเขียนโค้ด
            </p>
            <p className="text-lg text-gray-300">
              ผมมีความเชี่ยวชาญใน JavaScript, React, Next.js, และ Node.js และพร้อมที่จะเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}