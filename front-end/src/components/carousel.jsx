// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//content
import {Images} from '../assets/sliderObjects'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="../assets/carousel/Arusha-Region-Tanzania.jpg" alt="Tanzania" /></SwiperSlide>
      <SwiperSlide><img src="../assets/carousel/Athens-greece.jpg" alt="greece" /></SwiperSlide>
      <SwiperSlide><img src="../assets/carousel/Banten-Indonesia.jpg" alt="indonesia" /></SwiperSlide>
      <SwiperSlide><img src="../assets/carousel/Bayan-Ölgii-Mongolia.jpg" alt="mongolia" /></SwiperSlide>
      ...
    </Swiper>
  );
};