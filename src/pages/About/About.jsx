import AboutHero from './sections/AboutHero';
import TeamProfiles from './sections/TeamProfiles';
import FaqSection from './sections/FaqSection';

export default function About() {
  return (
    <main
      id="about-page"
      style={{ backgroundColor: "white", minHeight: '100vh' }}
      className="relative w-full overflow-hidden text-black "
    >
      <AboutHero />
      <TeamProfiles />
      {/* <FaqSection /> */}
    </main>
  );
}

