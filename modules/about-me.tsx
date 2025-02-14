'use client';
import {m_plus_1, poltawski} from '@/app/fonts';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useRef} from 'react';
import Image from 'next/image';
import ReactCurvedText from 'react-curved-text';
import clsx from 'clsx';
import NavigationBar from './nav-bar';

export default function AboutMe() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible({ref: ref1});

  return (
    <div className="my-[20vh] mx-5 sm:mr-20" id="about-me">
      {isVisible1 && <NavigationBar partOfWebsite="about-me" />}
      <div
        ref={ref1}
        className={clsx(
          'transition-opacity ease-in duration-700',
          {'opacity-100': isVisible1},
          {'opacity-0': !isVisible1}
        )}
      >
        <div className="flex justify-around">
          <div className="relative overflow-avalible w-[500px] h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Image
                src="/assets/hana-photo.png"
                width={400}
                height={400}
                alt="Arrow"
                className="m-5 rounded-full aspect-square object-cover"
              />
            </div>

            <div
              className={`${poltawski.className} absolute inset-0 z-20 flex 
                    items-center justify-center text-3xl`}
            >
              <ReactCurvedText
                width={500}
                height={500}
                cx={240}
                cy={220}
                rx={220}
                ry={200}
                startOffset={50}
                reversed={true}
                text=" ⋆｡°✩ this is me! ✩°｡⋆"
              />
            </div>
          </div>

          <div>
            <h1
              className={`${poltawski.className} text-6xl sm:text-8xl flex place-content-end`}
            >
              About me
            </h1>
            <p
              className={`${m_plus_1.className} w-[350px] sm:w-[600px] sm:text-lg my-10 text-right`}
            >
              I am a confident, enthusiastic and curious second year computer
              science student at the University of Nottingham who is dedicated
              to using my skills and knowledge to drive positive change in the
              technological field, particularly to inspire young women into the
              industry as I was once inspired myself. I actively seek out
              opportunities for personal and professional growth and I aim to
              finish my degree with a 1st and remain an ambitious person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

