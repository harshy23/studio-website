import { useEffect } from 'react';
import Lenis from 'lenis';

import Hero from '../sections/Hero';
import Showcase from '../sections/Showcase';
import About from '../sections/About';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import SlideshowSection from '../sections/slideshow';

export default function Home() {
  // Initialize buttery scroll using Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full relative  min-h-screen">
      <Hero />
      <Showcase />
      <About />
      {/* <Services />
      <Projects />
      <Testimonials /> */}
      <Contact />
    </main>
  );
}
