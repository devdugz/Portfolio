import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-2 md:top-3 w-full z-10'>
      <nav className='flex gap-0.5 md:gap-0.2 p-0.5 border border-white/15 rounded-full backdrop-blur-md bg-white/10 text-xs md:text-base'>
        <Link href='#home' className='nav-items px-2 py-1 md:px-4 md:py-2'>
          Home
        </Link>
        <Link href='#about' className='nav-items px-2 py-1 md:px-4 md:py-2'>
          About
        </Link>
        <Link
          href='#experience'
          className='nav-items px-2 py-1 md:px-4 md:py-2'
        >
          Experience
        </Link>
        <Link href='#projects' className='nav-items px-2 py-1 md:px-4 md:py-2'>
          Projects
        </Link>
        <Link
          href='#workjournal'
          className='nav-items px-2 py-1 md:px-4 md:py-2'
        >
          Work Journal
        </Link>
        <Link
          href='#contact'
          className='nav-items px-2 py-1 md:px-4 md:py-2 bg-white text-gray-900 hover:bg-white-70'
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
