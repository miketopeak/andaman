"use client"

import { motion } from "motion/react";
import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { Button } from "../ui/button";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const temperature = 30;
  const [isInputActive, setIsInputActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const locations = [
    {
      name: 'Havelock',
      image: '/assets/bg/havelock.png'
    },
    {
      name: 'Diglipur',
      image: '/assets/bg/diglipur.png'
    },
    {
      name: 'Long',
      image: '/assets/bg/long.png'
    },
    {
      name: 'Havelock',
      image: '/assets/bg/havelock.png'
    },
    {
      name: 'Diglipur',
      image: '/assets/bg/diglipur.png'
    },
    {
      name: 'Long',
      image: '/assets/bg/long.png'
    }
  ];

  return (
    <div className="relative w-full xl:h-screen pb-10 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 29, 32, 0.81) 0%, rgba(7, 146, 149, 0.00) 38.01%), url(/assets/bg/hero.png)`
      }}
    >
      {locations.map((location, index) => (
        <motion.div
          key={`bg-${index}`}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={false}
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            scale: activeIndex === index ? 1 : 1.1
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1, ease: "easeOut" }
          }}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 29, 32, 0.81) 0%, rgba(7, 146, 149, 0.00) 38.01%), url(${location.image})`
          }}
        />
      ))}

      <div className="container relative z-10 ~pt-32/40">
        <div className="flex md:hidden items-center gap-2 text-white">
          <span className="text-secondary text-3xl">
            <MdSunny />
          </span>
          <span className="~text-lg/2xl">{temperature}°</span>
        </div>

        <div className="flex md:hidden xl:flex items-center gap-4">
          <div className="w-60 relative md:bg-white/10 md:border md:border-white/40 rounded-lg md:backdrop-blur-md">
            <input
              className={`${isInputActive ? "md:px-8 placeholder:text-white/50" : "md:px-6 placeholder:text-white"} py-4 text-white ~text-base/xl bg-transparent outline-none transition-all duration-300`}
              placeholder="Search for a flight"
              onClick={() => setIsInputActive(true)}
              onBlur={() => setIsInputActive(false)}
            />
            <motion.div
              initial={{ opacity: 0, }}
              animate={{
                opacity: 1,
                y: "-50%",
                x: isInputActive ? "0.5rem" : "12rem",
                // right: isInputActive ? "auto" : "4",
                // left: isInputActive ? "4" : "auto"
              }}
              transition={{ duration: 0.5 }}
              className="absolute text-white top-1/2 text-xl"
            >
              <BiSolidPlaneAlt />
            </motion.div>
          </div>
        </div>

        <div className="space-y-12 ~mt-11/32">
          <h1 className="text-white ~text-5xl/8xl max-w-2xl">
            Your travel agent is you
          </h1>
          <p className="text-white-off-light ~text-base/xl max-w-xl font-light">
            Create your own unique Andaman Islands tour and discover the charm of this paradise on Earth!
          </p>
        </div>

        <div className="pt-4">
          <div className="hidden xl:flex gap-1.5">
            <Button variant="white-outline" size="icon">
              <TbPhone size={20} />
            </Button>
            <Button variant="white-outline" size="icon">
              <FaWhatsapp size={20} />
            </Button>
          </div>
          <div className="pt-16 w-full grid grid-cols-2 md:flex ~gap-3/6">
            <Button variant="white" className="w-full md:w-auto" hasArrow>
              Create a tour
            </Button>

            <Button variant="white-outline" className="w-full md:w-auto" hasArrow>
              Select tour
            </Button>
          </div>

        </div>
      </div>

      <div className="xl:block hidden absolute top-1/2 left-[100%] -translate-y-1/2">
        <HeroSlider locations={locations} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
};

export default Hero;