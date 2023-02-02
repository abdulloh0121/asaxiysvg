import "./home.scss"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

function Home(){

    
   
      return (
        <>
          <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper contaner"
          >
            <SwiperSlide className="mySwiper__img"><img src="" alt="" /></SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 2</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 3</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 4</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 5</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 6</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 7</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 8</SwiperSlide>
            <SwiperSlide className="mySwiper__img">Slide 9</SwiperSlide>
          </Swiper>
        </>
      );
    
}
export default Home