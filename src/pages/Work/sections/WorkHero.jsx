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
        <div className="w-full relative overflow-hidden aspect-video max-h-[600px] border-y border-white/10 bg-black flex items-center justify-center">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1236850398?h=6b50e7494b&autoplay=1&loop=1&muted=1&autopause=0"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
