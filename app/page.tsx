import Background from '@/components/background';
import {Poltawski_Nowy, M_PLUS_1} from 'next/font/google';

export const poltawski = Poltawski_Nowy({
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
});

export const m_plus_1 = M_PLUS_1({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <div>
      <div className="ml-10 pt-[200px] z-20">
        <div className={poltawski.className}>
          <h1 className="text-9xl italic">Hi!</h1>
          <h1 className="text-9xl italic">I am Hana</h1>
        </div>

        <div className={`${m_plus_1.className} w-1/3 h-1/2 text-xl mt-10`}>
          <p>
            {' '}
            I am a confident, enthusiastic and curious computer scientist at the
            University of Nottingham who is dedicated to using my skills and
            knowledge to drive positive change in the technological field,
            particularly to inspire young women into the industry as I was once
            inspired myself. I actively seek out opportunities for personal and
            professional growth and I aim to finish my education with a 1st and
            remain an ambitious person.
          </p>
        </div>
      </div>

      <Background />
    </div>
  );
}

