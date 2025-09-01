// src/app/about/page.js
import AboutSection from '@/components/AboutSection';
import { getAboutData } from '@/lib/googleSheets'; // <-- นำเข้าฟังก์ชันใหม่

// บังคับให้ดึงข้อมูลใหม่เสมอ
export const revalidate = 0;

export default async function AboutPage() {
  // ดึงข้อมูล About จาก Google Sheets
  const aboutData = await getAboutData();

  // ส่งข้อมูลที่ได้ไปให้ AboutSection ผ่าน props
  return (
    <AboutSection aboutData={aboutData} />
  );
}