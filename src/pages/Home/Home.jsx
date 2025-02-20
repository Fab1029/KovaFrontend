import React from 'react'
import './Home.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import SectionBreafDescription from '../../components/SectionBreafDescription/SectionBreafDescription.jsx'
import SectionOurProjects from '../../components/SectionOurProjects/SectionOurProjects.jsx'
import SectionOurFurniture from '../../components/SectionOurFurniture/SectionOurFurniture.jsx'
import SectionOurClients from '../../components/SectionOurClients/SectionOurClients.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  const projects = [
    {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
    {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage3.jpg'},
    {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
  ]

  return (
    <div> 
      <header className='home-header'>
        <ProjectSlider navBar={<Nav/>} projects={projects} font_size={'100px'}/> 
      </header>
      <main className='home-main'>
        <SectionBreafDescription/>
        <SectionOurProjects/>
        <SectionOurFurniture/>
        <SectionOurClients/>
      </main>
      <footer className='home-footer'>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home