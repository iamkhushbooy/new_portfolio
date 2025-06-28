'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: './#home' },
  { name: 'About', href: './#about' },
  { name: 'Projects', href: './#projects' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setLaptop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full h-[70px] flex items-center z-50  backdrop-blur-md bg-white/80">
      {/* Logo and Name */}
      <div className="w-[80%] flex items-center md:w-[75%]">
        <Link href="https://github.com/iamkhushbooy">
          <Image
            className="ml-3 md:ml-8"
            src="/icons/github.png"
            width={30}
            height={30}
            alt="github"
          />
        </Link>
        <h1 className="font-extrabold text-[22px] ml-3 bg-clip-text text-transparent 
        bg-gradient-to-r from-[rgb(59,144,197)] via-pink-500 to-[rgb(59,144,197)]">
          Khushboo
        </h1>
      </div>

      {/* Mobile Burger Icon */}
      {!laptop ? (
        <div className="w-[20%] flex justify-around">
          {isMenuOpen !== null && (
            <Image
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              src={isMenuOpen ? '/icons/close.png' : '/icons/menu.png'}
              alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              width={30}
              height={30}
              className="cursor-pointer"
            />
          )}
        </div>
      ) : (
        <div
          id="forburger"
          className="w-[20%] h-[70px] flex justify-around items-center font-semibold md:w-[25%] mr-10"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathName === item.href
                  ? 'text-[rgb(59,144,197)]'
                  : 'text-gray-500 hover:text-[rgb(59,144,197)] underline decoration-transparent hover:decoration-inherit hover:underline-offset-4'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Animated Mobile Menu + Blur Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background blur overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu from below the header */}
            <motion.div
              className="fixed top-[70px] left-0 right-0  shadow-md z-50 flex flex-col 
              items-center py-6 space-y-4 backdrop-blur-md bg-white/80"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium ${
                    pathName === item.href
                      ? 'text-[rgb(59,144,197)]'
                      : 'text-gray-600 hover:text-[rgb(59,144,197)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
