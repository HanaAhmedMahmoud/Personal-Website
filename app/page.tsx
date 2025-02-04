import Background from '@/modules/background';
import NavigationBar from '@/modules/nav-bar';
import AboutMe from '@/modules/about-me';
import Landing from '@/modules/landing';

export default function Home() {
  return (
    <div>
      <NavigationBar clicked="home" />
      <Landing />
      <AboutMe />
      <Background />
    </div>
  );
}

