'use client';
import {poltawski} from '@/app/fonts';
import {RenderDot} from '@/components/carousel-components';
import ProjectBubble from '@/components/project-bubble';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useEffect, useRef, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import NavigationBar from './nav-bar';

export const projects = [
  {
    name: 'Personal Website',
    language: 'React, Next.js, TypeScript',
    skills: 'Web Development',
    desc:
      'This is the exact project you are currently viewing! I developed \n' +
      'this website to showcase my portfolio, projects and any other relevant information about \n' +
      'me. This sit is built using React and Next.js, a skill I have learnt from my time as a developer at \n ' +
      'Safely home.',
    link: 'https://github.com/HanaAhmedMahmoud/Personal-Website',
  },

  {
    name: 'Predicting Squid Game',
    language: 'Python',
    skills: 'Data Analysis, Machine Learning, Web Scraping',
    desc:
      'After watching the tv series "Squid Game" on Netflix, I decided that I wanted to create \n' +
      'a machine learning model to predict the survival chances of participants in the first game "Red light \n' +
      'Green Light". I gathered data from webscraping the Squid Game Wiki using Pythons "Beautiful Soup", cleaned the \n' +
      'data and trained a model to analyse various player attributes to determine survival probabilities.',
    link: 'https://github.com/HanaAhmedMahmoud/Predicting-Squid-Game-Survival',
  },

  {
    name: 'Your Yarn',
    language: 'Swift',
    skills: 'IOS development',
    desc:
      'This is an on-going project which is being completed alongside my university degree. \n' +
      'I am developing a virtual yarn organiser app to help users keep track of their yarn collections \n' +
      'The app allows users to catalog their yarns, including details like the colour, weight and quantity. \n' +
      'Built using Xcode and Swift, the app aims to be avaliable free of charge on the Apple App Store upon completion',
    link: 'https://github.com/HanaAhmedMahmoud/Your_Yarn',
  },

  {
    name: 'Rubiks Cube Solver',
    language: 'C#',
    skills: 'OOP and Algorithm Development',
    desc:
      'For my Computer Science A-Level NEA project, I developed a Rubiks Cube solver using C# \n' +
      'Visual Studios and Blazor, acheiving a grade of 73/75 (A*). The project involves implementing a 3D model of a Rubiks Cube and applying \n' +
      'object-oriented programming techniques to create an algorithm that solves the puzzle.',
    link: 'https://github.com/HanaAhmedMahmoud/Rubiks-Cube-Solver',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible({ref: ref});

  const [loaded, setLoaded] = useState(false);

  const bubbleItems = projects.map((x) => (
    <ProjectBubble
      key={'key' + x.name}
      name={x.name}
      skills={x.skills}
      language={x.language}
      desc={x.desc}
      link={x.link}
    />
  ));

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="my-[20vh] mx-10 sm:mx-20 pb-10" id="projects">
      {isVisible && <NavigationBar partOfWebsite="projects" />}
      <div
        ref={ref}
        className={`transition-opacity ease-in duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex place-content-end">
          <h1 className={`${poltawski.className} text-6xl sm:text-8xl`}>
            Projects
          </h1>
        </div>

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

