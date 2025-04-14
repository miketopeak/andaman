"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type SwiperType from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import { Button } from '@/components/ui/button';
import useWindowSize from '@/lib/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { GoArrowUpRight } from 'react-icons/go';
import 'swiper/css';
import 'swiper/css/pagination';

// Sample tour data
const tourData = [
  {
    id: 1,
    title: 'Tour of the best beaches',
    days: 7,
    price: 2980,
    includes: ['Accommodation', 'Directions', 'Breakfast'],
    description: 'You will see the most amazing beaches of the islands, and you will be able to enjoy the sun and the sea.',
    rating: 4,
    image: '/assets/images/img-1.png',
  },
  {
    id: 2,
    title: 'Tour of the best beaches',
    days: 5,
    price: 2480,
    includes: ['Accommodation', 'Directions', 'Breakfast'],
    description: 'You will see the most amazing beaches of the islands',
    rating: 5,
    image: '/assets/images/img-2.png',
  },
  {
    id: 3,
    title: 'Tour of the best beaches',
    days: 8,
    price: 3280,
    includes: ['Accommodation', 'Directions', 'Breakfast', 'Transport'],
    description: 'You will see the most amazing beaches of the islands',
    rating: 4,
    image: '/assets/images/img-3.png',
  },
  {
    id: 4,
    title: 'Tour of the best beaches',
    days: 8,
    price: 3280,
    includes: ['Accommodation', 'Directions', 'Breakfast', 'Transport'],
    description: 'You will see the most amazing beaches of the islands',
    rating: 4,
    image: '/assets/images/img-4.png',
  },
];

const PopularTours = () => {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const swiperRef = useRef<SwiperType | null>(null);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
    setHasBeenClicked(true);
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background image from active slide */}
      {tourData.map((tour, index) => (
        <motion.div
          key={`bg-${tour.id}`}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            scale: activeIndex === index ? 1 : 1.1
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1, ease: "easeOut" }
          }}
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-dark/50"></div>
        </motion.div>
      ))}

      <Section className="relative z-10">
        <div className="flex flex-col gap-8">
          <Text variant="heading">Popular Tours</Text>
          <div className="hidden md:flex justify-end items-center gap-2">
            <Button
              id="tour-slider-prev"
              variant="white-outline"
              size="icon"
              className=""
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              id="tour-slider-next"
              variant="white-outline"
              size="icon"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2.4,
                },
              }}
              centeredSlides={hasBeenClicked}
              navigation={{
                prevEl: '#tour-slider-prev',
                nextEl: '#tour-slider-next',
              }}
              pagination={width < 768 ? {
                clickable: true,
              } : false}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className={cn("w-full", width < 768 ? "pb-10" : "")}
            >
              {tourData.map((tour, index) => (
                <SwiperSlide key={tour.id} className="h-auto">
                  <div
                    className="rounded-lg overflow-hidden relative cursor-pointer"
                    onClick={() => handleSlideClick(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    {/* Full height/width image */}
                    <div className="relative h-[409px] w-full rounded-lg overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover hidden lg:block"
                      />

                      {/* Tour details overlay - visible on active or hovered slide */}
                      {(activeIndex === index || hoveredIndex === index) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-dark-700/60 lg:bg-dark-700/80 p-8 flex flex-col justify-between transition-opacity duration-300">
                          {/* Top section with days and price */}
                          <div className="flex justify-between">
                            <div className="text-white">
                              <h2 className="text-3xl">
                                {tour.days} days
                              </h2>
                              <h3 className="text-xl pt-6">
                                The tour includes
                              </h3>
                              <ul className="space-y-2 pt-3">
                                {tour.includes.map((item, i) => (
                                  <li key={i} className="text-gray">{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="text-white text-2xl">{tour.price} $</div>
                          </div>

                          {/* Bottom section with description and rating */}
                          <div className="text-white">
                            <p className="mb-2 max-w-[90%]">{tour.description}</p>

                            <div className="flex items-center">
                              {Array(5).fill(0).map((_, i) => (
                                <span key={i} className={cn("text-2xl",
                                  i < tour.rating ? 'text-primary' : 'text-gray')}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Arrow button */}
                          <div className="absolute bottom-4 right-4">
                            <Button variant="white" className="size-10 flex-center text-dark hover:rotate-45 transition-transform duration-300">
                              <GoArrowUpRight strokeWidth={1} size={20} className="-ml-1" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Tour title below image */}
                    <div className="text-white text-lg py-2">{tour.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default PopularTours;