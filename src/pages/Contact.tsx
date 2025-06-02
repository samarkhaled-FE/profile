import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  // Set page title
  useEffect(() => {
    document.title = 'Contact | samar khaled';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          {/* تم حذف المساحة الفارغة الخاصة بالعنوان والوصف */}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Contact Information</h2>
              <p className="text-dark-600 dark:text-gray-300 mb-8">
                 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <span className="text-dark-600 dark:text-gray-300">samarkhaledabd100@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <span className="text-dark-600 dark:text-gray-300">+20 10 3206 8211</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <span className="text-dark-600 dark:text-gray-300">Asyut , Egypt</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
                    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.004a9.87 9.87 0 01-4.219-1.014l-.304-.144-3.143.822.842-3.066-.198-.314a9.86 9.86 0 01-1.51-5.26c.001-5.444 4.434-9.877 9.88-9.877 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.444-4.436 9.877-9.88 9.877zm8.413-18.289A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.09c0 2.137.56 4.223 1.623 6.067L.057 24l5.995-1.572a11.888 11.888 0 005.96 1.523h.005c6.554 0 11.989-5.435 11.991-12.09a11.92 11.92 0 00-3.518-8.74z"/>
  </svg>
), url: 'https://wa.me/201032068211', label: 'WhatsApp' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="bg-white dark:bg-dark-700 p-3 rounded-full text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-md hover:shadow-lg transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Lets’ Work Toether</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400 pointer-events-none">
                      {/* User icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#242D33] dark:border-dark-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400 pointer-events-none">
                      {/* Mail icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 01-1.42 0L4 6.41V20h16V6.41z"/></svg>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#242D33] dark:border-dark-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400 pointer-events-none">
                    {/* Tag icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.59 13.41l-8-8A2 2 0 0010.17 5H5a2 2 0 00-2 2v5.17a2 2 0 00.59 1.41l8 8a2 2 0 002.83 0l6.17-6.17a2 2 0 000-2.83zM7.5 8A1.5 1.5 0 119 9.5 1.5 1.5 0 007.5 8z"/></svg>
                  </span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#242D33] dark:border-dark-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <span className="absolute left-4 top-8 text-primary-400 pointer-events-none bg-white dark:bg-dark-700 rounded-full p-1 shadow-md border border-primary-100 dark:border-primary-900 transition-all">
                    {/* Paragraph icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4a1 1 0 0 0 0 2h3v12a1 1 0 0 0 2 0V6h3a1 1 0 1 0 0-2H6z"/></svg>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Your message here..."
                    className="w-full pl-14 pr-4 py-3 rounded-lg border border-[#242D33] dark:border-dark-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  ></textarea>
                </div>
                
                {/* Form Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;