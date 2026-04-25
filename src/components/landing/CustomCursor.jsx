import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    setIsVisible(true);

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onEnterStore = () => setIsExpanded(true);
    const onLeaveStore = () => setIsExpanded(false);

    document.addEventListener('mousemove', move);

    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-store-card]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterStore);
        el.removeEventListener('mouseleave', onLeaveStore);
        el.addEventListener('mouseenter', onEnterStore);
        el.addEventListener('mouseleave', onLeaveStore);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    document.querySelectorAll('[data-store-card]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterStore);
      el.addEventListener('mouseleave', onLeaveStore);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isExpanded ? 'expanded' : ''} hidden md:flex items-center justify-center`}
    >
      {isExpanded && (
        <span
          ref={textRef}
          className="text-xs font-mono tracking-widest uppercase text-white whitespace-nowrap"
        >
          View Store
        </span>
      )}
    </div>
  );
}