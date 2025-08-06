import React from 'react'
import './PhotosGallery.css'
import photo1 from '../../assets/PhotosGallery/1.jpg'
import photo2 from '../../assets/PhotosGallery/2.jpg'
import photo3 from '../../assets/PhotosGallery/3.jpg'
import photo4 from '../../assets/PhotosGallery/4.jpg'


const PhotosGallery = () => {
  return (
    <div className='photos-galley-container'>
        
        <div className='main-photo-container'>
            <img data-aos = 'fade-up' data-aos-duration = '650' className='photo-element' src={photo1}/>
        </div>

        <div className='body-photos-container'>
            
            <div className='body-left-container'>
                <img data-aos = 'slide-right'  data-aos-duration = '650' className='photo-element' src={photo2}/>
            </div>

            <div className='body-right-container'>
                <img data-aos = 'slide-left' data-aos-duration = '600' className='photo-element' src={photo3}/>
                <img data-aos = 'slide-left' className='photo-element' src={photo4}/>
            </div>
            
        </div>

    </div>
  )
}

export default PhotosGallery