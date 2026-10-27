import project1 from '../logos/application_logo/slide show 1.png';
import project2 from '../logos/application_logo/slide show 2.png';
import project3 from '../logos/application_logo/slide show 3.png';
import project4 from '../logos/application_logo/slide show 4.png';
import project5 from '../logos/application_logo/slide show 5.png';
import { bgmi, bgmiCharacterSheet } from '../logos';
import { LogoPrimary } from '../logos';
import { fatherDayAssets } from '../logos/work/project_father_day';
import { pubgAssets } from '../logos/work/Project_pubg';
import { Heading } from 'lucide-react';

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
    // year: '2026',
    link: '/work/groww-fathers-day',
    vimeoVideo: 'https://player.vimeo.com/video/1231625373?h=ee52492de9',
    bannerImage: fatherDayAssets.banner,
    description:
      'A heartwarming animated short film ad where a young boy narrates a speech during his school assembly, describing his father as his best buddy. As he shares cherished memories of love, laughter, guidance, and everyday adventures, vibrant animated visuals bring each moment to life, celebrating the beautiful bond between a father and child.',
    creditsTitle: 'Credits',
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
    slug: 'a-streamers-world',
    title: "A Streamer's World",
    projectTitle: "A Streamer's World",
    client: 'Client - Febreyze',
    category: '2D Animation',
    tags: ['2D Animation', 'Intro & Outro'],
    image: pubgAssets.thumbnail,
    bannerImage: pubgAssets.banner,
    isBakingInProgress: false,
    link: '/work/a-streamers-world',
    vimeoVideo: "https://player.vimeo.com/video/1231626885?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description:
      'An animated intro and outro created for content creator Febreyze, to showcase her personality through her character. The video brings her favourite games, places, and food spots to life, capturing the little things that make her unique.',
    creditsTitle: 'Credits',
    credits: [
      { role: 'Director', names: ['Vineet Manoj Karnani', 'Sudhanshu Kanwar'] },
      { role: 'Art Director', names: ['Vineet Manoj Karnani'] },
      {
        role: 'Animators',
        names: ['Vineet Manoj Karnani', 'Sudhanshu Kanwar', 'Kriti Bhavaraju'],
      },
      { role: 'Backgrounds', names: ['Vineet Manoj Karnani'] },
      { role: 'FX Animation', names: ['Sudhanshu Kanwar'] },
      { role: 'Sound Design', names: ['Sudhanshu Kanwar'] },
      { role: 'Editing & Compositing', names: ['Sudhanshu Kanwar'] },
    ],
    behindTheScenes: [
      {
        id: 'storyboards',
        title: 'Storyboards',
        accentColor: '#FF5C75',
        type: 'storyboards',
        items: pubgAssets.storyboards,
      },
      {
        id: 'character-sheets',
        title: 'Character Sheets',
        accentColor: '#5A63DB',
        type: 'characterSheets',
        items: pubgAssets.characterSheets,
      },
      {
        id: 'backgrounds',
        title: 'Backgrounds',
        accentColor: '#FF5C75',
        type: 'backgrounds',
        items: pubgAssets.backgrounds,
      },
      {
        id: 'stills',
        title: 'Stills',
        accentColor: '#5A63DB',
        type: 'stills',
        layout: 'full',
        columns: 1,
        items: pubgAssets.stills,
      },
    ],
  },
  {
    id: 3,
    slug: 'unbreakable-bgmi-music-video',
    title: "Unbreakable:BGMI Music Video",
    projectTitle: "Unbreakable:" + "\n" + "BGMI Music Video",
    client: 'Client - BGMI',
    category: '2D Animation',
    tags: ['2D Animation', 'Intro & Outro'],
    image: bgmi,
    bannerImage: null,
    isBakingInProgress: false,
    link: '/work/unbreakable-bgmi-music-video',
    vimeoVideo: "https://player.vimeo.com/video/1239577615?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description:
      'In collaboration with Lan Lan Studios, we were part of the character animation team for the Unbreakable BGMI music video, contributing layout animation to establish character positioning, staging, and movement within each shot. It was a rewarding opportunity to collaborate with a talented team of artists and contribute to bringing the music video’s visual narrative to life.',
    creditsTitle: 'Project Crew',
    credits: [
      { role: 'Production Management', names: ['Preetham Gunalan'] },
      { role: 'Direction/Animation Direction', names: ['Sailesh Gopalan'] },
      { role: 'Colour Keys', names: ['Priya'] },
      {
        role: 'Character Animation',
        names: [
          'Vineet Karnani',
          'Sudhanshu Kanwar',
          'Harspreet Rehal',
          'Kshitij Singh',
          'Oorjit',
          'Aparna Hegde',
        ],
      },
      {
        role: 'Character Layouts',
        names: ['Sailesh Gopalan', 'Vaibhav Keswani'],
      },
      {
        role: 'Animation Clean-up & Colour',
        names: [
          'Aishwaryaa Chaudhari',
          'Haresh Rao',
          'Vishal Mani Tiwari',
          'Siddharth Modi',
        ],
      },
      {
        role: 'FX Animation',
        names: ['Sahil Yadav', 'Prasannag', 'Preetham Gunalan'],
      },
      { role: 'Background Art', names: ['Aditya Prabhu'] },
      { role: 'Background Layouts', names: ['Preetham Gunalan'] },
      { role: '3D', names: ['Devanshu Tak'] },
      { role: 'Compositing', names: ['Sailesh Gopalan'] },
    ],
    teamCreditsTitle: 'Team Biskoot',
    teamCredits: [
      {
        role: 'Character Layout Animation',
        names: ['Vineet Manoj Karnani', 'Sudhanshu Kanwar'],
      },
    ],
    showBtsHeader: false,
    behindTheScenes: [
      {
        id: 'layout-animations',
        title: 'Layout Animations',
        accentColor: '#FF5C75',
        type: 'layoutAnimations',
        videoUrl: 'https://player.vimeo.com/video/1239577615?badge=0&autopause=0&player_id=0&app_id=58479',
        // image: bgmiCharacterSheet,
      },
    ],
  },
  {
    id: 4,
    slug: 'halwa-2',
    title: 'WIP',
    // projectTitle: 'Halwa 2 Animation',
    client: 'Commercial',
    // category: 'Commercial',
    tags: [''],
    image: LogoPrimary,
    isBakingInProgress: true,
    // year: '2026',
    link: '/work/halwa-2',
    description: 'A stylistic visual campaign crafted with hand-drawn frames and storytelling.',
  },
  {
    id: 5,
    slug: 'halwa-5',
    title: 'WIP',
    // projectTitle: 'Halwa 2 Animation',
    client: 'Commercial',
    // category: 'Commercial',
    tags: [''],
    image: LogoPrimary,
    isBakingInProgress: true,
    // year: '2026',
    link: '/work/halwa-5',
    description: 'A stylistic visual campaign crafted with hand-drawn frames and storytelling.',
  },
  {
    id: 6,
    slug: 'halwa-6',
    title: 'WIP',
    // projectTitle: 'Halwa 2 Animation',
    client: 'Commercial',
    // category: 'Commercial',
    tags: [''],
    image: LogoPrimary,
    isBakingInProgress: true,
    // year: '2026',
    link: '/work/halwa-2',
    description: 'A stylistic visual campaign crafted with hand-drawn frames and storytelling.',
  }



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

