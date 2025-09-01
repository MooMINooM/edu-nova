export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}