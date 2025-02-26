import React from 'react'
import './ProjectsGallery.css'
import '../../utils/css/Animation.css'
import Nav from '../../components/Nav/Nav'
import SectionProjectsGallery from '../../components/SectionProjectsGallery/SectionProjectsGallery'
import Footer from '../../components/Footer/Footer'

const ProjectsGallery = () => {
  return (
    <div>
        <header className='projectsGallery-header'>
            <Nav/>
        </header>
        <main className='projectsGallery-main'>
            <SectionProjectsGallery/>
        </main>
        <footer className='projectsGallery-footer'>
            <Footer />
        </footer>
    </div>
  )
}

export default ProjectsGallery