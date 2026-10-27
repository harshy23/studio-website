import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  sudoBefore,
  sudoAfter,
  vineetBefore,
  vineetAfter,
} from '../../../logos';
import IntroCard from '../../../components/IntroCard';

export const CHARACTER_CONFIGS = {
  sudo: {
    name: 'Sudhanshu Kanwar',
    role: 'Co-Founder/ Animation Director',
    description:
      "I'm Sudhanshu, a designer and animator storytelling through graphic narratives, animation, and live action. My creative toolkit includes skills in editing, photo and video.",
    bgColor: '#FF5C75',
    fps: 24,
    // After Effects Orientation Keyframes: frames 14 to 52 (24 FPS)
    orientationKeyframes: [
      { frame: 14, rotateX: 0, rotateY: 0, rotate: 0 },
      { frame: 15, rotateX: 0, rotateY: 0, rotate: 0 },
      { frame: 16, rotateX: 0, rotateY: -0.1, rotate: 0 },
      { frame: 17, rotateX: 0.1, rotateY: 0.2, rotate: -0.2 },
      { frame: 18, rotateX: 0.3, rotateY: -0.3, rotate: 0.3 },
      { frame: 19, rotateX: 0.6, rotateY: -0.4, rotate: -0.7 },
      { frame: 20, rotateX: 0.1, rotateY: 0.2, rotate: -0.3 },
      { frame: 21, rotateX: 0.7, rotateY: -0.4, rotate: -0.9 },
      { frame: 22, rotateX: 0, rotateY: -0.1, rotate: -0.5 },
      { frame: 23, rotateX: 0.9, rotateY: 0.1, rotate: -0.5 },
      { frame: 24, rotateX: 1.2, rotateY: -1.1, rotate: 0.9 },
      { frame: 25, rotateX: 1, rotateY: -1.1, rotate: -0.2 },
      { frame: 26, rotateX: -0.9, rotateY: -0.6, rotate: -1.6 },
      { frame: 27, rotateX: 0.2, rotateY: -0.2, rotate: 0.2 },
      { frame: 28, rotateX: 0.6, rotateY: 0.2, rotate: 0.3 },
      { frame: 29, rotateX: 0.2, rotateY: 0.5, rotate: 1.7 },
      { frame: 30, rotateX: -0.9, rotateY: -0.4, rotate: 1 },
      { frame: 31, rotateX: -0.1, rotateY: -1.5, rotate: 0.6 },
      { frame: 32, rotateX: 0, rotateY: -0.8, rotate: 0 },
      { frame: 33, rotateX: 0.5, rotateY: 1, rotate: -0.5 },
      { frame: 34, rotateX: -0.7, rotateY: -0.3, rotate: 0.7 },
      { frame: 35, rotateX: 1.6, rotateY: -0.1, rotate: 0.1 },
      { frame: 36, rotateX: -1, rotateY: 0, rotate: -1 },
      { frame: 37, rotateX: 0.2, rotateY: 0.5, rotate: 0.1 },
      { frame: 38, rotateX: 0.2, rotateY: 1.3, rotate: 0.9 },
      { frame: 39, rotateX: -0.9, rotateY: -1.4, rotate: -0.9 },
      { frame: 40, rotateX: 0.6, rotateY: 0.6, rotate: 0.4 },
      { frame: 41, rotateX: -0.9, rotateY: 0, rotate: -0.4 },
      { frame: 42, rotateX: 0.1, rotateY: 0.1, rotate: -0.7 },
      { frame: 43, rotateX: 0.9, rotateY: 1.6, rotate: 1.1 },
      { frame: 44, rotateX: 0.1, rotateY: 0.2, rotate: 0.1 },
      { frame: 45, rotateX: -0.6, rotateY: -0.4, rotate: -1.1 },
      { frame: 46, rotateX: 0.2, rotateY: 0, rotate: -0.4 },
      { frame: 47, rotateX: -0.1, rotateY: -0.7, rotate: -0.6 },
      { frame: 48, rotateX: -0.5, rotateY: -0.6, rotate: 0.1 },
      { frame: 49, rotateX: -0.2, rotateY: 0.4, rotate: -0.2 },
      { frame: 50, rotateX: 0, rotateY: 0, rotate: 0.1 },
      { frame: 51, rotateX: 0, rotateY: 0, rotate: 0 },
      { frame: 52, rotateX: 0, rotateY: 0, rotate: 0 },
    ],
    socialLinks: { linkedin: '#', email: 'sud0draws@gmail.com', instagram: 'www.instagram.com/sud0draws' },
  },
  vineet: {
    name: 'Vineet Karnani',
    role: 'Co-Founder/ Animation Director',
    description:
      'Hello! I am Vineet Karnani, an animation film director. I am passionate about using animation as a powerful medium to express my creative vision, explore new cinematic horizons and tell compelling stories.',
    bgColor: '#7B81FF',
    fps: 24,
    // After Effects Position Keyframes: (960, 540) -> (960, 548) -> (960, 540)
    // Relative displacement: frame 17: y=0, frame 19: y=8, frame 23: y=0
    positionKeyframes: [
      { frame: 22, x: 0, y: 0 },
      { frame: 24, x: 0, y: 8 },
      { frame: 28, x: 0, y: 0 },
    ],
    socialLinks: { linkedin: '#', email: 'vineetkarnani@gmail.com', instagram: 'www.instagram.com/vin0_0t' },
  },
};

const sudoFrameModules = import.meta.glob(
  '../../../logos/animation_frames/sudo_frames/Image Seq/*.png',
  { eager: true, import: 'default' }
);
export const sudoFrames = Object.keys(sudoFrameModules)
  .sort()
  .map((path) => sudoFrameModules[path]);

const vineetFrameModules = import.meta.glob(
  '../../../logos/animation_frames/vineet_frames/Image Seq/*.png',
  { eager: true, import: 'default' }
);
export const vineetFrames = Object.keys(vineetFrameModules)
  .sort()
  .map((path) => vineetFrameModules[path]);

const ease = [0.22, 1, 0.36, 1];

function ProfileThumb({ name, beforeImg, afterImg, accentColor, rotate, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.innerWidth < 640 || window.matchMedia('(hover: none), (pointer: coarse)').matches
      : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        typeof window !== 'undefined' &&
          (window.innerWidth < 640 || window.matchMedia('(hover: none), (pointer: coarse)').matches)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        onHoverStart={() => !isMobile && setHovered(true)}
        onHoverEnd={() => !isMobile && setHovered(false)}
        className="group relative cursor-pointer border-0 bg-transparent p-0 outline-none"
        style={{ rotate }}
        whileHover={isMobile ? undefined : { scale: 1.05, rotate: 0 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.35, ease }}
      >
        <img
          src={!isMobile && hovered ? afterImg : beforeImg}
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

      <motion.p
        animate={isMobile ? { opacity: 1, y: 0 } : { opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="mt-3 select-none font-fredoka text-xl font-semibold sm:text-2xl"
        style={{ color: accentColor }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
}

function SudoModal({ onClose }) {
  const config = CHARACTER_CONFIGS.sudo;
  return (
    <div
      className="relative mx-auto w-full flex items-center justify-center"
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
        orientationKeyframes={config.orientationKeyframes}
        characterClassName="scale-[1.38] origin-bottom-left -translate-y-1"
        onClose={onClose}
        socialLinks={config.socialLinks}
      />
    </div>
  );
}

function VineetModal({ onClose }) {
  const config = CHARACTER_CONFIGS.vineet;
  return (
    <div
      className="relative mx-auto w-full flex items-center justify-center"
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
        positionKeyframes={config.positionKeyframes}
        characterClassName="scale-[1.32] origin-bottom-left"
        onClose={onClose}
        socialLinks={config.socialLinks}
      />
    </div>
  );
}

export default function TeamProfiles() {
  const [openProfile, setOpenProfile] = useState(null);

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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenProfile(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          filter: openProfile ? 'blur(8px)' : 'blur(0px)',
          scale: openProfile ? 0.984 : 1,
          opacity: openProfile ? 0.4 : 1,
        }}
        // transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-10 flex flex-col mt-20 bg-white"
      >
        <h1 className="font-GochiHand text-3xl sm:text-5xl font-bold leading-tight mt-25 mx-auto ">
          Team
        </h1>
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
            gap-0
            px-6
            pb-20
            pt-6
            sm:flex-row
            sm:items-end
            sm:gap-0
            sm:px-0
            md:gap-0
            lg:gap-0
          "
        >

          <ProfileThumb
            name="Vineet Karnani"
            beforeImg={vineetBefore}
            afterImg={vineetAfter}
            accentColor="#6B73FF"
            index={0}
            onClick={() => setOpenProfile('vineet')}
          />

          <ProfileThumb
            name="Sudhanshu Kanwar"
            beforeImg={sudoBefore}
            afterImg={sudoAfter}
            accentColor="#F4546A"
            index={1}
            onClick={() => setOpenProfile('sudo')}
          />
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {openProfile && (
          <motion.div
            key="about-modal"
            className="
              fixed inset-0
              z-[200]
              flex items-center justify-center
              overflow-hidden
              px-3 py-6
              sm:px-10
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
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

            <div className="relative z-[205] flex w-full items-center justify-center">
              {openProfile === 'sudo' && <SudoModal onClose={() => setOpenProfile(null)} />}
              {openProfile === 'vineet' && <VineetModal onClose={() => setOpenProfile(null)} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
