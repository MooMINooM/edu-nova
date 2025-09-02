// src/components/AboutSection.js
import Image from 'next/image';

export default function AboutSection({ aboutData }) {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-cyan-400 mb-12">
          {aboutData.mainName || 'ครูมิน'}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3">
            <Image
              src={aboutData.imageUrl || '/placeholder.png'}
              alt="Portrait"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg border-4 border-cyan-400"
            />
          </div>
          <div className="md:w-2/3 text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">ชื่อ-สกุล</h3>
              <p className="text-lg text-gray-300">{aboutData.fullName}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">ประวัติการศึกษา</h3>
              <p className="text-lg text-gray-300 whitespace-pre-line">{aboutData.education}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">อื่นๆ</h3>
              <p className="text-lg text-gray-300 whitespace-pre-line">{aboutData.others}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">เพิ่มเติม</h3>
              <p className="text-lg text-gray-300 whitespace-pre-line">{aboutData.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}