import React from 'react'
import { Link } from "react-router-dom";
import './StyledLink.css'


const StyledLink = ({prompt, color, link}) => {
  
  return (
    <Link to={link} className='link'>
        <p style={{
            color: color
        }}>{prompt}</p>
        <div style={{backgroundColor: color}}/>
    </Link>
    
  )
}

export default StyledLink