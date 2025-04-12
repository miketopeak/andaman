"use client"

import Section from '@/components/common/section';
import { Text } from '@/components/common/text';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Blog card data
const blogData = [
  {
    id: 1,
    title: 'How to do Andaman on a Budget?',
    image: '/assets/images/img-1.png',
  },
  {
    id: 2,
    title: 'Top 10 Beaches in Andaman',
    image: '/assets/images/img-2.png',
  },
  {
    id: 3,
    title: 'Best Time to Visit Andaman',
    image: '/assets/images/img-3.png',
  },
  {
    id: 4,
    title: 'Andaman Travel Guide',
    image: '/assets/images/img-4.png',
  },
  {
    id: 5,
    title: 'Andaman Travel Guide',
    image: '/assets/images/img-3.png',
  },
  {
    id: 6,
    title: 'Andaman Travel Guide',
    image: '/assets/images/img-2.png',
  },
  {
    id: 7,
    title: 'Andaman Travel Guide',
    image: '/assets/images/img-1.png',
  },

];

// Blog card component
const BlogCard = ({ title, image }: {
  title: string;
  image: string;
}) => (
  <div className="group bg-dark-800 rounded-xl overflow-hidden h-full flex flex-col">
    <div className="relative h-[273px] w-full rounded-xl overflow-hidden">
      <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
    <div className="flex justify-between items-center gap-2 py-8 px-5">
      <h3 className="text-white text-xl mb-3">{title}</h3>
      <Button variant="white" className="size-10 flex-center text-dark hover:rotate-45 transition-transform duration-300">
        <GoArrowUpRight strokeWidth={1} size={20} className="-ml-1" />
      </Button>
    </div>
  </div>
);

const TravelBlog = () => {
  return (
    <Section bgColor="bg-dark" className="bg-travel-blog bg-[length:840px_774px] bg-right-bottom bg-no-repeat">
      <div>
        <Text variant='heading'>
          Travel Blog
        </Text>

        <div className="pt-12">
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {blogData.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: blog.id * 0.1 }}
              >
                <BlogCard
                  title={blog.title}
                  image={blog.image}
                />
              </motion.div>
            ))}
          </div>

          <div className="block lg:hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={10}
              className="pb-10"
            >
              {blogData.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard
                    title={blog.title}
                    image={blog.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <Button className="w-full md:w-auto" hasArrow>
            Read all
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TravelBlog;