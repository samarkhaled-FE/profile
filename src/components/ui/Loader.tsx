import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import loadingAnimation from '../../assets/images/loading.json';
import { useRef, useEffect, useState } from 'react';

const Loader = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  // نستخدم تايمر لإجبار اللودر على الظهور لمدة أطول
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed?.(0.7);
    }
    // إجبار اللودر على الظهور على الأقل 2.8 ثانية
    const timer = setTimeout(() => setShow(false), 8800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <Lottie 
            lottieRef={lottieRef}
            animationData={loadingAnimation} 
            loop={true} 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="mt-4 text-primary-600 dark:text-primary-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;