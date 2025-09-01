// src/app/projects/page.js
import ProjectsSection from '@/components/ProjectsSection';

// สร้างข้อมูลจำลองขึ้นมาใช้ชั่วคราว
const mockProjects = [
  {
    title: 'ทดสอบโปรเจกต์ 1',
    description: 'นี่คือคำอธิบายของโปรเจกต์ทดสอบ',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500',
    projectUrl: '#',
    category: 'Web Application',
  },
  {
    title: 'ทดสอบโปรเจกต์ 2',
    description: 'นี่คือคำอธิบายอีกอัน',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500',
    projectUrl: '#',
    category: 'UX/UI Design',
  },
];

export default function ProjectsPage() {
  // ส่งข้อมูลจำลองเข้าไปใน Component แทน
  return (
    <ProjectsSection projects={mockProjects} />
  );
}