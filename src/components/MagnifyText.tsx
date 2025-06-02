import { useState, ReactNode } from 'react';
import './MagnifyText.css';

interface MagnifyTextProps {
  children: ReactNode;
}

const MagnifyText = ({ children }: MagnifyTextProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`magnify-text${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="magnify-text-under" aria-hidden="true">
        {children}
      </span>
      <span className="magnify-text-main">{children}</span>
    </span>
  );
};

export default MagnifyText;
