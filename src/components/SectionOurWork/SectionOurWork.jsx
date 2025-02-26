import React from 'react'
import './SectionOurWork.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionOurWork = () => {
    
    const gallery = [
        {title: 'titulo', description: '', img: '/assets/galleryImage.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage4.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage2.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage3.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage4.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage2.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage3.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage4.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage2.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage3.jpg'},
        {title: 'titulo', description: '', img: '/assets/galleryImage.jpg'}
    ]

    return (
        <div className='section-ourWork'>
            <SectionTitle title={'Nuestro'} subtitle={'Trabajo'}/>

            <ul className='section-ourWork-gallery'>
                {gallery.map((image, index) => (
                    <li key={index} className='section-ourWork-gallery-element'>
                        <img className='section-ourWork-image' src={image.img}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default SectionOurWork