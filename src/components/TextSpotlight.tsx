import { useEffect, useState, ReactNode } from 'react';
import './TextSpotlight.css';

interface TextSpotlightProps {
  children: ReactNode;
  color?: string; // اللون الأساسي للنص
  spotColor?: string; // لون النص داخل العدسة
}

const TextSpotlight = ({ children, color = '#888', spotColor = '#fff' }: TextSpotlightProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="text-mask-wrapper"
      data-text={typeof children === 'string' ? children : ''}
      style={{
        // @ts-ignore
        '--x': `${coords.x}px`,
        '--y': `${coords.y}px`,
        '--main-color': color,
        '--spot-color': spotColor,
      }}
    >
      <span className="mask-text">{children}</span>
    </div>
  );
};

export default TextSpotlight;
