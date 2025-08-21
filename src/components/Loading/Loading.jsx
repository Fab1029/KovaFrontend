import React from 'react';
import './Loading.css';
import logo from '../../assets/Loading/Logo.png'

const Loading = () => {
  return (
    <div className='loading-container'>
      <img src={logo} alt='logo' className='loading-kova-img' loading='lazy'/>
      
    </div>
    
  );
}

export default Loading;
