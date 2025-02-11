import React, { useState } from 'react'
import './Slider.css'

const Slider = ({padding_size, margin_size}) => {
  const points = []
  const max_slider_points = 5;
  const [indexPoint, setIndexPoint] = useState(0)

  const handleClick = (index) => {
    setIndexPoint(index)
  }

  for(let i = 0; i < max_slider_points; i++) {
    points.push(
      <li 
        key={i} className='slider-point' onClick={() => handleClick(i)} 
        style={
          {
            margin: margin_size,
            padding: padding_size, 
            borderRadius: padding_size, 
            backgroundColor: i === indexPoint ? 'white' : '#D9D9D9'
          }
        }
      />
    )
  }

  return (
    
    <ul className='slider'>
      {points}
    </ul>
    
  )
}

export default Slider