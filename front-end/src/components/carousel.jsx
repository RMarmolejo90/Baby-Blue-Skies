// import Swiper core and required modules
import { Navigation, EffectCube, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImages from '../assets/sliderObjects.js';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

//content

export default () => {


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, EffectCube, Autoplay]}
      enabled='true'
      autoheight='true'
      autoplay={true}
      effect='cube'
      loop='true'
      lazyPreloadPrevNext={2}
      spaceBetween={50}
      slidesPerView={1}
      navigation   
      onSlideChange={() => console.log('slide change')}
      className="lg:max-w-2xl shadow-2xl contrast-125 "
    >
      {sliderImages.map( (sliderImages, index) => (
        <SwiperSlide key={index} className='slide'  >
          <div className='slide-wrapper'>
            <img className='swiper-image rounded-lg lg:min-h-max' loading="lazy" src={sliderImages.image} alt={sliderImages.location} />
            <div className="swiper-lazy-preloader"></div>
            {/* <div className=' relative  '>
              <h2 >{sliderImages.location}</h2>
            </div> */}
          </div>
        </SwiperSlide>
      ) )}
    </Swiper>
  );
};