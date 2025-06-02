import { Circle as CircleX } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-primary-600 dark:text-primary-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;