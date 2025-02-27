import React from 'react'
import './Project.css'
import '../../utils/css/Animation.css'
import Nav from '../../components/Nav/Nav'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import SectionProject from '../../components/SectionProject/SectionProject'

const Project = () => {
    const {projectId} = useParams()

    return (
        <div> 
          <header className='project-header'>
            <Nav/>
          </header>
          <main className='project-main'>
            <SectionProject projectId={projectId}/>
          </main>
          <footer className='project-footer'>
            <Footer/>
          </footer>
            
        </div>
      )
}

export default Project