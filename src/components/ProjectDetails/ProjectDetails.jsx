import React from 'react'
import './ProjectDetails.css'

const ProjectDetails = ({project}) => {
    const projectRender = project.render;
  return (
    <div data-aos = 'zoom-in' className='project-details-container' style={{backgroundImage: `url(${projectRender})`}}>
        
        <div className='project-details-left-container'>
            <h2 data-aos = 'fade-right' data-aos-duration = '500' className='project-details-title'>{project.title.split(' ')[0]}</h2>
            <h2 data-aos = 'fade-right' data-aos-duration = '500' className='project-details-subtitle'>{project.title.split(' ')[1]}</h2>
        </div>

        <div data-aos = 'slide-left' data-aos-duration = '500' className='project-details-right-container'>
            <div className='project-details'>
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

    </div>
  )
}

export default ProjectDetails