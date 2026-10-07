import {
  work,
  workVideo,
  aftereffrect,
  blender,
  csp,
  illlustrater,
  photshop,
  premerpro,
  procreate,
  procreate2
} from '../logos';

const logos = [
  { id: 1, src: csp, alt: "Clip Studio Paint" },
  { id: 2, src: premerpro, alt: "Premiere Pro" },
  { id: 3, src: aftereffrect, alt: "After Effects" },
  { id: 4, src: photshop, alt: "Photoshop" },
  { id: 5, src: illlustrater, alt: "Illustrator" },
  { id: 6, src: procreate, alt: "Procreate" },
  { id: 7, src: procreate2, alt: "Procreate Alternate" },
  { id: 8, src: blender, alt: "Blender" },
];

const InfiniteLogoMarquee = ({ logos }) => {
  return (
    <div className="w-full overflow-hidden flex bg-transparent py-10 md:py-16 relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        .animate-marquee {
          /* You can easily change the marquee speed here */
          --marquee-duration: 30s;
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .animate-marquee:hover {
          /* animation-play-state: paused; */
        }
      `}</style>
      <div className="flex w-max animate-marquee">
        {/* Render sequence 4 times to ensure no empty space on ultra-wide screens */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0" aria-hidden={i !== 0 ? "true" : undefined}>
            {logos.map((logo) => (
              <img
                key={`${i}-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain mx-8 md:mx-20"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Showcase() {
  return (
    <section id="showcase" className="pt-20 pb-0 w-full relative overflow-hidden bg-transparent">
      <div className="w-full mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 px-6">
          <img
            src={work}
            alt="Work"
            className="w-48 md:w-64 h-auto object-contain"
          />
        </div>

        {/* Work media - Full Width */}
        <div className="w-full relative">
          {/* 
            PLACEHOLDER for video. 
            When actual video is available, replace the <img> tag with:
            <video 
              src={actualVideoSource} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-auto object-cover" 
            />
          */}
          <img
            src={workVideo}
            alt="Work Showcase"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Infinite Logo Marquee */}
        <InfiniteLogoMarquee logos={logos} />
      </div>
    </section>
  );
}
