import React from 'react'
import './SectionOurWork.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionOurWork = ({workingImages}) => {
    

    return (
        <div className='section-ourWork'>
            <SectionTitle title={'Nuestro'} subtitle={'Trabajo'}/>

            <ul className='section-ourWork-gallery'>
                {workingImages.map((image, index) => (
                    <li key={index} className='section-ourWork-gallery-element'>
                        <img className='section-ourWork-image' src={image}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default SectionOurWork