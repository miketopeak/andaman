"use client"

import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import QuoteIcon from '@/components/svg/QuoteIcon';
import { Button } from '@/components/ui/button';
import useWindowSize from '@/lib/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Sample review data
const reviewsData = [
  {
    name: "Jonas Kakaroto",
    date: "07.01.2024",
    avatar: "/assets/images/avatar-1.png",
    content: "Traveling to the Adam Islands with Exotic Trex was a highlight of my life. Hostile nature, incredible fauna and development of white sandy beaches prevent hostilities from going incredibly deep. The service was excellent, every minute was worth the careful consideration. I recommend it to everyone who dreams of unique emotions and atmosphere"
  },
  {
    name: "Maria Sergievna",
    date: "07.01.2024",
    avatar: "/assets/images/avatar-2.png",
    content: "The journey to the Adam Islands was like a fairy tale, part of the company \"Mandrivniki Svitu\". Incredible landscapes, exotic flora and fauna, as well as friendly staff made this experience unique. There is little opportunity to enjoy the true natural beauty, spending an hour on clean beaches and exploring unique places. The hostilities from this tour have come to a head!"
  },
  {
    name: "Maria Sergievna",
    date: "07.01.2024",
    avatar: "/assets/images/avatar-2.png",
    content: "The journey to the Adam Islands was like a fairy tale, part of the company \"Mandrivniki Svitu\". Incredible landscapes, exotic flora and fauna, as well as friendly staff made this experience unique. There is little opportunity to enjoy the true natural beauty, spending an hour on clean beaches and exploring unique places. The hostilities from this tour have come to a head!"
  }
];

const Reviews = () => {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <Section className='bg-dark-700'>
      <div>
        <Text variant='heading'>
          Reviews of our customers
        </Text>

        <div className="hidden md:flex justify-end items-center gap-2">

          <div className="flex items-center pr-2">
            <span className="text-primary font-light">
              {(activeIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-white font-light">
              /{reviewsData.length.toString().padStart(2, '0')}
            </span>
          </div>

          <Button
            id="reviews-prev"
            variant="white-outline"
            size="icon"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            id="reviews-next"
            variant="white-outline"
            size="icon"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="relative w-full mt-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            centeredSlides={false}
            navigation={{
              prevEl: '#reviews-prev',
              nextEl: '#reviews-next',
            }}
            pagination={width < 768 ? {
              clickable: true,
            } : false}
            className={cn("w-full", width < 768 ? "pb-10" : "")}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index} className="h-auto flex justify-center md:justify-end py-10 md:py-0">
                <div className='relative w-[95%] md:w-10/12'>
                  <div className="absolute -left-3 -top-5 md:-left-[54px] xl:-left-[70px] md:top-1/2 md:-translate-y-1/2 rounded-full ">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={112}
                      height={112}
                      className="object-cover ~size-20/28 rounded-full"
                    />
                  </div>
                  <div className={cn("bg-dark w-full ~p-5/12 rounded-lg flex justify-start items-start gap-2.5", width < 768 ? "inverted-radius" : "inner-curve")}>
                    <span className="hidden md:block">
                      <QuoteIcon />
                    </span>
                    <div className='flex flex-col-reverse md:flex-col ~gap-8/14'>
                      <div>
                        <div className='block md:hidden pb-2'>
                          <Image src="/assets/icons/quote-icon.svg" alt="quote" width={31} height={13} />
                        </div>
                        <p className="text-white ~text-lg/xl">{review.content}</p>
                      </div>
                      <div className='pl-24 md:pl-0'>
                        <h3 className="text-white text-2xl pb-2">{review.name}</h3>
                        <p className="text-gray text-sm">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Reviews;