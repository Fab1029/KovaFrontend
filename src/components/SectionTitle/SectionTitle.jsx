import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className='section-title'>
        <div className='title-container'>
            <div>
                <h1 className='section-title-title'>{title}</h1>
                <h1 className='section-title-subtitle'>{subtitle}</h1>
            </div>
            <svg viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M194.125 168.048 L 34.625 328.069 34.562 168.160 L 34.500 8.250 20.750 8.250 L 7.000 8.250 7.000 201.185 L 7.000 394.121 12.313 388.853 C 23.505 377.755,156.229 245.814,167.898 234.186 L 180.171 221.956 266.886 307.916 L 353.602 393.875 373.084 393.939 L 392.566 394.003 389.234 390.564 C 387.402 388.673,344.271 345.419,293.389 294.445 C 242.506 243.471,200.875 201.672,200.875 201.557 C 200.875 201.443,242.770 159.112,293.976 107.488 C 345.181 55.863,388.323 12.359,389.847 10.813 L 392.617 8.000 373.121 8.013 L 353.625 8.026 194.125 168.048 M175.000 327.392 C 163.554 330.385,159.682 344.789,168.057 353.223 C 174.877 360.091,186.566 358.952,191.956 350.893 C 199.808 339.153,188.732 323.802,175.000 327.392 " stroke="none" fill="#253646" fill-rule="evenodd"></path></g></svg>
        </div>
        
        <div className='divider-section-title'></div>
    </div>
  )
}

export default SectionTitle