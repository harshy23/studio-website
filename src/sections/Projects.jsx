import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, categories } from '../data/projects';
import Magnetic from '../components/Magnetic';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
              Selected Projects
            </h2>
          </div>

          {/* Categories bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-dark-card border border-dark-border text-dark-muted hover:text-white hover:border-dark-muted/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[420px] rounded-3xl overflow-hidden glass border border-dark-border/40 hover:border-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full h-full pointer-events-none overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.8] brightness-[0.7] group-hover:brightness-[0.5]"
                  />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />

                {/* Corner details (Year) */}
                <div className="absolute top-6 right-6 py-1 px-3 glass rounded-md text-[10px] uppercase font-bold text-white tracking-widest">
                  {project.year}
                </div>

                {/* Content Panel (Slide up on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase font-bold tracking-wider text-slate-300 bg-white/5 py-0.5 px-2 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary-light mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <Magnetic strength={0.3}>
                      <a
                        href={project.link}
                        className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:rotate-45 transition-all duration-300"
                        aria-label={`View details of ${project.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* Thin card outline hover effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl pointer-events-none transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
