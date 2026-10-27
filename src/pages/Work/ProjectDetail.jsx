import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { getProjectBySlug, projects } from '../../data/projects';

const ease = [0.22, 1, 0.36, 1];

export default function ProjectDetail() {
  const { slug } = useParams();
  const [lightboxImg, setLightboxImg] = useState(null);

  // Retrieve project data by slug or id
  const project = getProjectBySlug(slug) || projects[0];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImg]);

  if (!project) {
    return (
      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="font-fredoka text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8 font-sans">The project you are looking for does not exist or has moved.</p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-fredoka font-medium shadow-md hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>
      </main>
    );
  }

  // Behind the scenes sections
  const btsSections = project.behindTheScenes || [];

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-primary/20 selection:text-gray-900 pt-14 sm:pt-16">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      {project.vimeoVideo ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="w-full relative overflow-hidden bg-black border-b border-gray-100 aspect-video max-h-[520px] sm:max-h-[620px] lg:max-h-[720px] flex items-center justify-center"
        >
          <iframe
            title="vimeo-player"
            src={`${project.vimeoVideo}${project.vimeoVideo.includes('?') ? '&' : '?'}autoplay=1&loop=1&muted=1&autopause=0`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </motion.div>
      ) : project.isBakingInProgress ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="w-full relative overflow-hidden bg-[#121216] border-b border-gray-100 py-20 flex flex-col items-center justify-center text-center select-none"
        >
          <img
            src={project.image}
            alt="Studio Biskoot"
            className="w-28 sm:w-36 md:w-44 h-auto object-contain filter grayscale contrast-125 brightness-95 opacity-85"
          />
          <p className="mt-4 text-sm sm:text-base font-fredoka font-medium tracking-wider text-gray-300 lowercase grayscale">
            baking in progress..
          </p>
        </motion.div>
      ) : (project.bannerImage || project.image) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="w-full relative overflow-hidden bg-gray-100 border-b border-gray-100"
        >
          <img
            src={project.bannerImage || project.image}
            alt={project.projectTitle || project.title}
            className="w-full h-auto max-h-[520px] sm:max-h-[620px] lg:max-h-[720px] object-cover object-center"
          />
        </motion.div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. HEADER / TITLE / CLIENT / DESCRIPTION
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* Main Title */}
          <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f1f2e] tracking-tight">
            {project.projectTitle || project.title}
          </h1>

          {/* Client Subtitle */}
          {project.client && (
            <p className="mt-3 text-lg sm:text-xl font-medium text-gray-800 font-fredoka">
              {project.client}
            </p>
          )}

          {/* Project Synopsis / Description */}
          {project.description && (
            <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 font-sans">
              {project.description}
            </p>
          )}
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            3. CREDITS TABLE
        ───────────────────────────────────────────────────────────── */}
        {project.credits && project.credits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="pt-14 sm:pt-18 pb-6"
          >
            <h3 className="text-center font-fredoka text-xl sm:text-2xl font-bold text-[#FF5C75] tracking-wide mb-8">
              {project.credits.titl}
            </h3>

            <div className="max-w-xl mx-auto flex flex-col gap-4 font-fredoka">
              {project.credits.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_1.3fr] sm:grid-cols-[1fr_1.5fr] gap-4 sm:gap-8 items-start"
                >
                  <span className="text-right text-gray-500 font-medium text-sm sm:text-base">
                    {item.role}
                  </span>
                  <div className="text-left text-gray-900 font-semibold text-sm sm:text-base flex flex-col gap-0.5">
                    {Array.isArray(item.names) ? (
                      item.names.map((name, nIdx) => <span key={nIdx}>{name}</span>)
                    ) : (
                      <span>{item.names}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle gradient divider line matching mockup */}
            <div className="w-48 sm:w-64 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#7B81FF] to-transparent mt-14 sm:mt-18 opacity-70" />
          </motion.div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BEHIND THE SCENES
      ───────────────────────────────────────────────────────────── */}
      {btsSections.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 sm:mb-20"
          >
            Behind the scenes
          </motion.h2>

          <div className="flex flex-col gap-20 sm:gap-28">
            {btsSections.map((sec) => {
              /* ── A) STORYBOARDS ────────────────────────────────────── */
              if (sec.type === 'storyboards') {
                const sheets = sec.items || [];
                const row1 = sheets.slice(0, 4);
                const row2 = sheets.slice(4);

                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center"
                  >
                    <h3
                      className="font-fredoka text-xl sm:text-2xl font-bold tracking-wide mb-8 sm:mb-12"
                      style={{ color: sec.accentColor || '#FF5C75' }}
                    >
                      {sec.title}
                    </h3>

                    {/* Row 1: Up to 4 columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl">
                      {row1.map((sheet, sIdx) => (
                        <div
                          key={sIdx}
                          onClick={() => setLightboxImg(sheet)}
                          className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                          <img
                            src={sheet}
                            alt={`Storyboard sheet ${sIdx + 1}`}
                            className="w-full h-auto object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="p-2 rounded-full bg-white/90 text-gray-800 shadow-sm">
                              <ZoomIn className="w-5 h-5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Row 2: Remaining sheets centered */}
                    {row2.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 w-full max-w-5xl mt-3 sm:mt-5">
                        {row2.map((sheet, sIdx) => (
                          <div
                            key={sIdx + 4}
                            onClick={() => setLightboxImg(sheet)}
                            className="w-[calc(50%-6px)] sm:w-[calc(25%-15px)] group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={sheet}
                              alt={`Storyboard sheet ${sIdx + 5}`}
                              className="w-full h-auto object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              }

              /* ── B) CHARACTER SHEETS ────────────────────────────────── */
              if (sec.type === 'characterSheets') {
                const characters = sec.items || [];
                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center"
                  >
                    <h3
                      className="font-fredoka text-xl sm:text-2xl font-bold tracking-wide mb-8 sm:mb-12"
                      style={{ color: sec.accentColor || '#5A63DB' }}
                    >
                      {sec.title}
                    </h3>

                    <div className="flex flex-col items-center gap-8 sm:gap-12 w-full max-w-4xl">
                      {characters.map((char, cIdx) => (
                        <div
                          key={cIdx}
                          onClick={() => setLightboxImg(char.image || char)}
                          className="group relative cursor-zoom-in w-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                          <img
                            src={char.image || char}
                            alt={char.name || `Character sheet ${cIdx + 1}`}
                            className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                              <ZoomIn className="w-6 h-6" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              /* ── C) CONCEPT EXPLORATION ─────────────────────────────── */
              if (sec.type === 'conceptExploration') {
                const img = sec.image || (sec.items && sec.items[0]);
                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center"
                  >
                    <h3
                      className="font-fredoka text-xl sm:text-2xl font-bold tracking-wide mb-8 sm:mb-12"
                      style={{ color: sec.accentColor || '#FF5C75' }}
                    >
                      {sec.title}
                    </h3>

                    {img && (
                      <div
                        onClick={() => setLightboxImg(img)}
                        className="group relative cursor-zoom-in w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
                      >
                        <img
                          src={img}
                          alt="Concept Exploration"
                          className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                            <ZoomIn className="w-6 h-6" />
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              }

              /* ── D) BACKGROUNDS ───────────────────────────────────── */
              if (sec.type === 'backgrounds') {
                const bgs = sec.items || [];
                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center"
                  >
                    <h3
                      className="font-fredoka text-xl sm:text-2xl font-bold tracking-wide mb-8 sm:mb-12"
                      style={{ color: sec.accentColor || '#FF5C75' }}
                    >
                      {sec.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl">
                      {bgs.length === 3 ? (
                        <>
                          {/* Top row: empty left cell on desktop, image on right */}
                          <div className="hidden sm:block" />
                          <div
                            onClick={() => setLightboxImg(bgs[0])}
                            className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={bgs[0]}
                              alt="Background 1"
                              className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>

                          {/* Bottom row: two images side-by-side */}
                          <div
                            onClick={() => setLightboxImg(bgs[1])}
                            className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={bgs[1]}
                              alt="Background 2"
                              className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>

                          <div
                            onClick={() => setLightboxImg(bgs[2])}
                            className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={bgs[2]}
                              alt="Background 3"
                              className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        bgs.map((bg, bIdx) => (
                          <div
                            key={bIdx}
                            onClick={() => setLightboxImg(bg)}
                            className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={bg}
                              alt={`Background ${bIdx + 1}`}
                              className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2.5 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                );
              }

              /* ── E) STILLS ─────────────────────────────────────────── */
              if (sec.type === 'stills') {
                const stills = sec.items || [];
                const isSingleColumn = sec.columns === 1 || sec.layout === 'full';

                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center"
                  >
                    <h3
                      className="font-fredoka text-xl sm:text-2xl font-bold tracking-wide mb-8 sm:mb-12"
                      style={{ color: sec.accentColor || '#5A63DB' }}
                    >
                      {sec.title}
                    </h3>

                    {isSingleColumn ? (
                      <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-5xl">
                        {stills.map((still, sIdx) => (
                          <div
                            key={sIdx}
                            onClick={() => setLightboxImg(still)}
                            className="group relative cursor-zoom-in overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 bg-black/5 transition-all duration-300"
                          >
                            <img
                              src={still}
                              alt={`Movie still ${sIdx + 1}`}
                              className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-3 rounded-full bg-white/90 text-gray-800 shadow-md">
                                <ZoomIn className="w-6 h-6" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl border border-gray-200/60 bg-white">
                        {stills.map((still, sIdx) => (
                          <div
                            key={sIdx}
                            onClick={() => setLightboxImg(still)}
                            className="group relative cursor-zoom-in overflow-hidden bg-black/5"
                          >
                            <img
                              src={still}
                              alt={`Movie still ${sIdx + 1}`}
                              className="w-full h-auto object-cover select-none group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="p-2 rounded-full bg-white/90 text-gray-800 shadow-sm">
                                <ZoomIn className="w-5 h-5" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              }

              return null;
            })}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-20 sm:mt-28 flex justify-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 bg-white text-gray-800 font-fredoka font-semibold shadow-sm hover:shadow-md hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-primary" /> Back to All Projects
            </Link>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. LIGHTBOX MODAL (HIGH RESOLUTION PREVIEW)
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              src={lightboxImg}
              alt="Enlarged preview"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
