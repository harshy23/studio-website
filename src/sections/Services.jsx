import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import Magnetic from '../components/Magnetic';

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  
  // Dynamic icon helper
  const IconComponent = Icons[service.icon] || Icons.HelpCircle;

  // 3D Card Tilt on Mouse Move
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation (-15deg to 15deg)
    const rotateX = -((y - height / 2) / (height / 2)) * 12;
    const rotateY = ((x - width / 2) / (width / 2)) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-8 rounded-3xl bg-dark-card border border-dark-border/60 hover:border-primary/30 transition-all duration-300 ease-out flex flex-col h-full hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] cursor-none"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
      data-hover="true"
    >
      {/* Icon Frame */}
      <div 
        className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mb-8"
        style={{ transform: 'translateZ(30px)' }}
      >
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 
        className="text-xl font-heading font-bold text-white mb-4"
        style={{ transform: 'translateZ(40px)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p 
        className="text-dark-muted text-sm leading-relaxed mb-8 flex-grow"
        style={{ transform: 'translateZ(25px)' }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div 
        className="flex flex-wrap gap-2 pt-4 border-t border-dark-border/40"
        style={{ transform: 'translateZ(20px)' }}
      >
        {service.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-primary-light bg-primary/5 py-1 px-2.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32 bg-[#07070B] relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6">
            Our Digital Craft
          </h2>
          <p className="text-dark-muted text-base leading-relaxed">
            We provide end-to-end strategy, creative visual concepts, and scalable engineering for companies that value design details.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <ServiceCard service={service} index={idx} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
