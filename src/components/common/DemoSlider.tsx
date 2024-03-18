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

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
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
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default DemoSlider;
