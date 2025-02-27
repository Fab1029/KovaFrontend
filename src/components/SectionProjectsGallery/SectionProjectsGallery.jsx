import React from 'react'
import './SectionProjectsGallery.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { useNavigate } from 'react-router-dom'

const SectionProjectsGallery = () => {
    const navigate = useNavigate()

    const projects = [
        {id: 1, title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 2, title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 3, title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {id: 4, title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 5, title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 6, title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 7, title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 8, title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {id: 9, title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 10, title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 11, title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 12, title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 13, title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {id: 14, title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {id: 15, title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {id: 16, title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'}
    ]

    const handleProjectClick = (id) => {
        navigate(`/ProjectsGallery/${id}`)
    }

    return (
        <div className='section-projectsGallery'>
            <SectionTitle title={'Nuestros'} subtitle={'proyectos'}/>
            <ul className='projectsGallery-list'>
                {projects.map((project, index) => (
                    <li key={index} className='projectsGallery-element' onClick={() => handleProjectClick(project.id)}>
                        <img className='projectsGallery-element-image' src={project.image}/>
                        <div className='projectsGallery-element-title'>
                            <h1 className='projectsGallery-element-title-title'>{project.title}</h1>
                            <h1 className='projectsGallery-element-title-subtitle'>{project.subtitle}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default SectionProjectsGallery