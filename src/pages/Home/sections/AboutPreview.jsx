import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sudoResting, sudoHover } from '../../../logos';

export default function AboutPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="w-auto flex justify-center"
    >
      <Link
        to="/about"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col items-center cursor-pointer select-none py-2"
      >
        <div className="relative w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 flex items-center justify-center transition-transform duration-300">
          <img
            src={sudoResting}
            alt="About - Sudo Resting"
            className={`w-full h-full object-contain transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <img
            src={sudoHover}
            alt="About - Sudo Hover"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
          />
        </div>
        <h2 className="mt-3 font-GochiHand text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider transition-colors duration-300 ">
          ABOUT
        </h2>
      </Link>
    </motion.div>
  );
}

