import React from 'react'
import './Link.css'

const Link = ({prompt, color}) => {
  return (
    <a className='link'>
        <p style={{
            color: color
        }}>{prompt}</p>
        <div style={{backgroundColor: color}}/>
    </a>
    
  )
}

export default Link