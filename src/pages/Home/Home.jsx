import React from 'react'
import './Home.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import Link from '../../components/Link/Link.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import SectionBreafDescription from '../../components/SectionBreafDescription/SectionBreafDescription.jsx'
import SectionOurProjects from '../../components/SectionOurProjects/SectionOurProjects.jsx'

const Home = () => {
  return (
    <div> 
      <header className='home-header'>
        <ProjectSlider navBar={<Nav/>} font_size={'100px'}/> 
      </header>
      <main className='home-main'>
        <SectionBreafDescription/>
        <SectionOurProjects/>
      </main>
      
      
    </div>
  )
}

export default Home