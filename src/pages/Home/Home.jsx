import Hero from './sections/Hero';
import WorkPreview from './sections/WorkPreview';
import AboutPreview from './sections/AboutPreview';
import Intro from './sections/Intro';
import Tools from './sections/Tools';
import MenuSection from './sections/Menu';
import Services from './sections/Services';
import Contact from '../../sections/slideshow';

export default function Home() {
  return (
    <main className="w-full relative min-h-screen pt-15">
      {/* 1. Hero: Centered Logo + "Baking in Progress" + "Watch Intro" */}
      <Hero />



      {/* 2. Studio introduction text */}
      <Intro />

      {/* 3. Large WORK and ABOUT illustrated cards */}
      <section className="max-w-5xl mx-auto px-6  flex justify-center items-center py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12 w-full">
          <WorkPreview />
          <AboutPreview />
        </div>
      </section>

      {/* 4. Software/tool icons row */}
      <Tools />

      {/* 5. Menu — pick-a-card interactive section */}
      <MenuSection />

      {/* 6. Contact / slideshow */}
      {/* <Services /> */}
      <Contact />
    </main>
  );
}
