import React from 'react'
import './InfoCard.css'


const InfoCard = ({title, subtitle, description, image}) => {
  return (
    <div className='info-card'>
        {image}
        <h1 className='info-card-title'>{title}</h1>
        <h1 className='info-card-subtitle'>{subtitle}</h1>
        <p className='info-card-description'>{description}</p>
        
    </div>
  )
}

export default InfoCard;


