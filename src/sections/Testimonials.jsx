import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { LogoSecondary } from '../logos';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    // Calculate width initially
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-[#07070B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-20">
          <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
              What They Say
            </h2>
          </div>
        </div>

        {/* Draggable Carousel Container */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          
          <motion.div
            ref={carouselRef}
            className="flex"
            style={{ width: '100%' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8 pb-10"
              style={{ width: 'max-content' }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-[300px] sm:w-[450px] p-8 sm:p-10 rounded-3xl bg-dark-card border border-dark-border/60 flex flex-col justify-between select-none"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="pt-6 border-t border-dark-border/40 flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-dark-muted font-medium mt-0.5">
                        {item.role}, {item.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <img
                        src={LogoSecondary}
                        alt="Studio Biscut signature logo"
                        className="w-10 h-10 rounded-2xl object-cover border border-white/10"
                      />
                      <span className="text-[10px] font-heading font-extrabold tracking-widest text-primary uppercase">
                        {item.company}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        {/* Carousel instructions */}
        <div className="flex justify-between items-center mt-6 text-xs text-dark-muted">
          <span>← Drag left or right to explore testimonials →</span>
          <span>{testimonials.length} client stories</span>
        </div>

      </div>
    </section>
  );
}
