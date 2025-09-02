// src/components/ProjectsSection.js
"use client";

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    if (!projects || projects.length === 0) {
        return ['All'];
    }
    return ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Innovation Repository
        </h2>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category 
                ? 'bg-cyan-500 text-gray-900' 
                : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl} // <-- ส่ง projectUrl แทน slug
            />
          ))}
        </div>
      </div>
    </section>
  );
}