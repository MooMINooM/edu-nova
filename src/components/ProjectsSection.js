// src/components/ProjectsSection.js
"use client"; // กำหนดให้เป็น Client Component เพราะต้องมีปุ่มให้กดได้

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
// **สำคัญ:** เราจะไม่ import getProjectsData ในไฟล์นี้อีกต่อไป

// Component จะ "รับ" ข้อมูล projects มาจาก props แทนการดึงข้อมูลเอง
export default function ProjectsSection({ projects }) {
  // State สำหรับเก็บประเภท (category) ที่กำลังถูกเลือกอยู่
  const [activeCategory, setActiveCategory] = useState('All');

  // useMemo จะคำนวณหาประเภทของโปรเจกต์ทั้งหมดแค่ครั้งแรก หรือเมื่อข้อมูล projects เปลี่ยนแปลง
  const categories = useMemo(() => {
    // ป้องกัน error ถ้าหาก projects ยังไม่มีข้อมูล
    if (!projects || projects.length === 0) {
        return ['All'];
    }
    // สร้างลิสต์ของประเภทที่ไม่ซ้ำกัน และเพิ่ม 'All' เข้าไปเป็นตัวเลือกแรก
    return ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
  }, [projects]);

  // useMemo จะกรองรายการโปรเจกต์เพื่อแสดงผลใหม่
  // ก็ต่อเมื่อ activeCategory หรือ projects มีการเปลี่ยนแปลง
  const filteredProjects = useMemo(() => {
    if (!projects) return []; // ป้องกัน error
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Innovation Repository
        </h2>
        
        {/* ส่วนของปุ่ม Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category 
                ? 'bg-cyan-500 text-gray-900' 
                : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ส่วนแสดงผลงานที่กรองแล้ว */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}