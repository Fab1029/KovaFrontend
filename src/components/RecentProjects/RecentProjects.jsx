import React, { useEffect, useState } from 'react'
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
                        <div>
                            <svg style={{width: '1rem'}} viewBox="0, 0, 400,400">
                                <g id="svgg">
                                    <path id="path0" d="M108.203 1.877 C 102.744 4.480,86.623 20.846,84.291 26.154 C 81.970 31.436,81.970 38.875,84.290 44.159 C 85.721 47.416,98.321 60.376,161.939 124.023 L 237.880 200.000 161.610 276.367 C 77.116 360.969,82.385 355.027,82.455 365.625 C 82.507 373.444,84.501 376.938,94.777 387.214 C 107.771 400.208,116.429 403.143,126.953 398.121 C 132.779 395.341,314.967 212.791,316.494 208.203 C 318.171 203.165,317.833 194.797,315.768 190.234 C 313.009 184.142,133.547 4.856,127.344 1.996 C 121.453 -0.719,113.751 -0.767,108.203 1.877" stroke="none" fill="#D9D9D9" fillRule="evenodd"></path>
                                </g>
                            </svg>
                        </div>
                        <h4>Ver mas</h4>
                    </button>
                </li>
            ))}
            
        </ul>

    </div>
  )
}

export default RecentProjects