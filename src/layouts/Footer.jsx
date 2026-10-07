import { useEffect } from 'react';
import { LogoSecondary } from '../logos';

export default function Footer() {
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

  return (
    <footer
      className="
        relative
        w-full
        bg-white
        text-black
        overflow-hidden
        z-20
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
          items-center
          justify-between
          gap-6
        "
      >

        {/* =========================================
            LEFT — COPYRIGHT
        ========================================= */}
        <div
          className="
            flex-shrink-0
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-wide
            text-black/35
            whitespace-nowrap
          "
        >
          © 2026 by Studio Biskoot All Rights Reserved.
        </div>


        {/* =========================================
            CENTER — BRAND LOGO
        ========================================= */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
            justify-center
          "
        >
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


        {/* =========================================
            RIGHT — LEGAL LINKS
        ========================================= */}
        <div
          className="
            ml-auto
            flex
            items-center
            justify-end
            gap-5
            sm:gap-7
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-wide
            text-black/35
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
        </div>

      </div>
    </footer>
  );
}