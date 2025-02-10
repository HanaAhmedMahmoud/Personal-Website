import {m_plus_1} from '@/app/fonts';

type param = {
  name: string;
  role: string;
  date: string;
  desc: string;
};

export default function ExperienceBubble({name, role, date, desc}: param) {
  return (
    <div
      className={`${m_plus_1.className} w-[25vw] h-[26vw] bg-white border border-2 border-[#43005E] rounded-xl p-5 m-5`}
    >
      <h1 className="text-4xl font-bold">{name}</h1>
      <h2 className="text-2xl mt-3">Role: {role}</h2>
      <h3 className="font-light italic mt-2">{date}</h3>
      <hr className="h-px my-4 bg-[#43005E] border-0"></hr>
      <p className="break-words">{desc}</p>
    </div>
  );
}

