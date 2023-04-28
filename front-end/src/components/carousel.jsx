// import Swiper core and required modules
import { Navigation, EffectCube, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Fade } from 'react-awesome-reveal';
import sliders from '../assets/sliderObjects';

//content

export default () => {


  return (
    <div className='py-20 bg-white-shade'>
      <Fade duration={2000}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectCube, Autoplay]}
          enabled='true'
          autoplay={true}
          autoheight='true'
          effect='cube'
          loop='true'
          lazyPreloadPrevNext={2}
          spaceBetween={50}
          slidesPerView={1}
          navigation   
          onSlideChange={() => console.log('slide change')}
          className="lg:max-w-md"
        >
          {sliders.map( (sliders, index) => (
            <SwiperSlide key={index} className='slide'  >
              <div className='slide-wrapper'>
              <img className='swiper-image min-h-full min-w-full overflow-hidden' loading="lazy" src={sliders.image} alt={sliders.location} />
                <div className="swiper-lazy-preloader"></div>
                <div className='text-white-shade min-w-full lg:max-w-md font-bold p-4 text-2xl text-center bg-dark-shade'>
                  <h2 >{sliders.location}</h2>
                </div> 
              </div>
            </SwiperSlide>
          ) )}
        </Swiper>
      </Fade>
    </div>
  );
};