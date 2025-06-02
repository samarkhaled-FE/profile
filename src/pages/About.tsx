import { useEffect } from 'react';
import { Download } from 'lucide-react';
import AboutLottie from '../components/AboutLottie';

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About Me | samar khaled';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Me</h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center items-center my-8">
              <AboutLottie />
            </div>

            {/* Content */}
            <div>
              <h2 className="mb-6">My Story</h2>
              <p className="mb-4 text-dark-600 dark:text-gray-300">
                I'm samar khaled, a full-stack developer based in San Francisco with over 5 years of experience in web development. I specialize in building exceptional digital experiences that are both functional and beautiful.
              </p>
              <p className="mb-4 text-dark-600 dark:text-gray-300">
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
              </p>
              
              {/* Personal Info List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
              </div>
              
              <a 
                href="https://drive.google.com/file/d/1ZC2ltkV8wExMFqc_dHo6ksfKtP2MscBa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;