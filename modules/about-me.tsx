import {m_plus_1, poltawski} from '@/app/fonts';

export default function AboutMe() {
  return (
    <div className="mt-[20vh] flex justify-end mr-20">
      <div>
        <h1 className={`${poltawski.className} text-9xl pl-[200px]`}>
          About me
        </h1>
        <p
          className={`${m_plus_1.className} w-[40vw] text-xl my-10 text-right`}
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

