"use client";

import useWindowSize from "@/lib/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-3 md:auto-rows-[18rem] md:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  isDefaultOpen = false,
  index,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  image?: string;
  isDefaultOpen?: boolean;
  index: number;
}) => {

  const { width } = useWindowSize();

  return (
    <motion.div
      initial={{ opacity: width > 1024 ? 0 : 1, y: width > 1024 ? 100 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-lg transition duration-200 bg-cover bg-center",
        className,
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDefaultOpen ? 1 : 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute inset-0 p-8 size-full flex flex-col justify-between bg-dark/80 transition duration-200"
      >
        <h2 className="text-2xl text-white">
          {title}
        </h2>
        <div className="flex-between gap-4 text-[#CECECE]">
          <p className="max-w-md text-sm">{description}</p>

          <Button variant="white" className="size-10 min-w-10 flex-center text-dark hover:rotate-45 transition-transform duration-300">
            <GoArrowUpRight strokeWidth={1} size={20} className="-ml-1" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
