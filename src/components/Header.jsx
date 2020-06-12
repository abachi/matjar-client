import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeaderNavigation from './HeaderNavigation';
const slides = [
  {
    title: 'New Best Carvets With Different Colors',
    description: 'If you need to say Something about this product. You are very welcome to present your ideas.',
    image: '/images/home-slider-2.jpg',
  },
  {
    title: 'New Best Carvets With Different Colors',
    description: 'If you need to say Something about this product. You are very welcome to present your ideas.',
    image: '/images/home-slider-1.jpg',
  }
];
export const Header = () => {
  const [top, setTop] = useState(0);
  return (
    <>
      <HeaderNavigation offsetTop={top} />
      <Swiper
        loop
        pagination={{ clickable: true }}
      >
        {slides.map((slide, i) => {
          return (<SwiperSlide key={i}>
            <div className="swiper-slide-content">
              <img src={slide.image} alt="" />
              <div className="overlay"></div>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="action-wrapper">
                <button className="button button--primary">SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>);
        })}
      </Swiper>
    </>
  );
};

export default Header;