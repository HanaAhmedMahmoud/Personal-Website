'use client';
import {useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import clsx from 'clsx';

export default function NavigationBar() {
  const [userClicked, setClicked] = useState('home');

  useEffect(() => {
    setClicked('home');
  }, []);

  return (
    <div className="fixed w-full top-0 right-0 py-7 text-xl bg-white z-30">
      <div className="absolute top-0 right-0 flex flex-row gap-10 mt-2 mx-10">
        <button
          className={clsx(
            'w-[100px] h-[40px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'home'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'home'}
          )}
        >
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer"
            onClick={() => setClicked('home')}
          >
            home
          </Link>
        </button>

        <button
          className={clsx(
            'w-[100px] h-[40px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'about-me'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'about-me'}
          )}
        >
          <Link
            to="about-me"
            smooth={true}
            duration={800}
            offset={-280}
            className="cursor-pointer"
            onClick={() => setClicked('about-me')}
          >
            about me
          </Link>
        </button>

        <button
          className={clsx(
            'w-[120px] h-[40px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'experience'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'experience'}
          )}
        >
          <Link
            to="experience"
            smooth={true}
            duration={800}
            className="cursor-pointer"
            onClick={() => setClicked('experience')}
          >
            experiences
          </Link>
        </button>

        <button
          className={clsx(
            'w-[100px] h-[40px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'projects'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'projects'}
          )}
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer"
            onClick={() => setClicked('projects')}
          >
            projects
          </Link>
        </button>

        <button
          className={clsx(
            'w-[100px] h-[40px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'contact'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'contact'}
          )}
        >
          <a href="/contact"> contact</a>
        </button>
      </div>
    </div>
  );
}

