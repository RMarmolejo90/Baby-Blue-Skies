// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImages from '../assets/sliderObjects.js';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//content

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {sliderImages.map( (sliderImages, index) => (
        <SwiperSlide key={index} className='slide'>
          <div className='slide-wrapper'>
            <img className='slide-image' src={sliderImages.image} alt={sliderImages.location} />
            <div>
              <h2>{sliderImages.location}</h2>
            </div>
          </div>
        </SwiperSlide>
      ) )}
    </Swiper>
  );
};