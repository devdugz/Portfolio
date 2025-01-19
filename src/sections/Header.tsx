import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className='md:hidden fixed top-4 right-4 z-50'>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15'
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed inset-0 z-40 md:hidden'
          >
            <div className='min-h-screen bg-slate-900/95 backdrop-blur-md px-4 py-16'>
              <nav className='flex flex-col items-center gap-8 text-lg'>
                <Link href='#home' onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href='#about' onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link
                  href='#experience'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link href='#projects' onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </Link>
                <Link
                  href='#workjournal'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work Journal
                </Link>
                <Link
                  href='#contact'
                  onClick={() => setMobileMenuOpen(false)}
                  className='px-6 py-2 bg-white text-gray-900 rounded-full'
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <div className='hidden md:flex justify-center items-center fixed top-3 w-full z-10'>
        <nav className='flex gap-0.5 p-0.5 border border-white/15 rounded-full backdrop-blur-md bg-white/10'>
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
          <Link
            href='#projects'
            className='nav-items px-2 py-1 md:px-4 md:py-2'
          >
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
    </>
  );
};
