"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
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
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  image?: string;
  isDefaultOpen?: boolean;
  index: number;
}) => {

  return (
    <motion.div
      // initial={{ opacity: width > 1024 ? 0 : 1, y: width > 1024 ? 100 : 0 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.5 }}
      // transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative group/bento row-span-1 flex flex-col justify-between rounded-lg transition duration-200 overflow-hidden",
        className,
      )}
    >
      <Image src={image || ""} alt={title} width={500} height={500} className="w-full h-60 lg:h-full object-cover rounded-lg" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDefaultOpen ? 1 : 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:absolute inset-0 pt-4 p-0 lg:p-8 lg:size-full flex flex-col gap-4 pb-4 lg:pb-0 justify-between lg:bg-dark/80 transition duration-200"
      >
        <h2 className="text-2xl text-white">
          {title}
        </h2>
        <div className="flex-between gap-4 text-[#CECECE]">
          <p className="max-w-md text-sm">{description}</p>

          <Button variant="white" className="flex size-10 min-w-10 flex-center text-dark hover:rotate-45 transition-transform duration-300">
            <GoArrowUpRight strokeWidth={1} size={20} className="-ml-1" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
