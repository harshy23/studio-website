import { motion } from 'framer-motion';
import { Bold } from 'lucide-react';

export default function Intro() {
  return (
    <section id="intro" className="w-full relative overflow-hidden bg-transparent text-black">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center pt-6 sm:pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          <p className="font-fredoka text-[13px] sm:text-base md:text-xl leading-relaxed max-w-3xl">
            <b>Studio Biskoot</b> is a <b>2D animation studio</b> from <b>India</b>, making <b>hand-drawn films, illustrations,</b> and <b>stories</b> with a whole lot of heart.<br /><br />

            We love expressive characters, silly little faces, everyday adventures, and finding a bit of magic in the ordinary.
            We draw things, make them move, and occasionally make them do things they probably shouldn’t.
            From tiny doodles to big stories, we bring ideas to life ... one frame at a time :)<br /><br />

            <b>Welcome to Studio Biskoot</b>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
