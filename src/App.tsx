import { useEffect, lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';

// Lazy loaded pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const SkillsPage = lazy(() => import('./components/sections/SkillsSection'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2800); // نفس مدة اللودر
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}

export default App;