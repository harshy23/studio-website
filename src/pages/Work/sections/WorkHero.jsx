import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, Film } from 'lucide-react';
import animationIntroVideo from '../../../logos/home_page_img/starting_logo/Animation Intro with SOUND.mp4';

export default function WorkHero({ introVideoSrc = animationIntroVideo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  // Handle ESC key and scroll locking when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleWatchIntro = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="work-hero" className="w-full relative overflow-hidden bg-black text-white">
      {/* Work media - Full Width matching Home Hero video design */}
      <div className="relative w-full h-[65vh] min-h-[480px] sm:h-[75vh] md:h-screen flex items-center justify-center group overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1236850398?h=6b50e7494b&autoplay=1&loop=1&muted=1&autopause=0&background=1"
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </div>

        {/* Subtle Overlay gradient for contrast */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

        {/* Tagline overlay at bottom left */}
        {/* <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-20 pointer-events-none">
          <p className="text-white/80 text-sm sm:text-base font-fredoka font-medium tracking-wide drop-shadow-md">
            Baking in Progress
          </p>
        </div> */}

        {/* Layered "Watch Intro" Button at bottom right corner */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            handleWatchIntro();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group/btn absolute bottom-6 right-6 md:bottom-10 md:right-12 z-20 flex items-center gap-1 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[#D9D9D9] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300">
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D9D9D9] group-hover/btn:fill-white ml-0.5" />
          </div>
          <span className="text-[#D9D9D9] group-hover/btn:text-white text-xs sm:text-sm font-fredoka font-semibold tracking-wide">
            Showreel
          </span>
        </motion.button>
      </div>

      {/* Full Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all duration-200 cursor-pointer"
                aria-label="Close intro video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player inside Modal */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                {introVideoSrc && !hasVideoError ? (
                  <video
                    src={introVideoSrc}
                    controls
                    autoPlay
                    onError={() => setHasVideoError(true)}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-gray-900 to-black text-white relative">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mb-6 animate-pulse">
                      <Film className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-fredoka font-bold text-white mb-2">
                      Studio Biskoot Intro Video
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 max-w-md mb-6 font-fredoka">
                      Full video player template ready. Once the final intro video file is attached, it will play here with full sound and controls.
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-fredoka text-gray-300">
                      <Volume2 className="w-4 h-4 text-primary" />
                      <span>Audio Enabled</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
