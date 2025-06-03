import { useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutLottie from '../components/AboutLottie';

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About Me | samar khaled';
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Personal Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-dark-800"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center items-center my-8"
            >
              <AboutLottie />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">My Story</h2>
              <p className="mb-4 text-dark-600 dark:text-gray-300">
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
              </p>
              {/* Personal Info List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center">
                  <span className="font-medium text-dark-800 dark:text-white min-w-24">Name:</span>
                  <span className="text-dark-600 dark:text-gray-300">Samar Khaled</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-dark-800 dark:text-white min-w-24">Email:</span>
                  <a href="samarkhaledabd100@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">samarkhaledabd100@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-dark-800 dark:text-white min-w-24">Location:</span>
                  <span className="text-dark-600 dark:text-gray-300">Asyut</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-dark-800 dark:text-white min-w-24">Availability:</span>
                  <span className="text-dark-600 dark:text-gray-300">Freelance</span>
                </div>
              </motion.div>
              <motion.a
                href="https://drive.google.com/file/d/1ZC2ltkV8wExMFqc_dHo6ksfKtP2MscBa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Download size={18} className="mr-2" /> Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;