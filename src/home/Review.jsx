import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react icons
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5x font-bold text-center md-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio laborum itaque atque quibusdam obcaecati harum beatae
                  hic odio omnis. Minima facilis ut ipsam delectus doloribus sit
                  sunt, cum expedita esse odit! Dolor pariatur at consectetur
                  sequi minus voluptatibus sapiente eveniet.
                </p>
                <h3 className="text-lg font-medium">John Doe</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio laborum itaque atque quibusdam obcaecati harum beatae
                  hic odio omnis. Minima facilis ut ipsam delectus doloribus sit
                  sunt, cum expedita esse odit! Dolor pariatur at consectetur
                  sequi minus voluptatibus sapiente eveniet.
                </p>
                <h3 className="text-lg font-medium">Lee Chan</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio laborum itaque atque quibusdam obcaecati harum beatae
                  hic odio omnis. Minima facilis ut ipsam delectus doloribus sit
                  sunt, cum expedita esse odit! Dolor pariatur at consectetur
                  sequi minus voluptatibus sapiente eveniet.
                </p>
                <h3 className="text-lg font-medium">Natasha</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio laborum itaque atque quibusdam obcaecati harum beatae
                  hic odio omnis. Minima facilis ut ipsam delectus doloribus sit
                  sunt, cum expedita esse odit! Dolor pariatur at consectetur
                  sequi minus voluptatibus sapiente eveniet.
                </p>
                <h3 className="text-lg font-medium">Neha Sharma</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
