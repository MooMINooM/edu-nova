// src/app/about/page.js
import AboutSection from '@/components/AboutSection';
import { getAboutData } from '@/lib/googleSheets';

export const revalidate = 0; // บังคับให้ดึงข้อมูลใหม่เสมอ

export default async function AboutPage() {
  const aboutData = await getAboutData();
  return (
    <AboutSection aboutData={aboutData} />
  );
}