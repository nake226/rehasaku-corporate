"use client";

import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
}

interface SliderProps {
  data: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-full mt-10 pb-20">
      <ul className="h-full w-full">
        <Swiper
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          slidesPerGroup={1}
          centeredSlides={true}
          spaceBetween={8}
          speed={1000}
          slidesPerView={1.25}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <div
                className="md:h-[334px] sm:h-[164px] w-screen left-0 top-0"
                style={{
                  background: `url(${image}) center center / cover scroll no-repeat`,
                  width: "100%",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};
