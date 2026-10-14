import {
  aftereffrect,
  blender,
  csp,
  illlustrater,
  photshop,
  premerpro,
  procreate,
  procreate2,
} from '../../../logos';

const toolLogos = [
  { id: 1, src: csp, alt: 'Clip Studio Paint' },
  { id: 2, src: premerpro, alt: 'Premiere Pro' },
  { id: 3, src: aftereffrect, alt: 'After Effects' },
  { id: 4, src: photshop, alt: 'Photoshop' },
  { id: 5, src: illlustrater, alt: 'Illustrator' },
  { id: 6, src: procreate, alt: 'Procreate' },
  { id: 7, src: procreate2, alt: 'Procreate Alternate' },
  { id: 8, src: blender, alt: 'Blender' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-16 w-full relative overflow-hidden bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-dark-muted font-fredoka">
          {/* Powered By Industry Standard Creative Tools */}
        </span>
      </div>

      <div className="w-full overflow-hidden flex bg-transparent py-4 relative">
        <style>{`
          @keyframes tools-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-25%, 0, 0); }
          }
          .animate-tools-marquee {
            --marquee-duration: 30s;
            animation: tools-marquee var(--marquee-duration) linear infinite;
          }
        `}</style>
        <div className="flex w-max animate-tools-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0" aria-hidden={i !== 0 ? 'true' : undefined}>
              {toolLogos.map((logo) => (
                <img
                  key={`${i}-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-16 w-auto object-contain mx-8 md:mx-20 opacity-100 transition-opacity filter drop-shadow-md"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
