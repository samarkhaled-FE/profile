import { useEffect } from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';

const Projects = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Projects | samar khaled';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of my work showcasing my skills and experience in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsSection showAll={true} />
    </>
  );
};

export default Projects;