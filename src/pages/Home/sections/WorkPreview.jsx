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
      className="w-full sm:w-auto flex justify-center"
    >
      <Link
        to="/work"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-row md:flex-col items-center justify-center gap-3 sm:gap-6 md:gap-0 cursor-pointer select-none py-1 md:py-2"
      >
        <h2 className="order-1 md:order-2 md:mt-3 font-GochiHand text-[32px] sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-wider transition-colors duration-300">
          Work
        </h2>
        <div className="order-2 md:order-1 relative w-36 sm:w-52 md:w-96 h-36 sm:h-52 md:h-96 flex items-center justify-center transition-transform duration-300">
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
      </Link>
    </motion.div>
  );
}

