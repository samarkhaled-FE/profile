import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="w-full py-20 bg-[#E5E4E7] dark:bg-[#313D45]" style={{ color: '#222' }}>
      <div className="w-full max-w-none px-0 mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-primary-600 dark:text-primary-400">Let's Work Together</h2>
            <p className="text-primary-700 mb-8 text-lg">
              Have a project in mind or just want to say hello? I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <a href="mailto:hello@johndoe.com" className="text-primary-700 hover:text-black transition-colors">samarkhaledabd100@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="tel:+123456789" className="text-primary-700 hover:text-black transition-colors">+20 10 3206 8211</a>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="btn bg-primary-100 text-primary-400 hover:bg-primary-200 shadow-md hover:shadow-lg transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-[#232B32] p-6 transition-colors">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#2E3940] border border-primary-300 dark:border-[#2E3940] text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:shadow-[0_2px_8px_0_rgba(36,45,51,0.25)]" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#2E3940] border border-primary-300 dark:border-[#2E3940] text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:shadow-[0_2px_8px_0_rgba(36,45,51,0.25)]" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-900 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#2E3940] border border-primary-300 dark:border-[#2E3940] text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:shadow-[0_2px_8px_0_rgba(36,45,51,0.25)]" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Your message" 
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#2E3940] border border-primary-300 dark:border-[#2E3940] text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:shadow-[0_2px_8px_0_rgba(36,45,51,0.25)]"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary-100 text-primary-400 font-medium rounded-lg hover:bg-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;