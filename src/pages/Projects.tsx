import { motion } from 'framer-motion';
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'circOut' }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'circOut' }}
              viewport={{ once: true }}
              className="mb-6"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'circOut' }}
              viewport={{ once: true }}
              className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A collection of my work showcasing my skills and experience in web development.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* نفترض أن ProjectsSection ترجع عناصر project بشكل map */}
        <ProjectsSection showAll={true} motionChild={true} />
      </motion.div>
    </>
  );
};

export default Projects;