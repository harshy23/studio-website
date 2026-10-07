import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vineetResting, vineetHover } from '../../../logos';

export default function WorkPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-auto flex justify-center"
    >
      <Link
        to="/work"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col items-center cursor-pointer select-none py-2"
      >
        <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 flex items-center justify-center transition-transform duration-300">
          <img
            src={vineetResting}
            alt="Work - Vineet Resting"
            className={`w-full h-full object-contain transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <img
            src={vineetHover}
            alt="Work - Vineet Hover"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
          />
        </div>
        <h2 className="mt-3 font-GochiHand text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] tracking-wider transition-colors duration-300 ">
          WORK
        </h2>
      </Link>
    </motion.div>
  );
}

