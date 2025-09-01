// src/app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar'; // 1. นำเข้า Navbar
import Footer from '@/components/Footer'; // 2. นำเข้า Footer

export const metadata = {
  title: 'EduNova Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* 3. วาง Navbar ไว้บนสุด */}
        <main>
          {children} {/* `children` คือเนื้อหาของแต่ละหน้าที่จะถูกแทรกตรงนี้ */}
        </main>
        <Footer /> {/* 4. วาง Footer ไว้ล่างสุด */}
      </body>
    </html>
  );
}