'use client';
import {poltawski} from '@/app/fonts';
import {RenderDot} from '@/components/carousel-components';
import ExperienceBubble from '@/components/experience-bubble';
import {useIsVisible} from '@/custom-hooks/use-if-visable';
import {useEffect, useRef, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const experiences = [
  {
    name: 'SafelyHome',
    role: 'Volunteer software engineer',
    date: 'November 2024 - Present',
    desc:
      'I volunteer 3-4 hours per week with SafelyHome, a non-profit mobile\n' +
      'application focused on student and public safety during nights out. \n' +
      'This experience has allowed me to apply my degree in a real-world setting\n' +
      'gaining experience in agile development while leveraging Git for remote \n' +
      'collaboration. Through my time at Safely home, I have refined my UI/UX\n' +
      'design skills using React Native (which powers this website!) and \n' +
      'strengthened my communication skills through active collaboration on\n' +
      'feature deployments.',
  },
  {
    name: 'WCS',
    role: 'EDI Officer',
    date: 'November 2023 - Present',
    desc:
      'Co-founded the Women in Computer Science (WCS) Society at the University\n' +
      'of Nottingham with other students to create a safe space where women and non- \n' +
      'binary students had the chance to be themselves. By collaborating with the team \n' +
      'and university staff we have hosted many recreational events for students as well \n' +
      'as outreach aimed at encouraging young women into technology. Notably, I led a workshop \n' +
      'for 40 year 8 and 9 students for an Ada Lovelace day celebrations teaching the fundamentals \n' +
      'of AI and reinforcement learning. \n',
  },

  {
    name: 'UoN',
    role: 'Computer Science Mentor',
    date: 'September 2024 - Present',
    desc:
      'Throughout my second year at Nottingham, I provided academic and pastoral \n' +
      'support to 30+ 1st year students to support their transition into university \n' +
      'life. I answered any questions they had regarding the course at Nottingham and \n' +
      'offered studying tips to promote a healthy work life balance. I also lead a workshop \n' +
      'on effective note-taking techiques for 70 new students, sponsered by Notion, developing\n' +
      'my communication and public speaking skills.',
  },

  {
    name: 'IEUK Experience 2024',
    role: 'Program participant',
    date: 'June 2024 - September 2024',
    desc:
      'Participated in Bright Networks online summer internship program where I \n' +
      'completed a hands-on software engineering work sample and networked with \n' +
      'industry leaders from  PwC, CrowdStrike\n' +
      'and Lloyds Banking Group. Due to my high-levels of engagement with the program,\n' +
      'I was selected as 1 of 50 students from a pool of 10,000+ applicatants to receive an invitation to an \n' +
      'exclusive in-person networking event with BT Group, where I met other like-minded students \n' +
      'and industry professionals that have helped guide my career growth.\n',
  },

  {
    name: 'Tutoring',
    role: 'GCSE and A-Level',
    date: 'September 2023 - September 2024',
    desc:
      'I provided one-on-one tutoring to four GCSE students in subjects \n' +
      'including mathematics, physics and computer science, building a rapport\n' +
      'with each student and helped enhance students understanding of the subjects. \n' +
      'Through interactive online sessions and creating personalised study plans,\n' +
      'my students improved by an average of 1 to 2 grades by a combination of my \n' +
      'effective teaching, communication and their hard work. \n',
  },

  {
    name: 'Kitronik',
    role: 'Work Experience',
    date: 'April 2022',
    desc:
      'During my time in sixth form, I completed work experience with Kitronik\n' +
      ', a hardware company in Nottingham, where I wrote a blog post teaching \n' +
      'aspiring programmers how to code a simple reaction game using a ZIP64 \n' +
      'and OOP programming practices. I communicated techical concepts to a non-\n' +
      'technical audience, utilising thoroughness and attention to detail to \n' +
      'ensure clarity and accessibility for readers of varying skill levels.  \n',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible({ref: ref});

  const [loaded, setLoaded] = useState(false);

  const bubbleItems = experiences.map((x) => (
    <ExperienceBubble
      key={'key' + x.name}
      name={x.name}
      role={x.role}
      date={x.date}
      desc={x.desc}
    />
  ));

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="mt-20 mx-20" id="experience">
      <div
        ref={ref}
        className={`transition-opacity ease-in duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className={`${poltawski.className} text-8xl ml-4`}>Experience</h1>
        <div className="flex justify-center mt-5">
          {loaded ? (
            <AliceCarousel
              activeIndex={1}
              mouseTracking
              infinite={true}
              disableButtonsControls
              autoPlay
              autoPlayInterval={3000}
              animationType="slide"
              animationDuration={1000}
              renderDotsItem={(props) => <RenderDot {...props} />}
              responsive={{
                0: {items: 1},
                900: {items: 2},
                1024: {items: 3},
              }}
              items={bubbleItems}
            />
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </div>
  );
}

