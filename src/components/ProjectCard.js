// src/components/ProjectCard.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ slug, title, description, imageUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link href={`/projects/${slug}`}>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link 
          href={`/projects/${slug}`}
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}