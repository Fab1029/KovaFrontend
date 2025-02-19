import React from 'react'
import './SectionOurProjects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import Link from '../Link/Link'


const SectionOurProjects = () => {
  const projects = [
    {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
    {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage3.jpg'},
    {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
  ]

  return (
    <div className='section-our-projects'>
        <SectionTitle title={'Nuestros'} subtitle={'Proyectos'}/>
        <div className='section-our-projects-container'>
            <div className='section-our-projects-slider'><ProjectSlider navBar={''} projects={projects} font_size={'60px'}/></div> 
            <div className='section-our-projects-description'>
                <p className='section-our-projects-description-text'>
                  A long established fact 
                  that a reader will be distracted by
                  hen loo The point of  using Lorem Ipsum is 
                  o usinere, aking it  look like readable English.
                </p>
                <Link prompt={'Ver datalles'} color={'#5B8095'}/>
            </div>
        </div>
        <Link prompt={'Ver más'} color={'#5B8095'}/>
    </div>
  )
}

export default SectionOurProjects