import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="w-full relative overflow-hidden bg-transparent text-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary font-fredoka">
            Welcome to Studio Biskoot
          </span> */}
          {/* 
          <h2 className="text-3xl sm:text-5xl font-fredoka font-bold text-white leading-tight">
            Crafting Imaginative Visual Stories &amp; Animation Experiences
          </h2> */}

          <p className=" font-fredoka text-lg sm:text-xl leading-relaxed max-w-3xl">
            Studio Biskoot is a 2D animation studio from India, making hand-drawn films, illustrations, and stories with a whole lot of heart.<br /><br />

            We love expressive characters, silly little faces, everyday adventures, and finding a bit of magic in the ordinary.<br />
            We draw things, make them move, and occasionally make them do things they probably shouldn’t.<br />
            From tiny doodles to big stories, we bring ideas to life — one frame at a time.<br /><br />

            Welcome to Studio Biskoot
          </p>
        </motion.div>
      </div>
    </section>
  );
}
