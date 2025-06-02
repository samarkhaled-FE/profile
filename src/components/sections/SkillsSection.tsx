import { useRef, useEffect } from 'react';
import '../SkillsMarquee.css';

// Import SVGs as React components or image URLs
import reactRouterIcon from '../../assets/images/react-router-svgrepo-com.svg';
import reduxIcon from '../../assets/images/redux-svgrepo-com.svg';
import tailwindIcon from '../../assets/images/tailwind-svgrepo-com.svg';
import jsIcon from '../../assets/images/js-svgrepo-com.svg';
import materialUiIcon from '../../assets/images/material-ui-svgrepo-com.svg';
import npmIcon from '../../assets/images/npm-svgrepo-com.svg';
import githubIcon from '../../assets/images/github-icon-svgrepo-com.svg';
import gitIcon from '../../assets/images/git-svgrepo-com.svg';
import bootstrapIcon from '../../assets/images/bootstrap-svgrepo-com.svg';

const SkillsSection = () => {
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

  return (
    <section ref={sectionRef} className="section bg-white dark:bg-dark-800 animate-on-scroll">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">My Skills</h2>
          <p className="text-dark-600 dark:text-gray-300">
            I've accumulated a wide range of skills throughout my journey as a developer.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* تم حذف قسم Frontend Skills بناءً على طلبك */}
        </div>
        {/* Skills Marquee */}
        <div className="skills-marquee-wrapper mt-10">
          <div className="skills-marquee">
            <img src={reactRouterIcon} alt="React Router" />
            <img src={reduxIcon} alt="Redux" />
            <img src={tailwindIcon} alt="Tailwind CSS" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={materialUiIcon} alt="Material UI" />
            <img src={npmIcon} alt="NPM" />
            <img src={githubIcon} alt="GitHub" />
            <img src={gitIcon} alt="Git" />
            <img src={bootstrapIcon} alt="Bootstrap" />
            {/* تكرار الأيقونات لجعل الشريط مستمر */}
            <img src={reactRouterIcon} alt="React Router" />
            <img src={reduxIcon} alt="Redux" />
            <img src={tailwindIcon} alt="Tailwind CSS" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={materialUiIcon} alt="Material UI" />
            <img src={npmIcon} alt="NPM" />
            <img src={githubIcon} alt="GitHub" />
            <img src={gitIcon} alt="Git" />
            <img src={bootstrapIcon} alt="Bootstrap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;