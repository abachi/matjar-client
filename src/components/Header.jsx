import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeaderNavigation from './HeaderNavigation';
import { slides } from '../constants';

export const Header = () => {

  return (
    <>
      <HeaderNavigation />
      <Swiper
        loop
        pagination={{ clickable: true }}
      >
        {slides.map((slide, i) => {
          return (<SwiperSlide key={i}>
            <div className="swiper-slide-content">
              <img src={slide.image} alt={slide.title} />
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