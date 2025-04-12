import Image from "next/image";
import Link from "next/link";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { Button } from "../ui/button";

const Hero = () => {

  const temperature = 30;

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
          <Link href="/" className="text-white ~text-base/xl flex-center gap-2 md:bg-white/10 md:border md:border-white/40 md:px-6 py-4 rounded-lg md:backdrop-blur-md">
            Search for a flight
            <BiSolidPlaneAlt />
          </Link>
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
            <Button variant="white" className="w-full md:w-auto" isArrow>
              Create a tour
            </Button>

            <Button variant="white-outline" className="w-full md:w-auto" isArrow>
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