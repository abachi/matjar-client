import React from 'react';
import testimonials from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="section-title">Testimonials</h1>
      <div className="container">
        <div className="testimonials__items">
          {testimonials.map((item, i) => {
            return (
              <div className="testimonials__item" key={i}>
                <p className="quote">{item.quote}</p>
                <p className="name">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;