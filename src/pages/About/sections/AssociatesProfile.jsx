import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    vatsal,
    vatsalHover,
    shubham,
    shubhamHover,
    vatsalCard,
    shubhamCard,
} from '../../../logos';
import IntroCard from '../../../components/IntroCard';

const ease = [0.22, 1, 0.36, 1];

export const CHARACTER_CONFIGS = {
    sudo: {
        name: 'Vatsal Bucha',
        role: 'Writer / Director / Animator',
        description:
            "Hi! I’m Vatsal, a writer, director and animator creating original IPs across animation, comics and film. I’m the creator of “Bhoot Club”, an indie animated show, and currently building Studio Yum, an animation & IP studio.",
        bgColor: '#FFB649',
        fps: 24,
        image: vatsalCard,
        imageClassName: 'scale-[1.3] origin-bottom ml-8 sm:ml-12',
        socialLinks: { email: '#', instagram: '#' },
    },
    vineet: {
        name: 'SHUBHAM M.',
        role: 'Motion/Sound Designer',
        description:
            'Hi! I’m Shubham, I am a 2d and 3d animator, musician storyteller and sound designer. I am currently building “ ̶m̶e̶d̶i̶o̶c̶r̶e̶ “, a merch store / design studio.',
        bgColor: '#FFB649',
        fps: 24,
        image: shubhamCard,
        imageClassName: 'scale-[1.32] origin-bottom ml-8 sm:ml-12',
        socialLinks: { linkedin: '#', email: '#', instagram: '#' },
    },
};



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
                image={config.image}
                imageClassName={config.imageClassName}
                uppercase={false}
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
                image={config.image}
                imageClassName={config.imageClassName}
                uppercase={false}
                onClose={onClose}
                socialLinks={config.socialLinks}
            />
        </div>
    );
}

export default function AssociatesProfile() {
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
                    Associates
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
                        name="Shubham M."
                        beforeImg={shubham}
                        afterImg={shubhamHover}
                        accentColor="#FFB649"
                        index={0}
                        onClick={() => setOpenProfile('vineet')}
                    />

                    <ProfileThumb
                        name="Vatsal Bucha"
                        beforeImg={vatsal}
                        afterImg={vatsalHover}
                        accentColor="#FFB649"
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
