import "./scss/_home.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

function Home() {
  return (
  
      <Swiper
        slidesPerView={8}
        autoplay={{
          delay: 2500,  
          disableOnInteraction:false
        }}
        spaceBetween={40}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper contaner"

      >
        <div className="boxss">
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        </div>
        <SwiperSlide>
          <a href="#">
            <img
            width={95}

              src="		https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
            width={95}

              src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="	https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="/"
            />
          </a>{" "}
        </SwiperSlide>
      </Swiper>
  );
}
export default Home;
