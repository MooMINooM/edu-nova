// src/app/projects/[slug]/page.js
import { getProjectBySlug, getProjectsData } from '@/lib/googleSheets';
import Image from 'next/image';
import Link from 'next/link';

// บังคับให้ดึงข้อมูลใหม่เสมอเมื่อ deploy
export const revalidate = 0;

export default async function ProjectDetailPage({ params }) {
  const { slug } = params;

  // ดึงข้อมูลหลัก (จาก Sheet1) และข้อมูลละเอียด (จาก ProjectDetails)
  const projects = await getProjectsData();
  const project = projects.find(p => p.slug === slug);
  const details = await getProjectBySlug(slug);
  
  // กรณีที่ไม่พบข้อมูล ให้แสดงข้อความ
  if (!project || !details) {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-cyan-400 hover:text-cyan-300">&larr; Back to Projects</Link>
        </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        {/* ปุ่มกลับหน้าหลัก */}
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to All Projects</Link>
        
        {/* ส่วนหัวเรื่อง */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.description}</p>
        
        {/* รูปภาพหลัก */}
        <div className="mb-8">
          <Image src={details.imageGallery1 || project.imageUrl} alt={project.title} width={1200} height={675} className="rounded-lg shadow-lg w-full object-cover" />
        </div>

        {/* เนื้อหารายละเอียด */}
        <div className="prose prose-invert lg:prose-xl max-w-none whitespace-pre-line mb-8">
          <h2 className="text-3xl font-bold mb-4">Project Details</h2>
          <p>{details.longDescription}</p>
        </div>

        {/* รูปภาพเพิ่มเติม (ถ้ามี) */}
        {details.imageGallery2 && (
          <div className="mb-8">
            <Image src={details.imageGallery2} alt={`${project.title} - extra image`} width={1200} height={675} className="rounded-lg shadow-lg w-full object-cover" />
          </div>
        )}
        
        {/* ปุ่มไปยังผลงานจริง (ถ้ามี) */}
        {project.projectUrl && (
          <div className="text-center mt-12">
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 transition-transform hover:scale-105 inline-block"
            >
              Visit Project Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}