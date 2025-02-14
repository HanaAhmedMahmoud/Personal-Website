'use client';
import {m_plus_1, poltawski} from '@/app/fonts';
import Links from '@/components/links';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useRef} from 'react';
import NavigationBar from './nav-bar';

export default function Landing() {
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible = useIsVisible({ref: ref1});

  return (
    <div className="ml-5 sm:ml-20 py-[20vh]" id="home">
      {isVisible && <NavigationBar partOfWebsite="home" />}
      <div className={poltawski.className}>
        <h1
          ref={ref1}
          className={`text-6xl sm:text-8xl italic transition-opacity duration-2000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Hi...
        </h1>
        <h1
          ref={ref1}
          className={`text-6xl sm:text-8xl italic mt-5 transition-opacity duration-2000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          I am Hana!
        </h1>
      </div>

      <div
        className={`${m_plus_1.className} sm:w-1/3 sm:h-1/2 sm:text-xl mt-10 `}
      >
        <p
          ref={ref1}
          className={`transition-opacity duration-2000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Second Year Computer Science Student at the University of Nottingham
        </p>
      </div>

      <div
        ref={ref1}
        className={`text-xl italic mt-5 transition-opacity duration-2000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Links />
      </div>
    </div>
  );
}

