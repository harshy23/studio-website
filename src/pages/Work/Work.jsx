import WorkHero from './sections/WorkHero';
import ProjectsGrid from './sections/ProjectsGrid';

export default function Work() {
  return (
    <main className="w-full relative min-h-screen bg-work">
      <WorkHero />
      <ProjectsGrid />
    </main>
  );
}
