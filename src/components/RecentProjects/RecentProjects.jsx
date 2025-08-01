import React, { useState } from 'react'
import './RecentProjects.css'

const RecentProjects = ({projects}) => {

  return (
    <div className='recent-projects-container'>
        <div data-aos='zoom-in' data-aos-delay="100" data-aos-duration="800">
            <h1 className='recent-project-title'>
                Proyectos
            </h1>
            <h1 className='recent-project-subtitle'>
                Recientes
            </h1>
        </div>
        <ul
            data-aos="fade-up"
            data-aos-delay='200' 
            data-aos-duration="800"
        >
            {projects.map((project, index) => (
                <li key = {index} className='recent-project-item-container'>
                    <img src={project.render} className='recent-project-image-top'/>
                    <div className='recent-project-image-container'>
                        <img src={project.render} className='recent-project-image'/>
                    </div>
                    
                    <div className='recent-project-title-container'>
                        <h1 className='recent-project-title-title'>
                            {project.title.split(' ')[0]}
                        </h1>
                        <h1 className='recent-project-title-subtitle'>
                            {project.title.split(' ')[1]}
                        </h1>
                    </div>
                    <p>{project.description}</p>
                    <button className='recent-project-button'>
                        <div></div>
                        <h4>Ver mas</h4>
                    </button>
                </li>
            ))}
            
        </ul>

    </div>
  )
}

export default RecentProjects