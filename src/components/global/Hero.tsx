"use client"

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { Button } from "../ui/button";

const Hero = () => {
  const temperature = 30;
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <header className="relative bg-hero bg-cover bg-center bg-no-repeat w-full xl:h-screen pb-10">
      <div className="container ~pt-32/40">
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

        <div className="flex-between pt-16">
          <div className="w-full grid grid-cols-2 md:flex ~gap-3/6">
            <Button variant="white" className="w-full md:w-auto" hasArrow>
              Create a tour
            </Button>

            <Button variant="white-outline" className="w-full md:w-auto" hasArrow>
              Select tour
            </Button>
          </div>
          <div className="xl:flex hidden flex-col gap-1.5">
            <Link href="/cart" className="flex-center ~text-lg/xl text-secondary bg-dark-700 rounded-full p-1 ~size-6/8 hover:bg-secondary hover:text-dark transition-all duration-300">
              <TbPhone />
            </Link>
            <Link href="/cart" className="flex-center ~text-lg/xl text-secondary bg-dark-700 rounded-full p-1 ~size-6/8 hover:bg-secondary hover:text-dark transition-all duration-300">
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:block hidden absolute top-1/2 right-0 -translate-y-1/2">
        <Image src="/assets/images/hero-img.png" alt="Hero" width={806} height={646} className="w-[400px] xl:w-[506px] h-auto object-cover" />
      </div>
    </header>
  );
};

export default Hero;