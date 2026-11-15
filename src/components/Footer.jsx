import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoSecondary } from '../logos';

// Social profiles and names for Site Credits popup
const SITE_CREDITS = {
  designer: {
    role: 'Site Designer',
    firstName: 'Shubham',
    lastName: 'Mohapatra',
    url: 'https://www.linkedin.com/in/shubham-mohapatra-47219918b/',
    ariaLabel: "Shubham Mohapatra's Profile",
  },
  developer: {
    role: 'Site Developer',
    firstName: 'Harsh',
    lastName: 'Mishra',
    url: 'https://www.linkedin.com/in/harshy23/',
    ariaLabel: "Harsh Mishra's Profile",
  },
};

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const creditsRef = useRef(null);

  // Load Fredoka font if it is not already loaded globally.
  useEffect(() => {
    const existingLink = document.querySelector(
      'link[data-fredoka-font="true"]'
    );

    if (!existingLink) {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap';
      link.dataset.fredokaFont = 'true';

      document.head.appendChild(link);
    }
  }, []);

  // Close credits popup on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (creditsRef.current && !creditsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <footer
      className="
        relative
        w-full
        bg-white
        text-black
        overflow-visible
        z-20
        py-1
      "
      style={{
        fontFamily: "'Fredoka', sans-serif",
      }}
    >
      <div
        className="
          relative
          w-full
          min-h-[30px]
          px-5
          sm:px-8
          lg:px-10
          flex
          flex-col sm:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        {/* LEFT — COPYRIGHT */}
        <div
          className="
            flex-shrink-0
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-wide
            text-black/50
            whitespace-nowrap
          "
        >
          © 2026 by Studio Biskoot. All Rights Reserved.
        </div>

        {/* CENTER — BRAND LOGO */}
        <div className="flex items-center justify-center">
          <img
            src={LogoSecondary}
            alt="Studio Biskoot"
            className="
              h-7
              sm:h-8
              md:h-9
              w-auto
              object-contain
            "
          />
        </div>

        {/* RIGHT — LEGAL & CREDITS LINKS */}
        <div
          className="
            flex
            items-center
            justify-end
            gap-5
            sm:gap-7
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-wide
            text-black/50
            whitespace-nowrap
          "
        >
          <a
            href="#privacy"
            className="
              hover:text-black
              transition-colors
              duration-300
            "
          >
            Privacy Policy
          </a>

          <a
            href="#terms"
            className="
              hover:text-black
              transition-colors
              duration-300
            "
          >
            Terms &amp; Conditions
          </a>

          {/* SITE CREDITS POPUP TRIGGER */}
          <div className="relative inline-block" ref={creditsRef}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label="View site credits"
              className="
                hover:text-black
                transition-colors
                duration-300
                cursor-pointer
                bg-transparent
                border-0
                p-0
                font-semibold
                text-inherit
                select-none
              "
            >
              Site Credits
            </button>

            {/* SPEECH BUBBLE POPUP */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.94 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    absolute
                    bottom-[calc(100%+12px)]
                    right-0
                    z-50
                    pointer-events-auto
                  "
                >
                  <div
                    className="
                      relative
                      bg-[#78dcc2]
                      rounded-[26px]
                      px-5
                      py-3.5
                      sm:px-6
                      sm:py-4
                      shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                      flex
                      items-start
                      justify-between
                      gap-6
                      sm:gap-8
                      w-auto
                      whitespace-nowrap
                      select-none
                    "
                  >
                    {/* Site Designer */}
                    <div className="flex flex-col items-center text-center">
                      <span
                        className="text-[10.5px] font-fredoka font-medium tracking-tight mb-0.5"
                        style={{ color: '#3b927b' }}
                      >
                        {SITE_CREDITS.designer.role}
                      </span>
                      <a
                        href={SITE_CREDITS.designer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={SITE_CREDITS.designer.ariaLabel}
                        className="
                          font-GochiHand
                          text-white
                          text-[18px]
                          sm:text-[20px]
                          leading-[1.08]
                          hover:opacity-90
                          hover:scale-[1.03]
                          active:scale-95
                          transition-all
                          duration-200
                          inline-block
                          cursor-pointer
                        "
                      >
                        {SITE_CREDITS.designer.firstName}
                        <br />
                        {SITE_CREDITS.designer.lastName}
                      </a>
                    </div>

                    {/* Site Developer */}
                    <div className="flex flex-col items-center text-center">
                      <span
                        className="text-[10.5px] font-fredoka font-medium tracking-tight mb-0.5"
                        style={{ color: '#3b927b' }}
                      >
                        {SITE_CREDITS.developer.role}
                      </span>
                      <a
                        href={SITE_CREDITS.developer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={SITE_CREDITS.developer.ariaLabel}
                        className="
                          font-GochiHand
                          text-white
                          text-[18px]
                          sm:text-[20px]
                          leading-[1.08]
                          hover:opacity-90
                          hover:scale-[1.03]
                          active:scale-95
                          transition-all
                          duration-200
                          inline-block
                          cursor-pointer
                        "
                      >
                        {SITE_CREDITS.developer.firstName}
                        <br />
                        {SITE_CREDITS.developer.lastName}
                      </a>
                    </div>

                    {/* Pointer Triangle / Tail aligned over 'Site Credits' */}
                    <div className="absolute -bottom-[9px] right-8 translate-x-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-2.5 text-[#78dcc2] overflow-visible"
                        viewBox="0 0 16 10"
                        fill="currentColor"
                      >
                        <path d="M0 0 L16 0 L8 10 Z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
}
