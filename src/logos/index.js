import LogoPrimary from './vertical.png';
import LogoSecondary from './withname.png';
import ScrollUpIcon from './scroll_up.png';
import work from './WORK.png';
import workVideo from './application_logo/work video.png';
import aftereffrect from './application_logo/aftereffrect.png';
import blender from './application_logo/blender.png';
import csp from './application_logo/csp.png';
import illlustrater from './application_logo/illlustrater.png';
import photshop from './application_logo/photshop.png';
import premerpro from './application_logo/premerpro.png';
import procreate from './application_logo/procreate.png';
import procreate2 from './application_logo/procreate2.png';
// import sudoAnimation from './SudoAnimation.gif';
import sudoCard from './SUDO CARD.png';
import sudoBefore from './before_click_sudo.png';
import sudoAfter from './after_click_sudo.png';
import vineetBefore from './before_click_vineet.png';
import vineetAfter from './after_click_vineet..png';
import vineetCard from './VINEET CARD.png';
// import vineetAnimation from './VineetAnimation.gif';
import instagram from './Instagram.png';
import linkdin from './Linkedin.png';
import mail from './Mail.png';
import vineetResting from './home_page_img/Vineet Resting.png';
import vineetHover from './home_page_img/Vineet Hover.png';
import sudoResting from './home_page_img/Sudo Resting.png';
import sudoHover from './home_page_img/Sudo Hover.png';

import backformImg from './conatct_us_logo/backform.jpg';
import behindChaiDipImg from './conatct_us_logo/behind_chai_dip.png';
import formDividerImg from './conatct_us_logo/form_divider.png';
import vatsal from './about_us_img/associates/vatsal.png';
import vatsalHover from './about_us_img/associates/vatsal_onhover.png';
import shubham from './about_us_img/associates/shubham.png';
import shubhamHover from './about_us_img/associates/shubham_onhover.png';
import vatsalCard from './about_us_img/associates/vatsal_card.png';
import shubhamCard from './about_us_img/associates/shubham_card.png';
import bgmi from './work/project_unbreakable/bgmi.png';
import bgmiCharacterSheet from './work/project_unbreakable/Studio Biskoot Homepage.png';
const startingLogoFrameModules = import.meta.glob(
  './home_page_img/starting_logo/reveal 1/*.png',
  { eager: true, import: 'default' }
);
export const startingLogoFrames = Object.keys(startingLogoFrameModules)
  .sort()
  .map((path) => startingLogoFrameModules[path]);

const chaiDipFrameModules = import.meta.glob(
  './conatct_us_logo/Chai Dip/mail us/*.png',
  { eager: true, import: 'default' }
);
export const chaiDipFrames = Object.keys(chaiDipFrameModules)
  .sort()
  .map((path) => chaiDipFrameModules[path]);

export {
  LogoPrimary,
  LogoSecondary,
  ScrollUpIcon,
  work,
  workVideo,
  aftereffrect,
  blender,
  csp,
  illlustrater,
  photshop,
  premerpro,
  procreate,
  procreate2,
  // sudoAnimation,
  sudoCard,
  sudoBefore,
  sudoAfter,
  vineetBefore,
  vineetAfter,
  // vineetAnimation,
  vineetCard,
  instagram,
  linkdin,
  mail,
  vineetResting,
  vineetHover,
  sudoResting,
  sudoHover,
  backformImg,
  behindChaiDipImg,
  formDividerImg,
  vatsal,
  vatsalHover,
  shubham,
  shubhamHover,
  vatsalCard,
  shubhamCard,
  bgmi,
  bgmiCharacterSheet,
};


