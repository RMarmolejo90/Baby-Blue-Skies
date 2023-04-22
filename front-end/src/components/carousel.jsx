// import Swiper core and required modules
import { Navigation, EffectCube, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Fade } from 'react-awesome-reveal';
import {Sliders} from './sliderObjects';

//content

export default () => {


  return (
    <div className='py-20 bg-primary-light'>
      <Fade duration={1000}>
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
          className="lg:max-w-xl shadow-2xl contrast-125"
        >
          {Sliders.map( (Sliders, index) => (
            <SwiperSlide key={index} className='slide'  >
              <div className='slide-wrapper'>
              <img className='swiper-image rounded-lg lg:min-h-max' loading="lazy" src={Sliders.image} alt={Sliders.location} />
                <div className="swiper-lazy-preloader"></div>
                <div className=' relative mb-32 text-white-shade text-2xl'>
                  <h2 >{Sliders.location}</h2>
                </div> 
              </div>
            </SwiperSlide>
          ) )}
        </Swiper>
      </Fade>
    </div>
  );
};