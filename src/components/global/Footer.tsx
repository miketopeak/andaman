"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { TbMail, TbPhone } from 'react-icons/tb';
import { Text } from '../common/text';

const primaryLinks = [
  { href: '/create-tour', label: 'Create a tour' },
  { href: '/select-tour', label: 'Select tour' },
  { href: '/services', label: 'Services' },
  { href: '/about-islands', label: 'About the Islands' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about-us', label: 'About us' },
  { href: '/contacts', label: 'Contacts' },
];

const secondaryLinks = [
  { href: '/terms', label: 'Terms and conditions' },
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/emergency', label: 'Emergency contacts' },
  { href: '/cancellation', label: 'Cancellation policy' },
];

const socialLinks = [
  { href: '/telegram', icon: <FaTelegramPlane size={18} /> },
  { href: '/whatsapp', icon: <FaWhatsapp size={20} /> },
  { href: '/facebook', icon: <FaFacebookF size={18} /> },
  { href: '/instagram', icon: <IoLogoInstagram size={24} /> },
];

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white ~pt-20/28 pb-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/brand/brand-logo.png"
                alt="Andaman Planner"
                width={150}
                height={74}
                className="w-auto object-contain"
              />
            </Link>
            <p className="text-gray text-sm leading-relaxed">
              Our company is a real leader in the field of tours to the Adam Islands. With us, you will get a unique travel experience in which every moment is filled with adventure and impressions. Trust us with your trip and we will ensure the highest standard of service and an unforgettable trip to this unique archipelago.
            </p>
          </div>

          {/* Middle Column - Contact */}
          <div className="hidden lg:flex justify-center">
            <div className="flex flex-col items-start">
              <h3 className="text-lg mb-6">
                <Link href="/contacts" className="text-primary">
                  Contacts
                </Link>
              </h3>
              <div className="space-y-4 mb-6">
                <Link href="tel:+00000000" className="flex items-center gap-3 text-white">
                  <Text variant="icon" className="size-10 text-primary">
                    <TbPhone size={20} />
                  </Text>
                  <span>+00 000 00 00</span>
                </Link>
                <Link href="mailto:gmail@gmail.com" className="flex items-center gap-3 text-white">
                  <Text variant="icon" className="size-10 text-primary">
                    <TbMail size={20} />
                  </Text>
                  <span>gmail@gmail.com</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <Text variant="icon" className="size-10" key={index}>
                    <Link href={link.href}>
                      {link.icon}
                    </Link>
                  </Text>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              {primaryLinks.slice(0, 8).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              {secondaryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="block lg:hidden space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Link href="tel:+000000000" className="flex justify-between flex-col items-start ~gap-14/20 text-white bg-dark-800 rounded-lg py-3 px-4">
                  <span className="flex-center text-lg text-primary bg-dark-700 rounded-full p-1 size-10">
                    <TbPhone />
                  </span>
                  <span>+00 000 00 00</span>
                </Link>
              </div>

              <div>
                <Link href="mailto:gmail@gmail.com" className="flex justify-between flex-col items-start ~gap-14/20 text-white bg-dark-800 rounded-lg py-3 px-4">
                  <span className="flex-center text-lg text-primary bg-dark-700 rounded-full p-1 size-10">
                    <TbMail />
                  </span>
                  <span>gmail@gmail.com</span>
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex-between gap-6 px-4 bg-dark-800 rounded-lg py-3">
              {socialLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="text-primary w-10 h-10 rounded-full bg-dark-700 flex-center"
                  >
                    <span className="sr-only">{link.icon}</span>
                    {link.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-600">
          <span className="text-gray-dark text-sm">Adaman Travel Planner &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer >
  );
};

export default Footer;