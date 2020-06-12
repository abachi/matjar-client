import React from 'react';

const testimonials = [
  {
    quote: 'What impresses me is the commitment to quality. I hate having to buy new clothes because they break down over time. My shirts, with proper care of course, have lasted for years.',
    name: '-Pepe da Silvia',
  },
  {
    quote: 'What impresses me is the commitment to quality. I hate having to buy new clothes because they break down over time. My shirts, with proper care of course, have lasted for years.',
    name: '-Pepe da Silvia',
  },
  {
    quote: 'What impresses me is the commitment to quality. I hate having to buy new clothes because they break down over time. My shirts, with proper care of course, have lasted for years.',
    name: '-Pepe da Silvia',
  }
]

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