import React from 'react'
import './PhotosGallery.css'
import photo1 from '../../assets/PhotosGallery/1.webp'
import photo2 from '../../assets/PhotosGallery/2.webp'
import photo3 from '../../assets/PhotosGallery/3.webp'
import photo4 from '../../assets/PhotosGallery/4.webp'


const PhotosGallery = () => {
  return (
    <div className='photos-galley-container'>
        
        <div className='main-photo-container'>
            <img src={photo1} alt='gallery-1' loading='lazy' data-aos = 'fade-up' data-aos-duration = '650' className='photo-element'/>
        </div>

        <div className='body-photos-container'>
            
            <div className='body-left-container'>
                <img src={photo2} alt='gallery-2' loading='lazy' data-aos = 'slide-right'  data-aos-duration = '650' className='photo-element'/>
            </div>

            <div className='body-right-container'>
                <img src={photo3} alt='gallery-3' loading='lazy' data-aos = 'slide-left' data-aos-duration = '600' className='photo-element'/>
                <img src={photo4} alt='gallery-4' loading='lazy' data-aos = 'slide-up' className='photo-element'/>
            </div>
            
        </div>

    </div>
  )
}

export default PhotosGallery