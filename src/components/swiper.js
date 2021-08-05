import React, { useEffect } from 'react'

const Swiper = () => {
  // useEffect(() => {
  //   Swiper('.mySwiper', {
  //     slidesPerView: 4,
  //     centeredSlides: true,
  //     spaceBetween: 30,
  //     grabCursor: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true
  //     }
  //   })
  // })

  return (
    <div className='swiper-container mySwiper'>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'>Slide 1</div>
        <div className='swiper-slide'>Slide 2</div>
        <div className='swiper-slide'>Slide 3</div>
        <div className='swiper-slide'>Slide 4</div>
        <div className='swiper-slide'>Slide 5</div>
        <div className='swiper-slide'>Slide 6</div>
        <div className='swiper-slide'>Slide 7</div>
        <div className='swiper-slide'>Slide 8</div>
        <div className='swiper-slide'>Slide 9</div>
      </div>
      <div className='swiper-pagination'></div>
    </div>
  )
}

export default Swiper
