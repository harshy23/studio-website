import project1 from '../logos/application_logo/slide show 1.png';
import project2 from '../logos/application_logo/slide show 2.png';
import project3 from '../logos/application_logo/slide show 3.png';
import project4 from '../logos/application_logo/slide show 4.png';
import project5 from '../logos/application_logo/slide show 5.png';
import { LogoPrimary } from '../logos';
import { fatherDayAssets } from '../logos/work/project_father_day';

export const projects = [
  {
    id: 1,
    slug: 'groww-fathers-day',
    title: 'Groww - Father’s Day',
    projectTitle: 'Happy Fathers Day',
    client: 'Client - Groww',
    category: '2D Animation',
    tags: ['2D Animation', 'Short Film'],
    image: fatherDayAssets.Project1,
    year: '2026',
    link: '/work/groww-fathers-day',
    vimeoVideo: 'https://player.vimeo.com/video/1231625373?h=ee52492de9',
    bannerImage: fatherDayAssets.banner,
    description:
      'A heartwarming animated short film ad where a young boy narrates a speech during his school assembly, describing his father as his best buddy. As he shares cherished memories of love, laughter, guidance, and everyday adventures, vibrant animated visuals bring each moment to life, celebrating the beautiful bond between a father and child.',
    credits: [
      { role: 'Director', names: ['Vineet Manoj Karnani'] },
      { role: 'Art Director', names: ['Sudhanshu Kanwar'] },
      {
        role: 'Animators',
        names: ['Vineet Manoj Karnani', 'Sudhanshu Kanwar', 'Ayushi Bhaiyyaji Rewatkar'],
      },
      { role: 'Backgrounds', names: ['Sudhanshu Kanwar'] },
      { role: 'Sound Design', names: ['Shubham Mohapatra'] },
      { role: 'Editing & Compositing', names: ['Shubham Mohapatra'] },
    ],
    behindTheScenes: [
      {
        id: 'storyboards',
        title: 'Storyboards',
        accentColor: '#FF5C75',
        type: 'storyboards',
        items: fatherDayAssets.storyboards,
      },
      {
        id: 'character-sheets',
        title: 'Character Sheets',
        accentColor: '#5A63DB',
        type: 'characterSheets',
        items: fatherDayAssets.characterSheets,
      },
      {
        id: 'concept-exploration',
        title: 'Concept Exploration',
        accentColor: '#FF5C75',
        type: 'conceptExploration',
        image: fatherDayAssets.conceptExploration,
      },
      {
        id: 'stills',
        title: 'Stills',
        accentColor: '#5A63DB',
        type: 'stills',
        items: fatherDayAssets.stills,
      },
    ],
  },
  {
    id: 2,
    slug: 'puri-1',
    title: 'Puri 1',
    projectTitle: 'Puri 1 Animation',
    client: 'Studio Original',
    category: 'Motion Design',
    tags: ['Motion Design'],
    image: LogoPrimary,
    isBakingInProgress: true,
    year: '2025',
    link: '/work/puri-1',
    description: 'An imaginative animation exploring character expression and dynamic flow.',
  },
  {
    id: 3,
    slug: 'halwa-2',
    title: 'Halwa 2',
    projectTitle: 'Halwa 2 Animation',
    client: 'Commercial',
    category: 'Commercial',
    tags: ['Visual Concept'],
    image: LogoPrimary,
    isBakingInProgress: true,
    year: '2026',
    link: '/work/halwa-2',
    description: 'A stylistic visual campaign crafted with hand-drawn frames and storytelling.',
  },
  {
    id: 4,
    slug: 'puri-2',
    title: 'Puri 2',
    projectTitle: 'Puri 2 Animation',
    client: 'Brand Story',
    category: '3D Art',
    tags: ['3D Story'],
    image: LogoPrimary,
    isBakingInProgress: true,
    year: '2026',
    link: '/work/puri-2',
    description: 'Creative visual exploration blending stylized form and cinematic pacing.',
  },
  {
    id: 5,
    slug: 'halwa-3',
    title: 'Halwa 3',
    projectTitle: 'Halwa 3 Animation',
    client: 'Studio Yum',
    category: 'Short Film',
    tags: ['Indie IP'],
    image: LogoPrimary,
    isBakingInProgress: true,
    year: '2025',
    link: '/work/halwa-3',
    description: 'Original character adventures in a quirky handcrafted world.',
  },
  {
    id: 6,
    slug: 'puri-3',
    title: 'Puri 3',
    projectTitle: 'Puri 3 Animation',
    client: 'Music & Sound',
    category: 'Sound & Visuals',
    tags: ['Original Music'],
    image: LogoPrimary,
    isBakingInProgress: true,
    year: '2026',
    link: '/work/puri-3',
    description: 'An audiovisual journey synchronized with playful sound design.',
  },
];

export const categories = ['All', 'Mobile', 'Development', 'Branding'];

export function getProjectBySlug(slug) {
  if (!slug) return null;
  const normalized = String(slug).trim().toLowerCase();
  return (
    projects.find(
      (p) =>
        p.slug.toLowerCase() === normalized ||
        String(p.id) === normalized ||
        p.title.toLowerCase().replace(/\s+/g, '-') === normalized
    ) || null
  );
}

