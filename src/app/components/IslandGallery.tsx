"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Button } from '@/components/ui/button';
import useWindowSize from '@/lib/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/pagination';

interface IslandGalleryProps {
  data: {
    src: string;
    title: string;
    caption: string;
  }[];
}

const IslandGallery = ({ data }: IslandGalleryProps) => {
  const { width } = useWindowSize()
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        navigation={{
          prevEl: '#island-gallery-prev',
          nextEl: '#island-gallery-next',
        }}
        pagination={width < 768 ? {
          clickable: true,
        } : false}
        className={cn("w-full", width < 768 ? "pb-10" : "")}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                width={1000}
                height={658}
                className="h-[312px] md:h-[658px] w-full rounded-lg object-cover"
              />

              <div className="lg:absolute lg:top-5 lg:right-5 lg:bg-dark text-white pt-5 lg:px-5 lg:pb-5 rounded-lg">

                <h2 className="text-2xl pb-2">{item.title}</h2>

                <div className="hidden lg:block relative h-[153px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={item.src}
                    alt="Island Image"
                    fill
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                <p className="text-sm text-gray pt-2">{item.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex justify-end items-center gap-2 pt-5">
        <div className="flex items-center pr-2">
          <span className="text-primary font-light">
            {(activeIndex + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-white font-light">
            /{data.length.toString().padStart(2, '0')}
          </span>
        </div>

        <Button
          id="island-gallery-prev"
          variant="white-outline"
          size="icon"
          className=""
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          id="island-gallery-next"
          variant="white-outline"
          size="icon"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default IslandGallery;