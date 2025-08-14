import React, { useEffect, useState } from 'react'
import './RecentProjects.css'
import { useNavigate } from 'react-router-dom'

const RecentProjects = ({projects}) => { 
  const navigate = useNavigate(null);

  const handleOnClickProject = (id) => {
    navigate(`/ProjectsGallery/${id}`)
  } 

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
            className='recent-projects-list'
            data-aos="slide-left" 
            data-aos-duration="800"
        >
            {projects.map((project, index) => (
                <li key = {index} className='recent-project-item-container'>
                    
                    <button className='down-button-recent-projects'>
                        <svg style={{width: '1.3rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#ffffff"/> </g>
                        </svg>
                    </button>

                    <img src={project.render} className='recent-project-image-top'/>
                    <div className='recent-project-image-container'>
                        <img src={project.render} className='recent-project-image'/>
                    </div>
                    
                    <div className='recent-project-right-container'>
                        <div className='recent-project-title-container'>
                            <h1 className='recent-project-title-title'>
                                {project.title.split(' ')[0]}
                            </h1>
                            <h1 className='recent-project-title-subtitle'>
                                {project.title.split(' ')[1]}
                            </h1>
                        </div>
                        <p>{project.description}</p>
                        <button className='recent-project-button' onClick={() => handleOnClickProject(project.id)}>
                            <div>
                                <svg style={{width: '1.5rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                </svg>
                            </div>
                            <h4>Ver mas</h4>
                        </button>

                    </div>
                    
                </li>
            ))}
            
        </ul>

        <ul className='carrusel-projects' data-aos="slide-left" data-aos-duration="800">
            {projects.map((project, index) => (
                <li className='carrusel-project-item' key = {index}>
                    <img src={project.render}/>
                    <div className='header-carrusel-item-container'/>
                    <div className='title-project-carrusel-container'>
                        <h1 className='title-project-carrusel-title'>
                            {project.title.split(' ')[0]}
                        </h1>
                        <h1 className='title-project-carrusel-subtitle'>
                            {project.title.split(' ')[1]}
                        </h1>
                    </div>
                    <div className='carrusel-button-container'>
                        <button className='recent-project-button-carrusel' onClick={() => handleOnClickProject(project.id)}>
                            <svg style={{width: '1.2rem'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                            </svg>
                            <h4>Ver mas</h4>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        

    </div>
  )
}

export default RecentProjects