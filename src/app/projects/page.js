import ProjectsSection from '@/components/ProjectsSection';
import { getProjectsData } from '@/lib/googleSheets';

// บังคับให้หน้านี้เป็น Dynamic และไม่ให้ Cache ข้อมูล
export const revalidate = 0;

export default async function ProjectsPage() {
  const allProjects = await getProjectsData();

  return (
    <ProjectsSection projects={allProjects} />
  );
}