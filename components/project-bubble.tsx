import {m_plus_1} from '@/app/fonts';
import Image from 'next/image';

type param = {
  name: string;
  language: string;
  skills: string;
  desc: string;
  link: string;
};

export default function ProjectBubble({
  name,
  language,
  skills,
  desc,
  link,
}: param) {
  return (
    <a href={link}>
      <div
        className={`${m_plus_1.className} w-[400px] h-[400px] bg-white border border-2 border-[#43005E] rounded-xl p-5 m-5`}
      >
        <div className="flex place-content-between">
          <h1 className="text-2xl font-bold">{name}</h1>
          <Image src="/assets/arrow.svg" width={60} height={60} alt="Arrow" />
        </div>

        <h2 className="text-lg mt-3">Langauge: {language}</h2>
        <h2 className="text-lg mt-3">Skills: {skills}</h2>
        <hr className="h-px my-4 bg-[#43005E] border-0"></hr>
        <p className="text-sm">{desc}</p>
      </div>
    </a>
  );
}

