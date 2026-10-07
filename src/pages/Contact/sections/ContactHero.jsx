import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import contactBg1 from '../../../logos/application_logo/slide show 1.png';
import contactBg2 from '../../../logos/application_logo/slide show 2.png';
import contactBg3 from '../../../logos/application_logo/slide show 3.png';
import contactBg4 from '../../../logos/application_logo/slide show 4.png';
import contactBg5 from '../../../logos/application_logo/slide show 5.png';
import socialIcons from '../../../logos/social media icons.png';

const backgroundImages = [
  contactBg1,
  contactBg2,
  contactBg3,
  contactBg4,
  contactBg5,
];

const SLIDE_DURATION = 5000;

function BackgroundSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {images.map(
          (img, index) =>
            index === currentIndex && (
              <motion.img
                key={index}
                src={img}
                alt={`Background slide ${index + 1}`}
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                aria-hidden="true"
              />
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactHero({ onOpenForm }) {
  const navigate = useNavigate();

  return (
    <section id="contact-hero" className="relative min-h-[90vh] w-full font-fredoka overflow-hidden text-white selection:bg-white pt-24">
      {/* Background Slideshow */}
      <BackgroundSlideshow images={backgroundImages} />

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full min-h-[80vh] flex flex-col justify-between p-8 md:p-12 lg:px-24 lg:py-16">
        
        {/* Top bar with back button */}
        <div className="flex justify-between items-center w-full mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/70 text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* TOP / RIGHT NAVIGATION & CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-end items-end md:items-start gap-12 md:gap-32 w-full pt-4">
          {/* Quick Page Links */}
          <nav className="flex flex-col items-end md:items-start gap-4 text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <Link to="/work" className="hover:opacity-80 transition-opacity font-medium">Work</Link>
            <Link to="/about" className="hover:opacity-80 transition-opacity">About Us</Link>
            <Link to="/contact" className="hover:opacity-80 transition-opacity text-primary font-bold">Contact</Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-end md:items-start gap-6 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <a
              href="mailto:hello@studiobiskoot.com"
              className="font-semibold text-xl hover:opacity-80 transition-opacity text-primary-light"
            >
              hello@studiobiskoot.com
            </a>
            <p className="max-w-[280px] leading-snug font-medium text-right md:text-left text-slate-100">
              506, Lodha Supremus,<br />
              11th Road, MIDC, Andheri<br />
              East, Mumbai,<br />
              Maharashtra, 400093,<br />
              India
            </p>

            {onOpenForm && (
              <button
                onClick={onOpenForm}
                className="mt-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                Send Message
              </button>
            )}
          </div>
        </div>

        {/* Bottom Social Media Icons */}
        <div className="flex w-full justify-end items-end gap-6 pt-12">
          <img
            src={socialIcons}
            alt="Social Media"
            className="w-60 h-auto object-contain drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
