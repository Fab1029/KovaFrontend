import React from 'react'
import './Home.css'
import '../../utils/css/Animation.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import SectionBreafDescription from '../../components/SectionBreafDescription/SectionBreafDescription.jsx'
import SectionOurProjects from '../../components/SectionOurProjects/SectionOurProjects.jsx'
import SectionOurFurniture from '../../components/SectionOurFurniture/SectionOurFurniture.jsx'
import SectionOurClients from '../../components/SectionOurClients/SectionOurClients.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  const projects = [
    {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
    {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
    {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage1.jpg'},
    {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage3.webp'},
    {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/headerImage2.png'},
  ]

  const furniture = [
    {title: '', subtitle: '', description: '', image: '/assets/furniture1.jpeg'},
    {title: '', subtitle: '', description: '', image: '/assets/furniture2.jpg'},
]

  return (
    <div> 
      <header className='home-header'>
        <ProjectSlider navBar={<Nav/>} projects={projects} font_size={'100px'}/> 
      </header>
      <main className='home-main'>
        <SectionBreafDescription/>
        <SectionOurProjects projects={projects}/>
        <SectionOurFurniture projects={furniture}/>
        <SectionOurClients/>
      </main>
      <footer className='home-footer'>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home