import React, { useEffect, useState } from 'react'
import './OffersPicker.css'
import comercialImage from '../../assets/Offers/proyectoComercial.jpg';
import residentialImage from '../../assets/Offers/proyectoResidencial.jpg';
import socialImage from '../../assets/Offers/proyectoSocial.jpg';

const OffersPicker = ({ offer, setOffer }) => {
  const [offerImage, setOfferImage] = useState(null);

  useEffect(() => {
    if (offer === 'Residencial') setOfferImage(residentialImage);
    else if (offer === 'Comercial') setOfferImage(comercialImage);
    else if (offer === 'Social') setOfferImage(socialImage);
  }, [offer]);

  const handleChangePicker = (typeOffer) => {
    setOffer(typeOffer);
  };

  return (
    <div
      key={offer}
      className='offers-picker-container'
      style={{ backgroundImage: `url(${offerImage})` }}
    >
      <div className='offers-blur-container'/>
      <div className='offers-picker-left-container' />
      <div className='offers-picker-right-container'>
        <ul className='offers-picker-list'>
          {/* Contenedor AOS */}
          <li
            data-aos='slide-right'
            data-aos-duration='850'
            className='offer-picker-item-aos'
            key={'comercial-offer'}
          >
            {/* Contenedor hover + background */}
            <div
              className='offer-picker-item'
              style={{ backgroundImage: `url(${comercialImage})` }}
              onClick={() => handleChangePicker('Comercial')}
            >

              <button className='open-item-button'>
                  <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                  </svg>
              </button>

              <div
                className='offers-blur-item'
                style={{
                  backgroundColor:
                    offer === 'Comercial'
                      ? 'rgba(0, 0, 0, 0)'
                      : 'rgba(255, 255, 255, 0.3)',
                }}
              />
              <div>
                <h4 className='offer-picker-title'>Proyectos</h4>
                <h4 className='offer-picker-subtitle'>Comerciales</h4>
              </div>
            </div>
          </li>

          {/* Residencial */}
          <li
            data-aos='slide-left'
            data-aos-duration='850'
            className='offer-picker-item-aos'
            key={'residential-offer'}
          >
            <div
              className='offer-picker-item'
              style={{ backgroundImage: `url(${residentialImage})` }}
              onClick={() => handleChangePicker('Residencial')}
            >
              <button className='open-item-button'>
                  <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                  </svg>
              </button>

              <div
                className='offers-blur-item'
                style={{
                  backgroundColor:
                    offer === 'Residencial'
                      ? 'rgba(0, 0, 0, 0)'
                      : 'rgba(255, 255, 255, 0.3)',
                }}
              />
              <div>
                <h4 className='offer-picker-title'>Proyectos</h4>
                <h4 className='offer-picker-subtitle'>Residenciales</h4>
              </div>
            </div>
          </li>

          {/* Social */}
          <li
            data-aos='slide-right'
            data-aos-duration='850'
            className='offer-picker-item-aos'
            key={'social-offer'}
          >
            <div
              className='offer-picker-item'
              style={{ backgroundImage: `url(${socialImage})` }}
              onClick={() => handleChangePicker('Social')}
            >
              <button className='open-item-button'>
                  <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                  </svg>
              </button>
              
              <div
                className='offers-blur-item'
                style={{
                  backgroundColor:
                    offer === 'Social'
                      ? 'rgba(0, 0, 0, 0)'
                      : 'rgba(255, 255, 255, 0.3)',
                }}
              />
              <div>
                <h4 className='offer-picker-title'>Proyectos</h4>
                <h4 className='offer-picker-subtitle'>Sociales</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffersPicker;
