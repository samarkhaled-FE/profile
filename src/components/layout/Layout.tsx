import { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '../ui/ThemeToggle';
import CustomCursor from '../CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mounted, setMounted] = useState(false);
  
  // Only show UI after first render to avoid hydration mismatch with theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {/* <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;