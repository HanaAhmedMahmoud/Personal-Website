'use client';
import {poltawski} from '@/app/fonts';
import SafelyHomeBubble from '@/components/safely-home-bubble';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useRef} from 'react';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible({ref: ref});
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
          <SafelyHomeBubble />
          <SafelyHomeBubble />
          <SafelyHomeBubble />
        </div>
      </div>
    </div>
  );
}

