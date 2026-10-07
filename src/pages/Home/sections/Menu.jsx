import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import handImg from '../../../logos/home_page_img/menue/hand.png';
import thumbImg from '../../../logos/home_page_img/menue/thumb.png';
import pickACard from '../../../logos/home_page_img/menue/PICK A CARD.png';
import rect1 from '../../../logos/home_page_img/menue/Rectangle 1.png';
import rect2 from '../../../logos/home_page_img/menue/Rectangle 2.png';
import rect3 from '../../../logos/home_page_img/menue/Rectangle 3.png';

const CARDS = [
  {
    id: 'expertise',
    img: rect2,
    label: 'Our Expertise',
    accentColor: '#FF7B8B',
    modal: {
      title: 'Our Expertise',
      subtitle: 'What we are great at',
      body: [
        'We blend artistry with storytelling to craft animations that resonate emotionally and communicate ideas with clarity.',
        'Our team specialises in character-driven narratives, motion graphics, and visual development.',
        'From concept ideation to final delivery, we maintain an uncompromising eye for detail.',
      ],
      tags: [
        'Character Design',
        'Visual Development',
        'Motion Graphics',
        'Storyboarding',
      ],
    },
  },
  {
    id: 'animation',
    img: rect1,
    label: 'Animation Production',
    accentColor: '#7B8BFF',
    modal: {
      title: 'Animation Production',
      subtitle: 'Full-pipeline animation studio',
      body: [
        'Studio Biskoot handles end-to-end animation production from storyboarding to compositing and sound-sync.',
        "We work across 2D frame-by-frame, cut-out, and hybrid styles tailored to each project's audience.",
        'Our pipeline is lean, collaborative, and built for both indie projects and commercial campaigns.',
      ],
      tags: [
        '2D Animation',
        'Frame-by-Frame',
        'Compositing',
        'Sound Design',
      ],
    },
  },
  {
    id: 'whatwedo',
    img: rect3,
    label: 'What We Do',
    accentColor: '#FFB74D',
    modal: {
      title: 'What We Do',
      subtitle: 'Services & deliverables',
      body: [
        'We create animated content spanning short films, branded content, music videos, and social-media reels.',
        'Our services also include concept art, illustration, style-frame development, and art direction.',
        'Whether you need a 15-second loop or a 10-minute film, we bring the same craft to every frame.',
      ],
      tags: [
        'Short Films',
        'Brand Content',
        'Explainers',
        'Illustration',
      ],
    },
  },
];

function CardModal({ card, onClose }) {
  return (
    <AnimatePresence>
      {card && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-8"
          style={{
            background: 'rgba(5,5,8,0.88)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: '#0D0D15',
              border: `1.5px solid ${card.accentColor}33`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-1.5 w-full"
              style={{ background: card.accentColor }}
            />

            <div className="p-7 sm:p-9">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="text-xs font-fredoka font-semibold uppercase tracking-[0.22em] mb-1"
                    style={{ color: card.accentColor }}
                  >
                    {card.modal.subtitle}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-fredoka font-bold text-white leading-tight">
                    {card.modal.title}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="ml-4 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {card.modal.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-[15px] leading-relaxed font-sans"
                    style={{ color: '#B8B8CC' }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {card.modal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-fredoka font-semibold rounded-full"
                    style={{
                      background: `${card.accentColor}18`,
                      color: card.accentColor,
                      border: `1px solid ${card.accentColor}40`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MenuSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="menu"
        className="relative w-full overflow-hidden bg-white"
      >
        {/* MENU TITLE */}
        <div className="pt-8 sm:pt-9 md:pt-10">
          <h2
            className="
              text-center
              font-fredoka
              font-medium
              text-[#302C2D]
              text-[32px]
              sm:text-[36px]
              md:text-[40px]
              leading-none
            "
          >
            Menu
          </h2>
        </div>

        {/* MENU ARTWORK */}
        <div className="w-full flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-[719px]
              aspect-[719/439]
            "
          >

            {/* =========================
                BACK HAND
            ========================== */}
            <div
              className="
                absolute
                pointer-events-none
                select-none
              "
              style={{
                width: '42%',
                right: '28%',
                top: '25%',
                zIndex: 10,
              }}
            >
              <img
                src={handImg}
                alt="Hand"
                draggable={false}
                className="block w-full h-auto"
              />
            </div>

            {/* =========================
    PINK CARD
    Our Expertise
========================== */}
            <motion.div
              className="absolute cursor-pointer select-none"
              style={{
                width: '27%',
                left: '24.5%',
                top: '18.5%',
                rotate: '7deg',
                transformOrigin: 'center center',
                zIndex: 20,
              }}
              whileHover={{
                x: -15,
                y: -12,
              }}
              transition={{
                type: 'tween',
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setSelected(CARDS[0])}
            >
              <img
                src={rect2}
                alt="Our Expertise"
                draggable={false}
                className="block w-full h-auto"
              />
            </motion.div>

            {/* blue */}
            <motion.div
              className="
    absolute
    cursor-pointer
    select-none
  "
              style={{
                width: '27%',
                left: '24%',
                top: '36%',
                rotate: '-2deg',
                transformOrigin: 'center center',
                zIndex: 22,
              }}
              whileHover={{
                x: -15,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              onClick={() => setSelected(CARDS[1])}
            >
              <img
                src={rect1}
                alt="Animation Production"
                draggable={false}
                className="block w-full h-auto"
              />
            </motion.div>
            {/* =========================
    YELLOW CARD
    What We Do
========================== */}
            <motion.div
              className="absolute cursor-pointer select-none"
              style={{
                width: '27%',
                left: '26%',
                top: '56%',
                rotate: '-17deg',
                transformOrigin: 'center center',
                zIndex: 20,
              }}
              whileHover={{
                x: -15,
                y: 12,
              }}
              transition={{
                type: 'tween',
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setSelected(CARDS[2])}
            >
              <img
                src={rect3}
                alt="What We Do"
                draggable={false}
                className="block w-full h-auto"
              />
            </motion.div>
            {/* =========================
                FRONT THUMB
            ========================== */}
            <div
              className="
                absolute
                pointer-events-none
                select-none
              "
              style={{
                width: '42%',
                right: '28%',
                top: '25%',
                zIndex: 30,
              }}
            >
              <img
                src={thumbImg}
                alt="Thumb"
                draggable={false}
                className="block w-full h-auto"
              />
            </div>

            {/* =========================
                SPEECH BUBBLE
                Pick a card
            ========================== */}
            <div
              className="
                absolute
                pointer-events-none
                select-none
              "
              style={{
                width: '15.5%',
                right: '16%',
                top: '20%',
                zIndex: 40,
              }}
            >
              <img
                src={pickACard}
                alt="Pick a card"
                draggable={false}
                className="block w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CARD MODAL */}
      <CardModal
        card={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}