import React from 'react'
import './Phrase.css'
import phraseImage from '../../assets/Phrase/phraseImage.jpg'

const Phrase = () => {
  return (
    <div className='phrase-container'>
        <div data-aos = 'slide-right' className='phrase-blur-container'>
            <div className='phrase-child-container'>
                <div data-aos ='zoom-in' data-aos-delay = '100'>
                    <svg style={{width: '3rem'}} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" transform="matrix(-1, 0, 0, -1, 0, 0)" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389 c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"/> <path class="st0" d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389 C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"/> </g> </g>
                    </svg>
                </div>
                
                <p data-aos='zoom-in-up' className='phrase'>
                    Diseñamos espacios que equilibran estética, funcionalidad y emoción, transformando ideas en arquitectura atemporal
                </p>

                <div data-aos ='zoom-in' className='quote-left-container'>
                    <svg style={{width: '3rem'}} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389 c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"/> <path class="st0" d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389 C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"/> </g> </g>
                    </svg>
                </div>
                
            </div>
            
        </div>
        <img data-aos = 'fade-up' data-aos-delay = '450' className='phrase-image' src={phraseImage}></img>
    </div>
  )
}

export default Phrase