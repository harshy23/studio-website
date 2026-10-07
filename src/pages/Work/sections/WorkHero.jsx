import { work, workVideo } from '../../../logos';

export default function WorkHero() {
  return (
    <section id="work-hero" className="pt-28 pb-12 w-full relative overflow-hidden bg-transparent">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Section Header */}
        {/* <div className="flex flex-col items-center text-center mb-10 px-6">
          <img
            src={work}
            alt="Work"
            className="w-56 md:w-72 h-auto object-contain drop-shadow-xl"
          />
          <p className="mt-4 text-dark-muted font-fredoka text-base sm:text-lg max-w-xl">

          </p>
        </div> */}

        {/* Work media - Full Width */}
        <div className="w-full relative">
          <img
            src={workVideo}
            alt="Work Showcase"
            className="w-full h-auto object-cover max-h-[600px] border-y border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
