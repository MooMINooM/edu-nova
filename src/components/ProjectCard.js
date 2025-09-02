// src/components/ProjectCard.js
import Image from 'next/image';

// รับ projectUrl มาใช้งาน
export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <a href={projectUrl || '#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a 
          href={projectUrl || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
}