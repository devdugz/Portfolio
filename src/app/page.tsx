import { AboutSection } from '@/sections/About';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { TapeSection } from '@/sections/Tape';
import { Footer } from '@/sections/Footer';
import { ContactSection } from '@/sections/Contact';
import WorkJournal from '@/sections/WorkJournal';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <SpeedInsights />
      <Header />
      <main className='px-4 md:px-6 lg:px-8'>
        <HeroSection />
        <AboutSection />
        <Experience />
        <TapeSection />
        <ProjectsSection />
        <WorkJournal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
