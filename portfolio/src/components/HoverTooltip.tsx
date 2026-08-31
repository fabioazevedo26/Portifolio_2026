import { useState, useRef, useEffect, useCallback, ReactNode } from 'react';

const tooltipStyles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translate(-50%, 8px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.2s ease-out forwards;
}
`;

if (typeof document !== 'undefined' && !document.getElementById('tooltip-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'tooltip-styles';
  styleSheet.textContent = tooltipStyles;
  document.head.appendChild(styleSheet);
}

interface HoverTooltipProps {
  children: ReactNode;
  info: string;
}

export default function HoverTooltip({ children, info }: HoverTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsVisible(false);
  };

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsVisible(true);
    }
  };

  const handleClickOutside = useCallback((e: TouchEvent) => {
    if (isTouchDevice && isVisible && tooltipRef.current && !tooltipRef.current.contains(e.target as Node) && triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  }, [isTouchDevice, isVisible]);

  useEffect(() => {
    if (isTouchDevice && isVisible) {
      document.addEventListener('touchstart', handleClickOutside, { passive: false });
    }
    return () => document.removeEventListener('touchstart', handleClickOutside);
  }, [isTouchDevice, isVisible, handleClickOutside]);

  return (
    <div
      ref={triggerRef}
      className="relative inline-block cursor-help"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <span className="border-b border-dotted border-primary/50 hover:border-solid hover:border-primary transition-colors">
        {children}
      </span>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 glass-panel rounded-lg text-white text-code-sm whitespace-nowrap shadow-lg animate-fade-in-up"
          role="tooltip"
        >
          {info}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-white/10" />
        </div>
      )}
    </div>
  );
}