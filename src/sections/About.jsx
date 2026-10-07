import { useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  sudoCard,
  sudoBefore,
  sudoAfter,
  vineetBefore,
  vineetAfter,
  vineetCard,
} from '../logos';
// New reusable components
import IntroCard from '../components/IntroCard';
import CharacterFrameAnimation from '../components/CharacterFrameAnimation';
import { preloadFrames } from '../utils/frameCache';

// Per-character frame configuration for action/impact shake timing
export const CHARACTER_CONFIGS = {
  sudo: {
    name: 'Sudhanshu K.',
    role: 'Co-Founder/ Animation Director',
    description: "I'm Sudhanshu, a designer and animator storytelling through graphic narratives, animation, and live action. My creative toolkit includes skills in editing, photo and video",
    bgColor: '#FF5C75',
    fps: 24,
    shakeStartFrames: [20],
    socialLinks: { linkedin: '#', email: '#', instagram: '#' },
  },
  vineet: {
    name: 'Vineet K.',
    role: 'Co-Founder/ Animation Director',
    description: 'Hello! I am Vineet Karnani, an animation film director. I am passionate about using animation as a powerful medium to express my creative vision, explore new cinematic horizons and tell',
    bgColor: '#7B81FF',
    fps: 24,
    shakeStartFrames: [12],
    socialLinks: { linkedin: '#', email: '#', instagram: '#' },
  },
};

const sudoFrameModules = import.meta.glob(
  '../logos/animation_frames/sudo_frames/Image Seq/*.png',
  { eager: true, import: 'default' }
);
export const sudoFrames = Object.keys(sudoFrameModules)
  .sort()
  .map((path) => sudoFrameModules[path]);

const vineetFrameModules = import.meta.glob(
  '../logos/animation_frames/vineet_frames/Image Seq/*.png',
  { eager: true, import: 'default' }
);
export const vineetFrames = Object.keys(vineetFrameModules)
  .sort()
  .map((path) => vineetFrameModules[path]);

// ─── animation easing ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1];

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: Profile thumbnail card (initial section state)
// Each profile sits in the About section as a clickable image.
// ─────────────────────────────────────────────────────────────────────────────
function ProfileThumb({ name, beforeImg, afterImg, accentColor, rotate, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.18, ease }}
    >
      <motion.button
        type="button"
        aria-label={`Meet ${name}`}
        onClick={onClick}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative cursor-pointer border-0 bg-transparent p-0 outline-none"
        style={{ rotate }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.35, ease }}
      >
        <img
          src={hovered ? afterImg : beforeImg}
          alt={name}
          draggable="false"
          className="
            relative z-10
            h-auto
            w-[200px]
            select-none
            object-contain
            drop-shadow-xl
            sm:w-[260px]
            md:w-[310px]
            lg:w-[350px]
          "
        />
      </motion.button>

      {/* Name label fades in on hover */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="mt-3 select-none font-fredoka text-xl font-semibold sm:text-2xl"
        style={{ color: accentColor }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: Sudo intro modal
// ─────────────────────────────────────────────────────────────────────────────
function SudoModal({ onClose }) {
  const config = CHARACTER_CONFIGS.sudo;
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[760px]
        sm:max-w-[860px]
        md:max-w-[940px]
      "
      onClick={(e) => e.stopPropagation()}
    >
      <IntroCard
        name={config.name}
        role={config.role}
        description={config.description}
        bgColor={config.bgColor}
        frames={sudoFrames}
        fps={config.fps}
        shakeStartFrames={config.shakeStartFrames}
        onClose={onClose}
        socialLinks={config.socialLinks}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: Vineet intro modal
// ─────────────────────────────────────────────────────────────────────────────
function VineetModal({ onClose }) {
  const config = CHARACTER_CONFIGS.vineet;
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[760px]
        sm:max-w-[860px]
        md:max-w-[940px]
      "
      onClick={(e) => e.stopPropagation()}
    >
      <IntroCard
        name={config.name}
        role={config.role}
        description={config.description}
        bgColor={config.bgColor}
        frames={vineetFrames}
        fps={config.fps}
        shakeStartFrames={config.shakeStartFrames}
        onClose={onClose}
        socialLinks={config.socialLinks}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN ABOUT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function About() {
  // 'sudo' | 'vineet' | null
  const [openProfile, setOpenProfile] = useState(null);

  // Prevent body scroll when modal is open (no layout shift)
  useEffect(() => {
    if (openProfile) {
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarW}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    };
  }, [openProfile]);

  // ESC key closes modal
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenProfile(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      id="about"
      aria-label="About Us"
      style={{ backgroundColor: '#f6f4f1', minHeight: '100vh' }}
      className="relative w-full overflow-hidden"
    >

      {/* ══════════════════════════════════════════════════════════════════
          MAIN CONTENT — blurs/dims when modal open
          ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        animate={{
          filter: openProfile ? 'blur(8px)' : 'blur(0px)',
          scale: openProfile ? 0.984 : 1,
          opacity: openProfile ? 0.4 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-10 flex min-h-screen flex-col"
      >

        {/* ── "ABOUT US" heading ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="pt-16 text-center sm:pt-20 md:pt-24"
        >
          <h2
            className="
              font-GochiHand
              text-5xl
              font-bold
              tracking-wide
              sm:text-7xl
              md:text-8xl
            "
            style={{ color: '#1a1a1a' }}
          >
            About Us
          </h2>
        </motion.div>

        {/* ── Profile photos row ───────────────────────────────────── */}
        <div
          className="
            mx-auto
            flex
            flex-1
            w-full
            max-w-5xl
            flex-col
            items-center
            justify-center
            gap-6
            px-6
            pb-20
            pt-10
            sm:flex-row
            sm:items-end
            sm:gap-16
            sm:px-10
            md:gap-24
            lg:gap-32
          "
        >
          {/* Vineet — left, slight counter-clockwise tilt */}
          <ProfileThumb
            name="Vineet Karnani"
            beforeImg={vineetBefore}
            afterImg={vineetAfter}
            accentColor="#6B73FF"
            // rotate={-6}
            index={0}
            onClick={() => setOpenProfile('vineet')}
          />

          {/* Sudhanshu — right, slight clockwise tilt */}
          <ProfileThumb
            name="Sudhanshu K."
            beforeImg={sudoBefore}
            afterImg={sudoAfter}
            accentColor="#F4546A"
            // rotate={4}
            index={1}
            onClick={() => setOpenProfile('sudo')}
          />
        </div>
      </motion.div>


      {/* ══════════════════════════════════════════════════════════════════
          MODAL OVERLAY
          ══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {openProfile && (
          <motion.div
            key="about-modal"
            className="
              fixed inset-0
              z-[200]
              flex items-center justify-center
              overflow-hidden
              px-6 py-12
              sm:px-10
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            {/* Translucent backdrop — click outside closes */}
            <motion.button
              type="button"
              aria-label="Close introduction"
              onClick={() => setOpenProfile(null)}
              className="absolute inset-0 cursor-default border-0 bg-black/15 backdrop-blur-[2.5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
            />

            {/* Close × button — top right of viewport */}
            <motion.button
              type="button"
              aria-label="Close"
              onClick={() => setOpenProfile(null)}
              className="
                absolute
                right-5 top-5
                z-[210]
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-gray-300
                bg-white/80 text-xl text-gray-500
                shadow-md backdrop-blur-sm
                transition-colors
                hover:bg-white hover:text-gray-800
                sm:right-9 sm:top-9
                sm:h-12 sm:w-12 sm:text-2xl
              "
              initial={{ opacity: 0, scale: 0.55 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.55 }}
              transition={{ duration: 0.38, delay: 0.32, ease }}
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>

            {/* The actual modal card composition */}
            <div className="relative z-[205] flex w-full items-center justify-center">
              {openProfile === 'sudo' && <SudoModal onClose={() => setOpenProfile(null)} />}
              {openProfile === 'vineet' && <VineetModal onClose={() => setOpenProfile(null)} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}