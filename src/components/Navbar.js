import Link from 'next/link'; // 1. นำเข้า Link

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        {/* 2. เปลี่ยน <a> เป็น <Link> */}
        <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
          EduNova
        </Link>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}