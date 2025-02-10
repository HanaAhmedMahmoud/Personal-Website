import Background from '@/modules/background';
import NavigationBar from '@/modules/nav-bar';
import AboutMe from '@/modules/about-me';
import Landing from '@/modules/landing';
import Experience from '@/modules/experience';
import Projects from '@/modules/projects';
import Contact from '@/modules/contact';
import {Suspense} from 'react';

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Landing />
      <AboutMe />
      <Background />
      <Experience />
      <Projects />
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}

