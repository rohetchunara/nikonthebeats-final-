import { useRef } from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SonicMoodMatcher from '../components/SonicMoodMatcher';
import AudioShowcase from '../components/AudioShowcase';

const HomePage = () => {
  const reelRef = useRef<HTMLElement>(null);

  const scrollToReel = () => {
    reelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onListenReel={scrollToReel} />
      <Marquee />
      <SonicMoodMatcher />
      <AudioShowcase sectionRef={reelRef} />
    </>
  );
};

export default HomePage;
