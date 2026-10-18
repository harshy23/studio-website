import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../../../data/projects';

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-grid" className="py-20 bg-work relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header and Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className='text-center mx-auto'>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block font-fredoka">

            </span>
            <h2
              className="
          font-GochiHand
          text-6xl
          font-bold
          tracking-wide
          sm:text-7xl
          md:text-8xl
        "
              style={{ color: '#1a1a1a' }}
            >
              Projects
            </h2>
          </div>

          {/* Categories bar */}
          {/* <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-dark-card border border-dark-border text-dark-muted hover:text-white hover:border-dark-muted/40'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div> */}
        </div>

        {/* Projects Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square rounded-3xl overflow-hidden glass border border-dark-border/40 hover:border-primary/20 transition-all duration-300 cursor-pointer block"
              >
                <Link
                  to={project.link || `/work/${project.slug || project.id}`}
                  aria-label={`View details of ${project.title}`}
                  className="block w-full h-full relative"
                >
                  {/* Image / Placeholder */}
                  <div className="absolute inset-0 overflow-hidden">
                    {project.isBakingInProgress || project.id !== 1 ? (
                      <div className="w-full h-full bg-[#121216] flex flex-col items-center justify-center p-6 text-center select-none group-hover:scale-105 transition-transform duration-700">
                        <img
                          src={project.image}
                          alt="Studio Biskoot"
                          className="w-24 sm:w-28 md:w-32 h-auto max-h-[50%] object-contain filter grayscale contrast-125 brightness-95 opacity-85 group-hover:opacity-100 transition-opacity"
                        />
                        <p className="mt-3 text-xs sm:text-sm font-fredoka font-medium tracking-wider text-gray-300 lowercase grayscale">
                          baking in progress..
                        </p>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.8] brightness-[0.7] group-hover:brightness-[0.5]"
                      />
                    )}
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Corner Year Badge */}
                  <div className="absolute top-6 right-6 py-1 px-3 glass rounded-md text-[10px] uppercase font-bold text-white tracking-widest">
                    {project.year}
                  </div>

                  {/* Content Panel */}
                  <div className="absolute bottom-0 left-0 w-full p-2 sm:p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase font-bold tracking-wider text-slate-300 bg-white/5 py-0.5 px-2 rounded-md lg:text-[10px] lg:px-2 lg:py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary-light mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl pointer-events-none transition-colors" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
