import React from 'react'
import ProjectSlider from '../components/ProjectSlider/ProjectSlider.jsx'
import Link from '../components/Link/Link.jsx'
import Nav from '../components/Nav/Nav.jsx'

const Home = () => {
  return (
    <div> 
      <header>
        <ProjectSlider navBar={<Nav />} viewMore={<Link prompt={'Ver mas'} color={'white'}/>}/> 
      </header>
      
      
    </div>
  )
}

export default Home