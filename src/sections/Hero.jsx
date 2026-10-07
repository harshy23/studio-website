import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Star } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import { LogoSecondary, ScrollUpIcon } from '../logos';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const textElements = headlineRef.current?.querySelectorAll('.word-reveal') || [];

    if (textElements.length > 0) {
      // Set initial state
      gsap.set(textElements, { y: '100%', opacity: 0 });

      // GSAP text slide-up mask reveal
      gsap.to(textElements, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.2
      });
    }

    // Parallax mouse movements inside Hero grid background
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to('.hero-glow-1', { x: xPos, y: yPos, duration: 1.5, ease: 'power2.out' });
      gsap.to('.hero-glow-2', { x: -xPos, y: -yPos, duration: 1.5, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Glow shapes for background ambiance */}
      <div className=" absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-0" />
      <div className="opacity-0 hero-glow-2 absolute bottom-1/3 right-1/3 w-[450px] h-[450px] rounded-full  blur-[120px] pointer-events-none" />

      <div ref={headlineRef} className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center mt-40">
        {/* Tagline badge */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-accent py-1.5 px-4 rounded-full flex items-center gap-2 mb-8"
        >
          <Star className="w-3.5 h-3.5 text-primary-light fill-primary-light" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            Digital Experience Agency
          </span>
        </motion.div> */}

        <div className="flex flex-col items-center gap-3 mb-40">
          <img
            src={LogoSecondary}
            alt="Studio Biscut brand mark"
            className="w-200 h-40 object-cover border border-white/10"
          />
          <div className="text-center">
            {/* <p className="text-xs uppercase tracking-[0.35em] text-black
             font-bold">
              Studio Biskoot
            </p> */}
            <p className="text-sm text-dark-muted font-fredoka">
              Baking in Progress
            </p>
          </div>
        </div>

        {/* Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="text-dark-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Full website coming soon!
        </motion.p> */}

        {/* CTA Buttons */}
        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-20 items-center justify-center mt-200"
        >
          {/* <Magnetic strength={0.35}> */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className=""
          >
            {/* Explore Our Work
            <ArrowRight className="w-4.5 h-4.5" /> */}
            <img
              src={ScrollUpIcon}
              alt="Studio Biscut brand mark"
              className="w-10 h-10 object-cover border border-white/10"
            />
          </a>
          {/* </Magnetic> */}

          {/* <Magnetic strength={0.2}> */}
          {/* <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-4 px-8 bg-primary
             text-white ont-semibold rounded-full hover:bg-secondary-dark shadow-lg  shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </a> */}
          {/* </Magnetic> */}
        </div>
      </div>

      {/* Decorative floating indicators */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-widest text-dark-muted">Scroll to explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent animate-bounce" />
      </div> */}
    </section>
  );
}
