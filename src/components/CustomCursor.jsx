import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Use gsap.quickTo for high-performance mouse following
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3.out" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3.out" });

    const onMouseMove = (e) => {
      // Offset cursor and follower positions to align center
      xToCursor(e.clientX - 4);
      yToCursor(e.clientY - 4);

      xToFollower(e.clientX - 16);
      yToFollower(e.clientY - 16);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Event listeners to handle interactive states
    const onMouseEnterLink = () => {
      gsap.to(follower, {
        scale: 2,
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        borderColor: 'rgba(99, 102, 241, 0.8)',
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: '#818CF8',
        duration: 0.3
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(99, 102, 241, 0.4)',
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#6366F1',
        duration: 0.3
      });
    };

    const registerHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, [data-hover="true"]');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    registerHoverEvents();

    // Create a MutationObserver to register hover events for dynamically added elements
    const observer = new MutationObserver(registerHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      const hoverables = document.querySelectorAll('a, button, [data-hover="true"]');
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Tiny solid dot */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      {/* Outer tracking ring */}
      <div
        ref={followerRef}
        className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-primary/40 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
    </>
  );
}
