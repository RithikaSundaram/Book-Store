import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCard.css";

// import required modules
import { EffectCards } from "swiper/modules";

const Bannercard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.npr.org/assets/img/2021/08/13/711gd93ifkl_custom-4da4cd0caaee24686552a01b6a9a5fe365b0e08d-s800-c85.jpeg"
            alt="Book 1"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannercard;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

// // import "./BannerCard.css";

// // import required modules
// import { EffectCards } from "swiper/modules";

// const Bannercard = () => {
//   return (
//     <div>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Bannercard;
