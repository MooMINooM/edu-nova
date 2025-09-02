// src/app/projects/[slug]/page.js
import { getProjectBySlug, getProjectsData } from '@/lib/googleSheets';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

export default async function ProjectDetailPage({ params }) {
  // ดึงข้อมูลโปรเจกต์ทั้งหมดเพื่อหา title, description (จาก Sheet1)
  const projects = await getProjectsData();
  const project = projects.find(p => p.slug === params.slug);

  // ดึงข้อมูลรายละเอียดของโปรเจกต์นี้ (จาก ProjectDetails)
  const details = await getProjectBySlug(params.slug);
  
  // กรณีที่ไม่พบข้อมูล
  if (!project || !details) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to Projects</Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.description}</p>
        
        <div className="mb-8">
          <Image 
            src={details.imageGallery1 || project.imageUrl} 
            alt={project.title} 
            width={1200} 
            height={675} 
            className="rounded-lg shadow-lg w-full object-cover" 
          />
        </div>

        <div className="prose prose-invert lg:prose-xl max-w-none whitespace-pre-line">
          {details.longDescription}
        </div>

        {/* ส่วนแสดงรูปภาพแกลเลอรีที่ 2 (ถ้ามี) */}
        {details.imageGallery2 && (
          <div className="mt-8">
            <Image 
              src={details.imageGallery2} 
              alt={`${project.title} - extra image`} 
              width={1200} 
              height={675} 
              className="rounded-lg shadow-lg w-full object-cover" 
            />
          </div>
        )}
        
        {/* ส่วนของ Video Demo ถูกลบออกไปแล้ว */}
      </div>
    </div>
  );
}