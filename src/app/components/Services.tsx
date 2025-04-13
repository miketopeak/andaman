"use client"

import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const items = [
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-1.png',
  },
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-2.png',
  },
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-3.png',
  },
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-4.png',
  },
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-3.png',
  },
  {
    title: 'Transport',
    description: 'On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure',
    image: '/assets/images/img-2.png',
  },
];

const Services = () => {
  return (
    <Section bgColor="bg-dark-800">
      <div>
        <Text variant='heading'>Services</Text>
        <Text variant='paragraph' className='max-w-lg pt-4'>On our website you can order transport, buy a ferry ticket, book a hotel and buy yourself an exciting adventure</Text>

        <div className='pt-10'>
          <div className='hidden lg:block'>
            <BentoGrid>
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  index={i}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  className={i === 0 || i === 5 ? "lg:col-span-2" : ""}
                  isDefaultOpen={i === 0}
                />
              ))}
            </BentoGrid>
          </div>

          <div className='lg:hidden'>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={10}
              className="pb-10"
            >
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                  <BentoGridItem className='h-[20rem]' {...item} index={i} isDefaultOpen={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Services;