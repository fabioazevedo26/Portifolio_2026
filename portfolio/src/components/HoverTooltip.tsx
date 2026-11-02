import { useState, useRef, useEffect, useId, ReactNode, PointerEvent } from 'react';

interface HoverTooltipProps {
  children: ReactNode;
  info: string;
}

export default function HoverTooltip({ children, info }: HoverTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const pointerTypeRef = useRef('');
  const tooltipId = useId();

  // Hover só para mouse; toque é tratado no clique (funciona em notebooks com tela touch)
  const handlePointerEnter = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') setIsVisible(true);
  };

  const handlePointerLeave = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') setIsVisible(false);
  };

  // Fecha ao tocar fora ou ao pressionar Esc
  useEffect(() => {
    if (!isVisible) return;

    const handlePointerDownOutside = (e: globalThis.PointerEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false);
    };

    document.addEventListener('pointerdown', handlePointerDownOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDownOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <span
      ref={triggerRef}
      tabIndex={0}
      aria-describedby={isVisible ? tooltipId : undefined}
      className="relative inline-block cursor-help rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={(e) => { pointerTypeRef.current = e.pointerType; }}
      onClick={() => {
        if (pointerTypeRef.current !== 'mouse') setIsVisible((visible) => !visible);
      }}
      // Só abre no foco via teclado (Tab); no toque o clique já cuida disso
      onFocus={(e) => {
        if (e.currentTarget.matches(':focus-visible')) setIsVisible(true);
      }}
      onBlur={() => setIsVisible(false)}
    >
      <span className="border-b border-dotted border-primary/50 hover:border-solid hover:border-primary transition-colors">
        {children}
      </span>

      {isVisible && (
        <span
          id={tooltipId}
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[16rem] px-4 py-2.5 bg-surface-container-high border border-white/10 rounded-lg text-white text-code-sm text-center whitespace-normal shadow-lg animate-fade-in-up"
        >
          {info}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-surface-container-high" />
        </span>
      )}
    </span>
  );
}
