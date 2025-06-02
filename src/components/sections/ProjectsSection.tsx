import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';

interface ProjectsSectionProps {
  showAll?: boolean;
}

const ProjectsSection = ({ showAll = true }: ProjectsSectionProps) => {
  const [category, setCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation for section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Filter projects based on category
  const filteredProjects = category === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);

  // Limit projects on home page
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = [
    'all',
    'HTML & Css & Bootstrap & Js',
    'React and Jsx and Tailwind',
    ...new Set(
      projectsData
        .map(project => project.category)
        .filter(cat =>
          cat &&
          !['Fullstack', 'Webapp', 'Frontend', 'Mobile', 'Ai', 'fullstack', 'webapp', 'frontend', 'mobile', 'ai', 'HTML and Css'].includes(cat.trim())
        )
    )
  ];

  return (
    <section ref={sectionRef} className="section bg-white dark:bg-dark-800 animate-on-scroll">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-dark-600 dark:text-gray-300">
            A showcase of my work, including web applications, design projects, and more.
          </p>
        </div>

        {/* Filter Categories */}
        {showAll && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/90 p-2 rounded-full text-dark-800 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="Visit live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/90 p-2 rounded-full text-dark-800 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                  <span className="bg-primary-500/90 px-3 py-1 text-xs font-medium text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-dark-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Link */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline inline-flex items-center">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;