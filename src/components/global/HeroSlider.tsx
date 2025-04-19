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
      <svg width="746" height="746" viewBox="0 0 746 746" className="absolute">
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

      <motion.div
        className="absolute text-white"
        style={{
          top: center - 120,
          left: center - radius + 8,
        }}
      >
        <FaShip size={24} />
      </motion.div>

      <motion.div
        className="absolute text-white"
        style={{
          top: center + 100,
          left: center - radius + 10,
          rotate: -110
        }}
      >
        <FaPlane size={24} />
      </motion.div>

      <motion.div
        className="relative w-[746px] h-[746px]"
        style={{ rotate: angle }}
      >
        {locations.map((location, index) => {
          const total = locations.length;
          const angleDeg = (index / total) * 360;
          const rad = (angleDeg * Math.PI) / 180;
          const x = center + radius * Math.cos(rad) - 10;
          const y = center + radius * Math.sin(rad) - 10;

          return (
            <div
              key={index}
              className="absolute"
              style={{ top: `${parseFloat(y.toFixed(2))}px`, left: `${parseFloat(x.toFixed(2))}px` }}
            >
              <div className="relative flex items-center">
                <motion.div
                  className={cn(
                    "size-3 bg-white rounded-full relative transition-all duration-300",
                    "after:content-[''] after:opacity-0 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-8 after:border after:border-[#67B6B9] after:bg-primary/30 after:rounded-full after:z-[-1] after:transition-all after:duration-300 after:delay-1000",
                    activeIndex === index && "after:opacity-100"
                  )}
                />
                <div className={cn(
                  "ml-2 text-white text-base transition-all duration-300",
                  activeIndex === index && "ml-6 text-3xl delay-1000"
                )}>
                  {location.name}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute top-1/2 left-10 -translate-y-1/2">
        <Image src="/assets/images/hero-map.png" alt="Havelock" width={227} height={431} className="w-[327px] h-auto" />
      </div>
    </div>
  );
}
