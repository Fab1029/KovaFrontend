import React from 'react';
import './Loading.css';
import logo from '../../assets/Loading/Logo.png'

const Loading = () => {
  return (
    <div className='loading-container'>
      <img className='loading-kova-img' src={logo}/>
      
    </div>
    
  );
}

export default Loading;
