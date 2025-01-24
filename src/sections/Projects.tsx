'use client';

import productivityAppImage from '../../public/images/projects/productivityapp.png';
import pgascriptImage from '../../public/images/projects/pgascript.png';
import magicmirrorImage from '../../public/images/projects/magicmirror.png';

import ArrowRightIcon from '../../public/icons/arrow-up-right.svg';

import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { Card } from '@/components/Card';
import { ScrollArea } from '@/components/ui/scroll-area';

const projects = [
  {
    name: 'FocusWave',
    description: `
      This is a full-stack productivity application built with React and Ruby on Rails,
      designed to help users manage their study sessions and track productivity. The app features
      a Pomodoro timer system, "Study With Me" sessions using YouTube's API, and comprehensive
      task management. Users can create accounts, track study sessions, manage tasks, and view
      their productivity analytics through Chart.js visualizations.
      
      The frontend utilizes modern React practices (Custom Hooks, React Router) and Tailwind CSS
      for styling, while the backend uses Rails with PostgreSQL for data persistence. Key features
      include session tracking, task management, YouTube integration for virtual study sessions,
      and detailed analytics dashboards that visualize productivity patterns. The app supports
      both light and dark modes, and uses session-based authentication for user management.
    `,
    image: productivityAppImage,
    link: 'https://focuswave.ai',
    repo: 'https://github.com/devdugz',
    tech: [
      'React.js',
      'TailwindCSS',
      'Postgres',
      'Ruby on Rails',
      'Chart.js',
      'YouTube iFrame API',
    ],
    isTopProject: true,
  },
  {
    name: 'Magic Mirror',
    description: `
    This Magic Mirror project is a smart home display application that transforms a Raspberry Pi, TV screen, and two-way mirror into an interactive information dashboard. Built primarily with Node.js and Electron for the application framework, it uses modern web technologies (HTML, CSS, JavaScript) to render modules that display real-time data like weather conditions (via OpenWeather API) and calendar events (through iCal integration). The application follows a modular architecture pattern, allowing for easy extension and customization of display widgets. Running on a Raspberry Pi (Linux-based system), it creates a sleek, minimalist interface that appears to float on the mirror's surface while providing daily information at a glance. The project demonstrates full-stack development capabilities, combining hardware integration with software development, API interactions, and frontend display logic.
    `,
    image: magicmirrorImage,
    link: 'test.com',
    repo: 'https://github.com/devdugz',
    tech: [
      'Node.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Electron',
      'Raspberry Pi',
      'OpenWeather API',
      'iCal',
    ],
    isTopProject: true,
  },
  {
    name: 'Booking Automation Script',
    description: `
    This Python script automates the golf bay booking process at PGA facilities using web automation and scheduling technologies. Built with Selenium WebDriver and ChromeDriver for browser automation, the script navigates through the PGA's booking system to secure practice bays during desired time slots. It implements a multi-bay fallback system, attempting bookings first in a primary bay (Bay 5) before trying two backup options (Bay 7 and Any Bay). The application runs on a scheduler using APScheduler, checking for available slots every 15 minutes across multiple time preferences (4:30 PM to 6:00 PM). Environment variables are managed through python-dotenv for secure credential handling, while comprehensive logging is implemented using Python's built-in logging module. The tech stack combines Python 3.x with Selenium for web automation, ChromeDriver for browser control, APScheduler for task scheduling, and environment configuration management, all running on macOS with a command-line interface.
      `,
    image: pgascriptImage,
    link: 'test.com',
    repo: 'https://github.com/devdugz',
    tech: [
      'Python',
      'Selenium WebDriver',
      'ChromeDriver',
      'APScheduler',
      'python-dotenv',
      'Git',
    ],
    isTopProject: true,
  },
];

export function ProjectsSection() {
  const tabs = [
    {
      title: 'Top Projects',
      value: 'top-projects',
      content: (
        <ScrollArea className='w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900'>
          <p className='text-center text-2xl font-cursive  mt-6'>
            Top Projects
          </p>
          <ProjectList chosenStack='top-projects' />
        </ScrollArea>
      ),
    },
    {
      title: 'All Projects',
      value: 'all-projects',
      content: (
        <ScrollArea className='w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900'>
          <p className='text-center text-2xl font-cursive  mt-6'>
            All Projects
          </p>
          <ProjectList chosenStack='all-projects' />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=' h-full my-40'>
      <div className='container mb-12'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
            Real-world Results
          </p>
        </div>
        <h1 className='font-cursive text-3xl md:text-5xl text-center mt-6'>
          Featured Projects
        </h1>
        <p className='text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto'>
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        className='h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 '
        id='projects'
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === 'top-projects') return project.isTopProject;
    return true;
  });

  return (
    <div>
      <div className='flex flex-col gap-20 mt-0 md:mt-10'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={index}
              className=' px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky'
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div>
                  <h3 className='font-serif text-2xl mt-2 md:text-4xl'>
                    {project.name}
                  </h3>
                  <hr className='border-white/5 border-t-2 mt-4' />
                  <p className='text-white/60 mt-4 text-sm md:text-base '>
                    {project.description}
                  </p>
                  <ul className='text-white/50 mt-4 flex flex-wrap gap-4 flex-row'>
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className='bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-row gap-4 items-center justify-start my-8'>
                    <Link
                      href={project.link}
                      className='w-2/3 md:w-2/5'
                      target='_blank'
                    >
                      <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300'>
                        <span>View Here</span>
                        <ArrowRightIcon className='size-4 ' />
                      </button>
                    </Link>

                    <Link href={project.repo} target='_blank'>
                      <button className='bg-black p-2 rounded-full cursor-pointer'>
                        <IconBrandGithub className='size-8' />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg'
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
