'use client';
import {m_plus_1, poltawski} from '@/app/fonts';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useRef} from 'react';

export default function AboutMe() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible({ref: ref1});

  return (
    <div className="mt-[20vh] flex justify-end mr-20" id="about-me">
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${
          isVisible1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1
          className={`${poltawski.className} text-8xl flex place-content-end`}
        >
          About me
        </h1>
        <p
          className={`${m_plus_1.className} w-[40vw] text-lg my-10 text-right`}
        >
          I am a confident, enthusiastic and curious second year computer
          science student at the University of Nottingham who is dedicated to
          using my skills and knowledge to drive positive change in the
          technological field, particularly to inspire young women into the
          industry as I was once inspired myself. I actively seek out
          opportunities for personal and professional growth and I aim to finish
          my degree with a 1st and remain an ambitious person.
        </p>
      </div>
    </div>
  );
}

