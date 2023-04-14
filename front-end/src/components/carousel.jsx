// import Swiper core and required modules
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImages from '../assets/sliderObjects.js';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';

//content

export default () => {


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, EffectFade, Autoplay]}
      enabled='true'
      autoplay={true}
      effect='fade'
      loop='true'
      lazyPreloadPrevNext={2}
      spaceBetween={50}
      slidesPerView={1}
      navigation   
      location={sliderImages.location}  
      onSwiper={(swiper) => setDisplayLocation(location)}
      onSlideChange={() => console.log('slide change')}
      className="md:max-w-4xl shadow-xl rounded-xl contrast-125 "
    >
      {sliderImages.map( (sliderImages, index) => (
        <SwiperSlide key={index} className='slide'  >
          <div className='slide-wrapper'>
            <img className='slide-image' loading="lazy" src={sliderImages.image} alt={sliderImages.location} />
            <div className="swiper-lazy-preloader"></div>
            <div className=' '>
              <h2 >{displayLocation}</h2>
            </div>
          </div>
        </SwiperSlide>
      ) )}
    </Swiper>
  );
};