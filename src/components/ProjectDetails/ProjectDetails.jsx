import React from 'react'
import './ProjectDetails.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const ProjectDetails = ({project}) => {

  return (
    <div data-aos = 'zoom-in' className='project-details-container'>
        
        <div className='project-details-left-container'>
            
            <div>
                <h2 data-aos = 'slide-right' data-aos-duration = '600' className='project-details-title'>{project.title}</h2>
                <h2 data-aos = 'slide-right' data-aos-duration = '600' className='project-details-subtitle'>{project.subtitle}</h2>
            </div>
            

            <div data-aos = 'slide-up' data-aos-duration = '700' className='project-details'>
                <p className='project-details-description'>{project.description}</p>

                <div className='project-detail-item'>
                    <h4 className='project-detail-item-title'>Año</h4>
                    <p className='project-detail-item-description'>{project.year}</p>
                </div>

                <div className='project-detail-item'>
                    <h4 className='project-detail-item-title'>Locación</h4>
                    <p className='project-detail-item-description'>{project.location}</p>
                </div>
                
            </div>

        </div>

        <div data-aos = 'slide-up' data-aos-duration = '700' className='project-details-right-container'>
            <VideoPlayer video={project.video} loopMode={true}/>
        </div>

    </div>
  )
}

export default ProjectDetails