import banner from './stills/1.png';
import still1 from './stills/1.png';
import still2 from './stills/2.png';
import still3 from './stills/3.jpg';
import still4 from './stills/4.jpg';
import still5 from './stills/5.png';

import char1 from './charachter/1.png';

import sb1 from './story_board/1.jpg';
import sb2 from './story_board/2.jpg';
import sb3 from './story_board/3.jpg';
import sb4 from './story_board/4.jpg';

import bg1 from './backgrounds/1.png';
import bg2 from './backgrounds/2.png';
import bg3 from './backgrounds/3.png';
import bg4 from './backgrounds/4.png';
import bg5 from './backgrounds/5.png';

export const pubgAssets = {
  banner,
  thumbnail: banner,
  characterSheets: [
    { id: 'febreyze', name: 'Febreyze Character Sheet', image: char1 },
  ],
  storyboards: [sb1, sb2, sb3, sb4],
  backgrounds: [bg2, bg3, bg4], // sand dune, canyon, building as shown in mockup
  allBackgrounds: [bg1, bg2, bg3, bg4, bg5],
  stills: [still1, still2, still3, still4, still5],
};
