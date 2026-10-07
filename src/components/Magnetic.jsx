import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, strength = 0.35 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      // Calculate cursor coordinates relative to the center of the element
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Translate the child element by coordinates multiplied by magnet strength
      gsap.to(el.firstChild, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      // Return the child element to its default position
      gsap.to(el.firstChild, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className="inline-block">
      {children}
    </div>
  );
}
