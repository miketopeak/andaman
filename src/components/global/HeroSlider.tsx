import { cn } from '@/lib/utils';
import { animate, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaPlane, FaShip } from 'react-icons/fa';

const radius = 350;
const center = 373;

interface HeroSliderProps {
  locations: { name: string }[];
  activeIndex: number;
  setActiveIndex: (value: number | ((prev: number) => number)) => void;
}

export default function HeroSlider({ locations, activeIndex, setActiveIndex }: HeroSliderProps) {
  const angle = useMotionValue(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % locations.length);
      animate(angle, angle.get() - 60, { duration: 1, ease: 'easeInOut' });
    }, 10000);

    return () => clearInterval(interval);
  }, [angle]);

  return (
    <div className="flex items-center justify-center h-full">
      <svg width="746" height="746" viewBox="0 0 746 746" className="absolute ml-3 mt-3">
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="white"
          strokeDasharray="6 6"
          opacity="0.4"
          fill="none"
        />
      </svg>


      <div className="relative">

        <motion.div
          className="absolute text-white"
          style={{
            left: -radius + 10,
            top: -100,

          }}
        >
          <FaShip size={24} />
        </motion.div>
        <motion.div
          className="absolute text-white"
          style={{
            left: -radius + 10,
            top: 100,
            rotate: -110
          }}
        >
          <FaPlane size={24} />
        </motion.div>

        {locations.map((location, index) => {
          const total = locations.length;
          const angleDeg = (index / total) * 360;
          // const x = center + radius * Math.cos(rad) - 10;
          // const y = center + radius * Math.sin(rad) - 10;

          const currentAngle = angleDeg + angle.get() - 90;

          const transform = `
          rotate(${currentAngle}deg)
          translateY(-${radius}px)
          rotate(${-currentAngle}deg)
          `;

          return (
            <div
              key={index}
              className="absolute origin-bottom"
              style={{
                transform: transform,
                transition: 'transform 1s ease-in-out'
              } as React.CSSProperties}
            >
              <div className="relative flex items-center">
                <div
                  className={cn(
                    "size-3 bg-white rounded-full relative transition-all duration-300",
                    "after:content-[''] after:opacity-0 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-8 after:border after:border-[#67B6B9] after:bg-primary/30 after:rounded-full after:z-[-1] after:transition-all after:duration-300 after:delay-1000",
                    activeIndex === index && "after:opacity-100"
                  )}
                />
                <div className={cn(
                  "absolute right-6 text-white text-base transition-all duration-300",
                  activeIndex === index && "right-10 text-3xl delay-1000"
                )}>
                  {location.name}
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute w-[327px] top-1/2 -translate-y-1/2 -right-10">
          <Image src="/assets/images/hero-map.png" alt="Havelock" width={227} height={431} className="w-full h-auto" />
        </div>
      </div>

    </div>
  );
}
