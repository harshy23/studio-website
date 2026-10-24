import { motion } from 'framer-motion';
import CharacterFrameAnimation from './CharacterFrameAnimation';
import { useState } from 'react';

// Displacements mapped to relative frame offsets (0 to 8) from impact frame
const SHAKE_OFFSETS = [
  { x: 0, y: 16, rotate: 0 },
  { x: -18, y: -14, rotate: -2.8 },
  { x: 18, y: 12, rotate: 2.8 },
  { x: -14, y: -9, rotate: -2.0 },
  { x: 12, y: 7, rotate: 1.6 },
  { x: -8, y: -4, rotate: -1.0 },
  { x: 5, y: 2, rotate: 0.6 },
  { x: -2, y: -1, rotate: -0.2 },
  { x: 0, y: 0, rotate: 0 },
];

function calculateShakeDisplacement(currentFrame, shakeStartFrames = [], positionKeyframes = null, orientationKeyframes = null) {
  let x = 0;
  let y = 0;
  let rotate = 0;
  let rotateX = 0;
  let rotateY = 0;

  if (positionKeyframes && positionKeyframes.length > 0) {
    const keys = positionKeyframes;
    if (currentFrame >= keys[0].frame && currentFrame <= keys[keys.length - 1].frame) {
      for (let i = 0; i < keys.length - 1; i++) {
        const k1 = keys[i];
        const k2 = keys[i + 1];
        if (currentFrame >= k1.frame && currentFrame <= k2.frame) {
          const total = k2.frame - k1.frame;
          const progress = total === 0 ? 0 : (currentFrame - k1.frame) / total;
          x = (k1.x ?? 0) + progress * ((k2.x ?? 0) - (k1.x ?? 0));
          y = (k1.y ?? 0) + progress * ((k2.y ?? 0) - (k1.y ?? 0));
          break;
        }
      }
    }
  }

  if (orientationKeyframes && orientationKeyframes.length > 0) {
    const oKeys = orientationKeyframes;
    if (currentFrame >= oKeys[0].frame && currentFrame <= oKeys[oKeys.length - 1].frame) {
      for (let i = 0; i < oKeys.length - 1; i++) {
        const k1 = oKeys[i];
        const k2 = oKeys[i + 1];
        if (currentFrame >= k1.frame && currentFrame <= k2.frame) {
          const total = k2.frame - k1.frame;
          const progress = total === 0 ? 0 : (currentFrame - k1.frame) / total;
          rotate = (k1.rotate ?? 0) + progress * ((k2.rotate ?? 0) - (k1.rotate ?? 0));
          rotateX = (k1.rotateX ?? 0) + progress * ((k2.rotateX ?? 0) - (k1.rotateX ?? 0));
          rotateY = (k1.rotateY ?? 0) + progress * ((k2.rotateY ?? 0) - (k1.rotateY ?? 0));
          break;
        }
      }
    }
  }

  if (positionKeyframes || orientationKeyframes) {
    return { x, y, rotate, rotateX, rotateY };
  }

  const framesList = Array.isArray(shakeStartFrames) ? shakeStartFrames : [shakeStartFrames];
  for (const startFrame of framesList) {
    if (startFrame === null || startFrame === undefined) continue;
    const rel = currentFrame - startFrame;
    if (rel >= 0 && rel < SHAKE_OFFSETS.length) {
      return SHAKE_OFFSETS[rel];
    }
  }
  return { x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 };
}

/**
 * IntroCard – reusable modal card for a profile.
 * Props:
 *   name, role, description – text content
 *   bgColor – card background color
 *   frames – array of PNG URLs for character animation
 *   fps – animation speed
 *   shakeStartFrames – frame index or array of frame indices triggering card impact shake
 *   positionKeyframes – optional exact AE position keyframes [{ frame, x, y }]
 *   onClose – callback to close modal
 *   socialLinks – { linkedin, email, instagram } URLs
 */
export default function IntroCard({
  name,
  role,
  description,
  bgColor = '#FF5C75',
  frames = [],
  fps = 24,
  shakeStartFrames = [],
  positionKeyframes = null,
  orientationKeyframes = null,
  onClose,
  socialLinks = {},
  image = null,
  imageClassName = '',
  uppercase = true,
}) {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Directly calculate card displacement synchronously from current frame index
  const offset = calculateShakeDisplacement(currentFrame, shakeStartFrames, positionKeyframes, orientationKeyframes);

  return (
    <motion.div
      className="relative w-full max-w-[940px] font-GochiHand"
      animate={{
        x: offset.x,
        y: offset.y,
        rotate: offset.rotate,
        rotateX: offset.rotateX,
        rotateY: offset.rotateY,
      }}
      transition={{ duration: 0 }}
    >
      {/* Card background */}
      <div
        className="relative overflow-hidden rounded-[32px] text-white p-8 sm:p-12 md:p-16 flex justify-end items-center shadow-2xl"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full max-w-[420px] flex flex-col items-center text-center font-fredoka">
          <h2 className={`font-GochiHand text-4xl sm:text-5xl md:text-6xl font-black tracking-wider ${uppercase ? 'uppercase' : ''}`}>
            {name}
          </h2>
          <p className="mt-2 text-xl sm:text-2xl font-bold tracking-tight">{role}</p>
          <p className="mt-6 text-sm sm:text-base font-medium leading-relaxed opacity-90 px-2">
            {description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 font-GochiHand">
            {/* icons – with proper protocol formatting */}
            {socialLinks.linkedin && socialLinks.linkedin !== '#' && (
              <a
                href={socialLinks.linkedin.startsWith('http') ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75" /></svg>
              </a>
            )}
            {socialLinks.email && socialLinks.email !== '#' && (
              <a
                href={socialLinks.email.startsWith('mailto:') ? socialLinks.email : `mailto:${socialLinks.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
            )}
            {socialLinks.instagram && socialLinks.instagram !== '#' && (
              <a
                href={socialLinks.instagram.startsWith('http') ? socialLinks.instagram : `https://${socialLinks.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="6" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Character animation / image overlay */}
      <div className="pointer-events-none absolute bottom-0 -left-[4%] sm:-left-[8%] z-20 w-[50%] min-w-[240px] max-w-[460px] overflow-visible flex items-end">
        {frames && frames.length > 0 ? (
          <CharacterFrameAnimation
            frames={frames}
            fps={fps}
            loop={false}
            onFrameChange={setCurrentFrame}
            className="block w-full max-h-[520px] select-none object-contain overflow-visible max-w-none"
          />
        ) : image ? (
          <img
            src={image}
            alt={name}
            className={`ml-32 block w-full max-h-[520px] select-none object-contain overflow-visible max-w-none ${imageClassName}`.trim()}
          />
        ) : null}
      </div>
    </motion.div>
  );
}
