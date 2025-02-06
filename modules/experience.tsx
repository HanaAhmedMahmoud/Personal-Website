'use client';
import {poltawski} from '@/app/fonts';
import ExperienceBubble from '@/components/safely-home-bubble';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useEffect, useRef, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export declare type DotsItem = {
  isActive: boolean;
  activeIndex: number;
};

export const experiences = [
  {
    name: 'SafelyHome',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },
  {
    name: 'WCS',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },

  {
    name: 'Slay',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },

  {
    name: 'ate',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },

  {
    name: 'coool',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },

  {
    name: 'coool',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },

  {
    name: 'coool',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },
];

const RenderDot = (props: DotsItem) => {
  if (props.isActive) {
    return <div className={'mx-2 h-5 w-5 rounded-full bg-[#43005E]'} />;
  }
  return (
    <div
      className={
        'mx-2 h-5 w-5  bg-[#43005E] opacity-25 rounded-full hover:bg-sh-l-r'
      }
    />
  );
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible({ref: ref});

  const [loaded, setLoaded] = useState(false);

  const bubbleItems = experiences.map((x) => (
    <ExperienceBubble
      key={'key' + x.name}
      name={x.name}
      role={x.role}
      date={x.date}
      desc={x.desc}
    />
  ));

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="mt-[20vh] ml-20">
      <div
        ref={ref}
        className={`transition-opacity ease-in duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className={`${poltawski.className} text-9xl`}>Experience</h1>
        <div className="flex justify-center mt-5">
          {loaded ? (
            <AliceCarousel
              activeIndex={1}
              mouseTracking
              infinite={true}
              disableButtonsControls
              autoPlay
              autoPlayInterval={3000}
              animationType="slide"
              animationDuration={1000}
              renderDotsItem={(props) => <RenderDot {...props} />}
              responsive={{
                0: {items: 1},
                900: {items: 2},
                1024: {items: 3},
              }}
              items={bubbleItems}
            />
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </div>
  );
}

