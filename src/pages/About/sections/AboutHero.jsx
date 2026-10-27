import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -24 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.65, ease }}
      className="pt-28 text-center sm:pt-32 md:pt-36 pb-6 bg-white"
    >
      {/* <h1
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
        About Us
      </h1> */}
      <div className="mt-4 text-gray-700 font-fredoka text-lg sm:text-xl max-w-3xl mx-auto px-6 mt-20">
        <h3
          className="
          font-GochiHand
          text-4xl
          font-bold
          tracking-wide
          sm:text-5xl
          md:text-6xl
        "
          style={{ color: '#1a1a1a' }}
        >
          Who are we?
        </h3>
        <p className="text-dark font-fredoka text-lg sm:text-xl leading-relaxed mt-10 max-w-3xl">
          We’re Studio Biskoot, an Indian animation studio bringing drawings to life through 2D hand-drawn animation and storytelling!<br /><br />

          From films, animated commercials and promos to illustrations and motion graphics, we love making fun, expressive, and memorable things for brands, agencies, and organizations. One frame at a time, with a whole lot of heart!<br /><br />

          Our team is an eclectic bunch of animators, storytellers, and directors who are passionate about the art of animation. Whether it’s films, series, or commercials, we love crafting stories that stick with you long after the screen fades to black :)

        </p>
      </div>
    </motion.div>
  );
}
