import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = ({ clients }) => {
  const total = clients.length;
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % total);
        setFade(true); 
      }, 300); 
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const getBoxPosition = () => {
    if (total <= 1) return '0%';
    return `${(index / (total - 1)) * 100}%`;
  };

  return (
    <div className='testimonials-container'>
      <div data-aos='zoom-in' data-aos-delay="100" data-aos-duration="800">
        <h1 className='testimonials-title'>Nuestros</h1>
        <h1 className='testimonials-subtitle'>Testimonios</h1>
      </div>

      <div className='testimonials-body-container'>
        <div className='testimonials-left-container'/>
        <div className='testimonials-right-container'>
          <div className={`testimonial-fade ${fade ? 'show' : ''}`}>
            <p>{clients[index].testimonial}</p>
            <h4>{clients[index].name}</h4>
          </div>

          <div className='testimonials-slider'>
            <div
              className='testimonials-slider-box'
              style={{ left: getBoxPosition() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
