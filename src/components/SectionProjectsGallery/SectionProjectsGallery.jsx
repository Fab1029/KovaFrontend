import React from 'react'
import './SectionProjectsGallery.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionProjectsGallery = () => {
    const projects = [
        {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
        {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
        {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
        {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'}
    ];

    return (
        <div className='section-projectsGallery'>
            <SectionTitle title={'Nuestros'} subtitle={'proyectos'}/>
            <ul className='projectsGallery-list'>
                {projects.map((project, index) => (
                    <li key={index} className='projectsGallery-element'>
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