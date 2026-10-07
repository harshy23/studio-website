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
      <p className="mt-4 text-gray-700 font-fredoka text-lg sm:text-xl max-w-2xl mx-auto px-6 mt-20">
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
        {/* <p className="text-dark-muted font-fredoka text-lg sm:text-xl leading-relaxed max-w-3xl"> */}
        We are an Indian animation studio, specializing in 2D hand drawn animation and storytelling. Over the past few years we have produced a number of independent short films as well as animated commercials, promos and art for various brands, agencies and organizations<br /><br />

        Our team is made up of a eclectic bunch of animators, storytellers, and directors that are passionate about this medium. Be it films, series or commercials, we craft stories that are memorable for audiences<br />

        {/* </p> */}
      </p>
    </motion.div>
  );
}
