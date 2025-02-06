'use client';
import {RefObject, useEffect, useState} from 'react';

type param = {
  ref: RefObject<HTMLElement | null>;
};

//function which takes in an element to observe
//if the user scrolls past, then activate animation
//else dont do anything
export function useIsVisible({ref}: param) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    //add a new observer using Intersection Obeserver API
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    //start observing
    observer.observe(ref.current);

    //once observer has been removed from UI, disconnect it
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  //return if the html element is visable
  return isIntersecting;
}

