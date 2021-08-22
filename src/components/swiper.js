import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import slide1 from '../assets/pexels1.jpg'
import slide2 from '../assets/pexels2.jpg'
import slide3 from '../assets/pexels3.jpg'
import slide4 from '../assets/pexels4.jpg'
import slide5 from '../assets/pexels5.jpg'
import slide6 from '../assets/pexels6.jpg'
import slide7 from '../assets/pexels7.jpg'

const Slide = () => {
  const storys = [
    { id: 0, urlImage: slide1 },
    { id: 1, urlImage: slide2 },
    { id: 2, urlImage: slide3 },
    { id: 3, urlImage: slide4 },
    { id: 4, urlImage: slide5 },
    { id: 5, urlImage: slide6 },
    { id: 6, urlImage: slide7 }
  ]

  return (
    <Carousel>
      <Swiper
        slidesPerView={3}
        spaceBetween={14}
        freeMode={true}
        className='mySwiper'
      >
        {storys.map(story => (
          <SwiperSlide key={story.id}>
            <img src={story.urlImage} alt={story.urlImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  )
}

export default Slide

const Carousel = styled.div`
  padding: 8px 0 4px 0;
  background: #fff;

  img {
    width: 100% !important;
    height: 160px;
    border-radius: 10px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;

      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
