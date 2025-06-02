import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Layout, GitBranch } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactCTA from '../components/sections/ContactCTA';
import Lottie from 'lottie-react';
import girlmeAnimation from '../assets/images/girlme.json';

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = 'samar khaled | Web Developer & Designer';
  }, []);

  // Animation for sections
  const animatedRefs = useRef<(HTMLElement | null)[]>([]);

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

    const currentRefs = animatedRefs.current;
    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !animatedRefs.current.includes(el)) {
      animatedRefs.current.push(el);
    }
  };

  return (
    <>
      <HeroSection />
      
      {/* About Preview */}
      <section ref={addToRefs} className="section bg-gray-50 dark:bg-dark-900 animate-on-scroll">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About Me</h2>
              <p className="mb-4 text-dark-600 dark:text-gray-300">
                I'm a passionate web developer and designer with a focus on creating
                beautiful, functional, and performant web applications. With expertise
                in modern frontend technologies, I bring designs to life with clean code
                and attention to detail.
              </p>
              <p className="mb-6 text-dark-600 dark:text-gray-300">
              </p>
              <Link to="/about" className="btn-outline">
                Read More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <Lottie 
                animationData={girlmeAnimation}
                loop={true}
                style={{ width: '100%', maxHeight: 350 }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Preview */}
      <SkillsSection />
      
      {/* Services */}
      <section ref={addToRefs} className="section bg-gray-50 dark:bg-dark-900 animate-on-scroll">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Services I Offer</h2>
            <p className="text-dark-600 dark:text-gray-300">
              I provide end-to-end solutions for your web development needs, from concept to deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10" />,
                title: 'Web Design',
                description: 'Beautiful, intuitive designs that engage users and reflect your brand identity.'
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: 'Web Development',
                description: 'Clean, efficient code that brings designs to life with modern technologies.'
              },
              {
                icon: <GitBranch className="w-10 h-10" />,
                title: 'Code Review & Optimization',
                description: 'Improving existing codebases for better performance and maintainability.'
              }
            ].map((service, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center hover:-translate-y-2 h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-dark-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <ProjectsSection showAll={false} />
    </>
  );
};

export default Home;