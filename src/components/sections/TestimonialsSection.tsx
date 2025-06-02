import { useState, useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} className="section bg-gray-50 dark:bg-dark-900 animate-on-scroll">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Clients Say</h2>
          <p className="text-dark-600 dark:text-gray-300">
            Feedback from people I've worked with on various projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative py-8">
            {/* Quote icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-800 p-3 rounded-full shadow-lg">
              <Quote size={24} className="text-primary-500" />
            </div>

            {/* Testimonials */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-800 shadow-xl">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonialsData.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 p-8 md:p-12"
                    >
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover mb-6"
                        />
                        <p className="text-lg md:text-xl italic text-dark-700 dark:text-gray-300 mb-6">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-dark-500 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-dark-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-dark-600 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-dark-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-dark-600 focus:outline-none"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary-600 dark:bg-primary-400 w-4'
                      : 'bg-gray-300 dark:bg-dark-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;