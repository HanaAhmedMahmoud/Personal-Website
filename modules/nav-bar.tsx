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
    <div className="fixed w-full top-0 right-0 py-6 z-30">
      <div className="absolute top-0 right-0 flex flex-row gap-0.5 sm:gap-10 py-0.5 px-0.5 sm:mx-10 bg-white rounded-xl">
        <button
          className={clsx(
            'sm:w-[80px] sm:h-[35px] rounded-xl',
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
            'sm:w-[80px] sm:h-[35px] rounded-xl',
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
            'sm:w-[100px] sm:h-[35px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'experience'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'experience'}
          )}
        >
          <Link
            to="experience"
            smooth={true}
            duration={800}
            offset={-150}
            className="cursor-pointer"
            onClick={() => setClicked('experience')}
          >
            experiences
          </Link>
        </button>

        <button
          className={clsx(
            'sm:w-[80px] sm:h-[35px] rounded-xl',
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
            'sm:w-[80px] sm:h-[35px] rounded-xl',
            {'bg-[#E2BDF0]': userClicked == 'contact'},
            {'bg-white hover:bg-[#F6EBFA]': userClicked != 'contact'}
          )}
          onClick={() =>
            window.history.replaceState(
              null,
              '',
              window.location.pathname + '?contactClicked=true'
            )
          }
        >
          contact
        </button>
      </div>
    </div>
  );
}

