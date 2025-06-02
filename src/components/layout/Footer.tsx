import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.004a9.87 9.87 0 01-4.219-1.014l-.304-.144-3.143.822.842-3.066-.198-.314a9.86 9.86 0 01-1.51-5.26c.001-5.444 4.434-9.877 9.88-9.877 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.444-4.436 9.877-9.88 9.877zm8.413-18.289A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.09c0 2.137.56 4.223 1.623 6.067L.057 24l5.995-1.572a11.888 11.888 0 005.96 1.523h.005c6.554 0 11.989-5.435 11.991-12.09a11.92 11.92 0 00-3.518-8.74z"/>
      </svg>
    ), url: 'https://wa.me/201032068211', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 pt-16 pb-8 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="text-2xl font-heading font-bold text-primary-600 dark:text-primary-400 mb-4 inline-block">
              samar khaled
            </Link>
            <p className="text-dark-600 dark:text-gray-400 mb-4">
              Creating beautiful, functional, and performant web experiences with modern technologies.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="bg-white dark:bg-dark-800 p-2 rounded-full text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <span className="text-dark-600 dark:text-gray-400">samarkhaledabd100@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <span className="text-dark-600 dark:text-gray-400">+20 10 3206 8211</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-primary-500"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span className="text-dark-600 dark:text-gray-400">Asyut, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Newsletter</h3>
            <p className="text-dark-600 dark:text-gray-400 mb-4">
              Subscribe to receive updates about new projects and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-700 text-center text-dark-600 dark:text-gray-400">
          <p>© {currentYear} samar khaled. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;