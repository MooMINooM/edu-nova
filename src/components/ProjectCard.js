import Image from 'next/image'; // 1. นำเข้า Image

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="...">
      {/* 2. เปลี่ยน <img> เป็น <Image> */}
      <Image 
        src={imageUrl} 
        alt={title} 
        width={400} // 3. เพิ่ม width
        height={192} // 4. เพิ่ม height (สัดส่วน 400x192 ใกล้เคียง h-48)
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        {/* ... */}
      </div>
    </div>
  );
}