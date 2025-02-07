import {m_plus_1} from '@/app/fonts';
import Image from 'next/image';

export default function Links() {
  return (
    <div className={`${m_plus_1.className} flex flex-row gap-10 text-xl mt-5`}>
      <div className="flex flex-row">
        <a
          href="/assets/Hana-Ahmed-MahmoudCV.pdf"
          target="_blank"
          className="mt-4"
        >
          cv
        </a>
        <Image
          src="/assets/arrow.svg"
          width={60}
          height={60}
          alt="Arrow"
          className="mb-10"
        />
      </div>

      <div className="flex flex-row">
        <a
          href="https://www.linkedin.com/in/hana-ahmed-mahmoud-11b783214/"
          className="mt-4"
        >
          linkedin
        </a>
        <Image
          src="/assets/arrow.svg"
          width={60}
          height={60}
          alt="Arrow"
          className="mb-10"
        />
      </div>

      <div className="flex flex-row">
        <a href="mailto:hanaahmedmahmoud1@gmail.com" className="mt-4">
          email
        </a>
        <Image
          src="/assets/arrow.svg"
          width={60}
          height={60}
          alt="Arrow"
          className="mb-10"
        />
      </div>
    </div>
  );
}

