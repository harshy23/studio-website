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
    bgColor: '#FF6B7A', // Coral pink
    type: 'list',
    items: [
      '2D Hand-Drawn Animation',
      'Motion Graphics',
      'Illustrations & Posters',
      '2D FX Animation',
    ],
  },
  {
    id: 'animation',
    img: rect1,
    label: 'Animation Production',
    bgColor: '#828EFA', // Periwinkle blue
    type: 'pipeline',
    headerText:
      'We can take a project from an early idea to a finished piece, handling the creative and production stages along the way.',
    columns: [
      {
        title: 'Pre-Production',
        items: [
          'Script',
          'Concept Art',
          'Storyboards',
          'Character Design',
          'Animatic',
        ],
      },
      {
        title: 'Production',
        items: ['Animation', 'Background Art'],
        secondSection: {
          title: 'Post-Production',
          items: ['Sound Design', 'Compositing'],
        },
      },
    ],
  },
  {
    id: 'whatwedo',
    img: rect3,
    label: 'What We Do',
    bgColor: '#FDB642', // Golden warm yellow
    type: 'list',
    items: [
      'Advertisements',
      'Music Videos',
      'Social Media Content',
      'Graphic Novels and Illustrations',
    ],
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
            background: 'rgba(215, 222, 245, 0.75)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-[620px] rounded-[36px] sm:rounded-[44px] shadow-2xl overflow-hidden p-8 sm:p-12 md:p-14 text-white font-fredoka"
            style={{
              backgroundColor: card.bgColor,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>

            {/* Content for Simple List Cards (Pink & Yellow) */}
            {card.type === 'list' && (
              <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 py-4 sm:py-6">
                {card.items.map((item, index) => (
                  <p
                    key={index}
                    className="text-[20px] sm:text-[23px] md:text-[25px] font-medium tracking-wide text-white leading-tight"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}

            {/* Content for Blue Card (Pipeline: Pre, Production, Post) */}
            {card.type === 'pipeline' && (
              <div className="flex flex-col text-white">
                {/* Intro summary sentence */}
                <p className="text-center text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-relaxed max-w-[500px] mx-auto mb-6 sm:mb-8">
                  {card.headerText}
                </p>

                {/* Subtle divider line like in artwork */}
                <div className="w-32 sm:w-44 h-[1.5px] bg-white/40 mx-auto mb-7 sm:mb-9 rounded-full" />

                {/* 2-Column Layout */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-6">
                  {/* Column 1: Pre-Production */}
                  <div>
                    <h3 className="text-[17px] sm:text-[20px] font-medium mb-2 tracking-wide">
                      {card.columns[0].title}
                    </h3>
                    <ul className="space-y-1 sm:space-y-1.5 text-[14px] sm:text-[16px] font-normal text-white/95">
                      {card.columns[0].items.map((subItem, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-xs opacity-80">•</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Production + Post-Production */}
                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <h3 className="text-[17px] sm:text-[20px] font-medium mb-2 tracking-wide">
                        {card.columns[1].title}
                      </h3>
                      <ul className="space-y-1 sm:space-y-1.5 text-[14px] sm:text-[16px] font-normal text-white/95">
                        {card.columns[1].items.map((subItem, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-xs opacity-80">•</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[17px] sm:text-[20px] font-medium mb-2 tracking-wide">
                        {card.columns[1].secondSection.title}
                      </h3>
                      <ul className="space-y-1 sm:space-y-1.5 text-[14px] sm:text-[16px] font-normal text-white/95">
                        {card.columns[1].secondSection.items.map((subItem, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-xs opacity-80">•</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        className="relative w-full overflow-hidden bg-white pb-6"
      >
        {/* MENU TITLE */}
        <div className="pt-10 sm:pt-12 md:pt-14">
          <h2
            className="
              text-center
              font-GochiHand
              font-medium
              text-[#302C2D]
              text-[50px]
              sm:text-[56px]
              md:text-[62px]
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
              max-w-[1050px]
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

            {/* =========================
    BLUE CARD
    Animation Production
========================== */}
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