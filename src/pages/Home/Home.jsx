import React from 'react'
import './Home.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import Link from '../../components/Link/Link.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import SectionBreafDescription from '../../components/SectionBreafDescription/SectionBreafDescription.jsx'

const Home = () => {
  return (
    <div> 
      <header className='home-header'>
        <ProjectSlider navBar={<Nav />} viewMore={<Link prompt={'Ver mas'} color={'white'}/>}/> 
      </header>
      <main className='home-main'>
        <SectionBreafDescription/>
      </main>
      
      
    </div>
  )
}

export default Home