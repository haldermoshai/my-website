// Carousel.jsx

import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../styles/styles.css';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="/frames/image1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image9.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/frames/image1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frames/image9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;