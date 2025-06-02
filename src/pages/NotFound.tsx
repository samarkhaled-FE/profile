import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Page Not Found | samar khaled';
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-dark-800 py-16">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-dark-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;