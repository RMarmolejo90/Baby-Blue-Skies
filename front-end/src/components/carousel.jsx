// import Swiper core and required modules
import { Navigation, A11y, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImages from '../assets/sliderObjects.js';
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
      modules={[Navigation, A11y, EffectFlip]}
      enabled='true'
      effect='flip'
      loop='true'
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {sliderImages.map( (sliderImages, index) => (
        <SwiperSlide key={index} className='slide'>
          <div className='slide-wrapper '>
            <div className="swiper-lazy-preloader"></div>
            <img className='slide-image' loading='lazy' src={sliderImages.image} alt={sliderImages.location} />
            <div>
              <h2>{sliderImages.location}</h2>
            </div>
          </div>
        </SwiperSlide>
      ) )}
    </Swiper>
  );
};