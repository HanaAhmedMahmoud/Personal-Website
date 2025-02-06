import {m_plus_1} from '@/app/fonts';

export default function SafelyHomeBubble() {
  return (
    <div
      className={`${m_plus_1.className} w-[25vw] h-[25vw] bg-white border border-2 border-[#43005E] rounded-xl p-5 m-5`}
    >
      <h1 className="text-4xl font-bold">Safely Home</h1>
      <h2 className="text-2xl mt-3">Role: Software Developer</h2>
      <h3 className="font-light italic mt-2">November 2024 - Present</h3>
      <hr className="h-px my-4 bg-[#43005E] border-0"></hr>
      <p className="">
        I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile
        application focused on student and public safety during nights out. This
        experience has allowed me to apply my degree in a real-world setting,
        gaining experience in agile development while leveraging Git for remote
        collaboration. Through my time at Safely home, I have refined my UI/UX
        design skills using React Native (which powers this website!) and
        strengthened my communication skills through active collaboration on
        feature deployments.
      </p>
    </div>
  );
}

