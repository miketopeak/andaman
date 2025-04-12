"use client";
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { MdSunny } from 'react-icons/md';
import { PiHandbag, PiUserLight } from 'react-icons/pi';
import { TbMail, TbMenu4, TbPhone } from 'react-icons/tb';

const navLinks = [
  { href: '/create-tour', label: 'Create a tour' },
  { href: '/select-tour', label: 'Select tour' },
  { href: '/services', label: 'Services' },
  { href: '/about-islands', label: 'About the Islands' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about-us', label: 'About us' },
  { href: '/contacts', label: 'Contacts' },
];

const socialLinks = [
  { href: '/telegram', icon: <FaTelegramPlane size={18} /> },
  { href: '/whatsapp', icon: <FaWhatsapp size={20} /> },
  { href: '/facebook', icon: <FaFacebookF size={18} /> },
  { href: '/instagram', icon: <IoLogoInstagram size={24} /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [temperature, setTemperature] = useState(23);
  const temperature = 23;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed w-full z-40">
      <div className={cn("w-full transition-all duration-300", {
        "bg-dark-900/60 backdrop-blur-lg": scrolled,
        "bg-transparent": !scrolled
      })}>
        <div className="container">
          {/* Main Navigation Bar */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/images/brand/brand-logo.png"
                alt="Andaman Planner"
                width={120}
                height={64}
                className="~h-12/16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="flex items-center ~gap-2/4">
              {/* Weather - Hidden on Mobile */}
              <div className="hidden md:flex items-center gap-2 text-white">
                <span className="text-secondary text-3xl">
                  <MdSunny />
                </span>
                <span className="~text-lg/2xl">{temperature}°</span>
              </div>

              {/* Search Flight - Tablet Only */}
              <div className="hidden md:block xl:hidden relative">
                <Link href="/search-flight" className="flex items-center text-white gap-2 ~px-8/24">
                  <span>Search Flight</span>
                  <BiSolidPlaneAlt />
                </Link>
              </div>

              {/* Phone Number - Hidden on Mobile */}
              <Link href="/contact" className="flex items-center text-white gap-2 2xl:pr-6 2xl:pl-10">
                <span className="flex-center ~text-lg/xl text-primary bg-white rounded-full p-1 ~size-6/8 hover:bg-primary hover:text-white transition-all duration-300">
                  <TbPhone strokeWidth={1} />
                </span>
                <span className="hidden md:block">+00 000 00 00</span>
              </Link>

              {/* Account and Cart Icons */}
              <Link href="/account" className="flex-center ~text-lg/xl text-primary bg-white rounded-full p-1 ~size-6/8 hover:bg-primary hover:text-white transition-all duration-300">
                <PiUserLight />
              </Link>
              <Link href="/cart" className="flex-center ~text-lg/xl text-primary bg-white rounded-full p-1 ~size-6/8 hover:bg-primary hover:text-white transition-all duration-300">
                <PiHandbag />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden flex-center ~text-lg/xl text-white border border-white rounded-full p-1 ~size-6/8 ml-5"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <TbMenu4 />
                )}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="xl:hidden bg-dark fixed inset-0 overflow-y-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-between px-4 pt-6 sticky top-0 bg-dark z-10">
                  <Image src="/assets/images/brand/brand-logo.png" alt="Andaman Planner" width={120} height={64} className="~h-12/16 w-auto object-contain" />

                  <button onClick={() => setIsMenuOpen(false)} className="flex-center ~text-lg/xl text-white border border-white rounded-full p-1 size-10">
                    <X className="h-6 w-6" />
                  </button>

                </div>
                <div className="px-4 py-6 space-y-3 flex flex-col">
                  {/* Navigation Links */}
                  <div className="space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center bg-dark-800 rounded-lg py-5 px-3"
                      >
                        <Link
                          href={link.href}
                          className="text-white"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Link href="tel:+000000000" className="flex justify-between flex-col items-start ~gap-14/20 text-white bg-dark-800 rounded-lg py-3 px-4">
                          <span className="flex-center text-lg text-primary bg-dark-700 rounded-full p-1 size-10">
                            <TbPhone />
                          </span>
                          <span>+00 000 00 00</span>
                        </Link>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Link href="mailto:gmail@gmail.com" className="flex justify-between flex-col items-start ~gap-14/20 text-white bg-dark-800 rounded-lg py-3 px-4">
                          <span className="flex-center text-lg text-primary bg-dark-700 rounded-full p-1 size-10">
                            <TbMail />
                          </span>
                          <span>gmail@gmail.com</span>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex-between gap-6 px-4 bg-dark-800 rounded-lg py-3">
                      {socialLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, scale: 0.4 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className="text-primary w-10 h-10 rounded-full bg-dark-700 flex-center"
                          >
                            <span className="sr-only">{link.icon}</span>
                            {link.icon}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;