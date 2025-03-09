import React from 'react'
import './SectionProjectsGallery.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { useNavigate } from 'react-router-dom'

const SectionProjectsGallery = ({projects}) => {
    const navigate = useNavigate();
    
    const handleProjectClick = (id) => {
        navigate(`/ProjectsGallery/${id}`)
    };

    return (
        <div key={''} className='section-projectsGallery'>
            <SectionTitle title={'Nuestros'} subtitle={'proyectos'}/>
            <ul className='projectsGallery-list'>
                {projects.map((project, index) => (
                    <li key={index} className='projectsGallery-element' onClick={() => handleProjectClick(project.id)}>
                        <img className='projectsGallery-element-image' src={project.render}/>
                        <div className='projectsGallery-element-title'>
                            <h1 className='projectsGallery-element-title-title'>{project.title}</h1>
                            <h1 className='projectsGallery-element-title-subtitle'>{project.subTitle}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
  )
}

export default SectionProjectsGallery