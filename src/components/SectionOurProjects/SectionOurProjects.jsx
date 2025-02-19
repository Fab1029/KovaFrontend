import React from 'react'
import './SectionOurProjects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import Link from '../Link/Link'


const SectionOurProjects = () => {
  return (
    <div className='section-our-projects'>
        <SectionTitle title={'Nuestros'} subtitle={'Proyectos'}/>
        <div className='section-our-projects-container'>
            <ProjectSlider navBar={''} viewMore={''}/>
            <div>
                <p>sasasaa</p>
                <Link />
            </div>
        </div>

    </div>
  )
}

export default SectionOurProjects