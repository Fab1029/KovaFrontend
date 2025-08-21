import React from 'react'
import './Offers.css'
import offers from '../../assets/Offers/offers.jpg'
import proyectoSocial from '../../assets/Offers/proyectoSocial.jpg'
import proyectoComercial from '../../assets/Offers/proyectoComercial.jpg'
import proyectoResidencial from '../../assets/Offers/proyectoResidencial.jpg'

import { Link, useNavigate } from 'react-router-dom'


const Offers = () => {
  const navigate = useNavigate();

  return (
    <div className='offers-container'>
        <div data-aos='slide-right' className='offers-image-container'>
            <img src={offers} alt='general-image-offers' loading='lazy'/>
        </div>
        
        <div className='offers-right-container'>
            <h2 data-aos='fade-left' data-aos-delay='200' className='offers-description'>Diseñamos espacios únicos y funcionales, combinando creatividad, innovación y sostenibilidad para cada proyecto</h2>
            <ul className='types-offers-container'>
                <li data-aos='fade-down' key={'proyecto-comercial'} onClick={() => navigate('/ProjectsGallery?type=Comercial')}>
                    
                    <button className='open-item-button'>
                        <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>
                    </button>

                    <div className='types-offers-title-container'>
                        <h4 className='types-offers-title'>Proyectos</h4>
                        <h4 className='types-offers-subtitle'>Comerciales</h4>
                    </div>

                    <img src={proyectoComercial} alt='comercial-project' loading='lazy'/>
                    <div className="offers-overlay"/>
                </li>
                <li data-aos='fade-up' className='types-offers-item' key={'proyecto-residencial'} onClick={() => navigate('/ProjectsGallery?type=Residencial')}>
                    <button className='open-item-button'>
                        <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>
                    </button>
                    <div className='types-offers-title-container'>
                        <h4 className='types-offers-title'>Proyectos</h4>
                        <h4 className='types-offers-subtitle'>Residenciales</h4>
                    </div>

                    <img src={proyectoResidencial} alt='residential-project' loading='lazy'/>
                    <div className="offers-overlay"/>
          
                </li>
                <li data-aos='fade-down' key={'proyecto-social'} onClick={() => navigate('/ProjectsGallery?type=Social')}>
                    <button className='open-item-button'>
                        <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>
                    </button>
                    <div className='types-offers-title-container'>
                        <h4 className='types-offers-title'>Proyectos</h4>
                        <h4 className='types-offers-subtitle'>Sociales</h4>
                    </div>

                    <img src={proyectoSocial} alt='social-project' loading='lazy'/>                    
                    <div className="offers-overlay"/>

                </li>
            </ul>
        </div>

    </div>
  )
}

export default Offers