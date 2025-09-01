export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <a href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
          EduNova
        </a>
      </div>
      <ul className="flex gap-6">
        <li>
          <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
        </li>
        <li>
          <a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        </li>
        {/* Contact Link has been removed */}
      </ul>
    </nav>
  );
}