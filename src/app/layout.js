// src/app/layout.js
import { Noto_Sans_Thai } from 'next/font/google'; // 1. นำเข้าฟอนต์ Noto_Sans_Thai
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 2. ตั้งค่าฟอนต์
const noto_sans_thai = Noto_Sans_Thai({ 
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
  subsets: ['latin', 'thai'] 
});

export const metadata = {
  title: 'EduNova Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. นำชื่อคลาสของฟอนต์ไปใส่ใน <body> */}
      <body className={noto_sans_thai.className}> 
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}